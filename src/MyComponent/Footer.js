import React from "react";

const Footer = () => {
  let footerstyle = {
    position: "absolute",
    width: "100%",
    top: "100vh",
  };
  return (
    <div className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">Copyright &copy; mytodolist.com</p>
    </div>
  );
};

export default Footer;
