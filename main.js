// creates appointment object
function appt(type, date, time) {
    this.type = type;
    this.date = date;
    this.time = time;
}

// stores appt type
function getType() { 
    var type = document.querySelector('input[name="appointment type"]:checked').value; 
    sessionStorage.setItem("apptType", type);
    console.log(type);
}

// updates appt type on second page in appt scheduling process
function changeApptHeading() {
    var type = sessionStorage.getItem("apptType");
    console.log(type);
    document.getElementById("appt-type").innerHTML = type;
}

// stores appt date
function getDate() {
    var date = document.querySelector('input[name="date"]:checked').value;
    sessionStorage.setItem("apptDate", date);
    console.log(date);
}

// stores appt time
function getTime() {
    var time = document.querySelector('input[name="time"]:checked').value;
    sessionStorage.setItem("apptTime", time);
    console.log(time);
}

// updates confirmation page with appt details
function changeApptDateTime() {
    var date = sessionStorage.getItem("apptDate");
    var time = sessionStorage.getItem("apptTime");
    document.getElementById("appt-date-time").textContent = "February " + date + " @ " + time;
}

// creates new appt and stores in array
function createNewAppt() {
    var appts = JSON.parse(localStorage.getItem("appts"));

    // if array does not exist, creates one
    if (appts === null) {
        appts = [];
    }
    console.log(appts);
    var type = sessionStorage.getItem("apptType");
    var date = sessionStorage.getItem("apptDate");
    var time = sessionStorage.getItem("apptTime");
    var newAppt = appt(type, date, time);
    newAppt = new appt(type, date, time);
    console.log(newAppt);
    appts.push(newAppt);
    console.log(appts);
    localStorage.setItem("appts", JSON.stringify(appts));
}