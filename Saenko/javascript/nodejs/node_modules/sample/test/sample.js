"use strict";

var test = require("reducers/test/util/test")
var event = require("reducers/test/util/event")

var take = require("reducers/take")
var concat = require("reducers/concat")
var delay = require("reducers/delay")


var end = require("reducible/end")

var sample = require("../sample")

exports["test input ends sampled"]  = test(function(assert) {
  var stop = event()
  var input = event()
  var trigger = event()

  var sampled = sample(input, trigger)
  var actual = concat(sampled, stop)

  assert(actual, [3, 5, 5, 5], "trigger ends sample")

  input.send(1)
  input.send(2)
  input.send(3)
  trigger.send()
  input.send(4)
  input.send(5)
  trigger.send()
  trigger.send()
  trigger.send()
  input.send(6)
  input.send(end)

  assert.ok(input.isReduced, "input is reduced")
  assert.ok(!trigger.isReduced, "trigger is not reduced")

  input.send(6)
  trigger.send()

  assert.ok(trigger.isReduced, "trigger is reduced on next yield")

  trigger.send()
  trigger.send()
  input.send(7)
  stop.send(end)
})

exports["test trigger ends sampled"]  = test(function(assert) {
  var stop = event()
  var input = event()
  var trigger = event()

  var sampled = sample(input, trigger)
  var actual = concat(sampled, stop)

  assert(actual, [3, 5, 5], "input ends sample")

  input.send(1)
  input.send(2)
  input.send(3)
  trigger.send()
  input.send(4)
  input.send(5)
  trigger.send()
  trigger.send()
  trigger.send(end)

  assert.ok(trigger.isReduced, "trigger is reduced")
  assert.ok(!input.isReduced, "input is not reduced")

  input.send(6)

  assert.ok(input.isReduced, "input is reduced on next yield")

  input.send(7)
  stop.send(end)
})

exports["test trigger starts early"]  = test(function(assert) {
  var stop = event()
  var input = event()
  var trigger = event()

  var sampled = sample(input, trigger)
  var actual = concat(sampled, stop)

  assert(actual, [1, 3, 5, 5], "early trigger")

  trigger.send()
  trigger.send()
  trigger.send()
  input.send(1)
  input.send(2)
  input.send(3)
  trigger.send()
  input.send(4)
  input.send(5)
  trigger.send()
  trigger.send()
  trigger.send(end)

  assert.ok(trigger.isReduced, "trigger is reduced")
  assert.ok(!input.isReduced, "input is not reduced")

  input.send(6)

  assert.ok(input.isReduced, "input is reduced on next yield")

  input.send(7)
  stop.send(end)
})

exports["test stop reduction before end"] = test(function(assert) {
  var input = event()
  var trigger = event()
  var stop = event()

  var pairs = take(sample(input, trigger), 6)
  var actual = concat(pairs, stop)

  assert(actual, [2, 2, 3, 3, 4, 4], "either end ends coreduction")

  input.send(1)
  input.send(2)
  trigger.send()
  trigger.send()
  input.send(3)
  trigger.send()
  input.send(3)
  trigger.send()
  input.send(4)
  trigger.send()
  trigger.send()

  assert.ok(trigger.isReduced, "trigger is closed")
  assert.ok(!input.isReduced, "input is not reduced yet")

  input.send(5)

  assert.ok(input.isReduced, "input is reduced on next yield")

  trigger.send()
  input.send(6)
  trigger.send()
  stop.send(end)
})

exports["test error in trigger propagates"] = test(function(assert) {
  var boom = Error("Boom!!")

  var input = event()
  var trigger = event()

  var actual = delay(sample(input, trigger))

  assert(actual, {
    error: boom,
    values: [2, 2, 3, 3, 4, 4]
  }, "error propagate to reducer and stops reducibles")

  input.send(1)
  input.send(2)
  trigger.send()
  trigger.send()
  input.send(3)
  trigger.send()
  input.send(3)
  trigger.send()
  input.send(4)
  trigger.send()
  trigger.send()
  trigger.send(boom)

  assert.ok(trigger.isReduced, "trigger is closed or error")
  assert.ok(!input.isReduced, "input is not closed yet")

  input.send(5)

  assert.ok(input.isReduced, "input is reduced on next yield")

  trigger.send()
  input.send(6)
  trigger.send()
})

exports["test error in input propagates"] = test(function(assert) {
  var boom = Error("Boom!!")

  var input = event()
  var trigger = event()

  var actual = delay(sample(input, trigger))

  assert(actual, {
    error: boom,
    values: [2, 2, 3, 3, 4, 4]
  }, "error propagate to reducer and stops reducibles")

  input.send(1)
  input.send(2)
  trigger.send()
  trigger.send()
  input.send(3)
  trigger.send()
  input.send(3)
  trigger.send()
  input.send(4)
  trigger.send()
  trigger.send()
  input.send(boom)

  assert.ok(!trigger.isReduced, "trigger is not yet")
  assert.ok(input.isReduced, "input is closed on error")

  trigger.send()

  assert.ok(trigger.isReduced, "trigger is reduced on next yield")

  trigger.send()
  input.send(6)
  trigger.send()
})

exports["test assembler"] = test(function(assert) {
  var stop = event()
  var input = event()
  var trigger = event()

  var sampled = sample(input, trigger, function(value, beat) {
    return value + beat
  })
  var actual = concat(sampled, stop)

  assert(actual, ["3a", "5b", "5c", "5d"], "trigger ends sample")

  input.send(1)
  input.send(2)
  input.send(3)
  trigger.send("a")
  input.send(4)
  input.send(5)
  trigger.send("b")
  trigger.send("c")
  trigger.send("d")
  input.send(6)
  input.send(end)

  assert.ok(input.isReduced, "input is reduced")
  assert.ok(!trigger.isReduced, "trigger is not reduced")

  input.send(6)
  trigger.send("e")

  assert.ok(trigger.isReduced, "trigger is reduced on next yield")

  trigger.send("f")
  trigger.send("g")
  input.send(7)
  stop.send(end)
})

exports["test assemble with prior trigger"]  = test(function(assert) {
  var stop = event()
  var input = event()
  var trigger = event()

  var sampled = sample(input, trigger, function(value, trigger) {
    return value + trigger
  })
  var actual = concat(sampled, stop)

  assert(actual, ["1c", "3d", "5e", "5f"], "early trigger")

  trigger.send("a")
  trigger.send("b")
  trigger.send("c")
  input.send(1)
  input.send(2)
  input.send(3)
  trigger.send("d")
  input.send(4)
  input.send(5)
  trigger.send("e")
  trigger.send("f")
  trigger.send(end)

  assert.ok(trigger.isReduced, "trigger is reduced")
  assert.ok(!input.isReduced, "input is not reduced")

  input.send(6)

  assert.ok(input.isReduced, "input is reduced on next yield")

  input.send(7)
  stop.send(end)
})

