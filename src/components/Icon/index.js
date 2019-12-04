import React, { useState } from 'react';
import styled from 'styled-components';
import fa from '../../assets/fa-regular-400.woff';

const Container = styled.i`
  @font-face {
    font-family: "fa_font";
    src: url(${fa});
  }

  font-family: 'fa_font';
  font-size: 30px;

  &:before {
    content: "\\${props => props.unicode}";
    color: ${props => props.color};
    font-style: normal;
  }
`;

export default function Icon({ unicode }) {
  const [iconColor, setIconColor] = useState("#fff");
  const [clickCount, setClickCount] = useState(0);

  function clickHandler() {
    console.log("funfouuuuuu!");

    setClickCount(clickCount + 1);

    if (clickCount >= 3 && clickCount <= 10) {
      setIconColor("#ddd");
    } else if (clickCount >= 10) {
      setIconColor("#000");
    }
  }

  return (
    <>
      <Container 
        color={iconColor} 
        unicode={unicode} 
        onClick={clickHandler} 
      />
      <p>{clickCount}</p>
    </>
  )
}
