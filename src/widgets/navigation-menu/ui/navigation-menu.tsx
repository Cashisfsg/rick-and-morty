import { NavLink } from "react-router-dom";

import { Account } from "@/assets/icons";
import { Games } from "@/assets/icons";
import { Quests } from "@/assets/icons";
import { Referral } from "@/assets/icons";

import Navigation from "./index.module.css";

const links = [
    {
        url: "/",
        icon: Account,
        title: "Account",
    },
    {
        url: "/",
        icon: Games,
        title: "Games",
    },
    {
        url: "/quest",
        icon: Quests,
        title: "Quests",
    },
    {
        url: "/referral",
        icon: Referral,
        title: "Referral",
    },
];

export const NavigationMenu = () => {
    return (
        <nav className="w-full content-wrapper">
            <ul
                role="menubar"
                className={`${Navigation.menu} bg-green border-green shadow-green`}
            >
                {links.map((link) => (
                    <li key={link.url} role="none">
                        <NavLink
                            to={link.url}
                            className={`${Navigation["menu-item"]} text-shadow-green font-tertiary`}
                        >
                            <link.icon />
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
