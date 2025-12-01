import { ColonialMarine } from "./careers/colonial-marine";
import { ColonialMarshall } from "./careers/colonial-marshall";
import { CompanyAgent } from "./careers/company-agent";
import { Medic } from "./careers/medic";
import { Roughneck } from "./careers/roughneck";
import { Scientist } from "./careers/scientist";


export const Characters = () => {
    return (
        <section>
            <ol class={"simple-list"}>
                <li><strong>Select your character's career:</strong>
                    <ul class={"list-unstyled"}>
                        <ColonialMarine />
                        <ColonialMarshall />
                        <CompanyAgent />
                        <Medic />
                        <Roughneck />
                        <Scientist />
                    </ul>
                </li>
                <li><strong>Set your starting attributes:</strong> To create
                    your character, distribute a total of 14 points across your
                    attributes: Strength, Agility, Wits, and Empathy. You may
                    assign no less than 2 and no more than 4 points to any one
                    attribute &ndash; except the key attribute for your career
                    which can have a score of 5.
                </li>
                <li><strong>Set your starting skill levels:</strong> Your skills
                    represent the knowledge you have acquired during your life.
                    They determine, along with your attributes, how effectively
                    you can perform certain actions in the game. There are twelve
                    core skills in the game. Three skills are typically linked
                    to each of the four attributes. Skills are measured by a skill
                    level from 0 to 5. When creating your PC, distribute a
                    total of 10 points across the twelve skills. The skills listed
                    by your career ("key skills") can have a starting level up to 3.
                    Other skills can start no higher than level 1. You can increase
                    your skill levels during the game (page 30).
                </li>
                <li><strong>Select your starting talent:</strong> When creating your
                    character, you get one talent at the start of the game. Your career
                    offers three talents to choose from. You can learn more
                    talents during the course of the game.
                </li>
                <li><strong>Determine Resolve:</strong> To keep your nerves in check,
                    you need Resolve &ndash; a numerical rating equal to your Wits plus
                    Empathy scores divided by two (round fractions up). Your Resolve
                    can be increased by the Seen It All talent. You use your Resolve
                    score to resist Stress (page 44) and Panic (page 72).
                </li>
                <li><strong>Determine Health:</strong> Even if you keep your nerves
                    in check, chances are that sooner or later you're going to get hurt.
                    This is tracked using your Health score. Health is reduced by taking
                    damage. When your Health is reduced to zero, you're broken and might
                    die &ndash; read more in chapter 4. Your starting maximum Health
                    equals your Strength plus Agility scores divided by two (round
                    fractions up) but can be increased by the Hardened talent.
                </li>
                <li><strong>Personal Stuff:</strong>
                    <ul>
                        <li>Name your character</li>
                        <li>Describe your character's appearance.</li>
                        <li>Pick your character's Personal Agenda. How Personal Agendas
                            work differs between Cinematic and Campaign play (page 27).
                        </li>
                        <li>In Campaign play, pick one other PC to be your buddy, and
                            another to be your rival. In Cinematic play, this is
                            determined by the scenario.
                        </li>
                        <li>In Campaign play, you can select starting gear from the
                            list associated with your career. In Cinematic play, your
                            starting gear is determined by the scenario.
                        </li>
                    </ul>
                </li>
                <li><strong>Signature Item:</strong> In addition to your normal gear,
                    you also have a signature item &ndash; a small item that's of no
                    practical use, but that has sentimental value to you and that says
                    something about your character. Signature items are usually tiny
                    and thus don't contribute to your encumberance. Common examples
                    include a patch, a cap, or a photo of a loved one.
                </li>
            </ol>
        </section>
    )
};
