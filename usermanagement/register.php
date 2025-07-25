<?php
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
    if(isset($_POST['submit'])){
        
    }
?>  



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register | Dynamic Web Development</title>
    <link rel="stylesheet" href="public/registerCss.css" type="text/css">
</head>

<body>
    <form action="#" method="POST" name "user-form" novalidate>
    <div class="form-container">
        <div class="form-header">
            <h1>Create Account</h1>
            <p>Join us for an amazing shopping experience</p>
        </div>

        <div class="success-message" id="successMessage">
            Account created successfully! Welcome aboard!
        </div>

        <form id="registrationForm">
            <div class="form-row">
                <div class="form-group">
                    <label for="firstName">First Name <span class="required">*</span></label>
                    <input type="text" id="firstName" name="firstName" required>
                    <div class="error-message" id="firstNameError">First name is required</div>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name <span class="required">*</span></label>
                    <input type="text" id="lastName" name="lastName" required>
                    <div class="error-message" id="lastNameError">Last name is required</div>
                </div>
            </div>

            <div class="form-group">
                <label for="email">Email Address <span class="required">*</span></label>
                <input type="email" id="email" name="email" required>
                <div class="error-message" id="emailError">Please enter a valid email address</div>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number <span class="required">*</span></label>
                <input type="tel" id="phone" name="phone" required>
                <div class="error-message" id="phoneError">Please enter a valid phone number</div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="password">Password <span class="required">*</span></label>
                    <input type="password" id="password" name="password" required minlength="8">
                    <button type="button" class="password-toggle" id="passwordToggle">Show</button>

                    <div class="error-message" id="passwordError">Password must be at least 8 characters</div>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password <span class="required">*</span></label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                    <div class="error-message" id="confirmPasswordError">Passwords do not match</div>
                </div>
            </div>

            <div class="form-group">
                <label for="birthDate">Date of Birth</label>
                <input type="date" id="birthDate" name="birthDate">
            </div>

            <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender" name="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Street Address">
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" name="city">
                </div>
            </div>


            <div class="checkbox-group">
                <input type="checkbox" id="newsletter" name="newsletter">
                <label for="newsletter">I would like to receive promotional emails and newsletters</label>
            </div>

            <div class="checkbox-group">
                <input type="checkbox" id="terms" name="terms" required>
                <label for="terms">I agree to the <a href="TermsAndServices.html" target="_blank">Terms of Service</a> and <a href="#"
                        target="_blank">Privacy Policy</a> <span class="required">*</span></label>
            </div>

            <button type="submit" class="submit-btn">Create Account</button>
        </form>

        <div class="login-link">
            Already have an account? <a href="login.html">Sign In</a>
        </div>

    </div>


    <script src="public/script.js" type="text/javascript"></script>
</body>

</html>