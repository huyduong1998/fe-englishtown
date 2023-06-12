export interface NavbarType {
  id: string;
  title: string;
  prefix: string;
  url?: string;
  children?: Required<NavbarType[]>;
}
