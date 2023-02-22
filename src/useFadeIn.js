import { useEffect, useRef } from "react"

const useFadeIn = (duration = 2 , delay = 0) => {
    const el = useRef()
    useEffect(() => {
        if(typeof duration !== "number" || typeof delay !== "number") {
            return
        }
        if(el.current) {    //엘리먼트 존재여부 확인
            const {current} = el
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1;
        }
    }, [])
    return {ref : el, style: {opacity: 0}}
}

export default useFadeIn