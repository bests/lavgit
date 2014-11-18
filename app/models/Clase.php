<?php


class Clase extends Eloquent {



    public function customers() {
        return $this->belongsToMany('Customer');
    }



}
