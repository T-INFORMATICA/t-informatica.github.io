<?php

//use mysqli;

/*
* Mysql database class - only one connection alowed
*/
class Database {
	private $_connection;
	private static $_instance; //The single instance
	private $_host = "";
	private $_username = "";
	private $_password = "";
	private $_database = "";
	
	/*
	Get an instance of the Database
	@return Instance
	*/
	public static function Instance() {
		if(!self::$_instance) { // If no instance then make one
			self::$_instance = new self();
		}
		return self::$_instance;
	}
	
	// Constructor
	private function __construct() { 
		$this->_host = ConnectionData::GetConnectionData()["host"];
		$this->_username = ConnectionData::GetConnectionData()["username"];
		$this->_password = ConnectionData::GetConnectionData()["password"];
		$this->_database = ConnectionData::GetConnectionData()["database"];

		$this->_connection = new mysqli($this->_host, $this->_username, 
			$this->_password, $this->_database);
	
		// Error handling
		if(mysqli_connect_error()) {
			trigger_error("Failed to conencto to MySQL: " . mysql_connect_error(),
				 E_USER_ERROR);
		}
	}
	
	function __destruct() {
		mysqli_close($this->_connection);
	}
	
	// Magic method clone is empty to prevent duplication of connection
	private function __clone() { }
	
	// Get mysqli connection
	public function GetConnection() {
		return $this->_connection;
	}
}