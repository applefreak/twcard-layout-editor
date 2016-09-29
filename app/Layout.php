<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Layout extends Model
{
    protected $table = 'layouts';

    public function user()
    {
    	return $this->belongsTo('App/User');
    }

}
