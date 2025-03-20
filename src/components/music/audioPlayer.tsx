import { useState } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import UserImage from "../../assets/images/user.jpg";
import 'react-h5-audio-player/lib/styles.css';
import "../../styles/musicPlayer.scss"

interface PlayerProps {
    mtvList: any;
}

const Player = (props: PlayerProps) => {
    const [audio] = useState(new Audio());

    return (
        <div className="d-flex mt-4 flex-row flex-wrap">
            <div className='col-12 col-lg-4 col-md-4'>
                <div className='d-flex flex-row text-white'>
                    <img src={UserImage} width={60} className='rounded-circle mx-4' alt="song-track-img" />
                    <div >
                        <b>Artist Name</b>
                        <div>Album Name</div>
                    </div>
                    <i className='fa fa-plus-circle pt-1 ms-5'/>
                </div>
            </div>
            <div className="flex-column col-12 col-lg-8 col-md-8">
                <AudioPlayer
                    layout='horizontal-reverse'
                    src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}
                    onPlay={e => console.log("onPlay")}
                />
            </div>

        </div>

    );
}
export default Player;  