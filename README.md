[![ESLint](https://github.com/josev814/UNCFSU-CSC322/actions/workflows/eslint.yml/badge.svg)](https://github.com/josev814/UNCFSU-CSC322/actions/workflows/eslint.yml)

# Table of Contents  

I. [Introduction](#i-introduction)

II. [About the Project](#ii-about-the-project)

III. [Group Sign up](#iii-group-sign-up)

IV. [Programming](#iv-programming)
 
- [General Requirements](#general-requirements)

- [Operational Requirements](#operational-requirements)

V. [Mid-Project Consultation](#v-mid-project-consultation)

VI . [Communication Evidence](#vi-communication-evidence)

VII. [Final Report](#vii-final-report)

VIII. [Presentation and Demonstration](#viii-presentation-and-demonstration)  

IX. [Evaluation](#ix-evaluation)

X. [Setup](#setup)

XI. [Code Linting](#code-linting)

XII. [Running the Test](#running-the-test)  

# I. Introduction  
There will be no final examination in this course. The course project is therefore an important requirement; and it counts   
30% towards your final grade.  
  
The project is to be done by teams. Each team will be formed by at least two (2) but no more than three (3) students.  
A list of students in the class is available on Canvas. Please form your team and send your team formation to me so I   
can set up a group for your team. An optional discussion board has been set up to help students to form a team. Please   
note that it is your responsibility to form a team. If you are not able to form a team, you can still do your project on your   
own, but you will lose a significant number of points. The same also applies if you have formed a team but then all   
team members except you have withdrawn from the course, leaving you as the only remaining team member.  
  
# II. About the Project  
Language selection  
- JavaScript (with Node.js)  
  
The team will then do a thorough investigation of the selected language, with emphasis on its unique features compared   
to other languages. The team will also need to implement a program (details described below) using the (same)  
language they have selected.  
  
No two teams can select the same language and the selection is on a first come first served basis. If you prefer, you   
can also suggest your own project idea. Student suggested projects need to be approved by the instructor.  
  
# III. Group Sign up  
You need to send me an email informing me about your team formation and the language your team has selected (or   
any other project idea you would like to propose). Only one student in the team needs to send me the email, however,   
other team member(s) must be on the CC list for the email to be accepted. This email must be sent before Sunday   
March 12. A discussion board has been set up on Canvas to help formation of teams. Late email submission will not   
be accepted, and all your project points will be forfeited.  
  
# IV. Programming  
You need to implement a program to demonstrate the Goldbach conjecture. The German mathematician Christian   
Goldbach (1690-1764) conjectured that every even number greater than two can be represented by a sum of two prime   
numbers. This conjecture has never been proved or disproved – although it has been verified for values up to   
400,000,000,000,000. As such, you may assume it is true for the cases considered in this project. The goal of the  
program you are going to implement is to find all unique ways to represent a given even number as a sum of two prime   
numbers. A prime number is an integer greater than one that is evenly divisible by only itself and 1. The first few prime   
numbers are 2, 3, 5, 7, 11, …. There may be several ways to represent a given even number as a sum of primes. For   
example, the even number 26 may be represented as 3 + 23, 7 + 19, or 13 + 13. The output of the program should   
contain a summary line, telling how many Goldbach pairs can be found for a number. It is then followed by a list of   
lines, in the form of n = p + q, where n is the input to the program, and p and q are the two prime values, with p ≤ q.   
The lines should be sorted in ascending order of p (or descending order of q). For example:  
```  
We found 3 Goldbach pair(s) for 26.  
26 = 3 + 23  
26 = 7 + 19  
26 = 13 + 13  
```  
In order for you to be able to demonstrate your program, your program should also have a main function (or equivalent)   
that allows you to read data from a file (so you can run your Goldbach function for multiple values).  
  
For example, the Python example provided (see later) can be invoked using one of the following commands:  
```  
python goldbach.py  
python goldbach.py data.txt  
```  
  
For the purpose of demonstration, you can assume the input parameter to the Goldbach function is never greater than   
100,000.  
  
A Python program has been provided to demonstrate how your program should function. Please note that you may   
need to make appropriate adjustments to fit the programming framework of your selected language.  
  
```  
Challenge: There is an inefficiency in the Python sample program provided. This inefficiency makes it run relatively slow (over 90 seconds to finish processing the given input data file on a 6h-generation i5 core laptop). Can you find out and fix the inefficiency? (A more efficient Python implementation should increase the performance by at least 100% and take less than 40 seconds to process the given input data file on the same machine.)  
```  
Your program should demonstrate the followings:  
## General Requirements:  
1. Functional decomposition (into functions, subroutines, methods, etc.) – that is, your program should NOT be just a big slump of code.  
2. Documentation – you should add comments at key positions to explain what you want to do.  
3. Readability – you should utilize indentation (and/or other mechanism) to ensure/enhance the readability of your code.  
  
## Operational Requirements:  
4. File handling – your program should be able to read data from a file.  
5. Output – your program should be able to produce output to screen.  
6. Array/list handling – your program should be able to store values to / read values from an array or a list.  
7. Command line argument handling – your program should be able to handle argument(s) passed in on the command line.  
In particular, the following are the requirements that must be found in your program in order to fulfill the operational   
requirements:  
- Your program should be able to compute the Goldbach pairs for one or more input values (R4).  
- For each input value, you program should first output a statement reporting how many Goldbach pairs have been found, before outputting the found Goldbach pairs. That means you will need to first store all found Goldbach pairs so you can count them before outputting (R5 and R6).  
- You should output one line for each pair of the found Goldbach pairs, in the form of `<input value> = <p> + <q>, with p <= q. The lines should be arranged in increasing order of <p>` (R5).  
- When giving no command line argument, your program should output the Goldbach pairs for the input values of 3, 4, 14, 26, and 100 as a simple demonstration (R7).  
- When given one or more command line arguments, your program should assume that the first argument to be the name of an input file, and process all numbers stored in that file. Additional arguments can be ignored (R7).  
- You can assume that the input file always exists, and it contains data in the correct format (that is, no error checking is needed).  
- You can assume that the input file contains one number per line, and those numbers ae always even integers between 4 to 100,000 (inclusive). The number of lines in the file is NOT known in advance, and the end of the file signals the end of input. Also, the values in the file can appear in any order (R4).  
  
# V. Mid-Project Consultation  
You can make an appointment with me during Week 12 (April 03-09) to have me look at your project and give comment.  
This consultation is optional and can be done either in-person in my office or virtually through Zoom. If you choose to   
do it, all team members must be present during the consultation.  
  
# VI. Communication Evidence  
Since this is a team project, it is important that you demonstrate communication among team members. The   
communication must be documented in the group discussion board on Canvas – and you must demonstrate on going   
communication – that is, you cannot just pour everything in during the last week. I need to see continuous  
communication happening every week after your team is formed, and all team members are participating in   
communication.  
  
# VII. Final Report  
Each team should prepare a final report with grammatically correct English about their project. By Friday May 05, each   
team must submit an 8- to 12-page (not including the title page and the bibliography pages) final report. The final report   
must be written in grammatically correct English. It should include (at least, but not limited to) the following sections:  
- Introduction to the project   
- Detailed information  
 - A brief history of the language  
 - Notable properties of the selected language  
 - Information about implementation the Goldbach conjecture program  
 - Other information that you see fit  
- What each of the team members has done in this project (this needs to be a detailed breakdown of work along with percentages of efforts)  
- Conclusion   
- Bibliography – Please note that at least sixty percent (60%) of your bibliography must be in printed form (that   
means they should not be ONLY available on the Internet). Examples of such items include: textbooks, technical   
reference books, journal articles, conference proceedings.  
• DO NOT include program code in the final report – if you think you should include the code for completeness, you   
should put them in an appendix and those pages do not count toward the 8- to 12- pages.  
Format for Final Report   
- Fonts: 12-point (Except for the Headings and title page)   
- Spacing: double spacing   
- Margin: 1-inch on each side   
- Paper: standard letter-size paper   
- Fancy title page and/or figures are NOT necessary.  
  
# VIII. Presentation and Demonstration  
At the end of the semester, each group must produce a 20-minute presentation and demonstration about their project.   
Each member of the team must participate in the presentation and demonstration (that means each member must be   
presenting – they cannot just be responsible for changing the slides or other similar supportive tasks). The presentation   
should involve using presentation tool such as PowerPoint or similar software. The demonstration should be at the end   
of the presentation and should last about 5 minutes.  
You have several option on how the presentation and demonstration are to be delivered:  
- If all team members are on campus, you can make an appointment with me and present and demonstrate your   
project in my office (or in a classroom).  
- If only some (but not all) of the team members are on campus, you can record your presentation and demonstration  
and burn it on a CD/DVD (or save it on a USB drive / external hard drive). Then have one team member deliver it   
to my office.  
- You can record your presentation and demonstration and upload it to some social media sites and send me a link   
to the video. Please note that videos uploaded to these social media platforms are usually public and can be   
searched and viewed by everyone.  
- You can record your presentation and demonstration and save it to your Microsoft One Drive then share the video   
with me.  
- You can also request that the presentation and demonstration be done by virtual MS Teams meeting.  
Hints for the presentation:  
- Contents of the presentation are more important than fancy effects.  
- Your presentation must feature the programming languages stuff about the project.  
- Do not cramp too much information in a single slide (e.g., you should not use fonts smaller than 18 points).   
- Control the number of slides to match the presentation time. You will lose points if your presentation is either too   
long or too short.  
- Make sure the slides stay on the topic you want to deliver to your audiences.   
- Cue cards during the presentation are acceptable but you should not depend on them.  
  
# IX. Evaluation  
The project will be evaluated as follows:  
- Final report – 10 points – graded based on structures, readability, and the contents of the report – with 2 points on   
Spelling and Grammar.  
- Program code – 5 points – graded based on program structures and readability (general requirements R1 to R3).  
The baseline is that I should be able to understand how your code works and see it basically works correctly   
without actually executing the code.  
- Presentation – 5 points – graded based on presentation skill, see above.  
- Demonstration – 5 points – graded based on the successfulness of the demonstration, which in turn based on the   
features and correctness of your code (operational requirements R4 to R7).  
- Communication Evidence – 5 points – graded based on how strong the evidence about the teamwork that have   
been carried on within the team throughout the timespan of the project.  
  
  
# Setup  
Install nodejs >= 18.x (https://nodejs.org/en/download/)  
  
Install required packages using npm.  Make sure to cd to the directory this application is in prior to npm install  
  
via Powershell:  
```  
npm install  
```  
  
# Code Linting  
This is done on the terminal using npx  
  
Powershell example:  
```  
npx eslint your_file_to_lint.js  
```  
  
# Running the test  
This is done on the terminal using node  
  
--data-file is the input file that we are going to process  
  
Powershell example:  
```  
node index.js --data-file data.txt  
```
