"use client";

import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Add FaInstagram

const SocialMediaLinks = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1.5rem",
      }}
    >
      {/* GitHub */}
      <a
        href="https://github.com/BlackHawk616"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#000",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <FaGithub size={30} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourusername/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#0077b5",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <FaLinkedin size={30} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/BlackHawk616"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#1DA1F2",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <FaTwitter size={30} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sri_ram___charan"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#E1306C",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;