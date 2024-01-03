import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormLogo from '../FormLogo';
import InputBox from '../../InputBox';
import GoogleButton from '../GoogleButton';
import PasswordInput from 'components/PasswordInput';

import { uiTexts, texts } from '../index.config';

import generalStyles from '../index.module.scss';
import styles from './index.module.scss';

export default function PasswordRecovery() {
  const { t } = useTranslation();
  const methods = useForm<{ password: string; confirmPassword: string }>();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = (data: { password: string; confirmPassword: string }) => {
    console.log(data);
    reset();
  };

  return (
    <section className={styles.passwordRecovery}>
      <FormLogo />
      <h2 className={styles.title}>{t(texts.passwordRecovery.title)}</h2>
      <p className={styles.description}>{t(texts.passwordRecovery.description)}</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          <InputBox
            id="confirmPassword"
            label={t(uiTexts.labels.confirmNewPassword)}
            className={styles.inputWrapper}
            errorMessage={errors.confirmPassword?.message}
          >
            <PasswordInput
              registerName="confirmPassword"
              onChange={(e) =>
                setValue('confirmPassword', e.target.value, { shouldValidate: true })
              }
              placeholder={t(uiTexts.placeholders.confirmPassword)}
            />
          </InputBox>
          <div className={styles.buttons}>
            <button className={`${generalStyles.btn} ${generalStyles.primaryBtn}`} type="submit">
              {t(uiTexts.buttons.newPassword)}
            </button>
            <GoogleButton className={generalStyles.btn}>
              {t(uiTexts.buttons.logInGoogle)}
            </GoogleButton>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}
