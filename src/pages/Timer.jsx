import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import ChangeIcon from "../assets/ChangeIcon";
import ButtonList from "../components/UI/ButtonList";
import Button from "../components/UI/Button";
import List from "../components/UI/List";
import { convertMs, convertMsToSec, convertMsToMin, convertMsToFullMin, convertMsToFullHr } from "../utils/convertMs";

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("30px")}
`;
const TimeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("5px")}
  margin: 0 0 70px;
`;
const Time = styled.div`
  font-size: 48px;
  font-weight: 500;
`;
const TimeFormat = styled.div`
  width: 205px;
  display: flex;
  justify-content: space-around;
  &>span{
    width: 30px;
    display: flex;
    justify-content: center;
  }
`;
const ChangeStopwatchFormatButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-blue);
  border-radius: 50%;
  box-shadow: 0 0 4px var(--color-black);
  transition: transform 0.7s ease;
  &>div{
    transition: transform 0.7s ease;
  }
  @media screen and (min-width: 720px){
    &:hover{
      &>div{
        transform: rotateZ(-135deg);
      }
    }
  }
`;
const ResetButton = styled(Button)`
  color: var(--color-white);
  background: var(--color-blue);
`;
const SaveButton = styled(Button)`
  width: 120px;
`;
const ClearButton = styled(ResetButton)`
  width: 120px;
  margin: -10px 0 0;
`;

function Timer () {
  const [stopwatchFormat, setStopwatchFormat] = useState("hr:min:sec");
  const [isPause, setIsPause] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [prevTimerValue, setPrevTimerValue] = useState(0);
  const [timer, setTimer] = useState(0);
  const [savedResults, setSavedResults] = useState([]);

  function changeFormat(){
    if(stopwatchFormat === "hr:min:sec"){
      setStopwatchFormat("min:sec:ms");
    } else{
      setStopwatchFormat("hr:min:sec");
    }
  }
  function pauseHandler(){
    if(isPause){
      setTimerStart(Date.now());
      setIsReset(false);
    }
    setIsPause(!isPause);
  }
  function resetHandler(){
    setIsReset(!isReset);
  }
  function saveHandler(){
    setSavedResults([...savedResults, timer]);
  }
  function clearHandler(){
    setSavedResults([]);
  }

  useEffect(() => {
    const interal = setInterval(() => {
      if(isReset){
        setIsPause(true);
        setTimerStart(0);
        setPrevTimerValue(0);
        setTimer(0);
      } else if(isPause){
        setTimerStart(0);
        setPrevTimerValue(timer);
      } else{
        setTimer(prevTimerValue + Date.now() - timerStart);
      }
      clearInterval(interal);
    }, 10);
  }, [isPause, setIsPause, isReset, setIsReset, timerStart, setTimerStart, prevTimerValue, setPrevTimerValue, timer, setTimer]);

  return(
    <Content>
      <TimeContainer>
        <Time>{
          stopwatchFormat === "hr:min:sec" ?
          `${convertMsToFullHr(timer)}:${convertMsToMin(timer)}:${convertMsToSec(timer)}` :
          `${convertMsToFullMin(timer)}:${convertMsToSec(timer)}:${convertMs(timer)}`
          }
        </Time>
        <TimeFormat>
          <span>{stopwatchFormat === "hr:min:sec" ? "hr" : "min"}</span>
          <span>{stopwatchFormat === "hr:min:sec" ? "min" : "sec"}</span>
          <span>{stopwatchFormat === "hr:min:sec" ? "sec" : "ms"}</span>
        </TimeFormat>
        <ChangeStopwatchFormatButton type="button" onClick={changeFormat} title="Change stopwatch format"><ChangeIcon/></ChangeStopwatchFormatButton>
      </TimeContainer>
      <ButtonList>
        <Button type="button" title={isPause ? "Start stopwatch" : "Stop stopwatch"} onClick={pauseHandler}>{isPause ? "start" : "pause"}</Button>
        <ResetButton type="button" title="Reset stopwatch" onClick={resetHandler}>reset</ResetButton>
        <SaveButton type="button" title="Save stopwatch result" onClick={saveHandler}>save</SaveButton>
      </ButtonList>
      {
        savedResults.length ?
        <>
          <List format={stopwatchFormat} list={savedResults}/>
          <ClearButton type="button" onClick={clearHandler}>clear</ClearButton>
        </> : ""
      }
    </Content>
  );
}

export default Timer;