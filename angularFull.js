ng-app - атрибут для підключення directive

{{1+2}} - binding

//		directive, controller, module

ng-app - для завантаження додатку, тільки раз, позначує корінь сторінки
ng-app = "" - приймає значення моделі
	<p>1+2 = {{1+2}}<p>

ng-init - виконує код ініціалізації
	<div ng-init="name = 'world'">
		<p>{{name}}<p>
	<div>

ng-bind
	<div ng-init="name = 'world'">
		<p><span ng-bind="name"><span><p>
	<div>

ng-controller - для фінкцій-контролерів
	<script>
	var MyFunctionCtrl = function($scope){//можуть приймати різні значення(в даному випадку $scope - аля this)
		$scope.name = "world";
		alert("Hello, world!");
	}
	<script>
	
	<div ng-controller = "MyFunctionCtrl">
		<p>{{name}}<p>//name доступна тільки там, де підключена функція контролер(має scope)
	<div>

==============================================================

Ключевой особенностью AngularJS является использование паттерна MVC, предполагающее разделение приложения на три функциональные части:
	контроллер, представление и модель.

======================|модулі|======================

angular.module() - створення модуля (повертає обєкт Module)
	параметри:
		1. назва(суфікс App)
		2. масив назв модулів, від яких даний мадуль залежить
		3. конфігураційні налаштуваннямадуля(не обовязковий)

var myApp = angular.module('myApp', []);
<html ng-app="myApp"> - асоціювання модуля

методи обєкта Module
	config(callback): регистрирует функцию callback, которая используется для его конфигурации в процессе загрузки
	constant(key, value): определяет сервис, который возвращает константное значение value
	controller(name, constructor): создает контролер
	directive(name, factory): создает директиву, которая расширяет стандартную разметку html
	factory(name, provider): создает службу
	filter(name, factory): создает фильтр
	provider(name, type): создает сервис
	service(name, constructor): создает сервис

======================|контролери|======================

var myApp = angular.module('myApp', []);
myApp.controller("phonesController", function ($scope) {//другий аргумент - функція для налаштування контролера
    // настройка контролера
});

//приклад
<!doctype html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
	<head>
	<body>
		<div ng-controller="phoneController">
			<p>Название: {{phone.name}}<p>
			<p>Цена: {{phone.price}} $<p>
			<p>Производитель: {{phone.company.name}}<p>
		<div>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"><script>
		<script type="text/javascript">
			var myApp=angular.module('myApp', []);
			myApp.controller('phoneController', function($scope) {
			 
			  $scope.phone = {
			          
			        name: 'Nokia Lumia 630',
			        year: 2014,
			        price: 200,
			        company: {
			            name: 'Nokia',
			            country: 'Финляндия'
			        }
			    }
			});
		<script>
	<body>
<html>

--------------------------------
контролери можна зберігати в окремі файли і підключати до різних сторінок

index.html
<!doctype html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
	<head>
	<body>
		<div ng-controller="phoneController">
			<p>Название: {{phone.name}}<p>
			<p>Цена: {{phone.price}} $<p>
			<p>Производитель: {{phone.company.name}}<p>
		<div>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"><script>
		<script type="text/javascript">
			angular.module('myApp', []);
		
		<script>
		<script src="js/controllers/phoneController.js"><script>
	<body>
<html>

phoneController.js
var myApp=angular.module('myApp');
myApp.controller('phoneController', function($scope) {
 
	 $scope.phone = {
          
        name: 'Nokia Lumia 630',
	       year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: 'Финляндия'
        }
    }
});

------------------------
наслідування контролерів:
	потрібно вкласти один елемент з директивою ng-controller в інший, який має подібну директиву

<div ng-controller="parentController">
    <div ng-controller="firstChildController"><div>
    <div ng-controller="secondChildController"><div>
<div>

------------------------
контролери без $scope

var myApp = angular.module('myApp', []);
myApp.controller('myController', function() {
    this.message="myController";
    this.text="Контроллер без $scope";
});

//тоді потрібно вказати змінну, через яку можна буде взаємодіяти з контролером
<div ng-controller="myController as myCtrl">

======================|обєкт $scope|======================

$rootScope - батьківський обєкт кожного додатку

<html ng-app="myApp">
...
angular.module('myApp', [])
    .run(function($rootScope) {
    $rootScope.moduleName = "myApp";
    $rootScope.message = "Hello AngularJS";
});

run(callback) - метод, який реєструє функцію(в ній встановлюється обєкт $rootScope) при завантаженні модуля

myApp.controller('myController', function ($scope) {
	$scope.myMessage = "say hi to angular";
});
...
<div ng-controller="myController">//дана директива зв'язує даний блок з відповідним контролером
	{{myMessage}}
<div>

======================|директиви в AngularJS|======================

- <div ng-bind>...<div>
- <div class="ng-bind">...<div>
- <ng-form>...<ng-form> - самостійні теги

Розглянемо деякі директиви:

=== ng-repeat - дозволяє робити обхід масиву в стилі цикла for-each і генерувати для них елементи html

//в контролері створено масив об'єктів phones ($scope.phones = [{},{},{}];)
<li ng-repeat="phone in phones">//для кожного елемента масиву створюється відповідний елемент li
	<b>{{phone.name}}<b>
	<p>Цена: {{phone.price}} $<p>
	<p>Производитель: {{phone.company.name}}<p>
	<p>Производитель: {{$index}}<p>
<li>

В циклі доступні вбудовані змінні:
	$index: возвращает индекс элемента в массиве
	$first: возвращает true, если элемент является первым в массиве
	$last: возвращает true, если элемент является последним в массиве
	$middle: возвращает true, если элемент не является ни первым, ни последним в массиве
	$even: возвращает true, если элемент является четным
	$odd: возвращает true, если элемент является нечетным

=== ng-class
...
<tr ng-repeat="phone in phones" ng-class="$odd ? 'odd' : 'even'">//додає елементу клас в циклі - парний/непарний
...

!обхід внутрішніх масивів

<div ng-controller="phoneController">
    <ul>
        <li ng-repeat="company in phones">
            <p>{{company.name}}<p>
            <ul ng-repeat="model in company.models">//обхід внутрішніх масивів
                <b>{{model.name}}<b>
                <p>Цена: {{model.price}} $<p>
            <ul>
        <li>
    <ul>
<div>

======================|Привязка даних|======================

	ng-bind: привязка до властивості innerText html-елемента
	ng-bind-html: привязка до властивості innerHTML html-элемента
	ng-bind-template: аналогічно ng-bind за виключенням того, що дозволяє встановити привязку відразу до кількох виразів
	ng-model: двостороння привязка
	ng-non-bindable: визначає частину html-кода, в якій привязка не буде використовуватись

