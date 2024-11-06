import About from "../Components/About";
import Contact from "../Components/Contact";
import Landing from "../Components/Landing";
import Resume from "../Components/Resume";
import Services from "../Components/Services";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Services />
      {/* <Resume /> */}
      <Contact/>
    </div>
  );
}
