import { createContext, useState } from "react";

export const navBarContext = createContext()


function NavBarContext({children}) {
 const [toggle,setToggle] = useState(false)
    return ( <navBarContext.Provider value={{toggle,setToggle}}>
        {children}
        
    </navBarContext.Provider> );
}
export default NavBarContext;