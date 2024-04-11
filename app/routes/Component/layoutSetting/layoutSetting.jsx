import {
  Text,
  Thumbnail,
  InlineStack,
  Box,
  InlineGrid,
  Button,
  Divider,
  ButtonGroup,
  BlockStack,
  Select,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { review } from "../../../constant/review";
function LayoutSetting() {
  const [selected, setSelected] = useState("today");

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];
  return (
    <main>
      <Box padding="600">
        {" "}
        <Homeslider />
      </Box>
      <Box>
        <InlineGrid columns="1fr auto">
          <Text variant="headingXl" as="h4">
            Widgets Settings
          </Text>
          <Box>
            <InlineStack gap="300">
              <Button variant="secondary" tone="success">
                Rest to default
              </Button>
              <Button variant="primary" tone="success">
                Update
              </Button>
            </InlineStack>
          </Box>
        </InlineGrid>
        <Divider borderColor="border-inverse" />
      </Box>
      <Box padding="400">
        <ButtonGroup gap="tight">
          <Button variant="primary" tone="success">
            Personalize
          </Button>
          <Button variant="secondary" tone="success">
            Filter
          </Button>
          <Button variant="secondary" tone="success">
            Custom CSS
          </Button>
          <Button variant="secondary" tone="success">
            Translations
          </Button>
        </ButtonGroup>
      </Box>
      <Box padding="200">
        <InlineGrid columns={2}>
          <BlockStack gap="200">
            <InlineStack gap="400">
             
            </InlineStack>
          </BlockStack>
        </InlineGrid>
      </Box>
    </main>
  );
}
export default LayoutSetting;
const Slider = () => {
  const reviews = review.data;
  return (
    <>
      <div className="swiper-section">
        <div className="swiper-button-prev swiper1-prev  "></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            clickable: true,
            nextEl: ".swiper1-next",
            prevEl: ".swiper1-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper1-page",
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((item, _index) => (
            <SwiperSlide key={`${item.id}`}>
              <GoogleSwiper data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next swiper1-next "></div>

        <div className=" swiper-pagination swiper1-page "></div>
      </div>
    </>
  );
};

function GoogleSwiper({ data }) {
  return (
    <div id="review-swiper">
      <div id="review-card">
        <div style={{ display: "flex", gap: "5px" }}>
          <img src={data.imageLink} alt="Review" />
          <div>
            <Text>{data.name}</Text>
            <Text>{data.date}</Text>
          </div>
        </div>
        <div>
          <FcGoogle size={25} />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} size={20} style={{ color: "gold" }} />
        ))}
      </div>
      <Text>{data.description}</Text>
    </div>
  );
}
function Homeslider() {
  const image = review.company[0].photo;
  const title = review.company[0].title;
  return (
    <div style={{ padding: "20px 0 0 0" }}>
      <Text variant="headingMd" as="h6">
        Preview
      </Text>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: " 0 0 30px 0px",
        }}
      >
        <div style={{ width: "30%" }}>
          {" "}
          <InlineStack gap="200">
            <Thumbnail source={image} alt="image" size="medium" />
            <Box padding="200">
              <Text> {title}</Text>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} style={{ color: "gold" }} />
              ))}
            </Box>
          </InlineStack>
        </div>
        <div style={{ width: "70%" }}>
          <Slider />
        </div>
      </div>
    </div>
  );
}
