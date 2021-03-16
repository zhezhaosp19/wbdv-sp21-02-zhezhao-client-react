import React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = () => {
    // TODO: move state management to widgets-reducer
    const [widgets, setWidgets] = useState([]);
    const {topicId} = useParams()
    useEffect(() => {
        // TODO: move server communication to widgets-service
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])

    const createWidgetForTopic = () => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
            headers: {
                'content-type': 'application/json'
            }

        }).then(response => response.json())
            .then(actualWidget => {
            setWidgets(widgets => ([...widgets, actualWidget]))
        })
    }
    return(
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"/>
            <h2>Widget List ({widgets.length})</h2>
            <ul className="list-group">
                {
                    widgets.map(widgets =>
                        <li className="list-group-item" key={widgets.id}>
                            {
                                widgets.type === "HEADING" &&
                                <HeadingWidget widget={widgets}/>
                            }
                            {
                                widgets.type === "PARAGRAPH" &&
                                <ParagraphWidget widget={widgets}/>
                            }
                        </li>
                    )

                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}

export default WidgetList