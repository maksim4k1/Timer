function mapNumTo2SymbolStr(num){
  if(num >= 10){
    return num;
  } else{
    return "0" + num;
  }
}

export default mapNumTo2SymbolStr;