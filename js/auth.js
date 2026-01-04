// Mock Authentication using LocalStorage

// Initialize Admin user if not exists
(function initAdmin() {
    const users = JSON.parse(localStorage.getItem('ecoUsers') || '[]');
    if (!users.find(u => u.email === 'admin@gmail.com')) {
        users.push({
            name: 'System Admin',
            email: 'admin@gmail.com',
            password: 'admin',
            role: 'admin'
        });
        localStorage.setItem('ecoUsers', JSON.stringify(users));
    }
})();

// Registration logic (Used by Admin Dashboard)
function registerUser(name, email, password, role) {
    const users = JSON.parse(localStorage.getItem('ecoUsers') || '[]');
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'User already exists!' };
    }

    users.push({ name, email, password, role });
    localStorage.setItem('ecoUsers', JSON.stringify(users));
    return { success: true };
}

// Delete logic (Used by Admin Dashboard)
function deleteUser(email) {
    let users = JSON.parse(localStorage.getItem('ecoUsers') || '[]');
    users = users.filter(u => u.email !== email);
    localStorage.setItem('ecoUsers', JSON.stringify(users));

    // Cleanup recycler details if applicable
    let recyclers = JSON.parse(localStorage.getItem('ecoRecyclerDetails') || '[]');
    recyclers = recyclers.filter(r => r.email !== email);
    localStorage.setItem('ecoRecyclerDetails', JSON.stringify(recyclers));

    return true;
}

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('ecoUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (user.role === 'admin') {
            window.location.href = 'admin.html';
        } else if (user.role === 'recycler') {
            window.location.href = 'recycler.html';
        } else {
            window.location.href = 'dashboard.html';
        }
    } else {
        alert('Invalid email or password');
    }
});

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function checkAuth() {
    const user = localStorage.getItem('currentUser');
    if (!user && !window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
        window.location.href = 'index.html';
    }
    return JSON.parse(user);
}
