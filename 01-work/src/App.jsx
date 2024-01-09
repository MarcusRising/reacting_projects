import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
      </main>
      <Examples />
    </>
  );
}

export default App;
