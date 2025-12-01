import { createSignal } from 'solid-js'
import './App.css'
import { TopHeader } from './components/top-header'
import { Gear } from './components/gear'
import { Home } from './components/home'
import { Mechanics } from './components/mechanics'
import { MenuItem } from './components/menu-item'
import { Skills } from './components/skills'
import { Talents } from './components/talents'
import { Characters } from './components/characters'


function getRandomInteger(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const IMAGE_PATHS = [
    "alien_wallpaper_climb.jpg",
    "alien_wallpaper_combat.jpg",
    "alien_wallpaper_cover.jpg",
    "alien_wallpaper_egg.jpg",
    "alien_wallpaper_explosion.jpg",
    "alien_wallpaper_head.jpg",
    "alien_wallpaper_planet.jpg",
    "alien_wallpaper_spacewalk.jpg",
    "alien_xeno1.jpg",
    "alien_xeno2.jpg",
];

import { MenuContainer } from "./components/menu-container"


function App() {
    const [activeMenu, setActiveMenu] = createSignal("/");

    // let activeBackgroundImagePath = IMAGE_PATHS[getRandomInteger(0, IMAGE_PATHS.length)];

    const handleThemeChange = (event) => {
        let value = event.currentTarget.value;
        htmlElement.dataset.theme = value;
    };

    return (
        <>
            <TopHeader />
            <main>
                <MenuContainer
                    items={
                        {
                            Home: <MenuItem label={"Home"} body={<Home />} />,
                            Gear: <MenuItem label={"Gear"} body={<Gear />} />,
                            Mechanics: <MenuItem label={"Mechanics"} body={<Mechanics />} />,
                            Characters: <MenuItem label={"Character Creation"} body={<Characters />} />,
                            Skills: <MenuItem label={"Skills"} body={<Skills />} />,
                            Talents: <MenuItem label={"Talents"} body={<Talents />} />,
                        }
                    }
                />
            </main>
            <footer>
                WEYLAND-YUTANI CORPORATION &mdash; BUILDING BETTER WORLDS
            </footer>
        </>
    );
};

export default App
