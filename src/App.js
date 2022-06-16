import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/atoms/molecules/Searchinput";
import { UserCard } from "./components/organisms/UserCard";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import "./styles.css";
import { Router } from "./router/Router";

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/Mv9hjnEUHR4",
  email: "12345@ex.jp",
  phone: "000-0000-0000",
  company: {
    name: "nikonikoCompany"
  },
  website: "http://aaaa.jp"
};

export default function App() {
  return <Router />;
}
