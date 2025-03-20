import { useEffect, useState } from "react";
import { getMtvList, getRecommendedAlbumList } from "../api/musicAPI";
import { Dashboard, SideBar } from "../components/music";
import Player from "../components/music/audioPlayer";

const MusicPlayerPage = () => {
    const [mtvList, setMtvList] = useState();
    const [recommendedAlbumList, setRecommendedAlbumList] = useState();

    const listMtv = async (): Promise<void> => {
        const res = await getMtvList(112024).then((response) => {
            return response.mvids
        }).catch((error) => {
            console.log(error);
        }
        )
        setMtvList(res);
    }

    const listRecommendedAlbum = async (): Promise<void> => {
        const res = await getRecommendedAlbumList(112024).then((response) => {
            return response.album
        }).catch((error) => {
            console.log(error);
        }
        )
        setRecommendedAlbumList(res);
    }

    useEffect(() => {
        listMtv();
        listRecommendedAlbum();
    }, []);

    return (
        <>
            <div className="d-flex shadow-lg" style={{
                borderRadius: 40
            }}>
                <SideBar recommendedAlbumList={recommendedAlbumList}/>
                <Dashboard mtvList={mtvList} recommendedAlbumList={recommendedAlbumList}/>
            </div>
            <Player mtvList={mtvList}/>

        </>

    )
}

export default MusicPlayerPage;