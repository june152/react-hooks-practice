const useNotification = (title, op) => {
    if(!("Notification" in window)) {
        return
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, op)
                } else {
                    return
                }
            })
        } else {
            new Notification(title, op)
        }
    }
    return fireNotif
}

export default useNotification