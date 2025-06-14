import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser, setAuthLoading, setErrorMessage, useNotifier } from '../../global'

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const useLogout = () => {
    const dispatch = useDispatch();
    const { addMessage } = useNotifier();
    const logout = async (data) => {
        dispatch(setAuthLoading(true))
        try {
            const res = await axios.post(`${backendUrl}/auth/logout`, {}, {
                withCredentials: true
            });
            if(res.data){
                dispatch(setUser(null))
                addMessage('Logout successfuly !', 'success')
                return true;
            }
            addMessage('Logout failed !', 'error')
            return false
        } catch (error) {
            dispatch(setErrorMessage(error.response?.data?.message || 'Logout failed !'))
            return false;
        } finally {
            dispatch(setAuthLoading(false))
        }
    };
    return logout;
};

export default useLogout;