=== ng-bind (одностороння привязка)

	<div ng-controller="phoneController">
	    <p>Количество элементов: <span ng-bind="phones.length"><span><p>
	    <p>Первый элемент: <span ng-bind="phones[0].name"><span><p>
	<div>

=== ng-model (двостороння привязка для input, textarea і select)

	<input type="text" ng-model="property" />
	<input type="text" ng-model="object.property" />
	<input type="text" ng-model="object.property.property" />

=== ng-bind-template (дозволяє задати шаблон привязки)

	<div ng-controller="phoneController">
		<p ng-bind-template="{{phones[0].name}}: {{phones[0].price}} $"><p>
	<div>

=== ng-non-bindable (відміняє привязку)

	<p>{{1 + 2}}<p>//3
	<p ng-non-bindable>{{1 + 2}}<p>//{{1 + 2}}

=== ng-bind-html

	<p ng-bind-html="змінна, в якій код html"><p>

	<script src="js/lib/angular-sanitize.min.js"><script>//потрібно підключити скрипт
	
	var myApp = angular.module('myApp', ["ngSanitize"])//побрібно встановити залежність при створенні модуля

======================|директиви шаблонів для керування розміткою html|======================

=== ng-include (отримує з сервера фрагмент кода html(часткове представлення), опрацьовує його і додає на html-сторінку)

	<ng-include src="'phonesList.html'"><ng-include>

	може приймати три параметри:
		src - url завантажуваного файлу
		onload - визначає вираз, який рендериться при завантаженні файлу
		autoscroll - визначає чи дозволяється прокрутка під час завантаження

======================|Директива ng-switch|======================

=== ng-switch (як ng-include, але для невеликих частин html)

	<div ng-switch on="data.mode">//параметр
        <div ng-switch-when="Tablets">//дія для відповідного значення
            <ul>
                <li ng-repeat="tablet in tablets">
                <b>{{tablet.name}}<b>
                <p>Цена: {{tablet.price}} $<p>
                <p>Производитель: {{tablet.company}}<p>
                <li>
            <ul>
        <div>
        <div ng-switch-when="Phones">//дія для відповідного значення
            <ul>
                <li ng-repeat="phone in phones">
                <b>{{phone.name}}<b>
                <p>Цена: {{phone.price}} $<p>
                <p>Производитель: {{phone.company}}<p>
                <li>
            <ul>
        <div>
        <div ng-switch-default>//дія для дефолтного значення
            Выберите товары для просмотра
        <div>
    <div>

======================|директиви стилізації, керування елементами|======================

	ng-style: встановлює в елемента стилі css
	ng-class: задає елементу відповідний клас
	ng-class-even: встановлює клас для парних елементів
	ng-class-odd: встановлює клас для непарних елементів
	ng-hide: приховує елемент
	ng-show: робить елемент видимим
	ng-if: задає для елемента деяку умову

=== ng-class

	в контролері
	$scope.someclass="myclass";
	...
	<div ng-controller="phonesController">
		<div ng-class="someclass">Директива ng-class<div>
	<div>

=== ng-style
	
	в контролері
	$scope.somestyle={background: '#eee', color:'#333'};
	...
	<div ng-controller="phonesController">
		<div ng-style="somestyle">Директива ng-style<div>
	<div>

=== ng-show, ng-hide
	
	$scope.data={visible : false};
	...
	<div ng-controller="phoneController">
		<p ng-show="data.visible">Первый блок<p>
		<p ng-hide="data.visible">Второй блок<p>
		<input type="checkbox" ng-model="data.visible">Открыть/скрыть
	<div>

=== ng-if (якщо приймає значення false, то елемент з директивою видаляється з структури DOM)

	<div ng-controller="phoneController">
		<input type="checkbox" ng-model="data.visible">Открыть/скрыть
		<p ng-if="data.visible">Первый блок<p>
		<p ng-if="!data.visible">Второй блок<p>
	<div>

======================|Опрацювання подій|======================

	ng-blur: определяет поведение для события blur, которое возникает при потере элементом фокуса
	ng-focus: определяет поведение для события focus, которое возникает при получении фокуса элементом
	ng-change: определяет поведение для события change, которое возникает при изменении элементом состояния, например, при нажатии на элемент input type="checkbox"
	ng-submit: определяет поведение для события submit, которое возникает при отправке формы
	ng-copy/ng-cut/ng-paste: определяет поведение для событий копирования, вырезки и вставки соответственно
	ng-dblclick: та же ng-click, только обрабатывается двойное нажатие
	ng-mousedown: для обработки нажатия клавиши мыши
	ng-mouseup: для обработки отжатия мыши
	ng-mouseenter: для обработки наведения курсора в определенную область
	ng-mouseleave: для обработки ухода курсора с определенной области
	ng-mousemove: для обработки перемещения курсора мыши
	ng-keydown: обработка нажатия клавишы клавиатуры
	ng-keypress: обработка нажатия клавишы клавиатуры
	ng-keyup: обработка отжатия клавишы клавиатуры


=== приклад для подій ===

контролер QuestionController

var myApp=angular.module('myApp');
myApp.controller('QuestionController', function($scope) {
     
    $scope.question={
        text: 'Какой js-фреймворк лучше использовать?',
        author: 'Иван Иванов',
        date: '20/10/2013',
        answers: 
        [{
            text: 'AngularJS!',
            author: 'Вова Сидоров',
            date: '20/10/2013',
            rate:2
        },{
            text: 'AngularJS лучше всех',
            author: 'Олег Кузнецов',
            date: '20/10/2013',
            rate:0
        },{
            text: 'Я бы использовал knockout',
            author: 'Неизвестный',
            date: '21/10/2013',
            rate:0
        }]
    },
     
    $scope.voteUp = function (answer){
        answer.rate++;
    };
    $scope.voteDown = function (answer){
        answer.rate--;
    };
    $scope.questColorClass= "questcolor";
    $scope.changeClass = function (e) {
         
        $scope.questColorClass = e.type == "mouseover" ? "questselectedcolor" : "questcolor";
    }
});

...

