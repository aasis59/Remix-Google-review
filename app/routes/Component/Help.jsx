import { Page, Card, Text, InlineGrid,BlockStack,Button, Box, Icon } from "@shopify/polaris";
import {
  ComposeIcon
} from '@shopify/polaris-icons';
import React from "react";

function Help() {
  return (
    <Page>
    <Card>
      <InlineGrid gap="400" columns={3} >


      <BlockStack gap="100">
      <Text variant="headingLg" as="h5">Need any Help?</Text>
      <Box as="div"><Button variant="plain" icon={ComposeIcon}> Need Email Support</Button></Box>

      <Text>Email us and we'll get back to you as soon as possible.</Text>
      </BlockStack>
      <BlockStack gap="100">
      <Text variant="headingMd" as="h6">Need any Help?</Text>
      <Text>3</Text>
      <Text>3</Text>
      </BlockStack>
          <BlockStack gap="100">
      <Text variant="headingMd" as="h6">Need any Help?</Text>
      <Text>3</Text>
      <Text>3</Text>
      </BlockStack>
      </InlineGrid>
      </Card>

    </Page>
  );
}

export default Help;
