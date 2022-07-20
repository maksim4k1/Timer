import mapNumTo2SymbolStr from "./mapNumTo2SymbolStr";

export function convertMs(ms){
  const val = mapNumTo2SymbolStr(Math.floor(ms / 10) % 100);
  return val;
}
export function convertMsToSec(ms){
  const sec = Math.floor(ms / 1000) % 60;
  const val = mapNumTo2SymbolStr(sec);
  return val;
}
export function convertMsToMin(ms){
  const min = Math.floor(Math.floor(ms / 1000) / 60) % 60;
  const val = mapNumTo2SymbolStr(min);
  return val;
}
export function convertMsToFullMin(ms){
  const min = Math.floor(Math.floor(ms / 1000) / 60);
  const val = mapNumTo2SymbolStr(min);
  return val;
}
export function convertMsToFullHr(ms){
  const hr = Math.floor(Math.floor(Math.floor(ms / 1000) / 60) / 60);
  const val = mapNumTo2SymbolStr(hr);
  return val;
}