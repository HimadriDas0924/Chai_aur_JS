1. Don't include "js events" within the HTML.
    eg:
    ```` html
        <div onclick = "alert('message')">
    ````
    bcz this is not a good approach when we scale up. `Same can be done in React and it'll still be good code.`

2. ``` javascript 
        // BEST APPROACH FOR LISTENING TO EVENTS:

        // addEventListener(3 parameters -> event type, cb fn, false(by default))

            // 3rd para: {false (by default): event bubbling: bottom -> top: i.e click on child: behavior of event listener on child -> then on parent -> it propagates upward},

            // {true: event capturing: top -> Bottom: i.e click on child -> 1st operation of event listener on top most parent then it proceeds downwards}


        // IMP things of Event Listener:

            // type, timestamp, defaultPrevented
            // target, toElement, srcElement -> to target the element on which event was performed, currentTarget,
            // clientX, clientY, screenX, screenY
            // altkey, ctrlkey, shiftkey, keyCode -> to know which key is pressed

    
        document.getElementById('images').addEventListener('click', function(e) {
            console.log('clicked inside the ul')
        }, false)

        document.getElementById('owl').addEventListener('click', function(e) {
            // console.log(e)
            console.log('clicked on owl')
            e.stopPropagation(); // to stop event propagation 
        }, false)

        document.getElementById('google').addEventListener('click', function(e) {
            console.log('google clicked');
            e.preventDefault()
            e.stopPropagation()
        }, false)

        // 3rd para: true, false, false, true && o/p: one, four, three, two

        // 3rd para: false, true, true, false && o/p: two, three, four, one

        // 3rd para: true, false, true, false && o/p: one, three, four, two

            // observation: 1st whichever ones are supposed to do event capturing && then ones which are supposed to do event bubbling, both in their supposed order.

            // NOTE: capturing(if it's supposed to): till the element you clicked onto: not further than that && bubbling(if it's supposed to) from that element you clicked onto, not below than that.

        document.getElementById('one').addEventListener('click', function(e) {
            console.log('one clicked')
            // e.stopPropagation() // to stop complete propagation: i.e no more capturing OR bubbling 
        }, true)
        document.getElementById('two').addEventListener('click', function(e) {
            console.log('two clicked')
        }, false)
        document.getElementById('three').addEventListener('click', function(e) {
            console.log('three clicked')
            e.stopPropagation() 
        }, true)
        document.getElementById('four').addEventListener('click', function(e) {
            console.log('four clicked')
        }, false)
    ```

3. to target on which elem the event was performed: `e.target` or `e.srcElement`

4. tagName of the element i.e eg: `'IMG', 'P', 'LI', 'DIV', etc` : `e.target.tagName`
