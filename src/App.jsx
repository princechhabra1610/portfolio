import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Certifications from "./sections/Certifications";

// Interactive Components
import CustomCursor from "./components/CustomCursor";
import { FloatingOrbs } from "./components/ParticleSystem";
import ScrollToTop from "./components/ScrollToTop";
import LoadingAnimation from "./components/LoadingAnimation";

export default function App() {
  return (
    <>
      {/* Loading Animation */}
      <LoadingAnimation />

      {/* Custom Cursor (desktop only) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <div className="relative min-h-screen bg-[#0b1220] text-white overflow-x-hidden transition-colors duration-500">

        {/* ================= BACKGROUND LAYERS ================= */}

        {/* Wrapper prevents background from affecting layout */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 
            bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),
                 linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)]
            bg-[size:40px_40px]">
          </div>

          {/* Radial Glow */}
          <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15)_0,_transparent_60%)]">
          </div>

          {/* Static Blur Orbs */}
          <div className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] bg-blue-600/30 blur-[180px] rounded-full"></div>
          <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-indigo-600/30 blur-[180px] rounded-full"></div>

        </div>

        {/* Dynamic Floating Orbs */}
        <FloatingOrbs count={5} />

        {/* ================= CONTENT ================= */}

        <div className="relative z-10">
          <Navbar />

          <main>
            <Hero />
            <Expertise />
            <Certifications />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />

      </div>
    </>
  );
}