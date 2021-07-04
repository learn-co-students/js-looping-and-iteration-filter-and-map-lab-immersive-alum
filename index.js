// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter( driver => driver.revenue> revenue);
};

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
};

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
};

function exactMatchToList(drivers, matcher){
  matchArray = exactMatch(drivers, matcher);
  return matchArray.map( driver => driver.name )
}
