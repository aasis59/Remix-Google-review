import { Button, InlineGrid, Box, Text } from "@shopify/polaris";
import SliderFive from "../slider/sliderFive";

function BadgesFive() {
  return (
    <main style={{ margin:'20px 0 20px 0 ' }}>
      <InlineGrid columns="1fr auto">
        <Text variant="headingXl" as="h4">
          5. Review with List
        </Text>
        <Box>
          <Button variant="primary" tone="success">
           Select
          </Button>
        </Box>
      </InlineGrid>
      <Box>
       <SliderFive/>
      </Box>
      </main>
  )
}

export default BadgesFive