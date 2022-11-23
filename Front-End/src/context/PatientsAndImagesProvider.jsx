import { useContext, createContext, useState } from "react";
import { PatientsAndImagesContext } from "./PatientsAndImagesContext";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const usePatientsAndImages = () => {
  const context = useContext(PatientsAndImagesContext);

  if (!context) {
    throw new Error("UseTasks must be used within a TaskContextProvider");
  }

  return context;
};

export const PatientsAndImagesContextProvider = ({ children }) => {
  const [images, setImage] = useState([]);
  const [patients, setPatient] = useState([]);

  const axiosPrivate = useAxiosPrivate();

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

  const loadPatients = async () => {
    try {
      const response = await axiosPrivate.get(`/patient`);
      console.log(response);
      setPatient(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePatient = async (id) => {
    try {
      const response = await axiosPrivate.delete(`/patient/${id}`);
      setPatient(patients.filter((patient) => patient.id !== id));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const loadImages = async (id_paciente) => {
    try {
      const response = await axiosPrivate.get(`/images/${id_paciente}`);
      setImage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (Info) => {
    try {
      const form = new FormData();

      for (let key in Info) {
        form.append(key, Info[key]);
      }
      const postRequest = await axiosPrivate.post(`/patient/upload`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(postRequest);
      setImage([...patients, postRequest.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PatientsAndImagesContext.Provider
      value={{
        images,
        patients,
        createPatient,
        deletePatient,
        loadPatients,
        loadImages,
        uploadImage,
      }}
    >
      {children}
    </PatientsAndImagesContext.Provider>
  );
};
