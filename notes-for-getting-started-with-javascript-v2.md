---
title: "Notes for Getting Started with JavaScript V2"
tags: ""
---
# Understanding types

Types refers to the informaiton included in a variable. 
Having a solid hold on this is important to prevent bugs caused by misusing types. 

## Primitive Types

-   these seem to be the most confusing
-   I used to think of variables this way, the code is executed line by line and does not look back at previous assignments for information. 
    -   This type of information is stored within 'STACK' memory. That means that the information cannot be rewritten(?) 
    -   These are set by "passby value" 
        -   This is different from a "passby reference" 
        -   When a variable is set equal to a primitive type, that value will be simply coppied into the new variable. 
            -   This includes when a new variable is set equal to another varaible that contains a primitive type. For example: 
            ```JS
            let a = 10;
            let b = a;
            console.log(a);    //result: 10
            console.log(b);    //result: 10
            ```
            -   However, if the first variable (a) is changed, the resulting change will not be carried over into the second variable (b). 
            ```JS
            //let's pretend the code didn't stop for the description above      
            let a = 12;
            console.log(a);    //result: 12
            console.log(b);    //result: 10
            ```

## Non-Primitive Types

-   To me, these feel more like a web, the changes in one location have an effect elsewhere. 
-   Non-Primitive Types include
    -   Arrays
    -   Objects
    -   Classes
-   Non-Primitive types work by storing a pointer to a memory address. This means if you set a new variable equal to an existing one, the new varialbe dosen't contain the information that you are looking for, it contains the pointer. 
    -   this means any changes to either variable will be reflected in the other. Loosley described, they are tied together in a web. 

## How I think about Primitive vs. non-Primitive types:

-   Imagine a library, in the front entry of the library, The Librarian sits at a desk and is working with you to complete your program. The libriarian is equivilant to the command line or program that you are using to execute the code. Behind the librarian is large shelf full of bins, this is the 'STACK' memory. Off to the side, there is a series of book shelves. They all have an address that can be used to quickly find the shelf and retreive the information there. This is like the 'HEAP' memory.

### Primitive Variables

-   When you write a Primitive variable the librarian writes that information on an index card and puts it into a drawer and then relables that drawer to match the name of your new Primative variable. So now, there is a drawer named by the varialbe containing the infomation assigned to that variable. 
-   In the case when a Primitive variable is assigned equal to another Primitive variable:
    -   Given existing Primitive variable A, and new Primitive variable B, the Librarian takes the index card out of the drawer of the existing Primitive variable A, copies that index card and then places one copy into the drawer labled A and the second copy into a new drawer that gets labled B. From here on out, the variables are not connected to eachother beacause they are two separate drawer. 

### Non-Primitve Variables

-   For the case of the non-Primitve value:

    -   Let's say the new non-Primitive variable is named C. The Librarian still takes that information, but it dosen't fit into the small drawer on the shelf so instead, the librarian writes an address for one of the book shelves in the 'HEAP' onto an index card and places the card in the 'STACK' drawer that gets labled C. 
        -   This means that any variable set equivilant to this non-Primitive variable will now also contain an address for the bookshelf and any changes made to the information on the bookshelf will effect any other drawer that points to that same address. 

    # Versions of For Loops

    Apparently there are more than one type of for loops. 

    ### The Classic

    -   this is just a traditional for loop, use the for keyword followed by a counting variable usually `i`, and then a logical statement to determine how many times to loop. 

    ### For...of loop

    -   this loops through property values
    -   syntax: 
        ```js
        for(foo of objectToBeRead){
        	statements
        }
        ```
    -   it is important to note that `foo` is a nonspecific variable that is used similarly to how a counting variable would be used e.g. `i`

    ### For...in loop

    -   this loops through property names 
    -   for..in loop goes through inumerable properties while for..of loops through itterable objects.
        ```js
        for(foo in objectToBeRead){
        	statements
        }
        ```

# The Three Pillars of JS

These three pillars will take years to fully grasp but can be covered in this course to get a basic understanding.

-   types/Coersion
-   Scope/Closures
-   this/Prototypes

## Types/Coersion

\-Primitive types
\-converting types
\-checking equality

### Primitive types

JS does not have fixed type variables, These are the types that a variable can be.     

-   these are the types of variables in JS   
    -   Undefined
    -   string
    -   boolean
    -   number
    -   object
        -   function
        -   array
    -   symbol

### NaN

-   This is a special operator but does exactly mean 'not a nubmer' as you would expect.  It only indicates that an invalid numeric operation has occured. 
-   A useful method that can be used invovling NaN is `isNaN` this is useful because it reports back if a variable has been set to NaN
    -   Note, this does not retur that a string is not a number, it only returns NaN if an invalid opration has occured.

### `new` keyword

-   Instances to use `new`
    -   This, intuitively, is done to create a new one of these. 
        -   `Object()`
        -   `Array()`
        -   `Function()`
        -   `Date()`
        -   `RegExp()`
        -   `Error()`
-   Instances where `new` is NOT used
    -   This is done to execute a **type conversion**
        -   `String()`
        -   `Number()`
        -   `Boolean()`

