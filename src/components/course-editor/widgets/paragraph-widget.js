import React, {useState} from 'react';
import TypeChange from "./type-change";

const ParagraphWidget = (
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
                    <textarea value={cachedWidget.text} className="form-control"
                              onChange={e => setCachedWidget({
                                  ...cachedWidget,
                                  text: e.target.value
                              })}
                                >
                    </textarea>

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
                <p>
                    <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn btn-sm float-right"/>
                    {widget.text}
                </p>
            }
        </div>
    )
}

export default ParagraphWidget