import React, { useState, useCallback } from "react";
import {
  Page,
  TextField,
  Text,
  Card,
  Divider,
  Button,
  Icon,
  Collapsible,
  List,
  Link,
} from "@shopify/polaris";
import { ChevronDownIcon } from "@shopify/polaris-icons";

function FAQs() {
  const [value, setValue] = useState("Search");
  const [openSections, setOpenSections] = useState({
    connectGoogle: false,
    googleSearch: false,
    widgetsSettings: false,
    widgetsSettingsTwo: false,
    widgetsSettingsThree: false,
    theme: false,
    themeTwo: false,
    themeThree: false,
    themeFour: false,
    support: false,
    supportTwo: false,
  });

  const handleToggle = useCallback((section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  }, []);

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <main>
      <Page>
        <Card padding="600">
          <div style={{ marginBottom: "10px" }}>
            <Text variant="headingLg" as="h5">
              Frequently Asked Questions
            </Text>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="bodyLg" as="p">
              Use our search feature to learn more about our app
            </Text>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <TextField
              value={value}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </Card>

        <div style={{ marginTop: "20px" }}>
          <Card padding="600">
            <div>
              <Text variant="headingLg" as="h5">
                Connect Google
              </Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 25px 0",
                }}
              >
                <Text variant="headingMd" as="h6">
                  How do I connect my reviews?
                </Text>
                <Button
                  onClick={() => handleToggle("connectGoogle")}
                  ariaExpanded={openSections.connectGoogle}
                  ariaControls="basic-collapsible"
                  variant="monochromePlain"
                >
                  <Icon source={ChevronDownIcon} />
                </Button>
              </div>
              <Collapsible
                open={openSections.connectGoogle}
                id="basic-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <List type="number">
                  <List.Item>
                    To connect your reviews to the Google Reviews Plus app, you
                    first need to search for your business listing in the Google
                    Reviews Plus dashboard. Select your business from the result
                    list and click “connect"
                  </List.Item>
                </List>
              </Collapsible>
              <Divider borderColor="border-inverse" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 25px 0",
                }}
              >
                <Text variant="headingMd" as="h6">
                  I can’t find my business listing
                </Text>
                <Button
                  onClick={() => handleToggle("googleSearch")}
                  ariaExpanded={openSections.googleSearch}
                  ariaControls="basic-collapsible"
                  variant="monochromePlain"
                >
                  <Icon source={ChevronDownIcon} />
                </Button>
              </div>
              <Collapsible
                open={openSections.googleSearch}
                id="basic-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <Text variant="headingXs" as="h6">
                  If you can not find your business listing after performing a
                  search in the dashboard, it is typically due to 2 reasons
                </Text>
                <List>
                  <List.Item>
                    You may need to double-check your search term. A typo error
                    will affect the search or your Google business listing may
                    have a different title than the search terms you are using.
                  </List.Item>
                  <List.Item>
                    Your Google business listing may not exist. In order to
                    create a Google business listing for your business, please
                    visit this link:{" "}
                    <a href="https://www.google.com/intl/en_ca/business/">
                      https://www.google.com/intl/en_ca/business/
                    </a>
                  </List.Item>
                </List>
              </Collapsible>
              <Divider borderColor="border-inverse" />
            </div>

            <div style={{ marginTop: "60px" }}>
              <div>
                <Text variant="headingLg" as="h5">
                  Widgets Settings
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: " 25px 0",
                  }}
                >
                  <Text variant="headingMd" as="h6">
                    How do I change the layout?
                  </Text>
                  <Button
                    onClick={() => handleToggle("widgetsSettings")}
                    ariaExpanded={openSections.widgetsSettings}
                    ariaControls="basic-collapsible"
                    variant="monochromePlain"
                  >
                    <Icon source={ChevronDownIcon} />
                  </Button>
                </div>
                <Collapsible
                  open={openSections.widgetsSettings}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Text>
                    Visit the dashboard for Google Reviews Plus. If you are
                    connected, select the Layout Template tabs. From there, you
                    will be able to change the layout.
                  </Text>
                </Collapsible>
                <Divider borderColor="border-inverse" />
              </div>
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: " 25px 0",
                  }}
                >
                  <Text variant="headingMd" as="h6">
                    How do I only show 5-star reviews?
                  </Text>
                  <Button
                    onClick={() => handleToggle("widgetsSettingsTwo")}
                    ariaExpanded={openSections.widgetsSettingsTwo}
                    ariaControls="basic-collapsible"
                    variant="monochromePlain"
                  >
                    <Icon source={ChevronDownIcon} />
                  </Button>
                </div>
                <Collapsible
                  open={openSections.widgetsSettingsTwo}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Text>
                    The reviews filter is only available on the Platinum package
                    of our application. Visit the dashboard for Google Reviews
                    Plus. If you are connected, select the Layout Settings tabs.
                    From there, you will be able to show reviews by changing in
                    Minimum Rating.
                  </Text>
                </Collapsible>
                <Divider borderColor="border-inverse" />
              </div>
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: " 25px 0",
                  }}
                >
                  <Text variant="headingMd" as="h6">
                    How do I change the colours?
                  </Text>
                  <Button
                    onClick={() => handleToggle("widgetsSettingsThree")}
                    ariaExpanded={openSections.widgetsSettingsThree}
                    ariaControls="basic-collapsible"
                    variant="monochromePlain"
                  >
                    <Icon source={ChevronDownIcon} />
                  </Button>
                </div>
                <Collapsible
                  open={openSections.widgetsSettingsThree}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Text>
                    {" "}
                    Visit the dashboard for Google Reviews Plus. if you are
                    connected then select Layout Settings tabs, From there you
                    will be able to show reviews by change in Display Mode
                  </Text>
                </Collapsible>
                <Divider borderColor="border-inverse" />
              </div>
            </div>
            <div style={{ marginTop: "60px" }}>
              <div>
                <Text variant="headingLg" as="h5">
                  Theme
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: " 25px 0",
                  }}
                >
                  <Text variant="headingMd" as="h6">
                    How do I see my reviews?
                  </Text>
                  <Button
                    onClick={() => handleToggle("theme")}
                    ariaExpanded={openSections.theme}
                    ariaControls="basic-collapsible"
                    variant="monochromePlain"
                  >
                    <Icon source={ChevronDownIcon} />
                  </Button>
                </div>
                <Collapsible
                  open={openSections.theme}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Text>
                    {" "}
                    To see your reviews on your website, launch the page
                    Customizer in Shopify. You can navigate there by selecting{" "}
                    <strong>
                      Online store {">"} Themes{">"}Customize.
                    </strong>
                  </Text>
                </Collapsible>
                <Divider borderColor="border-inverse" />
              </div>
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: " 25px 0",
                  }}
                >
                  <Text variant="headingMd" as="h6">
                    How do I reviews to my homepages?
                  </Text>
                  <Button
                    onClick={() => handleToggle("themeTwo")}
                    ariaExpanded={openSections.themeTwo}
                    ariaControls="basic-collapsible"
                    variant="monochromePlain"
                  >
                    <Icon source={ChevronDownIcon} />
                  </Button>
                </div>
                <Collapsible
                  open={openSections.themeTwo}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Text>
                    To see your reviews on your website, launch the page
                    Customizer in Shopify. You can navigate there by selecting
                    <strong>
                      Online store {">"} Themes {">"} Customize.
                    </strong>
                  </Text>
                  <Text>
                    {" "}
                    In the customer left sidebar, locate the apps section. Click
                    add block to search and select Google Reviews Plus by
                    Entangle. This will insert the Google Reviews Plus widget
                    onto your page. You can rearrange its place by moving the
                    left sidebar block further up or lower on your page.
                  </Text>
                </Collapsible>
                <Divider borderColor="border-inverse" />
              </div>
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: " 25px 0",
                  }}
                >
                  <Text variant="headingMd" as="h6">
                    How do I change the colours?
                  </Text>
                  <Button
                    onClick={() => handleToggle("themeThree")}
                    ariaExpanded={openSections.themeThree}
                    ariaControls="basic-collapsible"
                    variant="monochromePlain"
                  >
                    <Icon source={ChevronDownIcon} />
                  </Button>
                </div>
                <Collapsible
                  open={openSections.themeThree}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Text>
                    Visit the dashboard for Google Reviews Plus. if you are
                    connected then select Layout Settings tabs, From there you
                    will be able to show reviews by change in Display Mode
                  </Text>
                </Collapsible>
                <Divider borderColor="border-inverse" />
              </div>
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: " 25px 0",
                  }}
                >
                  <Text variant="headingMd" as="h6">
                    How do I add reviews to my theme that does not support app
                    block?
                  </Text>
                  <Button
                    onClick={() => handleToggle("themeFour")}
                    ariaExpanded={openSections.themeFour}
                    ariaControls="basic-collapsible"
                    variant="monochromePlain"
                  >
                    <Icon source={ChevronDownIcon} />
                  </Button>
                </div>
                <Collapsible
                  open={openSections.themeFour}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Text>
                    As stated by Shopify, App blocks can only be used with
                    Online Store 2.0 themes. If you are using an older version,
                    you might not be able to add app blocks to your theme.Thus,
                    if you are facing such problem then please visit following
                    link for the solution:
                    <Text>
                      <Link
                        url="https://entanglecommerce.com/cant-add-block/"
                        target="_blank"
                        rel="noreferrer"
                        removeUnderline
                      >
                        https://entanglecommerce.com/cant-add-block/
                      </Link>
                    </Text>
                  </Text>
                </Collapsible>
                <Divider borderColor="border-inverse" />
              </div>
            </div>
            <div style={{ marginTop: "60px" }}>
              <Text variant="headingLg" as="h5">
                Support
              </Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 25px 0",
                }}
              >
                <Text variant="headingMd" as="h6">
                  How do I contact support?
                </Text>
                <Button
                  onClick={() => handleToggle("support")}
                  ariaExpanded={openSections.support}
                  ariaControls="basic-collapsible"
                  variant="monochromePlain"
                >
                  <Icon source={ChevronDownIcon} />
                </Button>
              </div>
              <Collapsible
                open={openSections.support}
                id="basic-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <Text variant="headingXs" as="h6">
                  You can always contact our support by multiple ways:
                </Text>
                <List>
                  <List.Item>
                    For a live chat with our Support, click the "Chat" icon in
                    the right bottom of the app..
                  </List.Item>
                  <List.Item>
                    In the app's left sidebar navigation, select the "Contact"
                    option. We provide email help with a response time of one
                    business day.
                  </List.Item>
                  <List.Item>
                    Please send an email to support@entanglecommerce.com if you
                    want to contact us directly.
                  </List.Item>
                </List>
              </Collapsible>
              <Divider borderColor="border-inverse" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 25px 0",
                }}
              >
                <Text variant="headingMd" as="h6">
                  I need a feature that's not in the app
                </Text>
                <Button
                  onClick={() => handleToggle("supportTwo")}
                  ariaExpanded={openSections.supportTwo}
                  ariaControls="basic-collapsible"
                  variant="monochromePlain"
                >
                  <Icon source={ChevronDownIcon} />
                </Button>
              </div>
              <Collapsible
                open={openSections.supportTwo}
                id="basic-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <Text>
                  If you wish to request an additional feature on the Google
                  Review Plus app, visit the support portal by clicking on the
                  “Support” option in the app’s left sidebar navigation. You can
                  use our contact form to submit your request. Our team is
                  always happy to hear from you and your ideas of how to make
                  the app even better!
                </Text>
              </Collapsible>
              <Divider borderColor="border-inverse" />
            </div>
          </Card>
        </div>
      </Page>
    </main>
  );
}

export default FAQs;
