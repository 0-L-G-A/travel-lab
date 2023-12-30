/* eslint-disable no-control-regex */
export const emailRules = {
  required: { value: true, message: 'Email required' },
  pattern: {
    value:
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email is incorrect',
  },
};

export const passwordRules = {
  required: { value: true, message: 'Password required' },
  minLength: { value: 8, message: 'Please choose a password that is at least 8 characters long.' },
};