<!doctype html>
<html ng-app='myApp'>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/mystyles.css" />
	<head>
	<body>
		<div  ng-controller="QuestionController">
			<div class="quest" ng-class="questColorClass"
			ng-mouseenter="changeClass($event)"
			ng-mouseleave="changeClass($event)">
				<h3>{{question.text}}<h3>
				<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
			<div>
				<h3>Ответы<h3>
				<div class="answers">
					<div ng-repeat="answer in question.answers" class="answer">
						<div class="vote">
					    <a class="vote-up" ng-click="voteUp(answer)"><a>
					    <span class="rate">{{answer.rate}}<span>
					    <a class="vote-down" ng-click="voteDown(answer)"><a>
					<div>
					<b>{{answer.text}}<b>
					<p>{{answer.author}}<p>
					<p><i>{{answer.date}}<i><p>
				<div>
			<div>
		<div>
		<script src="js/lib/angular.min.js"><script>
		<script type="text/javascript">
			var myApp = angular.module('myApp', []);
		<script>
		<script src="js/controllers/QuestionController.js"><script>
	<body>
<html>

...

.quest {
    border-bottom: 1px solid #aaa; 
    margin-bottom: 10px; 
}
.questcolor {
    background: #F6F6F6;
}
.questselectedcolor{ 
    background: #ddd;
}
.answer {
    border-bottom: 1px solid #ccc; 
    margin-bottom: 10px;
}
.vote {
    float: left; 
    text-align: center; 
    width: 21px; 
    margin-right: 20px;
}
.vote-up, .vote-down{
    display: block;
    margin: 0px auto;
    width: 21px;
    height: 25px;
}
.vote-up{
    background-position: 0px 0px;
    background-image: url("../img/sprite.png");
    background-repeat: no-repeat;
    overflow: hidden;
}
.vote-down{
    background-position: 0px -20px;
    background-image: url("../img/sprite.png");
    background-repeat: no-repeat;
    overflow: hidden;
}

======================|Фільтри|======================

	{{expression | filter}} - загальний вираз для фільтрів

+++ зміна регістру (lowercase та uppercase)

	<h3>{{question.text | lowercase}}<h3>

+++ форматування чисел (number:кількість знаків після коми)

	<div>{{234.5677 | number:1}}<div> 

+++ форматування валюти (date:'формат') - для мілісекунд від 01.01.1970

	<div>{{1405405678756 | date:'yyyy-MM-dd'}}<div>

+++ orderBy () - сортує набір обєктів по відповідній властивості

	//замінимо відповідний рядок в попередньому прикладі
	...
	<div ng-repeat="answer in question.answers | orderBy:sortparam" class="answer">
	...
	//в контроллері додамо параметр для фільтра
	...
	$scope.sortparam='rate';
	...

+++ limitTo - обмежує кількість елементів

	<div ng-repeat="answer in question.answers | orderBy:sortparam | limitTo:2" class="answer">

+++ filter - задає параметри і значення фільтрації

	<div  ng-controller="QuestionController">
		<div class="quest">
			<h3>{{question.text}}<h3>
			<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
		<div>
		<p>Введите ответчика: <input type="text" ng-model="member"><p>//member створюється навіть, якщо він не був створений в контроллері
		<h3>Ответы<h3>
		<div class="answers">
			<div ng-repeat="a in question.answers | filter:{author:member}" class="answer" >//якщо властивість author в обєкті a рівна member
				<div class="vote">
				    <a class="vote-up" ng-click="voteUp(a)"><a>
				    <span class="rate">{{a.rate}}<span>
				    <a class="vote-down" ng-click="voteDown(a)"><a>
				<div>
				<b>{{a.text}}<b>
				<p>{{a.author}}<p>
				<p><i>{{a.date}}<i><p>
			<div>
		<div>
	<div>

======================|Створення власних фільтрів|======================

module.filter('filter_name', function(){//module - назва модуля додатка, filter_name - назва фільтра
     return function(param){//param - параметр, над яким будуть виконуватись дії
        // некоторые действия над param
        return some_value;
    }
})

======================|Валідація форми|======================

=== ng-pattern="/\d\d/\d\d/\d\d\d\d/"

questApp.controller('AnswerController', 
    function AnswerController($scope){
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){//перевірка чи форма пройшла валідацію
                // действия по сохранению
                alert(answer.author + ", ваш ответ сохранен");
            }
        };
})

...
<button type="submit" ng-click="save(answer, answerForm)">Сохранить<button>//опрацювання події і
			// виклик функції з контролера з відповідними значеннями форми
...


======================|Робота зі структурою DOM|======================

jqLite - API для роботи з DOM

angular.element() - створює обгортку для елемента для можливості використання методів AngularJS

+ Навігація по сторінці:
	children(): повертає набір дочірніх елементів
	eq(index): повертає елемент по відповідному індексу з вибірки елементів
	find(tag): отримує всі елементи з відповідним тегом
	next(): повертає наступний сусідній елемент(не батьківський)
	parent(): повертає батьківський елемент
	html(): повертає html-код елемента
	text(): повертає текстовий склад елемента

var elem = angular.element(document.querySelector("body"));
console.log(elem.html());
var questHeader = elem.find('h3');
console.log(questHeader.text());

+ Маніпуляція елементами:
	addClass(name): додає елементу клас
	attr(name) / attr(name, value): отримує значення value атрибута name елемента і задає його значення
	css(name) / css(name, value): отримує значення value стилю name у елемента і задає його значення
	hasClass(name): повертає true, якщо у елемента є клас name
	prop(name) / prop(name, value): отримує значення value властивості name елемента задає його значення
	removeAttr(name): видаляє у елемента атрибут
	removeClass(name): видаляє у елемента атрибут клас
	text(value): встановлює текстове значення у елемента
	toggleClass(name): додає відповідний клас, якщо його немає, якщо є - видаляє
	val() / val(value): отримує значення атрибута value і задає його значення

+ Створення та видалення елементів 
	angular.element(html): створює елемент кодом html
	after(elements): додає елементи elements після елемента, на якому викликається даний метод
	append(elements): додає елементи elements в в якості дочірніх в кінець елемента, на якому викликається даний метод
	clone(): створює копію елемента
	prepend(elements): додає елементи elements в в якості дочірніх на початок елемента, на якому викликається даний метод
	remove(): видаляє елемент
	replaceWith(element): замінює елемент
	wrap(element): обертає елемент елементом переданим у якості параметра

var quest = angular.element(document.querySelector(".quest"));
var questHeader = quest.find('h3');
// удалим заголовок
questHeader.remove();
// создадим новый элемент div
var newDiv = angular.element("<div>");
// установим у него стили
newDiv.css("width", "80px");
newDiv.css("height", "50px");
newDiv.css("background-color","blue");
// добавим в div.quest
quest.append(newDiv);

+ Реєстрація подій

jqLite дозволяє реєстрацію подій стандартним js

	on(events, handler): реєструє "обработчик" для однієї або декількох подій
	off(events, handler): видаляє зарєстрований "обработчик"
	triggerHandler(event): викликає "обработчики" для події

