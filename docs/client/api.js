Template.api.isClient = {
  id: "meteor_isclient",
  name: "Meteor.isClient",
  locus: "Anywhere",
  descr: ["Булева переменная.  Принимает значение True если запущена в клиентском окружении."]
};

Template.api.isServer = {
  id: "meteor_isserver",
  name: "Meteor.isServer",
  locus: "Anywhere",
  descr: ["Булева переменная.  Принимает значение True если запущена в серверном окружении."]
};

Template.api.startup = {
  id: "meteor_startup",
  name: "Meteor.startup(func)",
  locus: "Anywhere",
  descr: ["Запускает код когда стартует сервер или клиент"],
  args: [
    {name: "func",
     type: "Function",
     descr: "Функция запускаемая на старте."}
  ]
};

Template.api.absoluteUrl = {
  id: "meteor_absoluteurl",
  name: "Meteor.absoluteUrl([path], [options])",
  locus: "Anywhere",
  descr: ["Сгенерирует абсолютный URL для приложения. Сервер "
          + "читает из `ROOT_URL` переменной окружения для определения "
          + "где он запущен. Переменная ROOT_URL присваивается автоматически "
          + "если приложение развернуто с `meteor deploy`, но дожна быть указана вручную "
          + "если используется `meteor bundle`."],
  args: [
    {name: "path",
     type: "String",
     descr: 'Путь присоединяемый к корневому URL. Не включает ведущего "`/`".'
    }
  ],
  options: [
    {name: "secure",
     type: "Boolean",
     descr: "Создает HTTPS URL."
    },
    {name: "replaceLocalhost",
     type: "Boolean",
     descr: "Заменяет localhost 127.0.0.1. Полезна для сервисов которые не могут распознать localhost как доменное имя."},
    {name: "rootUrl",
     type: "String",
     descr: "Перегружает дефолтный ROOT_URL серверного окружения. Для примера: \"`http://foo.example.com`\""
    }
  ]
};

Template.api.settings = {
  id: "meteor_settings",
  name: "Meteor.settings",
  locus: "Server",
  descr: ["`Meteor.settings` содержить любые специфичне опции " +
          "переданные `--settings` при запуске `meteor run` или `meteor deploy`. " +
          "Если вы передаете опцию `--settings`, `Meteor.settings` будет " +
          "JSON объектом в указаном файле.  В обратном случае, `Meteor.settings` " +
          "будет пустым объектом"]
};

Template.api.publish = {
  id: "meteor_publish",
  name: "Meteor.publish(name, func)",
  locus: "Server",
  descr: ["Публикует набор записей."],
  args: [
    {name: "name",
     type: "String",
     descr: "Имя набора.  Если `null`, у набора нет имени, ивсе записи из такого набора автоматически рассылаются всем подключенным клиентам."},
    {name: "func",
     type: "Function",
     descr: "Функция вызываемая на сервера всякий раз когда клиент подписывается.  Внутри функции, `this` является объектом обработчика описанным ниже.  Если клиент передает аргументы в `subscribe`, функция вызывается с теми же аргументами."}
  ]
};

Template.api.subscription_set = {
  id: "publish_set",
  name: "<i>this</i>.set(collection, id, attributes)",
  locus: "Server",
  descr: ["Вызывается внутрии функции публикации.  Вызывает команду для установки аттрибутов."],
  args: [
    {name: "collection",
     type: "String",
     descr: "Имя коллекции."
    },
    {name: "id",
     type: "String",
     descr: "ID документа."
    },
    {name: "attributes",
     type: "Object",
     descr: "Словарь перечисления аттрибутов и их значений."
    }
  ]
};

Template.api.subscription_unset = {
  id: "publish_unset",
  name: "<i>this</i>.unset(collection, id, keys)",
  locus: "Server",
  descr: ["Вызывается внутрии функции публикации.  Вызывает команду снятия аттрибутов."],
  args: [
    {name: "collection",
     type: "String",
     descr: "Имя коллекции."
    },
    {name: "id",
     type: "String",
     descr: "ID документа."
    },
    {name: "keys",
     type: "Array",
     descr: "Массив ключей аттрибутов."
    }
  ]
};

Template.api.subscription_complete = {
  id: "publish_complete",
  name: "<i>this</i>.complete()",
  locus: "Server",
  descr: ["Вызывается внутри функции подписки.  Вызывает команду для маркировки подписки как готовой (то есть начальные аттрибуты установлены)."]
};

Template.api.subscription_flush = {
  id: "publish_flush",
  name: "<i>this</i>.flush()",
  locus: "Server",
  descr: ["Вызывается внутри функции подписки.  Отсылает все ожидаемые наборы и снимает подписку клиента."]
};

Template.api.subscription_stop = {
  id: "publish_stop",
  name: "<i>this</i>.stop()",
  locus: "Server",
  descr: ["Вызывается внутри функции подписки. Останавливает подписку клиента."]
};

