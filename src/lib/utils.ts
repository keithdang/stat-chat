export const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

export const convertToSecondsFromDateStarted = (dateStarted: string, time: number) => {
    let seconds = dateStarted ? Math.floor((Date.now() - new Date(dateStarted).getTime()) / 1000): 0;
    seconds += time;
    return seconds;
}