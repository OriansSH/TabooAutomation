const timestamp = Date.now();
const uniqueEmail = `test${timestamp}@gmail.com`;

const loginWidget = 'pce-log-in';
const registerWidget = 'pce-register';
const myProfileWidget = 'pce-my-profile';
const contactUsWidget = 'pce-contact-us';
const urlEnv = 'https://dev-cms.plaee.dev/';
const wrongCredentialsValidation = 'Email or Password are incorrect';
const specialCharValidation = 'Password must contain at least one special character';
const oneDigitValidation = 'Password must contain at least one number';
const duplicateEmailValidation = 'Email already exists. Please log in or reset your password';
const firstNameField = '#firstName';
const lastNameField = '#lastName';
const emailField = '#email';
const passwordField = '#password';
const confirmPasswordField = '#confirmPassword';
const testUserEmail = 'orianAutomation@gmail.com';
const testUserPassword = 'Orian154!';
const wrongPassword = 'wrongpw!1';
const specialPassword = 'wrongpw1';
const oneDigitPassword = 'wrongpw!';
const unMatchedPaswword = 'UnMatched!';
const contactUsEmptyValidation = 'Message must be at least 10 characters';
const loginButton = 'button[type="submit"]';
const loginXButton = '.modal-container--modal--close';
const logOutButton = '.side-menu-container--menu--table--entry.sign-out';
const avatarIcon = '.header--actions--avatar';
const purchaseGoldButton = '.header--funds--add.gold'
const purchaseSecretButton = '.header--funds--add.secret'
const toggleGoldButton = '.header--funds--coins--icon.gold'
const toggleSecretButton = '.header--funds--coins--icon.secret'
const consentHeadLine = `Almost there!`;
const consentCheckBox = 'button.ple-consent-checkbox';
const consentAcceptButton = 'button.ple-submit-button';
const xButton = '.modal-container--modal--close'
const validationLocator = '[data-testid$="-error"]';
const registerValidationsLocator = '[data-testid$="-error"]';
const unMatchedPasswordValidation = 'Passwords do not match'
const generalErrorLocator = '.ple-error-message';
const myProfileLocator = '.side-menu-container--menu--table--entry.my_profile-option';
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
    duplicateEmailValidation,
    loginButton,
    loginXButton,
    logOutButton,
    avatarIcon,
    wrongPassword,
    specialPassword,
    oneDigitPassword,
    consentHeadLine,
    consentCheckBox,
    consentAcceptButton,
    validationLocator,
    registerValidationsLocator,
    unMatchedPasswordValidation,
    unMatchedPaswword,
    purchaseGoldButton,
    purchaseSecretButton,
    toggleGoldButton,
    toggleSecretButton,
    xButton,
    generalErrorLocator,
    myProfileLocator,
};