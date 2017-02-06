
=== Клієнт-сервер архітектура є одним із архітектурних шаблонів програмного забезпечення та є
		домінуючою концепцією у створенні розподілених мережних застосунків і передбачає взаємодію
		та обмін даними між ними. Вона передбачає такі основні компоненти:
			- набір серверів, які надають інформацію або інші послуги програмам, які звертаються до них;
			- набір клієнтів, які використовують сервіси, що надаються серверами;
			- мережа, яка забезпечує взаємодію між клієнтами та серверами.

=== HTTP — протокол передачі даних, що використовується в комп''ютерних мережах. Назва скорочена
		від Hyper Text Transfer Protocol, протокол передачі гіпер-текстових документів
		(передача веб-сторінок (текстових файлів з розміткою HTML))
		- схема "запит-відповідь"

		Кожен запит/відповідь складається з трьох частин:
		- стартовий рядок;
		- заголовки;
		- тіло повідомлення, що містить дані запиту, запитаний ресурс або опис проблеми, якщо запит не виконано.

=== HTTPS — схема URI, що синтаксично ідентична http: схемі, яка зазвичай використовується для доступу до 
		ресурсів Інтернет. Використання https: URL вказує, що протокол HTTP має використовуватися, але з іншим портом 
		за замовчуванням (443) і додатковим шаром шифрування/автентифікації між HTTP і TCP. Ця схема була винайдена 
		у компанії Netscape Communications Corporation для забезпечення автентифікації та шифрування комунікацій і 
		широко використовується в Інтернеті у програмному забезпеченні, в якому важлива безпека комунікацій, наприклад, 
		у платіжних системах та корпоративних логінах.

=== url (Уніфіко́ваний лока́тор ресу́рсів або адре́са ресу́рсу (англ. Uniform Resource Locator - єдиний 
		вказівник на ресурс, URL)) — стандартизована адреса певного ресурсу (такого як документ, чи зображення) 
		в інтернеті (чи деінде). Придуманий Тімом Бернерс-Лі для використання у WWW, сучасні форми описуються в 
		RFC 3986. Включає в себе назву протоколу доступу (HTTP, FTP, telnet, gopher та ін.) і, власне, шлях до 
		ресурсу, формат якого залежить від схеми доступу:

		<схема>://<логін>:<пароль>@<хост>:<порт>/<шлях>?<параметри>#<якір>
			- схема - схема звернення до ресурсу, найчастіше це протокол (напр. http, ftp)
			- логін і пароль - відповідно ім''я користувача і пароль для доступу до ресурсу
			- хост - повне доменне ім''я або IP-адреса ресурсу
			- порт - порт, по якому буде проведено звернення до хоста
			- шлях - використовується для уточнюючої вказівки місця знаходження ресурсу. В залежності від ОС може
				бути регістро-залежним(більшість серверних ОС) або регістро-незалежним(напр., Microsoft Windows).
			- параметри - рядок параметрів виду <параметр>=<значення>, розділених символом амперсант '&'
			- якір - призначений для внутрішньої адресації на ресурсі, який було отримано від сервера.

=== DNS До́менна систе́ма іме́н (англ. Domain Name System, DNS) — ієрархічна розподілена система перетворення
		імені хоста (комп''ютера або іншого мережевого пристрою) в IP-адресу. Кожен комп''ютер в Інтернеті 
		має свою власну унікальну адресу — число, яке складається з чотирьох байтів.
		Уся система імен в Інтернеті — ієрархічна. Це зроблено для того, щоб не підтримувати одне централізоване
		джерело, а роздати владу на місця.

=== ip Адреса Ай-Пі, адреса IP (Internet Protocol address) — це ідентифікатор (унікальний числовий номер) 
		мережевого рівня, який використовується для адресації комп''ютерів чи пристроїв у мережах, які побудовані 
		з використанням протоколу TCP/IP (наприклад Інтернет). У мережі Інтернет потрібна глобальна унікальність 
		адреси, у разі роботи в локальній мережі потрібна унікальність адреси в межах мережі.

		Адреса IP складається з чотирьох 8-бітних чисел, які називають октетами. Прикладом IP-адреси може бути 
		адреса 127.0.0.1 (Локальна адреса IP, змінити її неможливо, і вона на кожній ОС лише одна / Localhost)
		Процес перетворення доменного імені на адресу IP виконується DNS-сервером.

=== TCP/IP — набір протоколів мережі Інтернет. Назва є абревіатурою від Transmission Control Protocol / Internet Protocol
		(Протокол керування передачею / міжмережевий протокол), походить від назви стрижневих протоколів Інтернету — IP і TCP.
		Фактично це систематизований стек протоколів, що поділяється на чотири рівня і часто називається, як TCP/IP-модель.
		Рівні TCP/IP-моделі корелюються з еталонною моделлю OSI.

=== Модель OSI (ЕМВВС) (базова еталонна модель взаємодії відкритих систем, англ. Open Systems Interconnection Basic 
		Reference Model, 1978 р.) — абстрактна мережева модель для комунікацій і розробки мережевих протоколів. Представляє 
		рівневий підхід до мережі. Кожен рівень обслуговує свою частину процесу взаємодії. Завдяки такій структурі спільна 
		робота мережевого обладнання й програмного забезпечення стає набагато простішою, прозорішою й зрозумілішою.

=== IP-протокол (англ. Internet Protocol; інтернет протокол, міжмережевий протокол) — протокол мережевого рівня
		для передачі датаграм між мережами.

		Дейтаграма (англ. datagram), також датаграма — блок інформації, посланий як пакет мережевого рівня через передавальне
		середовище без попереднього встановлення з''єднання і створення віртуального каналу. Дейтаграма є одиницею інформації 
		у протоколі (protocol data unit, PDU) для обміну інформацією на мережевому (у разі протоколу IP, IP-дейтаграми) і 
		транспортному (у разі протоколу UDP, UDP-дейтаграми) рівнях еталонної моделі OSI. Назва «дейтаграма» було вибрано 
		за аналогією зі словом телеграма.

=== TCP Transmission Control Protocol, TCP (укр. Протоко́л керува́ння переда́чею) — разом із протоколом IP є стрижневим 
		протоколом Інтернету, який дав назву моделі TCP/IP. Протокол призначений для управління передачею даних у комп''ютерних 
		мережах, працює на транспортному рівні моделі OSI.

		На відміну від іншого розповсюдженого протоколу транспортного рівня UDP, TCP забезпечує надійне доправляння даних 
		від хоста-відправника до хоста-отримувача, для цього встановлюється логічний зв''язок між хостами. Таким чином 
		TCP належить до класу протоколів зі встановленим з''єднанням.

		Інкапсуляція TCP в моделі OSI
		TCP отримує потоки даних від протоколів верхніх рівнів OSI-моделі, початковим джерелом яких є протоколи прикладного
		рівня, такі як HTTP, FTP та інші. Кожний протокол верхнього рівня має свій визначений TCP-порт.

		TCP розбиває конкретний потік даних на порції, та додає до кожної з них заголовок з номером послідовності. Отримані 
		таким чином порції даних традиційно називаються TCP-сегментами.[3] Далі кожний сегмент інкапсулюється в IP-пакет і 
		передається через IP-протокол до хоста-отримувача.

		Після надходження IP-пакету до хоста-отримувача перевіряється коректність отриманих даних у TCP-сегменті, методом 
		перерахування контрольної суми, та переконується, що попередні сегменти даних також були успішно отримані. Після 
		чого хост-отримувач надсилає запит до хоста-відправника про нову, або повторну передачу порції даних, що одночасно 
		є підтвердженням того, що всі сегменти з номерами послідовності, меншими ніж номер нового запиту, були успішно отримані.

		У свою чергу TCP-сегменти деінкапсулюються з IP-пакетів, розміщуються в правильному порядку та з них вилучаються 
		TCP-заголовки. Отриманий таким чином потік даних передається до того протоколу верхнього рівня, з якого первісно 
		надійшли дані на стороні хоста-відправника.


=======================     CSS         =====================================

=== Единицы измерения: "px", "em", "rem" и другие

	- px – абсолютные пиксели, к которым привязаны и потому не нужны mm, cm, pt и pc. Используется для максимально конкретного и точного задания размеров.
	- em – задаёт размер относительно шрифта родителя, можно относительно конкретных символов: "x"(ex) и "0"(ch), используется там, где нужно упростить масштабирование компоненты.
	- rem – задаёт размер относительно шрифта <html>, используется для удобства глобального масштабирования: элементы которые планируется масштабировать, задаются в rem, а JS меняет шрифт у <html>.
	- % – относительно такого же свойства родителя (как правило, но не всегда), используется для ширин, высот и так далее, без него никуда, но надо знать, относительно чего он считает проценты.
	- vw, vh, vmin, vmax – относительно размера экрана.

=== display

  - none
	- block
	- inline
	- inline-block
	- table-*
	- list-item, run-in и flex

=== float

	float: left | right | none | inherit;

	clear: left | right | both;

=== position

		position: static//default
		position: relative
		position: absolute
		position: fixed

=== Центрирование горизонтальное и вертикальное

- text-align: center
- margin: auto

- position:absolute + margin
    position: absolute;
		top: 50%;
		margin-top: -0.625em;
- vertical-align: middle | top | bottom | baseline;

=== "font-size" и "line-height" (плюс font: 125%/1.5 FontFamily - одночасно)/

=== white-space

- normal
- pre - повністю зберігає формат
- nowrap - без переноса на новий рядок і без збереження пробілів
- pre-wrap - зберігає формат, але переносить на новий рядок, якщо текст не поміщається в "контейнер"
- pre-line - як і pre-wrap, але не зберігає пробіли

=== outline 
- outline-top, outline-left - не існує

=== box-sizing

- content-box - дефолтне, width/height - всередині padding
- border-box - width/height - вся ширина/довжина елемента

=== margin
Вертикальные отступы поглощают друг друга, горизонтальные – нет.

=== overflow
- visible - по умолчанию
- hidden
- scroll
- auto

- overflow-x, overflow-y

- 

============================================================
============================================================
============================================================
============================================================
============================================================
============================================================
============================================================
============================================================
						
						ECMAScript6-2015

https://kangax.github.io/compat-table/es6/

{} - окрема область видимості

"use strict";

<script src="https://js.cx/babel-core/browser.min.js"><script>

<script type="text/babel">
  let arr = ["hello", 2]; // let

  let [str, times] = arr; // деструктуризация

  alert( str.repeat(times) ); // hellohello, метод repeat
<script>

=====================|const let|======================

- Область видимости переменной let – блок {...}.
- Переменная let видна только после объявления.
		alert(a); // ошибка, нет такой переменной(не undefined)
		let a = 5;
- При использовании в цикле, для каждой итерации создаётся своя переменная.

		const apple = 5;
		apple = 10; // ошибка

=====================|Деструктуризация|======================

		'use strict';

		let [firstName, lastName] = ["Илья", "Кантор"];

		alert(firstName); // Илья
		alert(lastName);  // Кантор

		// первый и второй элементы не нужны
		let [, , title] = "Юлий Цезарь Император Рима".split(" ");

		alert(title); // Император

- Оператор «spread»

		let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

		alert(firstName); // Юлий
		alert(lastName);  // Цезарь
		alert(rest);      // Император,Рима (массив из 2х элементов)


- значения по умолчанию

		function defaultLastName() {
		  return Date.now() + '-visitor';
		}

		// lastName получит значение, соответствующее текущей дате:
		let [firstName, lastName=defaultLastName()] = ["Вася"];

		alert(firstName); // Вася
		alert(lastName);  // 1436...-visitor

- Деструктуризация объекта

		let options = {
		  title: "Меню",
		  height: 200,
		  //tmp: "blabla"
		};

		let {w = 100, height: h, title, tmp:t="lala"} = options;

		alert(title);  // Меню
		alert(w);      // 100
		alert(h);      // 200
		alert(t);      // lala

- деструктуризація зі змінними

		let a, b;
		({a, b} = {a:5, b:6}); // внутри выражения это уже не блок


- Вложенные деструктуризации

		'use strict';

		let options = {
		  size: {
		    width: 100,
		    height: 200
		  },
		  items: ["Пончик", "Пирожное"]
		}

		let { title="Меню", size: {width, height}, items: [item1, item2] } = options;

		// Меню 100 200 Пончик Пирожное
		alert(title);  // Меню
		alert(width);  // 100
		alert(height); // 200
		alert(item1);  // Пончик
		alert(item2);  // Пирожное

======================|Функции|======================

- Параметры по умолчанию

		function showMenu(title = "Заголовок", width = 100, height = takeHeight()) {
		  alert('title=' + title + ' width=' + width + ' height=' + height);
		}

		// По умолчанию будут взяты 1 и 3 параметры
		// title=Заголовок width=null height=200
		showMenu(undefined, null)

- Оператор spread вместо arguments

		function showName(firstName, lastName, ...rest) {
		  alert(firstName + ' ' + lastName + ' - ' + rest);
		}

		// выведет: Юлий Цезарь - Император,Рима
		showName("Юлий", "Цезарь", "Император", "Рима");

- передача параметрів через spread

		let numbers = [2, 3, 15];

		// Оператор ... в вызове передаст массив как список аргументов
		// Этот вызов аналогичен Math.max(2, 3, 15)
		let max = Math.max(...numbers);

		alert( max ); // 15

- Деструктуризация в параметрах

		let options = {
		  title: "Меню",
		  width: 100,
		  height: 200
		};

		function showMenu({title, width, height}) {//розбиває на змінні
		//function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) { - щоб була можливість викликати без вхідних параметрів
		  alert(title + ' ' + width + ' ' + height); // Меню 100 200
		}

		showMenu(options);

- Имя «name» (В свойстве name у функции находится её имя.)

- Arrow function_

		let inc = x => x+1;
		//let inc = function(x) { return x + 1; } 

		let sum = (a,b) => a + b;
		// аналог с function
		// let inc = function(a, b) { return a + b; };

		let getTime = () => new Date().getHours() + ':' + new Date().getMinutes();

		let getTime = () => {
		  let date = new Date();
		  let hours = date.getHours();
		  let minutes = date.getMinutes();
		  return hourse + ':' + minutes;
		};		

- Функции-стрелки не имеют своего this

		'use strict';

		let group = {
		  title: "Наш курс",
		  students: ["Вася", "Петя", "Даша"],

		  showList: function() {
		    this.students.forEach(
		      student => alert(this.title + ': ' + student)
		    )
		  }
		}

		group.showList();
		// Наш курс: Вася
		// Наш курс: Петя
		// Наш курс: Даша	


- !!Функции стрелки нельзя запускать с new

- Функции-стрелки не имеют своего arguments


======================|Строки|======================

=== Строки-шаблоны

	let str = `обратные кавычки`;

	- В них разрешён перевод строки.
	- Можно вставлять выражения при помощи ${…}
		'use strict';
		let apples = 2;
		let oranges = 3;
		alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5

