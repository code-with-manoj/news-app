import React from 'react'
import logo from './logo.png'

const Footer = () => {
  return (
    <>
     <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src={logo} alt="" className='w-20' />
      <span class="ml-3 text-xl">Brew News</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Coder-Manoj
      <a href="https://twitter.com/coder_manoj" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@coder_manoj</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
      
      <a target="_blank" href='https://www.instagram.com/coder_manoj/?hl=en' class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href='https://www.linkedin.com/in/manoj-kushwah-966318231/' target="_blank" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer> 
    </>
  )
}

export default Footer
