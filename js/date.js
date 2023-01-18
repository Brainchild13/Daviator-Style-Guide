function getTheDate() {
    let d = new Date();
    let today = d.getDay();
    let month = d.getMonth();
    let monthName;
    let year = d.getFullYear();
    let date = d.getDate();
    let day;
    switch (today) {
        case today = 0:
            day = "Sunday";
            break;
        case today = 1:
            day = "Monday";
            break;
        case today = 2:
            day = "Tuesday";
            break;
        case today = 3:
            day = "Wednesday"
            break;
        case today = 4:
            day = "Thursday"
            break;
        case today = 5:
            day = "Friday"
            break;
        case today = 6:
            day = "Saturday"
            break;
    
    }

    switch (month) {
        case 0:
            monthName = "January"
            break;
        case 1:
            monthName = "February"
            break;
        case 2:
            monthName = "March"
            break;
        case 3:
            monthName = "April"
            break;
        case 4:
            monthName = "May"
        case 5:
            monthName = "June"
            break;
        case 6:
            monthName = "July"
            break;
        case 7:
            monthName = "August"
            break;
        case 8:
            monthName = "September"
            break;
        case 9:
            monthName = "October"
            break;
        case 10:
            monthName = "November"
            break;
        case 11:
            monthName = "December"
            break;
    
    }
  console.log(day + " " + monthName + " " + date + ", " + year)
}

getTheDate();