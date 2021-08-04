import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { data } from "../data/templatesData";
import image from "../images/1.png";
const CreateNew = () => {
  return (
    <div className="container">
      <Nav />
      <div className="row mt-5">
        {data.map((i) => (
          <div key={i.id} className="col-md-3">
            <Link to={`/editor/${i.id}`}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{i.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateNew;
