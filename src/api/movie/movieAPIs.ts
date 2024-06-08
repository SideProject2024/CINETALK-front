import { API_URL } from "@/_constants/api_url";

export const movieAPIs = {
  getMovieDetail: async (movieId: number) => {
    const res = await fetch(`${API_URL}/movie/${movieId}`);
    const data = await res.json();

    return data;
  },
};