Template.api.subscription_onStop = {
  id: "publish_onstop",
  name: "<i>this</i>.onStop(func)",
  locus: "Server",
  descr: ["Вызывается внутри функции подписки.  Регистрирует функцию которая будет вызвана когда подписка будет прекращена."],
  args: [
    {name: "func",
     type: "Function",
     descr: "The callback function"
    }
  ]
};

Template.api.subscription_userId = {
  id: "publish_userId",
  name: "<i>this</i>.userId",
  locus: "Server",
  descr: ["Доступна внутри функции подписки. id залогиненого пользователя, или `null` если пользователь не логинился."]
};


Template.api.subscribe = {
  id: "meteor_subscribe",
  name: "Meteor.subscribe(name [, arg1, arg2, ... ] [, onComplete])",
  locus: "Client",
  descr: ["Подписаться на набор записей.  Возвращает хендлер который предоставляет метод stop(), который остонавливает подписку."],
  args: [
    {name: "name",
     type: "String",
     descr: "Имя подписки.  Совпадает с именем серверного вызова publish()."},
    {name: "arg1, arg2, ...",
     type: "Any",
     descr: "Опциональные аргументы передаются функции подписки на сервер."},
    {name: "onComplete",
     type: "Function",
     descr: "Если последний аргумент функция, то она вызывается без аргументов когда подписка помечается как готовая."}
  ]
};

Template.api.autosubscribe = {
  id: "meteor_autosubscribe",
  name: "Meteor.autosubscribe(func)",
  locus: "Client",
  descr: ["Автоматически устанавливает и снимает подписки."],
  args: [
    {name: "func",
     type: "Function",
     descr: "[`reactive`](#reactivity) реактивная функция которая устанвливает подписки вызовом [`Meteor.subscribe`](#meteor_subscribe). Она автоматически перезапуститься когда ее зависимости изменятся."}
    ]
};

Template.api.methods = {
  id: "meteor_methods",
  name: "Meteor.methods(methods)",
  locus: "Anywhere",
  descr: ["Определяет функции которые могут быть вызваны клиентом прямо по сети."],
  args: [
    {name: "methods",
     type: "Object",
     descr: "Словарь с ключами в виде имен функций и значениями в виде тел функции."}
  ]
};

Template.api.method_invocation_userId = {
  id: "method_userId",
  name: "<i>this</i>.userId",
  locus: "Anywhere",
  descr: ["ID пользователя совершившего данный вызов, или `null` если пользователь незалогинен."]
};

Template.api.method_invocation_setUserId = {
  id: "method_setUserId",
  name: "<i>this</i>.setUserId(userId)",
  locus: "Server",
  descr: ["Устанавливает id пользователя."],
  args: [
    {name: "userId",
     type: "String or null",
     descr: "Значение которое должно быть возвращено `userId` на этом соединение."}
  ]
};

Template.api.method_invocation_unblock = {
  id: "method_unblock",
  name: "<i>this</i>.unblock()",
  locus: "Server",
  descr: ["Вызывается внутри метода.  Разрешает вызов следующего метода для этого клиента."]
};

Template.api.method_invocation_isSimulation = {
  id: "method_issimulation",
  name: "<i>this</i>.isSimulation",
  locus: "Anywhere",
  descr: ["Доступ внутри метода.  Булево значение, true если вызов является заглушкой."]
};

Template.api.error = {
  id: "meteor_error",
  name: "new Meteor.Error(error, reason, details)",
  locus: "Anywhere",
  descr: ["Этот класс представляет символическую ошибку возбуждаемую методом."],
  args: [
    {name: "error",
     type: "Number",
     descr: "Цифровой код HTTP (404, 500 и тд)."},
    {name: "reason",
     type: "String",
     descr: "Необязательный.  Короткое описание ошибки, например 'Not Found'."},
    {name: "details",
     type: "String",
     descr: "Необязательный.  Дополнительная информация о ошибке, например как вывод трейса."}
  ]
};

Template.api.meteor_call = {
  id: "meteor_call",
  name: "Meteor.call(name, param1, param2, ... [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Вызывает метод передавая ряд аргументов."],
  args: [
    {name: "name",
     type: "String",
     descr: "Имя метода для вызова"},
    {name: "param1, param2, ...",
     type: "JSON",
     descr: "Необязательные аргументы метода"},
    {name: "asyncCallback",
     type: "Function",
     descr: "Необязательный коллбек, который вызывается асинхронно с ошибкой или результатом по окончанию работы метода. Если не указан то метод отрабатывает синхронно."}
  ]
};

