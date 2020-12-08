import React, { useRef, useState } from "react";
import styled from "styled-components";

import colors from "../layouts/colors";

import img_home_career from "../assets/images/Home/img_home_career.png";

const Photo = styled.div`
  width: 336px;
  height: 229px;

  grid-row: 1;

  background-image: url(${img_home_career});
  background-repeat: no-repeat;

  opacity: 0.5;
  transition: opacity 1s;
`;

const Carousel = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;
  height: 413px;

  padding-left: calc((100% - 1040px) / 2);
  overflow: hidden;
`;

const CarouselItems = styled.ul`
  display: grid;
  list-style: none;
  grid-gap: 16px;

  position: relative;
  right: 0;
  left: 0;

  transition: left 1s;
`;

const BackButton = styled.button`
  height: 229px;
  width: 168px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  left: 0;

  position: absolute;
  -webkit-tap-highlight-color: transparent;
`;

const NextButton = styled.button`
  height: 229px;
  width: 168px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0;

  position: absolute;
  right: 0;
  top: 0;

  -webkit-tap-highlight-color: transparent;
`;

function GetAllImages(isMobile: boolean) {
  let photos = [];
  if (isMobile) {
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 3; k++) {
        photos.push(
          <li
            key={"photo=" + (i * 3 + k)}
            id={"photo=" + (i * 3 + k)}
            style={{ display: "grid", gridRow: 1, gridGap: "16px" }}
          >
            <Photo
              style={{
                backgroundPosition: `${k * -336}px ${i * -229}px`,
                opacity: `${k === 0 && i === 0 && "1"}`,
              }}
            />
          </li>
        );
      }
    }
  } else {
    for (let i = 0; i < 5; i++) {
      photos.push(
        <li
          key={"row=" + i}
          id={"row=" + i}
          style={{ display: "grid", gridRow: 1, gridGap: "16px" }}
        >
          <Photo
            style={{
              backgroundPosition: `${0 * -336}px ${i * -229}px`,
              opacity: `${i === 0 && "1"}`,
            }}
          />

          <Photo
            style={{
              backgroundPosition: `${1 * -336}px ${i * -229}px`,
              opacity: `${i === 0 && "1"}`,
            }}
          />

          <Photo
            style={{
              backgroundPosition: `${2 * -336}px ${i * -229}px`,
              opacity: `${i === 0 && "1"}`,
            }}
          />
        </li>
      );
    }
  }

  return photos;
}

export default function PhotoCarousel() {
  const carousel = useRef<HTMLUListElement>(null);
  const [currentXPosition, setCurrentXPosition] = useState<number>(0);
  const [rowPosition, setRowPosition] = useState<number>(0);

  let isMobile = false;
  if (window.screen.width <= 480) isMobile = true;

  const handleBackClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (carousel.current) {
      if (currentXPosition === 0) {
        return;
      }

      if (isMobile) {
        carousel.current.style.left = currentXPosition + 350 + "px";
        setCurrentXPosition(currentXPosition + 350);
        setRowPosition(rowPosition - 1);

        let pastPhoto = document.getElementById(
          "photo=" + rowPosition
        ) as HTMLLIElement;

        let newRowIndex = rowPosition - 1;

        let newPhoto = document.getElementById(
          "photo=" + newRowIndex
        ) as HTMLLIElement;

        const photoItem = pastPhoto.children[0] as HTMLDivElement;
        photoItem.style.opacity = "0.5";

        const newPhotoItem = newPhoto.children[0] as HTMLDivElement;
        newPhotoItem.style.opacity = "1";
      } else {
        carousel.current.style.left = currentXPosition + 1055 + "px";
        setCurrentXPosition(currentXPosition + 1055);
        setRowPosition(rowPosition - 1);

        let pastPhotos = document.getElementById(
          "row=" + rowPosition
        ) as HTMLLIElement;

        let newRowIndex = rowPosition - 1;

        let newPhotos = document.getElementById(
          "row=" + newRowIndex
        ) as HTMLLIElement;

        for (let j = 0; j < 3; j++) {
          const photoItem = pastPhotos.children[j] as HTMLDivElement;
          photoItem.style.opacity = "0.5";

          const newPhotoItem = newPhotos.children[j] as HTMLDivElement;
          newPhotoItem.style.opacity = "1";
        }
      }
    }
  };

  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (carousel.current) {
      if (
        (isMobile && rowPosition === 13) ||
        (!isMobile && rowPosition === 4)
      ) {
        return;
      }

      if (isMobile) {
        carousel.current.style.left = currentXPosition + -350 + "px";
        setCurrentXPosition(currentXPosition + -350);
        setRowPosition(rowPosition + 1);

        let newRowIndex = rowPosition + 1;

        let newPhoto = document.getElementById(
          "photo=" + newRowIndex
        ) as HTMLLIElement;

        const newPhotoItem = newPhoto.children[0] as HTMLDivElement;
        newPhotoItem.style.opacity = "1";
      } else {
        carousel.current.style.left = currentXPosition + -1055 + "px";
        setCurrentXPosition(currentXPosition + -1055);
        setRowPosition(rowPosition + 1);

        let pastPhotos = document.getElementById(
          "row=" + rowPosition
        ) as HTMLLIElement;

        let newRowIndex = rowPosition + 1;

        let newPhotos = document.getElementById(
          "row=" + newRowIndex
        ) as HTMLLIElement;

        for (let j = 0; j < 3; j++) {
          const photoItem = pastPhotos.children[j] as HTMLDivElement;
          photoItem.style.opacity = "0.5";

          const newPhotoItem = newPhotos.children[j] as HTMLDivElement;
          newPhotoItem.style.opacity = "1";
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: colors.black }}>
      <Carousel>
        <BackButton onClick={handleBackClick} />
        <div style={{ position: "relative" }}>
          <CarouselItems ref={carousel}>{GetAllImages(isMobile)}</CarouselItems>
          <NextButton onClick={handleNextClick} />
        </div>
      </Carousel>
    </div>
  );
}
