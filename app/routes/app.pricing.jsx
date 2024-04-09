import { Box, Card, Page, Text } from "@shopify/polaris";
import Desktop from "./Component/pricing_desktop";

export default function Pricing() {
  return (
    <Page>
      <Card>
        <Box padding="400">
          <Text variant="headingXl" as="h4">
            Pricing Plan
          </Text>
          <Box as="div" paddingBlock="200">
            <Text as="p" variant="bodyMd">
              A Pricing plan is a structured arrangement that outlines how a
              business charges customers for its services. It includes details
              like price, features and more to ensure transparent and efficient
              Pricing processes.
            </Text>
          </Box>
        </Box>
      </Card>
      <Desktop/>
    </Page>
  );
}
