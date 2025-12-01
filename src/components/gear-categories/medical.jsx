export const MedicalSupplies = () => {
    return (
        <ul class={"tablefy"}>
            <li>
                <h4>Personal Medkit</h4>
                <section class={"columns"}>
                    <p>A personal medkit contains what
                        you need to stop bleeding, disinfect
                        a wound and cauterize it, some
                        Pharmax bandages to wrap it up and
                        a stim boost to keep you on your feet.
                        A Medkit is not a permanent solution,
                        it's more of a band aid to keep your
                        guts from spilling out until you reach
                        an AutoDoc.</p>
                    <div>
                        <table>
                            <tr>
                                <td>Weight</td>
                                <td>1/4</td>
                            </tr>
                            <tr>
                                <td>Cost</td>
                                <td>$50</td>
                            </tr>
                            <tr>
                                <td>Special</td>
                                <td>Medical Aid +2 for giving First Aid (single use)</td>
                            </tr>                            
                        </table>
                    </div>
                </section>
            </li>
            <li>
                <h4>Surgical Kit</h4>
                <section class={"columns"}>
                    <p>These nasty-looking instruments
                        can mean life or death &ndash; in either the
                        hands of a surgeon or a killer. While
                        they are intended to save lives, in a
                        pinch they can make for great cutting
                        weapons.</p>
                    <div>
                        <table>
                            <tr>
                                <td>Weight</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Cost</td>
                                <td>$200</td>
                            </tr>
                            <tr>
                                <td>Special</td>
                                <td>Medical Aid +2 for First Aid and surgery on critical injuries, base damage 2 if used as a weapon.</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </li>
            <li>
                <h4>Autodoc</h4>
                <section class={"columns"}>
                    <p>Not everyone can afford a Pauling
                        MedPod, but almost every ship,
                        station, and colony has at least one
                        AutoDoc. Essentially a poor man's
                        version of a Pauling, the AutoDoc
                        is an automated medical treatment
                        device that diagnoses and treats
                        lesser wounds and infections. It is
                        not capable of complicated surgery,
                        but it can reset broken bones.</p>
                    <div>
                        <table>
                            <tr>
                                <td>Weight</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>Cost</td>
                                <td>$500,000</td>
                            </tr>
                            <tr>
                                <td>Special</td>
                                <td>Can give First Aid (but not treat critical injuries that require surgery) with Medical Aid, skill level 8. This roll cannot be pushed.</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </li>
            <li>
                <h4>Pauling Medpod</h4>
                <section class={"columns"}>
                    <p>If you are going to get nearly dead, do
                        it near a Pauling. The answer to space
                        medicine, the Pauling MedPod is an
                        autonomous medical scanner and
                        surgical unit capable of performing
                        bypass surgery. The Pauling MedPod
                        can diagnose and treat infections
                        through concentrated antibiotic
                        injections. It can perform basic
                        wound repair and pre-programmed
                        surgical procedures such as an
                        appendectomy, laparoscopic
                        ablation and cesarean section.
                        All models of the Pauling MedPod
                        feature an airtight operating shield,
                        comfortable limb restraints, a laser
                        scalpel, computer controlled robotic
                        surgical arms, liquid spray anesthetic
                        and vital signs sensors, all mounted
                        on an adjustable titanium base.</p>
                    <div>
                        <table>
                            <tr>
                                <td>Weight</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>Cost</td>
                                <td>$200,000,000</td>
                            </tr>
                            <tr>
                                <td>Special</td>
                                <td>Can give First Aid and perform surgery with Medical Aid skill level 12. This roll cannot be pushed.</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </li>
            <li class={"h3"}>END</li>
        </ul>
    );
};
