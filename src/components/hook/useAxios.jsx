import axios from "axios";

export const axiiosSexure = axios.create({
    baseURL: 'http://localhost:5001'
})

const useAxios = () => {
   return axiiosSexure;
}

export default useAxios