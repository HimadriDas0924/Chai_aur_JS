## All Projects link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-mxdwud?file=index.html)

# Solution Code

## Project 1 : color Changer

``` javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

// now attach click eventlisteners to each of the buttons
// after attaching the event listerner: what to do ? : for that set up a cb fn(pass the event obj) which has different properties regarding the event.

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); // element on which event was performed

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

````