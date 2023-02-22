import { useRef } from "react"

const useFullScreen = (callback) => {
    const el = useRef();
    const triggerFull = () => {
        if(el.current) {    //존재여부 확인
            const {current} = el
            current.requestFullscreen()
            if(callback && typeof callback === "function") {
                callback(true)
            }
        }
    }
    const exitFull = () => {
        document.exitFullscreen()
        if(callback && typeof callback === "function") {
            callback(false)
        }
    }
    return {el, triggerFull, exitFull}
}

export default useFullScreen