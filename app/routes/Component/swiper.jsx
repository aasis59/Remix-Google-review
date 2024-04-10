import {Text} from '@shopify/polaris';
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

function GoogleSwiper({ data }) {
  return (
    <div id="review-swiper">

      <div id="review-card" >
        <div style={{ display:'flex', gap:'5px' }}>
          <img src={data.imageLink} alt="Review" />
          <div><Text>{data.name}</Text>
          <Text>{data.date}</Text></div>
        </div>
        <div >
          <FcGoogle size={25} />
        </div>
      </div>
      <div style={{ marginTop:'10px' }}>
      {[...Array(5)].map((_, index) => (
                    <FaStar key={index} size={20} style={{ color: 'gold' }} />
                  ))}
      </div>
      <Text>
        {data.description}
      </Text>



  </div>

  );
}

export default GoogleSwiper;
