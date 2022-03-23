// loads the appts in the array on the appointments page
function loadAppts() {
    let upcomingText = document.getElementById("upcomingText");
    var appts = JSON.parse(localStorage.getItem("appts"));
    let upcoming = document.getElementById("upcoming-appts")
    console.log(appts);
    if (appts === null) {
        appts = [];
        let noAppts = document.createElement("p");
        noAppts.innerHTML = "You have no upcoming appointments.";
        upcoming.appendChild(noAppts);
        upcomingText.innerHTML = "Upcoming Appointments (0)";
    }
    else {

        // iterates through the appts array to display each one in the array
        for (let i=0; i < appts.length; i++) {
            upcomingText.innerHTML = "Upcoming Appointments" + " (" + appts.length + ")";
            let appt = document.createElement("div");
            appt.classList.add("appointment");
            let type = document.createElement("p");
            let date = document.createElement("p");
            let viewDetails = document.createElement("button");
            let edit = document.createElement("button");
            let cancel = document.createElement("button");
            type.innerHTML = "Type: " + appts[i].type;
            date.innerHTML = "Time: February " + appts[i].date + " @ " + appts[i].time;
            appt.appendChild(type);
            appt.appendChild(date);
            viewDetails.classList.add("smallButton2");
            viewDetails.style.marginRight = "10px";
            viewDetails.innerHTML = "View Details";
            viewDetails.setAttribute("id", "modalBtn");

            // call on apptModal function and pass in appt details
            viewDetails.setAttribute("onclick", `apptModal("${appts[i].type}", "${appts[i].date}", "${appts[i].time}")`);
            edit.classList.add("smallButton");
            edit.style.marginRight = "10px";
            edit.innerHTML = "Edit";
            cancel.classList.add("smallButton");
            cancel.style.marginRight = "10px";
            cancel.innerHTML = "Cancel";
            appt.appendChild(viewDetails);
            appt.appendChild(edit);
            appt.appendChild(cancel);
            upcoming.appendChild(appt);
        }
    }
}

// creates modal that pops up when view details is clicked
function apptModal(type, date, time) {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("modalBtn");
    var span = document.getElementsByClassName("close")[0];
    let typeM = document.createElement("p");
    let dateM = document.createElement("p");
    let location = document.createElement("p");
    let modalContent = document.getElementById("modalContent");
    let logistics = document.createElement("p");
    typeM.innerHTML = "Type: " + type;
    dateM.innerHTML = "Time: February " + date + " @ " + time;
    location.innerHTML = "Location: UHS";
    logistics.innerHTML = "Do not eat or drink anything before the appointment. \nThere will be a $10 fee if you cancel less than 24 hours before your appointment."
    
    modalContent.appendChild(typeM);
    modalContent.appendChild(dateM);
    modalContent.appendChild(location);
    modalContent.appendChild(logistics);

    modal.style.display = "block";
    
    // click on x or outside modal closes it
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById("modalContent").innerHTML = "";
        }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("modalContent").innerHTML = "";
        }
    }
}

// ensures that function is always called (appts shown on screen) when the page loads
loadAppts();
