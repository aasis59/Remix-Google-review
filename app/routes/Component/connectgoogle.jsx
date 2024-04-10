import {
  Thumbnail,
  Button,
  Card,
  InlineGrid,
  Text,
  Box,
  InlineStack,Divider
} from "@shopify/polaris";

import { review } from "../../constant/review";
import { useNavigation } from "@remix-run/react";
import Homeslider from "./slider/homeSlider";


function ConnectGoogle() {
  const image = review.company[0].photo;
  const title = review.company[0].title;
  const location = review.company[0].location;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main>
      <Card>
        <InlineGrid columns="1fr auto">
          <InlineStack gap="200">
            <Thumbnail source={image} alt="image" size="medium" />
            <Box padding="200">
              <Text> {title}</Text>
              <Text>{location}</Text>
            </Box>
          </InlineStack>
          <Box>
            <Button
              variant="primary"
              tone="critical"
              url="/app"
              loading={isLoading}
            >
              Disconnect
            </Button>
          </Box>
        </InlineGrid>
      </Card>
      <Box padding="400">
      <InlineGrid columns="1fr auto">
      <Box>

      <Text variant="headingMd" as="h6"> Refresh reviews</Text>
        <Text>You can refresh your reviews once every 24 hours</Text>
      </Box>

        <Button
          variant="secondary"
        >
          Refresh now
        </Button>
      </InlineGrid>

      </Box>
      <Box padding='200'>
      <Divider borderColor="border-inverse" />
      </Box>

<Homeslider/>

    </main>
  );
}

export default ConnectGoogle;
