// Select color input
// Select size input

var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (e) { 
    e.preventDefault();
    height = $('#inputHeight').val(); 
    width = $('#inputWidth').val(); 
    makeGrid(height, width);
    console.log('Height: ' + height + ' and width: ' + width);
});

function makeGrid(x, y) {

    // Your code goes here!
    $('tr').remove();//clears existing table
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id =table' + i + '></tr>');//adds row to the pixel canvas
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');//adds columns to the rows created in the pixel canvas
        }

    }
}
