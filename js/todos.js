let todos = ["Kupiti ...", "Prodati ...", "Popraviti ..."];

for (let i = 0; i < todos.length; i++) {
    $("ul").append('<li><span>X</span> ' + todos[i] + '</li>');
};

$("li").on("click", function () {
    $(this).toggleClass("done");
});

$("li span").on("click", function () {
    let index = $(this).parent().index();
    $(this).parent().remove();
    todos.splice(index, 1);
});