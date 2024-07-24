//console.log(userPassword)

/**
 * "var" is the oldest way to declare a variable in JavaScript.
 *  Variables declared with "var" have a function-level scope, meaning they are only accessible within the function in which they were declared. 
 *  They also have "hoisting" behavior, which means they are accessible throughout the entire scope of the function, regardless of where they were declared. 
 * However, because of its function-level scope, variables declared with var can lead to unexpected behavior and are generally not recommended.
 */


const userId = 123

/**
 * "const" variables useful for declaring constants
 * "const" variables have the block-level scope, and, they are not accessible before they are declared.
 */

let userName = "Aparna"
var userPassword = "Aparna@67"
userAdd = "Pune";
let userCity;

// userId = 345 // const cannot be changed

/* let */
/**
 * Always use let while defining variable as it is blocked scope
 * Variables declared with "let" have the block-level scope, 
 * meaning they are only accessible within the block in which they were declared.  */    
/* They also have the concept of the temporal dead zone, which means they are not accessible before they are declared.  */


console.table([userId,userName,userPassword,userAdd,userCity])