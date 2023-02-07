import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'
import { ListBox } from 'shared/ui/ListBox/ListBox'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <Page>
      {t('Главная страница')}
      <ListBox
        defaultValue={'выбери значение'}
        onChange={(value: string) => {}}
        value={undefined}
        items={[
          { value: '1', content: 'odin' },
          { value: '2', content: 'dva', disabled: true },
          { value: '3', content: 'tree' },
          { value: '4', content: '4etire' }
        ]}
      />
    </Page>
  )
}

export default MainPage
