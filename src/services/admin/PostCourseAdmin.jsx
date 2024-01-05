import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchPostCourse = async (input) => {
  
  const formData = new FormData();
  formData.append('title', input.title);
  formData.append('deskripsi', input.deskripsi);
  formData.append('kode_kelas', input.kode_kelas);
  formData.append('kategori_id', input.kategori_id);
  formData.append('harga', input.harga);
  formData.append('premium', input.premium);
  formData.append('mentor_id', input.mentor_id);
  formData.append('level', input.level);
  formData.append('url_image_preview', input.url_image_preview);
  
  // const response = await http.post(API_ENDPOINT.POST_ADD_COURSE, formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });

  // return response.data;
};

export const usePostCourse = () => {
  return useMutation(fetchPostCourse);
};
