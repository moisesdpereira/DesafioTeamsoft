<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'cnpj', 'razao_social', 'nome_contato', 'telefone'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function delete()
    {
        $this->enderecos()->delete();
        return parent::delete();
    }

    public function enderecos(): HasMany
    {
        return $this->hasMany(Address::class);
    }

}