Template.api.meteor_apply = {
  id: "meteor_apply",
  name: "Meteor.apply(name, params [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Вызывает метод на последовательность значений в массиве."],
  args: [
    {name: "name",
     type: "String",
     descr: "Name of method to invoke"},
    {name: "params",
     type: "Array",
     descr: "Method arguments"},
    {name: "asyncCallback",
     type: "Function",
     descr: "Необязательный коллбек; семантика как в [`Meteor.call`](#meteor_call)."}
  ],
  options: [
    {name: "wait",
     type: "Boolean",
     descr: "(Только на клиенте) Если Истина, не посылать этот метод пока другие методы не закончаться, и не посылать вызовы методов на субпоследовательности пока этот метод не отработает до конца."},
    {name: "onResultReceived",
     type: "Function",
     descr: "(Только на клиенте) Это колбек вызывается с ошибкой или результатом (так же как `asyncCallback`) так скоро как результат или ошибка будет доступна."}
  ]
};

Template.api.status = {
  id: "meteor_status",
  name: "Meteor.status()",
  locus: "Client",
  descr: ["Отдает статус соединения. Это реактивный источник данных."]
};

Template.api.reconnect = {
  id: "meteor_reconnect",
  name: "Meteor.reconnect()",
  locus: "Client",
  descr: [
    "Принудительно совершает попытку установки соединения.",
    "Этот метод ничего не делает если клиент уже подключен."]
};

Template.api.connect = {
  id: "meteor_connect",
  name: "Meteor.connect(url)",
  locus: "Client",
  descr: ["Подключиться с сервером с другим Метеор приложением"],
  args: [
    {name: "url",
     type: "String",
     descr: "URL другого приложения."}
  ]
};

// onAutopublish

Template.api.meteor_collection = {
  id: "meteor_collection",
  name: "new Meteor.Collection(name, [options])",
  locus: "Anywhere",
  descr: ["Constructor for a Collection"],
  args: [
    {name: "name",
     type: "String",
     descr: "The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection."}
  ],
  options: [
    {name: "manager",
     type: "Object",
     descr: "The Meteor connection that will manage this collection, defaults to `Meteor` if null.  Unmanaged (`name` is null) collections cannot specify a manager."
    }
  ]
};

Template.api.find = {
  id: "find",
  name: "<em>collection</em>.find(selector, [options])",
  locus: "Anywhere",
  descr: ["Find the documents in a collection that match the selector."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "The query"}
  ],
  options: [
    {name: "sort",
     type: "Object: sort specifier",
     type_link: "sortspecifiers",
     descr: "Sort order (default: natural order)"},
    {name: "skip",
     type: "Number",
     descr: "Number of results to skip at the beginning"},
    {name: "limit",
     type: "Number",
     descr: "Maximum number of results to return"},
    {name: "fields",
     type: "Object: field specifier",
     type_link: "fieldspecifiers",
     descr: "(Server only) Dictionary of fields to return or exclude."},
    {name: "reactive",
     type: "Boolean",
     descr: "(Client only) Default `true`; pass `false` to disable reactivity"}
  ]
};

Template.api.findone = {
  id: "findone",
  name: "<em>collection</em>.findOne(selector, [options])",
  locus: "Anywhere",
  descr: ["Finds the first document that matches the selector, as ordered by sort and skip options."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "The query"}
  ],
  options: [
    {name: "sort",
     type: "Object: sort specifier",
     type_link: "sortspecifiers",
     descr: "Sort order (default: natural order)"},
    {name: "skip",
     type: "Number",
     descr: "Number of results to skip at the beginning"},
    {name: "fields",
     type: "Object: field specifier",
     type_link: "fieldspecifiers",
     descr: "(Server only) Dictionary of fields to return or exclude."},
    {name: "reactive",
     type: "Boolean",
     descr: "(Client only) Default true; pass false to disable reactivity"}
  ]
};

Template.api.insert = {
  id: "insert",
  name: "<em>collection</em>.insert(doc, [callback])",
  locus: "Anywhere",
  descr: ["Insert a document in the collection.  Returns its unique _id."],
  args: [
    {name: "doc",
     type: "Object",
     descr: "The document to insert. Should not yet have an _id attribute."},
    {name: "callback",
     type: "Function",
     descr: "Optional.  If present, called with an error object as the first argument and, if no error, the _id as the second."}
  ]
};

Template.api.update = {
  id: "update",
  name: "<em>collection</em>.update(selector, modifier, [options], [callback])",
  locus: "Anywhere",
  descr: ["Modify one or more documents in the collection"],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "Specifies which documents to modify"},
    {name: "modifier",
     type: "Object: Mongo modifier",
     type_link: "modifiers",
     descr: "Specifies how to modify the documents"},
    {name: "callback",
     type: "Function",
     descr: "Optional.  If present, called with an error object as its argument."}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "True to modify all matching documents; false to only modify one of the matching documents (the default)."}
  ]
};

Template.api.remove = {
  id: "remove",
  name: "<em>collection</em>.remove(selector, [callback])",
  locus: "Anywhere",
  descr: ["Remove documents from the collection"],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "Specifies which documents to remove"},
    {name: "callback",
     type: "Function",
     descr: "Optional.  If present, called with an error object as its argument."}
  ]
};

