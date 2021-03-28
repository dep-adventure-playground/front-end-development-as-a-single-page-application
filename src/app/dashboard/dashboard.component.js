/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-03-19
 **/

import dashboard from "./dashboard.component.html";
import style from "./dashboard.component.scss";

$("app-dashboard").replaceWith('<div id="dashboard">'+dashboard+'</div>');
var html='<style>'+ style +'</style>';
$("#dashboard").append(html);
