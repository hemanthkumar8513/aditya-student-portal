const content = document.getElementById('content');

function showProfile() {
    content.innerHTML = `
        <h2>Profile</h2>
        <p>Name: John Doe</p>
        <p>Student ID: 12345</p>
        <p>Email: johndoe@example.com</p>
    `;
}

function showCourses() {
    content.innerHTML = `
        <h2>Courses</h2>
        <ul>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
        </ul>
    `;
}

function showGrades() {
    content.innerHTML = `
        <h2>Grades</h2>
        <ul>
            <li>Mathematics: A</li>
            <li>Physics: B+</li>
            <li>Chemistry: A-</li>
        </ul>
    `;
}

function logout() {
    window.location.href = "index.html";
}