Template.api.allow = {
  id: "allow",
  name: "<em>collection</em>.allow(options)",
  locus: "Server",
  descr: ["Allow users to write directly to this collection from client code, subject to limitations you define."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Functions that look at a proposed modification to the database and return true if it should be allowed."},
    {name: "fetch",
     type: "Array of String",
     descr: "Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions."}
  ]
};

Template.api.deny = {
  id: "deny",
  name: "<em>collection</em>.deny(options)",
  locus: "Server",
  descr: ["Override `allow` rules."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Functions that look at a proposed modification to the database and return true if it should be denied, even if an `allow` rule says otherwise."},
    {name: "fetch",
     type: "Array of Strings",
     descr: "Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions."}
  ]
};


Template.api.cursor_count = {
  id: "count",
  name: "<em>cursor</em>.count()",
  locus: "Anywhere",
  descr: ["Returns the number of documents that match a query."]
};

Template.api.cursor_fetch = {
  id: "fetch",
  name: "<em>cursor</em>.fetch()",
  locus: "Anywhere",
  descr: ["Return all matching documents as an Array."]
};

Template.api.cursor_foreach = {
  id: "foreach",
  name: "<em>cursor</em>.forEach(callback)",
  locus: "Anywhere",
  descr: ["Call `callback` once for each matching document, sequentially and synchronously."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to call."}
  ]
};

Template.api.cursor_map = {
  id: "map",
  name: "<em>cursor</em>.map(callback)",
  locus: "Anywhere",
  descr: ["Map callback over all matching documents.  Returns an Array."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to call."}
  ]
};

Template.api.cursor_rewind = {
  id: "rewind",
  name: "<em>cursor</em>.rewind()",
  locus: "Anywhere",
  descr: ["Resets the query cursor."],
  args: [ ]
};

Template.api.cursor_observe = {
  id: "observe",
  name: "<em>cursor</em>.observe(callbacks)",
  locus: "Anywhere",
  descr: ["Watch a query.  Receive callbacks as the result set changes."],
  args: [
    {name: "callbacks",
     type: "Object (may include <code>added</code>, <code>changed</code>, <code>moved</code>, and <code>removed</code> callbacks)",
     descr: "Functions to call to deliver the result set as it changes"}
  ]
};

Template.api.uuid = {
  id: "meteor_uuid",
  name: "Meteor.uuid()",
  locus: "Anywhere",
  descr: ["Returns a Universally Unique Identifier."],
  args: [ ]
};

Template.api.selectors = {
  id: "selectors",
  name: "Mongo-style Selectors"
};

Template.api.modifiers = {
  id: "modifiers",
  name: "Mongo-style Modifiers"
};

Template.api.sortspecifiers = {
  id: "sortspecifiers",
  name: "Sort Specifiers"
};

Template.api.fieldspecifiers = {
  id: "fieldspecifiers",
  name: "Field Specifiers"
};

Template.api.Context = {
  id: "context",
  name: "new Meteor.deps.Context",
  locus: "Client",
  descr: ["Create an invalidation context. Invalidation contexts are used to run a piece of code, and record its dependencies so it can be rerun later if one of its inputs changes.", "An invalidation context is basically just a list of callbacks for an event that can fire only once. The [`onInvalidate`](#oninvalidate) method adds a callback to the list, and the [`invalidate`](#invalidate) method fires the event."]
};

Template.api.run = {
  id: "run",
  name: "<em>context</em>.run(func)",
  locus: "Client",
  descr: ["Run some code inside an evaluation context."],
  args: [
    {name: "func",
     type: "Function",
     descr: "The code to run"}
  ]
};

Template.api.onInvalidate = {
  id: "oninvalidate",
  name: "<em>context</em>.onInvalidate(callback)",
  locus: "Client",
  descr: ["Registers `callback` to be called when this context is invalidated. `callback` will be run exactly once."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to be called on invalidation. Receives one argument, the context that was invalidated."}
  ]
};

Template.api.invalidate = {
  id: "invalidate",
  name: "<em>context</em>.invalidate()",
  locus: "Client",
  descr: ["Add this context to the list of contexts that will have their [`onInvalidate`](#oninvalidate) callbacks called by the next call to [`Meteor.flush`](#meteor_flush)."]
};

Template.api.current = {
  id: "current",
  name: "Meteor.deps.Context.current",
  locus: "Client",
  descr: ["The current [`invalidation context`](#context), or `null` if not being called from inside [`run`](#run)."]
};

Template.api.autorun = {
  id: "meteor_autorun",
  name: "Meteor.autorun(func)",
  locus: "Client",
  descr: ["Run a function and rerun it whenever its dependencies change. Returns a handle that provides a `stop` method, which will prevent further reruns."],
  args: [
    {name: "func",
     type: "Function",
     descr: "The function to run. It receives one argument: the same handle that `Meteor.autorun` returns."}
  ]
};

Template.api.flush = {
  id: "meteor_flush",
  name: "Meteor.flush()",
  locus: "Client",
  descr: ["Ensure that any reactive updates have finished. Allow auto-updating DOM elements to be cleaned up if they are offscreen."]
};


