import texts from "../../sections.json";

function Noter2() {
  return (
    <section className="relative pt-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="lg:w-2/5 mx-auto text-center flex flex-col">
          <div className="text-start">
            <div className="pt-5">
              <h1
                className="text-6xl font-bold mb-3 text-start"
                style={{ color: "#333333" }}
              >
                {texts["section-six"].title}
              </h1>
              <p
                className="text-[#444444] py-2 mb-3"
                style={{ opacity: "60%" }}
              >
                {texts["section-six"].body}
              </p>
            </div>

            {/* Items */}
            <section className="sm:flex max-w-sm mx-auto flex flex-col gap-5  items-start md:max-w-2xl lg:max-w-4xl   ">
              {/* item 1 */}
              <div className="card border p-5">
                <h2
                  className="text-3xl font-semibold mb-7"
                  style={{ width: "210px" }}
                >
                  Let’s Schedule a Meeting
                </h2>
                <a
                  className="flex items-center btn text-white bg-[#4E47FF] rounded-lg  hover:bg-gray-800  w-80 h-16 sm:ml-0"
                  href="#0"
                >
                  {texts["section-two"].button1}
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="card border p-5">
              <h2 className="text-3xl font-semibold mb-4">
                Unlimited Services
              </h2>
              <p>
                Take a look at some of our recent projects to see how we{"'"}ve
                helped businesses like yours succeed online.
              </p>

              <section className="grid grid-cols-2 py-5">
                {texts["section-six"].items.map((item, index) => (
                  <div key={index} className="flex gap-2 m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <title>item</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </section>
              <a
                className="flex items-center btn text-white bg-grey  rounded-lg  hover:bg-gray-800  w-100 h-16 sm:ml-0"
                href="#0"
              >
                <div className="mr-auto flex items-end">
                  <h2 className="text-3xl ">$3,250</h2>
                  <p className="">/mo</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Noter2;
