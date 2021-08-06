import React from 'react';
import { Button } from 'react-scroll';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWeapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';
const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWeapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Top LIne</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home" />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWeapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
