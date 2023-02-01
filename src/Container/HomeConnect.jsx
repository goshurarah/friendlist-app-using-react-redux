import { connect } from "react-redux";
import acceptFunc, { rejectFunc, blockFunc, undoFunc } from '../Services/Actions/action.js'

import Home from "../Components/Home.jsx";
import AcceptList from '../Components/AcceptList.jsx'
import RejectList from '../Components/RejectList.jsx'
import BlockList from '../Components/BlockList.jsx'

const mapState = (state) => (
    {
        Data: state.personStatus.Name,
    }
)

const mapDispatch = (dispatch) => (
    {
        acceptFuncHandler: (acceptData) => dispatch(acceptFunc(acceptData)),
        rejectFuncHandler: (rejectData) => dispatch(rejectFunc(rejectData)),
        blockFuncHandler: (blockData) => dispatch(blockFunc(blockData)),
        undoFuncHandler: (undoData) => dispatch(undoFunc(undoData)),

    }
)

export default connect(mapState, mapDispatch)(Home)
export const ConnectAcceptList = connect(mapState, mapDispatch)(AcceptList)
export const ConnectRejectList = connect(mapState, mapDispatch)(RejectList)
export const ConnectBlockList = connect(mapState, mapDispatch)(BlockList)