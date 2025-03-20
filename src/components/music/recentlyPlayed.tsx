import { useState } from "react";

interface RecentlyPlayedProps {
    mtvList: any;
}
const RecentlyPlayed = (props: RecentlyPlayedProps) => {
    const { mtvList } = props;

    const [hoverId, setHoverId] = useState<number | null>(null);
    const [favouriteArr, setFavouriteArr] = useState<number[]>([])

    function convertMilliseconds(ms: number) {
        const hours = Math.floor(ms / 3600000); // Get hours
        const minutes = Math.floor((ms % 3600000) / 60000); // Get minutes
        const seconds = Math.floor((ms % 60000) / 1000); // Get seconds

        const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        return timeString;
    }

    function padZero(num: number) {
        return num < 10 ? '0' + num : num;
    }

    const handleMouseEnter = (id: number) => {
        setHoverId(null);
        setHoverId(id);
    }

    const handleFavouriteClick = (id: number) => {
        const arr = [...favouriteArr];
        const idIndex = arr.findIndex(val => val === id)
        console.log(idIndex);
        if (idIndex === -1) {
            arr.push(id)
        } else {
            arr.splice(idIndex, 1)
        }

        // if (
        //     // arr.find
        // )
        setFavouriteArr(arr)
    }
    const isFavourite = (id: number) => {
        const isFav = favouriteArr.find(val => val === id)
        return !!isFav
    }

    return (
        <div>
            <b>Recently Played</b>
            <div className="mt-2" style={{ overflowY: "scroll", height: 300 }}>
                <table className="w-100">
                    <tbody>
                        {mtvList?.map((item: any) =>
                            <tr
                                onMouseOver={() => handleMouseEnter(item.idTrack)}
                                onMouseOut={() => setHoverId(null)}
                                style={{
                                    height: 70,
                                    backgroundColor: item.idTrack === hoverId ? "#f5f5f5" : "#fff",
                                }}>
                                <td className="position-relative">
                                    {item.strTrackThumb ?
                                        <div style={{
                                            position: "relative"
                                        }}>
                                            <img src={item.strTrackThumb} alt="cover" width={70} />
                                        </div>
                                        : <div className="text-center">
                                            <i className="fa fa-music fa-xl me-2" />
                                        </div>}
                                    {item.idTrack === hoverId &&
                                        <div style={{
                                            background: "rgba(0,0,0,0.5)",
                                            position: "absolute",
                                            width: 70,
                                            height: 70,
                                            textAlign: "center",
                                            top: 0,
                                            left: 0,
                                        }}>
                                            <i className="fa fa-play fa-xl text-white" style={{
                                                marginLeft: -4,
                                                marginTop: 36
                                            }} />

                                        </div>}
                                </td>
                                <td >
                                    <b>{item.strTrack}</b>
                                </td>
                                <td>
                                    <span>{item.strArtist}</span>
                                </td>
                                <td>
                                    <span>{convertMilliseconds(item.intDuration)}</span>
                                </td>
                                <td>
                                    <span>
                                        <i className="fa fa-heart mx-5"
                                            style={{
                                                color: isFavourite(item.idTrack) ? "#DE287B" : "gray"
                                            }}
                                            onClick={() => handleFavouriteClick(item.idTrack)}
                                        />
                                    </span>
                                </td>
                                <td>
                                    <span><i className="fa fa-ellipsis" /></span>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div >

    );
}
export default RecentlyPlayed;