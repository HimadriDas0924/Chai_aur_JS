- Properties of Element 
    `const parent = document.querySelector('.parent')` -> Parent.
    `const dayOne = document.querySelector('.day')` -> Child.
    
    1. `parent.children` : HTML Collection of all the parent's childrens.

    2. Access 1st and Last element Child
        - `parent.firstElementChild`
        - `parent.lastElementChild`

    3. Access Child -> Parent
        - `dayOne.parentElement`

    4. Sibling -> Next Sibling
        - `dayOne.nextElementSibling`

    5. `parent.childNodes` -> **IMP**:  returns a NodeList of` text nodes(i.e Actual Text OR 1 whitespace till you encounter the next node)`, `comment nodes`, `element nodes`.

    6. Create New Element:
        - `const elem = document.createElement('div' OR 'h1')`. -> i.e *using document object*
        - Add Properties:
            - `elem.className = "", elem.id = "", elem.style.backgroundColor = ""`.
            - 2 ways to add Text inside an element:
                - m1) `elem.innerText = ""`.
                - m2) `const text = document.createTextNode('my custom text')`. `elem.appendChild(text)` bcz `<div>himadri das</div>` -> "himadri das" is a text node inside div.

    
    7. Add Element to DOM:
        - `document.body.appendChild(elem)`
        - Similary within any parent you can add a child inside it using: parent`.appendChild(child)`

    8. Replace (contents of) an Elements from the DOM:
        - M1)
            - select the child with whom you want to replace eg: secondChild.
            - create the new child eg: newSecondChild.
            - `secondChild.replaceWith(newSecondChild)`.
        - M2) 
            - `element.innerHTML = ""` -> to insert the new inner HTML.
        
        - M3)
            - `element.outerHTML = ""` -> to insert the new entire HTML of the element.

    9. REMOVE elem from DOM:
        - select elem, then `elem.remove()`