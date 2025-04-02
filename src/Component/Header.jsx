import React from "react";
import headerStyles from "./Header.module.css";
import about from "./about";

const NGOPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {" "}
      {/* Header & Navigation */}{" "}
      <header className="bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-5">
          <h1 className="text-3xl font-bold"> Women Empowerment NGO </h1>{" "}
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li>
                <a href="#about" className="hover:text-yellow-300 transition">
                  About {about}
                </a>{" "}
              </li>{" "}
              <li>
                <a href="#donate" className="hover:text-yellow-300 transition">
                  Donate{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">
                  Contact Us{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <button className="bg-white text-pink-600 px-4 py-2 rounded-full hover:bg-gray-200">
                  Donate{" "}
                </button>{" "}
              </li>{" "}
            </ul>{" "}
          </nav>{" "}
        </div>{" "}
      </header>{" "}
      {/* Hero Section */}{" "}
      <main className="flex-grow flex flex-col items-center justify-center p-12 text-center bg-pink-100">
        <h2 className="text-5xl font-extrabold text-gray-800">
          Empowering Women, Changing Lives{" "}
        </h2>{" "}
        <p className="text-lg text-gray-600 mt-4 max-w-lg">
          Join us in making a difference.Support women through education, skill
          development, and healthcare.{" "}
        </p>{" "}
        <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-600 transition">
          Donate Now{" "}
        </button>{" "}
      </main>{" "}
      {/* About Section */}{" "}
      <section id="about" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800"> About Us </h3>{" "}
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          We are a non - profit organization dedicated to empowering women
          through education, skill development, and advocacy.{" "}
        </p>{" "}
      </section>{" "}
      {/* Donate Section */}{" "}
      <section id="donate" className="bg-pink-100 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800">
          {" "}
          Make a Difference{" "}
        </h3>{" "}
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Your donation helps provide education, healthcare, and economic
          opportunities to women in need.{" "}
        </p>{" "}
        <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-600 transition">
          Donate Now{" "}
        </button>{" "}
      </section>{" "}
      {/* Contact Section */}{" "}
      <section id="contact" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800"> Contact Us </h3>{" "}
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Have questions ? Get in touch with us at{" "}
          <strong> support @womenempower.org </strong>{" "}
        </p>{" "}
      </section>{" "}
      {/* Footer */}{" "}
      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        Women Empowerment NGO{" "}
      </footer>{" "}
    </div>
  );
};

export default NGOPage;
