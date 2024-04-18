import { createContext, useContext, useState } from 'react';
import { loginService } from '~/services/UserService';
import { ModalContext } from '../ModalProvider';

export const LoginContext = createContext();

function LoginProvider({ children }) {
    const [data, setData] = useState();
    const [showError, setShowError] = useState(false);
    const [isNotify, setIsNotify] = useState(false);
    const contentModal = useContext(ModalContext);
    const [loading, setLoading] = useState(false);
    const [showErrorRegister, setShowErrorRegister] = useState(false);

    //data random user
    const [dataUser, setDataUser] = useState();

    const handleDeleteData = () => {
        setData(null);
    };

    const handleSetData = (data) => {
        setData(data);
    };

    const handleSetDataUser = (data) => {
        setDataUser(data);
    };

    const fetchApi = async (email, password) => {
        setLoading(true);
        const result = await loginService(email, password);

        if (result) {
            setData(result.data);
            localStorage.setItem('token', result.meta.token);

            setLoading(false);
            contentModal.handleHideModal();
            setIsNotify(true);

            setShowError(false);

            setTimeout(() => {
                setIsNotify(false);
            }, 1500);
        } else {
            setLoading(false);
            setShowError(true);
        }
    };

    const value = {
        data,
        dataUser,
        showError,
        isNotify,
        loading,
        showErrorRegister,
        setShowErrorRegister,
        setShowError,
        fetchApi,
        handleSetData,
        handleDeleteData,
        handleSetDataUser,
    };

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export default LoginProvider;
