import BookingForm from '../components/BookingForm'
import '../css/home.css'

function Home() {
  return (
    <>
      <BookingForm />
      <div className="containerHome">
        <div className="containerOne">
          <img
            id="homepictures"
            src="../src/assets/pictures/utanforhus.JPEG"
            alt="Picture of boats that are upside down."
          />
          <div className="textDiv1">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolor, veniam odit laboriosam enim iusto facilis voluptas neque
              ducimus aperiam inventore quis alias voluptatum rerum saepe nemo
              dicta dignissimos at?
            </p>
          </div>
        </div>
        <div className="containertwo">
          <div className="textDiv2">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolor, veniam odit laboriosam enim iusto facilis voluptas neque
              ducimus aperiam inventore quis alias voluptatum rerum saepe nemo
              dicta dignissimos at?
            </p>
          </div>
          <img
            id="homepictures"
            src="../src/assets/pictures/virBro.JPEG"
            alt="Picture of
        a bridge over water."
          />
        </div>
        <div className="containerthree">
          <img
            id="homepictures"
            src="../src/assets/pictures/pommes.jpg"
            alt="Pictures of boats that are upside down."
          />
          <div className="textDiv1">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolor, veniam odit laboriosam enim iusto facilis voluptas neque
              ducimus aperiam inventore quis alias voluptatum rerum saepe nemo
              dicta dignissimos at?
            </p>
          </div>
        </div>
        <div className="containerfour">
          <div className="textDiv2">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolor, veniam odit laboriosam enim iusto facilis voluptas neque
              ducimus aperiam inventore quis alias voluptatum rerum saepe nemo
              dicta dignissimos at?
            </p>
          </div>
          <img
            id="homepictures"
            src="../src/assets/pictures/havet.jpg"
            alt="Pictures of boats that are upside down."
          />
        </div>
      </div>
    </>
  )
}

export default Home
