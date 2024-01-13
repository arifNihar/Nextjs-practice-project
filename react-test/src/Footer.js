// Footer.js
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={leftPartStyle}>
        <a
          href="https://github.com/arifkhan1990"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x" style={iconStyle}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arif-khan-2b4b23118/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x" style={iconStyle}></i>
        </a>
        <a
          href="mailto:arif.entertech19@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-envelope fa-2x" style={iconStyle}></i>
        </a>
      </div>
      <div style={rightPartStyle}>
        <p>
          &copy; 2024{" "}
          <a
            href="https://arif-portfolio-orcin.vercel.app/"
            style={{
              textDecoration: "none",
              color: "violet",
              fontWeight: "bold",
              fontSize: "18px",
              hover: "#FFFFFF",
            }}
          >
            Arif Khan
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  bottom: 0,
  position: "fixed",
  width: "100%",
};

const leftPartStyle = {
  display: "flex",
  alignItems: "center",
  color: "white",
  textDecoration: "none",
  textSize: "16px",
  padding: "10px",
};

const rightPartStyle = {
  flexGrow: 0,
  marginRight: "25px",
};

const iconStyle = {
  fontSize: "2rem", // Increase the icon size
  color: "#fff",
  margin: "0 10px",
  textDecoration: "none",
};
export default Footer;
