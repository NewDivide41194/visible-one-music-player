interface RecommendedProps {
  recommendedAlbumList: any;
}

const Recommended = (props: RecommendedProps) => {
  const { recommendedAlbumList } = props;
  console.log(recommendedAlbumList);

  return (
    <div>
      <b>Recommended</b>
      <div className="d-flex flex-row overflow-auto gap-4 mt-2">
        {
          recommendedAlbumList && recommendedAlbumList.map((album: any, index: number) => {
            return (
              album.strAlbumThumb && <div key={index}>
                <div>
                  <img src={album.strAlbumThumb} alt="cover" width={100} />
                </div>
                <div>
                  <b style={{
                    overflow: "hidden",
                    textWrap: "nowrap",
                    width: 100,
                    textOverflow: "ellipsis",
                    display: "block",
                  }}>{album.strAlbum}</b>
                </div>
                <div>
                  <span>{album.strArtist}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Recommended; 