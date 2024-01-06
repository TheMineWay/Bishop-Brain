import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Translation } from "../../../i18n/translation.enum";

export default function Navbar() {
  const { t } = useTranslation([Translation.LAYOUT]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextNavbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={
            isMenuOpen
              ? t("navbar.actions.Close-menu")
              : t("navbar.actions.Open-menu")
          }
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
    </NextNavbar>
  );
}
