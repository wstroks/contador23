<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //$this->call([UsersTableSeeder::class]);

        DB::table('funcionarios')->insert([
          'name'=> 'Washington Pagotto Batista',
          'password'=>Hash::make('wstroks123'),
          'email'=>'wstroks@gmail.com'


        ]);
    }
}