=== Функции шаблонизации

	let str = func`моя строка`;

			'use strict';

			function f(strings, ...values) {
			  alert(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
			  alert(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
			  alert(JSON.stringify(values));      // [3,5,8]
			}

			let apples = 3;
			let oranges = 5;

			//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]
			let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;

			У массива strings есть дополнительное свойство strings.raw. В нём находятся строки в точности
			как в оригинале. Это влияет на спец-символы, например в strings символ \n – это перевод строки,
			а в strings.raw – это именно два символа \n.

=== Улучшена поддержка юникода

		console.log( '我'.length ); // 1
		console.log( '𩷶'.length ); // 2
		console.log( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
		console.log( '😂'.length ); // 2, FACE WITH TEARS OF JOY

	- String.fromCodePoint и str.codePointAt – аналоги String.fromCharCode и str.charCodeAt,
	корректно работающие с суррогатными парами.

		alert( '𝒳'.charCodeAt(0) + ' ' + '𝒳'.charCodeAt(1) ); // 55349 56499
		alert( '𝒳'.codePointAt(0) ); // 119987

		// Правильно
		alert( String.fromCodePoint(119987) ); // 𝒳
		// Неверно!
		alert( String.fromCharCode(119987) ); // 풳

		alert( "\u2033" );
		alert( "\u{20331}" );

	- Unicode-нормализация (метод str.normalize())

		alert("S\u0307\u0323"); // Ṩ
		alert("S\u0323\u0307"); // Ṩ

		alert( "S\u0307\u0323" == "S\u0323\u0307" ); // false

		alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true

	- Полезные методы

		str.includes(s) – проверяет, включает ли одна строка в себя другую, возвращает true/false.
		str.endsWith(s) – возвращает true, если строка str заканчивается подстрокой s.
		str.startsWith(s) – возвращает true, если строка str начинается со строки s.
		str.repeat(times) – повторяет строку str times раз.

======================|Объекты и прототипы|======================	

- Короткое свойство

		'use strict';

		let name = "Вася";
		let isAdmin = true;

		let user = {
		  name,//автоматично беруться зі змінних
		  isAdmin//автоматично беруться зі змінних
		};
		alert( JSON.stringify(user) ); // {"name": "Вася", "isAdmin": true}

- Вычисляемые свойства

		'use strict';
		let propName = "firstName";
		let user = {
		  [propName]: "Вася"
		};
		alert( user.firstName ); // Вася

		'use strict';
		let a = "Мой ";
		let b = "Зелёный ";
		let c = "Крокодил";
		let user = {
		  [(a + b + c).toLowerCase()]: "Вася"
		};
		alert( user["мой зелёный крокодил"] ); // Вася

- Геттер-сеттер для прототипа

		В ES5 для прототипа был метод-геттер:
			Object.getPrototypeOf(obj)

		В ES-2015 также добавился сеттер:
			Object.setPrototypeOf(obj, newProto)

- Object.assign

		Object.assign(target, src1, src2...) - (копирует в первый target свойства из остальных объектов)
		(наступні властивості переписують попередні)

- Object.is(value1, value2)

		// Сравнение +0 и -0
		alert( Object.is(+0, -0)); // false
		alert( +0 === -0 );        // true

		// Сравнение с NaN
		alert( Object.is(NaN, NaN) ); // true
		alert( NaN === NaN );         // false

- Методы объекта

	- Более короткий синтаксис объявления.
	- Наличие в методах специального внутреннего свойства [[HomeObject]] («домашний объект»),
	  ссылающегося на объект, которому метод принадлежит. Мы посмотрим его использование чуть дальше.

			'use strict';

			let name = "Вася";
			let user = {
			  name,
			  // вместо "sayHi: function() {" пишем "sayHi() {"
			  sayHi() {
			    alert(this.name);
			  }
			};
			user.sayHi(); // Вася

	- гетери і сетери

			'use strict';

			let name = "Вася", surname="Петров";
			let user = {
			  name,
			  surname,
			  get fullName() {
			    return `${name} ${surname}`;
			  }
			};
			alert( user.fullName ); // Вася Петров


			'use strict';

			let methodName = "getFirstName";
			let user = {
			  // в квадратных скобках может быть любое выражение,
			  // которое должно вернуть название метода
			  [methodName]() {  // вместо [methodName]: function() {
			    return "Вася";
			  }
			};
			alert( user.getFirstName() ); // Вася

- super - предназначено только для использования в методах объекта
		
			'use strict';

			let animal = {
			  walk() {
			    alert("I'm walking");
			  }
			};

			let rabbit = {
			  __proto__: animal,
			  walk() {
			    alert(super.walk); // walk() { … }
			    super.walk(); // I'm walking
			  }
			};

			rabbit.walk()		


			'use strict';

			let animal = {
			  walk() {
			    alert("I'm walking");
			  }
			};

			let rabbit = {
			  __proto__: animal,
			  walk: function() { // Надо: walk() {
			    super.walk(); // Будет ошибка!
			  }
			};

			rabbit.walk();

- Свойство [[HomeObject]] – не изменяемое


======================|Классы|======================

	class Название [extends Родитель]  {
	  constructor
	  методы
	}

class:
	- нельзя вызывать без new, будет ошибка
	- Объявление класса с точки зрения области видимости ведёт себя как let.
	В частности, оно видно только в текущем блоке и только в коде, который
	находится ниже объявления (Function Declaration видно и до объявления).

Методы, объявленные внутри class_:

	- доступ к super.
	- Все методы класса работают в строгом режиме use strict, даже если он не указан.
	- Все методы класса не перечислимы. То есть в цикле for..in по объекту их не будет.

			'use strict';

			class User {

			  constructor(name) {
			    this.name = name;
			  }

			  sayHi() {
			    alert(this.name);
			  }

			}

			let user = new User("Вася");
			user.sayHi(); // Вася

- Class Expression

			'use strict';

			let User = class {
			  sayHi() { alert('Привет!'); }
			};

			new User().sayHi();

- Геттеры, сеттеры и вычисляемые свойства

			'use strict';

			class User {
			  constructor(firstName, lastName) {
			    this.firstName = firstName;
			    this.lastName = lastName;
			  }

			  // геттер
			  get fullName() {
			    return `${this.firstName} ${this.lastName}`;
			  }

			  // сеттер
			  set fullName(newValue) {
			    [this.firstName, this.lastName] = newValue.split(' ');
			  }

			  // вычисляемое название метода
			  ["test".toUpperCase()]() {
			    alert("PASSED!");
			  }

			};

			let user = new User("Вася", "Пупков");
			alert( user.fullName ); // Вася Пупков
			user.fullName = "Иван Петров";
			alert( user.fullName ); // Иван Петров
			user.TEST(); // PASSED!

- Статические свойства			

			'use strict';

			class User {
			  constructor(firstName, lastName) {
			    this.firstName = firstName;
			    this.lastName = lastName;
			  }

			  static createGuest() {
			    return new User("Гость", "Сайта");
			  }
			};

			let user = User.createGuest();

			alert( user.firstName ); // Гость

			alert( User.createGuest ); // createGuest ... (функция)

- Наследование

	class Child extends Parent {
	  ...
	}

			'use strict';

			class Animal {
			  constructor(name) {
			    this.name = name;
			  }

			  walk() {
			    alert("I walk: " + this.name);
			  }
			}

			class Rabbit extends Animal {
			  constructor(name) {
			  	super(name);//конструктор - еквіваленнтний автоматичному(автоматично наслідується конструктор батьківського класу)
			  }
			  walk() {
			    super.walk();
			    alert("...and jump!");
			  }
			}

			new Rabbit("Вася").walk();
			// I walk: Вася
			// and jump!



======================|Тип данных Symbol|======================

	let sym = Symbol();
	alert( typeof sym ); // symbol

	let sym1 = Symbol("name");
	alert( sym1.toString() ); // Symbol(name)

	alert( Symbol("name") == Symbol("name") ); // false

- Глобальные символы ( «глобальный реестр»)

		// создание символа в реестре
		let name = Symbol.for("name");

		// символ уже есть, чтение из реестра
		alert( Symbol.for("name") == name ); // true


		// создание символа в реестре
		let name = Symbol.for("name");

		// получение имени символа
		alert( Symbol.keyFor(name) ); // name

	- Symbol.keyFor возвращает undefined, если символ не глобальный		

- Использование символов

не участвует в итерации:

		 'use strict';

		let user = {
		  name: "Вася",
		  age: 30,
		  [Symbol.for("isAdmin")]: true
		};

		// в цикле for..in также не будет символа
		alert( Object.keys(user) ); // name, age

		// доступ к свойству через глобальный символ — работает
		alert( user[Symbol.for("isAdmin")] );

Чтобы получить все символы объекта, есть особый вызов Object.getOwnPropertySymbols.		

======================|Итераторы|======================

- цикл for..of

		let arr = [1, 2, 3]; // массив — пример итерируемого объекта
		for (let value of arr) {
		  alert(value); // 1, затем 2, затем 3
		}	

	для строки 

		for (let char of "Привет") {
		  alert(char); // Выведет по одной букве: П, р, и, в, е, т
		}

- Свой итератор

			'use strict';

			let range = {
			  from: 1,
			  to: 5
			}

			// сделаем объект range итерируемым
			range[Symbol.iterator] = function() {

			  let current = this.from;
			  let last = this.to;

			  // метод должен вернуть объект с методом next()
			  return {
			    next() {
			      if (current <= last) {
			        return {
			          done: false,
			          value: current++
			        };
			      } else {
			        return {
			          done: true
			        };
			      }
			    }

			  }
			};

			for (let num of range) {
			  alert(num); // 1, затем 2, 3, 4, 5
			}		

			===

			'use strict';

			let range = {
			  from: 1,
			  to: 5,

			  [Symbol.iterator]() {
			    return this;
			  },

			  next() {
			    if (this.current === undefined) {
			      // инициализация состояния итерации
			      this.current = this.from;
			    }

			    if (this.current <= this.to) {
			      return {
			        done: false,
			        value: this.current++
			      };
			    } else {
			      // очистка текущей итерации
			      delete this.current;
			      return {
			        done: true
			      };
			    }
			  }

			};

			for (let num of range) {
			  alert(num); // 1, затем 2, 3, 4, 5
			}

			// Произойдёт вызов Math.max(1,2,3,4,5);
			alert( Math.max(...range) ); // 5 (*)

======================|Set, Map, WeakSet и WeakMap|======================

=== Map – коллекция для хранения записей вида ключ:значение

			'use strict';

			let map = new Map();

			map.set('1', 'str1');   // ключ-строка
			map.set(1, 'num1');     // число
			map.set(true, 'bool1'); // булевое значение

			// в обычном объекте это было бы одно и то же,
			// map сохраняет тип ключа
			alert( map.get(1)   ); // 'num1'
			alert( map.get('1') ); // 'str1'

			alert( map.size ); // 3

- Метод set можно чейнить:

			map
			  .set('1', 'str1')
			  .set(1, 'num1')
			  .set(true, 'bool1');

- при создании 

			let map = new Map([
			  ['1',  'str1'],
			  [1,    'num1'],
			  [true, 'bool1']
			]);

- Методы для удаления записей:
	map.delete(key) удаляет запись с ключом key, возвращает true, если такая запись была, иначе false.
	map.clear() – удаляет все записи, очищает map.

- Для проверки существования ключа:
	map.has(key) – возвращает true, если ключ есть, иначе false.

- Для итерации по map используется один из трёх методов:
		map.keys() – возвращает итерируемый объект для ключей,
		map.values() – возвращает итерируемый объект для значений,
		map.entries() – возвращает итерируемый объект для записей [ключ, значение], он используется по умолчанию в for..of.

			'use strict';

			let recipeMap = new Map([
			  ['огурцов',   '500 гр'],
			  ['помидоров', '350 гр'],
			  ['сметаны',   '50 гр']
			]);

			// цикл по ключам
			for(let fruit of recipeMap.keys()) {
			  alert(fruit); // огурцов, помидоров, сметаны
			}

			// цикл по значениям [ключ,значение]
			for(let amount of recipeMap.values()) {
			  alert(amount); // 500 гр, 350 гр, 50 гр
			}

			// цикл по записям
			for(let entry of recipeMap) { // то же что и recipeMap.entries()
			  alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения
			}

- у Map есть стандартный метод forEach, аналогичный массиву:

			 'use strict';

			let recipeMap = new Map([
			  ['огурцов',   '500 гр'],
			  ['помидоров', '350 гр'],
			  ['сметаны',   '50 гр']
			]);

			recipeMap.forEach( (value, key, map) => {
			  alert(`${key}: ${value}`); // огурцов: 500 гр, и т.д.
			});

=== Set – коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз.

			'use strict';

			let set = new Set();

			let vasya = {name: "Вася"};
			let petya = {name: "Петя"};
			let dasha = {name: "Даша"};

			// посещения, некоторые пользователи заходят много раз
			set.add(vasya);
			set.add(petya);
			set.add(dasha);
			set.add(vasya);
			set.add(petya);

			// set сохраняет только уникальные значения
			alert( set.size ); // 3

			set.forEach( user => alert(user.name ) ); // Вася, Петя, Даша

- Основные методы:

			set.add(item) – добавляет в коллекцию item, возвращает set (чейнится).
			set.delete(item) – удаляет item из коллекции, возвращает true, если он там был, иначе false.
			set.has(item) – возвращает true, если item есть в коллекции, иначе false.
			set.clear() – очищает set.			

- Перебор Set осуществляется через forEach или for..of аналогично Map:

			 'use strict';

			let set = new Set(["апельсины", "яблоки", "бананы"]);

			// то же, что: for(let value of set)
			set.forEach((value, valueAgain, set) => {
			  alert(value); // апельсины, затем яблоки, затем бананы
			});


=== WeakMap и WeakSet

			// текущие активные пользователи
			let activeUsers = [
			  {name: "Вася"},
			  {name: "Петя"},
			  {name: "Маша"}
			];

			// вспомогательная информация о них,
			// которая напрямую не входит в объект юзера,
			// и потому хранится отдельно
			let weakMap = new WeakMap();

			weakMap[activeUsers[0]] = 1;
			weakMap[activeUsers[1]] = 2;
			weakMap[activeUsers[2]] = 3;

			alert( weakMap[activeUsers[0]] ); // 1

			activeUsers.splice(0, 1); // Вася более не активный пользователь

			// weakMap теперь содержит только 2 элемента

			activeUsers.splice(0, 1); // Петя более не активный пользователь

			// weakMap теперь содержит только 1 элемент

- У WeakMap есть ряд ограничений:
		Нет свойства size.
		Нельзя перебрать элементы итератором или forEach.
		Нет метода clear()


======================|Генераторы|======================

		function* generateSequence() {
		  yield 1;
		  yield 2;
		  return 3;
		}

		let generator = generateSequence();
		let one = generator.next();// {value: 1, done: false}
		let two = generator.next(); // {value: 2, done: false}
		let three = generator.next();// {value: 3, done: true}
		generator.next();//{done: true}
		generator.next();//{done: true}
		generator.next();//{done: true}


- Генератор – итератор

			'use strict';

			function* generateSequence() {
			  yield 1;
			  yield 2;
			  return 3;
			}

			let generator = generateSequence();

			for(let value of generator) {
			  alert(value); // 1, затем 2
			}

- Композиция генераторов

			'use strict';

			function* generateSequence(start, end) {

			  for (let i = start; i <= end; i++) {
			    yield i;
			  }

			}

			// Используем оператор … для преобразования итерируемого объекта в массив
			let sequence = [...generateSequence(2,5)];

			alert(sequence); // 2, 3, 4, 5

====

			'use strict';

			function* generateSequence(start, end) {
			  for (let i = start; i <= end; i++) yield i;
			}

			function* generateAlphaNum() {

			  // 0..9
			  yield* generateSequence(48, 57);

			  // A..Z
			  yield* generateSequence(65, 90);

			  // a..z
			  yield* generateSequence(97, 122);

			}

			let str = '';

			for(let code of generateAlphaNum()) {
			  str += String.fromCharCode(code);
			}

			alert(str); // 0..9A..Za..z


- yield – дорога в обе стороны

Вызов let result = yield value делает следующее:
	Возвращает value во внешний код, приостанавливая выполнение генератора.
	Внешний код может обработать значение, и затем вызвать next с аргументом: generator.next(arg).
	Генератор продолжит выполнение, аргумент next будет возвращён как результат yield (и записан в result).

			'use strict';

			function* gen() {
			  // Передать вопрос во внешний код и подождать ответа
			  let result = yield "Сколько будет 2 + 2?";

			  alert(result);
			}

			let generator = gen();

			let question = generator.next().value;
			// "Сколько будет 2 + 2?"

			setTimeout(() => generator.next(4), 2000);

- generator.throw

			'use strict';

			function* gen() {
			  try {
			    // в этой строке возникнет ошибка
			    let result = yield "Сколько будет 2 + 2?"; // (**)

			    alert("выше будет исключение ^^^");
			  } catch(e) {
			    alert(e); // выведет ошибку
			  }
			}

			let generator = gen();
			let question = generator.next().value;
			generator.throw(new Error("ответ не найден в моей базе данных")); // (*)

- Плоский асинхронный код

			'use strict';

			// генератор для получения и показа аватара
			// он yield'ит промисы
			function* showUserAvatar() {

			  let userFetch = yield fetch('/article/generator/user.json');
			  let userInfo = yield userFetch.json();

			  let githubFetch = yield fetch(`https://api.github.com/users/${userInfo.name}`);
			  let githubUserInfo = yield githubFetch.json();

			  let img = new Image();
			  img.src = githubUserInfo.avatar_url;
			  img.className = "promise-avatar-example";
			  document.body.appendChild(img);

			  yield new Promise(resolve => setTimeout(resolve, 3000));

			  img.remove();

			  return img.src;
			}

			// вспомогательная функция-чернорабочий
			// для выполнения промисов из generator
			function execute(generator, yieldValue) {

			  let next = generator.next(yieldValue);

			  if (!next.done) {
			    next.value.then(
			      result => execute(generator, result),
			      err => generator.throw(err)
			    );
			  } else {
			    // обработаем результат return из генератора
			    // обычно здесь вызов callback или что-то в этом духе
			    alert(next.value);
			  }

			}

			execute( showUserAvatar() );


======================|Модули|======================

 - AMD – одна из самых древних систем организации модулей, требует лишь наличия
	клиентской библиотеки, к примеру, require.js, но поддерживается и серверными средствами.
 - CommonJS – система модулей, встроенная в сервер Node.JS. Требует поддержки на клиентской
 	и серверной стороне.
 - UMD – система модулей, которая предложена в качестве универсальной. UMD-модули будут
	работать и в системе AMD и в CommonJS.

=== export

Ключевое слово export можно ставить:
	- перед объявлением переменных, функций и классов.
	- отдельно, при этом в фигурных скобках указывается, что именно экспортируется.

		export let one = 1;

		let two = 2;
		export {two};

		export {one, two};

- as - вказує під яким іменем буде доступний обєкт, що експорту{}ється

		export {one as once, two as twice};

		export class User {
		  constructor(name) {
		    this.name = name;
		  }
		};

		export function sayHi() {
		  alert("Hello!");
		};

		// отдельно от объявлений было бы так:
		// export {User, sayHi}

=== import

		import {one, two} from "./nums";

		import {one as item1, two as item2} from "./nums";

		import * as numbers from "./nums";
		// теперь экспортированные переменные - свойства numbers
		alert( `${numbers.one} and ${numbers.two}` ); // 1 and 2

=== export default

		файл user.js:

            export default class User {
			  constructor(name) {
			    this.name = name;
			  }
			};
		
		…А в файле login.js:

			import User from './user';

			new User("Вася");



======================|Proxy|======================

Прокси (proxy) – особый объект, смысл которого – перехватывать обращения
к другому объекту и, при необходимости, модифицировать их.

	let proxy = new Proxy(target, handler)

		target – объект, обращения к которому надо перехватывать.
		handler – объект с «ловушками»: функциями-перехватчиками для операций к target.

- Если ловушки нет – операция идёт над target

=== get/set

Самыми частыми являются ловушки для чтения и записи в объект:

	get(target, property, receiver)

	Срабатывает при чтении свойства из прокси. Аргументы:
		target – целевой объект, тот же который был передан первым аргументом в new Proxy.
		property – имя свойства.
		receiver – объект, к которому было применено присваивание. Обычно сам прокси,
			либо прототипно наследующий от него. Этот аргумент используется редко.

	set(target, property, value, receiver)

	Срабатывает при записи свойства в прокси. Аргументы:
		target – целевой объект, тот же который был передан первым аргументом в new Proxy.
		property – имя свойства.
		value – значение свойства.
		receiver – объект, к которому было применено присваивание, обычно сам прокси, либо прототипно наследующий от него.
	Метод set должен вернуть true, если присвоение успешно обработано и false в случае ошибки (приведёт к генерации TypeError).

			'use strict';

			let dictionary = {
			  'Hello': 'Привет',
			  'Bye': 'Пока'
			};

			dictionary = new Proxy(dictionary, {
			  get(target, phrase) {
			    if (phrase in target) {
			      return target[phrase];
			    } else {
			      console.log(`No phrase: ${phrase}`);
			      return phrase;
			    }
			  }
			})

			// Обращаемся к произвольным свойствам словаря!
			alert( dictionary['Hello'] ); // Привет
			alert( dictionary['Welcome']); // Welcome (без перевода)

=== has (Ловушка has срабатывает в операторе in и некоторых других случаях, когда проверяется наличие свойства)

			alert( 'Hello' in dictionary ); // true
			alert( 'Welcome' in dictionary ); // false, нет такого свойства

			-------

			'use strict';

			let dictionary = {
			  'Hello': 'Привет'
			};

			dictionary = new Proxy(dictionary, {
			  has(target, phrase) {
			    return true;
			  }
			});

			alert("BlaBlaBla" in dictionary); // true

=== deleteProperty (Срабатывает при операции delete, должна вернуть true, если удаление было успешным)

delete не повлияет на исходный объект, так как все операции перехватываются и «аннигилируются» прокси:

			'use strict';

			let dictionary = {
			  'Hello': 'Привет'
			};

			let proxy = new Proxy(dictionary, {
			  deleteProperty(target, phrase) {
			    return true; // ничего не делаем, но возвращает true
			  }
			});

			// не удалит свойство
			delete proxy['Hello'];

			alert("Hello" in dictionary); // true

			// будет то же самое, что и выше
			// так как нет ловушки has, операция in сработает на исходном объекте
			alert("Hello" in proxy); // true

=== enumerate (Ловушка enumerate перехватывает операции for..in и for..of по объекту)

	Сначала получаем список интересующих нас свойств в виде массива.
	Метод должен возвратить итератор по массиву. Встроенный итератор
		для массива получаем через вызов props[Symbol.iterator]().

			'use strict';

			let user = {
			  name: "Ilya",
			  surname: "Kantor",
			  _version: 1,
			  _secret: 123456
			};

			let proxy = new Proxy(user, {
			  enumerate(target) {
			    let props = Object.keys(target).filter(function(prop) {
			      return prop[0] != '_';
			    });

			    return props[Symbol.iterator]();
			  }
			});

			// отфильтрованы свойства, начинающиеся с _
			for(let prop in proxy) {
			  alert(prop); // Выведет свойства user: name, surname
			}

=== apply(ловушка только для функций)

	Метод apply(target, thisArgument, argumentsList) получает:

		target – исходный объект.
		thisArgument – контекст this вызова.
		argumentsList – аргументы вызова в виде массива.

			'use strict';

			function sum(a, b) {
			  return a + b;
			}

			let proxy = new Proxy(sum, {
			  // передаст вызов в target, предварительно сообщив о нём
			  apply: function(target, thisArg, argumentsList) {
			    alert(`Буду вычислять сумму: ${argumentsList}`);
			    return target.apply(thisArg, argumentsList);
			  }
			});

			// Выведет сначала сообщение из прокси,
			// а затем уже сумму
			alert( proxy(1, 2) );

=== construct(target, argumentsList) перехватывает вызовы при помощи new

			'use strict';

			function User(name, surname) {
			  this.name = name;
			  this.surname = surname;
			}

			let UserProxy = new Proxy(User, {
			  // передаст вызов new User, предварительно сообщив о нём
			  construct: function(target, argumentsList) {
			    alert(`Запуск new с аргументами: ${argumentsList}`);
			    return new target(...argumentsList);
			  }
			});

			let user = new UserProxy("Ilya", "Kantor");

			alert( user.name ); // Ilya

=== Полный список возможных функций-перехватчиков, которые может задавать handler:

		getPrototypeOf – перехватывает обращение к методу getPrototypeOf.
		setPrototypeOf – перехватывает обращение к методу setPrototypeOf.
		isExtensible – перехватывает обращение к методу isExtensible.
		preventExtensions – перехватывает обращение к методу preventExtensions.
		getOwnPropertyDescriptor – перехватывает обращение к методу getOwnPropertyDescriptor.
		defineProperty – перехватывает обращение к методу defineProperty.
		has – перехватывает проверку существования свойства, которая используется в операторе in и в некоторых других методах встроенных объектов.
		get – перехватывает чтение свойства.
		set – перехватывает запись свойства.
		deleteProperty – перехватывает удаление свойства оператором delete.
		enumerate – срабатывает при вызове for..in или for..of, возвращает итератор для свойств объекта.
		ownKeys – перехватывает обращения к методу getOwnPropertyNames.
		apply – перехватывает вызовы target().
		construct – перехватывает вызовы new target().

======================||======================
======================||======================
======================||======================
======================||======================
======================||======================
======================||======================
======================|Basic js|======================
//http://slides.com/contact/basicjs#/

JavaScript is a high-level, dynamic, untyped interpreted programming language 
that is well-suited to object-oriented and functional programming styles. 
JavaScript derives its syntax from Java, its first-class functions from Scheme, 
and its prototype-based inheritance from Self.
============================================================{}
JavaScript does:
		Creating visual effects on the page.
		Calculation.
		Working with text, arrays, dates, and regular expressions
		Input data validation.
		Dynamically change page content.
		Interaction with the server without reloading the page(AJAX).

JavaScript does not:
		Input and Output
		Networking
		Storage
		Graphics
============================================================
6 Main Data types:
	- 5 primitive types 
	- Object

Primitive Data Types:
	- boolean (true or false)
	- number (0, 1, 2, -24, 45.5, NaN, +-Infinity)
	- string ('', 'hello', '45')

Primitive Special Types:
	- null (typeof returns object)
	- undefined

Object Data Type:
	- Ordinary objects 
	- Arrays
	- Functions

Useful JavaScript Objects
	- Date
	- RegExp
	- The Global Object contains:
		- global properties like undefined, Infinity, and NaN
		- global functions like isNaN(), parseInt() and eval()
		- constructor functions like Date(), RegExp(), String(), Object(), and Array()
		- global objects like Math and JSON

============================================================

Primitives (number, string, booleans, undefined, null) Are Immutable!!!

Objects (regular objects or arrays) Are Mutable!!!

=>		Primitives are compared by value
			Objects are compared by reference

============================================================

======================|Functions|======================

Arguments are passed to functions by value (except for Objects)

=== arrow functions

		param1 => //statements

		(param1, param2) => //statements

		param1 => {
		  //statements
		}

		(param1, param2) => {
 		 //statements
		}

=== Bind (ECMAScript 5)

function logContext(){
    console.log(this);
}

logContext.bind({ key: 'value' })();
    // { key: 'value' }

logContext(); // Window { ... }
logContext.bind(1)(); // Window { ... }
logContext.bind(function(){  })();
    // Window { ... }

=== FIRST CLASS FUNCTIONS

		Constructing new functions during the execution of a program

		Passing functions as arguments to other functions

=== CLOSURES

		The function defined in the closure 'remembers' the environment in which it was created

=== PURE FUNCTION

The function always evaluates the same result value given the same argument values. 
The function result value cannot depend on any hidden information or state that may 
change while program execution proceeds or between different executions of the program, 
nor can it depend on any external input from I/O devices.
 
Evaluation of the result does not cause any semantically observable side effect or output

=== IIFE Immediately-invoked function expression
		(self-executing anonymous function)

		JavaScript design pattern which produces a lexical scope using JavaScript''s function scoping.
 
		Immediately-invoked function expressions can be used:
    	protect against polluting the global environment
      allow public access to methods while retaining privacy for variables defined within the function

    ; (function(){})()


============================================================
============================================================
============================================================
============================================================


var varStr = 'I am string',
	varStr1 = 'I am string',
	varNum = 123.45,
	varNum1 = 123.45,
	varArr = [1,'2',3,4],
	varArr1 = [1,'2',3,4],
	varArrOfArr = [[1,2,3],[4,5,6],[7,8,9]],
	funcExpr = function(a){//!!!!arguments[] - is not an array!!!!!!
		//operators
		return a;
	},
	varObj = {
		valNum: 123,
		valStr: 'string',
		valFun: function(a){
			return a;
		}
	};
function funcDecl (a) {
	return a;
};
(function(){
	//
})();

//стрелочные функции (зберігається контекст)

function (a, b) {
	return a + b;
}

(a, b) => a + b;

(a, b) => {
	console.log(a + b);
	return a + b;
}



//		Logical Operators

&& and
|| or
! not

console.log( typeof varArr);

console.log( varNum===varNum1 );//true
console.log( varStr===varStr1 );//true
console.log( varArr==varArr1 );//false
console.log( new Array(3)==",," );//true
console.log( new Array(3)===",," );//false
console.log( 1/0 === Infinity );//true
console.log( -1/0 === -Infinity );//true
console.log( NaN == NaN );//false
console.log( 0=='' );//true
console.log( 0==='' );//false
console.log( false =='0' );//true
console.log( false =='' );//true
console.log( false ==='0' );//false
console.log( false ==='' );//false
console.log( false===Boolean(NaN) );//true
console.log( false===Boolean("") );//true
console.log( false===Boolean(0) );//true
console.log( false===Boolean(undefined) );//true
console.log( false===Boolean(null) );//true
//		Type


// 		bitwise operators

& and
| operators
^ XOR
<< shift left
>> shift right
>>> shift right!

console.log( 123.45 | 0);
console.log( ~~67.89);
document.write("\u0030"); 
console.log( typeof "\u0030"); //string

//		Type conversion

String();// 123+""
Number();// +"213412" //Number
Boolean();// !!'eny string'===true

//		typeof

console.log( typeof 1 );         // 'number'
console.log( typeof true );      // 'boolean'
console.log( typeof "Текст" );   // 'string'
console.log( typeof undefined ); // 'undefined'
console.log( typeof null );      // 'object' (ошибка в языке)
console.log( typeof alert );     // 'function'

console.log( typeof {} ); // 'object'
console.log( typeof [] ); // 'object'
console.log( typeof new Date ); // 'object'

//		Secret property [[Class]]

var toString = {}.toString;

var arr = [1, 2];
console.log( toString.call(arr) ); // [object Array]

var date = new Date;
console.log( toString.call(date) ); // [object Date]

var user = { name: "Вася" };
console.log( toString.call(user) ); // [object Object]

function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

//		isArray

Array.isArray(arr) - returns true/false if arr - Array or not

//		instanseof

function User() {}
var user = new User();
alert( user instanceof User ); // true


// Global Properties

//     Infinity
//     NaN
//     undefined

// Global Methods

//     decodeURI()
//     decodeURIComponent()
//     encodeURI()
//     encodeURIComponent()
//     escape()
//     eval()
//     isFinite()
//     isNaN()
//     Number()
//     parseFloat()
//     parseInt()
//     String()
//     unescape()

//		Numbers

(function(){
	var numInt = 123,
		numFloat = 45.678,
		numObj = new Number(90);
	console.log(parseInt(numFloat));
	console.log(parseFloat(numInt/3));
	console.log(isNaN(numInt));//false
	console.log(numFloat.toFixed(1));
	console.log(numInt.toExponential(2));
	console.log(numFloat.toPrecision(3));
	console.log(typeof(numObj));
	console.log(typeof(numObj.valueOf()));
	console.log(numObj.valueOf());
})();

function isNumeric(n) { //перевірка isNaN
  return !isNaN(parseFloat(n)) && isFinite(n);
}

isFinite(n)		convert n to number and return true(number and true, 
false, null and "")/false(NaN, Infinity)

var number = 123456789;
alert( number.toLocaleString() ); // 123 456 789

// Number Properties

//     constructor
//     MAX_VALUE
//     MIN_VALUE
//     NEGATIVE_INFINITY
//     POSITIVE_INFINITY
//     prototype


// Boolean Properties

//     constructor
//     prototype

// Boolean Methods

//     toString()
//     valueOf()


// Math Methods

//     abs(x)
//     acos(x)
//     asin(x)
//     atan(x)
//     atan2(y,x)
//     ceil(x)
//     cos(x)
//     exp(x)
//     floor(x)
//     log(x)
//     max(x,y,z,...,n)
//     min(x,y,z,...,n)
//     pow(x,y)
//     random()
//     round(x)
//     sin(x)
//     sqrt(x)
//     tan(x)


// Math Properties

//     E
//     LN2
//     LN10
//     LOG2E
//     LOG10E
//     PI
//     SQRT1_2
//     SQRT2

//		ARRAYS


(function(){
	var myArr = [1,2,3,4,'56'],
		myNewArr = new Array(7,8,'90');
	(function(){
		var myArr1 = [1,2,3,4,'56'],
			myArr2 = [1,2,3,4,'56'];
		console.log(myArr1.unshift('78',9)," - new length",myArr1," - new array");
		console.log(myArr2.push('78',9)," - new length",myArr2," - new array");
		console.log(myArr1.shift()," - deleted first element",myArr1," - new array");
		console.log(myArr2.pop()," - deleted last element",myArr2," - new array");
	})();
	console.log(myArr.splice(1,2)," - deleted elements",myArr," - new array");//but it works simultaneously
	console.log(myArr.splice(1,0,2,3),myArr," - new(old) array");//but it works simultaneously
	console.log(myArr.splice(2,3,'3','4',56)," - replaced elements",myArr," - newest array");//but it works simultaneously

// 		Array Methods

    arr.concat(arr1,arr2,...) - combine arrays
    indexOf(el) - return first matched index or -1
    join("str") - convert to string separating by "str"
    lastIndexOf(el) - return last matched index or -1
    pop() - delete last el
    push() - add el to the end
    reverse() - reverse array
    shift() - delete first el
    slice(el1,el2) - return array [el1,...,el2]
    sort(compareNumeric) - first letter or first digit
		function compareNumeric(a, b) {
		  if (a > b) return 1;
		  if (a < b) return -1;
		}
		var arr = [ 1, 2, 15 ];
		arr.sort(compareNumeric);
		alert(arr);  // 1, 2, 15
		function compareNumericUpgraded(a, b) {
		  return a - b;
		}

    splice() - replace elements
    toString() - convert to string
    unshift() - add to the beginning
    valueOf() - array or object (created by constructor or literal declaration)

arr.forEach(callback[, thisArg]) - method-cycle(doesnt return enything) to change one by one all elements of array
arr.filter(callback[, thisArg]) - method-cycle(doesnt return enything) to delete one by one elements of array if function callback return true(function callback must return true/false)
arr.map(callback[, thisArg]) - method-cycle, which return array of results function callback for every elements of arr
arr.every(callback[, thisArg]) - method-cycle, which return true if function callback return true for all elements of arr
arr.some(callback[, thisArg]) -  method-cycle, which return true if function callback return true for at least one of element of arr
function callback(item, i, arr){
};

arr.reduce(callback[, initialValue]) - !!! iam sure you know it :) !!!
function callback(previousValue, currentItem, index, arr){
};

})();




//		STRING

=====================================================
 
!!!! Template Strings (Шаблонные строки)

			`строка текста`

			`строка текста 1
			 строка текста 2`

			`строка текста ${выражение} строка текста`

			tag `строка текста ${выражение} строка текста`


!!!! the tagged template function

			var a = 5;
			var b = 10;

			function myTag(strings, ...values) {
			  console.log(strings[0]); // "Hello "
			  console.log(strings[1]); // " world"
			  console.log(values[0]);  // 15
			  console.log(values[1]);  // 50

			  return "Bazinga!";
			}

			myTag`Hello ${ a + b } world ${ a * b}`;
			// "Bazinga!"

		= Специальное свойство raw

		function tag(strings, ...values) {
		  return strings.raw[0];
		}

		tag`string text line 1 \n string text line 2`;
		// "string text line 1 \\n string text line 2"

		String.raw`Hi\n${2+3}!`; // "Hi\\n5!"

================================================

(function(){
	var SomeStr = "I am String!!!",
		SomeNewStr = new String("I am String too!"),
		someRegExp=/am/g;
	console.log(SomeStr.length);
	console.log(SomeStr.toUpperCase());
	console.log(SomeStr.toLowerCase());
	console.log(SomeStr.indexOf("am"));
	console.log(SomeStr.lastIndexOf("am"));
	console.log(SomeStr.slice(5,13));
	console.log(SomeStr.charAt(3));
	console.log(SomeStr.charCodeAt(3));
	console.log(String.fromCharCode(65,66,67));
	console.log(SomeStr.substr(5,7));
	console.log(SomeStr.search(someRegExp));
	console.log(SomeStr.match(someRegExp));
	console.log(SomeStr.replace(someRegExp,"am not Number, I am"));
	console.log(SomeStr.split(" "));
	console.log(SomeStr.concat(" ",SomeNewStr," ",SomeNewStr));
	console.log(typeof(SomeNewStr));
	console.log(typeof(SomeNewStr.valueOf()));
	console.log(SomeNewStr.valueOf());
})();

// String Properties

//     constructor
//     length
//     prototype

// String HTML Wrapper Methods

//     anchor()
//     big()
//     blink()
//     bold()
//     fixed()
//     fontcolor()
//     fontsize()
//     italics()
//     link()
//     small()
//     strike()
//     sub()
//     sup()

// //		OPERATORS

if (true) {};
if (true) {} else{};
if (true) {if (true){} else{}......)};

(true)?{}:{};//ternary operator
(true)?{(true)?{......}}:{};

var r = 5;
switch(r){
	case 1: {
		console.log("r=1");	
	};
	break;
	case r = 2: {
		console.log("r=2");
	};
	break;
	default: {
		console.log("r!=1,2");
	};
	break;
};

//	аналог goto

	MyLabel:
	//	code...
	break MyLabel;

//		CYCLES

while(true){};

do{}while(true);

for (var i = 0; i < Things.length; i++) {
	Things[i]
};

//for..in
(function(){
	var objectTmp = {
		prop1 : 1,
		prop2 : 2,
		prop3 : 3
	};
	for(prop in objectTmp){
		if (objectTmp.hasOwnProperty(prop)) {
			console.log(objectTmp[prop]);
		};
	};
})();
//		callback function
(function(){
	var func = function(callback){
		var name = "Nick";
		return callback(name);
	};
	console.log(func(function(n){return "Hello, " + n + ", from callback function :)"}));
})();

//		REGULAR EXPRESSION


// 	var regExpr = /./g,
// 		newRegExpr = new RegExp(".","g");

// Modifiers

//     i    Perform case-insensitive matching
//     g    Perform a global match (find all matches rather than stopping after the first match)
//     m    Perform multiline matching

// Brackets

//     [abc]    Find any character between the brackets
//     [^abc]    Find any character not between the brackets
//     [0-9]    Find any digit from 0 to 9
//     [A-Z]    Find any character from uppercase A to uppercase Z
//     [a-z]    Find any character from lowercase a to lowercase z
//     [A-z]    Find any character from uppercase A to lowercase z
//     [adgk]    Find any character in the given set
//     [^adgk]    Find any character outside the given set
//     (red|blue|green)    Find any of the alternatives specified

// Metacharacters

//     .    Find a single character, except newline or line terminator
//     \w    Find a word character
//     \W    Find a non-word character
//     \d    Find a digit
//     \D    Find a non-digit character
//     \s    Find a whitespace character
//     \S    Find a non-whitespace character
//     \b    Find a match at the beginning/end of a word
//     \B    Find a match not at the beginning/end of a word
//     \0    Find a NUL character
//     \n    Find a new line character
//     \f    Find a form feed character
//     \r    Find a carriage return character
//     \t    Find a tab character
//     \v    Find a vertical tab character
//     \xxx    Find the character specified by an octal number xxx
//     \xdd    Find the character specified by a hexadecimal number dd
//     \uxxxx    Find the Unicode character specified by a hexadecimal number xxxx
var regExpp = /\d{2}\.\d{2}\.\d{4}/; dd.mm.yyyy
// Quantifiers

//     n+    Matches any string that contains at least one n
//     n*    Matches any string that contains zero or more occurrences of n
//     n?    Matches any string that contains zero or one occurrences of n
//     n{X}    Matches any string that contains a sequence of X n's
//     n{X,Y}    Matches any string that contains a sequence of X to Y n's
//     n{X,}    Matches any string that contains a sequence of at least X n's
//     n$    Matches any string with n at the end of it
//     ^n    Matches any string with n at the beginning of it
//     ?=n    Matches any string that is followed by a specific string n
//     ?!n    Matches any string that is not followed by a specific string n

// RegExp Properties

//     global		true/false(does it used modifier g)
//     ignoreCase		true/false(does it used modifier i)
//     lastIndex		(use only with modifier g)
//     multiline		true/false(does it used modifier m)
//     source		return regular expression without \brackets\ and modifiers

// RegExp Methods

//     exec(str)		return array of matched parts of str
//     test(str)		return true/false (one match or no)

var regexp = new RegExp("шаблон", "флаги");
var regexp = /шаблон/; // без флагов
var regexp = /шаблон/gmi; // с флагами gmi


Для поиска только одного совпадения:
    Найти позицию первого совпадения – str.search(reg).
    Найти само совпадение – str.match(reg).
    Проверить, есть ли хоть одно совпадение – regexp.test(str) или str.search(reg) != -1.
    Найти совпадение с нужной позиции – regexp.exec(str), начальную позицию поиска задать в regexp.lastIndex.
Для поиска всех совпадений:
    Найти массив совпадений – str.match(reg), с флагом g.
    Получить все совпадения, с подробной информацией о каждом – regexp.exec(str) с флагом g, в цикле.
Для поиска-и-замены: : - Замена на другую строку или функцией -- `str.replace(reg, str|func)`
Для разбивки строки на части:
        str.split(str|reg)

 [ \ ^ $ . | ? * + ( ) //символи, які потрібно екранувати

\d – то же самое, что [0-9],
\w – то же самое, что [a-zA-Z0-9_],
\s – то же самое, что [\t\n\v\f\r ]

в [] без экранирования можно использовать символы:

    Точка '.'.
    Плюс '+'.
    Круглые скобки '( )'.
    Дефис '-', если он находится в начале или конце квадратных скобок, то есть не выделяет диапазон.
    Символ каретки '^', если не находится в начале квадратных скобок.
    А также открывающая квадратная скобка '['.

+ // то же что {1,}.
? // то же что и {0,1}
* // то же что {0,}

? - змінює режим пошуку на з "скупого" на "лінивий", якщо стоїть після іншого квантифікатора

^ - початок тексту
$ - кінець тексту

| - або



//		OBJECT

(function(){
	var myObject = {
		prop1:1,
		prop3:"3",
		objFunc: function(a){
			return myObject.prop1 + a;
		}
	};
	myObject.newProp="new property";
	myObject.newFunc=function(b){
		return this.prop1+b;
	};
	console.log(myObject);
	console.log(myObject.objFunc(1));
	console.log(myObject.newFunc(1));
})();

//			Логическое преобразование

if ({} && []) {
  alert( "Все объекты - true!" ); // alert сработает
}

//			Строковое преобразование

var user = {
  firstName: 'Василий',
  toString: function() {
    return 'Пользователь ' + this.firstName;
  }
};
alert( user );  // Пользователь Василий

var obj = {
  toString: function() {
    return 123;
  }
};
alert( obj ); // 123

alert( [1, 2] ); // toString для массивов выводит список элементов "1,2"
alert( new Date ); // toString для дат выводит дату в виде строки
alert( function() {} ); // toString для функции выводит её код

//			Численное преобразование

var room = {
  number: 777,
  valueOf: function() { return this.number; },
  toString: function() { return this.number; }
};
alert( +room );  // 777, вызвался valueOf
delete room.valueOf; // valueOf удалён
alert( +room );  // 777, вызвался toString

alert( new Date() ); // toString: Дата в виде читаемой строки
alert( +new Date() ); // valueOf: кол-во миллисекунд, прошедших с 01.01.1970

console.log(room.valueOf()==room);//false

alert( ['x', 'y'] == 'x,y' ); // true
alert( [] == '' ); // true

//			!!! descriptors, get, set !!!

Object.defineProperty(obj, prop, descriptor) - to manage ptoperty of object

	var obj = {};
	Object.defineProperty(obj, "prop", {
		// value: ,	// do not use with get/set
		// writable: , // == false(default) // do not use with get/set
		// configurable: , // == false(default)//if true - allows to change dscriptor and remove property
		// enumerable: , // == false(default)//if true - allow to see this property by enumeration properties of object
		set: function(val){
			this.value = val;
		},
		get: function(){
			return this.value;
		}
	});
	obj.prop = 4;
	console.log(obj.prop);

	Object.defineProperties(obj, descriptors) - to manage ptopertIES of object

	Object.defineProperty(obj,{
		proper1:{
			value: ,
			enumerable: ;
		},
		proper2:{
			...
		}
	});

Object.keys(obj) - returns list of enumerable properties of obj
Object.getOwnPropertyNames(obj) - returns list of all properties of obj
Object.getOwnPropertyDescriptor(obj, prop) - returns descriptor for prop in obj
Object.preventExtensions(obj) - prohibit to add properties to object
Object.seal(obj) - prohibit to add/remove properties to object and make all 
		current properties configurable: false.
Object.freeze(obj) - prohibit to add/remove/change properties to/in object 
		and make all current properties configurable: false, writable: false.
Object.isExtensible(obj), Object.isSealed(obj), Object.isFrozen(obj) - returns true/
		false if some of previosly described methods was used

//		!!!! call and apply !!!!  method borrowing !!!!!

func.call(context, arg1, arg2, ...) - runs function func(arg1, arg2, ...) in context (this indicates on context)
[].slice.call(arguments) - returns array of arguments
func.apply(context, [arg1, arg2, ...]) - works like .call with array of arguments [arg1, arg2, ...]

//		associating context, bind

1. use anonymous function as wrapper
2. bind to associate with context
function bind(func, context) {
  return function() { // (*)
    return func.apply(context, arguments);
  };
};
3. bilt-in methob "bind"
var wrapper = func.bind(context[, arg1, arg2...])
var associatedFunc = func.bind(context);
4. bindAll:
for (var prop in user) {
  if (typeof user[prop] == 'function') {
    user[prop] = user[prop].bind(user);
  }
}

//		curring

Карринг (currying) или каррирование — термин функционального программирования,
который означает создание новой функции путём фиксирования аргументов существующей.

 //“частична функция” (partial function)
 function mul(a, b) {
  return a * b;
};
var doubles = mul.bind(null, 2);
alert( doubles(3) ); // = mul(2, 3) = 6
alert( doubles(4) ); // = mul(2, 4) = 8
alert( doubles(5) ); // = mul(2, 5) = 10 

//	Кросс-браузерная эмуляция bind

function bind(func, context /*, args*/) {
  var bindArgs = [].slice.call(arguments, 2); // (1)
  function wrapper() {                        // (2)
    var args = [].slice.call(arguments);
    var unshiftArgs = bindArgs.concat(args);  // (3)
    return func.apply(context, unshiftArgs);  // (4)
  }
  return wrapper;
};

//		DATE OBJECT

//		ISO format  YYYY-MM-DDTHH:mm:ss.sssZ

(function() {
	var myDate = new Date(),
		myBirthdayDate = new Date(1993,3,12,14,0,0,0);
		// new Date()
		// new Date(milliseconds)
		// new Date(datestring)
		// new Date(year, month, date, hours, minutes, seconds, ms)
		console.log(myDate);
		console.log(myBirthdayDate);
		console.log(typeof myDate);//object
		console.log(myDate.getFullYear());// return year
		console.log(myDate.getMonth());// return 0..11
		console.log(myDate.getDate());// return 1..31
		console.log(myDate.getDay());// return 0..6(0-sunday)
		console.log(myDate.getHours());// return 0..23
		console.log(myDate.getMinutes());// return 0..59
		console.log(myDate.getSeconds());// return 0..59
		console.log(myDate.getMilliseconds());// return 0..999
		console.log(myDate.getTime());//return time from 01.01.1970 till now in ms
		console.log(myDate.getTimezoneOffset());// difference between timezones in minutes
		console.log(myDate.getUTCHours());//	
		// getUTCDate()				
		// getUTCDay()
		// getUTCFullYear()
		// getUTCHours()						-	world time
		// getUTCMilliseconds()
		// getUTCMinutes()
		// getUTCMonth()
		// getUTCSeconds()
		console.log(Date.parse("date in string"));// return time from 01.01.1970 till "date in string" in ms
		console.log(myDate.setDate(31));// change date in myDate
		// setDate()
		// setFullYear()
		// setHours()
		// setMilliseconds()
		// setMinutes()
		// setMonth()
		// setSeconds()
		// setTime()
		// setUTCDate()
		// setUTCFullYear()
		// setUTCHours()
		// setUTCMilliseconds()
		// setUTCMinutes()
		// setUTCMonth()
		// setUTCSeconds() 

		// toString()// return full date
		// toDateString()// return day of week, date, month, year
		// toISOString()// return string in ISO format YYYY-MM-DDTHH:mm:ss.sssZ
		// toISOString()
		// toJSON()
		// toLocaleDateString()
		// toLocaleTimeString()
		// toLocaleString()
		// toString()
		// toTimeString()
		// toUTCString()
		// UTC()

//Date.parse(str) //str ="YYYY-MM-DDTHH:mm:ss.sssZ" - return converted time in ms
//Date.now() // return current date in ms

var date = new Date(2014, 11, 31, 12, 30, 0);
var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
console.log( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
console.log( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM
})();

//				!!!for timer!!!!

performance.now() - return time in ms from beginning download page till now
console.time(flag);
console.timeEnd(flag) - return time in ms from console.time(flag) to console.timeEnd(flag)

//					!!!BOM!!!

// Window Properties

console.log(window.closed);
console.log(window.defaultStatus);
console.log(window.document);
console.log(window.frames);
console.log(window.history);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.length);
console.log(window.location);
console.log(window.name);
console.log(window.navigator);
console.log(window.opener);
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(window.pageXOffset);
console.log(window.pageYOffset);
console.log(window.parent);
console.log(window.screen);
console.log(window.screenLeft);
console.log(window.screenTop);
console.log(window.screenX);
console.log(window.screenY);
console.log(window.self);
console.log(window.status);
console.log(window.top);

// Window Methods

alert("I am alert");window.alert("I am alert");
confirm("Chose Yes or No!");//return true/false
prompt("Write something:", "default value");// return written string
print();// print current window
focus();// focus on current window
blur();// shift focus away from the current window
clearInterval(idInterval);
clearTimeout(idTimeout);
var idInterval = setInterval("js code or function", delay in ms);//		and return idInterval
var idTimeout = setTimeout("js code or function", delay in ms);//			and return idTimeout
var newWindow = window.open("http://www.football.ua");
newWindow.close();

Since Firefox 7, its no longer possible for a web site to change the default size of a window in a browser, according to the following rules:
									    You cant resize a window or tab that wasn’t created by window.open.
    									You cant resize a window or tab when its in a window with more than one tab.
resizeTo(x,y); resizeBy(dx,dy);	-	it DOESNT work the same in Firefox!!! 
moveTo(x,y); moveBy(dx,dy); - it DOESNT work the same in Firefox!!!

scrollTo(x,y);scrollBy(dx,dy); - it workS in Firefox!!!

    // alert()
    // blur()
    // clearInterval()
    // clearTimeout()
    // close()
    // confirm()
    // focus()
    // moveBy()
    // moveTo()
    // open()
    // print()
    // prompt()
    // resizeBy()
    // resizeTo()
    // scrollBy()
    // scrollTo()
    // setInterval()
    // setTimeout()

//		setTimeout & setInterval

var timerId = setTimeout(func / code, delay[, arg1, arg2...])

var timerId = setTimeout(...);
clearTimeout(timerId);

var timerId = setInterval(func / code, delay[, arg1, arg2...])
clearInterval(timerId);

//	приклад рекурсивного setTimeout
var timerId = setTimeout(function tick() {
  alert( "тик" );
  timerId = setTimeout(tick, 2000);
}, 2000);

// Navigator Properties

console.log(window.navigator.appCodeName);// DO NOT USE IT!!! it was deleted from all browsers
console.log(navigator.appName);// DO NOT USE IT!!! it was deleted from all browsers
console.log(navigator.appVersion);// DO NOT USE IT!!! it was deleted from all browsers
console.log(navigator.cookieEnabled);// true/false (is cookies turned on or not)
console.log(navigator.platform);// DO NOT USE IT!!! it was deleted from all browsers
console.log(navigator.userAgent);// DO NOT USE IT!!! it was deleted from all browsers
//		BUT ALL PREVIOUS DISCRIBED PROPERTIES ARE STILL WORKING!!! :)

// Navigator Methods

console.log(navigator.javaEnabled());//true/false (is java turned on or not)
//navigator.registerContentHandler(mimeType, uri, title);
//navigator.registerProtocolHandler(protocol, uri, title);

// Screen Properties

console.log(window.screen.availHeight);
console.log(screen.availWidth);
console.log(screen.colorDepth);
console.log(screen.height);
console.log(screen.pixelDepth);
console.log(screen.width);

// History Properties

console.log(window.history.length);

// History Methods

// window.history.back();~history.go(-1);
// history.forward();~history.go(1);
// history.go(n);

// Location Properties

console.log(window.location.hash);
console.log(location.host);
console.log(location.hostname);
console.log(location.href);
console.log(location.pathname);
console.log(location.port);
console.log(location.protocol);
console.log(location.search);

// Location Methods

window.location.assign("http://www.football.ua");//redirect on input url
location.reload(true/false);
location.replace("http://www.football.ua/#" + newPage);

=====================================================================================
=====================================================================================
//			!!!DOM!!!

- element nodes
- text nodes

.parentNode
.previousSibling
.nextSibling
.childNodes
.firstChild
.lastChild

тільки елементи
.parentElement
.previousElementSibling
.nextElementSibling
.children
.firstElementChild
.lastElementChild

таблиці завжди мають <tbody>

консоль в браузері:
https://developers.google.com/web/tools/chrome-devtools/debug/console/console-reference
$$("div.my") – шукає всі елементи в DOM за даним CSS-селектором.
$("div.my") – шукає перший елемент в DOM за даним CSS-селектором.
$0 - останній вибраний елемент
$1 - передостанній

в DOM при відсутності елемента - null (а не undefined)

<HTML> = document.documentElement
<BODY> = document.body

//колекція -> в масив

var elems = document.documentElement.childNodes;
[].forEach.call(elems, function(elem) {
  alert( elem ); // HEAD, текст, BODY
});

var elems = document.documentElement.childNodes;
elems = Array.prototype.slice.call(elems); // теперь elems - массив
elems.forEach(function(elem) {
  alert( elem.tagName ); // HEAD, текст, BODY
});

навігація по таблиці

TABLE
table.rows – коллекция строк TR таблицы.
table.caption/tHead/tFoot – ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
table.tBodies – коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
THEAD/TFOOT/TBODY
tbody.rows – коллекция строк TR секции.
TR
tr.cells – коллекция ячеек TD/TH
tr.sectionRowIndex – номер строки в текущей секции THEAD/TBODY
tr.rowIndex – номер строки в таблице
TD/TH
td.cellIndex – номер ячейки в строке


document.getElementById("id")//але можна зветратись по id як до глобальної змнної(що не вітається)
elem.getElementsByTagName("tag")
elem.getElementsByTagName('*') - всі "потомки"
document.getElementsByName("name") - з відповідним атрибутом name
elem.getElementsByClassName("className")
elem.querySelectorAll("css") - напр   var elements = document.querySelectorAll('ul > li:last-child');
elem.querySelector("css") ~ elem.querySelectorAll(css)[0]
elem.matches("css") returns true/false
elem.closest("css") - найближчий елемент вище в ієрархії DOM

//

alert( document.body instanceof HTMLBodyElement ); // true

alert( document.body ); // [object HTMLBodyElement]
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true

тип
	.nodeType (1 - елемент, 2 - текст)
тег
	.nodeName - назва тега для всього
	.tagName - тільки для елементів

.innerHTML - для node-елементів
.innerHTML+= - всеодно перезапис

.outerHTML - тільки читання (запис - створює новий елемент, не замінює старий)

.data - читання/запис вмісту вузлів
.nodeValue - працює як .data, але на вузлах де немає .data .nodeValue = null

.textContent - тільки текст всередині елемента(включає переведення рядка, але без тегів) - 
захист від користувачів(обмеження в передаванні тегів з текстом)

.hidden - приховання(true/false)

.value - значення для INPUT, SELECT або TEXTAREA
.id - ідентифікатор
.href - адреса посилання
...

//		polyfills(Поліфіли)

приклад
if (document.documentElement.firstElementChild === undefined) { // (1)
  Object.defineProperty(Element.prototype, 'firstElementChild', { // (2)
    get: function() {
      var el = this.firstChild;
      do {
        if (el.nodeType === 1) {
          return el;
        }
        el = el.nextSibling;
      } while (el);

      return null;
    }
  });
}

<script src="https://cdn.polyfill.io/v2/polyfill.min.js"><script>

//		атрибути та DON-властивості

elem.hasAttribute(name) – проверяет наличие атрибута
elem.getAttribute(name) – получает значение атрибута
elem.setAttribute(name, value) – устанавливает атрибут
elem.removeAttribute(name) – удаляет атрибут
var attrs = elem.attributes; // (4) можно получить коллекцию атрибутов
  for (var i = 0; i < attrs.length; i++) {
      alert( attrs[i].name + " = " + attrs[i].value );
  }

якщо потрібно саме те, що в HTML - використовувати атрибути

зазвичай властивість залежить від атрибута(не навпаки)

атрибут - клас:
	'class' - className
	'for' - htmlFor
	Свойство classList – это объект для работы с классами(в IE начиная с IE10) - псевдо-массив.

Методы classList:
	elem.classList.contains("class") – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
	elem.classList.add/remove("class") – добавляет/удаляет класс class
	elem.classList.toggle("class") – если класса class нет, добавляет его, если есть – удаляет.

!Для нестандартних елементів DOM-властивість не створюється(наприклад, у html для div не можна додати атрибут href)

нестандартні атрибути інколи використовують в css

//		dataset, data-атрибути

Стандарт HTML5 специально разрешает атрибуты data-* и резервирует их для пользовательских данных.

<div id="elem" data-about="Elephant" data-user-location="street">
  По улице прошёлся слон. Весьма красив и толст был он.
<div>
<script>
  alert( elem.getAttribute('data-about') ); // Elephant
  alert( elem.getAttribute('data-user-location') ); // street
  alert( elem.dataset.about ); // Elephant
  alert( elem.dataset.userLocation ); // street
<script>

//поліфіл для атрибута hidden
<style>
  [hidden] { display: none }
<style>

<div>Текст<div>
<div hidden>С атрибутом hidden<div>
<div id="last">Со свойством hidden<div>

<script>
    if (document.documentElement.hidden === undefined) {
    Object.defineProperty(Element.prototype, "hidden", {
      set: function(value) {
        this.setAttribute('hidden', value);
      },
      get: function() {
        return this.getAttribute('hidden');
      }
    });
  }
<script>

//	методи contains та compareDocumentPosition

var result = parent.contains(child); - true/false, якщо parent == child теж true

var result = nodeA.compareDocumentPosition(nodeB);

Биты		Число		Значение
000000		0			nodeA и nodeB -- один и тот же узел
000001		1			Узлы в разных документах (или один из них не в документе)
000010		2			nodeB предшествует nodeA (в порядке обхода документа)
000100		4			nodeA предшествует nodeB
001000		8			nodeB содержит nodeA
010000		16			nodeA содержит nodeB
100000		32			Зарезервировано для браузера

поліфіл для compareDocumentPosition для ie8-:
(function() {
  var el = document.documentElement;
  if (!el.compareDocumentPosition && el.sourceIndex !== undefined) {

    Element.prototype.compareDocumentPosition = function(other) {
      return (this != other && this.contains(other) && 16) +
        (this != other && other.contains(this) && 8) +
        (this.sourceIndex >= 0 && other.sourceIndex >= 0 ?
          (this.sourceIndex < other.sourceIndex && 4) +
          (this.sourceIndex > other.sourceIndex && 2) : 1
        ) + 0;
    }
  }
}());

//Додавання/видалення вузлів

var div = document.createElement('div'); - створення елемента з відповідним тегом
var textElem = document.createTextNode('Тут был я'); - створення текстового вузла

parentElem.appendChild(elem) - додавання elem в кінець дочірніх елементів parentElem (parentElem.insertBefore(elem, null);)
parentElem.insertBefore(elem, nextSibling) - додавання elem перед дочірним елементом nextSibling parentElem
!всі методи вставки повертають вставлений вузол

elem.cloneNode(true/false) - клонування елементів(false - без дочірніх)

parentElem.removeChild(elem) - видалення elem зі списку дітей parentElem
parentElem.replaceChild(newElem, elem) - замінює elem на newElem
!обидва методи повертають видалений вузол
!всі методи вставки автоматично видаляють елемент зі старого місця
elem.remove(); - видалення елемента напряму

//insertAdjacentHTML

elem.insertAdjacentHTML(where, html);//крім firefox < 8
	where: Куда по отношению к elem вставлять строку. Всего четыре варианта:
		1. `beforeBegin` -- перед `elem`.
		2. `afterBegin` -- внутрь `elem`, в самое начало.
		3. `beforeEnd` -- внутрь `elem`, в конец.
		4. `afterEnd` -- после `elem`.

elem.insertAdjacentElement(where, newElem) – вставляет в произвольное место не строку HTML, а элемент newElem.
elem.insertAdjacentText(where, text) – создаёт текстовый узел из строки text и вставляет его в указанное место относительно elem.
//поліфіл для firefoz<8
https://learn.javascript.ru/article/multi-insert/insertAdjacentFF.js

//DocumentFragment

var fragment = document.createDocumentFragment();
fragment.appendChild(node);
fragment.cloneNode(true); // клонирование с подэлементами

//append/prepend, before/after, replaceWith

node.append(...nodes) – вставляет nodes в конец node,
node.prepend(...nodes) – вставляет nodes в начало node,
node.after(...nodes) – вставляет nodes после узла node,
node.before(...nodes) – вставляет nodes перед узлом node,
node.replaceWith(...nodes) – вставляет nodes вместо node.
!дані методи нічого не повертають
!рядки вставляються як текстові вузли

//document.write

document.write(str) - працює тільки під час завантаження сторінки - якщо запустити після, то вся сторінка буде стерта, крім document.write(str) 
document.writeln(str)
!не працює в XHTML 

//Стилі, getComputedStyle

властивість .style - обєкт, в якому CSS-властивості пишуться вотТакВот

background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
...

!style.cssFloat замість style.float

-moz-border-radius, -webkit-border-radius:
	button.style.MozBorderRadius = '5px';
	button.style.WebkitBorderRadius = '5px';
!кожен дефіс дає велику букву

!!властивість .style використовуємо там, де не працюють класи

element.style.cssText = "css у вигляді тексту"

! властивість .style включає в собі тільки ті стилі, які були вказані в атрибуті елемента, без врахування каскаду css
всі стилі:
	getComputedStyle(element[, pseudo])// pseudo - вказується, якщо потрібен стиль псевдо-елемента
	!потрібно звертатись до точної властивості(напр marginTop)
//для ie8-
function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem, "") : elem.currentStyle;
}

//розміри та прокрутка елементів, метрики

-=metric-all.png=-

offsetParent

offsetLeft/Top - зміщення відносно offsetParent

offsetWidth/Height - зовнішня висота/ширина елемента(включаючи рамки)

!координати та розміри в js - тільки для видимих елементів

clientTop/Left - ширина верхньої/лівої рамок(насправді відступ внутрішньої частини елемента від зовнішньої)

clientWidth/Height - розмір елемента всередині рамки(включає і padding, але без прокрутки і без індекатора-бігунця прокрутки) - видима частина

scrollWidth/Height - clientWidth/Height з урахуванням прокрутки

scrollLeft/scrollTop - ширина/висота прокрученої(невидимої) частини елемента зліва/зверху
!scrollLeft/scrollTop - можна змінювати(доступні не тільки для читання)

elem.scrollHeight - elem.scrollTop - elem.clientHeight = прокрутка знизу

elem.offsetWidth - elem.clientWidth = ширина полоси прокрутки

!!не варто брати width/height з CSS!!

//розміри та прокрутка сторінки

document.documentElement.clientWidth/Height - ширина/висота видимої області вікна
window.innerWidth/Height - теж саме, але ігнорується ширина лінії прокрутки

визначення розміру всієї сторінки з врахуванням прокрутки:
var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

scrollLeft/scrollTop - працюють некоректно, тому можна використовувати:
window.pageXOffset/pageYOffset - але вони доступні тільки для читання та не підтримуються в ie8-
var scrollTop = window.pageYOffset || document.documentElement.scrollTop; - кросбраузерний варіант

!!щоб прокрутити сторінку за допомогою js, її DOM має бути повністю завантажений

спеціальні методи для прокрутки сторінки
window.scrollBy(x,y) - відносно поточних координат
window.scrollTo(pageX,pageY) - до відповідних координат

elem.scrollIntoView(true/false) - true - прокручується так, що елемент розміщується зверху вікна, false - знизу

document.body.style.overflow = "hidden" - заборона прокрутки

// поліфіл для ie8
Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});
alert( window.pageYOffset );

