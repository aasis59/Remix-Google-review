import React, { useState, useCallback } from "react";

import {
  BlockStack,
  Box,
  Button,
  Card,
  Form,
  FormLayout,
  Icon,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import { QuestionCircleIcon, EmailIcon} from "@shopify/polaris-icons";

const ContactUs = () => {
  const [data, setData] = useState({
    issue: false,
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });


  const handleEmailChange = useCallback((value) => {
    setData((prev) => ({ ...prev, email: value }));
    validateEmail(value);
  }, []);

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailError = "";
    if (!value.trim()) {
      emailError = "Email is required.";
    } else if (!emailPattern.test(value)) {
      emailError = "Invalid email format.";
    }

    setErrors((prev) => ({ ...prev, email: emailError }));
  };

  const handleSubjectChange = useCallback((value) => {
    setData((prev) => ({ ...prev, subject: value }));
    validateSubject(value);
  }, []);

  const validateSubject = (value) => {
    let subjectError = "";
    if (!value.trim()) {
      subjectError = "Subject must be provided.";
    }
    setErrors((prev) => ({ ...prev, subject: subjectError }));
  };



  const handleMessageChange = useCallback((value) => {
    setData((prev) => ({ ...prev, message: value }));
    validateMessage(value);
  }, []);

  const validateMessage = (value) => {
    let messageError = "";
    if (!value.trim()) {
      messageError = "Message must be provided.";
    } else if (value.length < 20) {
      messageError = "Message should be at least 20 characters long";
    }
    setErrors((prev) => ({ ...prev, message: messageError }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(data.email);
    validateMessage(data.message);
    validateSubject(data.subject);
    if (errors.email || errors.subject || errors.message) return;
    if (!data.email || !data.message || !data.subject) return;

  };

  return (
    <Page>
      <BlockStack gap={"400"}>
        <Card background="bg-surface" padding={"500"}>
          <BlockStack gap={"200"}>
            <Text variant="headingLg">Contact Support</Text>
            <Text variant="bodyLg">
              Our team is dedicated to responding to your inquiries within 1
              business day.{" "}

            </Text>
          </BlockStack>
        </Card>
        <Card background="bg-surface" padding={"500"}>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                label="Email"
                name="email"
                prefix={<Icon source={EmailIcon} color="base" />}
                value={data.email}
                onChange={handleEmailChange}
                type="email"
                error={errors?.email}
              />
              {errors.email && <Text color="critical">{errors.email}</Text>}
              <TextField
                label="Subject"
                name="subject"
                prefix={<Icon source={QuestionCircleIcon} color="base" />}
                value={data.subject}
                onChange={handleSubjectChange}
                error={errors?.subject}
              />
              {errors.subject && <Text color="critical">{errors.subject}</Text>}

              <TextField
                label="Message"
                value={data.message}
                onChange={handleMessageChange}
                multiline={5}
                autoComplete="off"
                error={errors?.message}
              />
              {errors.message && <Text color="critical">{errors.message}</Text>}
              <Box as="div" id="contactUs--send_Btn">
                <Button submit size="large" tone="success" variant="primary">
                  Submit Request
                </Button>
              </Box>
            </FormLayout>
          </Form>
        </Card>
      </BlockStack>
    </Page>
  );
};

export default ContactUs;
