import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { createContext } from "react";
import { useContext } from "react";

const ResizedContext = createContext();

export const ResizedProvider = ({children}) => {
    const is_mobile = matchMedia('screen and (min-width: 320px)').matches;
    const is_ta = matchMedia('screen and (min-width: 768px)').matches;
    const is_pc = matchMedia('screen and (min-width: 1200px)').matches;
    const [isMo, setIsMo] = useState(is_mobile);
    const [isTa, setIsTa] = useState(is_ta);
    const [isPc, setIsPc] = useState(is_pc);
    
    const handleResize = debounce(() => {
        if(window.innerWidth < 768) {
            setIsMo(true);
            setIsTa(false);
            setIsPc(false);
        } else if(window.innerWidth >= 768 && window.innerWidth < 1200) {   
            setIsMo(false);
            setIsTa(true);
            setIsPc(false);
        } else if(window.innerWidth >= 1200) {
            setIsMo(false);
            setIsTa(false);
            setIsPc(true);
        }
    }, 300);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <ResizedContext.Provider value={{isMo, isTa, isPc}}>{children}</ResizedContext.Provider>;
};

export const useResizedApi = () => {
    return useContext(ResizedContext);
};
