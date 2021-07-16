
 function createEmployeeRecord(arrayOfInfo) {
    return {
         firstName: arrayOfInfo[0],
         familyName: arrayOfInfo[1],
         title: arrayOfInfo[2],
         payPerHour: arrayOfInfo[3],
         timeInEvents: [],
         timeOutEvents: []
     }
 }

 function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
const [date, time] = dateStamp.split(" ");
const timeIn = parseInt(time);
this.timeInEvents.push({
    type: "TimeIn",
    hour: timeIn,
    date,
})
return this;
}

function createTimeOutEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const timeOut = parseInt(time);
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: timeOut,
        date,
    })
    return this;
    }


    function hoursWorkedOnDate(dateOfDay){
let clockIn = this.timeInEvents.find((dateIn) =>{
return dateIn.date === dateOfDay;
});
let clockOut = this.timeOutEvents.find((dateOut) => {
    return dateOut.date === dateOfDay;
});
return (clockOut.hour - clockIn.hour)/100
    }
 
  
    function wagesEarnedOnDate(dateOfDay) {
        let rate = this.payPerHour;
        let hoursWorked = hoursWorkedOnDate.call(this, dateOfDay);
         return rate * hoursWorked
        
        }



        function findEmployeeByFirstName(srcArray, firstName) {
            return srcArray.find((data) => data.firstName === firstName)
            }


function calculatePayroll(arrayOfEmployees) {
  let totalNetPay = allWagesFor.call(this, );
  return totalNetPay.reduce()
}








/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

