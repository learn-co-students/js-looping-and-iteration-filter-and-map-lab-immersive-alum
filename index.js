// Code your solution here:
function driversWithRevenueOver(arr, val){
  return arr.filter(driver => driver.revenue > val);
};

function driverNamesWithRevenueOver(arr, val){
  return driversWithRevenueOver(arr, val).map(driver => driver.name);
};

function exactMatch(arr, obj){
  return arr.filter(driver => {
    let matches = false;
    for(key in driver){
      if(driver[key] === obj[key])
      matches = true;
    }
    return matches;
  })
};

function exactMatchToList(arr, obj){
  return exactMatch(arr, obj).map(driver => driver.name);
};
