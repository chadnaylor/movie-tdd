import React from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function Home({ movies: movies }) {
  return (
    <main id="mainContent">
      <section class="movieList">
        <article class="moviePoster">
          {movies.map((movie, index) => {
            return (
              <Link to={"movie/" + index}>
                <img src={movie.img} alt={movie.title} />
              </Link>
            );
          })}

        </article>
      </section>
    </main>
  );
}
