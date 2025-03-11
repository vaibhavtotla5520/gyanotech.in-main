<?php
class db {
  public $conn;

  function __construct() {
    $this->conn = new mysqli('210.89.47.45', 'gyanotec_notifier', 'iP56j5sCZ.i?', 'gyanotec_notifier');
       if ($this->conn->connect_error) {
           return("Connection failed: " . $this->conn->connect_error);
       }
  }
}
