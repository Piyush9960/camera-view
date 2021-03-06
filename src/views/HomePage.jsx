import React from "react";
import LatestSnapshot from "components/LatestSnapshot";
import SnapshotsTable from "components/SnapshotsTable";
import Upload from "components/Upload";
const HomePage = () => {
  return (
    <div>
      <LatestSnapshot animDuration={5} />
      <SnapshotsTable />
      <Upload />
    </div>
  );
};

export default HomePage;
