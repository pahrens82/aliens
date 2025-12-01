import { MenuContainer } from "../menu-container";
import { MenuItem } from "../menu-item";
import { HandGuns } from "./hand-guns";
import { Rifles } from "./rifles";
import { OtherWeapons } from "./other-weapons";


export const Weapons = () => {
    return (
        <section>
            <MenuContainer
                items={
                    {
                        "Small Arms": <MenuItem label={"Small Arms"} body={<HandGuns />} />,
                        "Long Arms": <MenuItem label={"Long Arms"} body={<Rifles />} />,
                        Other: <MenuItem label={"Other Weapons"} body={<OtherWeapons />} />,
                    }
                }
            />
        </section>
    );
};