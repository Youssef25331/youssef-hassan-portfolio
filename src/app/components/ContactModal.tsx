import React from 'react'
import { SmoothCursor } from './Cursor'
import { LucideGithub, LucideLinkedin, Mail } from 'lucide-react'

const ContactModal = () => {
  return (
    <dialog id="my_modal_5" className="modal backdrop-blur-[4px] modal-bottom">
      {/* <SmoothCursor /> */}
      <div className="modal-box w-120 gap-3 flex flex-col  mx-auto border border-base-200 border-b-transparent rounded-t-2xl bg-[#121212] ">
        <div className="flex gap-3 text-white/70 justify-center">
          <a className='hover:text-white ' href='https://github.com/Youssef25331'>
            <LucideGithub className='size-5' />
          </a>
          <a className='hover:text-white' href='https://www.linkedin.com/in/youssef-hassan-b023a526b/'>
            <LucideLinkedin className='size-5' />
          </a>
        </div>
        <div className="text-white/70 h-9 items-center justify-center rounded-lg p-[3px] grid w-full grid-cols-2 dark:bg-neutral-800/50 gap-">
          <button className="font-light text-sm bg-[#262626] border border-base-200 text-white rounded-lg shadow-none px-2 py-1">Send an E-Mail</button>
          <button className="font-light text-sm  rounded-lg shadow-none px-2 py-1 text-error ">Send a Form <span className='text-[9px]'>(Unavailable)</span></button>
        </div>
        <div className=" w-full">
          <a className='block w-full overflow-hidden rounded-lg border bg-white/40 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 border-neutral-300 hover:border-blue-400 dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:border-blue-500/30 dark:hover:shadow-blue-900/5'
            href="mailto:yousseft25331@gmail.com?subject=Let's%20make%20your%20idea%20together">
            <div className='flex items-center w-full gap-x-3 border-b bg-gradient-to-r to-transparent p-4 border-neutral-200 dark:border-neutral-700/30 from-blue-900/20'>
              <Mail className='size-5' />
              Send an E-Mail
            </div>
            <div className="p-4"><div className="flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-200 transition-all duration-300 group-hover:text-black dark:group-hover:text-white">
              yousseft25331@gmail.com
            </div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Send me an email directly</p></div>
          </a>
        </div>
        <div className="mt-4 flex items-center justify-center rounded-md border border-green-400/20 bg-green-400/10 p-2.5 text-center dark:border-green-900/30 dark:bg-green-900/10">
          <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-500">
            </div>
            <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-500">
            </div>
          </div>
          <p>
            Always available for new ventures.
          </p>
        </div>
        {/* <div className="modal-action"> */}
        {/*   <form method="dialog"> */}
        {/*     <button className="btn bg-base-300 border-none shadow-none">Close</button> */}
        {/*   </form> */}
        {/* </div> */}
      </div>

      <form method="dialog" className="modal-backdrop"> <button>close</button>
      </form>
    </dialog>
  )
}

export default ContactModal
