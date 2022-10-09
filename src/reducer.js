
const reducer = (state, action) => {
   
    const { type, payload } = action;
    switch (type) {
      case 'CHOOSE': {
        return {
          ...state,
          types:payload,
        };
      }
      case 'CHANGETYPE': {
        return {
          ...state,
          number:payload,
        };
      }
      case 'CHANGECHAP': {
        return {
          ...state,
          chap:payload,
        };
      }
      case 'CHANGEVIEW': {
        return {
          ...state,
          view:payload,
        };
      }
      case 'CHANGEITEM': {
        return {
          ...state,
          item:state.item+payload,
        };
      }
     
      case 'CHANGEHEIGHT': {
        return {
          ...state,
          height:payload,
        }
      }
      case 'GETSP': {
        return {
          ...state,
          sp:state.sp.concat(payload),
        }
      }
      case 'DELETESP': {
        let c=state.sp.filter((item) => item === payload)
        let v=c[0].slot
        console.log(v)
        return {
          ...state,
          sp: state.sp.filter((item) => item !== payload),
          item:state.item-v
        }
      }
      case 'CHANGECOLOR': {
        return {
          ...state,
          color:payload,
        }
      }
      case 'CHANGESL': {
        return {
          ...state,
          slotSP:payload,
        }
      }
      case 'UPP': {
         let nw={
          ... state.sp[payload],
         slot:state.sp[payload].slot+1
         }
       console.log(state.sp.splice(payload,1,nw))
       return{
        ...state,
        item:state.item+1
       }
      }
      case 'DOWN': {
        if(state.sp[payload].slot-1>=0){
        let nw={
         ... state.sp[payload],
        slot:state.sp[payload].slot-1
        }
      console.log(state.sp.splice(payload,1,nw))
      return{
       ...state,
       item:state.item-1
      }
    }
    else{
     return{
      ...state,
      item:0
     }
     }
    }
      default:
        return state;
    }
  };
  
  export default reducer;