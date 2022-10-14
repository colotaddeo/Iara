import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate, useLocation } from "react-router-dom";
import './RecentPacients.css'
const RecentPacients= () => {
  const [recentUsers, setRecentUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  


  useEffect(() => {
    let estaMontado = true;
    const controller = new AbortController(); //Para cancelar la request

    const getRecentUsers = async () => {
      try {
        const response = await axiosPrivate.get("/patient/uploadedRecently", {
          signal: controller.signal,
        });

        estaMontado && setRecentUsers(response.data);
      } catch (err) {
        if(err.code === 'ERR_CANCELED')
        console.error(err);
        else{
          console.error(err);
          //navigate('/login', { state: { from: location }, replace: true });
          //navigate('/login')
          //navigate('/login');//Agarra la ruta de donde viene el usuario y lo va enviar al login. 
          //Pero en el historial del buscador va a reemplazarlo con la ruta de donde viene asi cuando se loguea sabemos que va directamente a la home
        }
        
      }
    };

    getRecentUsers();

    return () => {
      estaMontado = false;
      controller.abort();
    };
  }, []);


  return (
    <>
      {recentUsers?.length ? (
        <table>
      <thead>
      <tr>
        <th>DNI</th>
        <th>Ultima Modificacion</th>
      </tr>
      </thead>
        {recentUsers.map((recentUser) => (
            <tr key={recentUser.id}>
            <td> {recentUser.dni} </td>
            <td> {recentUser.updatedOn} </td>
            </tr>
            ))}
    </table>
            ) : (
        <p>No hay pacientes subidos aún</p>
      )}
    
    {/* <Link to="/signUp">Anda al registro pibe (es para testear lo puede borrar)</Link> */}
    </>
  );
};

export default RecentPacients