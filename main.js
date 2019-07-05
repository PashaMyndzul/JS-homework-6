//Task 1
function printTimeout(str, n) {
    const timeNumber = n * 1000;
    setTimeout( () => { 
        
        console.log (str) ; }, timeNumber); 
        
}
printTimeout('hello', 5);

//Task 2
function sumAll(n) {
    if (n == 0) return 0;
    else
    return n + sumAll (n - 1);
  }
console.log(sumAll (2) ); 
console.log(sumAll (4) );  

//Task 3
function bombTimer(str, time) {
    let timer = setInterval( function () {
        console.log(time);
        time = time - 1;
    }, 1000);
    setTimeout(function () {
        clearInterval(timer);
        console.log(str);
    }, time * 1000 + 999);
    return (' RUN ): ');
    
}
//Task 4
function factorial(n) {
    if (n == 0) return 1
    else 
    return n * factorial(n - 1); 
      
}
console.log(factorial (3) ); 
console.log(factorial (5) ); 

//Task 5
function bombTimer(str, time) {
    let timer = setInterval( function () {
        console.log(time);
        time = time - 1;
    }, 1000);
    setTimeout(function () {
        clearInterval(timer);
        console.log(str);
    }, time * 1000 + 999);
    return (' RUN ): ');
}
//Task 6
function filterNumber(arr, maxNumber) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < maxNumber) 
           newArr.push(arr[i]);
    }
    return newArr;
}
console.log(filterNumber( [1, 4, 8, 1, 20], 5) );
//Task 7
function minMax(arr) {
    let newArr = [];
    let max = Math.max.apply(null, arr) ;
    let min = Math.min.apply(null, arr) ;
    return (newArr.concat ('max:'+ max,'min:' + min) );  
}
console.log(minMax([1, 4, 8, 2, 20]));

//Task 8
function average (arr) {
    const total = arr.reduce( (total, number) => total + number, 0);
    return total / arr.length;
}
console.log(average( [1, 4, 2]).toFixed(2) );
//Task 9
function concatFirstNestedArrays(arr) {
    let newArr = arr.reduce(function(accumulator,currentValue) {
        return accumulator.concat(currentValue)
    });
   return newArr; 
}
console.log(concatFirstNestedArrays( [ [0, 1], [2, 3], [4, 5] ]) );

//Task 10
const usersWithId = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
  ];
function usersToObject(usersWithId ) {
    let newUsers = {};
    for (let i = 0; i < usersWithId .length; i++) {
        let keys = usersWithId [i].id; 
        newUsers[keys] = usersWithId [i];
    }
    console.log(newUsers);
}
usersToObject(usersWithId);

//Task 11
const users = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '1992-11-22' }   
  ];
function getAdultNames(users) { 
    let usersAge = [];
    for (let i = 0; i < users.length; i++){
        let date = users[i].birthday; 
        let age = ( (new Date().getTime() - new Date(date) ) / (24 * 3600 * 365.25 * 1000) ) | 0;
      
        if (age >= 18) {
            usersAge.push(users[i].name + ' ' + age );
        }
    }
    console.log(usersAge.join(',') );
}
getAdultNames(users) 
//Task 12

function filterUsersByMonth(arr, month) { 
    for (let i = 0; i < arr.length; i++){
        let data = arr[i].birthday; 
        let usersMonths = new Date(data).getMonth() + 1;
        if (usersMonths == month) {
            console.log(arr[i]);
        }
    }
}
const arr = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];
filterUsersByMonth(arr, 2)




