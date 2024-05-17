import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import texts from "../../sections.json";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();

  return (
    <div className=" flex justify-between px-5 lg:px-10 py-10">
      <div className="my-auto">
        <a className=" text-xl" href="/#">
          <img src={texts["section-one"].logo} alt="logo" />
        </a>
      </div>
      <div className="justify-between hidden lg:flex items-center ">
        <ul className="menu menu-horizontal  font-semibold py-4 px-5 gap-16 bg-white bg-opacity-34 border rounded-2xl">
          <li className="hover:text-[#6953D3]">
            <a href="/#">{texts["section-one"].item1}</a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a href="/#">{texts["section-one"].item2}</a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a href="/#">{texts["section-one"].item3}</a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a href="/#">{texts["section-one"].item4}</a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a href="/#">{texts["section-one"].item5}</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a
          className="flex items-center  px-3 py-2 rounded-5"
          href="/#"
          style={{ opacity: "50%" }}
        >
          Sign In
        </a>
        <div className="flex items-center">
          <a
            className="flex items-center btn  gap-2 px-6 py-2 rounded-5"
            href="/#"
            style={{ backgroundColor: "#4E47FF", color: "white" }}
          >
            Sign Up
          </a>
        </div>
      </div>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </div>
  );
};
export default Navbar;
