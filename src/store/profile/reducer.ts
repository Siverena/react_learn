// import { Reducer } from 'redux';
// import { CHAHGE_NAME, TOGGLE_PROFILE } from './action';
// import { ProfileActions } from './types';

// export interface ProfileState {
//   name: string;
//   visible: boolean;
// }

// const initialState: ProfileState = {
//   name: 'gb',
//   visible: true,
// };

// export const profileReducer: Reducer<ProfileState, ProfileActions> = (
//   state = initialState,
//   action
// ) => {
//   switch (action.type) {
//     case TOGGLE_PROFILE: {
//       return {
//         ...state,
//         visible: !state.visible,
//       };
//     }
//     case CHAHGE_NAME: {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
