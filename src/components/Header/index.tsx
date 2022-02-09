import { useHistory } from "react-router-dom";
import logoImage from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  const history = useHistory();
  return (
    <HeaderContainer onClick={() => history.push("/")}>
      <img src={logoImage} alt="logo" />
    </HeaderContainer>
  );
}
