import { useEffect } from "react"

const useBeforeLeave = (onMouseLeave) => {
    const handle = () => {
        onMouseLeave()
    }
    useEffect(() => {
        if(typeof onMouseLeave !== "function") {
            return
        }
        document.addEventListener("mouseleave", handle)
        return () => {
            document.removeEventListener("mouseleave", handle)
        }
    }, [])
}

export default useBeforeLeave