import { useRef } from "react";
import "./dialog.style.css";
import Close from "./assets/close.svg";

export default function Dialog() {
    const dialogF = useRef(null);

    const showDialog = () => {
        dialogF.current.showModal();
    };
    const closeDialog = () => {
        dialogF.current.close();
    };

    return (
        <>
            <dialog className="dialog" ref={dialogF}>
                <div className="dialog_container">
                    <img autoFocus onClick={closeDialog} src={Close} alt="Fechar" />
                    <p>This modal dialog has a groovy backdrop!</p>
                    <button>Close</button>
                </div>
            </dialog>
            <button onClick={showDialog}>Show the dialog</button>
        </>
    )
} 