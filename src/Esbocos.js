import React from 'react';
import EsbocoCelula from './EsbocoCelula';

function Esbocos(props) {
  return (
    <section className="ftco-section-parallax" id="divPalavras">
        <div className="parallax-img d-flex align-items-center">
            <div className="marginCenter">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center heading-section ftco-animate mb-3">
                    <h2>Palavras</h2>
                    <span className="subheading"><b>Palavras para ministrar na célula</b></span>
                    </div>
                </div>
                <div className="row">
                    <EsbocoCelula nomeArquivo={"Culto 2020-02-23 - OLHOS ABERTOS.pdf"} nomeImagem={"culto 2020-02-23.jpeg"} pregadorEsboco={"Pr. John Richard"} dataEsboco={"23/02/2020"} tituloEsboco={"Olhos abertos"} />
                    <EsbocoCelula nomeArquivo={"Culto 2020-02-16 - UM ESPIRITO DESCONTENTE.pdf"} nomeImagem={"culto 2020-02-16.jpeg"} pregadorEsboco={"Pr. John Richard"} dataEsboco={"16/02/2020"} tituloEsboco={"Um espírito descontente"} />
                    <EsbocoCelula nomeArquivo={"Culto 2020-02-02 - VENCENDO A PROCRASTINACAO.pdf"} nomeImagem={"culto 2020-02-02.jpeg"} pregadorEsboco={"Pr. John Richard"} dataEsboco={"02/02/2020"} tituloEsboco={"Vencendo a procrastinação"} />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Esbocos;