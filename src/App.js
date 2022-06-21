import "./styles.css";
import { RouterComponent } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <RouterComponent />
      </UserProvider>
    </RecoilRoot>
  );
}
