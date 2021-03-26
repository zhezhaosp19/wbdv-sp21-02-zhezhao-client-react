import React, {useState} from 'react';
import TypeChange from "./type-change";

const ImageWidget = (
    {
        widget,
        editing,
        updateWidget,
        deleteWidget,
        setWidget
    }) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <div>
            {
                editing &&
                <>
                    <TypeChange widget={cachedWidget}
                                setWidget={setCachedWidget}/>
                    <br/>
                    <label>Image URL</label>
                    <input type="text" value={cachedWidget.src} className="form-control image-input"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               src: e.target.value
                           })}/>
                    <label>Image Width</label>
                    <input type="text" value={cachedWidget.width} className="form-control image-input"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               width: e.target.value
                           })}/>
                    <label>Image Height</label>
                    <input type="text" value={cachedWidget.height} className="form-control image-input"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               height: e.target.value
                           })}/>
                    <i onClick={() => deleteWidget(cachedWidget.id)}
                       className="fas fa-trash btn btn-sm float-right"/>
                    <i onClick={() => {
                        updateWidget(cachedWidget.id, cachedWidget)
                        setWidget({})
                    }}
                       className="fas fa-check btn btn-sm float-right"/>

                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn btn-sm float-right"/>
                    <img width={widget.width} height={widget.height} src={widget.src}/>


                </>
            }
        </div>
    )
}

export default ImageWidget;