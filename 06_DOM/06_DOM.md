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

    - `document.querySelector('#id_name' OR '.class_name')` -> the 1st occurrence of this element inside *document*.
        - **NOTE** : similary you can also do: `div1.querySelector()`: to target an element inside div1.

    - `document.querySelectorAll('')` -> all the occurences of this element in a NodeList i.e returns a NODELIST.

    - `document.querySelector('input[type="password"]')` -> i.e we can apply rules of CSS selectors. Sim, `document.querySelector('p:first-child')`

    - `const liList = document.querySelectorAll('li')`: always returns a NodeList of all the <li> elements. 

    - NodeList and HTML Collections are a little different from Arrays But still have some similar properties.
        - eg: NodeList have .forEach() in its prototype but not map, push, pop, etc properties.
            - Can apply some operation on each item using NList.forEach(cb). Yet we can `still convert NodeList to an Array` to apply other operations like map.
                - eg:` Array.from(myNodeList)`.
            - `const myClassList = document.getElementByClassName('class')` => `.getElementByClassName() always returns an HTMLCollection` which doesn't even have .forEach() in it's prototype. So convert to Array then apply iteration methods. `Array.from(myHTMLCollection).`

        - Difference between `.querySelector()` -> `always returns the 1st occurence of the query.` and `.querySelectorAll()` -> `always returns a NodeList, even if there is a single query item present` so access that item using items[0].style.color = "green"