//координати у вікні

elem.getBoundingClientRect()
	координати повертається у вигляді обєкта з властивостями top, left, right, bottom
	elem.getClientRects() - для часткових прямокутників(напр кожен рядок тексту)

!координати відносно вікна не враховують прокрутку, вони відраховуються від границь поточної видимої області

var elem = document.elementFromPoint(x, y); - повертає елемент, що знаходиться в (x,y) відносно вікна, або null, якщо координати неправильні

//координати в документі

function getCoords(elem) {
  // (1)
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

//координати екрана
// общая ширина/высота
alert( screen.width + ' x ' + screen.height );
// доступная ширина/высота (за вычетом таскбара и т.п.)
alert( screen.availWidth + ' x ' + screen.availHeight );

=========================================

// Document Properties
console.log(document.doctype);//read only! return page information(properties in object)
console.log(document.documentElement);//returns the Element that is the root element of the document (for example, the <html> element for HTML documents)
console.log(document.documentURI);//returns the document location as a string
console.log(document.domConfig);// DO NOT USE IT!!! it was deleted from all browsers
console.log(document.implementation);//returns a DOMImplementation object associated with the current document
console.log(document.inputEncoding);//returns the character encoding of the current document("UTF")
console.log(document.xmlEncoding);//doesnt work(just in some old browser)
console.log(document.xmlVersion);//doesnt work(just in some old browser)

// Document Methods
console.log(document.getElementById("my_list"));//return reference on element
console.log(document.getElementsByTagName("li"));//return array of elemets with chosen tag
console.log(document.getElementsByName("radio_input"));//return (array(list)) a live NodeList containing all the HTML elements in that document that have a name attribute
console.log(document.getElementsByTagNameNS("http://football.ua", "p"));
console.log(document.querySelector("ul #my_sublist"));//return reference on element
console.log(document.querySelectorAll("form input"));//return array(list) of all elements sected by written selectors
//console.log(document.adoptNode(document.querySelector("ul #my_sublist")));//deletes selected nodes and return it
//document.importNode(externalNode, deep);//deap == true/false(import with child nodes or not)
console.log(document.createTextNode("createt text node"));//just return created text node
console.log(document.createElement("p"));//just return created node with chosen tag
//createElementNS(URI, tag)
//console.log(document.createElementNS("url","tag"));
console.log(document.createAttribute("my_attribute"));
//createAttributeNS(URI,name) 
console.log(document.createComment("My comment"));//create tag <comment> 
//     createCDATASection()
//createDocumentFragment()//create a reference to an empty DocumentFragment object     
//createEntityReference()
//document.createProcessingInstruction(target, data);


    // adoptNode(node)
    // createAttribute()
    // createAttributeNS(URI,name)
    // createCDATASection()
    // createComment()
    // createDocumentFragment()
    // createElement()
    // createElementNS()
    // createEntityReference()
    // createProcessingInstruction()
    // createTextNode()
    // getElementById()
    // getElementsByTagName()
    // getElementsByName()
    // querySelectorAll()
    // querySelector()
    // getElementsByTagNameNS()
    // importNode()
    // normalizeDocument()


// 			Core DOM

// Nodelist Properties

//     length
console.log(document.getElementsByTagName("li").length);

// Nodelist Methods

//     item()
console.log(document.getElementsByTagName("li").item(5));//returns selected by index element from from node list

// NamedNodeMap Properties

//     length		//Returns the number of nodes in the list

// NamedNodeMap Methods

    getNamedItem()		//Returns the node with the specific name
    getNamedItemNS()		//Returns the node with the specific name and namespace
    item()						//Returns the node at the specified index
    removeNamedItem()		//Removes the node with the specific name
    removeNamedItemNS()		//Removes the node with the specific name and namespace
    setNamedItem()		//Sets the specified node (by name)
    setNamedItemNS()		//Sets the specified node (by name and namespace)



// Element Properties

//     schemaTypeInfo
//     tagName
console.log(document.getElementById("my_list").tagName);

// Element Methods

console.log(document.getElementById("my_list").getAttribute("type"));//returns value of chosen attribute
//     getAttributeNS(namespace, attribute)
console.log(document.getElementById("my_list").getAttributeNode("type"));//Returns the specified attribute of the specified element, as an Attr node
//     getAttributeNodeNS(namespace, attribute)
console.log(document.getElementById("my_list").getElementsByTagName("li"));//returns elements with selected tag in current node
//     getElementsByTagNameNS(namespace, tag)
console.log(document.getElementById("my_list").hasAttribute("type"));//returns true/false(does current node have selected attribute)
//     hasAttributeNS(namespace, attribute)
//document.getElementById("my_list").removeAttribute("class");//removes selected attribute
//     removeAttributeNS(namespace, attribute)

//		 removeAttributeNode(AttributeNode)
//document.getElementById("my_list").removeAttributeNode(document.getElementById("my_list").getAttributeNode("class"));//removes selected attribute node
document.getElementById("my_list").setAttribute("type","circle");//add attribute with value or change current value 
//     setAttributeNS(namespace, attribute, value)
(function() {
	var takenNode = document.getElementById("my_list").getAttributeNode("class");
	document.getElementById("my_sublist").setAttributeNode(takenNode.cloneNode(true));
})();
//     setAttributeNodeNS(attributeNode)// taken attributeNode must be by getAttributeNodeNS(namespace, attribute)

//     setIdAttribute()?
//     setIdAttributeNS()?
//     setIdAttributeNode()?


    // getAttribute()
    // getAttributeNS()
    // getAttributeNode()
    // getAttributeNodeNS()
    // getElementsByTagName()
    // getElementsByTagNameNS()
    // hasAttribute()
    // hasAttributeNS()
    // removeAttribute()
    // removeAttributeNS()
    // removeAttributeNode()
    // setAttribute()
    // setAttributeNS()
    // setAttributeNode()
    // setAttributeNodeNS()
    // setIdAttribute()
    // setIdAttributeNS()
    // setIdAttributeNode()

// Attr Properties

console.log(document.getElementById("my_list").getAttributeNode("type").isId);
console.log(document.getElementById("my_list").getAttributeNode("type").name);
console.log(document.getElementById("my_list").getAttributeNode("type").ownerElement);
console.log(document.getElementById("my_list").getAttributeNode("type").schemaTypeInfo);
console.log(document.getElementById("my_list").getAttributeNode("type").specified);
console.log(document.getElementById("my_list").getAttributeNode("type").value);

// 			!!!DOM Node!!!

// Node Properties

//     attributes
//     baseURI
//     childNodes
//     firstChild
//     lastChild
//     localName
//     namespaceURI
//     nextSibling
//     nodeName
//     nodeType
//     nodeValue
//     ownerDocument
//     parentNode
//     prefix
//     previousSibling
//     textContent

// Node Methods

//     appendChild()
//     cloneNode()
//     compareDocumentPosition()
//     getFeature(feature,version)
//     getUserData(key)
//     hasAttributes()
//     hasChildNodes()
//     insertBefore()
//     isDefaultNamespace()
//     isEqualNode()
//     isSameNode()
//     isSupported()
//     lookupNamespaceURI()
//     lookupPrefix()
//     normalize()
//     removeChild()
//     replaceChild()
//     setUserData(key,data,handler)

// Node Types

//     Element1
//     Attr2
//     Text3
//     CDATASection4
//     EntityReference5
//     Entity6
//     ProcessingInstruction7
//     Comment8
//     Document9
//     DocumentType10
//     DocumentFragment11
//     Notation12

// nodeName Returns

//     Element
//     element name
//     Attr
//     attribute name
//     Text
//     #text
//     CDATASection
//     #cdata-section
//     EntityReference
//     entity reference name
//     Entity
//     entity name
//     ProcessingInstruction
//     target
//     Comment
//     #comment
//     Document
//     #document
//     DocumentType
//     doctype name
//     DocumentFragment
//     #document fragment
//     Notation
//     notation name

// nodeValue Returns

//     Element
//     null
//     Attr
//     attribute value
//     Text
//     content of node
//     CDATASection
//     content of node
//     EntityReference
//     null
//     Entity
//     null
//     ProcessingInstruction
//     content of node
//     Comment
//     comment text
//     Document
//     null
//     DocumentType
//     null
//     DocumentFragment
//     null
//     Notation
//     null

================================================

//основи роботи з подіями

document.addEventListener("DOMContentLoaded", ready);

!this вказує на елемент, на який повішений "обработчик"

!використовувати функцію, а не рядки

!не використовувати setAttribute

element.addEventListener(event, handler[, phase]); - можна назначати необмежену кількість "обработчиков"
element.removeEventListener(event, handler[, phase]);
!phase - true/false - стадія перехват/спливання

відмінності ie8-
element.attachEvent("on" + event, handler);
element.detachEvent("on" + event, handler);
!немає this
!поліфіл https://gist.github.com/jonathantneal/3748027

//		асинхронні події

 setTimeout(function() {
      "обработчик"
    }, 0);

!синхронно обробляються вложені події, ініціалізовані з коду

//об'єкт події

 elem.onclick = function(event) {
    event.type - тип (напр click)
    	.currentTarget - елемент, на якому спрцював "обработчик"
    	event.clientX / event.clientY - координати курсора в момент кліка відносно вікна
  		.
  		.
  		.
  }

ie8-
elem.onclick = function() {
  // window.event - объект события
  alert( window.event.clientX );
};

кросбраузерне отримання обєкта події
element.onclick = function(e) {
  e = e || event;
  // Теперь e - объект события во всех браузерах.
};

//		спливання та перехват

подія focus не спливає

event.target - елемент, безпосередньо на якому відбулось спливання
this (=event.currentTarget) - до якого дійшло спливання і на якому виконується "обработчик"

event.stopPropagation() - зупинка спливання, але на поточному елементі всі "обработчики" відпрацюють

event.stopImmediatePropagation() - повністю зупиняють обработку

//		"занурення"

"обработчики" спрацюють зверху-вниз(протилежно спливанню)

Стандарт выделяет целых три стадии прохода события:
	1. Событие сначала идет сверху вниз. Эта стадия называется «стадия перехвата» (capturing stage).
	2. Событие достигло целевого элемента. Это – «стадия цели» (target stage).
	3. После этого событие начинает всплывать. Это – «стадия всплытия» (bubbling stage).

!аргумент phase в addEventListener - true/false - стадія перехват/спливання
наприклад, onfocus можна впіймати тільки на стадії перехвату

var elems = document.querySelectorAll('form,div,p');
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", highlightThis, true);//перехват
  elems[i].addEventListener("click", highlightThis, false);//спливання
}

