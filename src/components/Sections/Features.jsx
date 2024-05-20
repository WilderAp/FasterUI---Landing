import texts from "../../sections.json";
import { BsStars } from "react-icons/bs";
import { RxText } from "react-icons/rx";
import { IoIosExpand } from "react-icons/io";

function Features() {
  return (
    <section className="grid grid-cols-1 md:max-w-7xl mx-auto sm:px-6 pb-12">
      <h1 className="text-4xl font-semibold text-center md:text-start text-black mb-10">
        {texts["section-four"].title}
      </h1>
      <div className=" md:flex  gap-4">
        <div className="lg:text-left text-center flex flex-col gap-4">
          {/* I t e m s */}
          <div className="flex flex-col md:flex-row   gap-5">
            {/* Item 1 */}
            <div className="max-w-sm bg-white rounded  hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700 mx-auto ">
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
            <div className="max-w-sm mx-auto  bg-white rounded border-transparent hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
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
            <div className="max-w-sm mx-auto  bg-white rounded border-transparent  hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
            {/* Item 1 */}
            <div className="max-w-sm mx-auto md:max-w-none md:mx-0 bg-white flex flex-col  md:flex-row items-center w-[280px] md:w-[590px] rounded  md:col-span-2   hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
              <div className="p-6 w-[280px] md:w-[350px] md:h-[210px]">
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
              <div className="flex items-center mb-5 md:mb-0">
                <img
                  src="https://res.cloudinary.com/db60chvpz/image/upload/v1715929669/FasterUI/ev1nibpvjpayqxy3slte.png"
                  alt="svg"
                  width={170}
                />
              </div>
            </div>
            {/* Item 2 */}
            <div className="max-w-sm mx-auto  bg-white rounded border-transparent  hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
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
          <div className="max-w-sm mx-auto  bg-white rounded border-transparent  hover:bg-[#7A67FF] dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700">
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
              <div className="flex justify-center pt-4">
                <img
                  src="https://res.cloudinary.com/db60chvpz/image/upload/v1715929862/FasterUI/yb6qfv9fkz1auwjccukm.png"
                  alt="svg"
                  width={195}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
