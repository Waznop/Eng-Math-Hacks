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

                    function sendSave() {
                        var cur = new Date();
                        var lstOfRems = document.getElementById('editable').childNodes;
                        for (var i = 0; i < lstOfRems.length; i++) {
                            var remDate = stringToDate(lstOfRems[i].idtime);
                            if (remDate <= cur) {
                                toDel.push(lstOfRems[i].id);
                            }
                        }
                        deleteReminders(toDel);
                        location.reload();
                    }