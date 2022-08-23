import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const Spinner = () => {
  let [loading, setLoading] = useState(true);

  
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#00D7FF",
};
  
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ClipLoader color={"#00D7FF"} loading={loading} cssOverride={override} size={150} />
    </div>
  )
}
export default Spinner
