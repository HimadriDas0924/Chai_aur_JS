0. JS by default: is a `single threaded, synchronous` language.

    - single threaded is quite a disadvantage bcz you cannot execute multiple things at once.

    - But Js is never used just by itself, it is used along with a `runtime env` like browser or NodeJs.

1. async: non blocking code: doesn't block the flow of the program.
Blocking code: an operation waits for the execution of the previous operation before proceeding forward.

2. Whether to use blocking or non blocking code: depends on the use case.
    - eg: (async method){if you're doing CRUD on user DB} and based on that you want to send user a message. We cannot directly send user the message before ensuring if task was done without any error. So we need to wait for the execution of prev thing before sending user the message.