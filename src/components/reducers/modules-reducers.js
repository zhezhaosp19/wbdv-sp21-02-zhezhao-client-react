const initialState = {
    modules: [
        // {_id: 123, title: "Modules 123"},
        // {_id: 234, title: "Modules 234"},
        // {_id: 345, title: "Modules 345"}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "CREATE_MODULE":
            const newState = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
            return newState
        case "DELETE_MODULE":
            alert("Do you really want to delete " + action.moduleToDelete.title + " ?")
            const newState1 = {
                modules: state.modules.filter(module => module._id !== action.moduleToDelete._id
                )
            }
            return newState1
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if(m._id === action.module._id) {
                        return action.module
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}

export default moduleReducer;