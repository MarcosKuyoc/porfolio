const Test = () => {
  return(
    <main className="h-screen flex flex-col md:flex-row bg-green-700">
      <section className="bg-red md:w-1/6">
        <div className="h-1/5 flex justify-center pt-5 pb-5">
          <div className="text-center">
            Marcos Kuyoc
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center ml-3 text-sm md:hidden hover:text-gray-100 focus:outline-none focus:ring-2"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>
        <nav className="h-3/4">
          <ul className="pl-5 max-md:hidden">
            <li>
              <a href="#index">Index</a>
            </li>
            <li>
              <a href="#go">Go</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center" style={{height: '5%'}}>
          Cerrar Sesion
        </div>
      </section>
      <section className="w-full h-screen bg-blue-500 pt-2 overflow-y-auto">
        <header className="flex justify-end pr-5">
          <nav>
            <ul className="flex flex-row space-x-2">
              <li>About</li>
              <li>contactame</li>
              <li>Juan Marcos</li>
            </ul>
          </nav>
        </header>
        <section className="pl-10 pr-10">
          <div id="break">
            <ul className="flex flex-row space-x-2">
              <li>
                <a href="">inicio</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a href="">go</a>
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <div id="gallery" className="grid gap-3 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-red">1</div>
              <div className="bg-red">2</div>
              <div className="bg-red">3</div>
              <div className="bg-red">4</div>
              <div className="bg-red">5</div>
              <div className="bg-red">6</div>
              <div className="bg-red">7</div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Test;