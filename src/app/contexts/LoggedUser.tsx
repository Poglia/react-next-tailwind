import {ReactNode, createContext, useState} from 'react'

type ContextType = {
    name: string,
    setName: (n: string) => void
}
export const LoggedUserContext = createContext<ContextType | null>(null);

type Props = { children: ReactNode;}
export const LoggedUserProvider = ({children}:Props) =>{
    const [ name, setName] = useState("Pedro");
    return (
        <LoggedUserContext.Provider value={{ name, setName }}>
            {children}
        </LoggedUserContext.Provider>

    )
}