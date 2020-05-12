---
title: "Notes for Getting Started with JavaScript V2"
tags: ""
---
# Understanding types

Types refers to the informaiton included in a variable. 
Having a solid hold on this is important to prevent bugs caused by misusing types. 

### Primitive Types

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

### Non-Primitive Types

-   To me, these feel more like a web, the changes in one location have an effect elsewhere. 
-   Non-Primitive Types include
    -   Arrays
    -   Objects
    -   Classes
-   Non-Primitive types work by storing a pointer to a memory address. This means if you set a new variable equal to an existing one, the new varialbe dosen't contain the information that you are looking for, it contains the pointer. 
    -   this means any changes to either variable will be reflected in the other. Loosley described, they are tied together in a web. 
