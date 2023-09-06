import { html, createOrderHtml, updateDraggingHtml, moveToColumn} from './view.js';
import { TABLES, COLUMNS, state, createOrderData, updateDragging} from './data.js';

/**
 * A handler that fires when a user clicks on the help button,
 * An overlay (dialog) will be displayed on the screen which explains how the user can use the app
 * and then the user can close the dialog when they are done working through the instructions
 * @param {Event} event
 */
const handleHelpToggle = (event) => {
    const {help: {overlay, cancel}} = html;
    const {other: {add}} = html;
    overlay.showModal();
    cancel.addEventListener('click', function(){
        overlay.close();
        add.focus();
    }) 
}

/**
 * A handler that fires when the add button is clicked,
 * This allows the user to place/ type the order on the screen and
 * cancel  or close the dialog if they decided not to order anymore
 * @param {Event} event
 */
const handleAddToggle = (event) => {
    const {add: {overlay, form, cancel}} = html;
    overlay.show();
    cancel.addEventListener('click', function(){
        overlay.close();
        form.reset()   
    })
}

/**
 * A handler that fires when a user submits an order,
 * a new order is created based on the user's input and the added directly to the ordered column
 * and then the dialog or overlay is closed.
 * @param {Event} event
 */
function handleAddSubmit (event) {
    event.preventDefault();
    const {columns:{ordered},
           add: {overlay, form, title, table},
           other : {add}} = html;
    const newOrder = createOrderData({
        title: title.value,
        table: table.value,
        column: 'ordered',
    });
    ordered.appendChild(createOrderHtml(newOrder));
    form.reset();
    overlay.close();
    add.focus();
}

/**
 * A handler that fires when a user click on a specific order.
 * this allows the user to edit certain orders 
 * this also allows the user to abort editing if they want to by clicking the cancel button
 * @param {Event} event
 */
const handleEditToggle = (event) => {
    const { edit: { overlay, cancel, title: titleEdit, table: tableEdit, id: idEdit, column: columnEdit},
            other: {add} } = html;    
    const orderElement = event.target.closest('.order');
    const orderId = orderElement.dataset.id;
    if (!orderElement){
        return;
    }
    
    const title = orderElement.querySelector('.order__title').textContent;
    const table = orderElement.querySelector('.order__value[data-order-table]').textContent;

    titleEdit.value = title;
    tableEdit.value = table;
    idEdit.value = orderId;
    overlay.showModal();
    cancel.addEventListener('click', function() {
        overlay.close();
        add.focus();
    });
}

/**
 * A handler that fires when a user submit the edited order
 * a new edited order is created using createOrderData and createOrderHtml functions,
 * and the edited order is moved or appended to its respective column
 */
const handleEditSubmit = (event) => {
    event.preventDefault();
    const { columns: {ordered, preparing, served},
            edit: { overlay, form, title, table, id, column },
            other: {add} } = html;
    const orderId = id.value;
    console.log(orderId)
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    const newOrder = createOrderData({
        title: title.value,
        table: table.value,
        column: column.value,
    });
    if (column.value === 'ordered'){
        ordered.appendChild(createOrderHtml(newOrder));
    }
    if (column.value === 'preparing' ){
        preparing.appendChild(createOrderHtml(newOrder))
    }
    if (column.value === 'served') {
        served.appendChild(createOrderHtml(newOrder));
    }
    form.reset();
    overlay.close();
    orderElement.remove();
    add.focus();
}

/**
 * A handler that fires when the edit order overlay is opened and the user wants to remove/ delete the order
 * the HTML element that contains the order is removed and the overlay is then closed
 * @param {Events} event
 */
const handleDelete = (event) => {
    const { edit: {overlay, id}} = html;
    const {other: {add}} = html;
    const orderId = id.value;
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    orderElement.remove();
    overlay.close();
    add.focus();
}

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and
 * the HTML is updated to reflect the new column.
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null
    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }
    if (!column) return;
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}
/**
 * A handler that fires when an order is dragged,
 * this handler gets the order Id of the order being dragged and
 * transfer the order Id to updateDragging function
 * @param {Event} event
 */
const handleDragStart = (event) => {
    const orderId = event.target.dataset.id;
    event.dataTransfer.setData('text/plain', orderId);
    draggedOrderId = orderId;
    updateDragging({ source: draggedOrderId });
}

/**
 * An event that fires when dragging ends, 
 * the handler resets the draggedOrderId to null and resets updateDragging function
 * @param {Event} event
 */
const handleDragEnd = (event) => {
    draggedOrderId = null;
    updateDragging({});
}

/**
 * An event that fires when an order is dropped on a specific column
 * This takes desired column from state.dragging
 * The moveToColumn function takes the order Id and drops the order on the desired column
 * @param {Event} event 
 */
const handleDrop = (event) => {
    event.preventDefault();
    const orderId = event.dataTransfer.getData('text/plain');
    const newColumn = state.dragging.over;
    moveToColumn(orderId, newColumn);
};

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

const columns = document.querySelectorAll('.grid__column');
columns.forEach((column) => {
    column.addEventListener('drop', handleDrop);
});

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}