import { useState } from "react"

const useTabs = (init, allTabs) => {    //init = 처음 상태 idx, allTabs = 탭의 배열
    const [idx, setIdx] = useState(init)
    if(!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        current: allTabs[idx],  //현재 탭
        change: setIdx  //change 함수를 setIdx로 쓸 수 있다.(이름만 다른 같은 함수라고 보면된다.)
    }
}

export default useTabs