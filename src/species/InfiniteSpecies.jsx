import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const { data, isLoading, fetchNextPage, hasNextPage, isError, error } =
    useInfiniteQuery(
      "sw-species",
      ({ pageParam = initialUrl }) => {
        return fetchUrl(pageParam);
      },
      { getNextPageParam: (lastPage) => lastPage.next || undefined }
    );

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error !! {error.toString()}</div>;
  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data.pages.map((pageData) => {
        return pageData.results.map((species) => {
          return (
            <Species
              key={species.name}
              name={species.name}
              language={species.language}
              averageLifespan={species.averageLifespan}></Species>
          );
        });
      })}
    </InfiniteScroll>
  );
}
