import React from 'react';

function OndeEstamos(props) {
  return (
    <section className="ftco-section-parallax" id="divOndeEstamos">
        <div className="parallax-img d-flex align-items-center">
            <div className="marginCenter">
                <div className="row d-flex justify-content-center">
                <div className="col-md-12 text-center heading-section ftco-animate">
                    <h2>Onde estamos</h2>
                    <span className="subheading"><b>Localização das células e prédios</b></span>
                    <p className="mt-3">
                    <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1s6bOgRqpkEl8wmEmgcVapHu1swS7JSUw" id="mapaDeCelulas"></iframe>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default OndeEstamos;