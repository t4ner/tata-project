import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gega-grey">
      <div className="container flex flex-col md:flex-row px-10 lg:px-0 pb-8">
        <div className="basis-1/3">
          <a
            href="#"
            className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
          >
            TATA
          </a>
          <p className="text-sm mt-2">2022 ArinSOFT No &copy; COPYRIGHT</p>
        </div>

        <div className="basis-1/3">
          <h2 className="mb-2 text-gega-red">LINKS</h2>
          <div className="grid grid-cols-5 gap-2 uppercase">
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              Movies
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              Celebrities
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              Blog
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              News
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              Abput
            </a>
          </div>
        </div>

        <div className="basis-1/3">
          <h2 className="mb-2 text-gega-red">FOLLOW US</h2>
          <form action="" className="flex">
            <input
              className="py-1 px-2 bg-transparent border border-gega-red placeholder:text-xs outline-none"
              placeholder="TYPE YOUR EMAIL"
              type="text"
            />
            <button className="py-1 px-2 bg-transparent border border-gega-red bg-gega-red font-jakarta uppercase">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
