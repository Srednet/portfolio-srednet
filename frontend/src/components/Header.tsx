function Header() {

    function toggleMobileNavbar(e: React.ChangeEvent<any>) {
        e.preventDefault();

        const navbar = document.getElementById('navbar-default');


        if(navbar != null){
            if(navbar.className == "hidden w-full md:block md:w-auto"){
                navbar.setAttribute("class", "w-full md:block md:w-auto")
            } else {
                navbar.setAttribute("class", "hidden w-full md:block md:w-auto")
            }
        }
    }

  return (
      <>
          <nav className="w-screen bg-white border-gray-200 dark:bg-gray-900">
              <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-14">
                  <a href="accueil" className="flex items-center space-x-6 rtl:space-x-reverse">
                      <img src="/src/assets/srednet-logo.png" className="h-12 rounded" alt="Flowbite Logo"/>
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jordan Deledda</span>
                  </a>
                  <button data-collapse-toggle="navbar-default" type="button" onClick={toggleMobileNavbar}
                          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          aria-controls="navbar-default" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fillRule="nonzero"
                           viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>
                  <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                              <a href="accueil"
                                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                 aria-current="page">Home</a>
                          </li>
                          <li>
                              <a href="#"
                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                          </li>
                          <li>
                              <a href="#"
                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                          </li>
                          <li>
                              <a href="#"
                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                          </li>
                          <li>
                              <a href="#"
                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </>
  )
}

export default Header