newDiv.on("click", function (e){
    var w = parseInt(newDiv.css("width")) + 10;
    newDiv.css("width", w+"px");
});

======================|Створення власних директив|======================

Module.directive()

questApp.directive("answerList", function () {
//назва директиви( але щоб підключити - "answer-list" ) і функція, яка створює директиву
    return function (scope, element, attrs) {
//scope - об'єкт $scope, встановлений в кнтроллері
//element - елемент, до якого застосовується директива
//attrs - колекція атрибутів у вигляді пари ключ-значення
        var data = scope[attrs["answerList"]];// теж саме, що і var data = scope.question;
        if (angular.isArray(data.answers)) {
            var ulElem = angular.element("<ul>");
            element.append(ulElem);
            for (var i = 0; i < data.answers.length; i++) {
                var liElem = angular.element('<li>');
                liElem.append(angular.element('<p>').text(data.answers[i].text));
                ulElem.append(liElem);
            }
        }
    }
});

----------------------

<html lang="en" ng-app="myApp">
<head>
...
<head>
<body ng-controller="ctr">

  <p class="old1 old2" red-color>Nothing here<p>
<script>
	var myApp = angular.module('myApp', []);
	myApp.controller("ctr", function($scope){
		var angEl = angular.element(document.querySelector('p'));
		angEl.toggleClass("old1");
		console.log($scope);
		$scope.test = "Хо-хо test for $scope";
	});
	myApp.directive("redColor", function (){
		return function(scope, element, attrs) {
			element.css('color', 'red');
			console.log(scope.test);//Хо-хо test for $scope
		};
	});
<script>
<body>

======================|Параметри директив|======================

- link - функція директиви

- restrict - обєкт, до якого директива застосовується
	E: до елемента
	A: до атрибута
	C: до класа
	M: до коментаря

перепишемо попередній приклад:

<html lang="en" ng-app="myApp">
<head>
...
<head>
<body ng-controller="ctr">

  <p class="old1 old2" red-color>Nothing here<p>
<script>
	var myApp = angular.module('myApp', []);
	myApp.controller("ctr", function($scope){
		var angEl = angular.element(document.querySelector('p'));
		angEl.toggleClass("old1");
		console.log($scope);
		$scope.test = "Хо-хо test for $scope";
	});
	myApp.directive("redColor", function (){
		return {
			link: function(scope, element, attrs) {
				element.css('color', 'red');
				console.log(scope.test);//Хо-хо test for $scope
			},
			restrict: "EACM"//директива застосовується до всіх типів обєктів
		}
	});
<script>
<body>

== застосування директиви до елементів (source - атрибут, який приймає дані для директиви)
	<red-color source=""/>
	var data = scope[attrs["redColor"] ||attrs["source"]]; - для отримання даних в директиві

== застосування до класів
	<div class="red-color: дані для директиви"><div>

== застосування до коментарів
	<!-- directive: red-color дані для директиви -->
	...
	тоді в коді директиви визначаються двома можливими шляхами:
		якщо директива застосовується до коментаря і інші випадки
		if (element[0].nodeName == "#comment") {
		    element.parent().append(divElem);
		} 
		else {
		    element.append(divElem);
		}

======================|Шаблони директив|======================

template - властивість директив для функціональності
templateUrl

questApp.directive("answerList", function () {
    return {
        link: function (scope, element, attrs) {
         
            scope.data = scope[attrs["answerList"]];
        },
        restrict: "A",
        template: "<div class='answers'>" +
        "<div ng-repeat='answer in data.answers' class='answer'>" +
            "<div class='vote'>" +
            "<a class='vote-up' ng-click='voteUp(answer)'><a>" +
            "<span class='rate'>{{answer.rate}}<span>" +
            "<a class='vote-down' ng-click='voteDown(answer)'><a>" +
        "<div>" +
        "<b>{{answer.text | formatText}}<b>" +
        "<p>{{answer.author}}<p>" +
        "<p><i>{{answer.date}}<i><p>" +
    "<div><div>"
    }
});

або темплейти можна зберігати в окремих файлах

//answersTemplate.html
<div class="answers">
	<div ng-repeat="answer in question.answers" class="answer">
		<div class="vote">
		    <a class="vote-up" ng-click="voteUp(answer)"><a>
		    <span class="rate">{{answer.rate}}<span>
		    <a class="vote-down" ng-click="voteDown(answer)"><a>
		<div>
		<b>{{answer.text | formatText}}<b>
		<p>{{answer.author}}<p>
		<p><i>{{answer.date}}<i><p>
	<div>
<div>

//тоді директива
questApp.directive("answerList", function () {
    return {
        link: function (scope, element, attrs) {
         
            scope.data = scope[attrs["answerList"] ||attrs["source"]];
        },
        restrict: "A",
        templateUrl: "templates/answersTemplate.html"
    }
});

======================|Впровадження шаблонів (transclusion)|======================

впровадження html-коду зовні в шаблон

questApp.directive("answerList", function () {
    return {
        restrict: "A",
        templateUrl: "templates/answersTemplate.html",
        transclude: true//підключає функціональність впровадження
    }
});

=== ng-transclude - вказує, що в даний елемент буде впроваджуватись(вставлятись) зовнішній код

//answersTemplate.html:
<div class="answers">
<div ng-transclude><div>//!!!звідси
<div ng-repeat="answer in question.answers" class="answer">
<div class="vote">
    <a class="vote-up" ng-click="voteUp(answer)"><a>
    <span class="rate">{{answer.rate}}<span>
    <a class="vote-down" ng-click="voteDown(answer)"><a>
<div>
<b>{{answer.text | formatText}}<b>
<p>{{answer.author}}<p>
<p><i>{{answer.date}}<i><p>
<div>
<div>

//index.html
<!doctype html>
<html ng-app="questApp">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/mystyles.css" />
<head>
<body>
	<div  ng-controller="QuestionController">
		<div class="quest">
			<h3>{{question.text}}<h3>
			<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
		<div>
		<div answer-list><h3>Ответы<h3><div>//сюди!!!
	<div>
	 
	<script src="js/lib/angular.min.js"><script>
	<script src="js/app.js"><script>
	<script src="js/controllers/QuestionController.js"><script>
	<script src="js/answerList.js"><script>
	<script src="js/filter.js"><script>
	<script>
	<script>
<body>
<html>

======================|Опрацювання виразів в директивах|======================

$compile - сервіс, який переобразовує HTML-код, який включає вирази привязки і 
директиви, в функію, яка викликається для генерації контенту

