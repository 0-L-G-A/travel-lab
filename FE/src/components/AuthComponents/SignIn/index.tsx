import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormLogo from '../FormLogo';
import InputBox from '../../InputBox';
import AppleButton from '../AppleButton';
import GoogleButton from '../GoogleButton';
import PasswordInput from 'components/PasswordInput';

import { uiTexts, texts } from '../index.config';
import { emailRules, passwordRules } from '../index.rules';

import generalStyles from '../index.module.scss';
import styles from './index.module.scss';

export default function SignIn() {
  const { t } = useTranslation();
  const methods = useForm<{ email: string; password: string }>();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
    reset();
  };

  console.log(watch('password'));
  console.log(watch('email'));

  return (
    <section className={styles.signIn}>
      <FormLogo />
      <h2 className={styles.title}>{t(texts.signIn.title)}</h2>
      <p className={styles.description}>{t(texts.signIn.description)}</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <InputBox
            id="email"
            label={t(uiTexts.labels.email)}
            className={styles.inputWrapper}
            errorMessage={errors.email?.message}
          >
            <input {...register('email', emailRules)} placeholder={t(uiTexts.placeholders.email)} />
          </InputBox>
          <InputBox
            id="password"
            label={t(uiTexts.labels.password)}
            className={styles.inputWrapper}
            errorMessage={errors.password?.message}
          >
            <PasswordInput
              registerName="password"
              placeholder={t(uiTexts.placeholders.password)}
              onChange={(e) => setValue('password', e.target.value, { shouldValidate: true })}
            />
          </InputBox>
          <p className={styles.pwdForgot}>
            <Link className={generalStyles.link} to="/auth/reset-password">
              {t(texts.signIn.passwordForgot)}
            </Link>
          </p>
          <div className={styles.buttons}>
            <button className={`${generalStyles.btn} ${generalStyles.primaryBtn}`} type="submit">
              {t(uiTexts.buttons.getStarted)}
            </button>
            <GoogleButton className={generalStyles.btn}>
              {t(uiTexts.buttons.logInGoogle)}
            </GoogleButton>
            <AppleButton className={generalStyles.btn}>{t(uiTexts.buttons.logInApple)}</AppleButton>
          </div>
        </form>
      </FormProvider>
      <p className={styles.noAccount}>
        <Link className={generalStyles.link} to="/auth/sign-up">
          {t(texts.signIn.noAccount)}
        </Link>
      </p>
    </section>
  );
}