Каждый обработчик имеет доступ к свойствам события:
	event.target – самый глубокий элемент, на котором произошло событие.
	event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (до которого «доплыло» событие).
	event.eventPhase – на какой фазе он сработал (погружение =1, всплытие = 3).

//відмінності ie8-

- event.currentTarget - відсутня властивість
- замість event.target в IE8- використовується event.srcElement
	elem.onclick = function(event) {
	  event = event || window.event;
	  var target = event.target || event.srcElement;
	  // ... теперь у нас есть объект события и target
	  ...
	}
- для зупинки спливання використовують event.cancelBubble=true
	event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);

//		делегування подій("обработчик вішається на один елемент і делегується на його складові")

приклад
<div id="menu">
  <button data-action="save">Сохранить<button>
  <button data-action="load">Загрузить<button>
  <button data-action="search">Поиск<button>
<div>
<script>
  function Menu(elem) {
    this.save = function() {
      alert( 'сохраняю' );
    };
    this.load = function() {
      alert( 'загружаю' );
    };
    this.search = function() {
      alert( 'ищу' );
    };
    var self = this;
    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute('data-action');
      if (action) {
        self[action]();
      }
    };
  }
  new Menu(menu);
<script>

//		прийом проектування "поведінка(behavior)"

!для своїх целей використовувати атрибут data-*
//приклад
Счётчик:
<button data-counter>1<button>
Ещё счётчик:
<button data-counter>2<button>
<script>
	document.addEventListener("click", function(event){
		if (!event.target.hasAttribute('data-counter')) return;
    	var counter = event.target;
    	counter.innerHTML++;
	}, false);
  };
