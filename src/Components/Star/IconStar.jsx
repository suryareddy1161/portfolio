import React from "react";
import styled from "styled-components";

const S = {};



S.svg = styled.svg`
  flex-shrink: 0;
`;

function IconStar(props) {
  return (
    <S.svg
      viewBox="0 0 1000 1000"
      width="1rem"
      height="1rem"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
      />
    </S.svg>
  );
}

export default IconStar;
