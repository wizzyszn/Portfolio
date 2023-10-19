import {navBarContext} from '../contexts/NavBarContextProvider'
import { useContext } from 'react'

export const useNavBarContext = () =>{
    const context = useContext(navBarContext)
    if(!context){
        throw Error('useAuthContext must be used inside a AuthContextProvider')
    }
    else{
        return context
    }
}