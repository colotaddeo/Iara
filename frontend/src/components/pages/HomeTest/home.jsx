import React, {useState} from 'react'
import logo from '../../../assets/logo-login.png'
import clock from '../../../assets/clock.png'
import user from '../../../assets/3 User.png'
import Settings from '../../../assets/SettingsIcon.png';
import './home.css'
import RecentPacients from '../../RecentPacients'
import { useImages } from '../../../hooks/useImages';
import PatientsInfo from '../../PatientsInfo';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

function Home() {
    //const [active, setActive] = useState(false);
    // const [recientes, setRecientes] = useState(true);

    // return(
    //     <div className="main_container">
    //         <div className={"side_bar" + (active ? ' closed' : '')}>
    //             <div className="logo_container">
    //                 <h1><img src={logo} alt="logo" /> IARA</h1>
    //             </div>
    //             <div className="side_bar_links">
    //                 <a href="#" onClick={(e)=> {
    //                     setRecientes(true)
    //                 }}><img src={clock} alt="clock"/> Recientes</a>
    //                 <a href="#" onClick={(e)=> {
    //                     setRecientes(false)
    //                 }}><img src={user} alt="user" /> Pacientes</a>
    //                 <a href="/configuracion"><img src={Settings} alt="Configuración" /> Configuración</a>
    //             </div> 
    //         </div>
    //         <div className="primary_container">
    //             <div className='banner' onClick={(e)=> {
    //                 setActive(!active)
    //             }}>
    //                 <h1>Hola Dr. Rizzo</h1>
    //                 <p>Nuestra mision es ayudarte</p>
    //             </div>
    //             <div>
    //                 {/* cambiar componente RecentPacientes */}
    //                 {recientes ? <RecentPacients /> : <AllPatients />}
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <Navbar />
    )
}

export default Home