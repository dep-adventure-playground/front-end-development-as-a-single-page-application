/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-03-19
 **/

import manageCustomers from './manage-customers.component.html';
import style from './manage-customers.component.scss';


$("app-manage-customers").replaceWith('<div id="manage-customers">'+manageCustomers+'</div>');
var html='<style>'+ style +'</style>';
$("#manage-customers").append(html);
