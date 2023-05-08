<?php

namespace App\Traits;

use Illuminate\Support\Facades\Hash;

trait HashesPassword
{

    public function setPasswordAttribute($password) {
        $this->attributes['password'] = Hash::make($password);
    }

}
