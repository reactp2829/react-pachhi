import {createContext,useContext} from "react"

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
})

//provider 

export const ThemeProvider  = ThemeContext.Provider

// create custom hooks 

export  default function useTheme(){
    return useContext(ThemeContext)
}
