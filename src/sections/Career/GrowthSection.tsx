import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";

import img_growing_together_1 from "../../assets/images/Career/img_growing_together_1.png";
import img_growing_together_2 from "../../assets/images/Career/img_growing_together_2.png";
import img_growing_together_3 from "../../assets/images/Career/img_growing_together_3.png";

const ImageList = styled.div`
  display: flex;
  gap: 16px;
`;

const GrowthImage = styled.img`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

const ContainerStyled = styled(Container)`
  flex-direction: column;
`;

export default function GrowthSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <SubTitle>{t("HPG-53")}</SubTitle>
      <Description>{t("HPG-54")}</Description>
      <ImageList>
        <GrowthImage src={img_growing_together_1} />
        <GrowthImage src={img_growing_together_2} />
        <GrowthImage src={img_growing_together_3} />
      </ImageList>
    </ContainerStyled>
  );
}
