import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./Person";
import { useInfiniteQuery } from "react-query";

const initialUrl = "https://swapi.dev/api/people/";

// create a function to fetch data from url.
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// TODO: get data for InfiniteScroll via React Query
export function InfinitePeople() {
  //use infinte Query 
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery(
      "sw-people", //queryKey
      ({ pageParam = initialUrl }) => fetchUrl(pageParam), // queryFn
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined, //getNextPageParam
      }
    );
    //if its loading
  if (isLoading) return <div className="loading">Loading...</div>; 
  //if its error
  if (isError) return <div>Error!!!{error.toString()}</div>;

  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data.pages.map((pageData) => {
        return pageData.results.map((person) => {
          return (
            <Person
              key={person.name}
              name={person.name}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
            />
          );
        });
      })}
    </InfiniteScroll>
  );
}
