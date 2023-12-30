import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormLogo from '../FormLogo';
import InputBox from '../../InputBox';
import GoogleButton from '../GoogleButton';
import PasswordInput from 'components/PasswordInput';

import { uiTexts, texts } from '../index.config';
import { emailRules } from '../index.rules';

import generalStyles from '../index.module.scss';
import styles from './index.module.scss';

export default function SignUp() {
  const { t } = useTranslation();
  const methods = useForm<{ email: string; password: string; confirmPassword: string }>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = useCallback(
    (data: { email: string; password: string; confirmPassword: string }) => {
      console.log(data);
      reset();
    },
    []
  );

  return (
    <section className={styles.signUp}>
      <FormLogo />
      <h2 className={styles.title}>{t(texts.signUp.title)}</h2>
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
              onChange={(e) => setValue('password', e.target.value, { shouldValidate: true })}
              placeholder={t(uiTexts.placeholders.password)}
            />
          </InputBox>
          <div className={styles.buttons}>
            <button className={`${generalStyles.btn} ${generalStyles.primaryBtn}`} type="submit">
              {t(uiTexts.buttons.getStarted)}
            </button>
            <GoogleButton className={generalStyles.btn}>
              {t(uiTexts.buttons.logInGoogle)}
            </GoogleButton>
          </div>
        </form>
      </FormProvider>
      <p className={styles.accountExist}>
        <Link className={generalStyles.link} to="/auth/sign-in">
          {t(texts.signUp.accountExist)}
        </Link>
      </p>
    </section>
  );
}
