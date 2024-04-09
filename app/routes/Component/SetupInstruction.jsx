import {
    Page,
    Collapsible,
    Icon,
    Button,
    Text,
    List,
    Link,
    Divider
  } from "@shopify/polaris";
  import { useState, useCallback } from "react";
  import { ChevronDownIcon } from "@shopify/polaris-icons";

  export default function Home() {
    const [open, setOpen] = useState(false);
    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    return (
      <Page >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px"
            }}
          >
            {" "}
            <Text variant="headingXl" as="h4">
              Setup Instructions
            </Text>
            <Button
              onClick={handleToggle}
              ariaExpanded={open}
              ariaControls="basic-collapsible"
              variant="monochromePlain"
            >
              <Icon source={ChevronDownIcon}/>
            </Button>
          </div>
          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
            expandOnPrint
          >
            <List type="number"
            gap="loose">

              <List.Item>

                {" "}
                Start by entering your Google Business Profile name,
                location,Google Map URL or Google Place ID in the search bar. The
                list of results based on your search will be displayed. You can
                use{" "}
                <Link
                  url="https://www.google.com/maps/@27.9308066,6.7369589,3z?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  removeUnderline
                >
                  Google Maps{" "}
                </Link>{" "}
                to find your Business.
              </List.Item>


              <List.Item>
                Choose your desired account from the list and connect it. Once
                connected, you will see a default preview of the reviews.

              </List.Item>


              <List.Item>
                To customize the layout and settings, navigate to the 'Layout
                Template' and 'Layout Settings' sections.
              </List.Item>


              <List.Item>
                If you want to add reviews to your store, go to the 'Installation'
                tab and click on the setup button. This will take you to the
                customization page.
              </List.Item>
              <List.Item>
                On the customization page, click on the 'Add' section and select
                'Google Review' from the options. You will be able to preview the
                changes. Don't forget to save the changes to publish them on your
                store.
              </List.Item>

            </List>
          </Collapsible>
          <Divider borderColor="border-inverse"/>
        </div>
      </Page>
    );
  }
