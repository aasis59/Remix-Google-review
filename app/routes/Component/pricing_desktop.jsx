import {
  Page,
  InlineGrid,
  Box,
  BlockStack,
  Text,
  Icon,
  Divider,
  Button,
} from "@shopify/polaris";
import { CheckIcon, XIcon } from "@shopify/polaris-icons";

export default function Desktop() {
  const customStyle = {
    fontSize: "16px",
    lineHeight: "30px",
    fontWeight: "700",
    color: "#14522d",
    backgroundColor: "#ebff9e",
    padding: "6px",
    border: "1px solid rgb(133, 239, 172)",
    borderBottom: "2px solid rgb(133, 239, 172)",
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0 auto",
    width: "max-content",
  };
  return (
    <Page>
      <InlineGrid columns={3}>
        <Box>
          <BlockStack>
            <BlockStack
              as="div"
              align="end"
              style={{
                height: "120px",
                alignItems: "end",
              }}
            >
              <Box
                width="100%"
                style={{
                  background: "rgb(225, 225, 225)",
                  width: "100%",
                  padding: "10px",
                }}
              >
                <Text variant="headingLg" as="h5">
                  Features
                </Text>
              </Box>
            </BlockStack>
            <Divider borderColor="border" />

            <Placeholder height="85px" text="Sync Reviews " alg={true} />
            <Placeholder alg={true} text="Widget style options" />
            <Placeholder
              height="65px"
              alg={true}
              text="Live Chat & email support"
            />
            <Placeholder height="80px" alg={true} text="Review Filters" />
            <Placeholder alg={true} text="Widget Layout" />
            <Placeholder alg={true} text="Number of google reviews" />
            <Placeholder alg={true} text="Display Review Image" />
            <Placeholder alg={true} text="Display Specific number of Reviews" />
            <Placeholder alg={true} text="AI Generated Summary" />
            <Placeholder height="65px" alg={true} text="Review Request" />
          </BlockStack>
        </Box>

        <Box>
          <BlockStack>
            <BlockStack
              as="div"
              gap="400"
              style={{
                height: "120px",

                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                background: "white",
                borderRadius: "15px 15px 0 0",
              }}
            >
              <Text alignment="center" variant="headingMd" as="h6">
                Free
              </Text>
              <Text alignment="center" variant="headingMd" as="h6">
                $0/mo
              </Text>
            </BlockStack>
            <Divider borderColor="border" />
            <Placeholder
              height="85px"
              background="white"
              text="Manual Sync"
              par="You have to manually update the reviews from the dashboard once every 24 hour."
            />
            <Placeholder background="white" icon={true} />
            <Placeholder height="65px" background="white" icon={true} />
            <Placeholder height="80px" background="white" icon={false} />
            <Placeholder background="white" text="7" />
            <Placeholder background="white" text="Limited" />
            <Placeholder background="white" icon={false} />
            <Placeholder background="white" icon={false} />
            <Placeholder background="white" icon={false} />
            <Placeholder height="65px" background="white" icon={false} />
            <BlockStack
              style={{
                textAlign: "center",
                margin: "0 auto",
                width: "100%",
                justifyContent: "center",
                padding: "20px",
                background: "white",
                borderRadius: "0 0 15px 15px ",
              }}
            >
              <Button size="large">Active Plan</Button>
            </BlockStack>
          </BlockStack>
        </Box>

        <Box
          style={{
            border: "2px solid rgb(25, 135, 84)",
            borderRadius: "15px ",
          }}
        >
          <BlockStack>
            <BlockStack
              as="div"
              style={{
                height: "120px",

                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Text alignment="center" variant="headingMd" as="h6">
                Platinum
              </Text>
              <Box as="div" style={customStyle}>
                7-DAY FREE TRIAL
              </Box>
              <Text alignment="center" variant="headingMd" as="h6">
                $4.99/mo
              </Text>
            </BlockStack>
            <Divider borderColor="border" />

            <Placeholder
              height="85px"
              text="Auto-sync"
              par="Automatically updates the new reviews from the google server every 6 hour."
            />
            <Placeholder icon={true} />
            <Placeholder height="65px" icon={true} par="(High Priority)" />
            <Placeholder
              height="80px"
              icon={true}
              par="Filter reviews by rating, eliminate reviews by words, reviewer name and more."
            />
            <Placeholder text="20+" />
            <Placeholder text="Unlimited" />
            <Placeholder icon={true} />
            <Placeholder icon={true} />
            <Placeholder icon={true} />
            <Placeholder height="65px" icon={true} par="(100 request/month)" />
          </BlockStack>
          <BlockStack
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "100%",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Button tone="success" variant="primary" size="large">
              Upgrade plan
            </Button>
          </BlockStack>
        </Box>
      </InlineGrid>
    </Page>
  );
}

const Placeholder = ({
  height = "auto",
  background = "rgb(240, 240, 240)",
  text,
  par,
  icon,
  alg,
}) => {
  return (
    <>
      <div
        style={{
          background: background,
          padding: "14px var(--p-space-200)",
          height: height,
        }}
      >
        <BlockStack gap="50">
          {alg ? (
            <Text alignment="start" variant="headingMd" as="h6">
              {text}
            </Text>
          ) : (
            <Text alignment="center" variant="headingMd" as="h6">
              {text}
            </Text>
          )}
          {icon !== undefined &&
            (icon ? (
              <Icon source={CheckIcon} tone="success" />
            ) : (
              <Icon source={XIcon} tone="critical" />
            ))}
          {par && <Text alignment="center">{par}</Text>}
        </BlockStack>
      </div>
      <Divider borderColor="border" />
    </>
  );
};
