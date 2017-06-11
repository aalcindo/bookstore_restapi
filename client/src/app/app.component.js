"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var AppComponent = (function () {
    function AppComponent(_heroService) {
        this._heroService = _heroService;
        this.name = 'Angular';
        this.run = function () {
            console.log("here");
            console.log(this.hero);
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this._heroService.getHeroes().then(function (responce) { return console.log(responce); }
        //(responce)=>this.heroes =  responce
        );
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1 (click)=\"run()\" >Hello {{name}}</h1>\n            <a routerLink=\"/insert\">insert</a>\n            <a routerLink=\"/delete\">delete</a>\n           <router-outlet></router-outlet>\n  ",
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map