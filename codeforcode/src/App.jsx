import ChallengePanel from "./components/ChallengePanel";
import WebSocketListener from "./components/WebSocketListener";

export default function App() {
  return (
    <div>
      <h1>⚔️ CodeForCode</h1>
      <WebSocketListener />
      <ChallengePanel />
    </div>
  );
}