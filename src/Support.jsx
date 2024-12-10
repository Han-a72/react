import React from "react";

const Support = () => {
  return (
    <>
   <hr className="line "/>
   <br/>
   <br/>
    <div className="d-flex flex-column  justify-content-center">
      <div className="text-center my-4">
        <h2 className="display-2 fw-bold ">Support</h2>
        <br /> <br/> <br/>
        <br/>
        <hr />
        <br/>
        <br/>
      </div>

      <footer className=" text-center text-lg-start py-4">
        <div className="container d-flex flex-column align-items-center">
          <div className="row w-100">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">Features</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Random feature
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Team feature
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Resource
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Resource name
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">About</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Locations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Support;
