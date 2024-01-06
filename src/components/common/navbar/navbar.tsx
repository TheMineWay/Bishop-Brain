import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Chip,
} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Translation } from "../../../i18n/translation.enum";
import logo from "@assets/brand/logo.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/routes";
import { FaGithub } from "react-icons/fa";
import pj from "@src/../package.json";
import styles from "./navbar.module.pcss";

export default function Navbar() {
  const { t } = useTranslation([Translation.LAYOUT]);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { label: string; onClick: () => void }[] = [
    {
      label: t("navbar.items.home.Label"),
      onClick: () => navigate(routes.HOME()),
    },
    {
      label: t("navbar.items.info.Label"),
      onClick: () => navigate(routes.ABOUT()),
    },
  ];

  return (
    <NextNavbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={
            isMenuOpen
              ? t("navbar.actions.Close-menu")
              : t("navbar.actions.Open-menu")
          }
        />
        <NavbarBrand>
          <img alt="Logo" src={logo} className={styles.logo} />
          <Chip>{pj.version}</Chip>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(({ label, onClick }, i) => (
          <NavbarItem key={i}>
            <Button onClick={onClick} variant="light">
              {label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onClick={() => window.open(pj.repository, "_blank")}
            isIconOnly
            variant="flat"
          >
            <FaGithub />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ label, onClick }, i) => (
          <NavbarMenuItem key={i}>
            <Button onClick={onClick} variant="light">
              {label}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
}
