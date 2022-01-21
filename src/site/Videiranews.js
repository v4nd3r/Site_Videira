import React from 'react';
import YouTube from '@u-wave/react-youtube';
import Axios from 'axios';

async function VideiraNews(props) {

    const youtubeKeyApi = "";
    const apiYoutube = Axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/activities'
    });

    const response = await apiYoutube.get('/devs', {
        headers: { user: match.params.id }
    });

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
                            <YouTube
                                id="iframeVN"
                                video="AxtjV42hmsE"
                                autoplay={false}
                                allowFullScreen={true}
                            />
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