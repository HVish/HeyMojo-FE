webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = 'https://heymojo.herokuapp.com';
    }
    ApiService.prototype.auth = function (username, password) {
        var body = { username: username, password: password };
        return this.http.post(this.baseUrl + "/auth", body);
    };
    ApiService.prototype.uploadUrl = function (file) {
        return this.http.get(this.baseUrl + "/s3/upload-url", {
            params: {
                name: file.name,
                size: file.size,
                type: file.type
            }
        });
    };
    ApiService.prototype.uploadFile = function (url, file) {
        return this.http.put(url, file, {
            headers: {
                'Content-Type': file.type
            }
        });
    };
    ApiService.prototype.getImageUrl = function (fileName) {
        return this.http.get(this.baseUrl + "/s3/image-url", {
            params: { name: fileName }
        });
    };
    ApiService.prototype.signup = function (data) {
        return this.http.post(this.baseUrl + "/users", data);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-loader></app-loader>  \n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export getLocalStorage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__loader_loader_component__ = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var LocalStorage = { provide: 'LOCALSTORAGE', useFactory: getLocalStorage };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__loader_loader_component__["a" /* LoaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["a" /* FacebookModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_12__session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_13__data_service__["a" /* DataService */],
                LocalStorage,
                __WEBPACK_IMPORTED_MODULE_14__fb_service__["a" /* FbService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

function getLocalStorage() {
    return (typeof window !== "undefined") ? window.localStorage : null;
}


/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.data = this.dataSource.asObservable();
    }
    DataService.prototype.sendData = function (data) {
        this.dataSource.next(data);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/fb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FbService = (function () {
    function FbService(fb) {
        this.fb = fb;
        this.permissions = [
            'user_about_me',
            'user_birthday',
            'user_education_history',
            'user_friends',
            'user_likes',
            'user_photos',
            'user_relationships',
            'user_work_history',
        ];
        this.fields = [
            'id',
            'name',
            'gender',
            'about',
            'birthday',
            'friends',
            'relationship_status',
            'education',
            'work',
            'albums{cover_photo,name,count,description}',
            'likes',
            'picture.type(large)'
        ];
        var initParams = {
            appId: '152913075339705',
            xfbml: true,
            version: 'v2.11'
        };
        fb.init(initParams);
    }
    FbService.prototype.login = function (options) {
        return this.fb.login(options);
    };
    FbService.prototype.logout = function () {
        return this.fb.logout();
    };
    FbService.prototype.api = function (url, method, params) {
        if (params === void 0) { params = null; }
        return this.fb.api(url, method, params);
    };
    FbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]])
    ], FbService);
    return FbService;
}());



/***/ }),

