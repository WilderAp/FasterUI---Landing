import texts from "../../sections.json";

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-10 pb-12 md:pt-10 lg:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-4.5xl font-semibold lg:px-40 leading-tighter tracking-tighter mb-4"
              // style={{ maxWidth: "750px" }}
              data-aos="zoom-y-out"
            >
              {texts["section-two"].title}{" "}
            </h1>
            <div className="pt-6">
              <a
                className="bg-[#252432] text-white p-3 px-8 rounded-lg"
                href="/#"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
