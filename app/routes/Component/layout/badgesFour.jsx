import { Button, InlineGrid, Box, Text } from "@shopify/polaris";
import SliderFour from "../slider/sliderFour";

function BadgesFour() {
  return (
    <main style={{ margin:'20px 0 20px 0 ' }}>
      <InlineGrid columns="1fr auto">
        <Text variant="headingXl" as="h4">
          4. Review with Grid
        </Text>
        <Box>
          <Button variant="primary" tone="success">
            Select
          </Button>
        </Box>
      </InlineGrid>
      <Box>
       <SliderFour/>
      </Box>
      </main>
  )
}

export default BadgesFour