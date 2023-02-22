const useConfirm = (msg = "", onConfirm, onCancel) => {
    if((!onConfirm && typeof onConfirm !== "function") || (!onCancel && typeof onCancel !== "function")) return
    const confirmAction = () => {
        if(window.confirm(msg)) {
            onConfirm()
        } else {
            onCancel()
        }
    }
    return confirmAction
}

export default useConfirm