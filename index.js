// Code your solution here:
function driversWithRevenueOver(drivers, amt){
    return drivers.filter(function(driver){
        return driver.revenue >= amt
    })
}

function driverNamesWithRevenueOver(drivers, amt){
    let n_drivers = driversWithRevenueOver(drivers, amt)
    return n_drivers.map(function(driver){
        return driver.name
    })

}

function exactMatch(drivers, match){
    return drivers.filter(
        function(driver){
            for (const key in match) {
                if (driver[key] !== match[key]) {
                    return false
                }
            }
                return true})
}

function exactMatchToList(drivers, match) {
    matches = exactMatch(drivers,match)
    return matches.map(function(m) {return m.name})
}