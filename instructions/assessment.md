# Assessment of Alternative 1 (A1.a1)

**Both [Password testing](password-testing.md) and [Testing with mocks](testing-with-mocks.md) are required. Completing only Password testing is not sufficient to pass Alternative 1.**

Alternative 1 is assessed individually on the F/E/D scale (passing grades E-D).

## Examination during lab time

Work on both exercises during the lab sessions assigned to your group. Your work is examined during these sessions, while teaching staff observe you working on the exercises. Showing or submitting a finished solution alone is not sufficient.

Kalmar and Växjö campus students work in the classroom; WP distance students work via Zoom. Teaching staff must be able to see you working, whether you participate in the classroom or via Zoom. Follow the arrangements explained at the course introduction and posted in your group's Zulip channel.

Prepare to:

- Show and explain your work on **both exercises**, including the test suites, results tables and your own buggy versions described in the exercise instructions.
- Run your tests, measure and interpret coverage, and use mocking.
- Edit and write code, and answer questions about your solution and the study material.
- Write unit tests for a class or function given to you during the examination, resembling those in the exercises. Choose suitable assert/expect/verify methods and explain your choices.
- Answer the reflection questions below in depth.

No AI tools are allowed during the examination. Disable AI assistance in your editor, including AI code completion. You may refer to your practice code.

## Reflection questions

These are examples of questions you may be asked during assessment. Prepare answers for both exercises. You may discuss the questions with other students.

- How many tests are needed to find all bugs in the examples? Do you think this is enough testing for these problems? Too much?
- What missing tests would be useful to add?
- What is **good test data** for this example and why?
- Should private methods be tested? What are the pros and cons of having a helper class instead of private methods?
- Can all code be covered by code coverage? Why or why not?
- What kinds of asserts/expects can be used in your testing framework?
- What kinds of code coverage does your tool show? What do the different coverage values mean?
- Why should a single test only have one assert/expect?
- What are the two main purposes of using mocks?
- Why is it good if a test for a system under test (SUT) is independent of the classes that the SUT depends on?
- Can all bugs be found by testing?
- Do all tests need asserts/expects?
- Can testing prove that we are 100% bug free?
- In what two main ways does a mocking library improve testability?

## After passing Alternative 1

Continue with [A1 Part 2: Agentic Testing](https://coursepress.lnu.se/kurser/mjukvarutestning/03-examinations/03-assignment-1-part-2), the PromptLab lab and assessed seminar. Part 2 is a separate, mandatory stage graded Pass/Fail. You must pass both Alternative 1 and Part 2 before an A1 grade can be awarded.

[Back to the start guide](../README.md)
