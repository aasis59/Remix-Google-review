import { Button, InlineGrid, Box, Text } from "@shopify/polaris";
import Homeslider from "../slider/homeSlider";

function BadgesOne() {
  return (
    <main>
      <InlineGrid columns="1fr auto">
        <Text variant="headingXl" as="h4">
          1. Review with Badge-I
        </Text>
        <Box>
          <Button variant="primary" tone="success">
            Active
          </Button>
        </Box>
      </InlineGrid>
      <Box>
        <Homeslider/>
      </Box>
    </main>
  );
}

export default BadgesOne;
