export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after development
    //token: "BQCbR92_V82Ms6f3QGMJeQEzJYAXg9oPqB_mfhox3GcA_HvTF85UYDFejBWnk0BsNbWlZKrt7yGM0s-FeekTgDU8XHxn58ckG3UEnP_EtR7iQ_BGHRPrVPJI8t5SSF6kfWSWithO-g1F19YcLiOAMJQryv3grNnlq1Lu5XaX7-ajE4VP1CHv",
};

const reducer =(state, action)=>{
    console.log(action);

    switch (action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token,

            }
        case "SET_PLAYLIST":
            return{
                ...state,
                playlists: action.playlists,
            }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekley: action.discover_weekley,
            }
        default:
            return state;
    }

}
export default reducer;