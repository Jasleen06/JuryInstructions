# Tech Spec
The _Tech Spec_ is an important part of a project, but it's a part that's often overlooked or skipped. The intention of this document is to organize everyone's thoughts on the project into one simple, succinct document. It doesn't have to be super detailed but filling out this document will help keep everyone focused on the project goal.

## Overview 
This is a project to assist judges/practitioners fill out criminal pattern jury instructions. We want to build a proof of concept only based on two sample instructions. Every instruction comes with standard language and then a discrete set of variables that change depending on the individual circumstances of the case. The idea is to develop a simple web app that would allow a judge to fill out the details of his/her case and then get an appropriate single instruction that could be printed out and read to the jury.

**This spec is a work in progress.**  Features and functionality defined in this document may be revised or changed before the application is finalized.

This spec does not provide an overview of any algorithms or code used by the app, which will be defined by other documents.  This document simply defines how an end-user will interact with the application.

## Scenarios
(1) Judge has a first-degree assault case with a particular set of facts; judge conducts trial; judge wants a first-degree assault instruction that fits the defendant in her courtroom. Goes to our app, fills out details, prints instruction. Reads to jury.
(2) Judge has a homicide-case with a particular set of facts; as above conducts trial and wants instruction. Follows same procedure to print out instruction.

## Non Goals
This is not a project to capture ALL instructions. We only want to demo two instructions to show the MSBA what is possible. At this stage, there are no user accounts or login or anything like that. Just a simple site that allows the user to fill in details for first-degree assault or for the homicide variation we are looking at.

## Minimum Viable Product
MVP would have a webpage, option to chose assault or homicide, and then for each option, the ability to fill in each of the variables. Some variables might be preset, others might be user-defined. Then the MVP app would spit out a finished instruction on the webpage so that the user could print it out.

## Workflow
The app will be usable via a simple straight-forward workflow. The user will simply choose the type of instructions they will be generating, fill out the displayed form, and then export their results as outlined bellow:

![Workflow](/docs/img/task_flow.png)

## Components
The basic app will have 2 primary pages. The first being a landing page with two button options, the second being the form page with the various options for either template presented. 

### Landing Page
The landing page will be bare-bones with only the two buttons present. 
![Landing Page](/docs/img/landing_page.png)

## Roadmap
Our project details can be found on [Github](https://github.com/CodeForBaltimore/JuryInstructions/projects/1), however a brief outline is bellow:

* 2019/09/11 - Landing page and form pages created.
* 2019/09/28 - Instructions generated as a PDF.

## Contact Info
Colin Starger - [Github](https://github.com/Colinstarger)
Jason Anton - [Github](https://github.com/revjtanton)
