import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";

const ModuleList = (
    {
        myModules = [],
        createModule = () => alert("Create Module"),
        deleteModule,
        updateModule
    }) =>
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <li className="list-group-item">
                        {/*<a href="#">{module.title}</a>*/}
                        <EditableItem
                            updateItem={updateModule}
                            deleteItem={deleteModule}
                            item={module}/>
                    </li>
                )
            }
            <li className="list-group-item">
                <i onClick={createModule} className="fas fa-plus fa-2x btn"></i>
            </li>
        </ul>
    </div>

//read data from reducer
const stpm = (state) =>{
    return {
        myModules: state.moduleReducer.modules
    }
}

//send data to the reducer
const dtpm = (dispatch) => {
    return {
        createModule: () => dispatch({type: "CREATE_MODULE"}),
        deleteModule: (item) => dispatch({
            type: "DELETE_MODULE",
            moduleToDelete: item
        }),
        updateModule: (module) => dispatch({
            type:"UPDATE_MODULE",
            module
        })

    }
}

export default connect(stpm, dtpm)(ModuleList);