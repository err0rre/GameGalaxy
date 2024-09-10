// Worthy, P. (n.d.). DECO7140 Contact 10 - Using APIs – Episode 1.
const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericevent/";
const my_website_code = 'GameGalaxy';
const postCommunityEventMethod = 'POST';
const eventsContainer = document.getElementById('events-container');

const handleFormSubmit = event => {
  event.preventDefault();

  let formData = new FormData(event.target);
  formData.append("website_code", my_website_code);

  const requestOptions = {
    method: postCommunityEventMethod,
    body: formData,
    redirect: 'follow'
  }

  fetch(baseURL, requestOptions)
  .then(response => response.json().then(data => {
    if (!response.ok) {
      console.log("Sever response:", data);
      throw new Error("Network response was not ok");
    }
    return data;
  }))
  .then(data => {
    console.log(data);
    alert("Event submitted successfully!");
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error.message);
    alert("Error submitting event. Please try again.")
});
};


// Worthy, P. (n.d.). DECO7140 Contact 11 - Using APIs – Episode 2.
const queryParams = {
  website_code: my_website_code,
};
const queryString = new URLSearchParams(queryParams).toString();
const urlWithParams = baseURL + "?" + queryString;
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
let eventData; // storage the data

fetch(urlWithParams, requestOptions)
  .then(response => response.json())
  .then(data => {
    eventData = data;
    console.log("Events for website:", data);
    processData();// call data
  })
  .catch(error => console.error('Error fetching events:', error));

function processData() {

  if (eventData) {

        // get the last one event
    const Event0 = eventData[eventData.length - 1];
    document.getElementById("eventName0").textContent = Event0.event_name;
    document.getElementById("eventLocation0").textContent = Event0.location;
    
    document.getElementById("description0").textContent = Event0.description;
    const dateWithoutTimezone0 = new Date(Event0.date_time).toISOString().split('T')[0];
    document.getElementById("dateTime0").textContent = dateWithoutTimezone0;

    

    // get the penultimate event
    const Event1 = eventData[eventData.length - 2];
    document.getElementById("eventName1").textContent = Event1.event_name;
    document.getElementById("eventLocation1").textContent = Event1.location;
    
    document.getElementById("description1").textContent = Event1.description;
    const dateWithoutTimezone1 = new Date(Event0.date_time).toISOString().split('T')[0];
    document.getElementById("dateTime1").textContent = dateWithoutTimezone1;


    // get  the third-to-last event
    const Event2 = eventData[eventData.length - 3];
    document.getElementById("eventName2").textContent = Event2.event_name;
    document.getElementById("eventLocation2").textContent = Event2.location;
    
    document.getElementById("description2").textContent = Event2.description;
    const dateWithoutTimezone2 = new Date(Event0.date_time).toISOString().split('T')[0];
    document.getElementById("dateTime2").textContent = dateWithoutTimezone2;

  }
}


// Time picker
const myInput = document.querySelector("#date_time");
const fp = flatpickr(myInput, {
  enableTime: true,
  dateFormat: "Y-m-d H:i"
});

eventForm.addEventListener("submit", handleFormSubmit);

// geeksforgeeks. (2023, 09 May). How to Design a Simple Calendar using JavaScript ? https://www.geeksforgeeks.org/how-to-design-a-simple-calendar-using-javascript/
const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let clickedDate;

function updateCalendar() {
    const calendarDays = document.getElementById("calendar-days");
    const monthYear = document.getElementById("month-year");
  
    // empty the calendar
    calendarDays.innerHTML = "";
  
    // set month and year
    monthYear.innerHTML = `${monthNames[currentMonth]} ${currentYear}`;
  
    const firstDay = new Date(currentYear, currentMonth, 1);
    for (let i = 0; i < firstDay.getDay(); i++) {
      const emptyDay = document.createElement("li");
      calendarDays.appendChild(emptyDay);
    }
  
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    for (let day = 1; day <= lastDay; day++) {
      const calendarButton = document.createElement("li");
      calendarButton.textContent = day;
      calendarDays.appendChild(calendarButton);
    }
  }
  
// --------update month-------
function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
}
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    updateCalendar();
  }
  
  updateCalendar();
  
