import ActivityCalendar from 'react-activity-calendar'

async function fetchData() {

  const git = await fetch("https://api.github.com/graphql")
  console.log(git)

}
const Activity = async () => {


  const data = [
    {
      date: '2024-08-02',
      count: 16,
      level: 4,
    },
    {
      date: '2024-11-29',
      count: 11,
      level: 3,
    },
    {
      date: '2025-06-23',
      count: 2,
      level: 1,
    },
  ]
  return (
    <ActivityCalendar colorScheme='dark' data={data} theme={{
      light: ['hsl(0, 0%, 92%)', 'firebrick'],
      dark: ['var(--color-base-200)', 'var(--color-primary)'],
    }} />
  )
}
export default Activity
