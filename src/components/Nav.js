import React from 'react'

function Nav() {
  return (
    <div className="mt-5">
      <nav class="nav flex flex-wrap items-center justify-between px-4">
        <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <span class="font-semibold text-xl tracking-tight lg:ml-20">
            Prestige Rentals
          </span>
        </div>

        <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          for="menu-btn"
        >
          <span class="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li class="border-t md:border-none">
            <a
              href="#about"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              About us
            </a>
          </li>

          <li class="border-t md:border-none">
            <a
              href="#cars"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Cars
            </a>
          </li>

          <li class="border-t md:border-none">
            <a
              href="#careers"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Careers
            </a>
          </li>
          <li class="border-t md:border-none">
            <a
              href="#help"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Help
            </a>
          </li>
          <li class="border-t md:border-none">
          <div className="flex flex-col">
            <a
              href="https://www.apple.com/app-store/"
              class="block md:inline-block text-center shadow-lg lg:ml-20 lg:mr-20  bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110"
            >
              <svg width="16px" height="16px" className="float-left mr-2 mt-1" viewBox="0 0 256 315">
                <g>
                  <path
                    d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                    fill="#fff"
                  />
                </g>
              </svg>
              Download App
            </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
