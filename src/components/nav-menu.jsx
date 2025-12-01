import { For } from "solid-js";


export const NavMenu = (
    {
        items = [],
    }
) => {
    return (
        <ul class={"list-unstyled"}>
            <For each={items}>
                {(item) => <MenuItem label={item} />}
            </For>
        </ul>
    );
};
