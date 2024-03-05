import {createPortal} from "react-dom";

function Portal({children}) {
    const mountElement = document.getElementById('portal-root');
    return (
        createPortal(children, mountElement)
    );
}

export default Portal;
