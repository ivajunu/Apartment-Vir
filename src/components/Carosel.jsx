// Källa:
// https://www.npmjs.com/package/react-responsive-carousel

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../css/carosel.css'

function Carosel() {
  return (
    <>
      <Carousel width="800px" dynamicHeight="false" className="carosel">
        <div>
          <img src="../src/assets/pictures/boat.jpg" />
        </div>
        <div>
          <img src="../src/assets/pictures/pommes.jpg" />
        </div>
        <div>
          <img src="../src/assets/pictures/havet.jpg" />
        </div>
        <div>
          <img src="../src/assets/pictures/utanforhus.JPEG" />
        </div>
        <div>
          <img src="../src/assets/pictures/virBro.JPEG" />
        </div>
        <div>
          <img src="../src/assets/pictures/Hall.jpg" />
        </div>
        <div>
          <img src="../src/assets/pictures/cevap.PNG" />
        </div>
        <div>
          <img src="../src/assets/pictures/fish.PNG" />
        </div>
        <div>
          <img src="../src/assets/pictures/night.JPEG" />
        </div>
        <div>
          <img src="../src/assets/pictures/tito.JPEG" />
        </div>
        <div>
          <img src="../src/assets/pictures/tower.JPEG" />
        </div>
        <div>
          <img src="../src/assets/pictures/tunna.PNG" />
        </div>
        <div>
          <img src="../src/assets/pictures/zadar.JPEG" />
        </div>
        <div>
          <img src="../src/assets/pictures/diffrentbeach.JPG" />
        </div>
        <div>
          <img src="../src/assets/pictures/view.PNG" />
        </div>
      </Carousel>
    </>
  )
}

export default Carosel
