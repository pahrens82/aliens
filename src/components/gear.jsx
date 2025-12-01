import { Armor } from "./gear-categories/armor";
import { Weapons } from "./gear-categories/weapons";
import { MenuContainer } from "./menu-container";
import { MenuItem } from "./menu-item";
import { DataStorage } from "./gear-categories/data-storage";
import { DiagnosticsAndDisplay } from "./gear-categories/diagnostics-and-display";
import { VisionDevices } from "./gear-categories/vision-devices";
import { Tools } from "./gear-categories/tools";
import { MedicalSupplies } from "./gear-categories/medical";
import { Pharmaceuticals } from "./gear-categories/pharmaceuticals";
import { FoodAndDrink } from "./gear-categories/food-and-drink";


export const Gear = () => {
    return (
        <section>
            <MenuContainer
                items={
                    {
                        Weapons: <MenuItem label={"Weapons"} body={<Weapons />} />,
                        Armor: <MenuItem label={"Suits & Armor"} body={<Armor />} />,
                        // Mainframes: <MenuItem label={"Computer Mainframes"} body={<h1>Computer Mainframes</h1>} />,
                        "Data Storage": <MenuItem label={"Data Storage"} body={<DataStorage />} />,
                        Displays: <MenuItem label={"Diagnostics & Display"} body={<DiagnosticsAndDisplay />} />,
                        Vision: <MenuItem label={"Vision Devices"} body={<VisionDevices/>} />,
                        Tools: <MenuItem label={"Tools"} body={<Tools/>} />,
                        Medical: <MenuItem label={"Medical Supplies"} body={<MedicalSupplies/>} />,
                        Pharma: <MenuItem label={"Pharmaceuticals"} body={<Pharmaceuticals/>} />,
                        Nutrition: <MenuItem label={"Food & Drink"} body={<FoodAndDrink/>} />,
                        // Vehicles: <MenuItem label={"Vehicles"} body={<h1>Vehicles</h1>} />,
                    }
                }
            />
        </section>
    );
};