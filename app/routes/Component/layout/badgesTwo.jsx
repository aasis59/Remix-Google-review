import { Button, InlineGrid, Box, Text } from "@shopify/polaris";
import SliderTwo from "../slider/sliderTwo";


function BadgesTwo() {
  return (
    <main style={{ marginTop:'20px ' }}>
      <InlineGrid columns="1fr auto">
        <Text variant="headingXl" as="h4">
          2. Review with Badge-II
        </Text>
        <Box>
          <Button variant="primary" tone="success">
            Select
          </Button>
        </Box>
      </InlineGrid>
      <Box>
        <SliderTwo/>
      </Box>
    </main>
  );
}

export default BadgesTwo;
