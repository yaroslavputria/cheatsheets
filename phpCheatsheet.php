<html>
<head>
	<meta charset="UTF-8">
	<title>PHP</title>
</head>
<body>

	<?php 
		echo "Hello world!";
		
		//змнінні
		
		$varInt = 2;
		$varFloat = -4.23;
		$varString = "I am string";
		$varBoolean = true;
		echo "<br> varInt = $varInt";
		
		//константи
		
		echo "<br>".PHP_VERSION;
		define("PI", 3.14);
		echo "<br>".defined("PI");//1
		
		//арифметичні операції
		
		// +, -, *, /, %, +=, -=, /=, */, ++, --
		
		//рядкові операції
		
		$str1 = "\"I\" ";
		$str2 = "<b>am</b>";
		$strRes = "<br>".$str1.$str2;
		echo $strRes;
		
		//логічні(булеві) операції
		
		// ==, !=, >, <, >=, <=, !, ||, &&, ^
		//оператор еквівалентності ===
		
		//оператори умови
		if (true) {
			echo "<br>"."true";
		} else{
			echo "<br>"."false";
		};
		//() ? : ;
		switch ($varInt) {
			case 2:
				echo "<br>"."varInt = 2";
				break;
			
			default:
				echo "<br>"."nothing";
				break;
		};
		
		// цикли
		
		for ($i=0; $i < 10; $i++) { 
			if (i%2==0) {
				continue;//перериває поточну ітерацію цикла і переключає на наступну ітерацію
				break;//зупинення циклу
			};

			echo $i;
		};
		//
		while (true) {

		}
		//
		do{

		}while();

		//функції

		function FunctionName($param)
		{
			return $param;			
		};
		echo "<br>".FunctionName("Hello world!!!");

		//масиви

		$myArray = array(12, -23, "string", false);
		$myArray[] = "new element";
		echo "<br>".$myArray[4];
		count($myArray);//довжина масиву
		$asociatedArray = array("key1" => 23, "name" => "vasya");//асоціативний масив
		echo "<br>".$asociatedArray["name"];
		//foreach
		foreach ($asociatedArray as $key => $value) {
			echo "<br>".$value.$key;
		};
		//багатовимірні масиви
		$arrayOfArray = array(array(1,2,3),array(4,5,6),array(7,8,9));
		echo "<br>".$arrayOfArray[0][2];//3

		//області видимості

		$varGlobal = 1;
		function tmpFunc()
		{
			$varLocal = 2;
			static $varStatic = 3;//~видима за за функцією
		};

		//підключення файлів

		require 'file';
		require_once 'file';
		include 'file';
		include_once 'file';

		//обробка форм

		/*
		<?php 
			if(isset($_POST["done"])){
				if ($_POST["name"]=="") echo "Enter name: <a href='/'>Correct</a>";
					else
						header("Location:index.php");
				};
		?>
		<form action="" method="post" name="my_form">
			<label for="">Name:</label>
			<input type="text" name="name" placeholder="Name">
			<br>
			<label for="">Email:</label>
			<input type="email" name="email" placeholder="example@page.com">
			<br>
			<label for="">Message:</label>
			<br>
			<textarea name="message" id="" cols="30" rows="10"></textarea>
			<br>
			<input type="submit" name="done" value="done">
		</form>
		*/
		
		//функції для роботи з типами даних

		isset(var); - to check does exist current variable
		unset(var); - to remove current variable
		is_numeric(var); - returns true for nubers and numbers in string format
		is_integer(var);
		is_double(var);
		is_string(var);
		is_bool(var);
		is_scalar(var);
		is_null(var); - returns true if variable is only defined without value
		is_array(var);
		gettype(var); - returns type of variable

		//Математичні функції

		M_PI;
		M_E;
		abs(number);
		round(number); - класичне округлення
		round(number, c); - c - кількість знаків після коми
		ceil(number); - до більшого
		floor(number); - до меншого
		mt_rand(a,b); - random in [a,b]
		min(n1, n2, n3);
		min(array);
		max(values);
		sin(arg);
		cos(arg);
		acos(arg);
		asin(arg);
		tan(arg);
		atan(arg);
		...

		//Рядкові функції

		strlen(string);
		strpos(string, substring, start_of_search);
		substr(string, start, end);	???returns substring from start to ent
		str_replace(що, на що, де);
		htmlspecialchars(string); - замінює html теги на інші символи
		strtolower(str);
		strtoupper(str);
		md5(str); - кодування
		trim(str); - видалення пробілів на початку рядка і в кінці

		//Функції для масивів

		$simpleArray = array(1,2,3);
		$assocArray = array("key1" => 1, "key2" => 2, "key3" => 3);
		count($simpleArray);//3
		sort($simpleArray);
		rsort($simpleArray);
		asort($assocArray); - сортує з ключами
		arsort($assocArray);
		ksort($assocArray); - сортування по ключам
		krsort($assocArray);
		shuffle(array); - перемішування масиву
		in_array(el, array); - returns true/false if el is in array
		array_merge(array1, array2); - returns concated array
		array_slice(array, start, count);
		print_r(array);

		//функції для роботи з датами

		time(); - returns count in s from 01.01.1970;
		microtime(true);
		date(format, SecondsFrom01011970);
		date("Y-m-d H:i:s");
		mktime(h, m, s, mounth, day, year); - returns count in s from 01011970
		getdate(SecondsFrom01011970); - returns assocArray
		checkdate(month, day, year); - returns true/false

		//Робота з файлами

		$myFile = fopen("newFile.txt", "a+t");
		"r" - read.(курсор на початку файла)
		"r+" - read, write.(курсор на початку файла)
		"w" - write.(обрізає до нуля, створює файл, якщо його не було до того створено)
		"w+"
		"a" - write.(курсор вкінці файла)
		"a+" - read, write.
		"a+t" - t - for \n, \t...
		fwrite($myFile, "I am written in file\ntext from new line");
		fclose($myFile);
		$tmp = fopen("newFile.txt", "r+t");
		while (!feof($tmp)) {
			echo fread($tmp, 1)."<br>";//читання по одному символу
		}
		fseek($tmp, 0);//перенесення курсора
		fclose($tmp);

		file_put_contents("newFile1.txt", "i am string in created file");
		file_get_contents("newFile1.txt");//i am string in created file
		file_exists("newFile222.txt");//false
		filesize("newFile1.txt");// in bytes
		rename("oldname.txt", "newname.txt");
		unlink("newFile1");//removes files from server

		//права доступу до файлів

		echo __FILE__;
		fileperms(__FILE__);//перегляд прав доступу
		chmod(__FILE__, 0777);//зміна прав доступу (все-всім)

		// ф-ція phpinfo() nта глобальний масив $_SERVER

		phpinfo();
		_SERVER["SERVER_ADDR"];//ip-адреса користувача

		//редірект

		header("Location: http://google.com");
		exit;//завершення виконання

		//відправка пошти(напр зворотній зв'язок)

		$message = "its message";
		$to = "yaroslav.putria@gmail.com";
		$from = "ff@ff.ff";
		$subject = "subject of message";
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$headers = "From: $from\r\tReply-to: $from\r\tContent-type: text/plain; charset=utf-8\r\n";
		mail($to, $subject, $message, $headers);

		//робота з кукі

		setcookie("myName", 10, time() + 10);//буде існувати 10 секунд
		$_COOKIE["myName"];

		//робота з сесіями

		session_start();//на початку файла
		$_SESSION["myName"] = 3;//через 15 хвилин видаляється
		session_destroy();

		//форма зворотнього зв'язку

		/*
		<?php
			session_start(); 
			if(isset($_POST["send"])){
				$from = htmlspecialchars($_POST["from"]);
				$to = htmlspecialchars($_POST["to"]);
				$subject = htmlspecialchars($_POST["subject"]);
				$message = htmlspecialchars($_POST["message"]);
				$_SESSION["from"] = $from;
				$_SESSION["to"] = $to;
				$_SESSION["subject"] = $subject;
				$_SESSION["message"] = $message;
				$erro_from = "";
				$erro_to = "";
				$erro_subject = "";
				$erro_message = "";
				$error = false;
				if($from == "" || !preg_match("/@/", $from)){
					$erro_from = "Введіть коректний емейл!";
					$error = true;
				};
				if($to == "" || !preg_match("/@/", $to)){
					$erro_to = "Введіть коректний емейл!";
					$error = true;
				};
				if($subject == ""){
					$erro_subject = "Введіть тему повідомлення!";
					$error = true;
				};
				if($message == ""){
					$erro_message = "Введіть повідомлення!";
					$error = true;
				};
				if(!$error){
					$subject = "=?utf-8?B?".base64_encode($subject)."?=";
					$headers = "From: $from\r\tReply-to: $from\r\tContent-type: text/plain; charset=utf-8\r\n";
					mail($to, $subject, $message, $headers);
					header("Location: success.php?send=1");
					exit;
				};
			};
		?>
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta http-equiv="content-type" content="text/html; charset=utf-8">
			<title><?="tmp for PHP"?></title>
		</head>
		<body>
			<h2>Форма зворотнього зв'язку</h2>
			<form action="" name="feedback" method="post">
				<label for="">Від кого:</label><br>
				<input type="text" name="from" value="<?php echo $_SESSION["from"];?>"><span style="color:red"><?=$erro_from?></span><br>
				<label for="">Кому:</label><br>
				<input type="text" name="to" value="<?php echo $_SESSION["to"];?>"><span style="color:red"><?=$erro_to?></span><br>
				<label for="">Тема:</label><br>
				<input type="text" name="subject" value="<?php echo $_SESSION["subject"];?>"><span style="color:red"><?=$erro_subject?></span><br>
				<label for="">Повідомлення:</label><br>
				<textarea name="message" id="" cols="30" rows="10"><?=$_SESSION["message"];?></textarea><span style="color:red"><?=$erro_message?></span><br>
				<input type="submit" name="send" value="надіслати"><br>
			</form>
		</body>
		</html>*/ 

		//підключення бд

		$mySQLi = new mysqli ("localhost", "root", "", "myFirstBase");
		$mySQLi = query ("SET NAMES 'utf8'");
		...	
		$mySQLi->close();

		//

		$mysqli = new mysqli ("localhost", "root", "", "myfirstbase");
		$mysqli->query ("SET NAMES 'utf8'");
		
		$success = $mysqli->query("INSERT INTO `users` (`logon`, `password`, `reg_date`) VALUES ('login2', '".md5("1234")."', '".time()."')");
		echo $success;
		for ($i=1; $i < 10; $i++) { 
			$lo="login".$i;
			$mysqli->query("INSERT INTO `users` (`logon`, `password`, `reg_date`) VALUES ('$lo', '".md5("$lo")."', '".time()."')");
		};
		//запит з phpMyAdmin//INSERT INTO `myfirstbase`.`users` (`id`, `logon`, `password`, `reg_date`) VALUES (NULL, 'login000', MD5('000'), UNIX_TIMESTAMP());
		$mysqli->query("UPDATE `users` SET `reg_date` = '1454866999' WHERE `users`.`id` =5");
		$mysqli->query("DELETE FROM `myfirstbase`.`users` WHERE `users`.`id` = 1");
		
		$mysqli->close();

		//Вибірка зиписів з бд

		function FunctionName($resault_set){
			while (($row = $resault_set->fetch_assoc()) != false) {
				print_r($row);
			//echo $row['logon']."<br>";
			}
			echo "кількість записів - ".$resault_set->num_rows."<br>-------------------------";
		}
		$mysqli = new mysqli ("localhost", "root", "", "myfirstbase");
		$mysqli->query ("SET NAMES 'utf8'");
		$resault_set = $mysqli->query("SELECT * FROM `users`");//всі записи
		$resault_set = $mysqli->query("SELECT `id`, `logon` FROM `users` WHERE `id` > 3");//ід та логін для ід>3
		$resault_set = $mysqli->query("SELECT `id`, `logon` FROM `users` WHERE `id` > 3 ORDER BY `id` ASC");//по зростанню
		$resault_set = $mysqli->query("SELECT `id`, `logon` FROM `users` WHERE `id` > 3 ORDER BY `id` DESC");//по спаданню
		$resault_set = $mysqli->query("SELECT `id`, `logon` FROM `users` WHERE `id` > 3 ORDER BY `id` ASC LIMIT 0, 2");//з нульової позиції два записи
		$resault_set = $mysqli->query("SELECT `id`, `logon` FROM `users` WHERE `id` > 3 AND `logon` LIKE '%og%' ");
		FunctionName($resault_set);
		$count = $mysqli->query("SELECT COUNT(`id`) FROM `users`");
		FunctionName($count);
		$mysqli->close();

		//===================
		//OOP in PHP
		//===================

		class Person{
			public $name = "incognito";
			public $age = 0;
			public $profession = "homeless";
			public function greating(){
				return "Hello, ".$this->name;
			}
		}
		$vasya = new Person();
		$vasya->name = "Vasya";
		$vasya->age = 24;
		$vasya-> profession = "geek";
		echo $vasya->greating();

		//конструктор/деструктор

		class Person{
			public $name = "incognito";
			public $age = 0;
			public $profession = "homeless";

			function __construct($name, $age, $profession){	
				$this->name = $name;
				$this->age = $age;
				$this->profession = $profession;
				echo $this->allInformation();
				echo $this->greating()."<br/>";
			}

			function __destruct()
			{
				echo $this->name." був внесений до БД";
			}

			function greating(){
				return "Hello, ".$this->name;
			}
			function allInformation(){
				return "Name: {$this->name},<br/>Age: {$this->age},<br/>Job: {$this->profession}.<hr/>";
			}
		}
		$vasya = new Person("Vasya", 24, "geek");
		$petya = new Person("Petya", 29, "manager");

		//специфікатори доступа

		public
		private//не переносяться до класів нащадків
		protected
		
		class Person{
			public $name = "incognito";
			private $age = 0;
			function __construct($name, $age){	
				$this->name = $name;
				$this->age = $age;
				echo $this->allInformation();
			}
			function getAge(){
				return $this->age;
			}
			function allInformation(){
				return "Name: {$this->name},<br/>Age: {$this->age}.<hr/>";
			}
		}
		class LongerLife{
			function makeYanger(Person $person, $dYears)//об'єкт $person має бути створений з класу Person або його "родичів
			{
				return $person->getAge()-$dYears;
			}
		}
		$vasya = new Person("Vasya", 24, "geek");
		$elixir = new LongerLife();
		echo  $elixir->makeYanger($vasya, 2);

		//наслідування

		class Person{
			public $name = "incognito";
			public $age = 0;

			function __construct($name, $age){	
				$this->name = $name;
				$this->age = $age;
			}
			public function getAge(){
				return $this->age;
			}
			public function allInformation(){
				return "Name: ".$this->name.",<br/>Age: ".$this->age.".<hr/>";
			}
		}
		class Child extends Person{
			public $mother;
			public $father;
			public function __construct($name, $age, $mother, $father){
				parent::__construct($name, $age);
				$this->mother = $mother;
				$this->father = $father;
				echo $this->allInformation();
			}
			public function allInformation(){
				$res = parent::allInformation();
				return $res."<br/>Mother: {$this->mother},<br/>Father: {$this->father}.<hr/>";
			}
		}
		$vasya = new Person("Vasya", 24);
		$masha = new Child("Masha", 3, "Lena", "Kostya");	

		//абстрактні та фінальні класи, інтерфейси

		abstract class Car{
			public $tire;
			public function startEngine(){
				echo "Двигун завівся<br />";
			}
			abstract function stopEngine();
		}	
		class MegaCar extends Car{
			public function stopEngine(){
				echo "Двигун заглох<br />";
			}
		}
		$car = new MegaCar();
		$car->startEngine();
		$car->stopEngine();

		//

		interface Car{
			function startEngine();
			function stopEngine();
		}	
		class MegaCar implements Car{
			public function startEngine(){
				return "Двигун завівся<br />";
			}
			public function stopEngine(){
				echo "Двигун заглох<br />";
			}
		}
		$car = new MegaCar();
		$car->startEngine();
		$car->stopEngine();

		//

		class Car{
			public function startEngine(){
				return "Двигун завівся<br />";
			}
			final function stopEngine(){//не можна перевизначити у класах "наслідниках"
				echo "Двигун заглох<br />";
			}
		}	
		class MegaCar extends Car{

		}
		
		//Аксесори

		class Config{
			private $host = "localhost";
			private $user = "root";
			private $dbname = "shop";
			private $password = "1234";
			public function getHost(){//доступ до закритих властивостей об'єкта
				return $this->host;
			}
			public function setHost($host){//
				$this->host = $host;
			}
			public function __get($key){
				return $this->$key;
			}
			public function __set($key, $value){
				$this->$key = $value;
			}
		}
		$config = new Config();
		echo $config->getHost()."<br />";
		$config->setHost("12.3.4.5");
		echo $config->host."<br />";
		$config->host = "23.2.1.3";
		echo $config->user."<br />";
