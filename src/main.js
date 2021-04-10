/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-03-19
 **/

// import style from './style.scss';
import './app/app.module.js';

import '../node_modules/admin-lte/dist/js/pages/dashboard.js';
import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js';
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
import '../node_modules/admin-lte/dist/js/demo.js';


import style from './style.scss';
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';

var html = '<style>' + style + '</style>';
$("head").append(html);


var abc=import('jquery')
abc.then(function (RS) {
    console.log(RS);
    window.$ = window.jQuery=RS.default;
})

// var html='<style>'+ style +'</style>';
// $("head").append(html);
