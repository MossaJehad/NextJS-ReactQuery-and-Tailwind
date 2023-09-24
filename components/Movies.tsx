"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Container from '@/components/ui/container'
import Loading from "@/app/loading";


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

// i'm using tmdb API 
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWI5ZWNlZDM4NmE1OWNjNDBjMGJkZmQxOGJhNjdiNCIsInN1YiI6IjY1MGY3YTM3ZTFmYWVkMDBjNjE2MTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EVSO6ifJFznupoXDVbvg1ykWsnrz_KuolJMZ5PSe6SE'
  }
};

function Movies() {
  const { data, isLoading, isError, error } = useQuery(["movies"], async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
    if (!response.ok) {
      throw new Error("Oops Something Went Wrong");
    }
    return response.json();
  });

  if (isLoading) return <Loading/>;
  if (isError) return <pre>ERROR: {JSON.stringify(error)}</pre>;
  
  if (!data) {
    return null;
  }
  console.log(Movies)
  return (
    <div className="App">
      <Container>
        <div className="container mx-auto m-2 text-center justify-center space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.results.map((movie: Movie) => (
                <div key={movie.id} className="cursor-pointer relative outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
                <Card className="rounded-lg border-2 m-2" style={{ height: '650px' }}>
                    <CardHeader className="p-0">
                    <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} width={350} height={450} className="rounded-lg mb-2 transition-all durtion-300 hover:scale-105"/>
                    <CardTitle className="text-2xl">{movie.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <CardDescription style={{ maxHeight: '100px', overflow: 'hidden' }}>{movie.overview}</CardDescription>
                    </CardContent>
                    <CardFooter className="absolute bottom-0 right-0 p-3">
                    <div className="star-shape"></div>
                    <p className="text-lg font-bold text-black dark:text-white">{movie.vote_average}</p>
                    </CardFooter>
                </Card>
                </div>
            ))}
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Movies;
