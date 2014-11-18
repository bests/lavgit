<?php

class TransactionController extends BaseController {

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

    public function getIndex() {
        $id = Input::get('id');
        return User::find($id)->transactions;
    }


    public function postIndex() {

        if (Input::has('name', 'amount')) {
            $input = Input::all();
            if ($input['name'] == '' || $input['amount'] == '') {
                return Response::make('You need to fill all of the input fields', 400);
            }

            $transaction = new Transaction;
            $transaction->name = $input['name'];
            $transaction->amount = $input['amount'];

            $id = $input['customer_id'];
            User::find($id)->transactions->save($transaction);

            return $transaction;

        } else {
            return Response::make('You need to fill all of the input fields', 400);
        }
    }

    public function deleteIndex() {
        $id = Input::get('id');
        $transaction = Transaction::find($id);
        $transaction->delete();

        return $id;
    }
    

}
