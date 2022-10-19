import { useState } from "react";
// /*import {
//   getImagesRequest,
//   createImageRequest,
//   deleteImageRequest,
//   getImageRequest,
// } from "../api/axios.useful.functions";
// */

import useAxiosPrivate from "./useAxiosPrivate";

export const useImages = () => {
  const [images, setImage] = useState([]);
  const [patients, setPatient] = useState([])

  const axiosPrivate = useAxiosPrivate();

  const loadPatients = async () => {
    try {
      const response =  await axiosPrivate.get(`/patient`);
      console.log(response)
      setPatient(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  
  const loadRecentPatients = async () => {
    try {
      const response =  await axiosPrivate.get(`/patient/uploadedRecently`);
      console.log(response)
      setPatient(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const createPatient = async (Info) => {
    try {
      const response = await axiosPrivate.post(`/patient/upload`, Info);

      console.log(response.data);
      console.log(response);
      setPatient([...patients, response.data]);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  

  const deletePatient = async (id) => {
    try {
      const response = await axiosPrivate.delete(
        `/patient/${id}`
      );
      setPatient(patients.filter((patient) => patient.id !== id));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (id_paciente, imagen) => {
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
      console.log(images)

    } catch (error) {
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
      console.error(error);
    }
  };

  const loadImages = async (id_paciente) => {
    try {
      const response = await axiosPrivate.get(`/images/${id_paciente}`);
      console.log(response)
      setImage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = async (id_paciente, id) => {
    try {
      const response = await axiosPrivate.delete(`/images/${id_paciente}/${id}`);

      setImage(images.filter((image) => image.id !== id));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    images,
    patients,
    loadPatients,
    loadImages,
    createPatient,
    deletePatient,
    getPatient,
    deleteImage,
    uploadImage,
    loadRecentPatients
  };
};
