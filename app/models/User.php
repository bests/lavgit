<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');
    public function scopeGetJOS(){

        if (Cache::has('key'))
        {
$value=null;

            //
        }else{
           $url = 'http://www.reddit.com/r/aww.json?limit=50&jsonp=angular.callbacks._1';
            $val= file_get_contents($url);

       $value = Cache::put('key', $val, 3);
    }

        return $value;


// echo the JSON (you can echo this to JavaScript to use it there)
       //echo $JSON;

// You can decode it to process it in PHP
       // $data = json_decode($JSON);
       // var_dump($data);



    }


}
