import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreateors from "./../store/action-craetors"


export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(ActionCreateors, dispatch)
}
