import texts from "../../sections.json";

function MainFooter() {
  return (
    <footer className="items-center p-4 bg-white rounded-2xl max-w-[1440px] mx-auto mb-20 py-20 px-20 text-neutral-content grid md:grid-cols-2">
      <aside className="flex flex-col items-center md:items-start">
        <div
          className=" text-start"
          style={{
            backgroundColor: "none",
            border: "none",
          }}
        >
          <a href="/">
            <img src={texts["section-last"].logo} alt="logo" width={130} />
          </a>
        </div>
        <p
          style={{ maxWidth: "330px" }}
          className="text-center md:text-start  pt-7 mb-5 md:mb-0"
        >
          Ready to elevate your online presence? Contact us today to discuss
          your project and discover how we can bring your vision to life.
        </p>
      </aside>
      <nav className="text-center md:text-start flex flex-col gap-2 grid grid-cols-2 md:grid-cols-5 ">
        <a href="/#" className="hover:text-[#6953D3]">
          Home
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Pages
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Portfolio{" "}
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Blog
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Contact
        </a>
      </nav>
    </footer>
  );
}
export default MainFooter;
