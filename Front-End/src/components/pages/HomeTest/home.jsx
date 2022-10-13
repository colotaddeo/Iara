import React, {useState} from 'react'
import logo from '../../../assets/logo-login.png'
import clock from '../../../assets/clock.png'
import user from '../../../assets/3 User.png'
import './home.css'


function Home() {
    const [active, setActive] = useState(false);
    let pacientes = [
        {
        dni: 47202456,
        nombre: 'jorgelin'
    },
    {
        dni:34567234,
        nombre: "sodfosd"
    }
]
    // const getRecentUsers = async () => {
    //     try {
    //       const response = await axiosPrivate.get("/patient/uploadedRecently", {
    //         signal: controller.signal,
    //       });
  
    //       console.log(response.data);
    //       estaMontado && setRecentUsers(response.data);
    //     } catch (err) {
    //       if(err.code === 'ERR_CANCELED')
    //       console.error(err);
    //       else{
    //         console.error(err);
    //         //navigate('/login', { state: { from: location }, replace: true });
    //         //navigate('/login')
    //         //navigate('/login');//Agarra la ruta de donde viene el usuario y lo va enviar al login. 
    //         //Pero en el historial del buscador va a reemplazarlo con la ruta de donde viene asi cuando se loguea sabemos que va directamente a la home
    //       }
          
    //     }
    //   };
    return(
        <div className="main_container">
            <div className={"side_bar" + (active ? ' closed' : '')}>
                <div className="logo_container">
                    <h1><img src={logo} alt="logo" /> IARA</h1>
                </div>
                <div className="side_bar_links">
                    <a href="#"><img src={clock} alt="clock"/> Recientes</a>
                    <a href="#"><img src={user} alt="user" /> Pacientes</a>
                </div> 
            </div>
            <div className="primary_container">
                <div className='banner' onClick={(e)=> {
                    setActive(!active)
                }}>
                    <h1>Bienvenido Dr. Rizzo</h1>
                    <p>Nuestra mision es ayudarte</p>
                </div>
                <h1 className="table_heading">Recientes</h1>
                {pacientes.length > 0 ? pacientes.map((paciente) => {
                    return (
                        <h1>{paciente.dni}</h1>
                    )
                }) : <h2>Aun no hay pacientes registrados</h2>}
            </div>
        </div>
    )
}

export default Home