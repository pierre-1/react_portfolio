import React from "react";


const Hello = () => {
  return (
    <>
      <div
        className="hero-image"
        style={{
          background: 'url("/src/images/Boston City Flow.jpg")',
          backgroundSize: "cover",
          height: "100vh",
          marginTop: "-1rem"
        }}
      >
        <div className="ui center aligned grid" >
          <div className="four wide column">
            <div className="hero-text">
              <h1> </h1>

              <h4>
                Welcome to my first page coded in React! Have fun exploring and
                get in touch if you have any questions.
              </h4>
              <div>
                <a class="big ui primary button" href="www.google.com"> Contact </a>
               </div>
              
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hello;
