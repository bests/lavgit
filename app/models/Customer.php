<?php


class Customer extends Eloquent {

    public function transactions() {
        return $this->hasMany('Transaction');
    }

    public function clases() {
        return $this->belongsToMany('Clase');
    }

}
