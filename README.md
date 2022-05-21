# «VSPORT»

## Структура проекта
- build - сборка
- src - исходные и вспомогательные файлы

 >   Вспомагательные файлы - нужны для сборки и для stream watching-а(не трогать не на что не влияют)
- src/css - вспомогательая папка генерируется каждый раз при(сборке или старте проекта)
- src/fonts - вспомогательая папка генерируется каждый раз при(сборке или старте проекта)
- src/js - вспомогательая папка генерируется каждый раз при(сборке или старте проекта)
- src/*.html - вспомогательные файлы генерируются каждый раз при(сборке или старте проекта)


### Исходники для редактирование
- src/pug - html, pug страницы проекта в компанентом стиле 
- src/sass - css, sass стили проекта в компанентом стиле 
- src/js-modules - скрипты проекта
- src/fonts-modules - шрифты проекта
- src/img - изображение проекта


## Правила именования классов у html тегов
###    Использутся БЭМ

## Используемый препроцессор
###    Использутся SASS


## Структуры файлов PUG src/pug,
- src/pug/*.pug - точки входа
- src/pug/modules/* - модули pug
- src/pug/modules/widgets - модули(виджеты) pug(для динамической разработки)

## Структуры файлов препроцессора SASS src/sass,
- src/sass/style.scss - точка входа
- src/sass/modules/* - модули sass

## Cистема сборки
### GULP


## Описание задач системы сборки

### Боевые команды
`gulp watch` - запускает watching прокта
 `gulp build` - начинает сборку проекта

### Можно использовать через npm run *
 `npm run start` - запускает watching прокта
`npm run build` - начинает сборку проекта

### Описание задач в файле gulp.js

- browser-sync - стримит и запускает dev-сервер
- sass - копирует css из src/css в build, минифицирует и добавляет автопрефикси
- style - sass обработка/создает вспомогательную папку src/css
- pugs - pug обработка/создает вспомогательные файлы src/*.html
- js - js обработка/создает вспомогательные файлы js/*.js
- fonts - обработка/создает вспомогательные файлы fonts/*.*
- watch - начинает watching
- clean - удаляет build
- images - минифицирует изображение
- webp - генерирует webp изображение из build/img в build/img/webp
- html - копирует html из src/*.html в build
- copy - копирует js из src/js/* в build
- copy fonts - копирует шрифты из src/fonts/* в build
- build - начинает сборку проекта