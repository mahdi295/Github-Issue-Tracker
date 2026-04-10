- 1️⃣ What is the difference between var, let, and const?

# Ans:
Var: Var is function-scoped.
It can be redeclared and updated but often leads to unexpected behavior.

Let: Let is block-scoped. 
It can't be redeclared, but updated.

Const: It is also block-scoped but can't redeclared or redessigned.
Objects or array declared can still have their internal values modified.

- 2️⃣ What is the spread operator (...)?

# Ans:
Speread operator(...) expands elements of an array or object into indiviual components.
It is useful for copying arrays, merging objects etc.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

- 3️⃣ What is the difference between map(), filter(), and forEach()?

# Ans:
map(): It returns a new array after applying a transformation to each element.
filter(): It returns a new array containing only elements that satisfy a condition.
forEach(): It iterates over elements and executes a function, but does not return a new array.


- 4️⃣ What is an arrow function?

# Ans:
Arrow function is a concise syntax for writing functions. It don't bind their own this (lexical this), making them useful in callbacks.
const add = (a, b) => a + b;

- 5️⃣ What are template literals?

# Ans:
Template literals is a way of strings defined using backticks (``). It allow embedding variables and expressions using ${}. It support multi-line strings without concatenation.
let name = "Mahdi";
console.log(`Hello ${name}`);








**GitHub Issues Tracker Web App**

**GitHub Issues Tracker** web application built to practice modern frontend development concepts such as **API integration, filtering, searching, and dynamic UI rendering** using **Vanilla JavaScript, Tailwind CSS, and DaisyUI**.

This project demonstrates how real-world applications manage and display issue data through a clean, structured, and interactive user interface.


**Key Features**

✅ Login system with demo credentials
✅ Fetch and display issues from an external API
✅ Filter issues by **All, Open, and Closed** categories
✅ Dynamic **issue count updates** based on filters
✅ Search issues by keyword
✅ Responsive **4-column card layout**
✅ **Modal view** to display full issue details
✅ **Loading spinner** during API data fetching
✅ Visual indicators for issue status (Open / Closed)

**Each Issue Card Displays**

• Issue title
• Short description
• Status (Open / Closed)
• Author
• Priority level
• Labels
• Created date
• Assignee

Clicking on an issue card opens a **modal window** displaying complete issue information.

**Technologies Used**

• HTML
• Tailwind CSS
• DaisyUI
• Vanilla JavaScript
• REST API


**API Used**

The project uses the following API endpoints:

All Issues:
# https://phi-lab-server.vercel.app/api/v1/lab/issues

Single Issue
# https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

Search Issue
# https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

**Concepts Practiced**

• API data fetching using **Fetch API**
• Dynamic **DOM rendering**
• JavaScript array methods (`map`, `filter`)
• Event handling and UI interaction
• Responsive layout design
• Structured and modular frontend code



Projects like this demonstrate practical implementation of **frontend development concepts and problem-solving approaches while building interactive web applications.**

More projects and learning journeys coming soon.

