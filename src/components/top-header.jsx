import { Clock } from "./clock";

import "../stylesheets/top-header.css";


export const TopHeader = () => {
    return (
        <header class={"top-header flicker-95"}>
            <span>PERSONAL TERMINAL</span>
            <Clock />
        </header>
    );
};
