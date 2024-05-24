import "./App.css";
import Accordion from "./components/accordion";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion />  */}

      {/* Random Color Component*/}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={5} /> */}

      {/* Image Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
