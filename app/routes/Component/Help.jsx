import { Page, Card, Text, InlineGrid,BlockStack,Button, Box } from "@shopify/polaris";
import {
  ComposeIcon,ChatReferralIcon,FileIcon
} from '@shopify/polaris-icons';
import React from "react";

function Help() {
  return (
    <Page>
    <Card>
    <Box paddingBlockEnd="400"><Text variant="headingLg" as="h5">Need any Help?</Text></Box>
      <InlineGrid gap="400" columns={3} >
      <BlockStack gap="100">
      <Box as="div"><Button variant="plain" icon={ComposeIcon}>Get Email Support </Button></Box>
      <Text>Email us and we'll get back to you as soon as possible.</Text>
      </BlockStack>
      <BlockStack gap="100">
      <Box as="div"><Button variant="plain" icon={ChatReferralIcon}> Start Live Chat</Button></Box>
      <Text>Talk to us directly via live chat to get help with your question</Text>
      </BlockStack>
          <BlockStack gap="100">
          <Box as="div"><Button variant="plain" icon={FileIcon}> FAQ</Button></Box>
      <Text>Find a solution for your problem with documents and tutorials.</Text>
      </BlockStack>
      </InlineGrid>
      </Card>

    </Page>
  );
}

export default Help;
