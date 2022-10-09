import useAuth from './useAuth';
import axios from '../api/axios';
const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        //Enviamos la http cookie (axios puede acceder)
        const response = await axios.get('/user/refreshToken', {
            withCredentials: true
        });
        setAuth(prev => {
            //Vemos el estado anterior que teníamos
            console.log(JSON.stringify(prev));
            //Vemos el nuevo access token que recibimos
            console.log(response.data.accessToken);

            //Devolvemos la informacion previa que teniamos pero sobrescribimos el nuestro nuevo token en el anterior
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;