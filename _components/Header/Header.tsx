import { Logo } from "../UI";
import Loginbar from "./subcomponents/Loginbar/Loginbar";

export function Header() {
  return (
    <header>
      <Logo />
      <Loginbar />
    </header>
  );
}
