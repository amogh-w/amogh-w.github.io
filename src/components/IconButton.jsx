import React from "react";

const IconButton = ({ link, text }) => {
  return (
    <a href={link} className="hover:text-ctp-blue">
      {text}
    </a>
  );
};

export default IconButton;
