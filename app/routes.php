<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function () { return View::make('hom'); });

//Route::get('/customer/', function () { return View::make('home'); });
Route::any('/curl', function(){
    User::GetJOS();
    //Cache::put('ke','boo',2);
    $file = Cache::get('key');

    //Response::download()->setTtl(300)->setContentDisposition('inline');
    return $file;


   // return
});

Route::get('/hom', function()
{
    Cache::flush();
   // return View::make('hom');
});
//Route::controller('/customers/', 'CustomerController');
Route::get('product/', function($id)
{
    $value = Cache::remember("product_$id", 10, function() use ($id)
    {
        echo('Getting this from Shopify');
        $shopify = new ShopifyLib;
        return json_encode($shopify->getShopifyProduct($id));
    });

    var_dump(json_decode($value));
});
Route::post('customer/add', 'CustomerController@postIndex');
Route::get('customer/all', 'CustomerController@getAll');
Route::get('teacherclass/{ide}', 'CustomerController@getClass');
//Route::get('customer/', 'CustomerController@getIndex');
Route::get('customer/id/{ide}', 'CustomerController@getIndex');
Route::get('customer/{ide}', 'CustomerController@getIndex');
//Route::get('user/{id}', 'UserController@showProfile');
Route::any('cool', function(){
    //return current request data
   // find students class ---  var_dump(Customer::find(23)->clases);
    // all students with class...maths
    var_dump(Clase::find(1)->customers);

});
//Route::get('/customer/id/{ide}', function(){
    //check if request data contain var1
    //var_dump(Input::get('ide'));
//});
Route::any('get/ide/{id}', function(){
    //return current request data
    var_dump(Customer::find(23)->clases);
});
//Route::get('get2/ide/{id}', ['as' => 'ide', 'uses' => 'CustomerController@getIndex']);
