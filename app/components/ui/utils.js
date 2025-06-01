import React from "react";
import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

function Spinner() {
  return (
    <>
      <BeatLoader
        color={"green"}
        loading={true}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export { Spinner };
