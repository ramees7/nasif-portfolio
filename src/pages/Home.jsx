// import About from "../Components/About";
// import Contact from "../Components/Contact";
// import Landing from "../Components/Landing";
// import Resume from "../Components/Resume";
// import Services from "../Components/Services";

// export default function Home() {
//   return (
//     <div>
//       <Landing />
//       <About />
//       <Services />
//       {/* <Resume /> */}
//       <Contact/>
//     </div>
//   );
// }

import About from "../Components/About";
import Contact from "../Components/Contact";
import Landing from "../Components/Landing";
import Resume from "../Components/Resume";
import Services from "../Components/Services";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div>
      <Landing />
      <div id="about"><About /></div>
      <div id="Service"><Services /></div>
      <div id="resume"><Resume /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}