import MainPage from "./components/mainPage";
import "./App.css";
import Header from "./components/header";
import { useState } from "react";
import HoneyPage from "./components/honeyPage";

function App() {
  const [actualPage, setActualPage] = useState('main')

  const handlePageSelected = () => {
    if(actualPage === 'main'){
      return <MainPage />
    }
    if(actualPage === 'honey'){
      return <HoneyPage />
    }
  }
  return (
    <div className="App">
      <Header setActualPage={setActualPage}>
        {handlePageSelected()}
      </Header>
    </div>
  );
}

export default App;
