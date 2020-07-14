function leapYearCheck(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return `${year} is a leap year`
    } else if (year % 400 === 0) {
        return `${year} is a leap year`
    } else return `${year} is not a leap year`
}

const leapyear = leapYearCheck(2020);
console.log(leapyear);