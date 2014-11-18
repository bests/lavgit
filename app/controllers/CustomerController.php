<?php

class CustomerController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

    public function getClass($idew)
    {




        try{

  if (Cache::has($idew))
            {

                $values=Cache::get($idew);


            }else{

             $val= Clase::find($idew)->customers;

         Cache::put($idew, $val, 20);



            $values=Cache::get($idew);

        }

        // return  Clase::find($idew)->customers;


        }
        catch (\Exception $e) {
           return \Response::json("error", 500
          );
        }
        return $values;


        //return $take;

    }
    public function getIndex($ide)
	{
        //$id = Input::get('ide','2');
       $found = Customer::find($ide);
        return Response::json($found);
       // return View::make('hello2')->with('id',$found);
       //return Customer::find($id);
	}

    public function getJOS(){
        return Response::json('http://www.reddit.com/r/aww.json?limit=50&jsonp=angular.callbacks._1');


    }
    public function getAll() {
    return Response::json(Customer::all());
       // return Response::json(Comment::get());
}
    public function postIndex() {

        if (Input::has('first_name', 'email')) {
            $input = Input::all();
            if ($input['first_name'] == '' || $input['email'] == '') {
                return Response::make('You need to fill all of the input fields', 400);
            }

            $customer = new Customer;
            $customer->first_name = $input['first_name'];
            //$customer->last_name = $input['last_name'];
            $customer->email = $input['email'];

            $customer->save();

            return $customer;

        } else {
            return Response::make('You need to fill all of the input fields', 400);
        }
    }

    public function deleteIndex() {
        $id = Input::get('id');
        $customer = Customer::find($id);
        $customer->delete();
        return $id;
    }



}
