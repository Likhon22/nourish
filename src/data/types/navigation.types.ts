/**
 * Navigation Type Definitions
 * Types for navbar, megamenu, and navigation links
 */

export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuData {
  headline: string;
  subtext: string;
  image: string;
  links: MegaMenuLink[];
}

export interface NavLink {
  label: string;
  href: string;
  megaMenu?: MegaMenuData;
}
