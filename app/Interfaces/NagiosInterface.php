<?php

namespace App\Interfaces;

/**
 * Interface for API of nagios.
 */
interface NagiosInterface
{
    public function listHosts($status);

    public function showHost($name);
    
    public function listServices($status);

    public function showService($name, $servicedescription);
}
