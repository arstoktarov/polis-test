<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## О проекте

Имплементация Авторизации используя технологии Laravel, ReactJS, Redux, Redux Toolkit, Webpack, Babel, TailwindCSS.

## Реализация ReactJS лежит в папке resources/js/react.

Дизайн взят из Figma Community: https://www.figma.com/file/ujofqDhMoW81HxexKFEbAp/Authentication-page-(Community)?type=design&node-id=0-1&t=cYx1iksKseXFdmZl-0

Использовал сторонние библиотеки: Laravel/TymonJWT - https://github.com/tymondesigns/jwt-auth, React Spinners - https://www.npmjs.com/package/react-spinners.

Общее время проекта заняло примерно 8 часов рабочего времени.

Основные замечания:
### Laravel:
 - Добавлен trait HashesPassword в папку App/Traits, который используется в модели App/User. В нем находится всего одна функция-мутатор, который хеширует атрибут password в User модельке.
 - Установлена библиотека Laravel/TymonJWT - https://github.com/tymondesigns/jwt-auth для реализации авторизации через JWT.
 - Добавлены Request классы BaseRequest, RegisterRequest. RegisterRequest используется для того чтобы задать rules и не описывать валидацию контроллере. BaseRequest использовал для того чтобы переопределить метод failedValidation, который вызывается в случае провала валидации, чтобы он всегда возвращал JSON, вместо дефолтной 404 страницы Laravel.
 - Я уже реализовал авторизацию на Laravel с дополнительными требованиями в другом тестовом проекте, если вам будет интересно, можете ознакомится - https://github.com/arstoktarov/laravel-test-project.
### React:
 - Использован сборщик Webpack с Babel.
 - Верстку хотел ускорить и использовал TailwindCSS.
 - Для стейтов использовал Redux, мой опыт оказался чуть устаревшим, я писал actions, reducers, все отдельно. Поэтому в проекте изучил и использовал современный подход использования Redux Toolkit.
 - Предполагал что использую Cookies для хранения access_token-a, но решил хранить его в localStorage.
 - Использовал библиотеку react-hook-form для реализации формы.

### Инструкция по развертыванию:

Чтобы front-end отправлял запросы в нужный url, нужно настроить константу backendURL в файле /src/actions/authActions.js

Проект запускал на Xampp Apache но подстроил backendURL под php artisan serve, поэтому при такой развертке он должен работать.

```
> git clone https://github.com/arstoktarov/laravel-test-project.git
```

## Laravel: 
```
> cd /path_to_project

> composer install

> copy .env.example .env

> Настроить APP_URL, DB_CONNECTION, DB_DATABASE, DB_PASSWORD в файле .env

> php artisan key:generate

> php artisan jwt:secret

> php artisan migrate

// Для запуска веб-сервера:
> php artisan serve

```

### React
```
> npm install

// Для запуска webpack-dev-сервера
> npm run dev
// or
> npm start

// Для получения билда проекта
> npm run build
