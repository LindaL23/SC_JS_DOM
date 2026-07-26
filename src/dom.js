// TASK 1: ACCESSING AND STYLING THE BODY
/*
    The 'document' keyword opens up the entire tree. We can reach the body instantly.
    Note the camelCase spelling differences on the Style Object (eg: backgroundColor vs background-color)
*/




// TASK 2: SELECTING AND STYLING BY ID
// getElementById strictly targets a unique ID string (No hashtag required!)



// Modifying Content


// Modifying Style via ID Selectors



// TASK 3: SELECTING AND STYLING WITH QUERYSELECTOR
/*
    querySelector uses standard CSS selectors (. for class, # for ID)
    It only selects the FIRST matching element it finds.
*/

// Styling a class using querySelector


// Altering text of an ID using querySelector



// TASK 4: TARGETING MULTIPLE ELEMENTS (OPTIONAL)
// These methods return a collection (Array-like list). To style one, we must use an index.





// TASK 5: .INNERHTML VS .INNERTEXT
/*
    .innerText only treats text as a literal string. 
    .innerHTML lets you inject raw HTML formatting tags right through your JavaScript.
*/



// TASK 6: MANIPULATING CLASSES WITH .CLASSLIST
/*
    .classList allows us to add, remove, or toggle CSS classes on an element.
    This is a cleaner way to apply styles than directly modifying the .style property.
    Direct inline styling using .style can make your files messy. 
    A better way is to write the styling rule in CSS, and use .classList.add() to apply it.
    Note: For this to work, ensure you add '.alert-mode { border: 3px solid red; }' to your style.css file!
*/



// TASK 7: DOM NODE TRAVERSAL (.PARENTELEMENT)
/*
    You don't always need an ID to find a box. If you have targeted a child element, 
    you can climb up the visual tree to grab its parent using .parentElement.
*/
