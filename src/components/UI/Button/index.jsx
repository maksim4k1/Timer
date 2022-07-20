import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 100px;
  height: 40px;
  color: var(--color-black);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: var(--color-white);
  border-radius: 10px;
  box-shadow: 0 4px 6px var(--color-black);
  transition: transform 0.5s, box-shadow 0.5s;
  @media screen and (min-width: 720px){
    &:hover{
      transform: translateY(-3px);
      box-shadow: 0 6px 6px var(--color-black);
    }
  }
`;

function Button (props) {
  return(
    <ButtonElement {...props}>
      {
        props.children
      }
    </ButtonElement>
  );
}

export default Button;