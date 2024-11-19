import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
  const [images, setImages] = useState({});
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    const database = getDatabase();
    const imageRef = ref(database, "image");

    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data || {});

      if (data) {
        const firstImage = Object.values(data)[0];
        setImageBase64(firstImage);
      }
    });
  }, []);

  return (
    <div
      className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            {imageBase64 ? (
              <img
                className="img-fluid w-100 rounded-circle shadow-sm"
                src={`data:image/jpeg;,${imageBase64}`}
                alt="Image from Firebase"
              />
            ) : (
              <div className="text-white">Loading image..</div>
            )}
          </div>
          <div className="col-lg-7 text-center text-lg-left">
            <h4 className="text-white font-weight-normal mb-3">
            
            </h4>
            <h1>
              Gilbert Gabriel Marcellino Gara

            </h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white" />
            <div className="typed-text d-none">
              Web Designer, Web Developer, Front End Developer, Apps Designer,
              Apps Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
