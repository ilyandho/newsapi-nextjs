const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`;
export async function getAllArticles() {
  try {
    const res = await fetch(url);
    if (res.status !== 200) {
      if (res.status === 401) {
        throw new Error(
          "You are an authroized to access this info. Please check the api key"
        );
      } else {
        throw new Error("An  unknown error occured");
      }
    }

    const data = await res.json();
    return data?.articles;
  } catch (error) {
    return error;
  }
}
