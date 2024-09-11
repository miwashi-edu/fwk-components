const LogintButtonAtom = ({title}) => {
    if(!title){
        return (<div>Copoment must have title!</div>)
    }
    
    return (
        <button>{title}</button>
    );
}

export default LogintButtonAtom;