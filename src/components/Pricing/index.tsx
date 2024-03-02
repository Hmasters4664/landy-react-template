import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextPrice,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
  Content,
  ButtonWrapper,
  MiddleBlockSection,
} from "./styles";
import { Button } from "../../common/Button";
import { withTranslation, TFunction } from "react-i18next";
import { Card, Row } from "antd";

interface PriceBlockProps {
  title: string;
  price: string;
  users: string;
  features: string;
  features2: string;
  features3: string;
  features4: string;
  id: string;
  t: TFunction;
}
export const PriceBlock = ({
  title,
  price,
  users,
  features,
  features2,
  features3,
  features4,
  id,
  t,
}: PriceBlockProps) => {
  return (
    <MiddleBlockSection id={id}>
      <Card
        hoverable
        style={{ width: 500, border: "2px solid black" }}
        bordered={true}
      >
        <CardTextTitle>{t(title)}</CardTextTitle>
        <CardTextPrice>{t(price)}</CardTextPrice>
        <hr
          style={{
            background: "#18216d",
            color: "#18216d",
            borderColor: "#18216d",
            height: "0.5px",
            width: "100%",
          }}
        />
        <ul>
          <li>
            <Content>{t(users)}</Content>
          </li>
          <li>
            <Content>{t(features)}</Content>
          </li>
          <li>
            <Content>{t(features2)}</Content>
          </li>
          <li>
            <Content>{t(features3)}</Content>
          </li>
        </ul>

        <ButtonWrapper>
          <a href="http://app.bzeeb.net/register">
            <Button>{t("Get Started")}</Button>
          </a>
        </ButtonWrapper>
      </Card>
    </MiddleBlockSection>
  );
};

export default withTranslation()(PriceBlock);
