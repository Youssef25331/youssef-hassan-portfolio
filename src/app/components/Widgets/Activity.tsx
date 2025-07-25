import FetchData from '@/app/providers/FetchData'
import ActivityCalendar from 'react-activity-calendar'

const Activity = async () => {
  const days = await FetchData()
  const data = days

  return (
    <ActivityCalendar blockSize={10.5} colorScheme='dark' data={data} theme={{
      light: ['hsl(0, 0%, 92%)', 'firebrick'],
      dark: ['var(--color-base-200)', 'var(--color-primary)'],
    }} />
  )
}

export default Activity
