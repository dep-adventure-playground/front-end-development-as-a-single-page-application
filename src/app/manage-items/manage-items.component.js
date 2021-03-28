/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-03-19
 **/

import manageItems from './manage-items.component.html';
import style from './manage-items.component.scss';


$("app-manage-items").replaceWith('<div id="manage-items">'+manageItems+'</div>');
var html='<style>'+ style +'</style>';
$("#manage-items").append(html);
