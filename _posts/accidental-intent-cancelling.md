---
slug: 'accidental-intent-cancelling'
title: 'Accidental Intent Cancelling'
description: "In this article, I introduce a form of Accidental Complexity I've been referring to as Accidental Intent Cancelling."
date: '2022-10-19'
mesh: '/mesh/49. Soft Peach.jpg'
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

Intent has been lost.


## Accidental Compromises

This is a common trade-off made with a RESTful API design. Unlike with Remote Procedure Calls (RPC) which issues an instruction to an application to perform an action - a RESTful API client makes a request to describe the specific change to the data it wants to see happen.

This is not an article arguing against REST (or urging you to change how you design your APIs). In fact, many other patterns and technologies have a similar trade-off.

The problem I'm highlighting is: **too often intent is lost accidentally**.

Accidental Intent Cancelling may not become apparent until after significant development of a product or feature. Once clear intent is needed, it may require a non-trivial amount of refactoring and investment to regain.

RESTful APIs _"represent state transfer"_ by design. A client is describing the state change required and not behaviour. And this may be perfectly fine. Domains without significant complexity may have no reason to have a more complex interface allowing the process of behavour over data.

> [Most teams I meet have trouble with modeling behavior. They are more comfortable with modeling data.](https://twitter.com/yreynhout/status/1579750607992532993)

If your application has a sufficiant level of complexity, it may be best to _"lift the conversation from being data-centric to behavour-centric"_. Instead of state changing being determined from the outside, issue instructions to the application instead.


## Why Intent Is Needed

Let's use our example to explore the difference when modelling data over behaviour. Imagine we are presented with the following business requirement:

_"When a User updates their Address, perform Proof of Address screening."_

We recognise the need to trigger a process when something happens within our system. A new `ProfileAddressWasUpdated` event is published. Now, when this event happens, we start the Proof of Address screening process.

Everything is fine - until bugs are raised that Proof of Address screening is happening unexpectedly. We investigate and discover it happens when our support team make corrections to addresses using our own admin system.

Because our system is unaware of the original intent, we have no way to differentiate requests. We have a webapp, support admin, background processes and mobile clients all making the same request to update data for different reasons.

Greg Young described this as:
> The domain had become a glorified abstraction of the data model.

If only our system modelled behaviour - we wouldn't find ourselves in the situation where we need to refactor our client applications (or worse, introduce a hack) to determine which address change is relevant, and which is not!

## Feature Envy and Tell Don't Ask

We've explored what a data-centric approach may look like, and why the approach may not be desirable. A behaviour-centric approach, instead of describing the state to be changed, describes the action to be taken.

```
POST /profile
{
    command: 'UpdateBillingAddress',
    payload: {
        address: '123 The Street, Big City, AB1 2CD',
    }
}
```

Intent here is captured and sent to the application. We can now easily determine if we are handling an `UpdateBillingAddress` or `CorrectCustomerAddress` use case. Domain-specific events can be broadcasted and we will no longer have the unexpected behaviour from the previous example.

No longer do client applications know specifics about how a behaviour is achieved - it simply sends instructions the correct domain to perform the behaviour and trusts it to handle the details.

I recognise this as **Feature Envy**: an anti-pattern which describes a situation where _"the outside"_ requests internal information in order to perform behaviour.

By following **Tell Don't Ask**, our webapp; support admin; background processes and mobile applications no longer need to know the specifics of a behaviour. They don't need to know the data changes and domain rules do not need to be scattered across all applications.

Instead, behaviour is encapsulated within the domain. Clients can still make an HTTP request to an API. Unlike our previous example, the request will now issue a command containing essential information.

## Consider Intent

Engineers must evaluate trade-offs when making a decision. To make quality decisions, we need as much information as possible. Decision making improves with experience because we have more knowledge and understanding of potential trade-offs and compromises.

The next time you are faced with a decision - be mindful of the role intent plays within your system. Ensure, if you are cancelling intent, it's a concious trade-off. Otherwise, you may find yourself guessing what the original behaviour of the user was.

At least, consider modelling behaviour as an option.
