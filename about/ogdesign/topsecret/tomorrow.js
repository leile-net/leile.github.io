function get_tmrw(){
    // create a new Date object
    const now = new Date();

    // get the current day of the week
    const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const dayOfWeek = daysOfWeek[now.getDay()];
    if (dayOfWeek == "Sunday"){
        return "Monday"
    }
    if (dayOfWeek == "Monday"){
        return "Tuesday"
    }
    if (dayOfWeek == "Tuesday"){
        return "Wednesday"
    }
    if (dayOfWeek == "Wednesday"){
        return "Thursday"
    }
    if (dayOfWeek == "Thursday"){
        return "Friday"
    }
    if (dayOfWeek == "Friday"){
        return "Saturday"
    }
    if (dayOfWeek == "Saturday"){
        return "Sunday"
    }

}
const thedate = get_tmrw()
console.log(thedate)
document.getElementById("thedate_html").textContent = thedate;