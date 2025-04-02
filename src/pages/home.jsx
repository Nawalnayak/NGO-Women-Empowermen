import React from "react";
import { motion } from "framer-motion";
import Button from "../common/components/buttons/Button";
import Card from "../common/components/card";
import CardContent from "../common/components/cardContent";
import Navbar from "../common/components/header/Navbar";
import Footer from "../common/components/footer/footer";
import styles from "./home.module.css"; 
import EducationImg from "../aessets/Edue.jpeg";
import HealthcareImg from "../aessets/Helth.jpeg";
import CommunityImg from "../aessets/community.jpeg";
import PartnerImg from "../aessets/partnr1.png";
import backgroundVideo from"../aessets/Video.mp4";

const Home = () => {
  return (
    <>
    <div className={styles.homeContainer}>
      <Navbar />

      <div className={styles.heroSection}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
      <source src={backgroundVideo} type="Video/mp4" />
      </video>
  <div className={styles.heroOverlay}>
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={styles.heroTitle}
    >
      Empowering Communities, Changing Lives
    </motion.h1>
    <p className={styles.heroText}>Join us in making a difference.</p>
    <Button text="Get Involved" className={styles.button} onClick={() => alert("Get Involved clicked!")} />
  </div>
</div>

      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.sectionText}>
          We are dedicated to providing resources and support to underserved communities worldwide.
        </p>
      </section>

      {/* Programs Section */}
      <section className={styles.programsSection}>
  <h2 className={styles.sectionTitle}>Our Programs</h2>
  <div className={styles.programGrid}>
    <Card 
      title="Education for All" 
      text="Providing education and school supplies to children in need." 
      image={EducationImg} 
      backgroundColor="#ffff"
      />
    <Card 
      title="Healthcare Support" 
      text="Ensuring access to essential medical care and wellness programs." 
      image={HealthcareImg} 
      backgroundColor="#ffff"
      />
    <Card 
      title="Community Development" 
      text="Building sustainable solutions for thriving communities." 
      image={CommunityImg} 
      backgroundColor="#ffff"
      />
  </div>
</section>


      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>What People Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>"This organization has changed my life!"</p>
            <span>- John Doe</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>"A truly inspiring initiative making real impact."</p>
            <span>- Jane Smith</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>"I’m proud to be a donor and support their mission."</p>
            <span>- Emily Johnson</span>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <h2 className={styles.sectionTitle}>Our Partners</h2>
        <div className={styles.partnerLogos}>
          <img src={PartnerImg} alt="Partner 1" />
          <img src="/partner5.png" alt="Partner 5" />
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Support Our Cause</h2>
        <p className={styles.ctaText}>Your donation can change lives. Join us today!</p>
        <Button text="Donate Now" className={styles.button} onClick={() => alert("Donate Now clicked!")} />
      </section>

    </div>
      </>
  );
};

export default Home;
