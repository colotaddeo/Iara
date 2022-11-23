import { useState } from "react";
// /*import {
//   getImagesRequest,
//   createImageRequest,
//   deleteImageRequest,
//   getImageRequest,
// } from "../api/axios.useful.functions";
// */
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAxiosPrivate from "./useAxiosPrivate";

export const useImages = () => {
  const [images, setImage] = useState([]);
  const [patients, setPatient] = useState([]) 
  const [doctors, setDoctor] = useState([]) 
  const [pId, setPId] = useState("")

  const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate();

  const loadPatients = async () => {
    try {
      const response =  await axiosPrivate.get(`/patient`);
      console.log(response)
      setPatient(response.data)
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };

  
  const loadRecentPatients = async () => {
    try {
      const response =  await axiosPrivate.get(`/patient/uploadedRecently`);
      console.log(response)
      setPatient(response.data)
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };

  const createPatient = async (Info) => {
    try {
      const response = await axiosPrivate.post(`/patient/upload`, Info);

      console.log(response.data);
      console.log(response);
      // setPatient([...patients, response.data]);
      setPatient([response.data, ...patients])

      return response.data;
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };
  
  // const updatePatient = async (id, Info) => {
  //   try {
  //     const response = await axiosPrivate.post(`/patient/${id}`, Info);

  //     console.log(response.data);

  //     setPatient(patients.find((patient) => patient.id === id));

  //   } catch (error) {
  //     if(error.response === "ERR_BAD_REQUEST") {
  //       navigate('/login') 
  //       console.error(error);
  //     }
  //     console.error(error);
  //   }
  // };
  

  const deletePatient = async (id) => {
    try {
      const response = await axiosPrivate.delete(
        `/patient/${id}`
      );
      setPatient(patients.filter((patient) => patient.id !== id));

      console.log(response);
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };

  const getPatientsBySearch = async (info) => {
    try {
      const response = await axiosPrivate.get(`/patient/search?DNI=${info}`);

      console.log(response.data)

      setPatient(response.data)

    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  }

  const getUserInfo = async () => {
    try {
      const response = await axiosPrivate.get(`/user/userInfo`);

      console.log(response.data)

      setDoctor(response.data)

    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  }

  const forgotPassword = async (email, id) => {
    try {
      const response = await axiosPrivate.post(`/user/forgotPassword`, email);

      console.log(response.data)
      
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  }
  const updatePassword = async (id_usuario, passwords) => {
    try {
      const response = await axiosPrivate.put(`/user/updatePassword/${id_usuario}`, passwords);

      console.log(response.data)
      navigate("/login")

    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  }
  const logout = async () => {
    try {
      const response = await axiosPrivate.delete(`/user/logout`);

      console.log(response.data)
      navigate("/login")

    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  }

  const uploadImage = async (id_paciente, imagen, setIndex) => {
    try {
      const form = new FormData();

      for (let key in imagen) {
        form.append(key, imagen[key]);
      }
      const postRequest = await axiosPrivate.post(`/images/upload/${id_paciente}`, imagen, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(postRequest);
      setImage([...images, postRequest.data]);
      setIndex(images.length)
      console.log(images)

    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };
  


  const getPatient = async (id_paciente) => {
    try {
      const response = await axiosPrivate.get(`/patient/${id_paciente}`);

      console.log(response.data);

      setPatient(response.data)

      return response.data;
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };

  const loadImages = async (id_paciente) => {
    try {
      const response = await axiosPrivate.get(`/images/${id_paciente}`);
      console.log(response)
      setImage(response.data);
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };

  const getImageById = async (id_paciente) => {
    try {
      const response = await axiosPrivate.get(`/recentImage/${id_paciente}`);
      console.log(response)
      setImage([response.data]);
      setPId(id_paciente)
    } catch (error) {
      setImage([]);
      setPId(id_paciente)
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };

  const deleteImage = async (id_paciente, id) => {
    try {
      const response = await axiosPrivate.delete(`/images/${id_paciente}/${id}`);

      setImage(images.filter((image) => image.id !== id));

      console.log(response);
    } catch (error) {
      if(error.request.responseURL === "http://localhost:4000/user/refreshToken" && error.response.status === 403) {
        navigate('/login') 
        console.error(error);
      }
      console.error(error);
    }
  };

  return {
    images,
    patients,
    doctors,
    pId,
    setPatient,
    loadPatients,
    loadImages,
    createPatient,
    deletePatient,
    getPatient,
    getImageById,
    deleteImage,
    uploadImage,
    loadRecentPatients,
    getPatientsBySearch,
    getUserInfo, 
    forgotPassword,
    updatePassword,
    logout
  };
};
