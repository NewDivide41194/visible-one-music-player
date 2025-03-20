const apiKey = "2";
const BASE_URL = "https://www.theaudiodb.com/api/v1/json/" + apiKey;
const mtvURL = "/mvid.php?i="
const recommendedAlbumURL = "/album.php?i="

export const getMtvList = async (id: number) => {
    const response = await fetch(BASE_URL + mtvURL + id);
    if (!response.ok) throw new Error("Failed to fetch post");
    return response.json();
};

export const getRecommendedAlbumList = async (id: number) => {
    const response = await fetch(BASE_URL + recommendedAlbumURL + id);
    if (!response.ok) throw new Error("Failed to fetch post");
    return response.json();
};
