function daysOfAYear(year) {
	if (typeof year !== 'number' || year < 1 || year > 9999) {
    throw new Error("Year must be an integer between 1 and 9999");
  }
	if (year % 400 === 0 ) || ( year % 100 ===0 && year % 4 === 0){
		return 366;
	}
	else{
		return 365;
	}
	
}