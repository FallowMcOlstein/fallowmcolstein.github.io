function vraag(vraagnummer) {
    let ele = document.getElementsByName('vraag-'+vraagnummer);
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            var finalAnswer = ele[i].value
    }
    return finalAnswer
}