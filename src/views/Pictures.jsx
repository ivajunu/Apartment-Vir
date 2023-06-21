import Carosel from '../components/Carosel'

import {
  Styledh1,
  Pordinary,
  CaroselDiv
} from '../components/Components.Styles'

function Pictures() {
  return (
    <>
      <Styledh1>Welcome to see our stunning pictures!</Styledh1>
      <Pordinary>
        The pictures are from the family vacationing in Vir and living in the
        apartment. For the moment there is no pictures of the apartment due to
        it renovating. Enjoy!
      </Pordinary>
      <CaroselDiv>
        <Carosel />
      </CaroselDiv>
    </>
  )
}

export default Pictures
