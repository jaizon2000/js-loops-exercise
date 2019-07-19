/* TITLE */
'use strict';

function exercise1() {
    for (let i = 0; i < 500; i++) {
        console.log("I'm so happy!");
    }
}

function exercise2() {
    for (let i = 4; i <= 800; i += 4) {
        console.log(i);
    }
}

function exercise3() {
    for (let i = 55; i >= 11; i -= 2) {
        console.log(i);
    }
}

function exercise4() {
    let total = 0;
    for (let i = 5; i <= 50; i++) {
        total += i;
        console.log(total);
    }
}

function exercise5() {
    let total = 0;
    for (let i = 10; i <= 100; i += 10) {
        total += i;
        console.log(total);
    }
}

function exercise6() {
    
    let num = Number(prompt('Enter a num: '));
    console.log('print multiples of ' + num);

    for (let i = 1; i <= num; i++) {
       let multi = num / i;

        if (multi % 2 == 0) {
            console.log(i + ', ' + multi);
        }
    }
}