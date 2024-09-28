// Third-party dependencies
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiCoffee,
  FiInstagram,
} from "react-icons/fi";
import { Link } from "@nextui-org/link";

// Current project dependencies
import ThemeSwitch from "@/components/ThemeSwitch";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer>
      <NextUINavbar className="border-t border-divider" maxWidth="xl">
        <NavbarContent
          className="sm:flex basis-1/5 sm:basis-full"
          justify="start"
        >
          <NavbarItem className="flex gap-3">
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <FiTwitter
                className="text-default-500 hover:text-gray-400 dark:hover:text-white"
                size={22}
              />
            </Link>

            <Link
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <FiInstagram
                className="text-default-500 hover:text-gray-400 dark:hover:text-white"
                size={22}
              />
            </Link>

            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <FiGithub
                className="text-default-500 hover:text-gray-400 dark:hover:text-white"
                size={22}
              />
            </Link>

            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedin}
            >
              <FiLinkedin
                className="text-default-500 hover:text-gray-400 dark:hover:text-white"
                size={22}
              />
            </Link>

            <Link
              isExternal
              aria-label="Buy me a coffee"
              href={siteConfig.links.coffee}
            >
              <FiCoffee
                className="text-default-500 hover:text-gray-400 dark:hover:text-white"
                size={22}
              />
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent
          className="sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <ThemeSwitch />
        </NavbarContent>
      </NextUINavbar>
    </footer>
  );
};

export default Footer;
