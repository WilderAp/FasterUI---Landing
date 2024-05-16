import texts from "../../sections.json";
import { BsStars } from "react-icons/bs";
import { RxText } from "react-icons/rx";
import { IoIosExpand } from "react-icons/io";
import { PiUserFocus } from "react-icons/pi";

function Features() {
  return (
    <section className="max-w-6xl mx-auto sm:px-6 pb-12">
      <h1 className="text-4xl font-semibold  text-start text-black">
        {texts["section-four"].title}
      </h1>
      <div className="flex gap-4">
        <div className="lg:text-left text-center flex flex-col gap-4">
          {/* I t e m s */}
          <div className="grid grid-cols-1 md:grid-cols-3  mt-20">
            {/* Item 1 */}
            <div className="max-w-sm bg-black-200  shadow hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700 mx-auto ">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "black",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <BsStars size={30} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
                    {texts["section-four"].item1.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {texts["section-four"].item1.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="max-w-sm mx-auto  bg-black-200 border-transparent shadow hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "black",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <RxText size={30} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
                    {texts["section-four"].item2.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {texts["section-four"].item2.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="max-w-sm mx-auto  bg-black-200 border-transparent shadow hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "black",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <IoIosExpand size={30} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
                    {texts["section-four"].item3.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {texts["section-four"].item3.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Items Section 2 */}
          <div className="grid grid-cols-3">
            {/* Item 1 */}
            <div className=" bg-black-200 col-span-2  shadow hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
              <div className="p-6" style={{ width: "592px", height: "210px" }}>
                <div
                  className="lg:mr-80 md:mr-80"
                  style={{
                    color: "black",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <BsStars size={30} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
                    {texts["section-four"].item1.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {texts["section-four"].item1.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="max-w-sm mx-auto  bg-black-200 border-transparent shadow hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "black",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <RxText size={30} />
                </div>
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
                    {texts["section-four"].item2.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {texts["section-four"].item2.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Items Section 3 */}
        <div className="grid grid-cols-1">
          {/* Item 1 */}
          <div className="max-w-sm mx-auto  bg-black-200 border-transparent shadow hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
            <div className="p-6" style={{ width: "280px", maxHeight: "" }}>
              <div
                className="lg:mr-80 md:mr-80 mx-auto"
                style={{
                  color: "black",
                  border: "1px solid",
                  width: "fit-content",
                  marginBottom: "10px",
                }}
              >
                <IoIosExpand size={30} />
              </div>
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
                  {texts["section-four"].item3.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {texts["section-four"].item3.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
