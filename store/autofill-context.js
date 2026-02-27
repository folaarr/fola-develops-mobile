import { isLoading } from "expo-font";
import { createContext, useState } from "react";

export const AutofillContext = createContext({
    email: '', 
    password: '', 
    autoFill: false, 
    isLoading: false,
    setEmail: () => {}, 
    setPassword: () => {}, 
    setAutoFill: () => {},
    setIsLoading: () => {}
});

export default function AutofillContextProvider({children}) {
    const [eMail, setEMail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [autoFillStatus, setAutoFillStatus] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(false);

    function setEmail(email) {
        setEMail(email);
    };

    function setPassword(password) {
        setPassWord(password);
    };

    function setAutoFill(theBool) {
        setAutoFillStatus(theBool);
    };

    function setIsLoading(theBool) {
        setLoadingStatus(theBool);
    }

    const value = {
        email: eMail, 
        password: passWord, 
        autoFill: autoFillStatus,
        isLoading: loadingStatus,
        setEmail: setEmail, 
        setPassword: setPassword,
        setAutoFill: setAutoFill, 
        setIsLoading: setIsLoading
    };

    return (
        <AutofillContext.Provider value={value}>
            {children}
        </AutofillContext.Provider>
    );
};