import {createContext} from "react";
import {User} from "../../types/User"

export type AuthContextType ={
    user: User | null;
    signin: (usuario: string, password: string) => Promise<boolean>;
    signout: () => void; 
}

export const AuthContext = createContext<AuthContextType>(null!);