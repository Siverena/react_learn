import { CHAHGE_NAME, TOGGLE_PROFILE } from './action';

export type ProfileActions = ToggleProfile | ChangeName;

export interface ToggleProfile {
  type: typeof TOGGLE_PROFILE;
}

export interface ChangeName {
  type: typeof CHAHGE_NAME;
  payload: string;
}
