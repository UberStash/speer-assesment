import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Image() {
  return (
    <div className="App">
      <AliceCarousel
        innerWidth={true}
        autoWidth={true}
        autoHeight={true}
        autoPlay
        auto
        autoPlayStrategy="none"
        autoPlayInterval={10000}
        animationDuration={2000}
        animationType="slide"
        infinite
        touchTracking={true}
        enableDotsControls
        disableButtonsControls
      >
        <img
          src="https://images.unsplash.com/photo-1495651779359-881fde1808a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          className="sliderimg"
          alt="rock concert"
        />
        <img
          src="https://images.unsplash.com/photo-1528645602411-bbeb0d69a6de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          className="sliderimg"
          alt="rock concert"
        />
        <img
          src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1390&q=80"
          className="sliderimg"
          alt="rock concert"
        />
      </AliceCarousel>
    </div>
  );
}

export default Image;
