---
slug: 'intro-to-change-data-capture'
title: 'Introduction to Change Data Capture'
date: '2022-09-20'
draft: true
---

Change Data Capture (CDC) is a low-level way of propagating state changes as a series of events.

It can do this via a few different ways:

- Querying the source for changes
- Triggers
- Log processing

When a change is detected within the source, an event is created representing the change and added to a stream. Subscribers can then consume events within the stream. They may choose to perform the same change, or interpret the event for their own context.


Many solutions exist to simplify the integration. It’s hard to talk about CDC without mentioning Debezium and Apache Kafka Connect.

## Debezium

@todo talk about Debezium

## Apache Kafka Connect

We can use Kafka Connect to consume the transaction log and produce events, which then land in a kafka event stream. Kafka Connect can also be used on the other side, consuming it’s own events, and translating them into the queries required to replicate the state change:


 
## CAP

Talk about Consistency, Availability and Partition Tolerance


## Tradeoffs

- Schema coupling
- Latency
- Consistency