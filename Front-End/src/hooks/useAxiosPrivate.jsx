//Hook que nos permite adjuntar los interceptors a la request y a la response

import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        //Los interceptors se pueden pensar como los events listeners podemos adjuntar muchos pero si hacemos esto nuestra request se volverá un lío
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                //Si no existe el header Authorization
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            //Hay un error debido a que nuestro access token expiró
            async (error) => {
                //Accedemos a la request que mandamos y que nos tiró un error
                const prevRequest = error?.config;

                //Si lo que respondió el servidor fue un error 403 y si la request enviada no existe
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    //Enviamos un request a nuestro endpoint que nos da un nuevo token
                    const newAccessToken = await refresh();
                    //Setemos nuestro nuevo access token en el header authorization
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    //Hacemos nuevamente la request y devolvemos eso
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            //Removemos los interceptores ya que no los necesitamos más
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;