questApp.directive("answerList", function($compile) {
    return function (scope, element, attrs) {
        var content = "<div class='answers'>" +
        "<div ng-repeat='answer in question.answers' class='answer'>" +
            "<div class='vote'>" +
            "<a class='vote-up' ng-click='voteUp(answer)'><a>" +
            "<span class='rate'>{{answer.rate}}<span>" +
            "<a class='vote-down' ng-click='voteDown(answer)'><a>" +
            "<div>" +
        "<b>{{answer.text | formatText}}<b>" +
        "<p>{{answer.author}}<p>" +
        "<p><i>{{answer.date}}<i><p>" +
    "<div><div>";
        var answersElem = angular.element(content);
        var compileFn = $compile(answersElem);
        compileFn(scope);
        element.append(answersElem);
    }
}); 

======================|Сервіси|======================

==== Module.factory() - метод для створення сервісів
! використовується патерн сінглтон(для всього додатку створюється тільки один екземпляр)

//dataService.js
questApp.factory('dataService', function(){
    return{
        question:{
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2013',
            answers: 
            [{
                text: 'AngularJS!',
                author: 'Вова Сидоров',
                date: '20/10/2013',
                rate:2
            },{
                text: 'AngularJS лучше всех',
                author: 'Олег Кузнецов',
                date: '21/10/2013',
                rate:3
            }]
        }
    };
})

