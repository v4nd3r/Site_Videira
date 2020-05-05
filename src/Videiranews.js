import React from 'react';
import EsbocoCelula from './EsbocoCelula';

function VideiraNews(props) {
  return (
    <section className="ftco-section" id="divVideiraNews">
        <div className="container">
            <div className="row no-gutters justify-content-center mb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                <h2 className="mb-4"><i className="icon-youtube-play"></i> Videira News</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ftco-animate marginCenter">
                    <div className="sermons">
                        <iframe id="iframeVN" src="https://www.youtube.com/embed/AxtjV42hmsE" frameborder={"0"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                <p><a href="https://www.youtube.com/videiravix/videos/" target="_blank" className="btn btn-primary btn-outline-primary p-3">Ver Mais Videos</a></p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default VideiraNews;