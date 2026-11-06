# Password testing

> **Required exercise within Alternative 1 (A1.a1). Both exercises are mandatory:** Password testing and [Testing with mocks](testing-with-mocks.md). Complete both in your chosen language.

Write an optimized test suite for the provided `Password` class. Practice writing tests yourself so that you can explain your choices and write tests during the individual lab assessment.

## Find your code

| Language | Setup | Code to test | Your tests |
| --- | --- | --- | --- |
| Java | [Java setup](../java/README.md) | [Password implementations](../java/practice/practice_with_run_tests/app/src/main/java/com/lab/) | [Test folder](../java/practice/practice_with_run_tests/app/src/test/java/com/lab/) |
| JavaScript | [JavaScript setup](../js/README.md) | [Password implementations](../js/practice/practice_write_run_tests/src/) | [Test folder](../js/practice/practice_write_run_tests/tests/) |

## What to do

- Write your test suite in one test file. Use one assert/expect per test unless you can explain a strong reason for using more.
- Run the same suite against the correct implementation and every provided buggy version. Do not change these implementations.
- All tests must pass for the correct implementation. For each buggy version, at least one test must fail.
- Remove redundant tests: each test must catch at least one buggy version that no other test catches. If two tests catch exactly the same bugs, only one is needed.
- Name tests to describe the function, expected behaviour and input, for example `constructorShouldThrowExceptionForShortPasswords()`.
- Measure coverage for every implementation. Aim as close to 100% as possible and be prepared to explain any uncovered code and the coverage measurements your tool reports.
- Create an additional buggy version of `Password` that passes all your tests. You do not need to add a test to catch this version.

## What to show and explain

- Your test suite and how you select each implementation to test.
- A table showing pass/fail for each test against each implementation, including your own buggy version, and coverage for every implementation.
- Why each test is needed, how your assert/expect methods work, and why your own buggy version escapes the suite.

Use a table like this, filled with your actual results:

| Test / measurement | Correct | BugDoesNotHash | BugDoesNotTrim | Other provided versions | Your own buggy version |
| --- | --- | --- | --- | --- | --- |
| Your test name | Pass/Fail | Pass/Fail | Pass/Fail | ... | Pass/Fail |
| Another test name | Pass/Fail | Pass/Fail | Pass/Fail | ... | Pass/Fail |
| Coverage | ... | ... | ... | ... | ... |

Teaching staff assess you while observing you work during lab time. Prepare to explain all your code, answer the [reflection questions](assessment.md#reflection-questions), and write tests for unfamiliar code during the assessment.

## Learning goals and study material

Practice writing and running unit tests, selecting useful test data, designing a minimal test suite that pinpoints bugs, and interpreting code coverage.

- *Developer Testing*, chapters 7-10.
- Course material for weeks 1-2.
- Manuals for your language, test framework and coverage tool. You are responsible for understanding the tools you choose.

## Continue with Testing with mocks

**Alternative 1 requires both exercises. Completing Password testing alone is not sufficient to pass.** Continue with [Testing with mocks](testing-with-mocks.md), using the same chosen language.
