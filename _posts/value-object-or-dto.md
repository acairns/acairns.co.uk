---
draft: false
slug: 'value-object-or-dto'
title: 'Value Object or DTO?'
date: '2022-09-17'
---


An interesting [article from Matthias Noback](https://matthiasnoback.nl/2022/09/is-it-a-dto-or-a-value-object/) recently re-sparked a discussion between a few members of my team. And, for good measure, Kai Sassnowski ([@warsh33p](https://twitter.com/warsh33p)) then kicked-off Laracon Online 2022 with a talk on Value Objects.

Can we recognise objects as being a DTO or a Value Object?

Let's find out!

Is the following object a DTO or a Value Object?

```
final class Money {
    public function __construct(
		    public readonly int $amount,
		    public readonly string $currency,
    ) {
    }
}
```

Hmm - it's hard to tell, right? But, why is that?


## Data Transfer Objects

The purpose of a DTO is nicely described within the name - an object designed to transfer data from one place to another.

If this is true, we could gain clues about this object being a DTO or a Value Object from its usage. If data is being transferred - perhaps we have a DTO?


### Commands

A Command, named imperatively, describes the action the system needs to take. For example `SendMoney`. Commands are often used as a way for the outside to provide an instruction to your application.

For example:
```
$command = new SendMoney(10, 'GBP');
$commandBus->handle($command);
```

In this example, is `SendMoney` a DTO? Yes!

The object encapsulates all the required data in order to perform a behaviour. It is then sent across a boundary and into your application. The data is is transferred within an object.

Noice - as Kai would say!


### Events

What about an event?

These objects are named in the past-tense and describe an immutable fact which has happened within a system:

```
$event = new MoneyWasSent(10, 'GBP');
$outbox->record($event);
```

Is the `MoneyWasSent` object a DTO? Yes!

Here we have an object representing a change within our system. It contains data relating to the change and will be published (another way of saying "transferred") to any interested subscribers.

We have another DTO!

### Is Money a DTO?

Does this help us decide if `Money` is a DTO?

This was our original example:

```
final class Money {
    public function __construct(
		    public readonly int $amount,
		    public readonly string $currency,
    ) {
    }
}
```

We've determined that `SendMoney` and `MoneyWasSent` are DTOs. Naming helps reveal the objects intent to transfer data. But `Money` doesn't look to be a Command nor an Event. It's neither named imperatively to describe an action, or in the past-tense to represent a change.

Naming can help reveal intent. However, in the case of `Money`, there are no clues as to the object's intended use. We do not have enough information to determine if it's a DTO or a Value Object.


## Value Objects

The purpose of a Value Object is to represent a value important to the business. Typically, they will encapsulate constraints ensuring validity.

### Business Constraints

Imagine we have a business rule requiring `Amount` to be a positive value. We could enforce this constraint within the constructor of the Value Object:
```
final class Amount {
    public function __construct(
		    public readonly int $amount
    ) {
		    if ($amount < 0) {
				    throw new InvalidArgumentException();
		    }
    }
}
```

Now, when we try to `new Amount(-1)`, we will see the error:

```
PHP Fatal error:  Uncaught InvalidArgumentException
```

In this example, it's impossible for `Amount` to be created in an invalid state.


### Immutability

Another design requirement for Value Objects is immutability.

When we design a class to be immutable, internal state does not change. Instead, when this is required, we return a new instance of the object:

```
final class Amount {
    public function __construct(
		    public readonly int $amount
    ) {
    }

    public function double(): Amount
    {
        return new Amount($this->amount * 2);
    }
}

$one = new Amount(1);  // 1
$two = $amount->double(); // 2
```


### Is Money a Value Object?

Let us once again take a look at our `Money` object to see if we can determine if it's a Value Object:
```
final class Money {
    public function __construct(
		    public readonly int $amount,
		    public readonly string $currency,
    ) {
    }
}
```


The constructor of this object takes in an `int` and a `string`. Can we consider these strict enough to protect business rules? As we've seen above, an `int` could be `-1`, `0` or `10`. Strings could also be blank with `''` and, in this context, would be invalid if it didn't match a currency code. It depends on your business, but I'm going to say _no_.

Is `Money` immutable? Yes - perhaps this is our first clue this could be a Value Object! We can see both `$amount` and `$currency` are _readonly_ without any public methods which could mutate their state.

Does this mean we have a Value Object? Unfortunately, I don't think so. Immutability, as much as it is a key principle when designing Value Objects, is far from unique. It's entirely possible to design a `DTO` to be immutable - for example, we could have a `SendMoneyRequest` which, once it hits our system from the outside, we do not want to change.


## Intent

We don't know enough about `Money` to determine what it is used for. If trying to identify if an object is a Value Object or a DTO, we need to understand the role it plays within our system.

For Value Objects, they are intended to measure, quantify or describe something important within our domain. For DTOs, they are intended to transfer data from one place to another.

How can we add intent to the `Money` object to help our fellow engineers?

- Naming\
Perhaps the most useful tool at our disposal, as engineers, is how we name things. In order to create an example which could be a Value Object or a DTO, the name of class was intentionally vague. When we're naming our classes we should take the opportunity to reveal the intent, if we can.

- Namespace\
I intentionally did not include a namespace as it makes it much simpler to determine if an object is a DTO or a Value Object. For example, you'll more likely find Value Objects within a _Domain_ layer. You'll also more likely find Commands within an _Application_ layer.


## Gun to the head...

Many times articles have no choice than to explain tradeoffs and end articles with _"it depends"_. After all, there are no one-size-fits-all solutions. However, I thought I'd stick my neck out and share my opinion and why I reach that conclusion.

In my opinion, `Money` is a Value Object.

The object looks to be a concept without a domain which wouldn't make sense without a piece of information. In order to represent money, we need 2 pieces of information: the amount and a currency.

If anything, I'd expect a DTO to compose itself with values such as `Money` instead of 


## Conclusion

It can be difficult at times to identify the intent of an object. DTOs and Value Objects have clues, just like other types of objects. The key to identifying them is to first understand their intent and knowing what to look for.

DTOs can sometimes have natural linguistic characteristics which can help reveal intent through a naming convention - particularly for Commands (imperatively named) and Events (past-tense).

Value Objects describe something important within a domain. They represent a value, enforce domain constraints and are often found within a Domain layer.

What I've come to understand causes confusion is that, when data is transferred from one system to another - the data is often a collection of values. If you want to transfer a `User` from one system to another, it can be difficult to determine if this is a DTO or if this is a Value Object.

A DTO is a message which contains values.


## References

- [Is it a DTO or a Value Object?](https://matthiasnoback.nl/2022/09/is-it-a-dto-or-a-value-object/) Matthias Noback
- [@warsh33p](https://twitter.com/warsh33p) Kai Sassnowski


@@@TODO

"Other types of stuff" could be - messages.