questApp.controller('QuestionController', 
    function QuestionController($scope, dataService){//в контролері вказуємо сервіси
     
        $scope.question=dataService.question;//звернення до даних сервіса
     
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)

//index.html
<!doctype html>
<html ng-app="questApp">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/mystyles.css" />
<head>
<body>
	<div  ng-controller="QuestionController">
		<div class="quest">
			<h3>{{question.text}}<h3>
			<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
		<div>
		<h3>Ответы<h3>
		<div class="answers">
			<div ng-repeat="answer in question.answers | orderBy:sortparam" class="answer">
				<div class="vote">
					<a class="vote-up" ng-click="voteUp(answer)"><a>
					<span class="rate">{{answer.rate}}<span>
					<a class="vote-down" ng-click="voteDown(answer)"><a>
				<div>
				<b>{{answer.text}}<b>
				<p>{{answer.author}}<p>
				<p><i>{{answer.date}}<i><p>
			<div>
		<div>
	<div>
	<script src="js/lib/angular.min.js"><script>
	<script src="js/app.js"><script>
	<script src="js/dataService.js"><script>
	<script src="js/controllers/QuestionController.js"><script>
<body>
<html>

==== Module.service() - інший метод для створення сервісів

//questionService.js
var questionFn = function(){
    return{
        question:{
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2013',
            answers: 
            [{
                text: 'AngularJS!',
                author: 'Вова Сидоров',
                date: '20/10/2013',
                rate:2
            },{
                text: 'AngularJS лучше всех',
                author: 'Олег Кузнецов',
                date: '21/10/2013',
                rate:3
            }]
        }
    }
};
 
questApp.service('questionService', questionFn);

...
questApp.controller('QuestionController',
    function QuestionController($scope, questionService){//так само встановлюємо залежність в контролері
        $scope.question=questionService.question;
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)

======================|Скрвіси для роботи з DOM|======================

$anchorScroll: переміщує прокрутку до відповідного посилання на сторінці
$document: являє собою обєкт jqLite, який включає стандартний js-обєкт window.document
$interval: обгортка навколо функції window.setInterval
$location: доступ URL
$window: являє стандартний javascript-объект window

<!doctype html>
<html ng-app="myApp">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/mystyles.css" />
<head>
<body>
	<div  ng-controller="DomController">
		    <button ng-click="getAlert('Hell to World')">Не нажимай<button>
		    <button id="angButton">Жми<button>
	<div>
	 
	<script src="js/lib/angular.min.js"><script>
	<script>
		var myApp = angular.module('myApp', []);
		myApp.controller("DomController", function($scope, $window, $document){//встановлення залежностей!!!
			     
			    $scope.getAlert = function (text){
				            $window.alert(text);
			    };
			    $document.find("button").on("click", function (event) {
				        $window.alert(event.target.innerText);
			    });
		});
	<script>
<body>
<html>

======================|Потенційно небезпечні дані|======================

- $sce - видаляє потенційно небезпечні елементи і атрибути з HTML

- $sanitize - замінює потенційно небезпечні символи на ескейп-послідовності

<!doctype html>
<html ng-app="myApp">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/mystyles.css" />
<head>
<body>
	<div  ng-controller="helloController">
		    <textarea ng-model="htmlcode"><textarea>
		    <p ng-bind-html="htmlcode"><p>
	<div>
	 
	<script src="js/lib/angular.min.js"><script>
	<script src="js/lib/angular-sanitize.min.js"><script>//для використання привязки до HTML-коду і використання сервісу
	<script>											  //$sanitize потрібно підключити angular-sanitize.js 
		var myApp = angular.module('myApp', ["ngSanitize"]);
		myApp.controller('helloController', function($scope, $sanitize) {//та встановити залежність
			 
			    $scope.htmlcode="<div>Жми <b>тут<b><div>";
			    $scope.$watch("htmlcode", function (newValue) {
//$scope.$watch - сервіс для динамічного відслідковування змін моделі
				        $scope.htmlcode = $sanitize(newValue);
			    });
		});
	<script>
<body>
<html>

...
myApp.controller('helloController', function($scope, $sce) {
 
    $scope.htmlcode="<div>Жми <b>тут<b><div>";
    $scope.$watch("htmlcode", function (newValue) {
        $scope.htmlcode = $sce.trustAsHtml(newValue);//розглядає текст як html
    });
});
...

======================|Сервіс $http і ajax-запити|======================

$http

//question.json
{
    "question":{
        "text": "Какой js-фреймворк лучше использовать?",
        "author": "Иван Иванов",
        "date": "20/10/2013",
        "answers":
        [{
            "text": "AngularJS!",
            "author": "Вова Сидоров",
            "date": "20/10/2013",
            "rate":2
        },{
            "text": "AngularJS лучше всех",
            "author": "Олег Кузнецов",
            "date": "21/10/2013",
            "rate":3
        }]
    }
}

//контролер
questApp.controller('QuestionController', 
    function QuestionController($scope, $http){
     
        $http.get('question.json').success(function(data) {
            $scope.question=data.question;
        });
     
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)

======================|Налаштування ajax-запитів|======================

Методи сервіса $http:

	- get(url, config): виконує GET-запит по відповідному url
	- post(url, data, config): виконує POST-запит до відповідного url з надсиланням обєкта data
	- delete(url, config): виконує DELETE-запит
	- put(url, data, config): виконує PUT-запит, відправляючи обєкт data по відповідному url
	- head(url, config): виконує HEAD-запит
	- jsonp(url, config): виконує JSONP-запит по відповідному url

Замість даних методів можна використовувати параметризовану форму запису сервіса:

	$http({method: 'GET', url: 'question.json'}).success(function(data) {});
	// аналогично
	//$http.get('question.json').success(function(data) {});

Додаткові метод для точного опрацювання відповіді від сервера

	success(fn): виконує функцію fn при успішному завершенні запиту
	error(fn): виконує функцію fn, якщо при виконанні виникли помилки
	then(successFn, errorFn): обєднання двох попердніх методів

Функція в обох методах success(fn) і error(fn) може приймати до чотирьох параметрів:
	
	data: дані отримані від сервера
	status: статусний код відповіді
	headers: повертає функцію, отримуючу заголовки відповіді
	config: обєкт для конфігурації відповіді

questApp.controller('QuestionController',
    function QuestionController($scope, $http){
 
        $scope.loaded=false;
      
        $scope.load = function (){
            $http.get('question.json').
             success(function(data, status, headers, config) {
                $scope.question=data.question;
                $scope.loaded=true;
                console.log("код ответа: " +status);
                console.log("объем данных: " + headers("content-length"));
            }).error(function(data, status, headers, config) {
                console.log("код ответа: " +status);
            })
        };
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)

Конфігурація запиту:
 	
	config - обєкт, я вкому визначені такі параметри:
		data: дані, які посилаються на сервер. Якщо не встановити даний параметр, то надіслані дані, наприклад,
			методом post, будуть автоматично серілізуватись в json
		headers: обєкт, який представляє собою набір заголовків
		method: HTTP-метод запиту
		params: встановлює параметри рядка URL
		timeout: встановлює число мілісекунд дії запиту
		transformRequest: функція, яка опрацьовує дані запиту перед його здійсненням
		transformResponse: функція, яка опрацьовує відповідь від сервера після здійснення запиту
		url: встановлює URL, що запрошується
		withCredentials: якщо параметр рівний true, то в запиті також надсилаються аутинтефікаційні кукі
		xsrfHeaderNamexsrfCookieName: використовується для надсилання CSRF-токенів

questApp.controller('QuestionController',
    function QuestionController($scope, $http){
 
        $scope.loaded=false;
      
        $scope.load = function (){
            var conf={
                timeout: 600 // 600 миллисекунд
            };
            $http.get('question.json', conf).
             success(function(data, status, headers, config) {
                $scope.question=data.question;
                $scope.loaded=true;
                console.log(config);
            }).error(function(data, status, headers, config) {
                console.log("код ответа: " +status);
            })
        };
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)

======================|Надсилання даних|======================

методом post:

<!doctype html>
<html ng-app="questApp">
<head>
	<meta charset="utf-8" />
<head>
<body>
	<div ng-controller="AnswerController">
		<form name="answerForm">
			<fieldset>
				<p><label for="answerText">Текст ответа<label>
					<input id="answerText" ng-model="answer.text" required placeholder="Введите ответ" /><p>
				<p><label for="answerAuthor">Автор ответа<label>
					<input id="answerAuthor" ng-model="answer.author" required placeholder="Введите автора" /><p>
			<fieldset>
			<p><button type="submit" ng-click="save(answer, answerForm)">Сохранить<button><p>
		<form>
		<div>Ответ:<div>
		<p ng-bind="response.text"><p>
		<p ng-bind="response.author"><p>
	<div>
	<script src="js/lib/angular.min.js"><script>
	<script src="js/app.js"><script>
	<script src="js/controllers/AnswerController.js"><script>
<body>
<html>

//AnswerController.js
questApp.controller('AnswerController',
    function AnswerController($scope, $http){
         
        $scope.response={};
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                 
                $http.post("postAnswer.php", answer).success(function (answ) {//надсилає обєкт answer на адресу postAnswer.php
                    $scope.response=answ;//
                     
                });
            }
        };
    }
)

//postAnswer.php
<?php
	$answer = json_decode(file_get_contents('php://input'), true);
	 
	if(isset($answer['author']) && isset($answer['text']))
	{
	     
	    echo json_encode($answer);
	}
	else
	{  
	    echo "Введенные данные некорректны";
	}
?>

======================|Передача параметрів в запит|======================

//question.json
{
    "question":{
        "text": "Какой js-фреймворк лучше использовать?",
        "author": "Иван Иванов",
        "date": "20/10/2013",
        "answers":
        [{
            "id" : 1,//додано id унікально ідентифікуємо кожний пост з відповіддю
            "text": "AngularJS!",
            "author": "Вова Сидоров",
            "date": "20/10/2013",
            "rate":2
        },{
            "id" : 2,
            "text": "AngularJS лучше всех",
            "author": "Олег Кузнецов",
            "date": "21/10/2013",
            "rate":3
        }]
    }
}

<!doctype html>
<html ng-app="questApp">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/mystyles.css" />
<head>
<body>
	<div  ng-controller="QuestionController">
		
		<div class="content">
			<div class="quest">
				<h3>{{question.text}}<h3>
				<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
			<div>
			<h3>Ответы<h3>
			<div class="answers">
				<div ng-repeat="answer in question.answers | orderBy:sortparam" class="answer">
					<div class="vote">
						<a class="vote-up" ng-click="voteUp(answer)"><a>
						<span class="rate">{{answer.rate}}<span>
						<a class="vote-down" ng-click="voteDown(answer)"><a>
					<div>
					<b>{{answer.text}}<b>
					<p>{{answer.author}}<p>
					<p><i>{{answer.date}}<i><p>
				<div>
			<div>
		<div>
		<script src="js/lib/angular.min.js"><script>
		<script src="js/app.js"><script>
		<script src="js/controllers/QuestionController.js"><script>
	<body>
	<html>

//контролер
questApp.controller('QuestionController',
    function QuestionController($scope, $http){
      
         $http.get('question.json').success(function(data) {
            $scope.question=data.question;
        });
         
        $scope.voteUp = function (answer){
            $http({method:'GET', url:'setAnswer.php', params: {'id':answer.id, 'up': true}}).
             success(function(data) {
                 answer.rate++;
                 console.log(data);
            })
        };
        $scope.voteDown = function (answer){
            $http({method:'GET', url:'setAnswer.php', params: {'id':answer.id,'up': false}}).
             success(function(data) {
                 answer.rate--;
                 console.log(data);
            })
        };
    }
)

//фактична адреса запиту
setAnswer.php?id=[answer.id]&up=[true или false]

//setAnswer.php
<?php
if(isset($_GET['id']) && isset($_GET['up']))
{
    $id = $_GET['id'];
    $up = $_GET['up'];
    // обновление данных в json-файле или базе данных
    $data = array("id"=> $id, "up" => $up);
    // отдаем обратно объект
    echo json_encode($data);
}
else
{  
    echo "Введенные данные некорректны";
}
?>

======================|Сервіс $q та promise-обєкти|======================

Promise - результат виконання асинхронної операції

Promise-обєкт визначає методи, які реєструють функцію, яка викликається при завершенні асинхронної операції. 

//створення сервісу
questApp.factory('dataService', function($http, $q){//залежність від $q
    return{
        getData: function(){
            var deferred = $q.defer();//створюємо deferred-обєкт
            $http({method: 'GET', url: 'question.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.question);//зіставлення даних з Promise-обєктом
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;//отримання Promise-обєкта
        }
    }
})

//контролер
questApp.controller('QuestionController', 
    function QuestionController($scope, dataService){
     
        var promiseObj=dataService.getData();//отриуємо promise-об'єкт
        promiseObj.then(function(value) { $scope.question=value; });//для отримання "чистого" js-об'єкта
//then(successCallback, errorCallback, notifyCallback)
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)

======================|Сервіс $timeout|======================

//контролер
questApp.controller('QuestionController', 
    function QuestionController($scope, dataService, $timeout){
      
     var promiseObj = $timeout(function(){
            return dataService.getData();
        }, 3000);
          
        promiseObj.then(function(value) { $scope.question=value; });
         
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)

 $timeout.cancel(promiseObj) - для зупинки

 ======================|Представлення і односторінкові додатки|======================

Представлення (view)

//представлення question.html
<div>//немає зв'язку з контролером, оскільки він задається напряму за допомогою маршрута
	<div class="quest">
		<h3>{{question.text}}<h3>
		<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
	<div>
	<h3>Ответы<h3>
	<div class="answers">
		<div ng-repeat="answer in question.answers | orderBy:sortparam" class="answer">
			<div class="vote">
			    <a class="vote-up" ng-click="voteUp(answer)"><a>
			    <span class="rate">{{answer.rate}}<span>
			    <a class="vote-down" ng-click="voteDown(answer)"><a>
			<div>
			<b>{{answer.text}}<b>
			<p>{{answer.author}}<p>
			<p><i>{{answer.date}}<i><p>
		<div>
	<div>
<div>

//інше представлення
<div ng-controller="QuestionController">//інший контролер
	<div class="quest">
		<h3>{{question.text}}<h3>
		<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
	<div>
<div>
<div>
	<form name="answerForm">
		<fieldset>
			<p><label for="answerText">Текст ответа<label>
				<input id="answerText" ng-model="answer.text" required placeholder="Введите ответ" /><p>
			<p><label for="answerAuthor">Автор ответа<label>
				<input id="answerAuthor" ng-model="answer.author" required placeholder="Введите автора" /><p>
		<fieldset>
		<button type="submit" ng-click="save(answer, answerForm)">Сохранить<button>
	<form>
<div>

//вказуємо маршрути для представлень
var questApp = angular.module('questApp', ["ngRoute"])//для використання маршрутів потрібно підключити модуль ngRoute
    .config(function($routeProvider){//за допомогою config визначаємо маршрути додатка
    								//для конфігурації маршрутів використовуємо об'єкт $routeProvider, який приймає два параметри:
    								//назву маршрута і об'єкт маршрута
    								//об'єкт маршрута - задає представлення і контролер, який опрацьовує дане представлення, 
    								//за допомогою параметрів templateUrl и controller
        $routeProvider.when('/question',
        {
            templateUrl:'views/question.html',
            controller:'QuestionController'
        });
        $routeProvider.when('/answer',
        {
            templateUrl:'views/answer.html',
            controller:'AnswerController'
        });

        $routeProvider.otherwise({redirectTo: '/question'});//маршрут за замовчуванням
});

//index.html
<!doctype html>
<html ng-app="questApp">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/mystyles.css" />
<head>
<body>
<nav><a href="#/question">Вопрос<a>|<a href="#/answer">Ответить<a><nav>//вказівки на маршрути
<ng-view><ng-view>//місце, де відбувається рендерінг представлення, відповідного маршруту
<script src="js/lib/angular.min.js"><script>
<script src="js/lib/angular-route.min.js"><script>//додаємо можливість маршрутизації(в ньому знаходиться функціонал модуля ngRoute)
<script src="js/app.js"><script>
<script src="js/dataService.js"><script>
<script src="js/controllers/QuestionController.js"><script>
<script src="js/controllers/AnswerController.js"><script>
<body>
<html>

======================|Керування маршрутом і відключення кешування|======================

$route - сервіс для керування поточним маршрутом

	current: повертає обєкт, який включає інформацію про поточний маршрут
	reload(): перезавантажує представлення для поточного маршрута
	routes: повертає колекцію маршрутів, визначених через $routeProvider

Щоб зафіксувати перехід від одного маршрута до іншого, можна опрацьовувати події визначені в обєкті $route

	$routeChangeStart: подія спрацьовує перед зміною маршрута
	$routeChangeSuccess: подія спрацьовує після зміни маршрута
	$routeUpdate: подія спрацьовує при оновленні маршрута
	$routeChangeError: спрацьовує, якщо маршрут не може бути змінений

//app.js
var questApp = angular.module('questApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/question',
        {
            templateUrl:'views/question.html',
            controller:'QuestionController'
        });
        $routeProvider.when('/answer',
        {
            templateUrl:'views/answer.html',
            controller:'AnswerController'
        });
        $routeProvider.otherwise({redirectTo: '/question'});
}).run(function($rootScope, $templateCache) {//початкова ініціалізація модуля(метод run())
						//$templateCache - сервіс, що керує кешуванням шаблонів 
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
    					//використання $rootScope дозволить застосовувати "обработчик" при змінах по всьому модулю незалежно від контролера
    					//event - дані про подію, next - маршрут, на який здійснюється перехід, current - поточний маршрут, з якого здійснюється перхід
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);//видалення кешування для маршрута, на який здійснюється перехід
        }
    });
}); 

//приберемо метод run() з контролера
var questApp = angular.module('questApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/question',
        {
            templateUrl:'views/question.html',
            controller:'QuestionController'
        });
        $routeProvider.when('/answer',
        {
            templateUrl:'views/answer.html',
            controller:'AnswerController'
        });
        $routeProvider.otherwise({redirectTo: '/question'});
});