<script>

//		відміна дії браузера

1. event.preventDefault()
2. якщо "обработчик" призначений через onподію(не через addEventListener), то можна повернуть false з "обработчика"

<a href="/" onclick="return false">Нажми здесь<a>
или
<a href="/" onclick="event.preventDefault()">здесь<a>

Некоторые примеры событий, которые вызывают действие браузера:

	mousedown – нажатие кнопкой мыши в то время как курсор находится на тексте начинает его выделение.
	click на <input type="checkbox"> – ставит или убирает галочку.
	submit – при нажатии на <input type="submit"> в форме данные отправляются на сервер.
	wheel – движение колёсика мыши инициирует прокрутку.
	keydown – при нажатии клавиши в поле ввода появляется символ.
	contextmenu – при правом клике показывается контекстное меню браузера.
	...

особливості ie8-

- event.returnValue = false - відміна дії
	кросбраузерний варіант
element.onclick = function(event) {
  event = event || window.event;
  if (event.preventDefault) { // если метод существует
    event.preventDefault(); // то вызвать его
  } else { // иначе вариант IE8-:
    event.returnValue = false;
  }
}

//		генерація подій на елементах

//конструктор Event

var event = new Event(тип события[, флаги]);
	Тип события – может быть как своим, так и встроенным, к примеру "click".
	Флаги – объект вида { bubbles: true/false, cancelable: true/false }, где свойство bubbles указывает, всплывает ли событие, а cancelable – можно ли отменить действие по умолчанию.
	Флаги по умолчанию: {bubbles: false, cancelable: false}.

elem.dispatchEvent(event) - ініціювання події

event.isTrusted - перевірка що ініціалізувало подію(true - користувач, false - скрипт) - ie, firefox

При создании события браузер автоматически ставит следующие свойства:
	event.isTrusted: false – означает, что событие сгенерировано скриптом, это свойство изменить невозможно.
	event.target: null – это свойство ставится автоматически позже при dispatchEvent.
	event.type: тип события – первый аргумент new Event.
	event.bubbles, event.cancelable – по второму аргументу new Event

приклад
<h1 id="elem">Привет от скрипта!<h1>

<script>
  document.addEventListener("hello", function(event) { // (1)
    alert("Привет");
    event.preventDefault();  // (2)метод elem.dispatchEvent(event) поверне false
  }, false);

  var event = new Event("hello", {bubbles: true, cancelable: true}); // (3)
  if (elem.dispatchEvent(event) === false) {
    alert('Событие было отменено preventDefault');
  }
<script>

список конструкторов для различных событий интерфейса(https://www.w3.org/TR/uievents/):
	UIEvent
	FocusEvent
	MouseEvent
	WheelEvent
	KeyboardEvent
	CompositionEvent

//конструктор CustomEvent

дозволяє обєкту події додавати інформацію в властивість detail

приклад
<h1 id="elem">Привет для Васи!<h1>
<script>
  elem.addEventListener("hello", function(event) {
    alert( event.detail.name );
  }, false);
  var event = new CustomEvent("hello", {
    detail: { name: "Вася" }
  });
  elem.dispatchEvent(event);
<script> 

//ie11-

var event = document.createEvent(eventInterface); - створення обєкта події
	eventInterface – это тип события, например MouseEvent, FocusEvent, KeyboardEvent

event.initEvent(type, boolean bubbles, boolean cancelable); - далі подію потрібно ініціалізувати
Аргументы:
	type – тип события, например "click".
	bubbles – всплывает ли событие.
	cancelable – можно ли отменить событие.

// современный стандарт
var event = new Event("click", {
  bubbles: true,
  cancelable: true
});

// старый стандарт
var event = document.createEvent("Event");
event.initEvent("click", true, true);



	// 		!!!DOM Events!!!
var eventsObject = {//crossbrowser events
		addEvent: function (el, type, fn) {
			if (typeof addEventListener !== 'undefined') {
				el.addEventListener(type, fn, false);
			} else if (typeof attachEvent !== 'undefined') {
				el.attachEvent('on' + type, fn);
			} else {
				el['on' + type] = fn;
			}
		},
		removeEvent: function (el, type, fn) {
			if (typeof removeEventListener !== 'undefined') {
				el.removeEventListener(type, fn, false);
			} else if (typeof detachEvent !== 'undefined') {
				el.detachEvent('on' + type, fn);
			} else {
				el['on' + type] = null;
			}
		},
		getTarget: function (event) {
			if (typeof event.target !== 'undefined'){
				return event.target;
			} else {
				return event.srcElement;
			}
		},
		preventDefault: function (event) {
			if (typeof event.preventDefault !== 'undefined'){
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		}
	};//crossbrowser events
	eventsObject.addEvent(document.getElementById("my_main_container"),"dblclick",function(e){
		this.classList.toggle("dblclick_modefied_square");
		alert("You made boubleclick!!!");
	});
	// Mouse Events


 //    click
 //    dblclick
 //    mousedown
 //    mousemove
 //    mouseover
 //    mouseout
 //    mouseup

	// Keyboard Events

 //    keydown
 //    keypress
 //    keyup

	// Frame Events

 //    abort
 //    error
 //    load
 //    resize
 //    scroll
 //    unload

	// Form Events

 //    blur
 //    change
 //    focus
 //    reset
 //    select
 //    onsubmit

	// Event Object Constant

 //    AT_TARGET
 //    BUBBLING_PHASE
 //    CAPTURING_PHASE

	// Event Object Properties

	document.getElementById("my_main_container").addEventListener("click", function(e){
	this.classList.toggle("modefied_square");
	console.log(e.bubbles);
	console.log(e.cancelable);
	console.log(e.currentTarget);
	console.log(e.eventPhase);
	console.log(e.target);
	console.log(e.timeStamp);
	console.log(e.type);
	console.log(this===e.currentTarget);//true
}, false);
	var myEvent = new Event("doSomething");
	

 //    bubbles
 //    cancelable
 //    currentTarget
 //    eventPhase
 //    target
 //    timeStamp
 //    type

	// Event Object Methods

 //    initEvent()
 //    preventDefault()
 //    stopPropagation()

	// EventTarget Object

 //    addEventListener()
 //    dispatchEvent()
 //    removeEventListener()

	// EventListener Object

 //    handleEvent()

	// MouseEvent/KeyboardEvent Object

 //    altKey
 //    button
 //    clientX
 //    clientY
 //    ctrlKey
 //    keyIdentifier
 //    keyLocation
 //    metaKey
 //    relatedTarget
 //    screenX
 //    screenY
 //    shiftKey

	// MouseEvent/KeyboardEvent Methods

 //    initMouseEvent()
 //    initKeyboardEvent()


===========================================================
===========================================================
===========================================================
===========================================================

======================|Asynchronous js (асинхронний js)|======================

How to write async code?
		Event loop
		Callback
		Promise
		Generators
		Async/Await

===	Callback
		Because JS allows to to pass functions as a parameters, we can wrap a code in a callback
		function getY(callback) {
		    var y;

		    $.get('get/y', function(result) {
		        y = result; //5
		        callback(y);
		    });
		}

		var x = 10;

		getY(function(y) {
		    console.log(x + y);
		});

		//15

!!!	Callback Hell
		function updateStoryComment(id) {
		    $.get({
		        url: 'get/story/id',
		        success: function (story){
		            $.get({
		                url: 'get/story/comment/:id',
		                success: function (comment) {
		                    asyncUserDialog(function (updatedText) {
		                        $.post({
		                            url: 'post/story/comment/id',
		                            data: updatedText,
		                            success: function () {
		                                notifyUser();
		                            }
		                        });
		                    });
		                }
		            });
		        }
		    });
		}

		updateStoryComment(12);


=== Promises

		Ok, so what is promise?
		WIKI: In computer science, future, promise, and delay refer to constructs
		used for synchronizing in some concurrent programming languages. They
		describe an object that acts as a proxy for a result that is initially
		unknown, usually because the computation of its value is yet incomplete.

		Abstraction over asynchronous code

		Utility on callback aggreagation


	+ Promise Basics:

		- Library usage

			function asyncSum(a, b) {
			    var promise = new Promise();
			    
			    setTimeout(function() {
			        promise.resolve(a + b);
			    }, 1000);
			    
			    return promise;
			}

			function () {
			    var asyncResult = asyncSum(3,5);
			    
			    asyncResult.then(function (result) {
			        console.log(result);  
			    }
			    asyncResult.catch(function (error) {
			        console.log(error);  
			    }
			    asyncResult.finally(function (error) {
			        console.log("Fully Done Now");  
					}
			}

		- Native usage

			function asyncSum(a, b) {
			  return new Promise(function(resolve, reject) {
			    setTimeout(function() {
			      resolve(a + b);
			    }, 1000);
			  });
			}

			var asyncResult = asyncSum(3,5); // returned result is promise object

			asyncResult.then(function (result) {
			    console.log(result);  //logs 8 after more that 1000ms
			});

	+ Chaining and Error Handling

		function updateStoryComment(id) {
		    fetch('get/story/id')
		    .then(function (story) {
		        return fetch('get/story/comment/id');
		    })
		    .then(asyncUserDialog())
		    .then(function (updatedText) {
		        return fetch('get/story/comment/id', method: 'POST', body: updatedText);
		    })
		    .then(function () {
		        notifyUser();
		     })
		    .catch(handleErrorDuringUpdating());
		}

		updateStoryComment(12);


		------------
		function someAsyncFunction () {
		    return new Promise(function (resolve, reject) {
		        //all async staff goes her

		        if(all is well) {
		            resolve('Hurray');
		        } else {
		            reject('Something went wrong');
		        }
		    });
		}

		someAsyncFunction()
		    .then(function (result) {
		        console.log(result)     //Hurray
		    }, function (error) {
		        console.log(error)    //Something went wrong
		    });
		-----------

		Promise in your code

		1. Chose a library (most popular are)
			Q, by Kris Kowal
			When.js, by Brain Cavalier
			RSVP.js, by Yehunda Katz
			bluebird, by Petka Antonov
			use transpilers for ES6 promises (Babel.js)

		2. If you see a jQuery promise - wrap it!
		var realPromise = Q(jQueryPromise)

		3. Keep sync/async paralel in mind

		4. Promises are not:
			a replacement for events
			a replacement for streams
			a way of doing  functional reactive programming

	=== Generators

			"Wouldn't it be nice, that when you execute your function, you could
			pause it at any point, calculate something else, do other things,
			and then return to it, even with some value and continue?"

		Solution of writing asynchronous code with generators is based on
		possibility to make a non-blocking  pause and wait (yield) until
		Promise will be resolved

		Designed for iteration work

		- Generator Example

			function * updateStoryComment(id) {
			    try {
			        var story = yield fetch('get/story/id');
			        var comment = yield fetch('get/story/comment/id');
			        var updatedText = yield asyncUserDialog();
			        yield fetch('get/story/comment/id', method: 'POST', body: updatedText);
			    } catch (ex) {
			        handleErrorDuringUpdating()
			    }
			}

			var generator = updateStoryComment(12);

			generator.next().value.then(function (story) { // { value: resolvedPromise, done: false }  
			    return generator.next(story).value;
			}).then(function (comment) {
			    return generator.next(comment).value;
			}).then(function (updatedText) {
			    return generator.next(updatedText).value;
			}).then(function (){
			    notifyUser();
			});

		- Using of CO and similar libraries can help but...

			var co = require('co');

			function updateStoryComment(id) {
			    return co(function * updateStoryComment() {
			        try {
			            var story = yield fetch('get/story/id');
			            var comment = yield fetch('get/story/comment/id');
			            var updatedText = yield asyncUserDialog();
			            yield fetch('get/story/comment/id', method: 'POST', body: updatedText);
			        } catch (ex) {
			            handleErrorDuringUpdating()
			        }
			    });
			}

			updateStoryComment(12).then(function() {
			  notifyUser()
			});

	=== Async/Await

		Async = co + generators - hacking

		Under the hood async functions using Promises - this is why the async function will return with a Promise.

	- Async example

		async function updateStoryComment(id) {
		    try {
		        var story = await fetch('get/story/id');
		        var comment = await fetch('get/story/comment/id');
		        var updatedText = await asyncUserDialog();
		        await fetch('get/story/comment/id', method: 'POST', body: updatedText);
		        notifyUser();
		    } catch (ex) {
		        handleErrorDuringUpdating()
		    }
		}

		updateStoryComment(12);

-----------------------------------------------------------
-----------------------------------------------------------
-----------------------------------------------------------
-----------------------------------------------------------

									Promise детальніше :)

	Promise – это специальный объект, который содержит своё состояние. Вначале pending
	(«ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

	На promise можно навешивать коллбэки двух типов:
		- onFulfilled – срабатывают, когда promise в состоянии «выполнен успешно».
		- onRejected – срабатывают, когда promise в состоянии «выполнен с ошибкой».

	Способ использования, в общих чертах, такой:

		1 Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
		2 Внешний код, получив promise, навешивает на него обработчики.
		3 По завершении процесса асинхронный код переводит promise в состояние fulfilled
		(с результатом) или rejected (с ошибкой). При этом автоматически вызываются соответствующие обработчики во внешнем коде.
		
	Синтаксис создания Promise:

		var promise = new Promise(function(resolve, reject) {
		  // Эта функция будет вызвана автоматически

		  // В ней можно делать любые асинхронные операции,
		  // А когда они завершатся — нужно вызвать одно из:
		  // resolve(результат) при успешном выполнении
		  // reject(ошибка) при ошибке
		})

	Универсальный метод для навешивания обработчиков:

			promise.then(onFulfilled, onRejected)

		onFulfilled – функция, которая будет вызвана с результатом при resolve.
		onRejected – функция, которая будет вызвана с ошибкой при reject.

	С его помощью можно назначить как оба обработчика сразу, так и только один:

		// onFulfilled сработает при успешном выполнении
		promise.then(onFulfilled)
		// onRejected сработает при ошибке
		promise.then(null, onRejected)	

	== .catch
		Для того, чтобы поставить обработчик только на ошибку, вместо .then(null, onRejected)
		можно написать .catch(onRejected) – это то же самое.

	== Синхронный throw – то же самое, что reject
		Если в функции промиса происходит синхронный throw (или иная ошибка), то вызывается reject:

				'use strict';

				let p = new Promise((resolve, reject) => {
				  // то же что reject(new Error("o_O"))
				  throw new Error("o_O");
				})

				p.catch(alert); // Error: o_O

	== Только один аргумент

			Функции resolve/reject принимают ровно один аргумент – результат/ошибку.
			Именно он передаётся обработчикам в .then

	+++ Пример с setTimeout

				'use strict';

				// Создаётся объект promise
				let promise = new Promise((resolve, reject) => {

				  setTimeout(() => {
				    // переведёт промис в состояние fulfilled с результатом "result"
				    resolve("result");
				  }, 1000);

				});

				// promise.then навешивает обработчики на успешный результат или ошибку
				promise
				  .then(
				    result => {
				      // первая функция-обработчик - запустится при вызове resolve
				      alert("Fulfilled: " + result); // result - аргумент resolve
				    },
				    error => {
				      // вторая функция - запустится при вызове reject
				      alert("Rejected: " + error); // error - аргумент reject
				    }
				  );

	== Promise после reject/resolve – неизменны

	=== Промисификация
		(Промисификация – это когда берут асинхронный функционал и делают для него обёртку, возвращающую промис.)

		Функция httpGet(url) будет возвращать промис, который при успешной загрузке данных с url будет переходить
		в fulfilled с этими данными, а при ошибке – в rejected с информацией об ошибке:

			function httpGet(url) {

			  return new Promise(function(resolve, reject) {

			    var xhr = new XMLHttpRequest();
			    xhr.open('GET', url, true);

			    xhr.onload = function() {
			      if (this.status == 200) {
			        resolve(this.response);
			      } else {
			        var error = new Error(this.statusText);
			        error.code = this.status;
			        reject(error);
			      }
			    };

			    xhr.onerror = function() {
			      reject(new Error("Network Error"));
			    };

			    xhr.send();
			  });

			}

		//использование

		httpGet("/article/promise/user.json")
		  .then(
		    response => alert(`Fulfilled: ${response}`),
		    error => alert(`Rejected: ${error}`)
		  );

	=== Chaining (Цепочки промисов)

			httpGet(...)
		  .then(...)
		  .then(...)
		  .then(...)

				'use strict';

				// сделать запрос
				httpGet('/article/promise/user.json')
				  // 1. Получить данные о пользователе в JSON и передать дальше
				  .then(response => {
				    console.log(response);
				    let user = JSON.parse(response);
				    return user;
				  })
				  // 2. Получить информацию с github
				  .then(user => {
				    console.log(user);
				    return httpGet(`https://api.github.com/users/${user.name}`);
				  })
				  // 3. Вывести аватар на 3 секунды (можно с анимацией)
				  .then(githubUser => {
				    console.log(githubUser);
				    githubUser = JSON.parse(githubUser);

				    let img = new Image();
				    img.src = githubUser.avatar_url;
				    img.className = "promise-avatar-example";
				    document.body.appendChild(img);

				    setTimeout(() => img.remove(), 3000); // (*)
				  });


===========================================================
===========================================================
===========================================================
===========================================================


======================|AJAX и COMET|======================

AJAX (аббревиатура от «Asynchronous Javascript And Xml») – технология обращения 
к серверу без перезагрузки страницы.

Comet (в веб-разработке) — любая модель работы веб-приложения, при которой постоянное 
HTTP-соединение позволяет веб-серверу отправлять (push) данные браузеру без 
дополнительного запроса со стороны браузера.

======================|XMLHttpRequest|======================

//приклад

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'phones.json', false);//false - синхронний виклик
// 3. Отсылаем запрос
xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
} 

//

		- xhr.open(method, URL, async, user, password)

		- xhr.send([body])

		- xhr.abort()
		====================
		- xhr.
				- status
				- statusText
				- responseText
				- responseXML

var xhr = new XMLHttpRequest();
xhr.open('GET', 'phones.json', true);
xhr.send(); // (1)
xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;
  button.innerHTML = 'Готово!';
  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    alert(xhr.responseText);
  }
}
button.innerHTML = 'Загружаю...'; // (2)
button.disabled = true;

=== подія xhr.onreadystatechange = function() {}

	const unsigned short UNSENT = 0; // начальное состояние
	const unsigned short OPENED = 1; // вызван open
	const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
	const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
	const unsigned short DONE = 4; // запрос завершён
	Запрос проходит их в порядке 0 → 1 → 2 → 3 → … → 3 → 4, состояние 3 повторяется при каждом получении очередного пакета данных по сети.

=== HTTP-заголовки
	
	xhr.
		- setRequestHeader(name, value)
		- getResponseHeader(name)
		- getAllResponseHeaders()//Возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2.

=== Таймаут

	xhr.timeout = 30000;//максимальний час асинхронного запиту
	після завершення цього часу буде згенерована подія "ontimeout"
	xhr.ontimeout = function() {
	  alert( 'Извините, запрос превысил максимальное время' );
	}

=== Повний список подій

		loadstart – запрос начат.
		progress – браузер получил очередной пакет данных, можно прочитать текущие полученные данные в responseText.
		abort – запрос был отменён вызовом xhr.abort().
		error – произошла ошибка.
		load – запрос был успешно (без ошибок) завершён.
		timeout – запрос был прекращён по таймауту.
		loadend – запрос был завершён (успешно или неуспешно)

=== кросбраузерний запит
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
var xhr = new XHR();

======================||======================

alert( encodeURIComponent(' ') ); // %20
alert( encodeURIComponent('/') ); // %2F
alert( encodeURIComponent('В') ); // %D0%92
alert( encodeURIComponent('Виктор') ); // %D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80

<form action="/submit" method="GET">
  <input name="name" value="Виктор">
  <input name="surname" value="Цой">
<form>
Будет отправлена так: /submit?name=%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80&surname=%D0%A6%D0%BE%D0%B9/

=== GET-запит

// Передаём name и surname в параметрах запроса
	var xhr = new XMLHttpRequest();
	var params = 'name=' + encodeURIComponent(name) +
	  '&surname=' + encodeURIComponent(surname);
	xhr.open("GET", '/submit?' + params, true);
	xhr.onreadystatechange = ...;
	xhr.send();

 - заголовки Content-Length і Connection браузер встановлює самое

 - xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); - заголовок, який повідомляє про AJAX-запит

 === POST з urlencoded

