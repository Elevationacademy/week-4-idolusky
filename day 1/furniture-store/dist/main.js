
$("#search-but").on("click", function () {
    input = $("#search").val()
    $.get(`/priceCheck/${input}`, function (data) {
        $("#result").append(`<div>price :${data.price}</div>`)
    })
    $("input").val("") //clearing the input after :)
})

$("#buy-but").on("click", function () {
    $("#purchased").empty()
    const input = $("#buy").val()
    $.get(`/buy/${input}`, function (data) {
        $("#purchased").append(`<div>${data}</div>`)
    })
    $("#buy").val("")
})