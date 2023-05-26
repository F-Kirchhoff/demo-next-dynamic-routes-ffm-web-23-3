import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Movie() {
  const router = useRouter();

  // font: fira Code

  // const dynamicSlug = router.query.dynamicSlug;
  const { dynamicSlug } = router.query;

  const currentMovie = movies.find((movie) => {
    return movie.slug === dynamicSlug;
  });

  if (!currentMovie) {
    return null;
  }

  const { title, description, year } = currentMovie;

  function handleDelete() {
    console.log("delete entry from db...");
    router.back();
  }

  return (
    <>
      <Head>
        <title>{currentMovie.title}</title>
      </Head>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
      <button onClick={handleDelete}>delete Movie</button>
    </>
  );
}
