let vacations = []; // Array to store vacation entries
let editIndex = -1; // Track the index of the item being edited

// Function to create a new vacation entry
function create_vacation() {
    const destination = document.getElementById("destination_name").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const numberOfPeople = document.getElementById("number_of_people").value;
    const budget = document.getElementById("budget").value;

    // Validate input
    if (!destination || !startDate || !endDate || !numberOfPeople || !budget) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new vacation object
    const newVacation = {
        destination,
        startDate,
        endDate,
        numberOfPeople,
        budget
    };

    // If editing an item, update it; otherwise, add it to the list
    if (editIndex === -1) {
        vacations.push(newVacation);
    } else {
        vacations[editIndex] = newVacation;
        editIndex = -1;
        document.getElementById("updateBtn").style.display = "none"; // Hide update button
    }

    // Reset the form and re-render the vacation list
    document.getElementById("wishlist-form").reset();
    renderVacations();
}

// Function to render the vacation list with improved HTML structure
function renderVacations() {
    const vacationList = document.getElementById("VacationList");
    vacationList.innerHTML = ""; // Clear the current list

    vacations.forEach((vacation, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("vacation-item");

        listItem.innerHTML = `
            <strong>${vacation.destination}</strong>
            <p><strong>Start Date:</strong> ${vacation.startDate}</p>
            <p><strong>End Date:</strong> ${vacation.endDate}</p>
            <p><strong>People:</strong> ${vacation.numberOfPeople}</p>
            <p><strong>Budget:</strong> $${vacation.budget}</p>
            <button class="edit-btn" onclick="editVacation(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteVacation(${index})">Delete</button>
        `;

        vacationList.appendChild(listItem);
    });
}


// Function to delete a vacation entry
function deleteVacation(index) {
    vacations.splice(index, 1); // Remove item from array
    renderVacations(); // Re-render the list
}

// Function to edit a vacation entry
function editVacation(index) {
    const vacation = vacations[index];
    document.getElementById("destination_name").value = vacation.destination;
    document.getElementById("start_date").value = vacation.startDate;
    document.getElementById("end_date").value = vacation.endDate;
    document.getElementById("number_of_people").value = vacation.numberOfPeople;
    document.getElementById("budget").value = vacation.budget;

    editIndex = index;
    document.getElementById("updateBtn").style.display = "inline"; // Show update button
}

// Function to update a vacation entry (triggered by the update button)
function update_vacation() {
    create_vacation();
}
