import { useEffect, useState } from "react"

const useTitle = (init) => {
    const [title, setTitle] = useState(init)
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText = title
    }
    useEffect(updateTitle, [title])
    return setTitle
}

export default useTitle