/**
 * Importing functions from view.js and data.js 
 */

//import {TABLES, COLUMNS, state} from './data.js';
import {html} from './view.js';
import {createOrderHtml} from './view.js';
import {createTableOptionsHtml} from './view.js';
import {updateDraggingHtml} from './view.js';
import {moveToColumn} from './view.js';
import {createOrderData} from './data.js';
import {createUniqueId} from './data.js';

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
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

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

// const handleDragStart = (event) => {
//     const orderId = event.target.dataset.id;
//     event.dataTransfer.setData('text/plain', orderId);
//     updateDragging({ source: orderId });
// }

// const handleDragEnd = (event) => {
//     updateDragging({ source: null });
//     updateDraggingHtml({});
// }


const handleHelpToggle = (event) => {
    const {help: {overlay, cancel}} = html;
    overlay.style.display = 'block';
    cancel.addEventListener('click', function(){
        overlay.style.display = 'none';
    })   
}

const handleAddToggle = (event) => {
    const {add: {overlay, form, cancel, title, table}} = html;
    const {other: add} = html;
    const {help: {overlay: overlay1}} = html;
    const addButton = document.querySelector('.button_primary');
    overlay.style.display = 'block';
    cancel.addEventListener('click', function(){
        overlay.style.display = 'none';
        title.value = '';
        table.value = '';
    })
}

 const handleAddSubmit = (event) => {
    event.preventDefault();
    const {columns:{ordered},
           add: {overlay, form, title, table}} = html;
    const newOrder = createOrderHtml(createOrderData({
        title: title.value,
        table: table.value,
        column: 'ordered',
    }));
    ordered.appendChild(newOrder);
    form.reset();
    overlay.style.display = '';
}
// const handleEditToggle = (event) => {
//     const { edit: { overlay, cancel } } = html;
//     const orderId = event.target.closest('.order').dataset.id;
//     const order = state.orders[orderId];

//     html.edit.title.value = order.title;
//     html.edit.table.value = order.table;
//     html.edit.id.value = order.id;
//     html.edit.column.value = order.column;
//     overlay.showModal();
//     cancel.addEventListener('click', function() {
//         overlay.close();
//     });
// }
const handleEditSubmit = (event) => {

}
const handleDelete = (event) => {

}

//html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)
html.other.grid.addEventListener('click', handleEditToggle)
// html.other.grid.addEventListener('click', function(event) {
//     if (event.target.closest('.order')) {
//         handleEditToggle(event); // Delegate click to edit handler if clicked on an order
//     }
// });
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}   