// writeFence
// invalidationCrossbar

Template.api.render = {
  id: "meteor_render",
  name: "Meteor.render(htmlFunc)",
  locus: "Client",
  descr: ["Create DOM nodes that automatically update themselves as data changes."],
  args: [
    {name: "htmlFunc",
     type: "Function returning a string of HTML",
     descr: "Function that generates HTML to be rendered.  Called immediately and re-run whenever data changes.  May also be a string of HTML instead of a function."}
  ]
};

Template.api.renderList = {
  id: "meteor_renderlist",
  name: "Meteor.renderList(observable, docFunc, [elseFunc])",
  locus: "Client",
  descr: ["Create DOM nodes that automatically update themselves based on the results of a database query."],
  args: [
    {name: "observable",
     type: "Cursor",
     type_link: "meteor_collection_cursor",
     descr: "Query cursor to observe as a reactive source of ordered documents."},
    {name: "docFunc",
     type: "Function taking a document and returning HTML",
     descr: "Render function to be called for each document."},
    {name: "elseFunc",
     type: "Function returning HTML",
     descr: "Optional.  Render function to be called when query is empty."}
  ]
};


Template.api.eventmaps = {
  id: "eventmaps",
  name: "Event Maps"
};

Template.api.constant = {
  id: "constant",
  name: "Constant regions"
};

Template.api.isolate = {
  id: "isolate",
  name: "Reactivity isolation"
};



Template.api.user = {
  id: "meteor_user",
  name: "Meteor.user()",
  locus: "Anywhere but publish functions",
  descr: ["Get the current user record, or `null` if no user is logged in. A reactive data source."]
};

Template.api.currentUser = {
  id: "template_currentuser",
  name: "{{currentUser}}",
  locus: "Handlebars templates",
  descr: ["Calls [Meteor.user()](#meteor_user). Use `{{#if currentUser}}` to check whether the user is logged in."]
};

Template.api.userId = {
  id: "meteor_userid",
  name: "Meteor.userId()",
  locus: "Anywhere but publish functions",
  descr: ["Get the current user id, or `null` if no user is logged in. A reactive data source."]
};


Template.api.users = {
  id: "meteor_users",
  name: "Meteor.users",
  locus: "Anywhere",
  descr: ["A [Meteor.Collection](#collections) containing user documents."]
};

Template.api.loggingIn = {
  id: "meteor_loggingin",
  name: "Meteor.loggingIn()",
  locus: "Client",
  descr: ["True if a login method (such as `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source."]
};

Template.api.loggingInTemplate = {
  id: "template_loggingin",
  name: "{{loggingIn}}",
  locus: "Handlebars templates",
  descr: ["Calls [Meteor.loggingIn()](#meteor_loggingin)."]
};



Template.api.logout = {
  id: "meteor_logout",
  name: "Meteor.logout([callback])",
  locus: "Client",
  descr: ["Log the user out."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.loginWithPassword = {
  id: "meteor_loginwithpassword",
  name: "Meteor.loginWithPassword(user, password, [callback])",
  locus: "Client",
  descr: ["Log the user in with a password."],
  args: [
    {
      name: "user",
      type: "Object or String",
      descr: "Either a string interpreted as a username or an email; or an object with a single key: `email`, `username` or `id`."
    },
    {
      name: "password",
      type: "String",
      descr: "The user's password. This is __not__ sent in plain text over the wire &mdash; it is secured with [SRP](http://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.loginWithExternalService = {
  id: "meteor_loginwithexternalservice",
  name: "Meteor.loginWith<i>ExternalService</i>([options], [callback])",
  locus: "Client",
  descr: ["Log the user in using an external service."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "requestPermissions",
      type: "Array of Strings",
      descr: "A list of permissions to request from the user."
    },
    {
      name: "requestOfflineToken",
      type: "Boolean",
      descr: "If true, asks the user for permission to act on their behalf when offline. This stores an additional offline token in the `services` field of the user document. Currently only supported with Google."
    }
  ]
};



Template.api.accounts_config = {
  id: "accounts_config",
  name: "Accounts.config(options)",
  locus: "Anywhere",
  descr: ["Set global accounts options."],
  options: [
    {
      name: "sendVerificationEmail",
      type: "Boolean",
      descr: "New users with an email address will receive an address verification email."
    },
    {
      name: "forbidClientAccountCreation",
      type: "Boolean",
      descr: "Calls to [`createUser`](#accounts_createuser) from the client will be rejected. In addition, if you are using [accounts-ui](#accountsui), the \"Create account\" link will not be available."
    }
  ]
};

Template.api.accounts_ui_config = {
  id: "accounts_ui_config",
  name: "Accounts.ui.config(options)",
  locus: "Client",
  descr: ["Configure the behavior of [`{{loginButtons}}`](#accountsui)."],
  options: [
    {
      name: "requestPermissions",
      type: "Object",
      descr: "Which [permissions](#requestpermissions) to request from the user for each external service."
    },
    {
      name: "requestOfflineToken",
      type: "Object",
      descr: "To ask the user for permission to act on their behalf when offline, map the relevant external service to `true`. Currently only supported with Google. See [Meteor.loginWithExternalService](#meteor_loginwithexternalservice) for more details."
    },
    {
      name: "passwordSignupFields",
      type: "String",
      descr: "Which fields to display in the user creation form. One of '`USERNAME_AND_EMAIL`', '`USERNAME_AND_OPTIONAL_EMAIL`', '`USERNAME_ONLY`', or '`EMAIL_ONLY`' (default)."
    }
  ]
};

Template.api.accounts_validateNewUser = {
  id: "accounts_validatenewuser",
  name: "Accounts.validateNewUser(func)",
  locus: "Server",
  descr: ["Set restrictions on new user creation."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Called whenever a new user is created. Takes the new user object, and returns true to allow the creation or false to abort."
    }
  ]
};

Template.api.accounts_onCreateUser = {
  id: "accounts_oncreateuser",
  name: "Accounts.onCreateUser(func)",
  locus: "Server",
  descr: ["Customize new user creation."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Called whenever a new user is created. Return the new user object, or throw an `Error` to abort the creation."
    }
  ]
};



Template.api.accounts_createUser = {
  id: "accounts_createuser",
  name: "Accounts.createUser(options, [callback])",
  locus: "Anywhere",
  descr: ["Create a new user."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Client only, optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "username",
      type: "String",
      descr: "A unique name for this user."
    },
    {
      name: "email",
      type: "String",
      descr: "The user's email address."
    },
    {
      name: "password",
      type: "String",
      descr: "The user's password. This is __not__ sent in plain text over the wire."
    },
    {
      name: "profile",
      type: "Object",
      descr: "The user's profile, typically including the `name` field."
    }
  ]
};

