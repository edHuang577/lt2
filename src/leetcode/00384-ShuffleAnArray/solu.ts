export default class Solution {
  private oriArr: number[];
  constructor(nums: number[]) {
    this.oriArr = nums;
  }

  private rnd(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  reset(): number[] {
    return this.oriArr;
  }

  shuffle(): number[] {
    let result: number[] = [];
    let tmpArr: number[];
    tmpArr = this.oriArr.slice();
    while (tmpArr.length > 0) {
      let idx = this.rnd(0, tmpArr.length - 1);
      result.push(tmpArr[idx]);
      tmpArr.splice(idx, 1);
    }
    return result;
  }
}
