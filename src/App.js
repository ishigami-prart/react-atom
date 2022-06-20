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
  return (
    <>
      <div>aaaaaaaa</div>
      <Router />
    </>
  );
}
