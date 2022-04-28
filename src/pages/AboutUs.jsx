import React from "react";
import Navbar from "../components/Navbar";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-danger" style={{ paddingTop: "15rem" }}>
          About our company
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          quisquam ipsum repellat nesciunt. Non in consequuntur perferendis ab
          voluptas dolore corporis, dolores iusto aperiam nam consectetur quis
          quas cumque sint?
        </p>
        <h2 className="text-danger">Hackflix</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          doloremque quae, animi impedit rerum atque sint, ab suscipit repellat
          reiciendis neque? Explicabo a officia ex corrupti labore sequi minima
          numquam.
        </p>
        <h2 className="text-danger">Why should you work with us?</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          doloremque quae, animi impedit rerum atque sint, ab suscipit repellat
          reiciendis neque? Explicabo a officia ex corrupti labore sequi minima
          numquam.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
