function isSameType(value1, value2) {
  //your js code here'
	if (isNaN(value1) && isNaN(value2)) {
	    return true; // Both are NaN
	} else if (isNaN(value1) || isNaN(value2)) {
	    return false; // One is NaN, the other is not
	} else {
	    return typeof value1 === typeof value2; // Usual type comparison
	}
}

// do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));
