# My First React

A small React project made of all exercises done in a training course on React Fundamentals. The exercises progress in complexity, culminating in a more complete feature: a small **product management interface** with browser storage.

A live demo is available here:
https://my-first-react-dario-97-d.netlify.app/

---

## 🎯 Project Main Goals

### Basic Component Rendering

Initial exercises demonstrate how to create and render React components.

Concepts practiced:

* componentization
* JSX syntax
* importing json data
* CSS modules

---

### State and Interaction

Later sections introduce interactive UI elements controlled by React state.

Concepts practiced:

* `useState` – update UI with new values
* `useEffect` – run a process whenever a variable's value is changed
* `props` – send data to children components
* `callbacks` – send parent functions so that children componentes can trigger actions on a broader scope

---

### Form Handling

User input is handled through controlled form elements.

Concepts practiced:

* capturing form input
* updating state from user events
* submitting and processing form data

---

## 🛍  Product List Exercise

The final section is the most complete exercise in the project.

This section implements a small **product list interface**.

Features include:

* displaying products from local storage, if present, or a JSON dataset
* rendering each product through its own component
* adding new products using a form
* dynamically updating the product list when new entries are created, edited or deleted
* data persistence through in-browser local storage

Components involved:

* `Products` – manages the product state and renders the list
* `Product` – renders a single product item
* `ProductDisplay` – the info related part of the Product
* `ProductInput` – the edit form for current Products
* `AddProduct` – form used to create new products

---

## 📂 Project Structure

Example structure of the project:

```
src
 ├─ assets
 ├─ components
 │   ├─ IronHack
 │   ├─ products
 │   ├─ session1
 │   ├─ session2
 │   ├─ session3
 │   │
 │   ├─ IronHack.jsx
 │   ├─ Products.jsx
 │   ├─ Session1.jsx
 │   ├─ Session2.jsx
 │   └─ Session3.jsx
 │
 ├─ data
 │   ├─ berlin.json
 │   └─ products.json
 │
 ├─ App.css
 ├─ App.jsx
 ├─ index.css
 └─ main.jsx
```

---

## 🛠️ What This Project Demonstrates

* building UI with React functional components
* managing component state with hooks
* handling user input through forms
* rendering lists dynamically
* structuring a small React project into reusable components
