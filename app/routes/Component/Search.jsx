import {
  LegacyCard,
  LegacyTabs,
  Page,
  TextField,
  Icon,
  Box,
  Button,
  Grid, Text,
  InlineStack
} from "@shopify/polaris";
import { useNavigation } from "@remix-run/react";
import { useState, useCallback } from "react";
import { SearchIcon } from "@shopify/polaris-icons";
import { FaStar } from "react-icons/fa";
import { review } from "../../constant/review";
export default function Search() {
  const [selected, setSelected] = useState(0);


  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: "all-customers-1",
      content: "Connect Google Platform",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-1",
    },
  ];


    const navigation = useNavigation();
   const isLoading = navigation.state === 'loading'


  return (
    <Page>
      <LegacyCard>
        <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <Box paddingBlockStart="200" paddingInline="400">
        <Text variant="headingSm" as="h6">Google Business Profile Name, Location, Google Map URL or Google Place ID</Text>
        </Box>

          <Box padding="400">

            <Grid
              columns={{ xs: 11, sm: 11, md: 11, lg: 11, xl: 11}}
              areas={{
                xs: ["product", "sales"],
                sm: ["product product product product product product product product product product sales "],
                md: ["product product product product product product product product product product sales "],
                lg: ["product product product product product product product product product product sales "],
                xl: ["product product product product product product product product product product sales "],
              }}
            >
              <Grid.Cell area="product">
                <TextField
                  name="email"
                  prefix={<Icon source={SearchIcon} color="base" />}

                  placeholder="Google Bussiness Profile Name, location, GoogleMap URL or Google Place ID"
                />
              </Grid.Cell>
              <Grid.Cell area="sales">
                <Button variant="primary" tone="success" >
                  {" "}
                  Search
                </Button>
              </Grid.Cell>
            </Grid>

            {review.company.map((company) => (
                <Box as="div" key={company.id} style={{ width:'400px' ,margin:'20px',padding:'20px',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <img src={company.photo} alt="Company" style={{ width:'350px',objectFit:'cover',   }} />
                  <Text variant="headingLg" as="h5" >{company.title}</Text>
                  <InlineStack >
                  <Text variant="headingXs" as="h6">{company.rate}</Text>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} style={{ color: 'gold' }} />
                  ))}

                </InlineStack>


                  <Text variant="headingXs" as="h6">Person:{company.person}</Text>

                  <Text variant="headingXs" as="h6">Location:{company.location}</Text>
                  <Button size="large" url="/app/widges" loading={isLoading} >Connect</Button>
                </Box>
              ))}


          </Box>
        </LegacyTabs>
      </LegacyCard>
    </Page>
  );
}
