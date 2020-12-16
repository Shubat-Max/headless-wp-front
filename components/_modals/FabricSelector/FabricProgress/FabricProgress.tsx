import * as React from "react"

const FabricProgress = React.forwardRef((props, ref) => {

  console.log('---', ref);

  return (
    <div>
      прогресс
    </div>
  );
})

export default FabricProgress;