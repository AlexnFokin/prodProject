import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page/Page'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/Text/Text'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const { className } = props
  const { id } = useParams<{ id: string }>()
  if (!id) {
    return <Text title={t('Профиль не найден')}/>
  }
  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap={'16'} max>
        <EditableProfileCard id={id}/>
      </VStack>
    </Page>
  )
}

export default ProfilePage
