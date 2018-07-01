//assigns the color picker and pixel canvas ids to constants
const color = $('#colorPicker');
const table = $("#pixelCanvas");

//when a box is clicked this adds colour
table.on('click', 'td', function () {
    $(this).css('background-color', color.val());
});

//clears a box on the grid when clicked twice
table.on('dblclick', 'td', function () {
    $(this).css('background-color', '#ffffff');
});

//prevents default actions
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    // When size is submitted by the user, call makeGrid()
    makeGrid();
    
});

// clears grid by clicking on submit button
function makeGrid() {
    table.children().remove();
    
// this gets the values of the height and the Width and assigns a value to it
    let row = $('#inputHeight').val();
    let col = $('#inputWeight').val();

    for (var i = 1; i <= row; i++) {
        table.append('<tr></tr>');
        for (var j = 1; j <= col; j++) {
            table.children().last().append("<td></td>");
        }
    }
}
