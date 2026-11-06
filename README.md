# Assignment 1 - Alternative 1 (A1.a1)

> **Alternative 1 requires BOTH exercises:**
>
> - **[Password testing](instructions/password-testing.md)** - unit tests and code coverage.
> - **[Testing with mocks](instructions/testing-with-mocks.md)** - testing classes with dependencies.
>
> **Complete both exercises in your chosen language: Java or JavaScript. Completing only Password testing is not sufficient to pass Alternative 1.**

Alternative 1 is assessed on the F/E/D scale (passing grades E-D). [Alternative 2](https://coursepress.lnu.se/kurser/mjukvarutestning/03-examinations/02-assignment-1-part-1-alternative) is a separate TDD project described on the course website.

## Get started

- Fork this repository, clone your fork, and commit and push your work to it. Your fork does not have to be private; show your work during the lab assessment.
- Choose a language and follow its setup guide: **[Java](java/README.md)** or **[JavaScript](js/README.md)**. Both contain code for both exercises. You may do both languages, or use another language after discussing it with teaching staff. You may choose a different test framework.
- Start with Password testing, then continue with Testing with mocks. Complete both exercises and prepare for the individual lab assessment:

  - [ ] Complete [Password testing](instructions/password-testing.md), including test results and coverage.
  - [ ] Complete [Testing with mocks](instructions/testing-with-mocks.md), including test results and coverage.
  - [ ] Prepare to explain both exercises and answer the [assessment and reflection questions](instructions/assessment.md).

## Assessment during lab time

Work on **both exercises** during your scheduled lab sessions, in the classroom for Kalmar and Växjö campus students or via Zoom for WP distance students. **Teaching staff must be able to observe you working.** Assessment is individual; showing or submitting a finished solution alone is not sufficient.

Read the [assessment instructions](instructions/assessment.md), including what to demonstrate and the rules on AI during examination. Ask questions and follow the lab arrangements in your group's Zulip channel: [Växjö](https://zulip.lnu.se/#narrow/channel/63-1dv609-Software-Testing---V.C3.A4xj.C3.B6---English) or [Kalmar and distance students](https://zulip.lnu.se/#narrow/channel/62-1dv609-Software-Testing---WP-Kalmar-Svenska).

## After passing Alternative 1

Continue with **[A1 Part 2: Agentic Testing](https://coursepress.lnu.se/kurser/mjukvarutestning/03-examinations/03-assignment-1-part-2)**, the PromptLab lab and assessed seminar. Part 2 is a separate, mandatory stage graded Pass/Fail. Both your chosen alternative and Part 2 must be passed before an A1 grade can be awarded.

## Reflection questions

<<<<<<< HEAD
The questions have moved to [Assessment of Alternative 1](instructions/assessment.md#reflection-questions).
=======
Prepare: 
* Disable AI in your editor for the examination. No tab to complete.
* Be prepared to show the results of the two practice tasks.
* Be prepared to run the tests, to measure coverage, and use mocking.
* Be prepared to edit and write code.
* Be prepared to answer questions about any part of your code.
* During examination you will write one or more unit test for new a function that you will be given during examination. You should be able to write unit-tests for that function, run the test, measure coverage. You should be able to select "assert/expect method" depending on the type of function to one of the suitable used in practice tasks.
   * Prepare so you know how to test:
      * Exceptions, return values, calls on the mock object(s). (jest: toHaveBeenCalledWith, junit: verify)
      * Direct and indirect input
      * Tests of constructors and methods on the object, in Javascript, also on functions without objects
      * mock dependencies
* During the examination you are also asked a couple of questions related to the practice task and the study material specified.
* You are not allowed to use AI to solve the task during the examination. You may look at the practice tasks during this examination.
* You will also be asked questions from the list below.



### Reflection Questions

During Examination you may be asked these or related questions. You should be able to answer these questions in depth. 

- How many tests are needed to find all bugs in the examples? Do you think this is enough testing for these problems? Too much?
- What are the missing tests you think would be good to add? 
- What is **good test data** for this example and why?
* Should private methods be tested? What are the pros and cons of having a "helper class" instead of private methods?
- Can all code be covered by code coverage? Why not? 
- What kind of "asserts"/"expects" can be done in your testing framework?
- What kind(s) of Code Coverage is shown in your code coverage tool? What does the different coverage values mean?
- Why should a single test only have one assert/expect?
* What is the two main purposes of using mocks?
* Why is it good if a test for a SUT is independent of the classes that the SUT depends on?
* Can all bugs be found by testing?
- Do all tests need asserts/expects?
- Can we with testing prove that we are 100% bug free?
>>>>>>> 2ec2bac53634ab53c9a1585abe68473301b3115b
