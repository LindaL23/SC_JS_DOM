# Lesson 5: Dynamic Page Engineering via DOM Manipulation 🌐

Welcome to Day 5 of JavaScript! Today, we transition from pure mathematical variables to visual page control. By mastering the Document Object Model (DOM), you will learn how to bypass static HTML/CSS files and rewrite text, change spacing layouts, and morph color palettes dynamically from script lines.

## ⚠️ Getting Started (Important Instructions)
To work on these tasks, you must set up your own copy of the project:
1. Click the **"Fork"** button at the top right of this repository to create a copy under your own GitHub account.
2. **Clone** your personal forked repository to your local machine using your terminal:
   ```bash
   git clone <your-forked-repo-url>
   ```
3. Open the folder in **VS Code** and practice the tasks locally on your computer.
4. Right-click `index.html` and choose **Open with Live Server** or **Reveal in Finder or File Explorer**
5. **DO NOT create a Pull Request (PR)** back to the main classroom repository. All your work stays in your own personal repository!
6. At the end of class, you will save, commit, and push your working responsive design to your personal repository!

## 📝 What You Will Learn
* How browsers parse HTML structures into an object tree graph
* How to fetch element links out of the layout space using precise selector tools
* The critical syntax spelling modifications found on the JavaScript Style Object
* How to modify text payloads and structural layout dimensions instantly on live sites

## 🛠️ Classroom Tasks
### TASK 1: Accessing the Webpage Body
Learn how the browser reads HTML as a tree of objects. Practice targeting the root of your page by changing the background color directly through the `document.body` property.

### TASK 2: Selecting Elements by ID and Selector
Isolate specific items on your page using the two most common selection tools:
* **`document.getElementById()`**: Targets a single element using its unique ID name.
* **`document.querySelector()`**: A flexible tool that finds elements using standard CSS selectors (like `.class-name` or `#id-name`).

### TASK 3: Styling Elements with JavaScript
Apply styling directly to your selected elements. Learn why standard CSS property names change from dash-style to camelCase when written in JavaScript (for example, `background-color` becomes `backgroundColor`).

### TASK 4: Handling Multiple Elements (Optional)
Group elements together using `document.getElementsByClassName()` or `document.getElementsByTagName()`. Learn how to use numbers in brackets (like `[0]` or `[1]`) to pick and style specific items out of a list.

### TASK 5: Changing Text vs Changing HTML (`.innerText` vs `.innerHTML`)
Explore the two ways to change the content inside an element:
* **`.innerText`**: Changes content strictly into plain text.
* **`.innerHTML`**: Allows you to insert raw HTML tags (like `<strong>` or `<span>`) to format your text dynamically.

### TASK 6: Managing Classes with `.classList`
Move away from changing inline styles one-by-one. Practice using `classList.add()` and `classList.remove()` to instantly apply pre-written CSS classes, such as a pulsating border animation.

### TASK 7: Moving up the Tree (`.parentElement`)
Learn how to find and style a parent container by starting from a child element. Practice using `.parentElement` to grab the main card wrapper without needing a unique ID.

## 🚀 Execution Instructions
1. Save your modifications in your local workspace files.
2. Cycle your browser refresh trigger to execute your javascript scripts.
3. Watch the visual properties layout morph instantly without needing to make direct modifications inside your CSS stylesheets!
