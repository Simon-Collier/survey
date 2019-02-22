
var slideCol = document.getElementById("myRange");
var y = document.getElementById("f");
y.innerHTML = slideCol.value;

slideCol.oninput = function() {
    y.innerHTML = this.value;
}

$('#btn').click(function() {
    var checked = $("#div1 :radio:checked");
    var groups = [];
    $("#div1 :radio").each(function() {
        if (groups.indexOf(this.name) < 0) {
            groups.push(this.name);
        }
    });
    if (groups.length == checked.length) {
        location.href='thankyou.html';
    }
    else {
        var total = groups.length - checked.length;
        alert(total + ' Item(s) are not answered');
    }
});

$('#btn2').click(function(){
    alert('Username and password do not match')
})

$('#btn3').click(function(){
    alert('Username and password do not match')
})

$('#btn4').click(function(){
    alert('Username and password do not match')
})

