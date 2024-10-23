 const teachers = [
    { name: "John Doe", department: "Mathematics", email: "johndoe@example.com" },
    { name: "Jane Smith", department: "Biology", email: "janesmith@example.com" },
    { name: "Jane Allice", department: "Physics", email: "janeallice@example.com" },
    { name: "Allennea", department: "Chemistry", email: "allennea@example.com" },
    { name: "Micheal", department: "Zoology", email: "micheal@example.com" },
    { name: "Fathima", department: "English", email: "fathima@example.com" },
    { name: "Lidiya", department: "Hindi", email: "lidiya@example.com" },
    { name: "Sarann", department: "Computer Science", email: "sarann@example.com" },
    { name: "Evagelean", department: "Agriculture", email: "evagelean@example.com" },
    { name: "Thomas Black", department: "Mathematics", email: "thomasblack@example.com" },
    { name: "Sophia Evans", department: "Biology", email: "sophiaevans@example.com" },
    { name: "Robert White", department: "Physics", email: "robertwhite@example.com" },
    { name: "Alex Green", department: "Chemistry", email: "alexgreen@example.com" },
    { name: "Emily Parker", department: "Zoology", email: "emilyparker@example.com" },
    { name: "Nina Patel", department: "English", email: "ninapatel@example.com" },
    { name: "Rajesh Kumar", department: "Hindi", email: "rajeshkumar@example.com" },
    { name: "Paul Walker", department: "Computer Science", email: "paulwalker@example.com" },
    { name: "Marie Clark", department: "Agriculture", email: "marieclark@example.com" },
    { name: "George Lincoln", department: "Physics", email: "georgelincoln@example.com" },
    { name: "Linda Lee", department: "Mathematics", email: "lindalee@example.com" },
    { name: "Oscar Smith", department: "Chemistry", email: "oscarsmith@example.com" },
    { name: "Hannah Grey", department: "Biology", email: "hannahgrey@example.com" },
    { name: "Jason Bourne", department: "Zoology", email: "jasonbourne@example.com" },
    { name: "Mona Singh", department: "Hindi", email: "monasingh@example.com" },
    { name: "Richard Roe", department: "English", email: "richardroe@example.com" },
    { name: "Clara Bennett", department: "Mathematics", email: "clarabennett@example.com" },
    { name: "David Edwards", department: "Computer Science", email: "davidedwards@example.com" },
    { name: "Kevin Brown", department: "Physics", email: "kevinbrown@example.com" },
    { name: "Nancy Adams", department: "Agriculture", email: "nancyadams@example.com" },
    { name: "Betty Cooper", department: "Chemistry", email: "bettycooper@example.com" },
    { name: "Ethan Hunt", department: "Zoology", email: "ethanhunt@example.com" },
];
// Function to populate teacher options in the appointment form
function populateTeachers() {
    const teacherSelect = document.getElementById("teacherSelect");
    teacherSelect.innerHTML = ""; // Clear previous options
    teachers.forEach(teacher => {
        const option = document.createElement("option");
        option.value = teacher.name; // Use teacher's name as the value
        option.textContent = `${teacher.name} - ${teacher.department} (Rating: ${teacher.rating})`; // Display name, department, and rating
        teacherSelect.appendChild(option);
    });
}

// Call the function to populate teacher options when the page loads
window.onload = populateTeachers;

// Register new student
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Code to handle registration logic
    alert("Registration successful!");
});

// Login existing student
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check if the user exists in the system
    const user = users.find(user => user.username === email && user.password === password);
    if (user) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Search for teachers
document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("teacherSearch").value.toLowerCase();
    const results = teachers.filter(teacher => 
        teacher.name.toLowerCase().includes(query) || 
        teacher.department.toLowerCase().includes(query)
    );

    const resultsContainer = document.getElementById("teacherResults");
    resultsContainer.innerHTML = ""; // Clear previous results
    if (results.length > 0) {
        resultsContainer.innerHTML = results.map(teacher => `<p>${teacher.name} - ${teacher.department} (Rating: ${teacher.rating})</p>`).join("");
    } else {
        alert("No teachers found in this department.");
    }
});

