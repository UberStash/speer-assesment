import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function Image() {
    return (
      <div className="App">
        <h1>Image Slider</h1>
        <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src='https://images.unsplash.com/photo-1495651779359-881fde1808a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' className="sliderimg"/>
      <img src='https://images.unsplash.com/photo-1528645602411-bbeb0d69a6de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' className="sliderimg"/>
      <img src='https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1390&q=80' className="sliderimg"/>

</AliceCarousel>

      </div>
    );
  }
  
  export default Image;