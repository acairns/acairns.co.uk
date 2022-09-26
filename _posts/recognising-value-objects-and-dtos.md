---
slug: 'recognising-value-objects-and-dtos'
title: 'Recognising Value Objects and DTOs'
description: 'Is it possible to recognise an object as a Value Object or DTO?'
date: '2022-09-25'
tags:
  - dto
  - vo
  - ddd
---

An interesting [article from Matthias Noback](https://matthiasnoback.nl/2022/09/is-it-a-dto-or-a-value-object/) sparked discussion I was involved in recently regarding the differences between Value Objects and DTOs and if it were possible to recognise them from the class definition. And, if so, what aspects help us identify them the most?

Can we identify a Value Object or a DTO from the class definition?

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

<img src='/posts/IMG_3982.jpeg' alt='PoEAA' class="shadow-md rounded-xl -rotate-2" />

<figure>
    <blockquote>
        <p>An object that carries data between processes in order to reduce the number of method calls.</p>
    </blockquote>
    <figcaption class='text-right'>
        <cite>
            Patterns of Enterprise Application Architecture
        </cite>
        - Martin Fowler
    </figcaption>
</figure>



This sounds like we should gain clues about this object being a DTO or a Value Object based on its usage. If data is being transferred - perhaps we have a DTO?

But, before we venture outside the class, are there any ways to tell from the class itself?


### Commands

One common type of DTO is a Command - an object, named imperatively to describe an action, is used to provided as an instructon to your application. For example `TransferMoney` could provide all the information required to transfer money from one place to another.

```php
$command = new TransferMoney(10, 'GBP');
$commandBus->handle($command);
```

Is `TransferMoney` a DTO? Yes!

We can actually tell this is a Command from the name of the class. Additionally, we see above the object encapsulates all the data required to perform the behaviour and that it transports the data as it's passed into a `$commandBus`.


### Events

What about events?

These objects are named in the past-tense and describe an immutable fact which has happened within a system:

```php
$event = new MoneyWasSent(10, 'GBP');
$outbox->record($event);
```

Is the `MoneyWasSent` object a DTO? Yes!

Here we have an object representing a change within our system. It contains data relating to what changed and will be published (another way of saying "transferred") to any interested subscribers.

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

We've determined that `TransferMoney` and `MoneyWasSent` are DTOs. Naming helps reveal the object's intent to transfer data. But `Money` doesn't look to be a Command nor an Event. It's neither named imperatively to describe an action, or in the past-tense to represent a change.

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

Does this mean we have a Value Object? Unfortunately, I don't think so. Immutability, as much as it is a key principle when designing Value Objects, it is not unique to them. It's entirely possible to design a `DTO` to be immutable - for example, we could have a `TransferMoneyRequest` which, once it hits our system from the outside, we do not want its values to change.


## Intent

So far we've only looked inside (the limited) class definition to try to determine if `Money` is a DTO or a Value Object. We have struggled because DTOs and Value Objects can sometimes look very similar. We simply don't know enough about `Money` to determine what it is.

How could we reveal intent within the `Money` object to help our fellow engineers?

- Naming\
Perhaps the most useful tool we have as engineers is how we name things. When thinking about an example I could use for this article, which could be a Value Object or a DTO - I ensured name of class was intentionally vague. When we're naming our classes we should take the opportunity to reveal intent, if we can.

- Namespace\
I intentionally did not include a namespace as it makes it much simpler to determine if an object is a DTO or a Value Object. For example, you'll more likely find Value Objects within a _Domain_ layer. You'll also more likely find Commands within an _Application_ layer. Where your object is placed within your system helps reveal intent.

It's important to remember, we reach for Value Objects or DTOs for different reasons. Value Objects measure, quantify or describe something important within our domain. DTOs transfer data from one place to another - they don't contain business logic

If you are having trouble identifying if a class is a DTO or a Value Object, be sure to check how they are used on the outside - not just their definition. Their reason for existing. Their intent.


## Opinion

Many times articles have no choice than to explain tradeoffs and end articles with _"it depends"_. After all, there are no one-size-fits-all solution when it comes to building software. However, I thought I'd stick my neck out and share my opinion and why I reach that conclusion.

In my opinion, `Money` is a Value Object. Not a good one, though.

In terms of the naming, it looks to be more a _thing_ than a message. The object looks to be a concept within a domain which needs 2 pieces of information in order to make sense. In order to represent money, we need an amount and a currency.

To me, it looks to be a Value Object - but I wouldn't bet any `Money` on it... 🥁


## Conclusion

It can be difficult at times to identify the intent of an object. DTOs and Value Objects have clues, just like other types of objects. The key to identifying them is to first understand their intent and knowing what to look for.

DTOs can sometimes have natural linguistic characteristics which can help reveal intent through a naming convention - particularly for Commands (imperatively named) and Events (past-tense).

Value Objects describe something important within a domain. They represent a value, enforce domain constraints and are often found within a Domain layer.