import React,{createContext,useReducer} from "react";
import reducer from "./reducer"

export const AppContext = React.createContext()
const init={
    number:0,
    color:"",
    types:0,
    view:0,
    item:0,
    height:0,
    sp:[],
    chap:0,
    slotSP:0,
    index:0,
   
}

export default ({children})=>{
    const [state,dispatch]=useReducer(reducer, init)
    
    const choose=(types)=>{
        dispatch ({type:"CHOOSE",payload:types})
    }
    const changeType=(number)=>{
      dispatch ({type:"CHANGETYPE",payload:number})
  }
  const changeChap=(chap)=>{
    dispatch ({type:"CHANGECHAP",payload:chap})
}
  const changeView=(view)=>{
    dispatch ({type:"CHANGEVIEW",payload:view})
}
const changeColor=(color)=>{
  dispatch ({type:"CHANGECOLOR",payload:color})
}
const changeItem=(item)=>{
  dispatch ({type:"CHANGEITEM",payload:item})
}

const changeHeight=(height)=>{
  dispatch ({type:"CHANGEHEIGHT",payload:height})
}
const getSp=(sp)=>{
  dispatch ({type:"GETSP",payload:sp})
}
const DeleteSp=(sp)=>{
  dispatch ({type:"DELETESP",payload:sp})
}
const changeSl=(slotSP)=>{
  dispatch ({type:"CHANGESL",payload:slotSP})
}
const upp=(index)=>{
  dispatch ({type:"UPP",payload:index
  })
}
const down=(index)=>{
  dispatch ({type:"DOWN",payload:index
  })
}
    return(
        <AppContext.Provider
        value={{
          ...state,
          choose,
          changeType,
          changeView,
          changeItem,
          changeHeight,
          getSp,
          changeColor,
          changeChap,
          DeleteSp,
          changeSl,
          upp,
          down,
         
        }}
      >
        {children}
      </AppContext.Provider>
    )
}

