import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type SectionContainerProps = {
  className: string;
  children: any;
};

export type ButtonProps = {
  icon: IconProp;
  className: string;
  literal: any;
  title: string,
  href: string,
};

export type MenuListProps = {
  href: string,
  label: string,
  Icon: IconDefinition | string,
}

export type SearchCardsProps = {
  name: string;
  color: string;
  image: string;
}