import { findAllByDisplayValue } from "@testing-library/react";


export const initialState = {
    user:null,
    playlists:[],
    spotify: null,
  discover_weekly: null,
  top_artists: null,
    playing: false,
    item:null,
    //Remove After finished developing...
    //token:'BQA0Nbx1eqf-NfYyfDqwpaDRPz5WCF19z6eNUdKoAeONYmnjasvNtjTkq4qvwP5dfRlPccy53rDgbWtTfkkQpeReRN8KxxRjelqBa5cgKZYqSG_ey7oyt8PtcVsy12s6Ok5QiwUZyFYAnE5DW6MfNta7c8PPyfJ1UKMxdCT7GfIRCA6x',

};

const reducer = (state, action) =>{

console.log(action);
switch(action.type){

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
      case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
      case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

        case "SET_TOKEN":
            return {
              ...state,
              token: action.token,
            };
            case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
            case "SET_PLAYLISTS":
                return {
                  ...state,
                  playlists: action.playlists,
                };
            case "SET_DISCOVER_WEEKLY":
              return{
                ...state,
                discover_weekly: action.discover_weekly,

              };
        default:
            return state;
}
};
export default reducer;