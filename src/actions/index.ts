import { Action } from "redux";
import { START, STOP } from "./types";

export type StartAction = Action<typeof START>;
export type StopAction = Action<typeof STOP>;

export const start = (): StartAction => ({
    type: START,
});
  
export const stop = (): StopAction => ({
    type: STOP,
});