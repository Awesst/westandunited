import React from "react";
import Layout from "../layout/Layout";
import UnityPicture from "../img/UnityLogo.jpg";
import PeoplePicture from "../img/UnityUtZoomad.jpg";
import CyberBullyingPicture from "../img/CyberbullyingLogo.jpeg";

const About = () => {
  return (
    <div>
      <Layout></Layout>
      <img src={PeoplePicture} alt="PeopleUnity" />
      <img src={UnityPicture} alt="UnityLogo" />
      <img src={CyberBullyingPicture} alt="CyberBullyingLogo" />
      <h1>About Us</h1>
      <p>
        Welcome to We Stand United - a passionate community dedicated to
        fostering a safe and inclusive digital environment for all. In the face
        of the growing challenge of cyberbullying, we have united with a common
        purpose: to eradicate online harassment and build a world where everyone
        can express themselves freely without fear. Our Mission: At We Stand
        United, our mission is clear - to empower individuals and communities to
        stand up against cyberbullying. We believe in the transformative power
        of collective action and strive to create a virtual space where
        kindness, empathy, and respect prevail over negativity. What Drives Us:
        The alarming rise of cyberbullying has fueled our commitment to making a
        difference. We are driven by the belief that no one should endure the
        pain and suffering inflicted by online harassment. Together, we advocate
        for change, promote digital literacy, and provide support to those
        affected by cyberbullying. How We Make a Difference: Education and
        Awareness: We actively engage in educational initiatives to raise
        awareness about the impacts of cyberbullying. Through workshops,
        webinars, and community events, we strive to equip individuals with the
        knowledge and tools to navigate the digital landscape safely. Support
        Networks: We Stand United is a haven for those affected by
        cyberbullying. Our support networks offer a place for individuals to
        share their experiences, seek guidance, and connect with others who
        understand the challenges they face. Advocacy: We advocate for stronger
        policies and regulations to combat cyberbullying at a systemic level. By
        collaborating with policymakers, educators, and technology leaders, we
        work towards creating a safer online space for all. Join Us in Taking a
        Stand: The fight against cyberbullying requires a collective effort. We
        invite you to join our movement - whether you're a concerned individual,
        a parent, an educator, or a tech enthusiast. Together, we can build a
        digital world where respect and kindness thrive. Thank you for standing
        united with us in the battle against cyberbullying.
        #TogetherWeStandAgainstBullying #WeStandUnited
      </p>
    </div>
  );
};

export default About;
