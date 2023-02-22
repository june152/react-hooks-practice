import axios from "axios"
import { useEffect, useState } from "react"

const useAxios = (ops, instance = axios) => {
    const [state, setState] = useState({
        loading:true,
        error:null,
        data:null
    })
    const [trigger, setTrigger] = useState(0)
    const refetch = () => {
        setState({...state,
            loading:true})
            setTrigger(Date.now())
    }
    useEffect(() => {
        instance(ops).then(res => {
            setState({
                ...state,
                loading:false,
                data : res.data.data.movies
            })
        }).catch(error => {
            setState({...state, loading:false, error})
        })
    }, [trigger])
    if(!ops.url) {
        return
    }
    return {...state, refetch}
}

export default useAxios