### Coercion

-   This is basically converting variables between types. 
-   The `+` operator can be used for implicit corercion. 
    -   this can be used like this 
        ```js
        console.log(foo+"")     //String contianing contents of foo, even if foo is typeOf Number. 
        ```

### Falsy and Truthy

These are variables, when converted to Booleans will become false or true respectivley. 

-   Falsy values
    -   "" eg. empty string
    -   0, -0 
    -   null
    -   NaN
    -   false
    -   undefined
-   Truthy Values
    -   This is prettymuch anything else
        -   "foo"
        -   23
        -   an object
        -   an array 
        -   true
        -   function(){..}
        -   ......

### Checking equivilancy

-   The typical understanding on double vs tripple equals says
    -   == checks value (loose)
    -   === checks value (strict)
-   the actaul definition says
    -   == allows coercion (types different) 
    -   === disallows coercion (types same)

## Types/Closures

-   Nested Scope
-   Closure 

### Scope

Basically, where does JS look for things. 

### Unfefined vs Undeclared

-   These are different
    -   Undefined has been declared but has no value
    -   Undeclared means it has never been typed before 

### Function Expressions

-   This is what happens when a function is assigned to a variable. 
    -   There are two types of function expressions. 
        -   Anonymous function expression
            -   This is the case when a function is declared and immediatley followed by a set of parens like this: `function(){..}`
        -   Named function expression
            -   The same but with a name. 

-   Arrow Function Expressions
    -   This is a more "terse" version of a function expression. It makes the code more opaque. 

-   IIFE's 

    -   Immediatley Invoked Function Expression 

    ```JS
    var teacher = "Kyle";

    (function anotherTeacher() {
        var teacher = "Suzy";
        console.log(teacher);        // Suzy
    } ) ();
    console.log(teacher);            // Kyle
    ```

    -   this can be used to collect a set of variables to protect them from encroaching on the outer scope. 

-   Block Scoping 

    -   this creates a new scope within the curlies that serves the same purpose of IIFE's without the clutter. 

    ```JS
    var teacher = "Kyle";

    {
      let teacher = "Suzy";
      console.log(teacher);        // Suzy
    }

    console.log(teacher);          // Kyle
    ```

-   Closure
    -   Closure is when a function "remembers" the variables outside of it, even if you pass that function elsewhere. 

```JS
function ask(questions){
    setTimeout(function.waitASec(){
    	console.log(question);
	},100);
}

ask("What is closure?"); //"What is closure?"
```

-   In this example, the function waitASec "has closure" over the function ask. I think this means that the ask function will not close unitl the setTimeout does. Needs confirmation. 

## This/Prototypes

-   this 
-   Prototypes
-   class {}

### This

-   the this keyword is 'flexible' as opposed to 'lexical' like the rest of the language 
    -   using this allows for functions to be reuseable in various contexts. 

### Prototypes

-   uses the keyword `new` which creates a prototype 
-   is a way to apply repeating values to multiple objects by pointing to one chunk of code. For example: 

```JS
function Particle() {
    this.x = 100;
    this.y = 99;
    // the above produces the properties that are being applied to each individual item. 
    //one could now use the same function for each particle produced later but this is confusing and non modular. 
Particle.prototype.show = function() {
    point(this.x, this.y);
}
    
var p;

var v;
    
function setup() {
    createCanvas (600,300);
    p = new Particle();
    
```

-   that example may not be the most useful. Howerver, here is another way that I look at prototypes. 
    -   prototypes are a way to tell the program how to handle various methods being applied to a specific object. 
        -   For example: in JS, there is an inbuilt prototype array. In the console, logging the variable produces a value and a dropdown. In that dropdown there are the values entered into the array along with a property that looks like `__proto__` this dropdown lists all of the methods that can be applied to this specific object. 
            -   This appears to be a weak understanding of the full concept but may be useful. 
-   It appears that the `class` keyword will cover all of this automatically. 
      

### Class

-   This is layred ontop of the prototype style 
    -   much simpler and 'attractive'
-   Class allows you to both create the prototype and define the methods associated with it. 
-   Class starts with a self named keyword and looks like this:

```JS
class className {
    constructor(valueToBePassedIn1,valueToBePassedIn2) { //constructyor is a keyword here that creates an 
//annonymous function to define a property of the
//targeted object.
        this.newPropertyName1 = valueToBePassedIn1;
        this.newPropertyName2 = valueToBePassedIn2;
    }
	newMethodName(valueToBePassed3) {
        //the substance of the method
    }
}
    
```

# General Principals

-   Always keep things as narrowly hidden as possible. This includes things like using Block Scoping (defined above) whithin a function to prevent that variable from spilling over into the rest of the function or elsewhere in the code. 

\-**Private Variables** are what the variables hidden within block scoping are called. 
\-A way to indicate a **private variable** is by prefixing it with an underscore like this "\_variableName"

# Wrapup

This was a useful class, I enjoyed the materials and would like to come back to this down the road to see how I feel about the informaiton that is in it. I need a lot more work in JS before I can be actually proficient on my own. Keep taking diligent notes and readng them before dropping back into the classes. 
