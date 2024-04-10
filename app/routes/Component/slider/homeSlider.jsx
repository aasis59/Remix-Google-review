import { review } from "../../../constant/review";
import {
  Thumbnail,
  Text,
  Box,
  InlineStack
} from "@shopify/polaris"
import { FaStar } from "react-icons/fa";
import Reviews from "../Slider";
function Homeslider() {
  const image = review.company[0].photo;
  const title = review.company[0].title;
  return (
    <div style={{ padding:'20px 0 0 0' }}>
    <Text  variant="headingMd" as="h6">
      Preview
    </Text>
      <div style={{ display:'flex', alignItems: 'center', padding:' 0 0 30px 0px' }}>
     <div style={{ width:'30%' }}> <InlineStack gap="200">
            <Thumbnail source={image} alt="image" size="medium" />
            <Box padding="200">
              <Text> {title}</Text>
              {[...Array(5)].map((_, index) => (
                    <FaStar key={index} size={20} style={{ color: 'gold' }} />
                  ))}
            </Box>
          </InlineStack></div>
          <div style={{ width:'70%' }}><Reviews/></div>

    </div>
    </div>




  )
}

export default Homeslider
