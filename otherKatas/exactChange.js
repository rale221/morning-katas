// Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
// for example exactChange(77)
// would return [25, 25, 25, 1, 1]
// so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
// exactChange(12) would return [10, 1, 1]
// 10 cents, 1 penny, 1 penny
// if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins

//Jonathan solution
function exactChange(cents) {
    let x = cents;
    let o = x % 5;
    let f = 0;
    let t = 0;
    let q = 0;
    x -= o;
    while (x >= 25) {
        x -= 25;
        q++;
    }
    while (x >= 10) {
        x -= 10;
        t++;
    }
    while (x >= 5) {
        x -= 5;
        f++;
    }
    return getResults(q, t, f, o);
}

function getResults(q, t, f, o) {
    let str = "";
    if (q) {
        for (i = 0; i < q; i++) {
            str += " 25";
        }
    }
    if (t) {
        for (i = 0; i < t; i++) {
            str += " 10";
        }
    }
    if (f) {
        for (i = 0; i < f; i++) {
            str += " 5";
        }
    }
    if (o) {
        for (i = 0; i < o; i++) {
            str += " 1";
        }
    }
    return str.slice(1);
}

//John solution
function coinsToReturn(TotalCHangeToBeReturned) {
    let coins = [25, 10, 5, 1];
    i = 0;
    let corectChange = [];

    while (TotalCHangeToBeReturned > 0) {
        if (coins[i] > TotalCHangeToBeReturned) {
            i = i + 1;
        } else {
            corectChange.push(coins[i]);

            TotalCHangeToBeReturned = TotalCHangeToBeReturned - coins[i];
        }
    }
    return corectChange;
}

//Xavier solution
const sorryeh = [200, 100, 25, 10, 5, 1];
const freedombucks = [25, 10, 5, 1];

function exactChange(money, coins = freedombucks) {
    let change = [];
    for (let i = 0; i < coins.length; i++) {
        while (money >= coins[i]) {
            change.push(coins[i]);
            money -= coins[i];
        }
    }
    return change;
}

//Greg solution
function exactChange(money) {
    let arr = [];
    money = money;
    while (money >= 25) {
        arr.push(25);
        money -= 25;
    }
    while (money >= 10) {
        arr.push(10);
        money -= 10;
    }
    while (money >= 5) {
        arr.push(5);
        money -= 5;
    }
    while (money >= 1) {
        arr.push(1);
        money -= 1;
    }

    return arr;
}

//Juan solution
function exactChange(q) {
    let changeArr = [];

    while (q > changeArr.reduce((a, b) => a + b, 0)) {
        if (q - changeArr.reduce((a, b) => a + b, 0) >= 25) {
            changeArr.push(25);
        } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 10) {
            changeArr.push(10);
        } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 5) {
            changeArr.push(5);
        } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 1) {
            changeArr.push(1);
        }
    }

    return changeArr;
}

//Bobby soltuion
function exactChange(number) {
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    if (number >= 25) {
        quarters = Math.floor(number / 25);
        number = number % 25;
    }
    if (number >= 10) {
        dimes = Math.floor(number / 10);
        number = number % 10;
    }
    if (number >= 5) {
        nickels = Math.floor(number / 5);
        number = number % 5;
    }
    pennies = number;
    let realAnswer = [];
    console.log(quarters, dimes, nickels, pennies);
    let totalCoins = quarters + dimes + nickels + pennies;
    for (let i = 0; i < totalCoins; i++) {
        if (quarters > 0) {
            realAnswer.push(25);
            quarters--;
        } else if (dimes > 0) {
            realAnswer.push(10);
            dimes--;
        } else if (nickels > 0) {
            realAnswer.push(5);
            nickels--;
        } else {
            realAnswer.push(1);
            pennies--;
        }
    }
    let result = realAnswer;
    return result;
}

//Solution with map
function makeChange(num) {
    let coins = [25, 10, 5, 1];
    let result = [];
    let money = num;
    coins.map((ele) => {
        let multiples = parseInt(money / ele);
        for (let i = 0; i < multiples; i++) {
            result.push(ele);
        }
        money = money % ele;
    });

    return result;
}