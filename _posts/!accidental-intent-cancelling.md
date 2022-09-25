---
slug: 'accidental-intent-cancelling'
title: 'Accidental Intent Cancelling'
date: '2022-09-20'
draft: true
---

When we make an API call to a REST API, we have a set of verbs in order to reveal the intent of the user. We can use `GET` to represent the request for a resource. Other verbs such as `PUT`, `POST` and `PATCH` can also describe mutations for the mutation of a resource.

Imagine we wish to update our email address within our profile. We may make the following request:
```http
PATCH /profile
{
    email: 'andrew@acairns.co.uk'
}
```

> The PATCH method requests that a set of changes described in the request entity be applied to the resource identified

@todo - get a proper quote from the standard about `PATCH`.

In this example, it's quite clear what the intent of the user is - they want to update their email address.

But what about:
```http
PATCH /profile
{
    email_id: 'abc123'
}
```

Oh, what's going on here?

We have a profile - that's the main resource. We're making a `PATCH` request and can assume we're making a partial update here. We're setting the `email_id` to an id - perhaps this is a system which allows you to provide multiple email addresses and we're selecting the primary email address?

Let's continue with our example:

```http
DELETE: /profile/emails/abc123
```

This is an easy one - we're removing one of our email addresses. Right?

Actually, depending upon the process orchistrating our API... anything could be happening. We have no idea. In the first example, we had a new `email` value being passed to us - but there is no way of us knowing if this was happening because the user was updating their email address, or potentially choosing from a pre-existing validated email address.

In the second example, we have a new `email_id` being passed, which could hint to a previously existing email address being selected. But again, we have no idea why this is happening. Again, this could be a process orchistrating the removal of email addresses and, as a result, selecting a new default.

The final example is less ambigious - we're clearly removing an email address. But why? Are we pruning duplicates? Removing email addresses which have an invalid tld? Or revoking email addresses which haven't been verified within a 30 day period?

## Assumptions

Because we have lost the true intent of the user, we're unfortunately forced into making assumptions. We know _what_ they want to change, but we no longer know _why_. In our example, we know they want to change their email address - but any possible reason has been lost.

This is a common symptom of RESTful API design. Instead of issuing a command to a system to perform a behaviour for us - we end up knowing too much about the internals and instruct specific pieces of state to be changed.

This is not an article arguing against using REST, or urging you to change how you design your APIs. In fact, other patterns (such as CDC) introduce similar constraints - but we often adopt them accidentally.

In our examples, we have a REST API where we are "representing state transfer". By design, we're trying to describe the state change required from the users behavior. 



@todo mention dropping https for http once we're inside a private network
@todo mention cdc broadcasts events based on state being changed
@todo mention how we adopt these tradeoffs before being aware of them - like how traditional relational databases tables have temporal coupling - and only show us "now"
