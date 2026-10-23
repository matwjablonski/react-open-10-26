import { useEffect, useState } from "react";
import { createPortal } from "react-dom"

type NotificationProps = {
    message: string;
    active: boolean;
}

const Notification = ({ message, active = false }: NotificationProps) => {
    const [isVisible, setIsVisible] = useState(active);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return createPortal(
        <div>{message}</div>,
        document.getElementById('notification-box')!,
    )
}

export default Notification;