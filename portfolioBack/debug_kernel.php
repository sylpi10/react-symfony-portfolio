<?php

use App\Kernel;

require_once __DIR__.'/vendor/autoload_runtime.php';

$kernel = new Kernel('dev', true);
echo "Kernel loaded successfully!";
