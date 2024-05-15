import React from "react";
import graph from "../asserts/Graph.png";

const Skills = () => {
  return (
    <div className="container mt-5">
      <h1>
        <b>SKILLS</b>
      </h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 border-skills p-3 mb-4">
          <div className="text-center">
            <img src={graph} alt="" className="graph-img" />
            <div className="mt-3">
              <h3>UX Design</h3>
              <p>
                UI design is the process of designing the visual and interactive
                elements of a user interface, such as buttons, icons, and
                layout, to create an intuitive and pleasing experience for
                users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 border-skills p-3 mb-4">
          <div className="text-center">
            <img src={graph} alt="" className="graph-img" />
            <div className="mt-3">
              <h3>UI Design</h3>
              <p>
                UI design is the process of designing the visual and interactive
                elements of a user interface, such as buttons, icons, and
                layout, to create an intuitive and pleasing experience for
                users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 border-skills p-3 mb-4">
          <div className="text-center">
            <img src={graph} alt="" className="graph-img" />
            <div className="mt-3">
              <h3>Information Architecture</h3>
              <p>
                Information architecture is the design of the structure and
                organization of content on a website or digital product to make
                it easy for users to navigate and understand.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 border-skills p-3 mb-4">
          <div className="text-center">
            <img src={graph} alt="" className="graph-img" />
            <div className="mt-3">
              <h3>Figma</h3>
              <p>
                Figma is a cloud-based design tool that allows teams to
                collaborate on the design process in real time. It offers a
                range of features for designing, prototyping, and sharing user
                interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
