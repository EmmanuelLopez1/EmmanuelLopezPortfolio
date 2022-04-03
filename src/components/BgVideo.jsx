import React from 'react';
import ReactPlayer from 'react-player';
import '../css/components/BgVideo.css'


export const BgVideo = ({url, styles, children}) => {
    return (
        <div className={`bg_video ${styles}`}>
            <div className="bg_video_content">
                <video className="bg_video_video" src={url} autoPlay muted loop></video>
            </div>
            {/* <div className="bg_video_overlay"></div> */}

            {children}

        </div>
    )
}