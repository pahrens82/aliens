import { createSignal } from "solid-js";


export function  Clock() {
    let now = new Date();
    let year = now.getFullYear() + 154;
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let date = String(now.getDate()).padStart(2, "0");
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    const [time, setTime] = createSignal(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);

    const handleClockStuff = () => {
        let now = new Date();
        let year = now.getFullYear() + 154;
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let date = String(now.getDate()).padStart(2, "0");
        let hours = String(now.getHours()).padStart(2, "0");
        let minutes = String(now.getMinutes()).padStart(2, "0");
        let seconds = String(now.getSeconds()).padStart(2, "0");
        setTime(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);
    };

    setInterval(handleClockStuff, 1000);

    return (
        <span id={"clock"}>{time()}</span>
    );
};
