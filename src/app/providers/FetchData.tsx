import { Activity } from "react-activity-calendar";


export default async function FetchData() {
  const days: Array<Activity> = []

  try {
    const token = process.env.GITHUB_KEY;
    const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`
    const variables = `
  {
    "userName": "Youssef25331"
  }
`
    const body = {
      query,
      variables
    }
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json()
    const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks
    for (const i in weeks) {
      const week = weeks[i].contributionDays
      for (const j in week) {
        const day: Activity = {
          date: week[j].date,
          count: week[j].contributionCount,
          level: week[j].contributionCount ? Math.ceil(week[j].contributionCount / 4) : 0
        }
        days.push(day)
      }
    }
  } catch (error) {
    console.error(error);
  }
  return days
}
