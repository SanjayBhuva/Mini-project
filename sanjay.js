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
        option.textContent = `${teacher.name} - ${teacher.department}`; // Display name and department
        teacherSelect.appendChild(option);
    });
}

// Call the function to populate teacher options when the page loads
populateTeachers();

// Register new student
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Code to handle registration logic
    alert("Registration successful!");
});

// Login existing student
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Code to handle login logic
    alert("Login successful!");
});

// Search for teachers
document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("teacherSearch").value.toLowerCase();
    const results = teachers.filter(teacher => 
        teacher.name.toLowerCase().includes(query) || 
        teacher.department.toLowerCase().includes(query)
    );
    const resultsContainer = document.getElementById("teacherResults");
    resultsContainer.innerHTML = results.map(teacher => `<p>${teacher.name} - ${teacher.department}</p>`).join("");
});

// Book an appointment
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const teacher = document.getElementById("teacherSelect").value;
    const time = document.getElementById("appointmentTime").value;
    const purpose = document.getElementById("appointmentPurpose").value;
    // Code to handle appointment booking logic
    alert(`Appointment booked with ${teacher} on ${time} for ${purpose}`);
});
