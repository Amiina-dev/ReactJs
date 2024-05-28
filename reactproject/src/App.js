import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/randomcolour";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />

      {/* Random Color Component*/}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={6} /> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}
    </div>
  );
}

export default App;
