import React from "react";

const Button = ({ link, text, icon }) => {
  return (
    <a href={link}>
      <button className="bg-ctp-blue text-ctp-base rounded shadow p-2 hover:animate-pulse">
        <div className="flex flex-row items-center justify-center">
          <div>{text}</div>
          <div className="ml-2">{icon ? icon : null}</div>
        </div>
      </button>
    </a>
  );
};

export default Button;
