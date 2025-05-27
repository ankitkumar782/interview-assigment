import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import { clearStorage, getStorage } from "../utils/Storage";
import { useNavigate } from "react-router-dom";

export default function Main({children}){
    
    return(
      <UserContext.Provider>
        {children}
      </UserContext.Provider>
    )
}