Template.api.accounts_changePassword = {
  id: "accounts_changepassword",
  name: "Accounts.changePassword(oldPassword, newPassword, [callback])",
  locus: "Client",
  descr: ["Change the current user's password. Must be logged in."],
  args: [
    {
      name: "oldPassword",
      type: "String",
      descr: "The user's current password. This is __not__ sent in plain text over the wire."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user. This is __not__ sent in plain text over the wire."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};

Template.api.accounts_forgotPassword = {
  id: "accounts_forgotpassword",
  name: "Accounts.forgotPassword(options, [callback])",
  locus: "Client",
  descr: ["Request a forgot password email."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "email",
      type: "String",
      descr: "The email address to send a password reset link."
    }
  ]
};

Template.api.accounts_resetPassword = {
  id: "accounts_resetpassword",
  name: "Accounts.resetPassword(token, newPassword, [callback])",
  locus: "Client",
  descr: ["Reset the password for a user using a token received in email. Logs the user in afterwards."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "The token retrieved from the reset password URL."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user. This is __not__ sent in plain text over the wire."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
};

Template.api.accounts_setPassword = {
  id: "accounts_setpassword",
  name: "Accounts.setPassword(userId, newPassword)",
  locus: "Server",
  descr: ["Forcibly change the password for a user."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to update."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user."
    }
  ]
};

Template.api.accounts_verifyEmail = {
  id: "accounts_verifyemail",
  name: "Accounts.verifyEmail(token, [callback])",
  locus: "Client",
  descr: ["Marks the user's email address as verified. Logs the user in afterwards."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "The token retrieved from the verification URL."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.accounts_sendResetPasswordEmail = {
  id: "accounts_sendresetpasswordemail",
  name: "Accounts.sendResetPasswordEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use to reset their password."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list."
    }
  ]
};

Template.api.accounts_sendEnrollmentEmail = {
  id: "accounts_sendenrollmentemail",
  name: "Accounts.sendEnrollmentEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use to set their initial password."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list."
    }
  ]
};

Template.api.accounts_sendVerificationEmail = {
  id: "accounts_sendverificationemail",
  name: "Accounts.sendVerificationEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use verify their email address."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first unverified email in the list."
    }
  ]
};



Template.api.accounts_emailTemplates = {
  id: "accounts_emailtemplates",
  name: "Accounts.emailTemplates",
  locus: "Anywhere",
  descr: ["Options to customize emails sent from the Accounts system."]
};



Template.api.setTimeout = {
  id: "meteor_settimeout",
  name: "Meteor.setTimeout(func, delay)",
  locus: "Anywhere",
  descr: ["Call a function in the future after waiting for a specified delay."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "The function to run"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Number of milliseconds to wait before calling function"
    }
  ]
};

Template.api.setInterval = {
  id: "meteor_setinterval",
  name: "Meteor.setInterval(func, delay)",
  locus: "Anywhere",
  descr: ["Call a function repeatedly, with a time delay between calls."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "The function to run"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Number of milliseconds to wait between each function call."
    }
  ]
};

