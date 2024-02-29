$(document).ready(function() {
    
    $('#add').click(function() {
        $('form').slideToggle(500)

    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        
        const addTask = $('#add-item').val()
        const listItem = $('<li></li>').text(addTask)
        $('ul').append(listItem)      
        $('#add-item').val('')
    
    })
    
 
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('line')
    })
    
})



//if ($(this).prop('style')['text-decoration']=='line-through') {
    
//    $(this).css('text-decoration', 'none')
//} else {
//    $(this).css('text-decoration', 'line-through')
//}
// 