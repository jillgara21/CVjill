const Qualification = () => {
  return (
    <div id="qualification" className="container py-5" style={{ direction: "ltr", textAlign: "left" }}>
      <h2 className="text-center text-primary">Education &amp; Experience</h2>
      <p></p>
      <p></p>
      <div className="row">
        <div className="col-lg-6">
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>SD-SMP</h5>
              <p><strong>SD-SMP Advent Palu</strong></p>
            </li>
            <li className="mb-4">
              <h5>SMA</h5>
              <p><strong>SMA Negeri 1 Palu</strong></p>
            </li>
            <li className="mb-4">
              <h5>Perguruan Tinggi</h5>
              <p><strong>Universitas Klabat</strong> | 2022 - Sekarang</p>
            </li>
          </ul>
        </div>

        <div className="col-lg-6">
          <h3 className="mb-4">My Experience</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>Web Designer</h5>
            </li>
            <li className="mb-4">
              <h5>Front End Developer</h5>
            </li>
            <li className="mb-4">
              <h5>Programmer</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