В стандартных HTTP-формах для метода POST доступны три кодировки, задаваемые через атрибут enctype:
		- application/x-www-form-urlencoded
		- multipart/form-data
		- text-plain

	var xhr = new XMLHttpRequest();
	var body = 'name=' + encodeURIComponent(name) +
	  '&surname=' + encodeURIComponent(surname);
	xhr.open("POST", '/submit', true)
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	xhr.onreadystatechange = ...;
	xhr.send(body);
		
=== Кодіровка multipart/form-data

	<form action="/submit" method="POST" enctype="multipart/form-data">
	  <input name="name" value="Виктор">
	  <input name="surname" value="Цой">
	<form>

					Форма при такой кодировке будет выглядеть примерно так:
										...Заголовки...
				Content-Type: multipart/form-data; boundary=RaNdOmDeLiMiTeR

				--RaNdOmDeLiMiTeR//випадково згенерований рядок «boundary» для розділення полів
				Content-Disposition: form-data; name="name"

				Виктор
				--RaNdOmDeLiMiTeR
				Content-Disposition: form-data; name="surname"

				Цой
				--RaNdOmDeLiMiTeR--

=== POST з multipart/form-data

var data = {
  name: 'Виктор',
  surname: 'Цой'
};
var boundary = String(Math.random()).slice(2);
var boundaryMiddle = '--' + boundary + '\r\n';
var boundaryLast = '--' + boundary + '--\r\n'
var body = ['\r\n'];
for (var key in data) {
  // добавление поля
  body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + data[key] + '\r\n');
}
body = body.join(boundaryMiddle) + boundaryLast;
// Тело запроса готово, отправляем
var xhr = new XMLHttpRequest();
xhr.open('POST', '/submit', true);
xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;
  alert( this.responseText );
}
xhr.send(body);

=== FormData

<form name="person">
  <input name="name" value="Виктор">
  <input name="surname" value="Цой">
<form>

<script>
  // создать объект для формы
  var formData = new FormData(document.forms.person);
  // добавить к пересылке ещё пару ключ - значение
  formData.append("patronym", "Робертович");
  // отослать
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/url");
  xhr.send(formData);
<script>

Интерфейс:
		Конструктор new FormData([form]) вызывается либо без аргументов, либо с DOM-элементом формы.
		Метод formData.append(name, value) добавляет данные к форме.
Объект formData можно сразу отсылать, интеграция FormData с XMLHttpRequest встроена в браузер.
Кодировка при этом будет multipart/form-data.

=== кодіровка з json

var xhr = new XMLHttpRequest();
var json = JSON.stringify({
  name: "Виктор",
  surname: "Цой"
});
xhr.open("POST", '/submit', true)
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onreadystatechange = ...;
// Отсылаем объект в формате JSON и с Content-Type application/json
// Сервер должен уметь такой Content-Type принимать и раскодировать
xhr.send(json);

======================|XMLHttpRequest: кросс-доменні запити|======================

// (1)
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
var xhr = new XHR();
// (2) запрос на другой домен :)
xhr.open('GET', 'http://anywhere.com/request', true);
xhr.onload = function() {
  alert( this.responseText );
}
xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}
xhr.send();

(1)	Мы создаём XMLHttpRequest и проверяем, поддерживает ли он событие onload. Если нет, то это
		старый XMLHttpRequest, значит это IE8,9, и используем XDomainRequest.
(2)	Запрос на другой домен отсылается просто указанием соответствующего URL в open. Он обязательно 
		должен быть асинхронным, в остальном – никаких особенностей.




======================|Canvas|======================

- приклад червоний квадрат

<html> 
<body> 
  <canvas width="800" height="600" id="canvas"><canvas> 
  <script> 
    var canvas = document.getElementById('canvas'); 
    var c = canvas.getContext('2d'); 
    c.fillStyle = "red"; 
    c.fillRect(100,100,400,300); 
  <script> 
<body> 
<html>

- зафарбований трикутник з контурами

c.fillStyle = '#ccddff';
c.beginPath();
c.moveTo(50,20);
c.lineTo(200,50);
c.lineTo(150,80);
c.closePath();
c.fill();
c.strokeStyle = 'rgb(0,128,0)';
c.lineWidth = 5;
c.stroke();

=== .beginPath(); - визначення контуру

c.fillStyle = 'red';
c.beginPath();
c.moveTo(10,30);
c.bezierCurveTo(50,90,159,-30,200,30);
c.lineTo(200,90);
c.lineTo(10,90);
c.closePath();
c.fill();
c.lineWidth = 4;
c.strokeStyle = 'black';
c.stroke();

=== moveTo(), lineTo() и bezierCurveTo() - лінії

=== drawImage - малювання забраження

ctx.drawImage(img, 0,0); // обычное рисование
ctx.drawImage(img, // растягивание
0,0,66,66, // исходник (x,y,w,h)
100,0,100,100 // назначение (x,y,w,h)
);
ctx.drawImage(img, // рисуем фрагмент
20,10,20,20, // исходные координаты (x,y,w,h)
250,0,250,50 // координаты назначения (x,y,w,h)
);

=== текст

ctx.fillStyle = "black";
ctx.font = "italic "+96+"pt Arial ";
ctx.fillText("this is text", 20,150);

=== градієнти

var grad = ctx.createLinearGradient(0,0,200,0);
grad.addColorStop(0, "white");
grad.addColorStop(0.5, "red");
grad.addColorStop(1, "black");
ctx.fillStyle = grad;
ctx.fillRect(0,0,400,200);













======================|=====Анімація======|====================== 

-криві Базьє

Координаты кривой описываются в зависимости от параметра tЄ[0,1]

Для двух точек:
	P = (1-t)P1 + tP2

Для трёх точек:
	P = (1−t)^2*P1 + 2(1−t)tP2 + t^2*P3

Для четырёх точек:
	P = (1−t)^3*P1 + 3(1−t)^2*tP2 +3(1−t)t^2*P3 + t^3*P4

Вместо Pi нужно подставить координаты i-й опорной точки (xi, yi).

Эти уравнения векторные, то есть для каждой из координат:

x = (1−t)^2*x1 + 2(1−t)tx2 + t^2*x3
y = (1−t)^2*y1 + 2(1−t)ty2 + t^2*y3
Вместо x1, y1, x2, y2, x3, y3 подставляются координаты трёх опорных точек, и в то 
время как t пробегает множество от 0 до 1, соответствующие значения (x, y) как раз и образуют кривую.

=== CSS анімація

css CSS-властивості, що анімуються:
https://www.w3.org/TR/css3-transitions/#animatable-properties-

властивості, що задають анімацію:
	transition-property
	transition-duration
	transition-timing-function
	transition-delay(можливі відємні значення - тоді анімація почнеться з етапу відповідного часу)

	transition: (property, duration, timing-function, delay)

---transition-timing-function
- криві Базьє
4 опорні точки 

    Начальная точка (0,0).
    Конечная точка (1,1).
    Для промежуточных точек значения x должны быть в интервале 0..1, y – любыми.

cubic-bezier(x2, y2, x3, y3)

Она указывает, как быстро развивается процесс анимации во времени.

    По оси x идёт время: 0 – начальный момент, 1 – конец времени transition-duration.
    По оси y – завершённость процесса: 0 – начальное значение анимируемого свойства, 1 – конечное.

			.train {
			  left: 0;
			  transition: left 5s cubic-bezier(0, 0, 1, 1);
			  /* JavaScript ставит значение left: 450px */
			}

linear(0, 0, 1, 1), ease(0.25, 0.1, 0.25, 1.0), ease-in(0.42, 0, 1.0, 1.0), ease-out(0, 0, 0.58, 1.0) и ease-in-out(0.42, 0, 0.58, 1.0)

- кроки steps

steps(количество шагов[, start/end]) - start - при початку анімації відразу застосовується перше значення(з розбитих по крокам)
									   end - зміни застосовують в кінці кожного кроку

		#stripe.animate  {
		  margin-left: -174px;
		  transition: margin-left 9s steps(9, start);
		}

step-start – то же, что steps(1, start)
step-end – то же, что steps(1, end)

+подія transitionend - по закінченні анімації

 el.addEventListener('transitionend', function(e) {
 	//
 	e.proprtyName - властивість, анімація якої закінчилась
 	e.elapsedTime - час анімації, без врахування затримки
  });

=== CSS-правило @keyframes

	@keyframes назва-анмації{
		// from {

		// }
		// to {

		// }
//або
		10% {

		}
		20% {

		}
		70% {

		}
	}	

властивості:
	animation-duration
	аnimation-timing-function
		ease — скольжение (значение по умолчанию) 
		linear — ровное движение 
		ease-in — ускорение к концу 
		ease-out — ускорение в начале 
		ease-in-out — более плавное скольжение, чем ease

		cubic-bezier(число,число,число,число)

		steps(число)
		step-start і step-end
	аnimation-iteration-count - число або infinite(по дефолту =1)
	animation-direction
		normal — анимация проигрывается в обычном направлении, с начала и до конца. 
		reverse — анимация проигрывается в обратном направлении, то есть с конца. 
		alternate — анимация проигрывается с начала и до конца, а затем в обратном направлении. 
		alternate-reverse — анимация проигрывается с конца до начала, а затем в обратном направлении.
	animation-play-state
		running — анимация проигрывается (значение по умолчанию). 
		paused — анимация застывает на первом шаге.
	animation-delay
	animation-fill-
		none — анимация воздействует на элемент только во время воспроизведения, по окончании элемент возвращается в исходное состояние. 
		forwards — анимация воздействует на элемент по окончании воспроизведения. 
		backwards — анимация воздействует на элемент до начала воспроизведения. 
		both — анимация воздействует на элемент и до начала, и после окончания воспроизведения.

				  /* Современные браузеры, кроме Chrome, Opera, Safari */
				  @keyframes go-left-right {   /* назовём анимацию: "go-left-right" */
				    from {
				      left: 0px;               /* от: left: 0px */
				    }
				    to {
				      left: calc(100% - 50px); /* до: left: 100%-50px */
				    }
				  }

				  /* Префикс для Chrome, Opera, Safari */
				  @-webkit-keyframes go-left-right {
				    from {
				      left: 0px;
				    }
				    to {
				      left: calc(100% - 50px);
				    }
				  }

				  .progress {
				    /* применить анимацию go-left-right */
				    /* продолжительность 3s */
				    /* количество раз: бесконечное (infinite) */
				    /* менять направление анимации каждый раз (alternate) */
				    animation: go-left-right 3s infinite alternate;
				    -webkit-animation: go-left-right 3s infinite alternate;
				}

========== JS-анімація

-setInterval
	var fps = 50; // 50 кадров в секунду
	var timer = setInterval(function() {
	  if (время вышло) clearInterval(timer);
	  else немного увеличить left
	}, 1000 / fps)
//////////////////////////////////////	
				var start = Date.now(); // сохранить время начала
				var timer = setInterval(function() {
				  // вычислить сколько времени прошло с начала анимации
				  var timePassed = Date.now() - start;
				  if (timePassed >= 2000) {
				    clearInterval(timer); // конец через 2 секунды
				    return;
				  }
				  // рисует состояние анимации, соответствующее времени timePassed
				  draw(timePassed);
				}, 20);
				// в то время как timePassed идёт от 0 до 2000
				// left принимает значения от 0 до 400px
				function draw(timePassed) {
				  train.style.left = timePassed / 5 + 'px';
				}
///////////////////////////////////////

		setInterval(function() { - єдиний таймер для анімації
		  /* отрисовать все анимации */
		}, 20);
-requestAnimationFrame (для ie9- потрібно підключати поліфіл)
	var requestId = requestAnimationFrame(callback) - планує виклик 
	callback на найближчий час, коли браузер зможе зробити анімацію, 
	групується з іншими requestAnimationFrame та внутрішніми перемальовками браузера

	callback - отримує один аргумент - час від завантаження сторінки(performance.now())
					// Рисует функция draw
					// Продолжительность анимации duration
					function animate(draw, duration) {
					  var start = performance.now();

					  requestAnimationFrame(function animate(time) {
					    // определить, сколько прошло времени с начала анимации
					    var timePassed = time - start;

					    // возможно небольшое превышение времени, в этом случае зафиксировать конец
					    if (timePassed > duration) timePassed = duration;

					    // нарисовать состояние анимации в момент timePassed
					    draw(timePassed);

					    // если время анимации не закончилось - запланировать ещё кадр
					    if (timePassed < duration) {
					      requestAnimationFrame(animate);
					    }

					  });
					}

					animate(function(timePassed) {
					  train.style.left = timePassed / 5 + 'px';
					}, 2000);

+структура анімації
	
	duration - загальний час анімації

	timing(timeFraction)
		Временная функция, которая, по аналогии с CSS-свойством transition-timing-function, 
		будет по текущему времени вычислять состояние анимации.
		Она получает на вход непрерывно возрастающее число timeFraction – от 0 до 1, где 0 
		означает самое начало анимации, а 1 – её конец.
		Её результатом должно быть значение завершённости анимации, которому в CSS transitions 
		на кривых Безье соответствует координата y.
		Также по аналогии с transition-timing-function должны соблюдаться условия:
		timing(0) = 0
		timing(1) = 1
		…То есть, анимация начинается в точке (0,0) – нулевое время и нулевой прогресс и 
		заканчивается в (1, 1) – прошло полное время, и процесс завершён.

			function linear(timeFraction) {
  				return timeFraction;//лінійна анімація
			}	

	draw(progress) - функція, яка отримує стан завершеності анімації і малює його, progress=0 - 
			початкова, progress=1 - кінцева точки анімації

			function draw(progress) {
			  train.style.left = progress + 'px';
			}
///////////////////////////////////////////////////////////////////////
					function animate(options) {

					  var start = performance.now();

					  requestAnimationFrame(function animate(time) {
					    // timeFraction от 0 до 1
					    var timeFraction = (time - start) / options.duration;
					    if (timeFraction > 1) timeFraction = 1;

					    // текущее состояние анимации
					    var progress = options.timing(timeFraction);

					    options.draw(progress);

					    if (timeFraction < 1) {
					      requestAnimationFrame(animate);
					    }

					  });
					}

					animate({
					  duration: 1000,
					  timing: function(timeFraction) {
					    return timeFraction;
					  },
					  draw: function(progress) {
					    elem.style.width = progress * 100 + '%';
					  }
					});

+ часові функції(easeIn):
	
	в степені n:
		function quad(progress) {
		  return Math.pow(progress, n)
		}
	дуга:
		function circ(timeFraction) {
		  return 1 - Math.sin(Math.acos(timeFraction))
		}
	Back: постріл з лука:
		function back(x, timeFraction) {
		  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
		}
	Відскок bounce:
		function bounce(timeFraction) {
		  for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
		    if (timeFraction >= (7 - 4 * a) / 11) {
		      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		    }
		  }
		}
	пружня анімація:
		function elastic(x, timeFraction) {
		  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
		}

