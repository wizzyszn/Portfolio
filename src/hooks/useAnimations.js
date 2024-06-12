import { useContext } from "react";
import {AnimationsContext} from '../contexts/AnimationContext';


export const useAnimationContext = () =>{
    const context = useContext(AnimationsContext);
    if(!context){
        throw new Error('This value of the Animation Context shoukd be used within the useAnimationContext Provider')
    };
    return context;
};