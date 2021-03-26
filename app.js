let aliensLanded = 0
let alShipsAcquired = 0
let upgradeIn = 10
let purchaseUpgrades = {
    alienShips1: {
        price: 20,
        quantity: 0,
        multiplier: 1
    }, alienShips2: {
        price: 50,
        quantity: 0,
        multiplier: 1
    }, alienShips3: {
        price: 100,
        quantity: 0,
        multiplier: 1
    }
};

function buyAlienShip1() {
    if (aliensLanded >= 10) {
        aliensLanded = aliensLanded - 10
        alShipsAcquired = alShipsAcquired + 1
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
}

function collectAutoUpgrades() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

update()
