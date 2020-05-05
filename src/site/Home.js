import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import QuemSomos from './QuemSomos';
import OndeEstamos from './OndeEstamos';
import Videiranews from './Videiranews';
import Esbocos from './Esbocos';
import Rodape from './Rodape';

import "../Content/css/open-iconic-bootstrap.min.css";
import "../Content/css/animate.css";
import "../Content/css/magnific-popup.css";
import "../Content/css/aos.css";
import "../Content/css/ionicons.min.css";
import "../Content/css/bootstrap-datepicker.css";
import "../Content/css/jquery.timepicker.css";
import "../Content/css/fontawesome.min.css";
import "../Content/css/flaticon.css";
import "../Content/css/icomoon.css";
import "../Content/css/tema.css";
import "../Content/css/styles.css";

function Home () {
    return (
        <div>
          <Navbar />
          <Banner />
          <QuemSomos />
          <OndeEstamos />
          <Videiranews />
          <Esbocos />
          <Rodape />
        </div>
      );
}

export default Home;