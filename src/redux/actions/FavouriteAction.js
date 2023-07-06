const AddToFavouriteList=(payload)=>{
    return{
        type:'ADD_TO_FAVOURITE',
        payload:payload
    }
}
const AddToDeatails=(payload)=>{
    return{
        type:'ADD_TO_DETAILS',
        payload:payload
    }
}
const RemoveItem=(payload)=>{
    return{
        type:'REMOVE_ITEM',
        payload:payload
    }
}

export default{
    AddToFavouriteList,
    RemoveItem,
    AddToDeatails
}