import React from 'react';

function EsbocoCelula(props) {
    var nomeArquivo = props.nomeArquivo;
    var nomeImagem = props.nomeImagem;
    var pregadorEsboco = props.pregadorEsboco;
    var dataEsboco = props.dataEsboco;
    var tituloEsboco = props.tituloEsboco;

    return (
        <div className="col-md-4 ftco-animate">
            <div className="blog-entry">
                <a href={"./Content/Arquivos/"+ nomeArquivo} target="_blank" className="block-20" style={{backgroundImage: "url('./Content/images/cultos/"+ nomeImagem +"')"}}>
                </a>
                <div className="text p-4 d-block">
                    <div className="meta">
                        <div>{pregadorEsboco}</div>
                        <div>{dataEsboco}</div>
                    </div>
                    <h3 className="heading">{tituloEsboco}</h3>
                </div>
            </div>
        </div>
    );
}

export default EsbocoCelula;