import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import PriceContent from "../../content/PriceContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const PriceBlock = lazy(() => import("../../components/Pricing"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="whiteCircleBigger.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        point1={MiddleBlockContent.point1}
        point2={MiddleBlockContent.point2}
        point3={MiddleBlockContent.point3}
        point4={MiddleBlockContent.point4}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="desktop_white.png"
        id="features"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="show.png"
        id="mission"
      />
      <PriceBlock
        title={PriceContent.title}
        price={PriceContent.price}
        users={PriceContent.users}
        features={PriceContent.features}
        features2={PriceContent.features2}
        id="price"
      />
    </Container>
  );
};

export default Home;
