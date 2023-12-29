const accountId = 14442
let accountEmail = "srajal"
var accountPassword = "123"
accountCity= "jhansi"
let accountState;

// accountId = 2
// TypeError: Assignment to constant variable.

accountEmail="risabh"
accountPassword="3332"
accountCity="delhi"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity  , accountState ])
// (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │   14442   │
// │    1    │ 'risabh'  │
// │    2    │  '3332'   │
// │    3    │  'delhi'  │
// │    4    │ undefined