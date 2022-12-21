type func = (a: string, b: string) => boolean;
const canConstruct: func = (strA, strB) => {
  let data: string[] = strB.split("");

  console.log(data);
  let replacedStr = "";
  for (let idx = 0; idx < strA.length; idx++) {
    console.log(strA.charAt(idx));
    let tmpChar = strA.charAt(idx);
    for (let idxB = 0; idxB < data.length; idxB++) {
      const elm = data[idxB];
      if (tmpChar === elm) {
        data.splice(idxB, 1);
        replacedStr += tmpChar;
        break;
      }
    }
  }
  console.log(replacedStr);
  console.log(strA);
  if (replacedStr === strA) {
    return true;
  } else {
    return false;
  }
};
export default canConstruct;
