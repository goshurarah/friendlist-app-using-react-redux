import { ACCEPT_NAME, REJECT_NAME, BLOCK_NAME, UNDO } from "../constants";

const acceptFunc = (acceptData) => {
    return {
        type: ACCEPT_NAME,
        data: acceptData,
    };
};
const rejectFunc = (rejectData) => {
    return {
        type: REJECT_NAME,
        data: rejectData,
    };
};
const blockFunc = (blockData) => {
    return {
        type: BLOCK_NAME,
        data: blockData,
    };
};
const undoFunc = (undoData) => {
    return {
        type: UNDO,
        data: undoData,
    };
};
export default acceptFunc;
export { rejectFunc, blockFunc, undoFunc };
