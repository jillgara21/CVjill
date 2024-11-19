import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    const database = getDatabase();
    const imageRef = ref(database, "image/image1");

    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      setImageBase64(data || "");
    });
  }, []);

  return (
    <div className="container-fluid py-5" id="about" style={{ direction: "ltr", textAlign: "left" }}>
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }} 
          >
              About
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
              Me
          </h1>
        </div>
        <div className="row align-items-center"> 
          <div className="col-lg-5 pb-4 pb-lg-0 d-flex justify-content-center">
            {imageBase64 ? (
              <img
                className="img-fluid rounded w-100"
                src={`data:image/jpeg;base64,${imageBase64}`}
                alt="Gilbert Gara profile picture"
              />
            ) : (
              <div>Loading image...</div>
            )}
          </div>
          <div className="col-lg-7">
            <p>
              Hi! i'm Gilbert Gabriel Marcellino Gara but you can call me Jill, i'm a student from Klabat University
              and i majored in Information System.
            </p>
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Name : <span className="text-secondary">Gilbert Gabriel Marcellino Gara (Jill)</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Birthday :{" "}
                  <span className="text-secondary">21 December 2004</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Status : <span className="text-secondary">Student</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Experience : <span className="text-secondary">2 years in Unklab</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Phone : <span className="text-secondary">+62 82190718282</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email :{" "}
                  <span className="text-secondary">
                    jilmarcellino21@gmail.com
                    s22210370@student.unlab.ac.id
                  </span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Address :{" "}
                  <span className="text-secondary">Airmadidi, Manado, North Sulawesi</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Freelance : <span className="text-secondary">Available</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
