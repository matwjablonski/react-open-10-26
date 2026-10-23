import { memo } from "react"

export const UserInfo = () => {
    return (
        <p>Informacje o zalogowanym użytkowniku</p>
    )
}

export const UserInfoMemoized = memo(UserInfo);