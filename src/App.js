import React from 'react';
import Navbar from './site/Navbar';
import Banner from './site/Banner';
import QuemSomos from './site/QuemSomos';
import OndeEstamos from './site/OndeEstamos';
import Videiranews from './site/Videiranews';
import Esbocos from './site/Esbocos';
import Rodape from './site/Rodape';

function App() {
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

export default App;
