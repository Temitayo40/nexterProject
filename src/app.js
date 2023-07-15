import React from "react";
import "./App.scss";
import "./sass/main.scss";
import Header from "./components/Header/header";
import Features from "./components/Features/features";
import Story from "./components/Story_content/story";
import Homes from "./components/Homes/homes";
import Gallery from "./components/Galllery/gallery";
import Footer from "./components/Footer/footer";
import Realtors from "./components/Realtors/realtors";
import StoryPicture from "./components/Story_picture/story-picture";
function App() {
  return (
    <main className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>
      <Header />
      <Realtors />
      <Features />
      <StoryPicture />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