+ Реверсивні функції(easeOut)
	
	easeOut:
		// обычный вариант
		function bounce(timeFraction) {
		  for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
		    if (timeFraction >= (7 - 4 * a) / 11) {
		      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
		    }
		  }
		}
		// преобразователь в easeOut
		function makeEaseOut(timing) {
		  return function(timeFraction) {
		    return 1 - timing(1 - timeFraction);
		  }
		}
		var bounceEaseOut = makeEaseOut(bounce);
	easeInOut
		if (timeFraction <= 0.5) { // первая половина анимации)
		  return timing(2 * timeFraction) / 2;
		} else { // вторая половина
		  return (2 - timing(2 * (1 - timeFraction))) / 2;
		}
		///
		function makeEaseInOut(timing) {
		  return function(timeFraction) {
		    if (timeFraction < .5)
		      return timing(2 * timeFraction) / 2;
		    else
		      return (2 - timing(2 * (1 - timeFraction))) / 2;
		  }
		}
		bounceEaseInOut = makeEaseInOut(bounce);

//		!!!!формат JSON!!!!

JSON.parse(str) - returns js-objects/arrays/values
JSON.parse(str, reviver)
reviver = function(key,value) - must return new values for keys

//Сериализация, метод JSON.stringify
JSON.stringify(value, replacer, space) - converts and returns converted value in JSON format
JSON.stringify(value) - doesnt convert methods, and uses inner built method toJSON (if it exists)
JSON.stringify(value, replacer) - covert just arrays of properties (replacer=array) of object value
																- or replacer=function(key,value), which returns serailized value or undefined(doesnt includ its property)
JSON.stringify(value, replacer, space): space - quantity of spaces or string which insert before attachments

{dont use coments
for strings - just "", not ''}
or use library JSON5

//		//try…catch

try {
  // код ...
} catch (err) {
  // обработка ошибки
}
err.name
err.message
err.stack
//		Оператор throw
  if (!user.name) {
    throw new SyntaxError("Данные некорректны");
  }
  ще
  catch (e) {
  if (e.name == "SyntaxError") {
    alert( "Извините, в данных ошибка" );
  } else {
    throw e;
  }
}

try {
   .. пробуем выполнить код ..
} catch(e) {
   .. перехватываем исключение ..
} finally {
   .. выполняем всегда ..
}
//window.onerror
  window.onerror = function(message, url, lineNumber) {
    alert("Поймана ошибка, выпавшая в глобальную область!\n" +
      "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
  };

//		функціональне ООП

function CoffeeMachine(power) {
  this.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var self = this;
  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }// or var getBoilTime = function(){return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;}.bind(this);
  function onReady() {
    alert( 'Кофе готово!' );
  }
  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };
}

//		прототипне ООП

property __proto__
Чтение: Object.getPrototypeOf(obj) (кроме IE8-)
Запись: Object.setPrototypeOf(obj, proto)  (кроме IE10-)
Создание объекта с прототипом: Object.create(proto, descriptors)  (кроме IE8-)

var data = Object.create(null); - колекция

Rabbit.prototype = animal;(для функции конструктор, значение - только обьект) буквально говорит интерпретатору следующее: 
"При создании объекта через new Rabbit запиши ему __proto__ = animal".

function Rabbit() {}
Rabbit.prototype = {
  constructor: Rabbit
}; - автоматично створюється

function inherit(proto) {
  function F() {}     // (1)
  F.prototype = proto // (2)
  var object = new F; // (3)
  return object;      // (4)
}
1 Создана новая функция F. Она ничего не делает с this, так что если вызвать new F, то получим пустой объект.
2 Свойство F.prototype устанавливается в будущий прототип proto
3 Результатом вызова new F будет пустой объект с __proto__ равным значению F.prototype.
4 Мы получили пустой объект с заданным прототипом, как и хотели. Возвратим его.


if (!Object.create) Object.create = inherit; /* определение inherit - выше */

«Псевдоклассом» или, более коротко, «классом», называют функцию-конструктор вместе
с её prototype. Такой способ объявления классов называют «прототипным стилем ООП».

Мы можем написать метод для многократного повторения строки, и он тут же станет 
доступным для всех строк:

String.prototype.repeat = function(times) {
  return new Array(times + 1).join(this);
};
alert( "ля".repeat(3) ); // ляляля

//		клас Animal в фнкц та пртт

function Animal(name) {
  this.speed = 0;
  this.name = name;
  this.run = function(speed) {
    this.speed += speed;
    alert( this.name + ' бежит, скорость ' + this.speed );
  };
  this.stop = function() {
    this.speed = 0;
    alert( this.name + ' стоит' );
  };
};
var animal = new Animal('Зверь');
alert( animal.speed ); // 0, начальная скорость
animal.run(3); // Зверь бежит, скорость 3
animal.run(10); // Зверь бежит, скорость 13
animal.stop(); // Зверь стоит

// конструктор
function Animal(name) {
  this.name = name;
  this.speed = 0;
}
// методы в прототипе
Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};
Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
};
var animal = new Animal('Зверь');
alert( animal.speed ); // 0, свойство взято из прототипа
animal.run(5); // Зверь бежит, скорость 5
animal.run(5); // Зверь бежит, скорость 10
animal.stop(); // Зверь стоит

//		повний код наслідування

// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// Методы хранятся в прототипе
Animal.prototype.run = function() {
  alert(this.name + " бежит!")
}

// --------- Класс-потомок -----------
// Конструктор потомка
function Rabbit(name) {
  Animal.apply(this, arguments);
}

// Унаследовать
Rabbit.prototype = Object.create(Animal.prototype);

// Желательно и constructor сохранить
Rabbit.prototype.constructor = Rabbit;

// Методы потомка
Rabbit.prototype.run = function() {
  // Вызов метода родителя внутри своего
  Animal.prototype.run.apply(this);
  alert( this.name + " подпрыгивает!" );
};

// Готово, можно создавать объекты
var rabbit = new Rabbit('Кроль');
rabbit.run();

//	instanceof - to check if its object was made by constructor or its prototype

obj instanceof constructor// return true/false

//		опис власних помилок


    Чтобы наследовать от ошибок Error, нужно самостоятельно позаботиться о name,
     message и stack.
    Благодаря тому, что instanceof поддерживает наследование, удобно организуются
     проверки на нужный тип. В иерархию ошибок можно в любой момент добавить новые 
     классы, с понятным кодом и предсказуемым поведением.

Чтобы создавать наследники от Error было проще, можно создать класс CustomError, 
записать в него универсальный код, наподобие PropertyError и далее наследовать 
уже от него:

// общего вида "наша" ошибка
function CustomError(message) {
  this.name = "CustomError";
  this.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

// наследник
function PropertyError(property) {
  CustomError.call(this, "Отсутствует свойство " + property)
  this.name = "PropertyError";

  this.property = property;
}

PropertyError.prototype = Object.create(CustomError.prototype);
PropertyError.prototype.constructor = PropertyError;

// и ещё уровень
function PropertyRequiredError(property) {
  PropertyError.call(this, property);
  this.name = 'PropertyRequiredError';
  this.message = 'Отсутствует свойство ' + property;
}

PropertyRequiredError.prototype = Object.create(PropertyError.prototype);
PropertyRequiredError.prototype.constructor = PropertyRequiredError;

// использование
var err = new PropertyRequiredError("age");
// пройдёт проверку
alert( err instanceof PropertyRequiredError ); // true
alert( err instanceof PropertyError ); // true
alert( err isntanceof CustomError ); // true
alert( err isntanceof Error ); // true

//			примеси //  mixin
Примесь (англ. mixin) – класс или объект, реализующий какое-либо чётко выделенное 
поведение. Используется для уточнения поведения других классов, не предназначен 
для самостоятельного использования.
1. копіювання методів у клас
for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];

====================================
//		~~!!!!ES-2015!!!!!!~~~~~~~~~

https://kangax.github.io/compat-table/es6/

<script src="https://js.cx/babel-core/browser.min.js"><script>

+++++++++++++++++++++++++++++++++++
=====================================
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&






======================|JavaScript patterns|======================
======================================================

=== Decorator (менять поведение объекта на лету, в зависимости от каких-нибудь условий)

function Ball( param )
{
    this._radius = param.radius;
    this._color = param.color;
}
Ball.prototype = 
{
    constructor: Ball,
    INCREMENTATION_STEP: 5,
    draw: function(){console.log("ball drawn with radius:" + this._radius + " and color: " + this._color)},
    inc: function(){ this._radius += this.INCREMENTATION_STEP }
}

new Ball({ radius:100, color:"red"});

- перший спосіб реалізації

				function StripedBall( ball )
				{
				    this._ball = ball    
				}
				StripedBall.prototype = 
				{
				    constructor: StripedBall,
				    draw: function()
				    {
				        this._ball.draw();
				        console.log("and with stripes");
				    },
				    inc: function()
				    {
				        return this._ball.inc();
				    }
				}
				function SpeckledBall( ball )
				{
				    this._ball = ball    
				}
				SpeckledBall.prototype = 
				{
				    constructor: SpeckledBall,
				    draw: function()
				    {
				        this._ball.draw();
				        console.log("and with dots!");
				    },
				    inc: function()
				    {
				        return this._ball.inc();
				    }
				}


				var ball1 = new SpeckledBall( new StripedBall( new Ball({ radius:100, color:"red"})));
				var ball2 = new StripedBall( new SpeckledBall( new Ball({ radius:100, color:"green"})));

				ball1.draw();
				ball1.inc();
				ball1.draw();

				ball2.draw();

- другий спосіб реалізації

				function MakeStripedBall( ball )
				{
				    var function_name = "draw";
				    var prev_func = ball[ function_name ];

				    ball[ function_name ] = function()
				    {
				        prev_func.apply( this, arguments )
				        console.log("and with stripes");
				    };

				    return ball;
				}
				function MakeSpeckledBall( ball )
				{
				    var function_name = "draw";
				    var prev_func = ball[function_name];

				    ball[function_name] = function ()
				    {
				        prev_func.apply(this, arguments)
				        console.log("and with dots!");
				    };

				    return ball;
				}

				var ball3 = MakeStripedBall( MakeSpeckledBall( new Ball({ radius: 150, color: "blue" })));
				var ball4 = MakeSpeckledBall( MakeStripedBall(new Ball({ radius: 150, color: "blue" })));

				ball3.draw();
				ball3.inc();
				ball3.draw();

				ball4.draw();


=== Factory (создание разных объектов с одинаковым интерфейсом, в зависимости от ситуаций, фабрика
		может проводить какую-то первичную инициализацию объектов)

				var Shapes =
				{
				    Circle: function (param)
				    {
				        console.log("new " + param.color + " circle created with radius " + param.radius + "px");
				    },
				    Square: function (param)
				    {
				        console.log("new " + param.color + " square created with " + param.side + "px on a side ");
				    },
				    Triangle: function (param)
				    {
				        console.log("new " + param.color + " triangle created with " + param.side + "px on a side ");
				    }
				}

				function ShapeFactory(size, color)
				{
				    this.size = size;
				    this.color = color;
				}
				ShapeFactory.prototype =
				{
				    constructor: ShapeFactory,

				    makeCircle: function () { return new Shapes.Circle({ radius: this.size / 2, color: this.color }); },
				    makeSquare: function () { return new Shapes.Square({ side: this.size, color: this.color }); },
				    makeTrinagle: function () { return new Shapes.Triangle({ side: this.size, color: this.color }); }
				}

				var factory = new ShapeFactory(100, "red")

				factory.makeSquare();
				factory.makeSquare();
				factory.makeTrinagle();
				factory.makeCircle();
				factory.makeTrinagle();

=== Singleton (объект, который есть в системе в одном экземпляре)

- перший спосіб

				var singleton_A =
				{
				    log: function( text ){ console.log(text); }
				}		

- другий

				var Singleton_B;
				(function(){
				    var instance;
				    var anticlone_proxy;

				    Singleton_B = function(){
				        if( instance ){ return instance; }

				        instance = 
				        {
				            _counter: 0,
				            log: function( text ){ this._counter++; console.log( text + this._counter ); }
				        }

				        anticlone_proxy =
				        {
				            log: function( text ){ return instance.log( text ); }
				        }

				        return anticlone_proxy;
				    };
				})();


				function NonSingleton() { }
        NonSingleton.prototype =
        {
            consturctor: NonSingleton,
            scream: function(){console.log("Woooohoooooo!")}
        }

        var singleton = new Singleton_B();
        var nonsingleton = new NonSingleton();
        
        singleton.log("3..2..1... ignition!");
        nonsingleton.scream();

=== Memoization (для функции которая может долго вычислять результат, мы создаем небольшой кэш ответов. 
		Работает это, разумеется, только в том случае, когда при одинаковых входных параметрах результат функции тоже должен быть одинаковый)

   function calculation(x, y)
    {
        var key = x.toString() + "|" + y.toString();
        var result = 0;

        if (!calculation.memento[key])
        {
            for (var i = 0; i < y; ++i) result += x;
            calculation.memento[key] = result;
        }
        return calculation.memento[key];
    }
    calculation.memento = {};
    console.profile();
    console.log('result:' + calculation(2, 100000000));
    console.profileEnd();

    console.profile();
    console.log('result:' + calculation(2, 100000000));
    console.profileEnd();

    console.profile();
    console.log('result:' + calculation(2, 10000000));
    console.profileEnd();

=== Mediator (Mediator — это такая штука, которая помогает в особо запущенных случаях взаимодействия 
		между обьектами, например, когда у нас, скажем, 5 обьектов более-менее разного типа, и все почему-то 
		знают друг о друге, стоит серьезно задуматься о медиаторе.)

				function Daddy() { }
				Daddy.prototype =
				{
				    constructor: Daddy,

				    getBeer: function ()
				    {
				        if (!kitchen.tryToGetBeer())
				        {
				            console.log("Daddy: Who the hell drank all my beer?");
				            return false;
				        }

				        console.log("Daddy: Yeeah! My beer!");
				        kitchen.oneBeerHasGone();
				        return true;
				    },
				    argue_back: function () { console.log("Daddy: it's my last beer, for shure!"); }
				}

				function Mammy() { }
				Mammy.prototype =
				{
				    constructor: Mammy,

				    argue: function ()
				    {
				        console.log("Mammy: You are f*king alconaut!");
				        kitchen.disputeStarted();
				    }
				}

				function BeerStorage(beer_bottle_count)
				{
				    this._beer_bottle_count = beer_bottle_count;
				}
				BeerStorage.prototype =
				{
				    constructor: BeerStorage,

				    takeOneBeerAway: function ()
				    {
				        if (this._beer_bottle_count == 0) return false;
				        this._beer_bottle_count--;
				        return true;
				    }
				}

				var kitchen = //медіатор
				{
				    daddy: new Daddy(),
				    mammy: new Mammy(),
				    refrigerator: new BeerStorage(3),
				    stash: new BeerStorage(2),

				    tryToGetBeer: function ()
				    {
				        if (this.refrigerator.takeOneBeerAway()) return true;
				        if (this.stash.takeOneBeerAway()) return true;

				        return false
				    },
				    oneBeerHasGone: function (){ this.mammy.argue(); },
				    disputeStarted: function (){ this.daddy.argue_back(); }
				}

				var round_counter = 0;
				while (kitchen.daddy.getBeer())
				{
				    round_counter++
				    console.log( round_counter + " round passed"); 
				}

=== Observer ($(#some_useful_button).click( blah_blah_blah ) В ней click — это событие,
		а blah_blah_blah какраз и есть тот самый Observer который за этим событием наблюдает)

Event = function()
{
    this._observers = [];
}

Event.prototype =
{
    raise: function (data)
    {
        for (var i in this._observers)
        {
            var item = this._observers[i];
            item.observer.call(item.context, data);
        }
    },
    subscribe: function (observer, context)
    {
        var ctx = context || null;
        this._observers.push({ observer: observer, context: ctx });
    },
    unsubscribe: function (observer, context )
    {
        for (var i in this._observers)
            if ( this._observers[i].observer == observer &&
                 this._observers[i].context == context )
                    delete this._observers[i];
    }
} 

var someEvent = new Event();
someEvent.subscribe(function ( data ) { console.log("wohoooooo " + data ) });

var someObject =
{
    _topSecretInfo: 42,
    observerFunction: function () { console.log("Top Secret:" + this._topSecretInfo) }
}
someEvent.subscribe(someObject.observerFunction, someObject); 
someEvent.raise("yeaah!");
someEvent.raise();



======================================================
======================================================







//		!!!closure(return function)!!!
//		 принцип достижимости (англ. reachability)

function makeCounter() {
  var currentCount = 1;
  return function() { // (**)
    return currentCount++;
  };
}
var counter = makeCounter(); // (*)
// каждый вызов увеличивает счётчик и возвращает результат
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log( counter() ); // 3
// создать другой счётчик, он будет независим от первого
var counter2 = makeCounter();
console.log( counter2() );


function sum (a) {
	return function (b) {
		return a+b;
	};
};
console.log(sum(3)(2));


//	string buffer
function makeBuffer() { 
	var bufferStr = "";
	return function (str) {
		if(str){bufferStr+=str} else return bufferStr;
	};
};
var buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!


//string buffer with clear option
function makeBuffer() {
	var bufferStr = "";
	function buff (str) {
		if(str){bufferStr+=str}else return bufferStr;
	};
	buff.clear = function () {
		bufferStr = "";
	};
	return buff;
};
var buffer = makeBuffer();
buffer("Тест");
buffer(" тебя не съест ");
console.log( buffer() ); // Тест тебя не съест
buffer.clear();
console.log( buffer() ); // ""


//	sort array of objects by the same chosen property of 

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];
function byField (prop) {
	return function(a,b){
		return (a[prop] > b[prop]) ?  1 :  -1;
	};
};
users.sort(byField('name'));
users.forEach(function(user) {
  console.log( user.name );
}); // Вася, Маша, Петя
users.sort(byField('age'));
users.forEach(function(user) {
  console.log( user.name );
}); // Маша, Вася, Петя

//get filtered array by filter

var arr = [1, 2, 3, 4, 5, 6, 7];
function filter (arr, func) {
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) res.push(arr[i]);
	};
	return res;
};
console.log(filter(arr, function(a) {
   return a % 2 == 0
})); // 2,4,6
function inBetween(a, b){
	return function (x) {
		return (a <= x && x <= b);
	};
};
function inArray(arrTest){
	return function(x){
		for (var i = 0; i < arrTest.length; i++) {
			if(x===arrTest[i]){return true};
		};
	};
}; 
console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2

//			!!important example!!
//		create array of functions shoters which return their own number

function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++) {
    shooters[i] = function(x) { // функция-стрелок
      return function(){
      	console.log( x );
      };
    }(i);
  };
  return shooters;
}
var army = makeArmy();
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++){ (function(i){
    shooters[i] = function() { // функция-стрелок
      return console.log( i );
      };
  })(i);
  };
  return shooters;
}
var army = makeArmy();
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

// 	//			using "this"

// calculator

var calculator = {
	read: function(){
		this.a = prompt("enter first number:");
		this.b = prompt("enter second number:");
	},
	sum: function(){
		return (+this.a) + (+this.b)
	},
	mul: function(){
		return this.a * this.b
	}
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

//		пример “чейнинг” (chaining)

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    console.log( this.step );
  }
};
ladder.up().up().down().up().down().showStep();

//			sum with using toString

function sum (a) {
	var res = a;
	function sumCont(b){
		res = res + b;
		return sumCont;
	};
	sumCont.toString = function(){
		return res;
	}
	return sumCont;
};
var tmp = sum(3);
console.log(tmp);
console.log(sum(1)(2));
console.log(sum(1)(2)(3));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));


//		!!!!	функції - конструктори (new)   !!!!!

var obj = {};
function A() { return obj; }
function B() { return obj; }
var a = new A;
var b = new B;
alert( a == b ); // true

//			calculator by using function-constructor

var calculator = new Calculator();
calculator.read();
function Calculator () {
	var a,b;
	this.read = function() {
		a = +prompt("enter first number",0);
		b = +prompt("enter second number",0);
	};
	this.sum = function(){
		return a+b;
	};
	this.mul = function(){
		return a*b;
	};
};
console.log( "Сумма = " + calculator.sum() );
console.log( "Произведение = " + calculator.mul() );

//		"accumulator" by using function-constructor

function Accumulator (startingValue) {
	this.value = startingValue;
	this.read = function(){
		this.value = this.value + (+prompt("enter additional charge:",0));
	};
};
acc = new Accumulator(25);
acc.read();
console.log(acc.value);

//		calculator with posibility to add new operations

//		my

