var select_array=document.getElementsByTagName('select');
var content=document.getElementById('content_box');
function dropdownStyles(){

    var style = this.id;
    var value = this.value;
    content.style[style] = value;
    
}

for( var i = 0; i < select_array.length; i++ )
{
    select_array[i].addEventListener( 'change', dropdownStyles );
    
}