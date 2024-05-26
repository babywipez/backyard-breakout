import React from "react";
import { Link } from "gatsby";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="text-blue-400 hover:text-custom-gray"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
