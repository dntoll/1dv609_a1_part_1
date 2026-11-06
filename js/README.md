# JavaScript setup for Alternative 1 (A1.a1)

**Both [Password testing](../instructions/password-testing.md) and [Testing with mocks](../instructions/testing-with-mocks.md) are mandatory.** This folder contains the JavaScript versions of both exercises.

## Find the two exercises

| Required exercise | Code to test | Your tests |
| --- | --- | --- |
| [Password testing](../instructions/password-testing.md) | [practice/practice_write_run_tests/src/](practice/practice_write_run_tests/src/) | [practice/practice_write_run_tests/tests/](practice/practice_write_run_tests/tests/) |
| [Testing with mocks](../instructions/testing-with-mocks.md) | [practice/practice_write_mocked_tests/src/](practice/practice_write_mocked_tests/src/) | [practice/practice_write_mocked_tests/tests/](practice/practice_write_mocked_tests/tests/) |

Keep the provided correct and buggy implementations unchanged. Jest includes mocking support.

## Install and run

From the repository root, enter `js` and install the tools:

```bash
cd js
npm install
```

Run all suites with coverage:

```bash
npm test
```

To work on each exercise separately, run these commands from `js/`:

```bash
npm test -- practice/practice_write_run_tests
npm test -- practice/practice_write_mocked_tests
```

**Run and complete both exercises.** After a coverage run, open `coverage/lcov-report/index.html` to inspect the report.

## Select a Password implementation

In `practice/practice_write_run_tests/tests/password.test.js`, select the implementation by keeping one import active at a time. The versions are directly inside `src/`, for example:

```js
import { Password } from '../src/BugMissingNumberCheck.js';
// import { Password } from '../src/BugWrongMessage.js';
// import { Password } from '../src/Correct.js';
```

Run the same suite against every provided version and record your results, as described in [Password testing](../instructions/password-testing.md).

## Examination material

The [examination/](examination/) folder is reserved for examination material. Leave it unchanged until instructed by teaching staff. Read the [assessment instructions and reflection questions](../instructions/assessment.md).

[Back to the start guide](../README.md)
