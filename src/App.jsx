import { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Home from "./components/Home";
import Sitios from "./components/Sitios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="section-images"></div>
      <main className="flex flex-col justify-between absolute top-0 left-0 w-full bg-slate-800/[0.8]	">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header />
        <section className="flex-[1_1_90vh] overflow-y-auto	">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sitios" element={<Sitios />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
