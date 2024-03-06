1. *Document Object Model :* to help us structure parent child: for easier access of elements
    Window Object 
        -> Document Objec
            -> HTML
                -> Head
                    -> title
                        -> text node (everything in a HTML document is a node)
                    -> meta
                -> Body
                    -> div
                        -> h1
                            -> attribute
                            -> text node
                        -> p
                            -> text node

2. DOM Selectors
    - `const element = document.getElementById('id of element')`
        Or `document.getElementByClassName('class name')`
        - properties of above element: 
            - `.id`, `.className` (to refer to class of an elem in DOM), `.getAttribute('class')` -> (get class value of element), or `.getAttribute('id')` -> (to get the value of the id attribute of the element). `.setAttribute('class', 'class1 class2 class3')` -> now element have class1, class2, class3 -> *`original class of element always gets overwritten`*, `element.style.borderRadius = '15px' OR element.style.backgroundColor = 'green'`.
    
    - `element.innerText` -> only content that is visible in browser,` element.textContent` -> complete text content within the element,` element.innerHTML` -> also contains the HTML present within an element along with text -> *`so using it we can also make changes to HTML within an element`*

    - `document.querySelector('#id_name' OR '.class_name')` -> the 1st occurrence of this element.

    - `document.querySelectorAll('')` -> all the occurences of this element in an ARRAY.
        i.e returns a NODELIST.

    - `document.querySelector('input[type="password"]')` -> i.e we can apply rules of CSS selectors. Sim, `document.querySelector('p:first-child')`