const usePreventLeave = (onLeave) => {
    const listener = (e) => {
        e.preventDefault()
        e.returnValue = ""  //왠진 몰라도 있어야하는 이상한놈
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener)
    const disablePrevent = () => window.removeEventListener("beforeunload", listener)
    return {enablePrevent, disablePrevent}
}

export default usePreventLeave