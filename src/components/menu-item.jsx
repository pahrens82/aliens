import "../stylesheets/menu-item.css";


export const MenuItem = (
    {
        label,
        body,
    }
) => {
    return (
        <section class={"menu-content"}>
            <section class={"content-header"}>
                <p class={"h2"}>{label}</p>
            </section>
            <section class={"content-body"}>
                {body}
            </section>
        </section>
    );
};
