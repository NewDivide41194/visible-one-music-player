import { useEffect, useState } from "react";
import { getMtvList, getRecommendedAlbumList } from "../../api/musicAPI";
import MusicCard from "./musicCard";
import Navbar from "./navbar";
import RecentlyPlayed from "./recentlyPlayed";
import Recommended from "./recommended";

interface DashboardProps {
    mtvList: any;
    recommendedAlbumList: any;
}
const Dashboard = (props: DashboardProps) => {
    const { mtvList, recommendedAlbumList } = props;

    return (
        <div className="bg-white w-100 p-4"
            style={{
                borderRadius: "0 0 40px 0",
                overflow: 'hidden',
                height: '87vh',
            }}>
            <Navbar />
            <div style={{ overflowX: "scroll" }}>
                <MusicCard mtvList={mtvList} />
            </div>
            <div className="row mt-2">
                <div className="col-md-6">
                    <RecentlyPlayed mtvList={mtvList} />
                </div>
                <div className="col-md-6">
                    <Recommended recommendedAlbumList={recommendedAlbumList} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;