const LogintButtonAtom = ({title, children}) => {

    if(!title){
        console.error('title is missing in Login Button Component!');
    }

    return (
        <button>{title}</button>
    );
}

export default LogintButtonAtom;