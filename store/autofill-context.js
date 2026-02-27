import { createContext, useState } from "react";

export const AutofillContext = createContext({
    email: '', 
    password: '', 
    autoFill: false, 
    setEmail: () => {}, 
    setPassword: () => {}, 
    setAutoFill: () => {}
});

export default function AutofillContextProvider({children}) {
    const [eMail, setEMail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [autoFillStatus, setAutoFillStatus] = useState(false);

    function setEmail(email) {
        setEMail(email);
    };

    function setPassword(password) {
        setPassWord(password);
    };

    function setAutoFill(theBool) {
        setAutoFillStatus(theBool);
    };

    const value = {
        email: eMail, 
        password: passWord, 
        autoFill: autoFillStatus,
        setEmail: setEmail, 
        setPassword: setPassword,
        setAutoFill: setAutoFill
    };

    return (
        <AutofillContext.Provider value={value}>
            {children}
        </AutofillContext.Provider>
    );
};