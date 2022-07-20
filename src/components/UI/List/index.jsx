import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import { convertMs, convertMsToSec, convertMsToMin, convertMsToFullMin, convertMsToFullHr } from "../../../utils/convertMs";

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("10px")}
`;
const ListTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
const TimeFormat = styled.div`
  display: flex;
  justify-content: space-evenly;
  &>span{
    width: 50px;
    display: flex;
    justify-content: center;
    color: var(--color-white);
    font-size: 12px;
  }
`;
const ListElement = styled.ol`
  width: 150px;
  display: flex;
  flex-flow: column;
  list-style: none;
  ${gap("10px")}
`;
const ListItem = styled.li`
  position: relative;
`;
const ListIndex = styled.div`
  position: absolute;
  right: 155px;
  bottom: 0;
  font-size: 16px;
  font-weight: 700;
  &>span{
    color: var(--color-blue);
  }
`;
const Time = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--color-blue);
  font-size: 16px;
  &>span{
    width: 50px;
    display: flex;
    justify-content: center;
    color: var(--color-white);
    font-size: 20px;
    font-weight: 500;
  }
`;

function List ({list, format}) {
  return(
    <Content>
      <ListTitle>Saved results</ListTitle>
      <TimeFormat>
        <span>{format === "hr:min:sec" ? "hr" : "min"}</span>
        <span>{format === "hr:min:sec" ? "min" : "sec"}</span>
        <span>{format === "hr:min:sec" ? "sec" : "ms"}</span>
      </TimeFormat>
      <ListElement>
        {
          list.map((value, index) => (
            <ListItem key={index}>
              <ListIndex><span>{index + 1}</span>.</ListIndex>
              <Time>
                <span>{format === "hr:min:sec" ? convertMsToFullHr(value) : convertMsToFullMin(value)}</span>
                :<span>{format === "hr:min:sec" ? convertMsToMin(value) : convertMsToSec(value)}</span>
                :<span>{format === "hr:min:sec" ? convertMsToSec(value) : convertMs(value)}</span>
              </Time>
            </ListItem>
          ))
        }
      </ListElement>
    </Content>
  );
}

export default List;