Template.api.clearTimeout = {
  id: "meteor_cleartimeout",
  name: "Meteor.clearTimeout(id)",
  locus: "Anywhere",
  descr: ["Cancel a function call scheduled by `Meteor.setTimeout`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "The handle returned by `Meteor.setTimeout`"
    }
  ]
};

Template.api.clearInterval = {
  id: "meteor_clearinterval",
  name: "Meteor.clearInterval(id)",
  locus: "Anywhere",
  descr: ["Cancel a repeating function call scheduled by `Meteor.setInterval`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "The handle returned by `Meteor.setInterval`"
    }
  ]
};

Template.api.EnvironmentVariable = {
  id: "meteor_environmentvariable",
  name: "new Meteor.EnvironmentVariable()",
  locus: "Anywhere",
  descr: ["Construct a Meteor environment variable."]
};

Template.api.environmentVariable_get = {
  id: "env_var_get",
  name: "<i>env_var</i>.get()",
  locus: "Anywhere",
  descr: ["Return the current value of an EnvironmentVariable."]
};

Template.api.environmentVariable_withValue = {
  id: "env_var_withvalue",
  name: "<i>env_var</i>.withValue(value, func)",
  locus: "Anywhere",
  descr: ["Run `func` with the `env_var`'s value set to `value`."],
  args: [
    {name: "value",
     type: "Anything",
     descr: "Desired value of the environment variable."},
    {name: "func",
     type: "Function",
     descr: "Function to call"}
  ]
};

Template.api.bindEnvironment = {
  id: "env_var_bindenvironment",
  name: "<i>env_var</i>.bindEnvironment(func, onException, _this)",
  locus: "Anywhere",
  descr: ["Return a new function that calls `func` with `this` set to `_this`, and with environment variables set to their current values."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Function to wrap"},
    {name: "onException",
     type: "Function",
     descr: "Function to call if `func` throws an exception.  It expects the thrown exception as its single argument."},
    {name: "_this",
     type: "Object",
     descr: "Value of `this` inside `func`."}
  ]
};

Template.api.set = {
  id: "session_set",
  name: "Session.set(key, value)",
  locus: "Client",
  descr: ["Set a variable in the session. Notify any listeners that the value has changed (eg: redraw templates, and rerun any [`Meteor.autosubscribe`](#meteor_autosubscribe) blocks, that called [`Session.get`](#session_get) on this `key`.)"],
  args: [
    {name: "key",
     type: "String",
     descr: "The key to set, eg, `selectedItem`"},
    {name: "value",
     type: "JSON-able object or undefined",
     descr: "The new value for `key`"}
  ]
};

Template.api.get = {
  id: "session_get",
  name: "Session.get(key)",
  locus: "Client",
  descr: ["Get the value of a session variable. If inside a [`Meteor.deps`](#meteor_deps) context, invalidate the context the next time the value of the variable is changed by [`Session.set`](#session_set). This returns a clone of the session value, so if it's an object or an array, mutating the returned value has no effect on the value stored in the session."],
  args: [
    {name: "key",
     type: "String",
     descr: "The name of the session variable to return"}
  ]
};

Template.api.equals = {
  id: "session_equals",
  name: "Session.equals(key, value)",
  locus: "Client",
  descr: ["Test if a session variable is equal to a value. If inside a [`Meteor.deps`](#meteor_deps) context, invalidate the context the next time the variable changes to or from the value."],
  args: [
    {name: "key",
     type: "String",
     descr: "The name of the session variable to test"},
    {name: "value",
     type: "String, Number, Boolean, null, or undefined",
     descr: "The value to test against"}
  ]
};

Template.api.httpcall = {
  id: "meteor_http_call",
  name: "Meteor.http.call(method, url [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Perform an outbound HTTP request."],
  args: [
    {name: "method",
     type: "String",
     descr: 'The HTTP method to use: "`GET`", "`POST`", "`PUT`", or "`DELETE`".'},
    {name: "url",
     type: "String",
     descr: 'The URL to retrieve.'},
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback.  If passed, the method runs asynchronously, instead of synchronously, and calls asyncCallback.  On the client, this callback is required."
    }
  ],
  options: [
    {name: "content",
     type: "String",
     descr: "String to use as the HTTP request body."
},
    {name: "data",
     type: "Object",
     descr: "JSON-able object to stringify and use as the HTTP request body. Overwrites `content`."},
    {name: "query",
     type: "String",
     descr: "Query string to go in the URL. Overwrites any query string in `url`."},
    {name: "params",
     type: "Object",
     descr: "Dictionary of request parameters to be encoded and placed in the URL (for GETs) or request body (for POSTs).  If `content` or `data` is specified, `params` will always be placed in the URL."
    },
    {name: "auth",
     type: "String",
     descr: 'HTTP basic authentication string of the form `"username:password"`'},
    {name: "headers",
     type: "Object",
     descr: "Dictionary of strings, headers to add to the HTTP request."},
    {name: "timeout",
     type: "Number",
     descr: "Maximum time in milliseconds to wait for the request before failing.  There is no timeout by default."},
    {name: "followRedirects",
     type: "Boolean",
     descr: "If true, transparently follow HTTP redirects.  Cannot be set to false on the client."}
  ]
};

