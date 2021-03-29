let aliensHarvested = 0
let x2Harvesters = 0
let x5Harvesters = 0
let x10Harvesters = 0
let x20Harvesters = 0
let totalHarvesters = 0
let x2Adjustprice = 5
let multiplier = 1
let purchaseUpgrades = {
    alienShips1: {
        price: 5,
        quantity: 0,
        multiplier: 2,
    }, alienShips2: {
        price: 10,
        quantity: 0,
        multiplier: 5,
    }, alienShips3: {
        price: 15,
        quantity: 0,
        multiplier: 10,
    }, alienShips4: {
        price: 20,
        quantity: 0,
        multiplier: 30,
    }
};

// REVIEW
function buyAlienShip1() {
    // NOTE access the object to get its price assign to variable.
    let ship1 = purchaseUpgrades.alienShips1

    // NOTE compare harvested aliens to price of upgrade (do I have enough if so execute this function).
    if (aliensHarvested >= ship1.price) {

        // NOTE deduct price from aliens harvest upon upgrade.
        aliensHarvested = aliensHarvested - ship1.price

        // NOTE add one to ship1 quantity each time this function runs.
        x2Harvesters = ship1.quantity += 1

        // NOTE need to mulitply the ship1.price by 2 every time this function runs
        multiplier = ship1.price *= 2

        //totalHarvesters += ship1.multiplier

        // NOTE needed to advance the cost of the upgrade used one to keep it simple
        ship1.price = x2Adjustprice
        x2Adjustprice++

        // NOTE upon completion of the update this adjusts the 
        update()
    }
}

function buyAlienShip2() {
    let ship2 = purchaseUpgrades.alienShips2

    if (aliensHarvested >= ship2.price) {
        aliensHarvested = aliensHarvested - ship2.price
        x5Harvesters = ship2.quantity += 1
        //multiplier = ship2.price *= 2
        //totalHarvesters += ship2.multiplier
        //ship2.price = x2Adjustprice (used to advance the cost of upgrade only doing the first "buyAlienShips1")
        //x2Adjustprice++
        update()
    }
}

function buyAlienShip3() {
    let ship3 = purchaseUpgrades.alienShips3

    if (aliensHarvested >= ship3.price) {
        aliensHarvested = aliensHarvested - ship3.price
        x10Harvesters = ship3.quantity += 1
        //multiplier = ship3.price *= 2
        //totalHarvesters += ship3.multiplier
        //ship3.price = x2Adjustprice
        //x2Adjustprice++
        update()
    }
}

function buyAlienShip4() {
    let ship4 = purchaseUpgrades.alienShips4

    if (aliensHarvested >= ship4.price) {
        aliensHarvested = aliensHarvested - ship4.price
        x20Harvesters = ship4.quantity += 1
        //multiplier = ship4.price *= 2
        //totalHarvesters += ship4.multiplier
        //ship4.price = x2Adjustprice
        //x2Adjustprice++
        update()
    }
}

// NOTE original onclick function adding to the score
function mine() {
    aliensHarvested = aliensHarvested + multiplier
    update()
}

// NOTE using this function to execute changes to the DOM upon the completion of other functions.           
function update() {
    document.getElementById('aliensHarvested').innerText = aliensHarvested
    document.getElementById('harvester-x2').innerText = x2Harvesters
    document.getElementById('harvester-x5').innerText = x5Harvesters
    document.getElementById('harvester-x10').innerText = x10Harvesters
    document.getElementById('harvester-x20').innerText = x20Harvesters
    document.getElementById('upgradeNumber').innerText = x2Harvesters + x5Harvesters + x10Harvesters + x20Harvesters
    document.getElementById('priceUpdate').innerText = x2Adjustprice
    // NOTE make sure to update the price and quantity for the ships as well as it might have gone up.
}


function collectAutoUpgrades() {
    buyAlienShip1()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

update()
startInterval()
