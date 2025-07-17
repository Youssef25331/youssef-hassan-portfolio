import React from 'react'
import TechGroup from './teach-group'
import Spinner from '../Spinner'

function Stack() {
  const frontend = {
    groupName: "FRONTEND",
    items: [{ name: "React", icon: '/tech/react.png' }, { name: "Javascript", icon: '/tech/javascript.png' }, { name: "Typescript", icon: '/tech/typescript.png' },
    { name: "Tailwind CSS", icon: '/tech/tailwind.png' }, { name: 'Sass', icon: '/tech/sass.png' }, { name: 'Next.js', icon: '/tech/next.png' }, { name: 'Redux', icon: '/tech/redux.png' }]
  }
  const backend = {
    groupName: "BACKEND",
    items: [{ name: 'Node.js', icon: '/tech/node.png' }, { name: "Express.js", icon: '/tech/express.png' }, { name: "Auth.js", icon: '/tech/auth.png' }, { name: "Sanity", icon: '/tech/sanity.png' }]
  }
  const database = {
    groupName: "DATABASE",
    items: [{ name: 'MongoDB', icon: '/tech/mongo.png' }, { name: "PostgresSQL", icon: '/tech/postgres.png' }, { name: "SQLite.js", icon: '/tech/sqlite.png' }]
  }

  const tools = {
    groupName: "Tools",
    items: [{ name: 'Postman', icon: '/tech/postman.png' }, { name: "Vercel", icon: '/tech/vercel.png' }, { name: "Git", icon: '/tech/git.png' }, { name: "Doccker", icon: '/tech/docker.png' }, { name: "Nginx", icon: '/tech/nginx.png' }, { name: "Linux", icon: '/tech/linux.png' }, { name: "Neovim", icon: '/tech/neovim.png' },]
  }

  return (
    <main id='stack'>
      <div className="flex justify-center gap-10">
        <div className='flex gap-2 text-shadow-main text-2xl md:justify-center basis-full '>
          <div className="flex w-84">
            <Spinner />
            <h1 >MY STACK</h1>
          </div>
        </div>
        <div className='basis-full'/>
      </div>
      <div className='flex flex-col gap-30 mt-4'>
        <TechGroup group={frontend} />
        <TechGroup group={backend} />
        <TechGroup group={database} />
        <TechGroup group={tools} />
      </div>
    </main>
  )
}

export default Stack
