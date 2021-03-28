/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-03-19
 **/

// import style from './style.scss';
import './app/app.module.js';


var abc=import('jquery')
abc.then(function (RS) {
    console.log(RS);
    window.$ = window.jQuery=RS.default;
})

// var html='<style>'+ style +'</style>';
// $("head").append(html);
