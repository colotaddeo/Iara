import useAxiosPrivate from '../hooks/useAxiosPrivate'

const axiosPrivate = useAxiosPrivate()

export const getPatientsRequest = async () => 
    await axiosPrivate.get(`/patient`);

export const createPatientsRequest = async (dni) => 
    await axiosPrivate.post(`/patient/upload`, dni);

export const getPatientRequest = async (id) => 
    await axiosPrivate.get(`/patient/${id}`);

export const deletePatientsRequest = async (id) => 
    await axiosPrivate.delete(`/patient/${id}`);

export const updatePatientsRequest = async (id, dni) => 
    await axiosPrivate.put(`/patient/${id}`, dni);

export const getImagesRequest = async (id_paciente) => 
    await axiosPrivate.get(`/images/${id_paciente}`);

export const createImageRequest = async (imageInfo, id_paciente) => 
    await axiosPrivate.post(`/images/${id_paciente}`, imageInfo)

export const deleteImageRequest = async (id_paciente, id) => 
    await axiosPrivate.delete(`/images/${id_paciente}/${id}`)

export const getImageRequest = async (id_paciente, id) => 
    await axiosPrivate.get(`/images/${id_paciente}/${id}`)

export const updateImageRequest = async (id_paciente, id, imageInfo) => 
    await axiosPrivate.put(`/images/${id_paciente}/${id}`, imageInfo)

