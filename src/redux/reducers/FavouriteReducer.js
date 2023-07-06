const initData={
    data:[],
    details:null,
}

const FavoriteReducer=(state=initData,action)=>{
    switch (action.type) {
        case 'ADD_TO_FAVOURITE':
            console.log(state.data.filter((data)=>data.id == action.payload.id))
            if(state.data.filter((data)=>data.id == action.payload.id).length === 0){
                state.data.push(action.payload)
            }else{
                console.log("item already in array")
            }
            
            return{
                ...state
            }
        case 'REMOVE_ITEM':
            const id = action.payload.id
            return{
                ...state,
                data:state.data.filter((data)=>data.id !== id)
            }
        case 'ADD_TO_DETAILS':
            return{
                ...state,
                details:action.payload
            }
            
        default:
            return{
                ...state
            }
    }
}

export default FavoriteReducer;