(function () {
    angular
        .module("WebAppMaker")
        .service("widgetService", WidgetService);

    function WidgetService() {

        this.createWidget = createWidget;
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.findWidgetById = findWidgetById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        var widgets = [
            {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"
            },
            {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E"
            },
            {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        function createWidget(pageId, widget) {
            widget._id = (new Date()).getTime() + "";
            widget.pageId = pageId;
            widgets.push(widget);
        }

        function findWidgetsByPageId(pageId) {
            var result = [];
            for (var i in widgets) {
                if (widgets[i].pageId === pageId) {
                    result.push(widgets[i]);
                }
            }
            return result;
        }

        function findWidgetById(widgetId) {
            var widget = widgets.find(function (widget) {
                return widget._id === widgetId;
            });
            if (widget !== 'undefined') {
                return angular.copy(widget);
            }
            return null;
        }

        function updateWidget(widgetId, widget) {
            for (var i in widgets) {
                if (widgets[i]._id === widgetId) {
                    widgets[i] = widget;
                }
            }
        }

        function deleteWidget(widgetId) {
            var oldWidget = widgets.find(function (widget) {
                return widget._id === widgetId;
            });
            var index = widgets.indexOf(oldWidget);
            widgets.splice(index, 1);
        }
    }
})();
