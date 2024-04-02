import { Page, TextField, Text, Card } from "@shopify/polaris";
import { useState, useCallback } from "react";

function FAQs() {
  const [value, setValue] = useState("Search");

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  return (
    <main>
      <Page>
        <Card>
        <div style={{padding:"10px"}}>
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
          <TextField value={value} onChange={handleChange} autoComplete="off" />
        </div>
        </div>
        </Card> 
        <div style={{marginTop:'20px'}}>
          <Card>
            hello
          </Card>
        </div>
      </Page>
    </main>
  );
}

export default FAQs;
