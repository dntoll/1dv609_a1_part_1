# Java setup for Alternative 1 (A1.a1)

**Both [Password testing](../instructions/password-testing.md) and [Testing with mocks](../instructions/testing-with-mocks.md) are mandatory.** This folder contains the Java versions of both exercises.

## Find the two exercises

| Required exercise | Gradle project | Your tests |
| --- | --- | --- |
| [Password testing](../instructions/password-testing.md) | [practice/practice_with_run_tests/](practice/practice_with_run_tests/) | [app/src/test/java/com/lab/](practice/practice_with_run_tests/app/src/test/java/com/lab/) |
| [Testing with mocks](../instructions/testing-with-mocks.md) | [practice/practice_with_mocked_tests/](practice/practice_with_mocked_tests/) | [app/src/test/java/com/lab/](practice/practice_with_mocked_tests/app/src/test/java/com/lab/) |

Each project has its own Gradle wrapper. The implementations are under `app/src/main/java/com/lab/`; keep the provided correct and buggy implementations unchanged. The mocking project includes Mockito dependencies.

## Run the tests

The projects use Java 21. From the repository root, enter the Password testing project:

```bash
cd java/practice/practice_with_run_tests
```

Run the following commands **from the project folder containing the Gradle wrapper**, rather than from a source-code folder:

```bash
./gradlew build
./gradlew test
```

<<<<<<< HEAD
On Windows PowerShell, use `.\gradlew.bat build` and `.\gradlew.bat test`.

For Testing with mocks, enter `java/practice/practice_with_mocked_tests/` from the repository root and run its wrapper in the same way. **Run and complete both projects.**

Useful commands within either project:

```bash
./gradlew test --info
./gradlew test --tests com.lab.PasswordTest
=======
Run tests with detailed output:
```bash
./gradlew test --info
```

Run a specific test class:
```bash
./gradlew test --tests PasswordTest
```

Run tests for a specific test in a test file:
```bash
./gradlew test --tests PasswordTest.shouldAlwaysPass
```

## Example Output

```bash
PasswordTest > shouldThrowExceptionOnShortPassword() PASSED
PasswordTest > shouldThrowExceptionOnPasswordWithoutNumber() PASSED
PasswordTest > shouldAcceptValidPassword() PASSED

BUILD SUCCESSFUL in 2s
4 actionable tasks: 4 executed
```

## VS Code

If using VS Code:
1. Open the project folder
2. Navigate to any test file
3. Click "Run Test" button above test methods
4. Or right-click → "Run Java Tests"

## Common Commands

**Clean build:**
```bash
./gradlew clean build
```

**Run tests continuously (re-run on file changes):**
```bash
>>>>>>> 2ec2bac53634ab53c9a1585abe68473301b3115b
./gradlew test --continuous
```

Use a test class from the current project when selecting a specific class. The HTML test report is at `app/build/reports/tests/test/index.html`. Use your chosen coverage tool to measure and interpret coverage as required by the exercises.

## Examination material

The [examination/](examination/) folder is reserved for examination material. Leave it unchanged until instructed by teaching staff. Read the [assessment instructions and reflection questions](../instructions/assessment.md).

[Back to the start guide](../README.md)
