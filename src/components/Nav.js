import React from 'react'

function Nav() {
    return (
        <div className="mt-5">
            <nav class="nav flex flex-wrap items-center justify-between px-4">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

    <span class="font-semibold text-xl tracking-tight lg:ml-20">Prestige Rentals</span>
  </div>

  <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      <a href="#about" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About us</a>
    </li>
    
    <li class="border-t md:border-none">
      <a href="#cars" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Cars</a>
    </li>
    
    <li class="border-t md:border-none">
      <a href="#careers" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Careers</a>
    </li>
    <li class="border-t md:border-none">
      <a href="#help" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Help</a>
    </li>
    <li class="border-t md:border-none">
      <a href="https://www.apple.com/app-store/" class="block md:inline-block shadow-lg lg:ml-20 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110">   Download App</a>
    </li>
  </ul>
</nav>
        </div>
    )
}

export default Nav
