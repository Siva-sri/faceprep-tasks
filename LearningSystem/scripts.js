document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are correct (for demonstration purposes, use static values)
    if (username === 'user' && password === 'password') {
        // Store login state in session storage
        sessionStorage.setItem('isLoggedIn', 'true');
        // Redirect to the course system
        window.location.href = 'courses.html';
    } else {
        showMessage('Login failed. Please check your credentials.');
    }
});

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function loadContent(course) {
    const content = document.querySelector('.content');
    
    switch(course) {
        case 'course1':
            content.innerHTML = `
                <h2>Mathematics</h2>
                <p>Welcome to Mathematics Course. Here are the course details...</p>
                <a href="https://www.youtube.com/watch?v=VCCH9mvGHu4&list=PLOmHrZkA584_AljHMHktLuuqulBLF00xa">Watch Course Videos</a><br><br>
                <a href="https://menso88.weebly.com/uploads/1/7/5/8/17586891/textbook_og_engineering_matematics.pdf">Course Material</a>
            `;
            break;
        case 'course2':
            content.innerHTML = `
                <h2>Operating System</h2>
                <p>Welcome to Operating Systems Course. Here are the course details...</p>
                <a href="https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O">Watch Course Videos</a><br><br>
                <a href="https://menso88.weebly.com/uploads/1/7/5/8/17586891/textbook_og_engineering_matematics.pdf">Course Material</a>
            `;
            break;
        case 'course3':
            content.innerHTML = `
                <h2>Compiler Design</h2>
                <p>Welcome to Compiler Design Course. Here are the course details...</p>
                <a href="https://www.youtube.com/watch?v=7VOSHNusQ-k&list=PL6xbXi2C3seOXoXK5nL92Frnk_gOT-_2b">Watch Course Videos</a><br><br>
                <a href="https://www3.nd.edu/~dthain/compilerbook/">Course Material</a>
            `;
            break;
        default:
            content.innerHTML = `
                <h2>Welcome to the Online Learning System</h2>
                <p>Select a course from the sidebar to view the content.</p>
            `;
            break;
    }
}


