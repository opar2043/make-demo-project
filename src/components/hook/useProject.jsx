import React from 'react'
import useAxios from './useAxios'
import { useQuery } from '@tanstack/react-query'

const useProject = () => {
    const axiiosSexure = useAxios()
    const {data: projects = [] , refetch} = useQuery({
        queryKey: ['projects'],
        queryFn: async() =>{
            const res = await axiiosSexure.get('/project');
            return res.data;
        }
    })

    return [projects , refetch]
}

export default useProject