// Clear search results
document.getElementById("clearSearch").addEventListener("click", function() {
    document.getElementById("teacherResults").innerHTML = ""; // Clear the results
    document.getElementById("teacherSearch").value = ""; // Clear the search input
});

// Show all teachers button
document.getElementById("showAll").addEventListener("click", function() {
    const resultsContainer = document.getElementById("teacherResults");
    resultsContainer.innerHTML = teachers.map(teacher => `<p>${teacher.name} - ${teacher.department} (Rating: ${teacher.rating})</p>`).join("");
});

// Book an appointment
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const teacherName = document.getElementById("teacherSelect").value;
    const time = document.getElementById("appointmentTime").value;
    const purpose = document.getElementById("appointmentPurpose").value;

    // Find the selected teacher to get their rating
    const selectedTeacher = teachers.find(teacher => teacher.name === teacherName);
    
    // Validate appointment details
    if (!time || !purpose) {
        alert("Please fill in all appointment details.");
        return;
    }

    // Store appointment in local storage (optional)
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push({ teacher: selectedTeacher.name, department: selectedTeacher.department, rating: selectedTeacher.rating, time, purpose });
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Alert with appointment details
    alert(`Appointment booked with ${selectedTeacher.name} (Rating: ${selectedTeacher.rating})\nDepartment: ${selectedTeacher.department}\nTime: ${time}\nPurpose: ${purpose}`);
    
    // Clear the form after booking
    document.getElementById("appointmentForm").reset();
});

// Array to hold registered users (you can store it in localStorage as well)
const users = JSON.parse(localStorage.getItem("users")) || [];

// Register new student
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Validate the registration fields
    if (!name || !email || !password) {
        alert("Please fill in all the fields.");
        return;
    }

    // Email validation (basic regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Check if the user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        alert("A user with this email already exists.");
        return;
    }

    // Add new user to the users array and store it in localStorage
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Display success message
    alert("Registration successful!");

    // Clear the form after successful registration
    document.getElementById("registerForm").reset();
});

// Login existing student
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check if the user exists in localStorage
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Login successful! Welcome, ${user.name}.`);
        // Perform additional actions after login, e.g., redirect to a dashboard page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Admin adds a new teacher
document.getElementById("addTeacherForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("teacherName").value;
    const department = document.getElementById("teacherDepartment").value;
    const email = document.getElementById("teacherEmail").value;
    const rating = 0; // Default rating for new teachers

    if (!name || !department || !email) {
        alert("Please fill in all fields.");
        return;
    }

    const newTeacher = { name, department, email, rating, numRatings: 0 };
    teachers.push(newTeacher);
    localStorage.setItem('teachers', JSON.stringify(teachers));

    alert("Teacher added successfully!");
    document.getElementById("addTeacherForm").reset();
});
// Simulate sending an email after booking an appointment
function sendEmailNotification(teacherEmail, studentEmail, appointmentDetails) {
    alert(`Email sent to ${teacherEmail} and ${studentEmail} with the following details:\n${appointmentDetails}`);
}

// Call this function after booking an appointment
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const teacherName = document.getElementById("teacherSelect").value;
    const time = document.getElementById("appointmentTime").value;
    const purpose = document.getElementById("appointmentPurpose").value;
    
    const selectedTeacher = teachers.find(teacher => teacher.name === teacherName);
    const loggedInUser = users.find(user => user.email === document.getElementById("loginEmail").value);

    const appointmentDetails = `Appointment booked with ${selectedTeacher.name} on ${time} for ${purpose}.`;

    sendEmailNotification(selectedTeacher.email, loggedInUser.email, appointmentDetails);
});
