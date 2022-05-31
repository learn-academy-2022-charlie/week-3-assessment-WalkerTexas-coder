# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer:

  Researched answer:
   `this` in JavaScript is a method that is used within an object to refer to itself. For example, while working in React, we would often create states as an object with key:value pairs. If we wanted to invoke the key:value pair we would first need to invoke the class using `this`, object, and key value using dot notation. After research, `this` is a *keyword*, not a method, that references a value within the object `this` is placed in. If `this` is used outside of an object, it will return a value of undefined. -Michael's full answer



2. What is React? Why would you use it?

  Your answer:

  Researched answer:
  React is the most popular front-end application for creating Web applications, used by most fortune 500 companies. Companies use React because it allows them to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. - Jorge



3. Which lifecycle method is required in a React class component?

  Your answer:

  Researched answer:
  Render is the most used lifecyle method and is required to have in a class component in React. Render is simply what tells React what to display onto the page. It displays the specified HTML code inside the specified HTML element.I have used render when creating a React Application everything that we want to display on the screen needs to be in the render method, all inside of a return as well. - Nic



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer:

  Researched answer:
  JSX allows us to produce React elements and combine JavaScript with HTML so we don’t have to make multiple files and link them together. We can just do it all in one! Some other syntax differences I found were pretty cool, first JSX allows all tags to be self closing if you so choose. Making a class for an element isn’t defined as the attribute class, but as className. You can also write inline styling as objects using JSX.  -Logan



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:

  Researched answer:
Yarn stands for Yet Another Resource Negotiator which was created by Facebook in cooperation with Exponent, Google, and Tilde to find a better ‘NPM’. Yarn was created to be more secure, more efficient, and be more consistent. The initialization of Yarn install creates a package.json, yarn.lock, and node_modules folder with projects root folder. The install process consists of three steps: resolution, fetching, and linking. The resolution step finds all the dependencies and sub-dependencies using the registry. The fetching step checks all the offline folders to see if the dependencies need to be downloaded, if needed the installs will be downloaded. The linking step copies any global installs that are necessary to the projects node_modules directory. -Damien


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  Researched answer:
  Anonymous functions can be defined without a name:
```javascript
  (function(){
    return "No name :( "
  }
  var nameless = function() {
    return "No name :( "
  }
```
As you can see, we stored the function within the variable. These functions are not accessible once it has been initialized. We can access the function by the variable we assigned it to. In ES6 the arrow function lets us declare anonymous functions without using the function() keyword. So in retrospect, all the functions we made in class have been anonymous functions.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Can be done using if, &&, !, ? true : false. Using different boolean operators we can select for which condition will render different elements. 

2. Object-oriented programming: OOP is the programing paradigm that relies on classes and object versus pure functions and logic. Encapsulation, abstraction, inheritance, polymorphism

3. Ruby: Open source server sided scripting language that is OOP. 

4. Ruby blocks: anonymous function that can be passed into methods 

5. Ruby hashes: a library of key value pairs where the index is created through the keys and can be custom. 
