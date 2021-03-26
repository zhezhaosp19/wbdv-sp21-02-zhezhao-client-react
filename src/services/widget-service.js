const API_URL = "http://localhost:8080/api";
// const API_URL = "https://wbdv-sp21-server-java-zhezhao.herokuapp.com/api";

export const findAllWidgets = () =>
    fetch(`${API_URL}/widgets`)
        .then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    fetch(`${API_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())


export const createWidget = (topicId, widget) =>
    fetch(`${API_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const updateWidget = (widgetId, widget) =>
    fetch(`${API_URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${API_URL}/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())


export default {
    findAllWidgets,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget
}