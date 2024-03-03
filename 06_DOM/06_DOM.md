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
        - properties: 
            - `.id`, `.className`, `.getAttribute('class')` -> get class value of element, `.setAttribute('class', 'class1 class2 class3')` -> now element have class1, class2, class3 -> original class of element always gets overwritten, `element.style.borderRadius = '15px'`
    
    - `element.innerText` -> only content that is visible in browser,` element.textContent` -> complete text content within the element,` element.innerHTML` -> also contains the HTML present within an element along with text -> *so using it we can also make changes to HTML within an element*