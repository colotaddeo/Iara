import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate, useLocation } from "react-router-dom";
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

        console.log(response.data);
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
    <article className="home__container">
      <h2>Paciente recientes</h2>
      {recentUsers?.length ? (
        <ul>
          {recentUsers.map((recentUser) => (
            <li key={recentUser.id}> {recentUser.dni} </li>
          ))}
        </ul>
      ) : (
        <p>No hay pacientes subidos aún</p>
      )}
    </article>
    
    {/* <Link to="/signUp">Anda al registro pibe (es para testear lo puede borrar)</Link> */}
    </>
  );
};

export default RecentPacients