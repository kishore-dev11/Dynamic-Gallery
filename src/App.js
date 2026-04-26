import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Category from "./components/Category";
import ImageCard from "./components/ImageCard";
import Footer from "./Footer";
import images from "./data";
import "./style.css";

function App() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredImages = images.filter((img) => {
    return (
      (category === "all" || img.category === category) &&
      img.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      <Searchbar setSearch={setSearch} />
      <Category setCategory={setCategory} />

      <div className="gallery">
        {filteredImages.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;