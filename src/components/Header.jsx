function Header() {
  return (
    <header className="bg-black py-8 w-full font-gemunu">
      <div className="flex items-center justify-around text-gega-grey text-2xl w-4/5 mx-auto">
        <div className="text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">
          TATA
        </div>
        <nav className="space-x-6">
          <a className="hover:text-gega-melon transition duration-500" href="#">
            MOVIES
          </a>
          <a className="hover:text-gega-melon transition duration-500" href="#">
            CELEBRITIES
          </a>
          <a className="hover:text-gega-melon transition duration-500" href="#">
            BLOG
          </a>
          <a className="hover:text-gega-melon transition duration-500" href="#">
            NEWS
          </a>
          <a className="hover:text-gega-melon transition duration-500" href="#">
            ABOUT
          </a>
        </nav>
        <form>
          <div className="group border-r px-4 mx-4 py-1 border-gega-red">
            <input
              type="text"
              className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500 "
            />
            <button className="-ml-4 group-hover:ml-0 transition duration-500">
              <i className="fas fa-search group-hover:text-gega-red transition duration-500"></i>
            </button>
          </div>
        </form>
        <div class="flex items-center space-x-4 lg:space-x-8 lg:text-2xl">
          <a href="#">Login</a>
          <a
            href="#"
            className="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-500 whitespace-nowrap"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
