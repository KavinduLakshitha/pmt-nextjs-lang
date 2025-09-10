'use client';

import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col gap-4 p-4">
      <LanguageSwitcher />
      
      <div className="space-y-2">
        <p>{t('Navbar.Dashboard tooltip')}</p>
        <p>{t('Navbar.Education tooltip')}</p>
      </div>
    </div>
  );
}