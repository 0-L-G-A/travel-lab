import { useTranslation } from 'react-i18next';

import Accordion from 'components/Accordion';
import LandingBlockTitle from '../LandingBlockTitle';
import HelpWrapper from './HelpWrapper';
import CountPrefix from './CountPrefix';

import { qa } from './index.config';
import { TitleCodes } from '../LandingBlockTitle/index.config';

import styles from './index.module.scss';

export default function HelpBlock() {
  const { t } = useTranslation();
  return (
    <section className={styles.help}>
      <LandingBlockTitle theme="light" titleCode={TitleCodes.HELP_BLOCK} />
      <HelpWrapper className={styles.helpWrapper}>
        {qa.map((item) => (
          <Accordion
            key={item.id}
            label={t(item.question)}
            prefixComponent={() => <CountPrefix num={item.id} />}
          >
            <span>{t(item.answer)}</span>
          </Accordion>
        ))}
      </HelpWrapper>
    </section>
  );
}
