import React from "react";

const Tick = (props) => {
  return (
    <form>
      <input type="checkbox" checked={props.value} />
    </form>
  );
};
export default Tick;
