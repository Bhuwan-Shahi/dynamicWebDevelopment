const form = document.getElementById('registrationForm');
        const successMessage = document.getElementById('successMessage');

        // Form validation
        function validateForm() {
            let isValid = true;
            
            // Reset all error messages
            document.querySelectorAll('.error-message').forEach(msg => {
                msg.style.display = 'none';
            });

            // Validate required fields
            const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'password', 'confirmPassword'];
            
            requiredFields.forEach(fieldName => {
                const field = document.getElementById(fieldName);
                const errorMsg = document.getElementById(fieldName + 'Error');
                
                if (!field.value.trim()) {
                    errorMsg.style.display = 'block';
                    isValid = false;
                }
            });

            // Validate email format
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email.value && !emailRegex.test(email.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Validate password match
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            
            if (password.value !== confirmPassword.value) {
                confirmPasswordError.style.display = 'block';
                isValid = false;
            }

            // Validate terms checkbox
            const terms = document.getElementById('terms');
            if (!terms.checked) {
                alert('Please accept the Terms of Service and Privacy Policy');
                isValid = false;
            }

            return isValid;
        }

        // Real-time password confirmation validation
        document.getElementById('confirmPassword').addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            const errorMsg = document.getElementById('confirmPasswordError');
            
            if (confirmPassword && password !== confirmPassword) {
                errorMsg.style.display = 'block';
            } else {
                errorMsg.style.display = 'none';
            }
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Simulate form submission
                setTimeout(() => {
                    successMessage.style.display = 'block';
                    form.style.display = 'none';
                    
                    // Reset form after showing success
                    setTimeout(() => {
                        form.reset();
                        form.style.display = 'block';
                        successMessage.style.display = 'none';
                    }, 3000);
                }, 500);
            }
        });

        // Auto-format phone number (basic US format)
        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
            }
            e.target.value = value;
        });