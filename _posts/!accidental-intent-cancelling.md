---
slug: '!accidental-intent-cancelling'
title: 'Accidental Intent Cancelling'
description: "In this article, I introduce a form of Accidental Complexity I've been referring to as Accidental Intent Cancelling."
date: '2022-10-10'
mesh: '/mesh/01. Royal Heath.jpg'
tags:
  - cqrs
  - crud
  - ddd
---

Building software demands engineers regularly evaluate trade-offs. We must research different potential solutions and choose the option we believe best suits our needs. Since we are all human it's reasonable to assume we will choose an approach which accidentally introduces unforceen challenges from time to time.

This is known as Accidental Complexity.

In this article, I'd like to introduce a form of Accidental Complexity I've been referring to as _Accidental Intent Cancelling_.

---

When a user interacts with our application, they are communicating intent. Imagine a profile screen which contains a form where your address could be updated. Once changes are made, a button labelled "update" can be clicked.

From this viewpoint - everything looks fine.

But if we zoom in, depending upon our choices, the intent of the user to update the address on their profile can be easily lost.

## Example of Intent Cancelling

Imagine we implement a RESTful API to process our example form and make the following request:

```http
PATCH /profile/123
{
    address: '123 The Street, Big City, AB1 2CD',
}
```

Do we still know the intent of the user?

We have a `PATCH` request for a Profile with an ID of `123`. The request contains a new value for `address`. It's clear the user wants to update the address on their profile, right?

No - that was a guess!

We know _what_, but we don't know _why_. Depending upon what is orchestrating the API, anything could be happening - we have no idea! It could be the user updating their address; it could be our customer support team fixing a typo; or it could be an automated update during a Proof of Address process.

We are processing data, not behaviour.

User intent is lost.


## Trade-Offs

This is a common trade-off which is made with RESTful API designs. Unlike with Remote Procedure Calls (RPC) which issues an instruction to an application to perform a behaviour - a RESTful API client makes a request to describe the specific change to the data it wants to see happen.

This is not an article arguing against REST (or urging you to change how you design your APIs). In fact, many other patterns and technologies have similar trade-offs.

The problem I'm highlighting is: **too often intent is lost accidentally**.

Accidental Intent Cancelling often doesn't become apparent until much later into the development of a product or feature. Once clear intent is needed, it may require a significant refactoring investment to regain it.

RESTful APIs _"represent state transfer"_ by design. A client is describing the state change required and not behaviour. And this may be perfectly fine. Domains without significant complexity may have no reason to have a more complex interface allowing the process of behavour over data.

> [Most teams I meet have trouble with modeling behavior. They are more comfortable with modeling data.](https://twitter.com/yreynhout/status/1579750607992532993)

If your application has a sufficiant level of complexity, it may be best to _"lift the conversation from being data-centric to behavour-centric"_. Instead of state changing being determined from the outside, issue instructions to the application instead.

## Tell Don't Ask

Command can be issued to the application telling it to perform a behaviour. Instead of describing the state which needs changed, it is instructed it perform an action.

With this approach, we capture the intent of the user. We know the user wishes to `UpdateBillingAddress` or `CorrectCustomerAddress`. No longer does the client need to know the specifics on how the behaviour is achieved - it simply instructs the application to do something and trusts it to handle the details.

The client can still make an HTTP request to an API. Unlike our previous example, the request will now issue a command complete with any required data:

```
POST /profile
{
  command: 'SetPrimaryEmail',
  data: {
    address: '123 The Street, Big City, AB1 2CD',
  }
}
```

## Why We Need Intent

@todo talk here about being unsure of the reason. If all we have is state change, all we can publish with events is `ProfileAddressWasUpdated`. Talk about the pain with CRUD events, maybe even circular references, etc.

@todo could even embed VV's recent tweet about these "yuck" events.

@todo talk about some type of separation. We may need different business processes if a support engineer is correcting a typo, or if a user is changing their address.



- Client makes data-centric calls to back-end
- Domain has no verbs
- Domain is glorified abstract of the data model
- No behaviours
  - Clients know the behaviour
  - Behaviour could be written on a piece of paper
  - Heads of the folk using the software


- Source of truth for behaviour
- Consistent, independent of what is calling
  - Console command
  - REST API
  - Tests
  - CRON job
  - Mobile app


- Retain intent by sending a message, not adata-centric request


- Build up a command
- UI may be different, Task-Based User Interface
- > Because the UI must build Command objects it needs to be designed in such a way that the user intent can be derived from the actions of the user.


Command
```php
final class MoveAddress
{
  public function __construct(
      public readonly ProfileId $profileId,
      public readonly Address $address,
  ) {
  }
}
```
Handler
```php
final class MoveAddressHandler
{
  public function handle(MoveAddress $command) {
    // domain logic
  }
}
```


Command
```php
final class CorrectAddress
{
  public function __construct(
      public readonly ProfileId $profileId,
      public readonly Address $address,
      public readonly UserId $adminId,
  ) {
  }
}
```
Handler
```php
final class CorrectAddressHandler
{
  public function handle(CorrectAddress $command) {
    // domain logic
  }
}
```

And now... events!


Imagine our application required Proof of Address for our customers. When the customer informs us they have moved address - we must ensure we have proof. However, it must be possible for our admins to correct simple typos within an address without triggering our Proof of Address processes.

`CustomerMovedAddress` could be emitted when it was a true change of address.

Otherwise, we could emit a `AddressWasCorrected` event.


===



Unfortunately, when the intent of the user has been lost, we are forced into guessing the original behaviour. We know _what_ the data change looks like, but we do not know _why_. In our example, we know a request has been made to change the address on a profile - but that's it.

### @TODOS



@todo avoid CRUD commands, such as `ChangeEmail`:\
> It is quite common for developers to learn about Commands and to very quickly start creating Commands using vocabulary familiar to them such as “ChangeAddress”, “CreateUser”, or “DeleteClass”. This should be avoided as a default. Instead a team should be focused on what the use case really is.
> Is it “ChangeAddress”? Is there a difference between “Correcting an Address” and “Relocating the Customer”? It likely will be if the domain in question is for a telephone company that sends the yellow pages to a customer when they move to a new location.
> Is it “CreateUser” or is it “RegisterUser”? “DeleteClass” or “DeregisterStudent”. This process in naming can lead to great amounts of domain insight. To begin defining Commands, the best place to begin is in defining use cases, as generally a Command and a use case align.
> It is also important to note that sometimes the only use case that exists for a portion of data is to “create”, “edit”, “update”, “change”, or “delete” it. All applications carry information that is simply supporting information. It is important though to not fall into the trap of mistaking places where there are use cases associated with intent for these CRUD only places.
> Commands as a concept are not difficult but are different for many developers. Many developers see the creation of the Commands as a lot of work. If the creation of Commands is a bottleneck in the workflow, many of the ideas being discussed are likely being applied in an incorrect location.