const timestamp = Date.now();
const uniqueEmail = `test${timestamp}@gmail.com`;

const loginWidget = 'pce-log-in';
const registerWidget = 'pce-register';
const myProfileWidget = 'pce-my-profile';
const urlEnv = 'https://stage2.quotecores.com/';
const wrongCredentialsValidation = 'Authentication failed. Please check your credentials and try again.';
const specialCharValidation = 'Password must contain at least one special character';
const oneDigitValidation = 'Password must contain at least one digit';
const firstNameField = '#firstName';
const lastNameField = '#lastName';
const emailField = '#email';
const passwordField = '#password';
const confirmPasswordField = '#confirmPassword';

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
    uniqueEmail,
};