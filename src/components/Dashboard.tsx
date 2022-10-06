import { DashboardProps } from "../types/DashboardComponentTypes";
import { SignUp } from "./Signup";

export const Dashboard = (props: DashboardProps) => {

  const { isDashboard } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h2> Welcome to Dashboard !</h2>
      </header>
      <SignUp />
    </div>
  );
}