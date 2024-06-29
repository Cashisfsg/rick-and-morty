import { NavLink } from "react-router-dom";

import { Account } from "@/assets/icons";
import { Games } from "@/assets/icons";
import { Quests } from "@/assets/icons";
import { Referral } from "@/assets/icons";

import styles from "./index.module.css";

const links = [
    {
        url: "/root/app/account",
        icon: Account,
        title: "Account",
    },
    {
        url: "/root/app/game",
        icon: Games,
        title: "Games",
    },
    {
        url: "/root/app/quest",
        icon: Quests,
        title: "Quests",
    },
    {
        url: "/root/app/referral",
        icon: Referral,
        title: "Referral",
    },
];

export const NavigationMenu = () => {
    return (
        <nav className="w-full bg-image">
            <ul
                role="menubar"
                className={`${styles.menu} bg-green border-green shadow-green`}
            >
                {links.map((link) => (
                    <li key={link.url} role="none">
                        <NavLink
                            to={link.url}
                            className={`${styles["menu-item"]} text-shadow-green font-tertiary`}
                        >
                            <link.icon height={32} width={32} />
                            <span className="text-shadow-green font-tertiary">
                                {link.title}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
