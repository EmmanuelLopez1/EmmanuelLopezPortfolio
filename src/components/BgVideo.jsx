import React from 'react';
import ReactPlayer from 'react-player';


export const BgVideo = ({url, styles}) => {
    return (
        <ReactPlayer
            url={url}
            className={`${styles} react-player`}
            widht='100%'
            height='100%'
            playing
            loop
            muted
        />
    )
}