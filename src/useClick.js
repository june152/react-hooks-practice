import { useEffect, useRef } from "react"

const useClick = (onClick) => {
    //useRef : getElementBy 같은 느낌으로 컴포넌트 고르는 녀석
    const el = useRef()
    useEffect(() => {
        if(el.current && typeof onClick === "function") {    //존재여부 확인
            el.current.addEventListener("click", onClick)
        }
        return () => {
            if(el.current && typeof onClick === "function") {    //존재여부 확인
                el.current.addEventListener("click", onClick)
            }
        }
    }, [])
    if(typeof onClick !== "function") return
    return el
}

export default useClick