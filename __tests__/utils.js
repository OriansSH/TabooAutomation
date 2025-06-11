const timestamp = Date.now();
const uniqueEmail = `test${timestamp}@gmail.com`;

export function generateUniqueEmail() {
    const timestamp = Date.now();
    return `test${timestamp}@gmail.com`;
}

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
const avatarIcon = '.header--actions--avatar--progressbar';
const purchaseGoldButton = '.header--funds--coins--add.gold'
const purchaseSecretButton = '.header--funds--coins--add.secret'
const toggleGoldButton = '.header--funds--toggle--icon.gold'
const toggleSecretButton = '.header--funds--toggle--icon.secret'
const consentHeadLine = `Almost there!`;
const consentCheckBox = 'button.ple-consent-checkbox';
const consentAcceptButton = 'button.ple-submit-button';
const xButton = '.modal-container--modal--close'
const validationLocator = '[data-testid$="-error"]';
const registerValidationsLocator = '[data-testid$="-error"]';
const unMatchedPasswordValidation = 'Passwords do not match'
const generalErrorLocator = '.ple-error-message';
const myProfileLocator = '.side-menu-container--menu--table--entry.my_profile';
const couponPlaceholder = 'Coupon code';
const couponCodeButton = 'button.ple-coupon-code-button';
const packageOldPriceClass = '.ple-old-price';
const checkoutPurchaseButton = 'button.ple-submit-button';
// Need to change the validation. Currently its defaulte validation.
const couponEmptyGeneraError = 'Required'
const contactUsLocator = '.side-menu-container--menu--table--entry.contact';
const contactUsMessageId = '#message';
const contactUsSubmitButton = 'button.ple-submit-button';
const supportButtonViaProfile = 'button.ple-button-outline:has-text("Support")';
const termsofservice = '.footer--container--wrapper--navigation--option:has-text("Terms of service")';
const headerTermsOfService = '.info-page--container--content--title:has-text("Terms of service")';
const sweepsPolicy = '.footer--container--wrapper--navigation--option:has-text("Sweeps policy")';
const headerSweepPolicy = '.info-page--container--content--title:has-text("Sweepstakes Policy")';
const inviteFriends = '.footer--container--wrapper--navigation--option:has-text("Invite friends terms of use")';
const headerInviteFriends = '.info-page--container--content--title:has-text("Invite Friends Terms of use")';
const privecyPolicy = '.footer--container--wrapper--navigation--option:has-text("Privacy policy")';
const headerPrivacyPolicy = '.info-page--container--content--title:has-text("Privacy policy")';
const lobbyRG = '.footer--container--wrapper--info--button:has-text("Go To Responsible Social Gaming")';
const headerRG = '.info-page--container--content--title:has-text("Responsible Gaming Terms")';
const signInButtonInRegisterWidget = '.ple-local-link';
const buyIcon = 'button.ple-buy-more'
const gameMajesticKing = 'Play Majestic King';
const confirmationMessageLocator = `.ple-title:has-text("Payment Confirmed! You're all set!")`; 
const cardNumberLocator = '[data-testid="create-payment-card-number"]';
const cardExpiryLocator = '[data-testid="create-payment-card-expiry-date"]';
const cardCvvLocator = '[data-testid="create-payment-card-cvv"]';
const cardNameLocator = '[data-testid="create-payment-card-cardholder-name"]';
const cardPayButtonLocator = '[data-testid="btn-universal-pay-button"]';
const purchaseMessageText = `Payment Confirmed! You're all set!`;
const cardNumberErrorLocator = '[data-testid="error-create-payment-card-number"]';
const cardExpiryErrorLocator = '[data-testid="error-create-payment-card-expiry-date"]';
const cardCvvErrorLocator = '[data-testid="error-create-payment-card-cvv"]';
const cardNameErrorLocator = '[data-testid="error-create-payment-card-cardholder-name"]';
const inGameStoreLocator = '.quick-buy--header--coins--add.gold'
const categoriesLocator = '.games-container--header--wrapper--categories--category'

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
    couponPlaceholder,
    couponCodeButton,
    packageOldPriceClass,
    checkoutPurchaseButton,
    couponEmptyGeneraError,
    contactUsLocator,
    contactUsMessageId,
    contactUsSubmitButton,
    supportButtonViaProfile,
    termsofservice,
    sweepsPolicy,
    headerTermsOfService,
    headerSweepPolicy,
    inviteFriends,
    headerInviteFriends,
    privecyPolicy,
    headerPrivacyPolicy,
    lobbyRG,
    headerRG,
    signInButtonInRegisterWidget,
    buyIcon,
    gameMajesticKing,
    cardNumberLocator,
    cardExpiryLocator,
    cardCvvLocator,
    cardNameLocator,
    cardPayButtonLocator,
    confirmationMessageLocator,
    purchaseMessageText,
    cardNumberErrorLocator,
    cardExpiryErrorLocator,
    cardCvvErrorLocator,
    cardNameErrorLocator,
    inGameStoreLocator,
    categoriesLocator
};