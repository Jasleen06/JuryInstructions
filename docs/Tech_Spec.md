# Tech Spec
The _Tech Spec_ is an important part of a project, but it's a part that's often overlooked or skipped. The intention of this document is to organize everyone's thoughts on the project into one simple, succinct document. It doesn't have to be super detailed but filling out this document will help keep everyone focused on the project goal.

## Overview 
This is a project to assist judges/practitioners fill out criminal pattern jury instructions. We want to build a proof of concept only based on two sample instructions. Every instruction comes with standard language and then a discrete set of variables that change depending on the individual circumstances of the case. The idea is to develop a simple web app that would allow a judge to fill out the details of his/her case and then get an appropriate single instruction that could be printed out and read to the jury.

## Scenarios
(1) Judge has a first-degree assault case with a particular set of facts; judge conducts trial; judge wants a first-degree assault instruction that fits the defendant in her courtroom. Goes to our app, fills out details, prints instruction. Reads to jury.
(2) Judge has a homicide-case with a particular set of facts; as above conducts trial and wants instruction. Follows same procedure to print out instruction.

## Non Goals
This is not a project to capture ALL instructions. We only want to demo two instructions to show the MSBA what is possible. At this stage, there are no user accounts or login or anything like that. Just a simple site that allows the user to fill in details for first-degree assault or for the homicide variation we are looking at.

## Minimum Viable Product
MVP would have a webpage, option to chose assault or homicide, and then for each option, the ability to fill in each of the variables. Some variables might be preset, others might be user-defined. Then the MVP app would spit out a finished instruction on the webpage so that the user could print it out.

## Diorama-rama
Can you put your project into pictures? Sure you can! We recommend using [draw.io](https://draw.io) because it's free and you can make pretty diagrams of all sorts like this:

## Components
Break down your project into as many different sections or components as possible. This could include various pages for a web app, or endpoints for an API project just to name a couple of examples. Try to include any wireframes or mock-ups you can to fully illustrate your idea for each piece!

## Roadmap
Give some timelines. These don't have to be fully detailed, but it's good to set goals and make them visible. Any dates here should match _Milestones_ set in the github project.

## Contact Info
Colin Starger - find me on GitHub
