const accountId = 1445
let accountEmail = "kamal@gmail.com"
var accountPassword = "12345"
accountCity = "Karnal"
let accountState;


// the variables which are not defined js take it as undefined
// const accountId = 3 // not allowed to change the <const>

/*
Prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "Kanwaljeet@gamil.com"
accountPassword = "9941"
accountCity = "Delhi"

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity,accountState]);