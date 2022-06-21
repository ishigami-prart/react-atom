import "./styles.css";
import { RouterComponent } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <RouterComponent />
    </UserProvider>
  );
}
