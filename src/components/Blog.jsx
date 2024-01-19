import user from "../images/user.png";
function Blog() {
  return (
    <section className="py-24 bg-black text-gega-grey">
      <div className="container px-10 lg:px-0">
        <h2 className="text-gega-red">
          <a href="#">Popular Posts</a>
        </h2>

        <div className="grid grid-cols-6 gap-10">
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src={user} alt="" className="rounded-full w-10" />
            </div>

            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, consequatur temporibus dolorem nihil excepturi quos.
              Amet cupiditate aperiam temporibus perferendis?
            </p>

            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-jakarta text-xs">
              <p>ON DEC 17, 2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src={user} alt="" className="rounded-full w-10" />
            </div>

            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, consequatur temporibus dolorem nihil excepturi quos.
              Amet cupiditate aperiam temporibus perferendis?
            </p>

            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-jakarta text-xs">
              <p>ON DEC 17, 2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src={user} alt="" className="rounded-full w-10" />
            </div>

            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, consequatur temporibus dolorem nihil excepturi quos.
              Amet cupiditate aperiam temporibus perferendis?
            </p>

            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-jakarta text-xs">
              <p>ON DEC 17, 2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src={user} alt="" className="rounded-full w-10" />
            </div>

            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, consequatur temporibus dolorem nihil excepturi quos.
              Amet cupiditate aperiam temporibus perferendis?
            </p>

            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-jakarta text-xs">
              <p>ON DEC 17, 2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
              <img src={user} alt="" className="rounded-full w-10" />
            </div>

            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, consequatur temporibus dolorem nihil excepturi quos.
              Amet cupiditate aperiam temporibus perferendis?
            </p>

            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-jakarta text-xs">
              <p>ON DEC 17, 2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
