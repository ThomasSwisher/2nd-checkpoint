let aliensHarvested = 0
let x2Harvesters = 0
let x5Harvesters = 0
let totalHarvesters = 0
let x2Adjustprice = 5
let multiplier = 1
let purchaseUpgrades = {
    alienShips1: {
        price: 5,
        quantity: 0,
        multiplier: 2,
        totalShips: 0
    }, alienShips2: {
        price: 10,
        quantity: 0,
        multiplier: 5,
        totalShips: 0
    }, alienShips3: {
        price: 15,
        quantity: 0,
        multiplier: 10,
        totalShips: 0
    }, alienShips4: {
        price: 20,
        quantity: 0,
        multiplier: 30,
        totalShips: 0
    }
};

// REVIEW
function buyAlienShip1() {
    // NOTE access the object to get its price assign to variable
    let ship = purchaseUpgrades.alienShips1

    if (aliensHarvested >= ship.price) {
        //  
        aliensHarvested = aliensHarvested - ship.price
        x2Harvesters = ship.quantity += 1
        multiplier = ship.price *= 2
        totalHarvesters += ship.multiplier
        ship.price = x2Adjustprice
        x2Adjustprice++
        update()
    }
}

function buyAlienShip2() {
    let ship = purchaseUpgrades.alienShips2

    if (aliensHarvested >= ship.price) {
        aliensHarvested = aliensHarvested - ship.price
        x5Harvesters = ship.quantity + 1
        multiplier = ship.price *= 5

        // Click Upgrade
        //totalHarvesters += ship.multiplier
        update()
    }
}

function buyAlienShip3() {
    let ship = purchaseUpgrades.alienShips3

    if (aliensHarvested >= ship.price) {
        aliensHarvested = aliensHarvested - ship.price
        totalHarvesters = ship.quantity + 1
        ship.price *= 2
        //totalHarvesters += ship.multiplier
        update()
    }
}

function buyAlienShip4() {
    let ship = purchaseUpgrades.alienShips4

    if (aliensHarvested >= ship.price) {
        aliensHarvested = aliensHarvested - ship.price
        totalHarvesters = ship.quantity + 1
        ship.price *= 2
        totalHarvesters += ship.multiplier
        update()
    }
}


function mine() {
    aliensHarvested = aliensHarvested + multiplier
    update()
}

function update() {
    document.getElementById('aliensHarvested').innerText = aliensHarvested
    document.getElementById('harvester-x2').innerText = x2Harvesters
    document.getElementById('harvester-x5').innerText = x5Harvesters
    document.getElementById('harvester-x10').innerText = purchaseUpgrades.alienShips3.quantity
    document.getElementById('harvester-x20').innerText = purchaseUpgrades.alienShips4.quantity
    ///add others 
    document.getElementById('upgradeNumber').innerText = x2Harvesters + x5Harvesters
    document.getElementById('priceUpdate').innerText = x2Adjustprice

}
// NOTE make sure to update the price and quantity for the ships as well as it might have gone up

function collectAutoUpgrades() {
    buyAlienShip1()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

update()
startInterval()
