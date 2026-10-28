Assignment #5: JavaScript Basics (DOM Manipulation & Events)

Student: Daniyar Abdusadykov

Group: IT-2504

University: Astana IT University

Overview

This repository contains my submission for Assignment #5. The goal of this project is to practice core JavaScript concepts, including working with JS objects, performing basic arithmetic operations, handling form submit events, and dynamically updating DOM elements without reloading the page.

File Structure

├── index.html          # HTML structure with Bootstrap 5 layout
├── style.css           # Custom styles
├── script.js           # JavaScript logic (DOM manipulation & events)
├── screenshots/        # Execution screenshots for tasks
└── README.md           # Assignment report

<img width="1913" height="847" alt="image" src="https://github.com/user-attachments/assets/fd228b5b-f6f2-4ce5-b643-57cdd520d1e1" />
<img width="1910" height="818" alt="image" src="https://github.com/user-attachments/assets/252acf0e-f9a1-4ee0-a6f3-62d05deef809" />
<img width="1913" height="822" alt="image" src="https://github.com/user-attachments/assets/0d1db3f4-3b39-4d9b-8af2-75bed385538b" />

Completed Tasks

Part 1: Profile Object, Data Types & Arithmetic

Task 1 (Personal Info Object): Created the userProfile object in script.js containing string, number, boolean, and array properties.

Task 2 (Arithmetic Calculations): Used JS date methods and arithmetic operators (-, *) to calculate age and age in months from birthYear. Printed results to the browser UI and console.

Part 2: Form Input & Event Responses

Task 3 (HTML Form Setup): Added an update form in index.html with inputs for username and birth year.

Task 4 (Event Listener): Attached a submit event listener using addEventListener. Stopped the default browser page reload (e.preventDefault()), parsed the input values, updated the userProfile object, and recalculated age metrics on the page.

Part 3: DOM List Manipulation

Task 5 (Creating & Removing Elements): Implemented an interactive list for hobbies.

Used document.createElement("li") and appendChild() to render array items into an <ul>.

Added click listeners for "Add" and "Remove Last" buttons using .push() and .pop() array methods.

Summary of Work Process

Built the initial responsive layout using Bootstrap 5 utility classes in index.html.

Created script.js and initialized the baseline data structure (userProfile).

Wrote DOM selector functions to connect JS variables directly with page HTML elements.

Added event listeners for form submission and array list updates.

Tested output logs in Chrome DevTools Console (F12).

Deployed the project to GitHub Pages and gathered screenshots for the final report.


