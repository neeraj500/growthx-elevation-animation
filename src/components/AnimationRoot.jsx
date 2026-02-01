// AnimationRoot.jsx
import { useState } from "react";
import LogoSVG from "../animation/LogoSVG";

export default function AnimationRoot() {
  const [playKey, setPlayKey] = useState(0);

  const replay = () => {
    setPlayKey((prev) => prev + 1);
  };

  return (
    <div className="stage">
      <div key={playKey} className="animation-instance playing">
        <LogoSVG />
      </div>

      <button className="replay-btn" onClick={replay}>
        REPLAY ANIMATION
      </button>
    </div>
  );
}
