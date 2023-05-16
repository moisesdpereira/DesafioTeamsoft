<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use HasFactory;
    use SoftDeletes;


    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function cliente(): HasOne
    {
        return $this->hasOne(Client::class);
    }
}
