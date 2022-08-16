This app is just a front-end app with some data from TMDB (themoviedb.org). As per requirements, the top rated movie api (GET /movie/top_rated) was used for the site's data. However, due to this app being only a client side app, the data from api was mocked using json server.

Considering it is bad security practice to leave one's api keys exposed on the front-end. The number of movies in the database is 100. Pagination was used to divide the movies into sections of 5 since the total numbers of movies per page in said api is 20. For CSS, Tailwind was used as this would save time and would more focus on the logic side of things. Despite the constraints of the api, it was vital to give the webpage a more attractive look.

Project site: https://tmdbtestproject.herokuapp.com/