/***/ "../../../../../src/app/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-container {\n    display: none;\n    z-index: 1011;\n    position: fixed;\n    padding: 15px 20px;\n    margin: 0px;\n    text-align: center;\n    color: rgb(0, 0, 0);\n    border: 1px solid #ccc;\n    cursor: wait;\n    left: calc(50% - 63px);\n    top: calc(50% - 26px);\n    background: #eee;\n}\n\n.loader-container.active {\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-container\" [class.active]=\"loading\">\n  <div class=\"loading-message loading-message-boxed\">\n    <img src=\"./assets/images/spinner.gif\" align=\"\">\n    <span>&nbsp;&nbsp;Loading...</span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(dataService) {
        this.dataService = dataService;
        this.loading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe for future session update
        this.dataService.data.subscribe(function (data) {
            if (data.hasOwnProperty('loading')) {
                _this.loading = data['loading'];
            }
        });
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-footer {\n\tpadding: 1px 15px;\n\tcolor: #A0A0A0;\n}\n\n.profile-img {\n\twidth: 96px;\n\theight: 96px;\n\tmargin: 0 auto 10px;\n\tdisplay: block;\n\tborder-radius: 50%;\n}\n\ninput#loginSubmit {\n\tpadding: 24px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:40px\">\n  <div class=\"row\">\n    <div class=\"mx-auto\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <form role=\"form\">\n            <fieldset>\n              <div class=\"row\">\n                <div class=\"mx-auto\">\n                  <img class=\"profile-img\" src=\"./assets/images/default-profile-image.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\" [class.has-danger]=\"hasError\">\n                    <input [class.is-invalid]=\"hasError\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Username\" name=\"username\" type=\"text\" autofocus>\n                  </div>\n                  <div class=\"form-group\" [class.has-danger]=\"hasError\">\n                    <input [class.is-invalid]=\"hasError\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" value=\"\">\n                    <div *ngIf=\"hasError==true\" class=\"invalid-feedback\">{{errMsg}}. Try again!</div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input (click)=\"login()\" type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" id=\"loginSubmit\" value=\"Sign in\">\n                  </div>\n                </div>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n        <div class=\"panel-footer \">\n          Don't have an account!\n          <a routerLink=\"/signup\"> Sign Up Here </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(apiService, dataService, sessionService, router) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.sessionService = sessionService;
        this.router = router;
        this.hasError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticated = this.sessionService.getItem('authenticated', false);
        if (this.authenticated) {
            this.router.navigate(['/profile']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.dataService.sendData({ loading: true });
        this.apiService.auth(this.username, this.password).toPromise().then(function (user) {
            _this.sessionService.setItem('authenticated', true);
            _this.sessionService.setItem('user', user);
            // notify to other listener about authentication
            _this.dataService.sendData({ authenticated: true });
            _this.dataService.sendData({ loading: false });
            _this.router.navigate(['/profile']);
        }).catch(function (err) {
            console.log(err);
            _this.dataService.sendData({ loading: false });
            if (err.error) {
                _this.errMsg = err.error.message;
                _this.hasError = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">HeyMojo</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"!authenticated\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signup\">Signup</a>\n      </li>\n      <li *ngIf=\"!authenticated\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <li *ngIf=\"!authenticated\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"fbLogin()\"><i class=\"fab fa-facebook-f\"></i> Login with FaceBook</a>\n      </li>\n      <li *ngIf=\"authenticated\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = (function () {
    function NavComponent(dataService, fbService, sessionService, router) {
        this.dataService = dataService;
        this.fbService = fbService;
        this.sessionService = sessionService;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticated = this.sessionService.getItem('authenticated', false);
        // subscribe for future session update
        this.dataService.data.subscribe(function (data) {
            if (data.hasOwnProperty('authenticated')) {
                _this.authenticated = data['authenticated'];
            }
        });
    };
    NavComponent.prototype.fbLogin = function () {
        var _this = this;
        this.dataService.sendData({ loading: true });
        this.fbService.login({
            scope: this.fbService.permissions.join()
        }).then(function (response) {
            console.log('FB logged in');
            _this.sessionService.setItem('authenticated', true);
            _this.sessionService.setItem('fbLogin', true);
            _this.sessionService.setItem('fbAccountId', response.authResponse.userID);
            _this.sessionService.setItem('accessToken', response.authResponse.accessToken);
            // notify to other listener about authentication
            _this.dataService.sendData({ authenticated: true });
            _this.dataService.sendData({ loading: false });
            _this.router.navigate(['/profile']);
        }).catch(function (err) {
            console.log(err);
            _this.dataService.sendData({ loading: false });
        });
    };
    NavComponent.prototype.logout = function () {
        // check if logged in by fb
        var fb = this.sessionService.getItem('fbLogin', false);
        if (fb) {
            this.sessionService.removeItem('fbLogin');
            this.sessionService.removeItem('fbAccountId');
            this.sessionService.removeItem('accessToken');
            this.fbService.logout().catch(console.log);
        }
        else {
            this.sessionService.removeItem('user');
        }
        this.authenticated = false;
        this.sessionService.setItem('authenticated', false);
        // notify to other listener about logout
        this.dataService.sendData({ authenticated: false });
        this.router.navigate(['/login']);
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__fb_service__["a" /* FbService */],
            __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n    padding: 20px 0px;\n}\n.profile-img {\n    text-align: center;\n    max-height: 200px;\n}\n.profile-img img {\n    height: 100%;\n}\nspan.tags {\n    display: inline-block;\n    width: 110px;\n}\nspan.tags-data {\n    display: inline-block;\n    width: calc(100% - 120px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-lg-3 profile-img\">\n      <img class=\"img-fluid\" src=\"{{profilePic}}\" alt=\"Profile Image\">\n    </div>\n    <div *ngIf=\"user&&!fbLogin\" class=\"non-fb col-lg-9\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Name: </span>\n          <span class=\"align-middle tags-data\">{{user.name.first + ' ' + user.name.last}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Username:</span>\n          <span class=\"align-middle tags-data\">{{user.username}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Data of Birth: </span>\n          <span class=\"align-middle tags-data\">{{formatDate(user.dob)}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Hobbies: </span>\n          <span class=\"align-middle tags-data\">{{user.hobbies.join(', ')}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Education:</span>\n          <span class=\"align-middle tags-data\">\n            <div *ngFor=\"let org of user.education\">{{formatOrg(org)}} </div>\n          </span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Work:</span>\n          <span class=\"align-middle tags-data\">\n            <div *ngFor=\"let org of user.work\">{{formatOrg(org)}} </div>\n          </span>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"fbLogin&&fbData\" class=\"non-fb col-lg-9\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Name: </span>\n          <span class=\"align-middle tags-data\">{{fbData.name}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Gender:</span>\n          <span class=\"align-middle tags-data\">{{fbData.gender}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Data of Birth: </span>\n          <span class=\"align-middle tags-data\">{{fbData.birthday}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">About: </span>\n          <span class=\"align-middle tags-data\">{{fbData.about}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Likes:</span>\n          <span class=\"align-middle tags-data\">\n            <div *ngFor=\"let org of fbData.likes.data\">{{org.name}} </div>\n          </span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Education:</span>\n          <span class=\"align-middle tags-data\">\n            <div *ngFor=\"let org of fbData.education\">{{org.school.name}} - {{org.year.name}} </div>\n          </span>\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"align-middle tags\">Work:</span>\n          <span class=\"align-middle tags-data\">\n            <div *ngFor=\"let org of fbData.work\">{{org.employer.name}} - {{org.position.name}} </div>\n          </span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fb_service__ = __webpack_require__("../../../../../src/app/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(apiService, sessionService, dataService, fbService, router) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.dataService = dataService;
        this.fbService = fbService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sessionService.getItem('authenticated', false)) {
            this.router.navigate(['/login']);
        }
        else {
            this.user = this.sessionService.getItem('user', {});
            this.fbLogin = this.sessionService.getItem('fbLogin', false);
            if (this.fbLogin) {
                this.dataService.sendData({ loading: true });
                this.getFbProfile().then(function (response) {
                    console.log('FB logged in');
                    _this.fbData = response;
                    _this.profilePic = response.picture.data.url;
                    _this.dataService.sendData({ loading: false });
                }).catch(function (err) {
                    _this.dataService.sendData({ loading: false });
                    console.log(err);
                });
            }
            else {
                this.dataService.sendData({ loading: true });
                this.apiService.getImageUrl(this.user.profilePic).toPromise().then(function (response) {
                    _this.dataService.sendData({ loading: false });
                    _this.profilePic = response['url'];
                }).catch(function (err) {
                    _this.dataService.sendData({ loading: false });
                    console.log(err);
                });
            }
        }
    };
    ProfileComponent.prototype.formatDate = function (date) {
        var d = new Date(date);
        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    ProfileComponent.prototype.formatOrg = function (org) {
        var start = this.formatDate(org.start);
        var end = org.end ? this.formatDate(org.end) : 'present';
        return org.name + " [ " + start + " - " + end + " ]";
    };
    ProfileComponent.prototype.getFbProfile = function () {
        var method = 'get';
        var access_token = this.sessionService.getItem('accessToken', '');
        return this.fbService.api('/me', method, {
            fields: this.fbService.fields.join(),
            access_token: access_token
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__fb_service__["a" /* FbService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SessionService = (function () {
    function SessionService(platformId, localStorage) {
        this.platformId = platformId;
        this.localStorage = localStorage;
        this.data = {};
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            console.log('LocalStorage is available');
            for (var key in window.localStorage) {
                if (window.localStorage.hasOwnProperty(key)) {
                    this.data[key] = JSON.parse(window.localStorage.getItem(key));
                }
            }
        }
        else {
            console.log('LocalStorage is not available');
        }
    }
    SessionService.prototype.setItem = function (name, value) {
        this.data[name] = value;
        window.localStorage.setItem(name, JSON.stringify(value));
    };
    SessionService.prototype.getItem = function (name, defaultVal) {
        if (this.data.hasOwnProperty(name)) {
            return this.data[name];
        }
        return defaultVal;
    };
    SessionService.prototype.removeItem = function (name) {
        delete this.data[name];
        window.localStorage.removeItem(name);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* PLATFORM_ID */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('LOCALSTORAGE')),
        __metadata("design:paramtypes", [Object, Object])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    padding: 20px 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-sm-8\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input [(ngModel)]=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input [(ngModel)]=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Last Name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"dob\">Date of Birth</label>\n                    <input [(ngModel)]=\"dob\" type=\"date\" class=\"form-control\" id=\"dob\" name=\"dob\" placeholder=\"Birthday\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" aria-describedby=\"usernameHelp\"\n                        placeholder=\"Username\">\n                    <small id=\"usernameHelp\" class=\"form-text text-muted\">Username should be unique. It will be used at the time of login.</small>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"confirmPassword\">Confirm Password</label>\n                    <input [(ngModel)]=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Re-enter Password\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"profilePic\">Profile Picture</label>\n                    <br>\n                    <label class=\"custom-file\">\n                        <span class=\"custom-file-control\"></span>\n                        <input (change)=\"fileSelected($event)\" type=\"file\" id=\"profilePic\" name=\"profilePic\" class=\"custom-file-input\" accept=\"image/png,image/jpg,image/jpeg\">\n                    </label>\n                </div>\n                <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-primary\">Signup</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(dataService, apiService, router) {
        this.dataService = dataService;
        this.apiService = apiService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.fileSelected = function (e) {
        this.profilePic = e.target.files[0];
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            alert('password mismatch');
        }
        else {
            var filename = void 0;
            var data_1 = {
                firstName: this.firstName,
                lastName: this.lastName,
                dob: this.dob,
                password: this.password,
                username: this.username,
                profilePic: this.profilePic
            };
            this.dataService.sendData({ loading: true });
            this.apiService.uploadUrl(this.profilePic).toPromise().then(function (response) {
                data_1.profilePic = response.name;
                return _this.apiService.uploadFile(response.url, _this.profilePic).toPromise();
            }).then(function (response) {
                return _this.apiService.signup(data_1).toPromise();
            }).then(function (response) {
                _this.dataService.sendData({ loading: false });
                _this.router.navigate(['/login']);
            }).catch(function (err) {
                console.log(err);
                _this.dataService.sendData({ loading: false });
            });
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
