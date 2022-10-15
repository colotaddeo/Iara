import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [patient, setPatient] = useState([])
  const navigate = useNavigate()

  const axiosPrivate = useAxiosPrivate();

  const loadImages = async (id_paciente) => {
    try {
      const response = await axiosPrivate.get(`/images/${id_paciente}`);
      setImage(response.data);
    } catch (error) {
      console.log(error);
      navigate('/login')
    }
  };

  const deleteImage = async (id_paciente, id) => {
    try {
      const response = await axiosPrivate.delete(
        `/images/${id_paciente}/${id}`
      );
      setImage(images.filter((image) => image.id !== id));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createImage = async (Info) => {
    try {
      const form = new FormData();

      for (let key in Info) {
        form.append(key, Info[key]);
      }
      const postRequest = await axiosPrivate.post(`/patient/upload`, form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(postRequest);
      //setImage([...images, postRequest.data]);
      setImage([...images, postRequest.data]);

    } catch (error) {
      console.error(error);
    }
  };

  const getImage = async (id_paciente, id) => {
    try {
      const response = await getImageRequest(id_paciente, id);

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createPatient = async (Info) => {
    try {
      const response =  await axiosPrivate.post(`/patient/upload`, Info);

      console.log(response.data);
      console.log(response)
      setPatient([... patient, response.data])

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    images,
    createPatient,
    loadImages,
    deleteImage,
    createImage,
    getImage,
  };
};
