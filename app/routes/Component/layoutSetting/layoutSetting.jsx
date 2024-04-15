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
  RangeSlider,
  Link,
  Checkbox,
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
  //checkbox
  const [checked, setChecked] = useState({
    RatingText: true,
    ReviewersPhoto: true,
    ReviewersName: true,
    ReviewsLink: false,
    ReviewButton: false,
    Card: false,
    HyperLink: false,
    AutoPlay: false,
    AISummary: false,
    ReviewsPhoto: false,
  });
  const handleChange = useCallback((section) => {
    setChecked((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  }, []);
  //Select
  const [selected, setSelected] = useState("one");
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = [
    { label: "Month Year", value: "one" },
    { label: "Year Month Day", value: "two" },
    { label: "Month Day Year", value: "three" },
    { label: "Hide", value: "hide" },
  ];
  const [text, setText] = useState("left");
  const handletextChange = useCallback((value) => setText(value), []);
  const texts = [
    { label: "Left", value: "left" },
    { label: "Center", value: "center" },
    { label: "Right", value: "right" },
  ];
  const [theme, setTheme] = useState("light");
  const handlethemeChange = useCallback((value) => setTheme(value), []);
  const themes = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Transparent Background", value: "transparentbackground" },
    { label: "Custom", value: "custom" },
  ];
  //radio
  const [rangeValue, setRangeValue] = useState(10);

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [],
  );
  const [rangeauto, setRangeauto] = useState(3);

  const handleRangeautoChange = useCallback((value) => setRangeauto(value), []);
  const [rangeViwer, setRangeViwer] = useState(10);

  const handleRangeviwerChange = useCallback(
    (value) => setRangeViwer(value),
    [],
  );
  return (
    <main>
      <Box padding="600">
        {" "}
        <Homeslider checked={checked} dateFormat={selected} text={text} theme={theme} />
      </Box>
      <Box>
        <InlineGrid columns="1fr auto">
          <Text variant="headingXl" as="h4">
            Widgets Settings
          </Text>
          <Box>
            <InlineStack gap="600">
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
        <InlineGrid columns={2} gap="2000">
          <BlockStack gap="600">
            <Box as="div" id="select">
              <Select
                label="Select Date format"
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
            </Box>
            <Box as="div" id="select">
              <Select
                label="Align"
                options={texts}
                onChange={handletextChange}
                value={text}
              />
            </Box>
            <Box as="div" id="select">
              <Select
                label="Theme"
                options={themes}
                onChange={handlethemeChange}
                value={theme}
              />
            </Box>
            <RangeSlider
              min={1}
              max={5}
              value={rangeauto}
              onChange={handleRangeautoChange}
              output
              prefix={<p>Auto Play Timing (second)</p>}
              suffix={
                <p
                  style={{
                    minWidth: "24px",
                    textAlign: "right",
                  }}
                >
                  {rangeauto}
                </p>
              }
            />
            <RangeSlider
              min={0}
              max={100}
              value={rangeValue}
              onChange={handleRangeSliderChange}
              output
              prefix={<p>Card Border Radius</p>}
              suffix={
                <p
                  style={{
                    minWidth: "24px",
                    textAlign: "right",
                  }}
                >
                  {rangeValue}
                </p>
              }
            />
            <Box paddingBlock="200">
              <Divider borderColor="border-inverse" />
            </Box>
            <Text variant="bodyMd" as="p">
              Please upgrade to <Link url="">Platinum Planto </Link> unlock
              disabled features.
            </Text>
            <RangeSlider
              output
              min={0}
              max={100}
              value={rangeViwer}
              onChange={handleRangeviwerChange}
              prefix={<p>Number of Reviews to display</p>}
              suffix={
                <p
                  style={{
                    minWidth: "24px",
                    textAlign: "right",
                  }}
                >
                  {rangeViwer}
                </p>
              }
            />
          </BlockStack>
          <BlockStack gap="600">
            <Checkbox
              label="Hide Rating Text"
              checked={checked.RatingText}
              onChange={() => handleChange("RatingText")}
            />
            <Checkbox
              label="Show Reviewers Photo"
              checked={checked.ReviewersPhoto}
              onChange={() => handleChange("ReviewersPhoto")}
            />
            <Checkbox
              label="Show Reviewers Name"
              checked={checked.ReviewersName}
              onChange={() => handleChange("ReviewersName")}
            />
            <Checkbox
              label="
      Show View All Reviews Link"
              checked={checked.ReviewsLink}
              onChange={() => handleChange("ReviewsLink")}
            />
            <Checkbox
              label="  Show Write a Review Button"
              checked={checked.ReviewButton}
              onChange={() => handleChange("ReviewButton")}
            />
            <Checkbox
              label="Enable Animation on Card"
              checked={checked.Card}
              onChange={() => handleChange("Card")}
            />
            <Checkbox
              label="Auto Play"
              checked={checked.AutoPlay}
              onChange={() => handleChange("Autoplay")}
            />
            <Checkbox
              label=" Enable Hyper Link"
              checked={checked.HyperLink}
              onChange={() => handleChange("HyperLink")}
            />

            <Divider borderColor="border-inverse" />
            <Checkbox
              label="Display AI Summary"
              checked={checked.AISummary}
              onChange={() => handleChange("AISummary")}
            />
            <Checkbox
              label="Show Reviews Photo"
              checked={checked.ReviewsPhoto}
              onChange={() => handleChange("ReviewsPhoto")}
            />
          </BlockStack>
        </InlineGrid>
      </Box>
    </main>
  );
}
export default LayoutSetting;
const Slider = ({ checked, dateFormat,text, theme }) => {
  const reviews = review.data;

  return (
    <div className="swiper-section" >
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
            <GoogleSwiper
              data={item}
              checked={checked}
              dateFormat={dateFormat}
              text={text}
              theme={theme}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next swiper1-next "></div>

      <div className=" swiper-pagination swiper1-page "></div>
    </div>
  );
};

function GoogleSwiper({ data, checked, dateFormat,text,theme }) {
  const { RatingText, ReviewersPhoto, ReviewersName, ReviewButton } = checked;
  console.log(dateFormat);
  const styles = theme === "dark" ? { background: "black", color: "white" } : {};
  let alignmentStyle;
  switch (text) {
    case "center":
      alignmentStyle = "center";
      break;
    case "right":
      alignmentStyle = "right";
      break;
    default:
      alignmentStyle = "left";
  }

  return (
    <div id="review-swiper" style={styles}>
      <div id="review-card">
        <div style={{ display: "flex", gap: "5px" }}>
          {ReviewersPhoto && <img src={data.imageLink} alt="Review" />}
          <div>
            {ReviewersName && <Text>{data.name}</Text>}
            {dateFormat !== "hide" && <Text>{data.date}</Text>}
          </div>
        </div>
        <div>
          <FcGoogle size={25} />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        {ReviewButton &&
          [...Array(5)].map((_, index) => (
            <FaStar key={index} size={20} style={{ color: "gold" }} />
          ))}
      </div>
      {!RatingText && <Box as="div" style={{ textAlign:alignmentStyle }}><Text>{data.description}</Text></Box> }
    </div>
  );
}
function Homeslider({ checked, dateFormat,text,theme }) {
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
          <Slider checked={checked} dateFormat={dateFormat} text={text} theme={theme} />
        </div>
      </div>
    </div>
  );
}
