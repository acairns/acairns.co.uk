---
slug: '!accidental-intent-cancelling'
title: 'Accidental Intent Cancelling'
date: '2022-09-20'
tags:
  - cqrs
  - crud
  - ddd
---

When we make a request to a REST API, there are a set of HTTP verbs the client can use in order to describe the action it wants the server to take. For example, we can use the `GET` verb to express we want a resource returned to us. Other verbs such as `PUT`, `POST`, `PATCH` and `DELETE` describe how we want data to change.

Imagine we wish to update our email address within our profile. We may make the following request:

```http
PATCH /profile
{
    email: 'andrew@acairns.co.uk'
}
```

In this example, it's quite clear what the request from the client is: update the email address.

But what about:
```http
PATCH /profile
{
    email_id: 'abc123'
}
```

Oh, what's going on here?

We have a profile - that's the main resource. We're making a `PATCH` request and can assume we're making a partial update. We're setting the value of `email_id` - perhaps this is a system allowing multiple email addresses and we're selecting the new primary email address?

Let's continue with our example:

```http
DELETE: /profile/emails/abc123
```

This is an easy one - we're removing one of our email addresses. Right?

Actually, depending upon the process orchestrating our API, anything could be happening - we have no idea! This is because we are processing data, not behaviour.

In the first example, we had a new `email` value being passed to us - but there is no way of us knowing if this was happening because the user was updating their email address, or potentially choosing from a pre-existing validated email address.

In the second example, we have a new `email_id` being passed, which could hint to a previously existing email address being selected. But again, we have no idea why this is happening. This could be a process orchestrating the removal of email addresses and, as a result, selecting a new default.

The final example may initially look less ambiguous - we are clearly removing an email address. Or are we? Could we be archiving the email address? Are we pruning duplicates? Perhaps we have a process fixing a bug and revoking email addresses using an invalid tld? Or revoking email addresses which haven't been verified within a 30 day period?

We simply do not know. We're guessing.


## Assumptions

Unfortunately, we are forced into guessing the behaviour of the user within these examples. The true intent has been lost. We know _what_ the data change looks like, but we do not know _why_. In our example, we know they want to make some change to their email address on their profile - but that's it.

This is a common symptom of RESTful API design. Instead of issuing a command to an application to perform a behaviour - a client will make a request to describe the specific change to the data it wants to see happen. 

This is not an article arguing against using REST, or urging you to change how you design your APIs. In fact, many other patterns (such as CDC) introduce similar constraints.

The problem I see is: we adopt this trade-off accidentally.

In our examples, we have a REST API where we are "representing state transfer". And, by design, a client is describing the state change required and not behaviour. And this is perfectly fine. Domains without significant complexity may have no reason to expose a more complex interface or model behaviour.

However, if you have significant complexity, it may be advantageous to issue instructions instead of state change.


## Avoid Accidental Intent Cancelling by Capturing Intent

An alternative approach is to issue a command to the application to give it something to do. Instead of describing the state which needs changed, instruct it to perform an action.

With this approach, we capture the intent of the user. We know the user wishes to `SetPrimaryEmail` or `ArchiveTemporaryEmail`. No longer does the client know any specifics on how this will be achieved - it simply tells the application to do something and leaves the application to handle the details.

The client would still make an HTTP request to the application. However, unlike our previous examples, the request will now describe the task to complete along with any required data:
```
POST /profile
{
  command: 'SetPrimaryEmail',
  data: {
    email_id: 'abc123'
  }
}
```

Note: The examples are exactly that: examples. There are many ways to design API interfaces - and even more strong opinions.


## Complexity

I wanted to finish this post with a note on complexity. Eric Evan's DDD book was labeled _"tackling complexity in the heart of software"_ for a reason. Some domains are simply not complex enough, or critical enough to your business, to justify the additional complexity for patterns such as CQRS.

But I strongly believe trade-offs within the design of our software should be, as much as possible, a conscious decision. We should be aware that traditional relational database will introduce temporal coupling. We should be aware that Change Data Capture (CDC) will introduce schema coupling. We should be aware when we loose the original intent of the user.


# @TODOS











@todo mention the relationship with events, named in the past-tense, with `PrimaryEmailWasSet`

@todo avoid CRUD commands, such as `ChangeEmail`:\
> It is quite common for developers to learn about Commands and to very quickly start creating Commands using vocabulary familiar to them such as “ChangeAddress”, “CreateUser”, or “DeleteClass”. This should be avoided as a default. Instead a team should be focused on what the use case really is.
> Is it “ChangeAddress”? Is there a difference between “Correcting an Address” and “Relocating the Customer”? It likely will be if the domain in question is for a telephone company that sends the yellow pages to a customer when they move to a new location.
> Is it “CreateUser” or is it “RegisterUser”? “DeleteClass” or “DeregisterStudent”. This process in naming can lead to great amounts of domain insight. To begin defining Commands, the best place to begin is in defining use cases, as generally a Command and a use case align.
> It is also important to note that sometimes the only use case that exists for a portion of data is to “create”, “edit”, “update”, “change”, or “delete” it. All applications carry information that is simply supporting information. It is important though to not fall into the trap of mistaking places where there are use cases associated with intent for these CRUD only places.
> Commands as a concept are not difficult but are different for many developers. Many developers see the creation of the Commands as a lot of work. If the creation of Commands is a bottleneck in the workflow, many of the ideas being discussed are likely being applied in an incorrect location.