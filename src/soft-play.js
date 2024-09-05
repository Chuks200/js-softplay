// soft-play.js
let adults = 0;
let children = 0;

function occupancy() {
  return {
    adults: adults,
    children: children,
  };
}

function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false; 
  }
  adults += numAdults;
  children += numChildren;
  return true;
}

function leave(numAdults, numChildren) {
  if (numAdults > adults || numChildren > children) {
    return false; 
  }
  
  if ((adults - numAdults) < (children - numChildren)) {
    return false; 
  }
  
  // Check if someone is trying to leave with more children than adults
  if (numChildren > numAdults) {
    return false;
  }

  // Update the counts as the checks passed
  adults -= numAdults;
  children -= numChildren;
  return true;
}


module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
};
