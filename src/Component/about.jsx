import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-pink-100 py-12 px-6 md:px-16 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4"> About Us </h2>{" "}
        <p className="text-lg mb-6">
          At <strong> EmpowerHer </strong>, we are dedicated to uplifting and
          empowering women through education, skill development, and
          advocacy.Our mission is to create a world where every woman has the
          opportunity to achieve her full potential, free from discrimination
          and inequality.{" "}
        </p>{" "}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          veniam provident rem consequatur placeat sed distinctio iusto facere
          vel. Voluptatibus.
        </p>
        <p className="text-lg">
          Through mentorship programs, vocational training, and community
          outreach, we strive to provide women with the resources and confidence
          they need to lead independent and successful lives.Join us in making a
          difference today!
        </p>{" "}
      </div>{" "}
    </section>
  );
};

export default AboutUs;
