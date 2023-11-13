# Test Double Types

Testing components that replace code dependencies to improve testability by
isolating external dependencies.

## Dummies

- no behavior
- (almost) empty
- return null or nothing
- to pass as placeholder arguments

## Stubs

- predefined behavior specific to a test
- controlled by the test/tester
- the test relies on that behavior

## Spies

- real objects, with additional monitoring capabilities to observe and record interactions
- can observe:
  - number of calls
  - arguments
  - return values

## Mocks

- spies with assertions to verify behaviors
- usually don't contain anything else
- usually have configurable behavior

## Fakes

- simplified implementations that mimic the behavior of the replaced dependency
- implemented and controlled by the tester
