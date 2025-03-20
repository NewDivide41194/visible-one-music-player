import Loading from "./loading";

interface MusicCardProps {
    mtvList: any;
}
const MusicCard = (props: MusicCardProps) => {
    const { mtvList } = props;

    const getEmbedUrl = (url: string) => {
        const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
        const match = url.match(youtubeRegex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    };

    return (
        mtvList ? <div className="d-flex gap-4 my-3" >
            {
                mtvList?.map((item: any, index: number) => {
                    return (
                        <div key={index} className="d-flex flex-column align-items-center">
                            <iframe
                                style={{
                                    borderRadius: 20
                                }}
                                src={getEmbedUrl(item.strMusicVid)}
                                width="450"
                                height="250"
                                allowFullScreen
                                title="mtv" />
                        </div>
                    )
                }
                )}
        </div> : <Loading />
    );
}

export default MusicCard;