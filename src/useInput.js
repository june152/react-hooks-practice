import { useState } from "react"

const useInput = (initVal, valid) => {
    const [value, setValue] = useState(initVal)
    const onChange = (e) => {
        let updatable = true
        if(typeof valid === "function") {
            updatable = valid(value)
        }
        //valid 함수는 App에서 input의 길이를 측정하여 bool값을 리턴하는 함수이다. 길이에 대한 검증기능
        if(updatable) {
            setValue(e.target.value)
        }
    }
    return {value, onChange}
}

export default useInput