import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  t: TFunction;
}

const MiddleBlock = ({
  title,
  content,
  point1,
  point2,
  point3,
  point4,
  t,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </Col>
            <ul>
              <li>
                <p>{t(point1)}</p>
              </li>
              <li>
                <p>{t(point2)}</p>
              </li>
              <li>
                <p>{t(point3)}</p>
              </li>
              <li>
                <p>{t(point4)}</p>
              </li>
            </ul>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
