const form = document.getElementById("loginForm")
const passWordToggle = document.getElementById('passwordToggle')
const passwordInput = document.getElementById('password')








passWordToggle.addEventListener('click', () => {
    const currentType = passwordInput.getAttribute('type');
    
    const newType = currentType === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', newType);
    
    // Update the toggle button text
    passWordToggle.textContent = newType === 'password' ? 'Show' : 'Hide';
});

