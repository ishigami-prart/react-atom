import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/atoms/molecules/Searchinput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト2</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
