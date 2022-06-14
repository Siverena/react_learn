import { ChangeName, ToggleProfile } from "./types";

export const TOGGLE_PROFILE = "PROFILE::TOGGLE_PROFILE";
export const CHAHGE_NAME = "PROFILE::CHAHGE_NAME";

export const toggleProfile = ():ToggleProfile =>({
    type: TOGGLE_PROFILE,
})

export const changeName = (name:string): ChangeName =>({
    type: CHAHGE_NAME,
    payload:name,
})