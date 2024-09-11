import PasswordAtom from "./PasswordAtom";
import UserAtom from "./UserAtom";
import LogintButtonAtom from "./LoginButtonAtom";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputField}>
                <UserAtom />
            </div>
            <div className={styles.inputField}>
                <PasswordAtom />
            </div>
            <div className={styles.button}>
                <LogintButtonAtom title='Login' />
            </div>
        </div>
    );
};

export default Login;
