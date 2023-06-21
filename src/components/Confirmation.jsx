import { Link } from 'react-router-dom'
import { Styledh1, Pordinary } from '../components/Components.Styles'

function Confirmation() {
  return (
    <>
      <Styledh1>Confirmation</Styledh1>
      <Pordinary>
        Your payment went thru and you will soon get a confirmation email for
        the reservation at Vir apartments. If you have any issius or would like
        to get in contact with us, you can do so at this link:
        <Link to="/contact">Get in touch!</Link>.
      </Pordinary>
    </>
  )
}

export default Confirmation
