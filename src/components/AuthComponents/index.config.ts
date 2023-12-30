const path = 'AUTH';
const uiPath = {
  labels: 'LABELS',
  buttons: 'BUTTONS',
  placeholders: 'PLACEHOLDERS',
};

export const texts = {
  signIn: {
    title: `${path}.SIGN_IN.TITLE`,
    description: `${path}.SIGN_IN.DESCRIPTION`,
    passwordForgot: `${path}.SIGN_IN.PASSWORD_FORGOT`,
    noAccount: `${path}.SIGN_IN.NO_ACCOUNT`,
  },
  signUp: {
    title: `${path}.SIGN_UP.TITLE`,
    accountExist: `${path}.SIGN_UP.ACCOUNT_EXIST`,
  },
  passwordRecovery: {
    title: `${path}.PASSWORD_RECOVERY.TITLE`,
    description: `${path}.PASSWORD_RECOVERY.DESCRIPTION`,
  },
  forgotPassword: {
    title: `${path}.FORGOT_PASSWORD.TITLE`,
    description: `${path}.FORGOT_PASSWORD.DESCRIPTION`,
    noAccount: `${path}.FORGOT_PASSWORD.NO_ACCOUNT`,
  },
};

export const uiTexts = {
  labels: {
    email: uiPath.labels + '.EMAIL',
    password: uiPath.labels + '.PASSWORD',
    newPassword: uiPath.labels + '.NEW_PASSWORD',
    confirmNewPassword: uiPath.labels + '.CONFIRM_NEW_PASSWORD',
  },
  placeholders: {
    email: uiPath.placeholders + '.EMAIL',
    password: uiPath.placeholders + '.PASSWORD',
    confirmPassword: uiPath.placeholders + '.CONFIRM_PASSWORD',
  },
  buttons: {
    getStarted: uiPath.buttons + '.GET_STARTED',
    logInGoogle: uiPath.buttons + '.LOG_IN_GOOGLE',
    logInApple: uiPath.buttons + '.LOG_IN_APPLE',
    passwordReset: uiPath.buttons + '.PASSWORD_RESET_LINK',
    newPassword: uiPath.buttons + '.NEW_PASSWORD',
  },
};
