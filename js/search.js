function search(){
    var input=document.getElementById('sea').value.toLowerCase().trim();

    var parts={
        'cakes':'cake.html',
        'snacks':'snack.html',
        'gifts':'gift.html',
        'birthdaycakes':'cake.html#birthdaycake',
        'weddingcakes':'cake.html#weddingcake',
        'pinatacakes':'cake.html#pinatacake'
    }

    if(parts[input]){
        window.location.href=parts[input];
    }
    else{
        alert('Not Found');
    }
}