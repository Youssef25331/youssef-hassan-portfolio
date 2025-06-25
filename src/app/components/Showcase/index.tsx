import React from 'react'

const Showcase = () => {
  return (
    <main>

      <div className="flex flex-col justify-center gap-8">
        <h1 className='text-6xl text-shadow-main text-center'>Projects i worked on</h1>
        <div className="flex flex-row justify-center gap-6">
          <div className="bg-base-100 w-150 h-130 border-5 border-base-300 rounded-3xl"></div>
          <div className="flex flex-col w-100">
            <h1 className='text-3xl'>Project name</h1>
            <p>Lorem ipsum dolor sit amet,
              officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Showcase
