import React from "react";
import aboutstyle from "./about.module.css";

const AboutUs = () => {
  return (
    <section className={aboutstyle.aboutUs}>
      <div className={aboutstyle.container}>
        <h2 className={aboutstyle.heading}>
          Shri Ram Trust - Serving Humanity
        </h2>
        <p className={aboutstyle.description}>
          <strong>Shri Ram Trust</strong> is dedicated to spreading the
          teachings of Lord Ram and supporting communities through education,
          healthcare, and social welfare programs. Our mission is to preserve
          cultural heritage and uplift those in need.
        </p>

        <div className={aboutstyle.mission}>
          <h3 className={aboutstyle.subheading}>Our Mission</h3>
          <p className={aboutstyle.text}>
            Inspired by the values of Shri Ram, we aim to foster spirituality,
            provide essential resources to the underprivileged, and support the
            construction and renovation of temples across India. Our initiatives
            focus on education, healthcare, and community service.
          </p>
        </div>

        <div className={aboutstyle.grid}>
          <div className={aboutstyle.featureBox}>
            <h3 className={aboutstyle.subheading}>Our Initiatives</h3>
            <ul className={aboutstyle.list}>
              <li>Construction & Renovation of Temples</li>
              <li>Free Education & Skill Development</li>
              <li>Healthcare Camps & Medical Aid</li>
              <li>Annadan Seva - Food for the Needy</li>
              <li>Cultural & Spiritual Awareness Programs</li>
            </ul>
          </div>

          <div className={aboutstyle.featureBox}>
            <h3 className={aboutstyle.subheading}>Join Our Cause</h3>
            <p className={aboutstyle.text}>
              Be a part of our divine mission. Whether through donations,
              volunteering, or spreading awareness, you can help us bring
              positive change and preserve our rich cultural heritage.
            </p>
          </div>
        </div>

        <p className={aboutstyle.cta}>
          Let’s serve humanity in the name of Shri Ram!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
