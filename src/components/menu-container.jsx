import { createSignal } from "solid-js";

import "../stylesheets/menu-container.css";


export const MenuContainer = (
    {
        items={}
    }
) => {
    let labels = Object.keys(items);
    const [activeTab, setActiveTab] = createSignal(labels[0]);
    const [acitveContent, setActiveContent] = createSignal(items[labels[0]])

    const handleClick = (event) => {
        let target = event.currentTarget;
        target.parentElement.querySelectorAll("button").forEach((button) => {
            button.classList.remove("active");
        });
        target.classList.add("active");
        let value = event.currentTarget.value;
        setActiveTab(value);
        setActiveContent(items[value]);
    };

    return (
        <section class={"menu-container"}>
            <ul class={"list-unstyled menu-list"}>
                <For each={labels}>
                    {(label) => <li class={"menu-label flicker-90"}>
                        <button
                            class={activeTab() === label ? "active" : ""}
                            type={"button"}
                            value={label}
                            onClick={handleClick}
                        >
                            {label()}
                        </button>
                    </li>}
                </For>
            </ul>
            {acitveContent()}
        </section>
    );
};
