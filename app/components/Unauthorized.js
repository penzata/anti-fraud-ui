import React from "react";
import Page from "./Page";

function Unauthorized() {
  return (
    <Page title="Unauthorized">
      <div className="maincontainer">
        <h2 className="text-center">You are not authorized to access this endpoint.</h2>
      </div>
    </Page>
  );
}
export default Unauthorized;
