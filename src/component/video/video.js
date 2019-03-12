import React from 'react';
import {Player} from 'video-react';

import '../../../node_modules/video-react/dist/video-react.css';


class VideoTest extends React.Component{
    render(){
        return(
            <div>
                <Player width>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
            </div>
        )
    }
}

export default VideoTest;