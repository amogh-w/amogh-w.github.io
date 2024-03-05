import React from "react";

const Button = ({ link, text, icon }) => {
  return (
    <a href={link}>
      <button className="bg-ctp-blue text-ctp-base rounded shadow p-2 m-2">
        <div className="flex flex-row items-center justify-center">
          <div className="mr-2">{icon ? icon : null}</div>
          <div>{text}</div>
        </div>
      </button>
    </a>
  );
};

export default Button;
