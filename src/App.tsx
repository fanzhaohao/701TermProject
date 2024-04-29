// ParentPage.tsx
import React from "react";

import AnimalYearComponent from "../src/components/AnimalYearComponent";

const ParentPage: React.FC = () => {
  return (
    <div>
      {/* Title */}
      <h1>Chinese Zpdiac</h1>

      <AnimalYearComponent />
    </div>
  );
};

export default ParentPage;
