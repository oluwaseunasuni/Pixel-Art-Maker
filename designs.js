// Select color input
// Select size input

var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (e) { 
    e.preventDefault();
    height = $('#inputHeight').val(); 
    width = $('#inputWidth').val(); 
    makeGrid(height, width);
});

function makeGrid(x, y) {

    // Your code goes here!
    $('tr').remove();//clears existing content of the table
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id =table' + i + '></tr>');//adds row(s) to the pixel canvas
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');//adds columns to the rows created in the pixel canvas
        }

    }

    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        /*
        if clicked cell is styled, clear.
        else, style the cell with color picked with the color picker
         */
        if ($(this).attr('style')) {
            $(this).removeAttr('style')            
        } else {
            $(this).attr('style', 'background-Color:' + color);
            
        }
        
    });
}
