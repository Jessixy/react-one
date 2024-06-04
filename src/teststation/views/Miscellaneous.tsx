import { Tooltip } from "react-tooltip";
import { CustomTooltip } from "../components/tooltip/Tooltip";

const Miscellaneous = () => {
  return (
    <div>
      <h1>Miscellaneous</h1>
      <div>
        <h3>Tooltip</h3>
        <a id="my-anchor-element">❓</a>
        <Tooltip anchorSelect="#my-anchor-element" content="Hello world!" />
        <hr />
        <CustomTooltip text="Custom Tooltip">Custom Tooltip</CustomTooltip>
      </div>
    </div>
  );
};

export default Miscellaneous;
