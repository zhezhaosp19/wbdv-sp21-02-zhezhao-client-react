import React, {useState} from 'react';

const EditableItem = (
    {
        item= {title: "Some Title", _id:"ABC"},
        deleteItem,
        updateItem
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)


    return (
        <>
            {
                !editing &&
                <>
                    <a className="nav-link" href="#">
                        {item.title}
                    </a>

                    <i onClick={() => setEditing(true)} className="fas fa-edit btn btn-sm"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(event) =>
                            setCachedItem({
                                ...cachedItem,
                                title: event.target.value
                            })}
                        value={cachedItem.title}
                    />

                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check btn btn-sm"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times btn btn-sm"></i>
                </>
            }

        </>
    )
};

export default EditableItem;
