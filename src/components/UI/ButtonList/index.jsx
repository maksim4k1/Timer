import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const List = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  ${gap("20px", "15px")}
`;

function ButtonList (props) {
  return(
    <List {...props}>
      {
        props.children
      }
    </List>
  );
}

export default ButtonList;