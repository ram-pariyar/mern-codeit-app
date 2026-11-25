import React from "react";
import Spinner from "../components/Spinner";

function loading() {
  return (
    <div className="p-24 flex justify-center items-center">
      <Spinner />
    </div>
  );
}

export default loading;