//і змінемо кнотролер AnswerController
questApp.controller('AnswerController',
    function AnswerController($scope, $http, $location, $templateCache){//
         		//$location - потрібен для переходу по визначеному маршруту
    $scope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(next.templateUrl);
            console.log(next);
            console.log(current);
        }
    });
    $scope.save = function (answer, answerForm){
        if(answerForm.$valid){
                 
            $http.post("postAnswer.php", answer).success(function () {
                $location.path("question");//метод для переходу по визначеному маршруту
            });
        }
    };
})

======================|Параметри маршрутів|======================

http://localhost:8080/answer/2/message:
	answer, 2, message - параметри

2 способи визначення параматрів маршрута:
//app.js
var questApp = angular.module('questApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/question',
        {
            templateUrl:'views/question.html',
            controller:'QuestionController'
        });
        $routeProvider.when('/answer',
        {
            templateUrl:'views/answer.html',
            controller:'AnswerController'
        });
        $routeProvider.when("/edit/:id", {//приймає один параметр маршрута id
            templateUrl: "views/answer.html",
            controller:'AnswerController'
        });
        $routeProvider.when("/edit/:id/:data*", {//довільна кількість параметрів замість плейсхолдера data*
            templateUrl: "views/answer.html",
            controller:'AnswerController'
        });
        $routeProvider.otherwise({redirectTo: '/question'});
});

