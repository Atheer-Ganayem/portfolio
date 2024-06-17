import React from "react";
import SectionContainer from "../ui/SectionContainer";
import AnimatedHeading from "../ui/AnimatedHeading";
import ContactForm from "../about-me/ContactForm";

const ContactMe = () => {
  return (
    <SectionContainer id="contact-me">
      <AnimatedHeading text="Contact Me" underlineBgColor="bg-primary" className="text-5xl" />
      <main className="container max-w-7xl mx-auto p-5 lg:px-0 py-10">
        <ContactForm />
      </main>
    </SectionContainer>
  );
};

export default ContactMe;
