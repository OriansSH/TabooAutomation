const timestamp = Date.now();
const uniqueEmail = `test${timestamp}@gmail.com`;

const loginWidget = 'pce-log-in';
const registerWidget = 'pce-register';
const myProfileWidget = 'pce-my-profile';
const contactUsWidget = 'pce-contact-us';
const urlEnv = 'https://stage2.quotecores.com/';
const wrongCredentialsValidation = 'Email or Password are incorrect';
const specialCharValidation = 'Password must contain at least one special character';
const oneDigitValidation = 'Password must contain at least one digit';
const duplicateEmailValidation = 'Email already exists. Please log in or reset your password';
const firstNameField = '#firstName';
const lastNameField = '#lastName';
const emailField = '#email';
const passwordField = '#password';
const confirmPasswordField = '#confirmPassword';
const testUserEmail = 'oriantest@gmail.com';
const testUserPassword = 'Orian154!';
const contactUsEmptyValidation = 'Message must be at least 10 characters';

export {
    urlEnv,
    wrongCredentialsValidation,
    firstNameField,
    lastNameField,
    emailField,
    passwordField,
    confirmPasswordField,
    specialCharValidation,
    oneDigitValidation,
    loginWidget,
    registerWidget,
    myProfileWidget,
    contactUsWidget,
    uniqueEmail,
    testUserEmail,
    testUserPassword,
    contactUsEmptyValidation,
    duplicateEmailValidation
};