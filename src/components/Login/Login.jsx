import PasswordAtom  from "./PasswordAtom";
import UserAtom from "./UserAtom";
import LogintButtonAtom from "./LoginButtonAtom";

const Login = () => {
    return(
        <>
            <UserAtom />
            <PasswordAtom />
            <LogintButtonAtom />
        </>
    )
}

export default Login;