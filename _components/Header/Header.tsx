import { Logo } from "../UI";
import { Loginbar, Searchbar } from "./subcomponents";

export function Header() {
  return (
    <header>
      <Logo />
      <Searchbar />
      <Loginbar />
    </header>
  );
}
