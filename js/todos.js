let todos = [];

for (let i = 0; i < todos.length; i++) {
    $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todos[i] + '</li>');
};

$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function (event) {
    let index = $(this).parent().index();
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
        todos.splice(index, 1);
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // očitaj input
        let todoText = $(this).val();
        // očisti input
        $(this).val("");
        // dodati todo u html  listu
        $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');
        
        // upiši u niz todos
        todos.push(todoText);
        
    }
});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});
