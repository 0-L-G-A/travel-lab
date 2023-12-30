import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

import openedEyeIcon from 'assets/icons/openEye.svg';
import closedEyeIcon from 'assets/icons/closedEye.svg';

import styles from './index.module.scss';
import { passwordRules } from 'components/AuthComponents/index.rules';

export default function PasswordInput(
  props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    registerName: string;
  }
) {
  const { register, watch } = useFormContext();
  const [type, setType] = useState<'password' | 'text'>('password');

  const handleClick = () => setType(type === 'password' ? 'text' : 'password');

  return (
    <div className={styles.passwordInput}>
      <input
        {...register(
          props.registerName,
          props.registerName !== 'confirmPassword'
            ? passwordRules
            : {
                ...passwordRules,
                validate: (val: string) => {
                  if (watch('password') !== val) {
                    return 'Your passwords do not match';
                  }
                },
              }
        )}
        {...props}
        className={styles.input}
        type={type}
      />
      <button className={styles.button} type="button" onClick={handleClick}>
        <img
          className={styles.icon}
          src={type === 'password' ? openedEyeIcon : closedEyeIcon}
          alt="show password"
        />
      </button>
    </div>
  );
}
