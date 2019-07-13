// Ran onload of body to validate elements
function intitilize() {
    const numOfPeopleInput = document.getElementById("numOfPeople");
    numOfPeopleInput.addEventListener("blur", validateNumOfPeople);

    const daysOfTripInput = document.getElementById("daysOfTrip");
    daysOfTripInput.addEventListener("blur", validateDaysOfTrip);
}

// Validates the number of people and makes sure its between 1 and 20
function validateNumOfPeople() {
    const numOfPeopleInput = document.getElementById("numOfPeople");
    if (numOfPeopleInput.value < 1 || numOfPeopleInput > 20) {
        alert("Number of people must be between 1 and 20");
        numOfPeopleInput.value = "";
    }
}

// Validates the number of days and makes sure its between 1 and 10
function validateDaysOfTrip() {
    const daysOfTripInput = document.getElementById("daysOfTrip");
    if (daysOfTripInput.value < 1 || daysOfTripInput > 10) {
        alert("Days of trip must be between 1 and 10");
        daysOfTripInput.value = "";
    }
}

// Gets the currently active radio button value.
function getLocation(form, name) {
    let val = "";
    // get the list of radio buttons with specified names
    const radioBtns = form.elements[name];

    // loop through the list of radio buttons
    for (let i = 0, len = radioBtns.length; i < len; i++) {
        if (radioBtns[i].checked) { // Check to see if the btn is checked
            val = radioBtns[i].value; // if so store value in val
            break; // break the loop
        }
    }
    return val; // return the value of checked radio btn
}



function calculate() {
    // Creating values for display
    const numOfPeople = document.getElementById("numOfPeople").value; // getting the number of people inputted
    const daysOfTrip = document.getElementById("daysOfTrip").value; // getting the number of days inputted
    const locationCost = document.getElementById("costForm").onsubmit = function() { // getting the value of the checked radio button
        const val = getLocation(this, 'location');
    }
    const totalCost = locationCost * daysOfTrip * numOfPeople; // calculating total cost of the trip
    if (totalCost > 5000) { // error checking 
        alert("A deposit must be made within two weeks of the current date.")
        document.getElementById("totalCostDisplay").innerHTML = "totalCost";
    } else {
        document.getElementById("totalCostDisplay").innerHTML = "totalCost";
    }

    // Display all calculated elements
    document.getElementById("numOfPeopleDisplay").innerHTML = numOfPeople;
    document.getElementById("daysOfTripDisplay").innerHTML = daysOfTrip;

}