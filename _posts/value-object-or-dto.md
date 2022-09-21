---
draft: false
slug: 'value-object-or-dto'
title: 'Value Object or DTO?'
description: 'Is it possible to recognise an object as a Value Object or DTO?'
date: '2022-09-17'
---

An interesting [article from Matthias Noback](https://matthiasnoback.nl/2022/09/is-it-a-dto-or-a-value-object/) sparked discussion within my team regarding the differences between Value Objects and DTOs. For good measure, [Kai Sassnowski](https://twitter.com/warsh33p) then kicked-off Laracon Online 2022 with a talk on Value Objects.

Before I could write up my thinking on his first article, Matthias published a related follow-up regarding [DateTimeImmutable being a primitive type](https://matthiasnoback.nl/2022/09/can-we-consider-datetimeimmutable-a-primitive-type/). Moments later [Andreas Möller](https://twitter.com/localheinz) posted about [his thinking regarding DateTimeImmutable](https://localheinz.com/blog/2022/09/20/enhancing-types/).

Is it possible to recognise an object as a Value Object or DTO?

Let's see:

```php
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

PoEAA describes a DTO as:
> An object that carries data between processes in order to reduce the number of method calls.

![PoEAA](/posts/IMG_3982.jpeg)

This sounds like we should gain clues about this object being a DTO or a Value Object based on its usage. If data is being transferred - perhaps we have a DTO?

But, before we venture outside of the class, are there any ways to tell from the class itself?


### Commands

A Command is named imperatively to describe an action within the system. For example `TransferMoney`. Commands are often used as a way for something outside a system to provide an instruction to your application.

```php
$command = new TransferMoney(10, 'GBP');
$commandBus->handle($command);
```

Is `TransferMoney` a DTO? Yes!

We can tell from the name of the class. When the object is transported, it'll encapsulate all the data required to perform the behaviour.

Noice - as Kai would say!


### Events

What about an event?

These objects are named in the past-tense and describe an immutable fact which has happened within a system:

```php
$event = new MoneyWasSent(10, 'GBP');
$outbox->record($event);
```

Is the `MoneyWasSent` object a DTO? Yes!

Here we have an object representing a change within our system. It contains data relating to the change and will be published (another way of saying "transferred") to any interested subscribers.

We have another DTO!

### Is Money a DTO?

Does this help us decide if `Money` is a DTO?

This was our original example:

```php
final class Money {
    public function __construct(
		    public readonly int $amount,
		    public readonly string $currency,
    ) {
    }
}
```

We've determined that `TransferMoney` and `MoneyWasSent` are DTOs. Naming helps reveal the objects intent to transfer data. But `Money` doesn't look to be a Command nor an Event. It's neither named imperatively to describe an action, or in the past-tense to represent a change.

Naming can help reveal intent. However, in the case of `Money`, there are no clues as to the object's intended use. We do not have enough information to determine this object is a DTO.


## Value Objects

The purpose of a Value Object is to represent a value important to the business. Typically, they will encapsulate constraints ensuring validity.

### Business Constraints

Imagine we have a business rule requiring `Amount` to be a positive value. We could enforce this constraint within the constructor of the Value Object:
```php
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

```php
PHP Fatal error:  Uncaught InvalidArgumentException
```

In this example, it's impossible for `Amount` to be created in an invalid state.


### Immutability

Another design requirement for Value Objects is immutability.

When we design a class to be immutable, internal state does not change. Instead, when a new value is computed, a new object will be created and returned:

```php
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
```php
final class Money {
    public function __construct(
		    public readonly int $amount,
		    public readonly string $currency,
    ) {
    }
}
```


The constructor of this object takes in an `int` and a `string`. Can we consider this typing enough to protect business rules?

As we discussed before, an `int` could be `-1`, `0` or `10`. Strings could also be blank with `''` and, by the looks of this context, would be invalid if it didn't match a currency code. It depends on your business, but I'm going to say _no_.

Is `Money` immutable? Yes - perhaps this is our first clue this could be a Value Object! We can see both `$amount` and `$currency` are _readonly_ without any public methods which could mutate their state.

Does this mean we have a Value Object? Unfortunately, I don't think so. Immutability, as much as it is a key principle when designing Value Objects, it is not unique to them. It's entirely possible to design a `DTO` to be immutable - for example, we could have a `TransferMoneyRequest` which, once it hits our system from the outside, we do not want it's values to change.


## Intent

So far we've only looked inside (the limited) class definition to try to determine if `Money` is a DTO or a Value Object. We have struggled because DTOs and Value Objects can sometimes look very similar. We simply don't know enough about `Money` to determine what it is.

How could we have revealed intent within the `Money` object to help our fellow engineers?

- Naming\
Perhaps the most useful tool we have as engineers is how we name things. When thinking about an example I could use for this article which could be a Value Object or a DTO - I ensured name of class was intentionally vague. When we're naming our classes we should take the opportunity to reveal intent, if we can.

- Namespace\
I intentionally did not include a namespace as it makes it much simpler to determine if an object is a DTO or a Value Object. For example, you'll more likely find Value Objects within a _Domain_ layer. You'll also more likely find Commands within an _Application_ layer. Where your object is placed within your system helps reveal intent.



The difference between them is how they are used on the outside. Their reason for existing. Their intent.

Value Objects measure, quantify or describe something important within our domain. DTOs transfer data from one place to another.






## Opinion

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
- [LocalDTO](https://martinfowler.com/bliki/LocalDTO.html) Martin Fowler


@@@TODO@@@

"Other types of stuff" could be - messages.

DTOs don't contain an business logic