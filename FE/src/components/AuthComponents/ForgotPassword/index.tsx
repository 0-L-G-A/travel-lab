import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormLogo from '../FormLogo';
import InputBox from '../../InputBox';

import { uiTexts, texts } from '../index.config';
import { emailRules } from '../index.rules';

import generalStyles from '../index.module.scss';
import styles from './index.module.scss';

export default function ForgotPassword() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ email: string }>();

  const onSubmit = useCallback((data: { email: string }) => {
    console.log(data);
    reset();
  }, []);

  return (
    <section className={styles.forgotPassword}>
      <FormLogo />
      <h2 className={styles.title}>{t(texts.forgotPassword.title)}</h2>
      <p className={styles.description}>{t(texts.forgotPassword.description)}</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputBox
          id="email"
          label={t(uiTexts.labels.email)}
          className={styles.inputWrapper}
          errorMessage={errors.email?.message}
        >
          <input {...register('email', emailRules)} placeholder={t(uiTexts.placeholders.email)} />
        </InputBox>
        <div className={styles.buttons}>
          <button className={`${generalStyles.btn} ${generalStyles.primaryBtn}`} type="submit">
            {t(uiTexts.buttons.passwordReset)}
          </button>
        </div>
      </form>
      <p className={styles.noAccount}>
        <Link className={generalStyles.link} to="/auth/sign-up">
          {t(texts.forgotPassword.noAccount)}
        </Link>
      </p>
    </section>
  );
}
