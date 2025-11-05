# Practice Writing and Running Tests

For this assignment you may select programming language, test framework, and code coverage tool. 
We provide Java and .js code. 



## Goals
- Practice your ability to write simple unit tests in a framework.
  - run tests and evaluate results
  - practice writing asserts of different types including testing exceptions are thrown
- Write minimal test-suites that accuratly pinpoints bugs
- Practice running code coverage tool, and assess code coverage.
    - Find code not run during testing
- Name tests to document requirements in the SUT
  - Follow the pattern [Function]Should[Expected behaviour]For[Stimuli] 
    - Java junit: constructorShouldThrowExceptionForShortPasswords()
    - Jest:       "constructor Should Thow Exception For Short Passwords"

## Course material to support
* Developer Testing - Chapter 7 - 10
* Testing framework online manuals
* Lecture material
 

## Task 1: Write an optimized test suite
Write a test suite for the Password class provided. 

 * There are correct and buggy versions of the Password class. 
   * The correct version is defined as correct and should not be changed.
   * None of the tests may fail for the correct version. 
   * For each buggy version your test suite should have at least one test that failes. 
   * Each test should fail for at least one buggy version which no other test fails (no redundant tests)
  
 * Artifacts to show during examination
   * Test suite as one file 
   * You should be able to run all your tests against any of the correct or buggy versions. 
   * You should be able to run code coverage 
   * As close to 100% test coverage for all versions of the Password as possible
   * Summary table as below, showing coverage and pass/fail for all combinations of tests & 
   * Orally be able to answer questions about your code and the reflection questions.
   * You should write at least one buggy version of the Password class that pass all the tests 

### Table for checking test suite bug coverage
| Version | Correct | Buggy 1 | Buggy 2 | Buggy 3 | ... |
| --- | ---| --- | --- | --- | --- |
| Test name 1 | ✅ | ❌ | ✅ | ✅ | ✅ |
| Test name 2 | ✅ | ✅ | ❌ | ✅ | ✅ |
| Test name 3 | ✅ | ✅ | ❌ | ❌ | ❌ |
| Coverage | 100% | 100% | 100% | 100% | 100% |


### Reflection Questions - You should be able to answer these questions in depth
- How many tests are needed to find all bugs in the example?
- What are the missing tests/bugs?
- What is **good test data** for this example and why?
- Should we test private methods?
- Can all code be covered by code coverage?
- What kind of "asserts" can be done in your testing framework?
- What kind(s) of Code Coverage is shown in your code coverage tool?

---