Template.api.http_get = {
  id: "meteor_http_get",
  name: "Meteor.http.get(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP GET request.  Equivalent to `Meteor.http.call(\"GET\", ...)`."]
};

Template.api.http_post = {
  id: "meteor_http_post",
  name: "Meteor.http.post(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP POST request.  Equivalent to `Meteor.http.call(\"POST\", ...)`."]
};

Template.api.http_put = {
  id: "meteor_http_put",
  name: "Meteor.http.put(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP PUT request.  Equivalent to `Meteor.http.call(\"PUT\", ...)`."]
};

Template.api.http_del = {
  id: "meteor_http_del",
  name: "Meteor.http.del(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP DELETE request.  Equivalent to `Meteor.http.call(\"DELETE\", ...)`.  (Named `del` to avoid conflict with JavaScript's `delete`.)"]
};


// XXX move these up to right place
Template.api.template_call = {
  id: "template_call",
  name: "Template.<em>myTemplate</em>([data])",
  locus: "Client",
  descr: ["Call a template function by name to produce HTML."],
  args: [
    {name: "data",
     type: "Object",
     descr: 'Optional. The data context object with which to call the template.'}
  ]
};

Template.api.template_rendered = {
  id: "template_rendered",
  name: "Template.<em>myTemplate</em>.rendered = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is rendered."]
};

Template.api.template_created = {
  id: "template_created",
  name: "Template.<em>myTemplate</em>.created = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is created."]
};

Template.api.template_destroyed = {
  id: "template_destroyed",
  name: "Template.<em>myTemplate</em>.destroyed = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is destroyed."]
};

Template.api.template_events = {
  id: "template_events",
  name: "Template.<em>myTemplate</em>.events(eventMap)",
  locus: "Client",
  descr: ["Specify event handlers for this template."],
  args: [
    {name: "eventMap",
     type: "Object: event map",
     type_link: "eventmaps",
     descr: "Event handlers to associate with this template."}
  ]
};

Template.api.template_helpers = {
  id: "template_helpers",
  name: "Template.<em>myTemplate</em>.helpers(helpers)",
  locus: "Client",
  descr: ["Specify template helpers available to this template."],
  args: [
    {name: "helpers",
     type: "Object",
     descr: "Dictionary of helper functions by name."}
  ]
};

Template.api.template_preserve = {
  id: "template_preserve",
  name: "Template.<em>myTemplate</em>.preserve(selectors)",
  locus: "Client",
  descr: ["Specify rules for preserving individual DOM elements on re-render."],
  args: [
    {name: "selectors",
     type: "Array or Object",
     descr: "Array of CSS selectors that each match at most one element, such as `['.thing1', '.thing2']`, or, alternatively, a dictionary of selectors and node-labeling functions (see below)."}
  ]
};

Template.api.template_findAll = {
  id: "template_findAll",
  name: "<em>this</em>.findAll(selector)",
  locus: "Client",
  descr: ["Find all elements matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_find = {
  id: "template_find",
  name: "<em>this</em>.find(selector)",
  locus: "Client",
  descr: ["Find one element matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_firstNode = {
  id: "template_firstNode",
  name: "<em>this</em>.firstNode",
  locus: "Client",
  descr: ["The first top-level DOM node in this template instance."]
};

Template.api.template_lastNode = {
  id: "template_lastNode",
  name: "<em>this</em>.lastNode",
  locus: "Client",
  descr: ["The last top-level DOM node in this template instance."]
};

Template.api.template_data = {
  id: "template_data",
  name: "<em>this</em>.data",
  locus: "Client",
  descr: ["The data context of this instance's latest invocation."]
};

var rfc = function (descr) {
  return '[RFC5322](http://tools.ietf.org/html/rfc5322) ' + descr;
};

Template.api.email_send = {
  id: "email_send",
  name: "Email.send(options)",
  locus: "Server",
  descr: ["Send an email. Throws an `Error` on failure to contact mail " +
          "server or if mail server returns an error."],
  options: [
    {name: "from",
     type: "String",
     descr: rfc('"From:" address (required)')
    },
    {name: "to",
     type: "String or Array of strings",
     descr: rfc('"To:" address[es]')
    },
    {name: "cc",
     type: "String or Array of strings",
     descr: rfc('"Cc:" address[es]')
    },
    {name: "bcc",
     type: "String or Array of strings",
     descr: rfc('"Bcc:" address[es]')
    },
    {name: "replyTo",
     type: "String or Array of strings",
     descr: rfc('"Reply-To:" address[es]')
    },
    {name: "subject",
     type: "String",
     descr: rfc('"Subject:" line')
    },
    {name: "text",
     type: "String",
     descr: rfc('mail body (plain text)')
    },
    {name: "html",
     type: "String",
     descr: rfc('mail body (HTML)')
    }
  ]
};

