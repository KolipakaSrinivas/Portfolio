import Hero from "./components/Home/Hero";
import Quote from "./components/Home/Quote";
import Projects from "./components/Home/Projects";

const Home = () => {
  return (
    <section className="flex-1 mt-[55px] flex flex-col gap-4">
      <Hero />
      <Quote />
      <Projects />
    </section>
  );
};

export default Home;
