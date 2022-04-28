const tmdbApiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cd1b9009288cdf2c56dbdcf66a4179f2",
    page: 1,
    include_adult: false,
    language: "en-US",
    "vote_count.gte": 30,
  },
};

export default tmdbApiConfig;
