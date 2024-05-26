import React from "react";
import { Link } from "gatsby";

export default function ReachOut() {
  return (
    <section className="bg-custom-black text-custom-white">
      <p className="text-center text-xs">
        Want to become a writer for BB? Reach out
        <Link
          to="/about/#contact"
          className="text-blue-600 hover:text-custom-gray"
        >
          &nbsp;here
        </Link>
      </p>
    </section>
  );
}