//обидва маршрути будуть опрацьовуватись контролером AnswerController і використовуватимуть пердставлення answer.html
//мета маршрутів - забезпечити редагування посту з відповіддю

//question.html - виведення питання зі списком відповідей
<div class="quest">
<h3>{{question.text}}<h3>
<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
<div>
<h3>Ответы<h3>
<div class="answers">
<div ng-repeat="answer in question.answers | orderBy:sortparam" class="answer">
<div class="vote">
    <a class="vote-up" ng-click="voteUp(answer)"><a>
    <span class="rate">{{answer.rate}}<span>
    <a class="vote-down" ng-click="voteDown(answer)"><a>
<div>
<b>{{answer.text}}<b>
<p>{{answer.author}}<p>
<p><i>{{answer.date}}<i><p>
<p><a href="#/edit/{{answer.id}}">Изменить<a><p>//опрацьовується першим маршрутом edit
<div>
<div>

//представлення answer.html залишається без змін
<div ng-controller="QuestionController">
<div class="quest">
<h3>{{question.text}}<h3>
<p>{{question.author}} <p> <p><i>{{question.date}}<i><p>
<div>
<div>
<div>
<form name="answerForm">
<fieldset>
<p><label for="answerText">Текст ответа<label>
<input id="answerText" ng-model="answer.text" required placeholder="Введите ответ" /><p>
<p><label for="answerAuthor">Автор ответа<label>
<input id="answerAuthor" ng-model="answer.author" required placeholder="Введите автора" /><p>
<fieldset>
<button type="submit" ng-click="save(answer, answerForm)">Сохранить<button>
<form>
<div>

//контролер AnswerController
questApp.controller('AnswerController',
    function AnswerController($scope, $http, $location, $templateCache, $routeParams){
								//$routeParams - для отримання параметрів маршрута
    $scope.answer = null;   
         
    $scope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(next.templateUrl);
        }
    });
     
    $scope.$on("$routeChangeSuccess", function () {//для відслідковування переходу по даному маршруту встановлюється 
        var id = $routeParams["id"]				   //"обработчик" для події $routeChangeSuccess
        if(id!=='undefined'){//якщо параметр id визначений - ми хочемо редагувати відповідь, якщо ні - збираємось його створити
             
            $http({method:'GET', url:'getAnswer.php', params: {'id':id}}).//звертаємось до ресурсу, який має повернути об'єкт відповіді
             success(function(data) {
                $scope.answer = data;
            });
        }
    });
     
    $scope.save = function (answer, answerForm){
        if(answerForm.$valid){
            $http.post("postAnswer.php", answer).success(function () {
                $location.path("question");
            });
        }
    };
})

//getAnswer.php
<?php
 
if(isset($_GET['id']))
{
    $id = $_GET['id'];
    $string = file_get_contents("question.json");
    $json=json_decode($string,true);
    // в целях упрощения примера допустим, что 
    // порядок элемента соответствует его id
    $data = $json["question"]["answers"][$id-1];
    echo json_encode($data);
}
else
{  
    echo "Введенные данные некорректны";
}
?>

======================|Введення залежностей(Dependency Injection) і сервіс $injector|======================

$injector - сервіс для введення залежностей(роль полягає у визначенні встановленні залежностей, які використовуються функцією)

методи $injector:
	annotate(fn): повертає набір залежностей для функції fn
	get(name): повертає конкретну реалізацію сервіса по по визначеній назві сервіса
	has(name): повертає true, якщо для вказаного обєкта name встановлена залежність
	invoke(fn, self, locals): викликає функцію fn. може приймати два необовязкові парамтри: self (дозволяє встановити
	аргумент this для функції, що вказуються) и locals (представляє альтернативний спосіб передачі аргументів у функцію, що викликається)

<!DOCTYPE html>
<html ng-app="myApp">
<head>
<title>Dependency Injection<title>
<meta charset="utf-8" />
<link href="css/mystyles.css" rel="stylesheet" />
<head>
<body>
<div ng-controller="myController">
<button ng-click="buttonClick()">Не нажимать<button>
<div>
<script src="js/lib/angular.min.js"><script>
<script>
angular.module("myApp", []).controller("myController", function ($scope, $injector) {//передаємо сервіс $injector
    var counter = 0;
    var getData = function (dataService, message) {//залежить від сервісу dataService і від аргументу message
        if (counter %2 == 0) {
            console.log(dataService.question);
        } 
        else {
            console.log(message);
        }
        counter++;
    }
    $scope.buttonClick = function () {
        var deps = $injector.annotate(getData);//отримуємо залежності, що використовуються функцією getData
											   //об'єкт deps включає набір залежностей ataService і message
        var args = [];
        for (var i = 0; i < deps.length; i++) {
            if ($injector.has(deps[i])) {//чи є залежність зареєстрованим сервісом
                args.push($injector.get(deps[i]));//отрмуємо реалізацію сервіса і додаємо його в масив аргумантів args
                console.log("Сервис: " + deps[i]);
            } 
            else if (deps[i] == "message") {
                args.push("Привет мир");
                console.log("" + deps[i]);
            }
        }
        getData.apply(null, args);//викликаємо метод
    };
}).factory('dataService', function(){
    return{
        question:{
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2013'
        }
    };
});
<script>
<body>
<html>

//використаємо метод $injector.invoke(), для цього змінемо метод buttonClick():
$scope.buttonClick = function () {
    var locals = { message: "Привет Ир"};
    $injector.invoke(getData, null, locals);
};





















