import axios from "axios";

export const axiiosSexure = axios.create({
    baseURL: 'https://my-backend-liard.vercel.app'
})

const useAxios = () => {
   return axiiosSexure;
}

export default useAxios