?>
		============================================
		============================================

		//AJAX
		//повний контроль
		/*
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Ajax</title>
			<script src="jquery-2.2.0.js"></script>
			<script>
				$(document).ready(function () {
					function funcBefore () {
						$("#information").text("Очікування даних...");
					}
					function funcSucc (data) {
						$("#information").text(data);
					}
					$("#load").bind("click", function(){
						var admin = "Admin";
						$.ajax({
							url: "content.php",
							type: "POST",
							data: ({name: admin, age: 22}),//зміннні
							dataType: "html",
							beforeSend: funcBefore,//функція, що виконується до відповіді з content.php
							success: funcSucc//функція, що виконується після відповіді з content.php
						});
					});
				});
			</script>
		</head>
		<body>
			<p id="load" style="cursor:pointer">Завантажити дані</p>
			<div id="information"></div>
		</body>
		</html>

		//content.php

		<?php
			sleep(2);
			echo "Дані: Ім'я: ".$_POST['name']." Age: ".$_POST['age'];
		?>
		

		//Перевірка логіна

		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Ajax</title>
			<script src="jquery-2.2.0.js"></script>
			<script>
				$(document).ready(function () {
					function funcBefore () {
						$("#information").text("Очікування даних...");
					}
					function funcSucc (data) {
						$("#information").text(data);
					}
					$("#load").bind("click", function(){
						var admin = "Admin";
						$.ajax({
							url: "content.php",
							type: "POST",
							data: ({name: admin, age: 22}),//зміннні
							dataType: "html",
							beforeSend: funcBefore,//функція, що виконується до відповіді з content.php
							success: funcSucc//функція, що виконується після відповіді з content.php
						});
					});
					$("#done").bind("click", function(){
						var tmpName = $("#enter_name").val()
						$.ajax({
							url: "check.php",
							type: "POST",
							data: ({name: tmpName}),//зміннні
							dataType: "html",
							beforeSend: function(){
								$("#warning").text("Очікування даних...");
							},
							success: function(data){
								if (data == "fail"){
									$("#warning").text("Ім'я зайнято");
								}else if (data = "success"){
									$("#warning").text("");
									$("#information").text("Ім'я " + tmpName + " унікальне");
								}
							} 
						});
					});
				});
			</script>
		</head>
		<body>
			<input type="text" id="enter_name" placeholder="Ввести ім'я...">
			<input type="button" id="done" value="Готово"><span id="warning"></span>
			<p id="load" style="cursor:pointer">Завантажити дані</p>
			<div id="information"></div>
		</body>
		</html>
		
		//check.php
				
		<?php
			sleep(1);
			if($_POST['name'] == "Admin"){
				echo "fail";
			} else {
				echo "succes";
			}
		?>

		//Формат JSON
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Ajax</title>
			<script src="jquery-2.2.0.js"></script>
			<script>
				$(document).ready(function(){
					$("select[name = 'country']").bind("change", function(){
						$.get("countryCheck.php", {country: $("select[name='country']").val()}, function(data){
							data = JSON.parse(data);
							$("select[name='city']").empty();
							for(var key in data){
								$("select[name='city']").append($("<option value='" + key + "'>" + data[key] + "<option/>"));
							}
						});
					});
				});
			</script>
		</head>
		<body>
			<label for="">Вкажіть країну:</label>
			<select name="country" id="">
				<option value="0" selected="selected">Україна</option>
				<option value="1">Іспанія</option>
				<option value="2">США</option>
			</select>
			<label for="">Місто:</label>
			<select name="city" id="">
				<option value="0" ></option>
			</select>
		</body>
		</html>
		//contryCheck.php
		<?php
			if ($_GET['country']==0){
				echo json_encode(array("0"=>"Київ", "1"=>"Львів", "2"=>"Залупинці"));
			} else if ($_GET['country']==1){
				echo json_encode(array("0"=>"Мадрид", "1"=>"Більбао", "2"=>"Ейбар"));
			} else if ($_GET['country']==2){
				echo json_encode(array("0"=>"Вашингтон", "1"=>"Дулут", "2"=>"Нью Йорк"));
			}
		?>
	
</body>
</html>