<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMailsTableEmailsubject extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('mails', function (Blueprint $table) {
            $table->string('mail_verified_subject')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('mails', function (Blueprint $table) {
            $table->dropColumn("mail_verified_subject");
        });
    }
}
