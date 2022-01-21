import React from 'react';
import YouTube from '@u-wave/react-youtube';
import Axios from 'axios';

function VideiraNews(props) {

    // const youtubeKeyApi = "2ae6743fc243a6ce26dbe414bf2905d67c893b6f";
    // const apiYoutube = Axios.create({
    //     baseURL: 'https://www.googleapis.com/youtube/v3/',
    //     params: {
    //         part: 'snippet',
    //         maxResults: 5,
    //         key: youtubeKeyApi,
    //     },
    // });

    // const response = await apiYoutube.get('/devs', {
    //     headers: { user: "123" }
    // });

    return (
        <section className="ftco-section" id="divVideiraNews">
            <div className="container">
                <div className="row no-gutters justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section ftco-animate">
                    <h2 className="mb-4"><i className="icon-youtube-play"></i> Videira News</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="marginCenter">
                        <div className="sermons">
                            {/* <YouTube
                                video="gSdJQN_GEFo"
                                width={640}
                                height={480}
                                autoplay={false}
                                controls={false}
                                suggestedQuality="auto"
                                volume={1}
                                paused={true}
                            /> */}
                            <iframe width="640" height="480" src="https://www.youtube.com/embed/gSdJQN_GEFo" title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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