import { Person } from "../interfaces/Person";

export const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

export const convertToSecondsFromDateStarted = (dateStarted: string, time: number) => {
    let seconds = dateStarted ? Math.floor((Date.now() - new Date(dateStarted).getTime()) / 1000): 0;
    seconds += time;
    return seconds;
}

export function randomRbga() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }
export function timeSort(p1: Person, p2: Person) {
  return p2.time - p1.time;
}