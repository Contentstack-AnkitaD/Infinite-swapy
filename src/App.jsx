import "./App.css";
import { InfinitePeople } from "./people/InfinitePeople";
import { QueryClient, QueryClientProvider } from "react-query";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
let queryClient = new QueryClient();
function App() {
  const [choice, setChoice] = useState("people");
  console.log(choice);
  function handleSpeciesClick() {
    setChoice("species");
  }
  function handlePeopleClick() {
    setChoice("people");
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 style={{ color: "goldenrod" }}>Infinite SWAPI</h1>
        <nav className='btn-group'>
          <button className="button" onClick={handlePeopleClick}>
            people
          </button>
          <button className="button" onClick={handleSpeciesClick}>
            species
          </button>
        </nav>
        <div className="container">
          {choice === "species" ? <InfiniteSpecies /> : <InfinitePeople />}
        </div>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
