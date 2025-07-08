const form = document.getElementById('loginForm');
        const passwordToggle = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        const loginBtn = document.getElementById('loginBtn');
        const btnText = document.getElementById('btnText');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const successMessage = document.getElementById('successMessage');

        // Password visibility toggle
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = type === 'password' ? 'Show' : 'Hide';
        });

        // Form validation
        function validateForm() {
            let isValid = true;
            
            // Reset all error messages
            document.querySelectorAll('.error-message').forEach(msg => {
                msg.style.display = 'none';
            });

            // Validate email
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email.value.trim()) {
                emailError.textContent = 'Email is required';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Validate password
            const password = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            
            if (!password.value.trim()) {
                passwordError.style.display = 'block';
                isValid = false;
            }

            return isValid;
        }

        // Real-time validation
        document.getElementById('email').addEventListener('blur', function() {
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (this.value && !emailRegex.test(this.value)) {
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Show loading state
                loginBtn.disabled = true;
                btnText.style.display = 'none';
                loadingSpinner.style.display = 'inline-block';
                
                // Simulate login process
                setTimeout(() => {
                    // Hide loading state
                    loginBtn.disabled = false;
                    btnText.style.display = 'inline';
                    loadingSpinner.style.display = 'none';
                    
                    // Show success message
                    successMessage.style.display = 'block';
                    form.style.opacity = '0.5';
                    
                    // Reset form after showing success
                    setTimeout(() => {
                        form.reset();
                        form.style.opacity = '1';
                        successMessage.style.display = 'none';
                    }, 2000);
                }, 1500);
            }
        });

        // Social login handlers
        document.querySelector('.google-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Google login integration would be implemented here');
        });

        document.querySelector('.facebook-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Facebook login integration would be implemented here');
        });

        // Demo credentials hint (remove in production)
        document.getElementById('email').addEventListener('focus', function() {
            if (!this.value) {
                this.placeholder = 'Try: demo@example.com';
            }
        });

        document.getElementById('password').addEventListener('focus', function() {
            if (!this.value) {
                this.placeholder = 'Try: password123';
            }
        });

        // Clear placeholders on blur
        ['email', 'password'].forEach(id => {
            document.getElementById(id).addEventListener('blur', function() {
                this.placeholder = '';
            });
        });