/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-03-19
 **/



import app from "./app.component.html";
import style from './app.component.scss';

$("app-root").replaceWith(app);

// $("app-root").replaceWith('<div id="app">'+app+'</div>');
// var html='<style>'+ style +'</style>';
// $("#app").append(html);

$("#dashboard-link").click(function () {
    $("#dashboard").css("display","block");
    $("#manage-customers").css("display","none");
    $("#manage-items").css("display","none");
    $("#place-orders").css("display","none");
    $("#search-orders").css("display","none");
});
$("#manage-customers-link").click(function () {
    $("#dashboard").css("display","none");
    $("#manage-customers").css("display","block");
    $("#manage-items").css("display","none");
    $("#place-orders").css("display","none");
    $("#search-orders").css("display","none");
});
$("#manage-items-link").click(function () {
    $("#dashboard").css("display","none");
    $("#manage-customers").css("display","none");
    $("#manage-items").css("display","block");
    $("#place-orders").css("display","none");
    $("#search-orders").css("display","none");
});
$("#place-orders-link").click(function () {
    $("#dashboard").css("display","none");
    $("#manage-customers").css("display","none");
    $("#manage-items").css("display","none");
    $("#place-orders").css("display","block");
    $("#search-orders").css("display","none");
});
$("#search-orders-link").click(function () {
    $("#dashboard").css("display","none");
    $("#manage-customers").css("display","none");
    $("#manage-items").css("display","none");
    $("#place-orders").css("display","none");
    $("#search-orders").css("display","block");
});

// $("#manage-customers-link").click(function () {
//     $("#dashboard").css("display","none");
//     $("#manage-customers").css("display","block");
// });
