import MainFooter from "./components/ui/MainFooter";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Sections/Hero";
import Layout from "./components/ui/Layout";
import Features from "./components/Sections/Features";
import Noter from "./components/Sections/Noter";
import Noter2 from "./components/Sections/Noter2";
import Focus from "./components/Sections/Focus";
import Mobile from "./components/Sections/Mobile";
import Reviews from "./components/Sections/Reviews";

function App() {
  return (
    <main>
      <Navbar />
      <Layout maxWidth="max-w-[1440px]">
        <Hero />
        <Features />
        <Noter />
        <Noter2 />
        <Focus />
        <Reviews />
      </Layout>
      <section className=" ">
        <MainFooter />
      </section>
    </main>
  );
}

export default App;