function Calculator () {
	this.arrSymb = [];
	this.arrFn = [];
	this.addMethod = function(symb, fn){
		if (symb && fn){
		this.arrSymb.push(symb);
		this.arrFn.push(fn);
		};
	};
	this.calculate = function(str){
		var arr = str.split(" ");
		this.x1 = +arr[0];
		this.x2 = +arr[2];
		this.numOperation = arr[1];
		if(this.numOperation === "-"){
			return this.x1 - this.x2;
		} else if (this.numOperation === "+"){
			return this.x1 + this.x2;
		} else {
			for (var i = 0; i < this.arrSymb.length; i++) {
				if (this.arrSymb[i] === this.numOperation){
					return this.arrFn[i](this.x1, this.x2);
				}
			};
		};
	};
};
var ccc = new Calculator;
console.log(ccc.calculate("1 - 2"));
ccc.addMethod("/", function(a, b) {
  return a / b;
});
ccc.addMethod("*", function(a, b) {
  return a * b;
});
ccc.addMethod("**", function(a, b) {
  return Math.pow(a,b);
});
console.log(ccc.calculate("1 / 2"));
console.log(ccc.calculate("1 * 2"));
console.log(ccc.calculate("10 ** 2"));

//			not my

function Calculator() {
  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };
  this.calculate = function(str) {
    var split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]
    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return methods[op](+a, +b);
  }
  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}
var calc = new Calculator;
calc.addMethod("*", function(a, b) {
  return a * b;
});
calc.addMethod("/", function(a, b) {
  return a / b;
});
calc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
var result = calc.calculate("2 ** 3");
alert( result ); // 8

//		descriptors(get,set)

function User(fullName) {
  this.fullName = fullName;
};
var vasya = new User("Василий Попкин");
Object.defineProperties(vasya,{
	firstName:{
		get: function(){
			return this.fullName.split(" ")[0];
		},
		set: function(inFirstName){
			this.fullName = inFirstName + " " + this.lastName;
		}
	},
	lastName:{
		get: function(){
			return this.fullName.split(" ")[1];
		},
		set: function(inLastName){
			this.fullName = this.firstName + " " + inLastName;
		}
	},
});
// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин
// запись в lastName
vasya.lastName = 'Сидоров';
console.log( vasya.fullName ); // Василий Сидоров

//			object counter

function Article() {
  this.created = new Date();
  Article.createdLast = this.created;
  Article.allObjectCounter++;
  Article.showStats = function(){
  	console.log( "Всего: " + this.allObjectCounter + ", Последняя: " + this.createdLast );
  };
};
Article.allObjectCounter = 0;
var art = new Article();
console.log(art);
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)

//			method which returns sum of arguments

function sumArgs() {
	arguments.reduce = [].reduce;
	return arguments.reduce(function (previousValue, currentItem) {
		return previousValue + currentItem;
	},0);
};
//another way
function sumArgs () {
	var arrArguments = [].slice.call(arguments);
	return arrArguments.reduce(function (previousValue, currentItem){
		return previousValue + currentItem;
	},0);
};
//one more another way
function sumArgs () {
  return [].reduce.call(arguments, function (previousValue, currentItem) {
    return previousValue + currentItem;
  });
};
console.log( sumArgs(1, 2, 3) );

//	applyAll method

function applyAll() {
	if(arguments){
		return arguments[0].apply(this, [].slice.call(arguments, 1));
	};	
}; 
console.log( applyAll(Math.max, 2, -2, 3) );

//	using bind

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
};
var user = {
  login: 'Василий',
  password: '12345',
  loginOk: function() {
    alert( this.login + ' вошёл на сайт' );
  },
  loginFail: function() {
    alert( this.login + ': ошибка входа' );
  },
  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};
var vasya = user;
user = null;
vasya.checkPassword();

// using bind

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
};
var user = {
  login: 'Василий',
  password: '12345',
  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },
  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginDone.bind(this,true), this.loginDone.bind(this,false));}
};
var vasya = user;
user = null;
vasya.checkPassword();

//	login decorator

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
};
function makeLogging(f, log) {
	function wrapp (a) {
		log.push(a);
		return f.call(this,a);
	};
	return wrapp;
};
var log = [];
work = makeLogging(work, log);
work(1); // 1, добавлено в log
work(5); // 5, добавлено в log
for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
};

function work(a, b) {
  alert( a + b ); // work - произвольная функция
};
function makeLogging(f, log) {
	function wrapp () {
		log.push([].slice.call(arguments));
		return f.apply(this, arguments);
	};
	return wrapp;
};
var log = [];
work = makeLogging(work, log);
work(1, 2); // 3
work(4, 5); // 9
for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() );}; // "Лог:1,2", "Лог:4,5"

//	caching decorator

function f(x) {
  return Math.random() * x; // random для удобства тестирования
};
function makeCaching(f) {
	var Cache = {};
	function wrapp (x) {
		if(!(x in Cache)){
			Cache[x] = f.call(this,x);
		};
		return Cache[x];
	};
	return wrapp;
};
f = makeCaching(f);
var a, b;
a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)
b = f(2);
alert( a == b ); // false, другой аргумент => другое значение

//		example of polymorfie function

function formatDate(date) {
	var typeInputData = {}.toString.call(date).slice(8,-1);
	console.log(typeInputData);
	switch(typeInputData){
		case "String":{
			return ""+date.slice(8,10)+"."+date.slice(5,7)+"."+date.slice(0,4);
		};
		break;
		case "Number":{
			var fromMs = new Date(date*1000);
			return ""+fromMs.getDate()+"."+(fromMs.getMonth()+1)+"."+fromMs.getFullYear();
		};
		break;
		case "Array":{
			date[1]+=1;
			return date.reverse().join(".");
		};
		break;
			case "Date":{
			return ""+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
		};
		break;
		default:{
			return "incorrect input data"
		};
		break;

	};
};

console.log( formatDate('2011-10-02') ); 
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

//		setTimeout & setInterval

function printNumbersInterval(){
	var counterNumber = 1;
	var rrr = setTimeout(function goGo () {
		console.log(counterNumber);
		counterNumber++;
		if(counterNumber <= 20){
			setTimeout(goGo,100);
		};
	},100);
};

printNumbersInterval();

function printNumbersInterval(){
	var counterNumber = 1;
	var rrr = setInterval(function() {
		console.log(counterNumber);
		counterNumber++;
		if(counterNumber > 20){
			clearInterval(rrr);
		};
	},100);
};

printNumbersInterval();

//		functional oop

function CoffeeMachine(power) {
  this.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var self = this;
  var timerId;
  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  };
  function onReady() {
    alert( 'Кофе готово!' );
  };
  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  };
  this.stop = function() {
  	clearTimeout(timerId);
  	alert("кофе приготовлен не будет");
  };
};
var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет

//		getters and setters


function User() {
  var firstName,
  	surname;
  this.setSurname = function(n){
  	surname = n;
  };
  this.setFirstName = function(n){
  	firstName = n;
  };
  this.getFullName = function(){
  	return firstName + " " + surname;
  };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов

//

function CoffeeMachine(power, capacity) {
  this.getPower = function(){
  	return power;
  };
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

}

//

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };
  this.addWater = function(dV){
  	if((waterAmount+dV>400)||(dV<0)){
  		throw new Error("something wrong with water");
  	}
  	waterAmount+=dV
  };
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();

//	функціональне наслідування

function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var waterAmount = 0;
      
      var timerId;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готово!');
      }

      this.run = function() {
      	if (this._enabled === false){
      		throw new Error("CoffeeMachine is off");
      	}
        timerId = setTimeout(onReady, 1000);
      };
      var parentDisable = this.disable;
      this.disable = function(){
      	parentDisable.call(this);
      	clearTimeout(timerId);
      };

    }

/*var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
*/
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет

//

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
	Machine.apply(this, arguments);
	var food = [];
	this.addFood = function() {
		if (!this._enabled){
			throw new Error("fridge is off");
		};
		if (arguments.length + food.length > power/100){
			throw new Error("you cant add more products");
		}
		for (var i = 0; i < arguments.length; i++) {
			food.push(arguments[i]);
		};
	};
	this.getFood = function() {
		return food;
	};
};

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

//

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
	Machine.apply(this, arguments);
	var food = [];
	this.addFood = function() {
		if (!this._enabled){
			throw new Error("fridge is off");
		};
		if (arguments.length + food.length > power/100){
			throw new Error("you cant add more products");
		}
		for (var i = 0; i < arguments.length; i++) {
			food.push(arguments[i]);
		};
	};
	var parentDisable = this.disable;
	this.disable = function(){
		if(food.length){
			throw new Error("you cant off fridge becouse there are food");
		};
		parentDisable();
	};
	this.getFood = function() {
		return food.slice();
	};
	this.removeFood = function (item){
		for (var i = 0; i < food.length; i++) {
			if(food[i] === item){
				food.splice(i,1);
			};
		};
	};
	this.filterFood = function (func){
		var filteredFood = [];
		for (var i = 0; i < food.length; i++) {
			if (func(food[i])){
				filteredFood.push(food[i]);
			};
		};
	};
  this.filterFood = function(filter) {
    return food.filter(filter);
  };

  this.removeFood = function(item) {
    var idx = food.indexOf(item);
    if (idx != -1) food.splice(idx, 1);
  };
};

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2

//		prototype OOP

//Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

function f() {
  alert( "привет" );
};
Function.prototype.defer = function(ms){
	setTimeout(this,ms);
};

f.defer(1000); // выведет "привет" через 1 секунду


//Добавьте всем функциям в прототип метод defer(ms),
//который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
function f(a,b) {
  alert( a+b );
};
Function.prototype.defer = function(ms){
	var self = this;
	return function(){
		var args = arguments,
			context = this;
		setTimeout(function(){
			self.apply(context,args);
		},ms);
	}
	;
};

f.defer(1000)(1,2); // выведет "привет" через 1 секунду

//		from functional to prototype

function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._power = power;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
CoffeeMachine.prototype._getTimeToBoil = function () {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
  };
CoffeeMachine.prototype.run = function(){
	 setTimeout(function() {
      alert( 'Кофе готов!' );
    }, this._getTimeToBoil());
};
CoffeeMachine.prototype.setWaterAmount = function(amount){
	this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

//clock with prototype

function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function render() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  this._render();
  var self = this;//!!!!!!!!!!!!!
  this._timer = setInterval(function() {
    self._render();
  }, 1000);
};

  var clock = new Clock({
      template: 'h:m:s'
    });
    clock.start();

    //анаследник
function ExtendedClock(options) {
  Clock.apply(this, arguments);
  this._precision = +options.precision || 1000;
}
ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, this._precision);
};

 var clock1 = new Clock({
      template: 'h:m:s',
      precision: 1000
    });
    clock1.start();

    //		creatin my own type of error

    /*Создайте ошибку FormatError, которая будет наследовать от
 встроенного класса SyntaxError.

Синтаксис для её создания – такой же, как обычно:
*/
function FormatError(message){
	SyntaxError.call(this,message);
	this.message = message;
	this.name = "FormatError";
	 if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }
}
FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки

alert( err instanceof SyntaxError ); // true

//regular expression

var re = /[0-2]\d[\:\-][0-5]\d/g;
console.log( "Завтрак в 09:00. Обед - в 21-30".match(re) ); // 09:00, 21-30

//

var re = /\-?\d+(\.\d+)?/g;
var str = "-1.5 0 2 -123.4.";
alert( str.match(re) );   // -1.5, 0, 2, -123.4

//

var re = /<!--[\s\S]*?-->/g;
var str = '.. <!-- Мой -- комментарий \n тест --> ..  <!----> .. ';
alert( str.match(re) ); // '<!-- Мой -- комментарий \n тест -->', '<!---->'

//

var re = /<.+?>/g;
var str = '<> <a href="/"> <input type="radio" checked> <b>';
alert( str.match(re) ); // <> <a href="/">, <input type="radio" checked>, <b>

//		!!!!!!!DOM!!!!!!!!!!

//навігація по таблиці
  var table = document.body.children[0];

    for (var i = 0; i < table.rows.length; i++) {
      var row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    } 

//використання атрибутів

	//===from html
	<style>
	  .external {
	    background-color: yellow
	  }
	<style>

	<a name="list">список<a>
	<ul>
	  <li><a href="http://google.com">http://google.com<a><li>
	  <li><a href="/tutorial">/tutorial.html<a><li>
	  <li><a href="local/path">local/path<a><li>
	  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip<a><li>
	  <li><a href="http://nodejs.org">http://nodejs.org<a><li>
	  <li><a href="http://internal.com/test">http://internal.com/test<a><li>
	<ul>
	//===
var links = document.getElementsByTagName('a'),
	regExp = /^\w{2,6}\:\/\//,
	regExp1 = /http\:\/\/internal\.com/;
for (var i = 0; i < links.length; i++) {
	if((!regExp1.test(links[i].getAttribute('href')))&&(regExp.test(links[i].getAttribute('href')))){
		links[i].classList.add('external');
	}
};

// ищем все ссылки, у которых в href есть протокол,
// но адрес начинается не с http://internal.com
var css = 'a[href*="://"]:not([href^="http://internal.com"])';
var links = document.querySelectorAll(css);

for (var i = 0; i < links.length; i++) {
  links[i].classList.add('external');
}

//поліфіл для elem.remove
	<div>Это<div>
	<div>Все<div>
	<div>Элементы DOM<div>

	<script>
		/* ваш код полифилла */
		if(!HTMLElement.prototype.remove){
			HTMLElement.prototype.remove = function(){
				if(this.perentElement){
					this.parentElement.removeChild(this);
				}
			}
		}
		var elem = document.body.children[0];
		console.dir(elem);
		elem.remove(); // <-- вызов должен удалить элемент
	<script>

//функція insertAfter

<div>Это<div>
<div>Элементы<div>

<script>
  var elem = document.createElement('div');
  elem.innerHTML = '<b>Новый элемент<b>';

  function insertAfter(elem, refElem) {
  	var next = refElem.nextSibling;
  	if(next){
  		return refElem.parentNode.insertBefore(elem, next);} else {
  		return refElem.parentNode.appendChild(elem);
  		}
  }

  var body = document.body;

  // вставить elem после первого элемента
  insertAfter(elem, body.firstChild); // <--- должно работать

  // вставить elem за последним элементом
  insertAfter(elem, body.lastChild); // <--- должно работать
<script>

//функція removeChildren

<table id="table">
  <tr>
    <td>Это<td>
    <td>Все<td>
    <td>Элементы DOM<td>
  <tr>
<table>

<ol id="ol">
  <li>Вася<li>
  <li>Петя<li>
  <li>Маша<li>
  <li>Даша<li>
<ol>

<script>
function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}

  removeChildren(table); // очищает таблицу
  removeChildren(ol); // очищает список
<script>

//або

function removeChildren(elem) {
  elem.innerHTML = '';
}

//або

function removeChildren(elem) {
  try {
    elem.innerHTML = '';
  } catch (e) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }
}

//створення списку динамічно

var myUl = document.createElement('ul'),
	mess = prompt("enter li"),
	myLi;
document.body.appendChild(myUl);
while(mess){
	myLi = document.createElement('li');
	myLi.appendChild(document.createTextNode(mess));
	myUl.appendChild(myLi);
	mess = prompt("enter li");	
}

//функція для перетворенння об'єкта в список

  var data = {
      "Рыбы": {
        "Форель": {},
        "Щука": {}
      },

      "Деревья": {
        "Хвойные": {
          "Лиственница": {},
          "Ель": {}
        },
        "Цветковые": {
          "Берёза": {},
          "Тополь": {}
        }

      }
    };

    function createTree(container, obj) {
      container.appendChild(createTreeDom(obj));
    }

    function createTreeDom(obj) {
      if (isObjectEmpty(obj)) return;

      var ul = document.createElement('ul');

      for (var key in obj) {
        var li = document.createElement('li');
        li.innerHTML = key;

        var childrenUl = createTreeDom(obj[key]);
        if (childrenUl) li.appendChild(childrenUl);

        ul.appendChild(li);
      }

      return ul;
    }


    function isObjectEmpty(obj) {
      for (var key in obj) {
        return false;
      }
      return true;
    }

    var container = document.getElementById('container');
    createTree(container, data);

    //інший варіант
       function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }

    function createTreeText(obj) { // отдельная рекурсивная функция
      var li = '';
      for (var key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '<li>';
      }
      if (li) {
        var ul = '<ul>' + li + '<ul>'
      }
      return ul || '';
    }

    var container = document.getElementById('container');
    createTree(container, data);

    //підрахунок кількості вкладених елементів

     <ul>
    <li>Животные
      <ul>
        <li>Млекопитающие
          <ul>
            <li>Коровы<li>
            <li>Ослы<li>
            <li>Собаки<li>
            <li>Тигры<li>
          <ul>
        <li>
        <li>Другие
          <ul>
            <li>Змеи<li>
            <li>Птицы<li>
            <li>Ящерицы<li>
          <ul>
        <li>
      <ul>
    <li>
    <li>Рыбы
      <ul>
        <li>Аквариумные
          <ul>
            <li>Гуппи<li>
            <li>Скалярии<li>
          <ul>

        <li>
        <li>Морские
          <ul>
            <li>Морская форель<li>
          <ul>
        <li>
      <ul>
    <li>
  <ul>

  <script>
    var lis = document.getElementsByTagName('li');

    for (i = 0; i < lis.length; i++) {
      // получить количество детей
      var childCount = lis[i].getElementsByTagName('li').length;
      if (!childCount) continue;

      // добавить кол-во детей к текстовому узлу
      lis[i].firstChild.data += ' [' + childCount + ']';

    }
  <script>

  //сортування таблиці за останнім стовпчиком
http://plnkr.co/edit/GNvczAkbIgUJBuxJHHhh

   /* перенести элементы в массив, отсортировать его и перевставить */
    function sort1() {
      var tbody = document.getElementsByTagName('tbody')[0];
      var rows = [];
      for (var i = tbody.children.length - 1; i >= 0; i--) {
        var child = tbody.removeChild(tbody.children[i]);
        rows.push(child);
      }
      rows.sort(function(a, b) {
        return a.lastChild.innerHTML - b.lastChild.innerHTML;
      })
      for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
      }
    }

    /* скопировать ссылки в массив, отсортировать его и перевставить */
    function sort2() {
      var tbody = document.getElementsByTagName('tbody')[0];
      var rows = [];
      for (var i = 0; i < tbody.children.length; i++) {
        rows.push(tbody.children[i]);
      }
      rows.sort(function(a, b) {
        return a.lastChild.innerHTML - b.lastChild.innerHTML;
      })
      for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
      }
    }

    /* создать массив из значений и ссылок, отсортировать, перевставить
      doRemove = предварительно вынуть из документа
    */
    function sortOpt(doRemove) {
      var tbody = document.getElementsByTagName('tbody')[0];
      var table = tbody.parentNode;
      if (doRemove) table.removeChild(tbody);
      var rows = [];
      for (var i = 0; i < tbody.children.length; i++) {
        var elem = tbody.children[i];
        rows.push({
          value: elem.lastChild.innerHTML,
          elem: elem
        });
      }
      rows.sort(function(a, b) {
        return a.value - b.value;
      });
      for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i].elem);
      }
      if (doRemove) table.appendChild(tbody);
    }

//створення кнопки за допомогою тільки js

// <style>
//   .button {
    // -moz-border-radius: 8px;
    // -webkit-border-radius: 8px;
    // border-radius: 8px;
    // border: 2px groove green;
    // display: block;
    // height: 30px;
    // line-height: 30px;
    // width: 100px;
    // text-decoration: none;
    // text-align: center;
    // color: red;
    // font-weight: bold;
//   }
// <style>
// <a class="button" href="/">Нажми меня<a>
var aaa = document.createElement('a');
aaa.textContent = "Нажми меня";
aaa.href = "/";
aaa.style.cssText = "-moz-border-radius: 8px;\
    -webkit-border-radius: 8px;\
    border-radius: 8px;\
    border: 2px groove green;\
    display: block;\
    height: 30px;\
    line-height: 30px;\
    width: 100px;\
    text-decoration: none;\
    text-align: center;\
    color: red;\
    font-weight: bold;";
document.body.appendChild(aaa);

//notification

function showNotification(options) {

  var divchik = document.createElement('div');
  for (key in options){
    switch(key){
        case 'top': {
            divchik.style.top = options[key] + 'px';
        };
        break;
        case 'right': {
            divchik.style.right = options[key] + 'px';
        };
        break;
        case 'html': {
            var messText = document.createTextNode(options[key]);
            divchik.appendChild(messText);
        };
        break;
        case 'className': {
            divchik.classList.add(options[key]);
        };
        break;
    }
  }
  document.body.appendChild(divchik);
    setTimeout(function(){
        divchik.style.display = "none";
    }, 1500);
}
// покажет элемент с текстом "Привет" и классом welcome справа-сверху окна
showNotification({
  top: 10,
  right: 10,
  html: "Привет",
  className: "welcome"
});

//делегування подій

на головний контейнер вішаємо "обработчик", за допомогою делегування видаляємо підконтейнери з кнопкою "видалення"
 var mainDiv = document.getElementById('mainDiv');
    mainDiv.onclick = function(e){
      var target = e.target;
      if (target.classList.contains('remove-button')){
        target.parentNode.style.display = 'none';
      } else return;
    };

// Анімація

//мяч
  <style>
  	#field {
	  height: 200px;
	  border-bottom: 3px black groove;
	  position: relative;
	}

	#ball {
	  position: absolute;
	  cursor: pointer;
	}
  <style>
  <div id="field">
    <img src="https://js.cx/clipart/ball.svg" width="40" height="40" id="ball">
  <div>

  <script>
    function makeEaseOut(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    }

    function bounce(timeFraction) {
      for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

    ball.onclick = function() {

      var to = field.clientHeight - ball.clientHeight;

      animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function(progress) {
          ball.style.top = to * progress + 'px'
        }
      });


    };
  <script>


