export const initialState={
    term: null,


};

export const actionTypes={
    SET_SEARCH_TERM:"SET_SEARCH_TERM",//THIS IS CHANGER THE NULL TO THE VALUE THAT IS ENTERED IN GOOGLE SEARCH BA
    
};

const reducer=(state,action) =>{
    console.log(action);
    switch (action.type){
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state,
                term:action.term,
            }
            default:
                return state
    }

}

export default reducer
