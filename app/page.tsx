import AboutMe from "@/components/about-me/AboutMe";
import ContactMe from "@/components/contact-me/ContactMe";
import Landing from "@/components/landing/Landing";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}
