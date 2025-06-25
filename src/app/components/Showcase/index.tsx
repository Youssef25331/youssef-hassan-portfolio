import React from 'react'

const Showcase = () => {
  return (
    <main>

      <div className="flex flex-col justify-center gap-8">
        <h1 className='text-6xl text-shadow-main text-center'>Projects i worked on</h1>
        <div className="flex flex-row justify-center gap-6">
          <div className="relative flex bg-base-300 w-150 h-130 justify-center items-center rounded-3xl border border-base-200"
          >
            <div className="absolute inset-x-0 top-0 w-full h-px"
              style={{
                background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
              }}
            ></div>
            <div className="relative bg-cyan-900 w-146 h-126 rounded-2xl" style={{ background: "linear-gradient(180deg,rgba(6, 44, 61, 1) 0%, rgba(9, 68, 94, 1) 52%, rgba(11, 91, 125, 1) 93%, rgba(21, 172, 237, 1) 100%)" }}>
              <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
            </div>
          </div>
          <div className="sticky">
            <div className="sticky top-40">
              <div className="flex">
                <div className="my-4 mr-4 h-1 min-w-6 rounded-full bg-blue-700"></div>
                <div className="flex flex-col w-100 gap-3">
                  <h1 className='text-3xl'>Project name</h1>
                  <p className='text-sm text-base-content/70'>Lorem ipsum dolor sit amet,
                    officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Showcase
