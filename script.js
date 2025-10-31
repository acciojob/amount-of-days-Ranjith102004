function daysOfAYear(year) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return 366;
  } else {
    return 365;
  }
}


const year = parseInt(prompt("Enter a year:"));


alert(daysOfAYear(year));
