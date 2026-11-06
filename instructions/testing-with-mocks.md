# Testing with mocks

> **Required exercise within Alternative 1 (A1.a1). Both exercises are mandatory:** [Password testing](password-testing.md) and Testing with mocks. Complete both in your chosen language.

Continue after Password testing. Here you test two classes independently: `SwedishSocialSecurityNumber` and its dependency `SSNHelper`. This exercise belongs to Alternative 1; **Alternative 2 is a separate TDD project on the course website**.

## Find your code

| Language | Setup | Code to test | Your tests |
| --- | --- | --- | --- |
| Java | [Java setup](../java/README.md) | [SSN implementations](../java/practice/practice_with_mocked_tests/app/src/main/java/com/lab/) | [Test folder](../java/practice/practice_with_mocked_tests/app/src/test/java/com/lab/) |
| JavaScript | [JavaScript setup](../js/README.md) | [SSN implementations](../js/practice/practice_write_mocked_tests/src/) | [Test folder](../js/practice/practice_write_mocked_tests/tests/) |

## What to do

- Write one test suite for `SwedishSocialSecurityNumber` and another for `SSNHelper`.
- In the `SwedishSocialSecurityNumber` suite, replace `SSNHelper` with mocks. Do not use real `SSNHelper` instances in this suite: a bug in the helper must not cause these tests to fail.
- Test the real `SSNHelper` separately. Its tests should fail because of bugs in `SSNHelper`, independently of `SwedishSocialSecurityNumber`.
- Use one assert/expect/verify per test unless you can explain why more are needed.
- Apply the same test-suite principles as in Password testing: all tests pass for the correct implementation, each provided buggy version is caught, and tests have a clear purpose. Do not change the provided implementations.
- Measure coverage and show pass/fail and coverage in tables for the two suites, as in [Password testing](password-testing.md#what-to-show-and-explain).
- Add at least one additional test to improve coverage. Demonstrate its value by creating a buggy version that the additional test catches. Add further tests only when each has value.

A mock lets you control the responses of a dependency so you can isolate the class under test. Jest includes mocking support; the provided Java mocking project includes Mockito dependencies. Understand how your chosen framework creates, configures and verifies mocks.

## What to show and explain

- A test suite for `SwedishSocialSecurityNumber` that uses mocks instead of real `SSNHelper` instances.
- A separate test suite for the real `SSNHelper`.
- Tests that catch every provided buggy version of the class being tested.
- Tables showing your actual test results and coverage for the relevant correct and buggy versions in each suite.
- Your additional test and the buggy version that demonstrates its value.
- How your tests isolate the two classes, and how your assert/expect/verify methods work.

Teaching staff assess you while observing you work during lab time. Be prepared to explain your code and mocking choices.

## Learning goals and study material

Practice testing classes with dependencies independently and using mocks to control and verify interactions with those dependencies. Helper methods are public in `SSNHelper`, allowing you to test them separately.

- *Developer Testing*, chapters 7-13.
- Course material for weeks 1-3.
- Manuals for your language, test framework, mocking framework and coverage tool.

## Prepare for assessment

**Alternative 1 requires both Password testing and Testing with mocks.** Read the [assessment instructions and reflection questions](assessment.md) and prepare to show and explain your work on both exercises during lab time.

After passing Alternative 1, continue with [A1 Part 2: Agentic Testing](https://coursepress.lnu.se/kurser/mjukvarutestning/03-examinations/03-assignment-1-part-2). Both stages must be passed before an A1 grade can be awarded.
