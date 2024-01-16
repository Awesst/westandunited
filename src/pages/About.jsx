import React from "react";
import Layout from "../layout/Layout";
import UnityPicture from "../img/UnityLogo.jpg";
import PeoplePicture from "../img/UnityUtZoomad.jpg";
import CyberBullyingPicture from "../img/CyberbullyingLogo.jpeg";
import { CardComponent } from "../components/Card/CardComponent";
import styles from "./About.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.cardContainer}>
        <CardComponent
          image={PeoplePicture}
          text={
            "Unite with us at We Stand United, a force against cyberbullying, Where all people stand in unity, we want to symbolize our collective strength. Together, we challenge the digital shadows. Join our movement and stand strong with us."
          }
        />
        <CardComponent
          image={UnityPicture}
          text={
            "At We Stand United, our mission is simple, Unity against cyberbullying. We believe in kindness. Your support matters. Join us, help us spread the empathy and lets build a world free from cyberbullying and where unity prevails"
          }
        />
        <CardComponent
          image={CyberBullyingPicture}
          text={
            "We Stand United to end cyberbullying. We want to create a community to say 'Stop' to online harassment. Join the movement. All the funds raised through the minting of these NFTs will be donated to Cybersmile, an organization dedicated to fighting against cyberbullying. Together, let's make a positive impact and support a cause that works tirelessly to create a safer and more inclusive online environment for everyone."
          }
        />
      </div>
      <div className={styles.headlineText}>
        <div className={styles.togetherness}>
          <p>Togetherness</p>
        </div>
        <div className={styles.Solidarity}>
          <p>Solidarity</p>
        </div>
        <div className={styles.Resistance}>
          <p>Resistance</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
