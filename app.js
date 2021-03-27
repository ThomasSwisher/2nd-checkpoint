let aliensLanded = 0
let alShipsAcquired = 0
let upgradeIn = 10
let purchaseUpgrades = {
    alienShips1: {
        price: 10,
        quantity: 0,
        multiplier: 2
    }, alienShips2: {
        price: 15,
        quantity: 0,
        multiplier: 10
    }, alienShips3: {
        price: 20,
        quantity: 0,
        multiplier: 15
    }, alienShips4: {
        price: 20,
        quantity: 0,
        multiplier: 2
    }
};


// function multiplyUpgrade1() {
//     if () { }
// }

// REVIEW
function buyAlienShip1() {
    // NOTE access the object to get its price assign to variable
    let ship = purchaseUpgrades.alienShips1

    if (aliensLanded >= ship.price) {
        aliensLanded = aliensLanded - ship.price
        ship.quantity++
        ship.price *= 2
        // Click Upgrade
        alShipsAcquired += ship.multiplier
        update()
    }
}

function buyAlienShip2() {
    if (aliensLanded >= 15) {
        aliensLanded = aliensLanded - 15
        alShipsAcquired = alShipsAcquired + 1
        update()
    }
}

function buyAlienShip3() {
    if (aliensLanded >= 20) {
        aliensLanded = aliensLanded - 20
        alShipsAcquired = alShipsAcquired + 1
        update()
    }
}
function buyAlienShip4() {
    if (aliensLanded >= 30) {
        aliensLanded = aliensLanded - 30
        alShipsAcquired = alShipsAcquired + 1
        update()
    }
}

function mine() {
    aliensLanded = aliensLanded + 1;
    update()
}

function update() {
    document.getElementById('aliensLanded').innerText = aliensLanded
    document.getElementById('upgradeNumber').innerText = alShipsAcquired
    // NOTE make sure to update the price and quantity for the ships as well as it might have gone up

}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades,
        alert(),
        3000);
}

update()
startInterval()
