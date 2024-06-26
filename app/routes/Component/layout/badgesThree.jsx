import { Button, InlineGrid, Box, Text } from "@shopify/polaris";

import SliderThree from "../slider/sliderThree";


function BadgesThree() {
  return (
    <main style={{ margin:'20px 0 40px 0 ' }}>
      <InlineGrid columns="1fr auto">
        <Text variant="headingXl" as="h4">
          3. Review with Badge-III
        </Text>
        <Box>
          <Button variant="primary" tone="success">
            Select
          </Button>
        </Box>
      </InlineGrid>
      <Box>
      <SliderThree/>
      </Box>
    </main>
  );
}

export default BadgesThree;
