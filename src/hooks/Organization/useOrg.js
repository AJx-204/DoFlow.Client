import axios from "axios";
import { useDispatch } from "react-redux";
import { useNotifier, setOrg, setOrgLoading, setOrgErrorMessage, } from "@/global";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const useOrg = () => {

    const dispatch = useDispatch();
    const { addMessage } = useNotifier();

    const getOrg = async (orgId) => {
        dispatch(setOrgLoading(true))
        try {
            const res = await axios.get(`${backendUrl}/getOrg/${orgId}`,{
                withCredentials:true
            })
            if(res.data.data){
               dispatch(setOrg(res.data.data))
               addMessage('organization selected successfully', 'success')
               return true;
            }
        } catch (error) {
            dispatch(setOrgErrorMessage(error.response?.data?.message || 'failed to get organization !'))
            addMessage(error.response?.data?.message , 'error' || 'failed to get organization !', 'error')
            return false;
        } finally{
            dispatch(setOrgLoading(false))
        }
    };

    return {
        getOrg,
    }

};

export default useOrg;

