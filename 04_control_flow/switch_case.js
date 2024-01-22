// comparison operator: < > <= >= === == != !== 

// if(2 !== "2") {
//     // 2 == "2" -> true
//     // but 2 === "2" -> false: bcz type value + type checking in ===
//     console.log('executed');
// }



// switch case: 
// FOR: if () else if () else if () ..... else 

// NOTE: if a condition matches in a case > if we don't put break > 
    // it will execute all code till break is encountered without checking rest of the cases.

const key = "january";

switch (key) { // variable name
    case "january": // value
        console.log("jan");
        break;
    case "february":
        console.log("feb");
        break;
    case "march":
        console.log("mar");
        // break; -> op: mar april may default case matched
    case 4:
        console.log("apr");
        // break;
    case 5:
        console.log("may");
        // break;
    default:
        console.log("default case matched");
        break;
}