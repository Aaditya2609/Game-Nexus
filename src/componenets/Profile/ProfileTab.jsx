import { useAuth } from "../../contexts/AuthContext"

export function ProfileTab()
{
    const {stateAuth}=useAuth();

    return(
        <div>
            <h2>
                User Details
            </h2>
            <p>
                User Name: {stateAuth.userDetails[0]?.firstName} {stateAuth.userDetails[0]?.lastName}
            </p>
            <p>
                 Email: {stateAuth.userDetails[0]?.email}
            </p>
        </div>
    )
}