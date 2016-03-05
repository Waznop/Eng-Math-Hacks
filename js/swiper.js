var toDel = [];

Sortable.create(editable, {
    filter: ".js-remove",
    onFilter: function (evt) {
        var item = evt.item;
        ctrl = evt.target;
        if (Sortable.utils.is(ctrl, ".js-remove")) {
            item.parentNode.removeChild(item);
            toDel.push(item.id);
        }
    }
});

