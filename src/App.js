import { Route, Routes } from "react-router-dom";
import MainDirectory from "./pages/MainDirectory";

const App = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<MainDirectory />} />
        <Route path="/article1" element="article1" />
        <Route path="/article2" element="article2" />
      </Routes>
    </section>
  );
};
export default App;
