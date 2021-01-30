(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AppComponent_div_11_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_div_23_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const pad_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeStatus(ctx_r11.padData.groups[pad_r2].groupName, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_div_23_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const pad_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.removeData(ctx_r14.padData.groups[pad_r2].groupName, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const groupData_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-completed", groupData_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-status-checked", groupData_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", groupData_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](groupData_r9.text);
} }
function AppComponent_div_11_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not found a task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const pad_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.removeGroup(ctx_r16.padData.groups[pad_r2].groupName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.activate(_r4, "all", _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.activate(_r4, "active", _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.activate(_r4, "completed", _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_div_11_Template_form_submit_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const pad_r2 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addData(ctx_r21.padData.groups[pad_r2].groupName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 20, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_11_div_23_Template, 6, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_div_11_div_24_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pad_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.padData.groups[pad_r2].groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.padData.groups[pad_r2].data.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.padForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.padData.groups[pad_r2].data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.padData.groups[pad_r2].data.length === 0);
} }
class AppComponent {
    constructor(fb) {
        this.fb = fb;
        this.title = 'TodoExtension';
        this.padGroup = [];
        this.padForm = this.fb.group({
            data: [''],
        });
        this.createGroupForm = this.fb.group({
            grpName: [''],
        });
        this.getGroups();
        window.onblur = () => {
            localStorage.setItem('grouping', JSON.stringify(this.padData));
        };
    }
    getGroups() {
        const groupings = localStorage.getItem('grouping');
        console.log(groupings);
        if (groupings) {
            this.padData = JSON.parse(groupings);
        }
        else {
            this.padData = {
                groups: {
                    'Sample Group': {
                        groupName: 'Sample Group',
                        data: [],
                    },
                },
            };
        }
        this.padGroup = Object.keys(this.padData.groups);
    }
    addData(grpName) {
        event.preventDefault();
        if (this.padForm.value.data.length > 0) {
            console.log(grpName, this.padForm.value);
            this.padData.groups[grpName].data.push({ text: this.padForm.value.data, status: false });
            this.padForm.reset();
        }
    }
    removeData(grpName, index) {
        this.padData.groups[grpName].data.splice(index, 1);
    }
    removeGroup(grpName) {
        delete this.padData.groups[grpName];
        this.padGroup = Object.keys(this.padData.groups);
    }
    changeStatus(grpName, index) {
        this.padData.groups[grpName].data[index].status = !this.padData.groups[grpName].data[index].status;
    }
    createGroup() {
        event.preventDefault();
        if (this.createGroupForm.value.grpName.length > 0) {
            this.padData.groups[this.createGroupForm.value.grpName] = { groupName: this.createGroupForm.value.grpName, data: [] };
            this.padGroup = Object.keys(this.padData.groups);
            this.createGroupForm.reset();
        }
    }
    activate(data, type, event) {
        var _a;
        (_a = data.childNodes) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
            var _a;
            (_a = child.childNodes) === null || _a === void 0 ? void 0 : _a.forEach((tasks) => {
                if (tasks.classList.contains('task-item')) {
                    if (type == 'all') {
                        this.toggleFilters(event, type);
                        tasks.classList.remove('d-none');
                        tasks.classList.add('d-flex');
                    }
                    if (type == 'active') {
                        this.toggleFilters(event, type);
                        if (tasks.classList.contains('is-completed')) {
                            tasks.classList.add('d-none');
                            tasks.classList.remove('d-flex');
                        }
                        else {
                            tasks.classList.add('d-flex');
                            tasks.classList.remove('d-none');
                        }
                    }
                    if (type == 'completed') {
                        this.toggleFilters(event, type);
                        if (!tasks.classList.contains('is-completed')) {
                            tasks.classList.add('d-none');
                            tasks.classList.remove('d-flex');
                        }
                        else {
                            tasks.classList.add('d-flex');
                            tasks.classList.remove('d-none');
                        }
                    }
                }
            });
        });
    }
    toggleFilters(event, type) {
        event.childNodes.forEach((filters) => {
            if (filters.classList.contains(type)) {
                filters.classList.add('is-active');
            }
            else {
                filters.classList.remove('is-active');
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 2, consts: [[1, "root-container"], [1, "group-container"], [1, "app"], [1, "task-header"], [1, "task-header-title"], [1, "task-form", 3, "formGroup", "submit"], ["formControlName", "grpName", "placeholder", "Add a new group...", "autofocus", "true", 1, "task-input"], ["task", ""], [1, "task-button"], ["class", "app", 4, "ngFor", "ngForOf"], ["pepe", ""], [1, "titlebox"], [1, "group-delete", 3, "click"], [1, "task-tools"], [1, "task-count"], [1, "task-filters"], ["filters", ""], [1, "task-filter", "all", "is-active", 3, "click"], [1, "task-filter", "active", 3, "click"], [1, "task-filter", "completed", 3, "click"], ["formControlName", "data", "placeholder", "Add a new task...", "autofocus", "true", 1, "task-input"], ["class", "task-list", 4, "ngFor", "ngForOf"], ["class", "task-empty", 4, "ngIf"], [1, "task-list"], [1, "task-item"], ["type", "checkbox", 1, "task-status", 3, "checked", "click"], [1, "task-name"], [1, "task-delete", 3, "click"], [1, "task-empty"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_Template_form_submit_6_listener() { return ctx.createGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 25, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createGroupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.padGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: 0;\n  font-family: \"DM Sans\", sans-serif;\n}\n.root-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(102.7deg, #fddaff 8.2%, #dfadfc 19.6%, #adcdfc 36.8%, #adfcf4 73.2%, #caf8d0 90.9%);\n  background-attachment: fixed;\n  display: flex;\n  flex-direction: column;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 20px;\n  height: auto;\n  overflow: scroll;\n}\n.root-container[_ngcontent-%COMP%]   .app[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  margin: 20px auto;\n  background-color: #fff;\n  font-family: var(--font);\n  border-radius: 16px;\n  font-size: 15px;\n  overflow: hidden;\n  color: #455963;\n  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);\n}\n.root-container[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.root-container[_ngcontent-%COMP%]   .d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.root-container[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow: auto;\n}\n.root-container[_ngcontent-%COMP%]   .task-status[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  border: 2px solid #bbbdc7;\n  border-radius: 50%;\n  background-color: #fff;\n  margin-right: 10px;\n  position: relative;\n}\n.root-container[_ngcontent-%COMP%]   .task-status-checked[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='405.272' height='405.272'%3e%3cpath d='M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z' fill='%23fff'/%3e%3c/svg%3e\");\n  background-size: 10px;\n  background-color: #4acea3;\n  border-color: #38bb90;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.root-container[_ngcontent-%COMP%]   .task-delete[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.root-container[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 12px 20px;\n}\n.root-container[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]    + .task-item[_ngcontent-%COMP%] {\n  border-top: 1px solid #eef0f5;\n}\n.root-container[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]:hover {\n  background-color: #f6fbff;\n}\n.root-container[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%] {\n  margin-right: auto;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.root-container[_ngcontent-%COMP%]   .task-item.is-completed[_ngcontent-%COMP%]    > .task-name[_ngcontent-%COMP%] {\n  -webkit-text-decoration: line-through wavy rgba(0, 0, 0, 0.3);\n          text-decoration: line-through wavy rgba(0, 0, 0, 0.3);\n}\n.root-container[_ngcontent-%COMP%]   .task-item.is-completed[_ngcontent-%COMP%] {\n  background-color: rgba(74, 206, 163, 0.1);\n}\n.root-container[_ngcontent-%COMP%]   .task-header-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 20px 20px 6px 20px;\n}\n.root-container[_ngcontent-%COMP%]   .task-tools[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: 0 20px;\n}\n.root-container[_ngcontent-%COMP%]   .task-filter[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 3px 8px;\n  background: 0;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n  font-family: var(--font);\n  color: #8a9ca5;\n  border-radius: 20px;\n}\n.root-container[_ngcontent-%COMP%]   .task-filter.is-active[_ngcontent-%COMP%] {\n  background-color: #7996a5;\n  color: #fff;\n}\n.root-container[_ngcontent-%COMP%]   .task-count[_ngcontent-%COMP%] {\n  color: #8a9ca5;\n  font-size: 14px;\n}\n.root-container[_ngcontent-%COMP%]   .task-form[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.root-container[_ngcontent-%COMP%]   .task-input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 16px;\n  font-family: var(--font);\n  padding: 0px 16px 20px;\n  border: 0;\n  box-shadow: 0 -1px 0 #e2e4ea inset;\n  color: #455963;\n}\n.root-container[_ngcontent-%COMP%]   .task-input[_ngcontent-%COMP%]::placeholder {\n  color: #a8b5bb;\n}\n.root-container[_ngcontent-%COMP%]   .task-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 -1px 0 #bdcdd6 inset;\n}\n.root-container[_ngcontent-%COMP%]   .task-button[_ngcontent-%COMP%] {\n  display: none;\n}\n.root-container[_ngcontent-%COMP%]   .titlebox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.root-container[_ngcontent-%COMP%]   .task-delete[_ngcontent-%COMP%] {\n  border: 0;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  overflow: hidden;\n  background-color: transparent;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23dc4771' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174.239 174.239'%3e%3cpath d='M87.12 0C39.082 0 0 39.082 0 87.12s39.082 87.12 87.12 87.12 87.12-39.082 87.12-87.12S135.157 0 87.12 0zm0 159.305c-39.802 0-72.185-32.383-72.185-72.185S47.318 14.935 87.12 14.935s72.185 32.383 72.185 72.185-32.384 72.185-72.185 72.185z'/%3e%3cpath d='M120.83 53.414c-2.917-2.917-7.647-2.917-10.559 0L87.12 76.568 63.969 53.414c-2.917-2.917-7.642-2.917-10.559 0s-2.917 7.642 0 10.559l23.151 23.153-23.152 23.154a7.464 7.464 0 000 10.559 7.445 7.445 0 005.28 2.188 7.437 7.437 0 005.28-2.188L87.12 97.686l23.151 23.153a7.445 7.445 0 005.28 2.188 7.442 7.442 0 005.28-2.188 7.464 7.464 0 000-10.559L97.679 87.127l23.151-23.153a7.465 7.465 0 000-10.56z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n  display: none;\n}\n.root-container[_ngcontent-%COMP%]   .group-delete[_ngcontent-%COMP%] {\n  border: 0;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  margin-right: 20px;\n  overflow: hidden;\n  background-color: transparent;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23dc4771' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174.239 174.239'%3e%3cpath d='M87.12 0C39.082 0 0 39.082 0 87.12s39.082 87.12 87.12 87.12 87.12-39.082 87.12-87.12S135.157 0 87.12 0zm0 159.305c-39.802 0-72.185-32.383-72.185-72.185S47.318 14.935 87.12 14.935s72.185 32.383 72.185 72.185-32.384 72.185-72.185 72.185z'/%3e%3cpath d='M120.83 53.414c-2.917-2.917-7.647-2.917-10.559 0L87.12 76.568 63.969 53.414c-2.917-2.917-7.642-2.917-10.559 0s-2.917 7.642 0 10.559l23.151 23.153-23.152 23.154a7.464 7.464 0 000 10.559 7.445 7.445 0 005.28 2.188 7.437 7.437 0 005.28-2.188L87.12 97.686l23.151 23.153a7.445 7.445 0 005.28 2.188 7.442 7.442 0 005.28-2.188 7.464 7.464 0 000-10.559L97.679 87.127l23.151-23.153a7.465 7.465 0 000-10.56z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n}\n.root-container[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]:hover    > .task-delete[_ngcontent-%COMP%] {\n  display: block;\n}\n.root-container[_ngcontent-%COMP%]   .task-empty[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23f4f4f4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.463 486.463'%3e%3cpath d='M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z'/%3e%3cpath d='M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z'/%3e%3cpath d='M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  font-weight: 500;\n  font-size: 18px;\n  background-size: 80px;\n}\n@media (max-width: 600px) {\n  .root-container[_ngcontent-%COMP%]   .task-delete[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBSVI7RUFDQyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQUZEO0FBSUE7RUFDQyxxSEFBQTtFQVFBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFSRDtBQVVDO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUFSRjtBQVVDO0VBQ0Msd0JBQUE7QUFSRjtBQVVDO0VBQ0Msd0JBQUE7QUFSRjtBQVdDO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBVEY7QUFZQztFQUNDLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFWRjtBQWFDO0VBQ0MsMmJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBWEY7QUFjQztFQUNDLGlCQUFBO0FBWkY7QUFlQztFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWJGO0FBZ0JDO0VBQ0MsNkJBQUE7QUFkRjtBQWlCQztFQUNDLHlCQUFBO0FBZkY7QUFrQkM7RUFDQyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFoQkY7QUFtQkM7RUFDQyw2REFBQTtVQUFBLHFEQUFBO0FBakJGO0FBb0JDO0VBQ0MseUNBQUE7QUFsQkY7QUFxQkM7RUFDQyxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFuQkY7QUFzQkM7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBcEJGO0FBdUJDO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBckJGO0FBd0JDO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FBdEJGO0FBeUJDO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUF2QkY7QUEwQkM7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7QUF4QkY7QUEyQkM7RUFDQyxPQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBekJGO0FBNEJDO0VBQ0MsY0FBQTtBQTFCRjtBQTZCQztFQUNDLGtDQUFBO0FBM0JGO0FBOEJDO0VBQ0MsYUFBQTtBQTVCRjtBQStCQztFQUNDLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBN0JGO0FBZ0NDO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1ekJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUE5QkY7QUFpQ0M7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdXpCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUEvQkY7QUFrQ0M7RUFDQyxjQUFBO0FBaENGO0FBbUNDO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNDlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBakNGO0FBb0NDO0VBQ0M7SUFDQyxjQUFBO0VBbENEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURNK1NhbnM6NDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG4kY2xvc2VTdmc6IFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIGZpbGw9JyUyM2RjNDc3MScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTc0LjIzOSAxNzQuMjM5JyUzZSUzY3BhdGggZD0nTTg3LjEyIDBDMzkuMDgyIDAgMCAzOS4wODIgMCA4Ny4xMnMzOS4wODIgODcuMTIgODcuMTIgODcuMTIgODcuMTItMzkuMDgyIDg3LjEyLTg3LjEyUzEzNS4xNTcgMCA4Ny4xMiAwem0wIDE1OS4zMDVjLTM5LjgwMiAwLTcyLjE4NS0zMi4zODMtNzIuMTg1LTcyLjE4NVM0Ny4zMTggMTQuOTM1IDg3LjEyIDE0LjkzNXM3Mi4xODUgMzIuMzgzIDcyLjE4NSA3Mi4xODUtMzIuMzg0IDcyLjE4NS03Mi4xODUgNzIuMTg1eicvJTNlJTNjcGF0aCBkPSdNMTIwLjgzIDUzLjQxNGMtMi45MTctMi45MTctNy42NDctMi45MTctMTAuNTU5IDBMODcuMTIgNzYuNTY4IDYzLjk2OSA1My40MTRjLTIuOTE3LTIuOTE3LTcuNjQyLTIuOTE3LTEwLjU1OSAwcy0yLjkxNyA3LjY0MiAwIDEwLjU1OWwyMy4xNTEgMjMuMTUzLTIzLjE1MiAyMy4xNTRhNy40NjQgNy40NjQgMCAwMDAgMTAuNTU5IDcuNDQ1IDcuNDQ1IDAgMDA1LjI4IDIuMTg4IDcuNDM3IDcuNDM3IDAgMDA1LjI4LTIuMTg4TDg3LjEyIDk3LjY4NmwyMy4xNTEgMjMuMTUzYTcuNDQ1IDcuNDQ1IDAgMDA1LjI4IDIuMTg4IDcuNDQyIDcuNDQyIDAgMDA1LjI4LTIuMTg4IDcuNDY0IDcuNDY0IDAgMDAwLTEwLjU1OUw5Ny42NzkgODcuMTI3bDIzLjE1MS0yMy4xNTNhNy40NjUgNy40NjUgMCAwMDAtMTAuNTZ6Jy8lM2UlM2Mvc3ZnJTNlXCI7XG4kY2hlY2tlZFN2ZzogXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDA1LjI3MicgaGVpZ2h0PSc0MDUuMjcyJyUzZSUzY3BhdGggZD0nTTM5My40MDEgMTI0LjQyNUwxNzkuNjAzIDMzOC4yMDhjLTE1LjgzMiAxNS44MzUtNDEuNTE0IDE1LjgzNS01Ny4zNjEgMEwxMS44NzggMjI3LjgzNmMtMTUuODM4LTE1LjgzNS0xNS44MzgtNDEuNTIgMC01Ny4zNTggMTUuODQxLTE1Ljg0MSA0MS41MjEtMTUuODQxIDU3LjM1NS0uMDA2bDgxLjY5OCA4MS42OTlMMzM2LjAzNyA2Ny4wNjRjMTUuODQxLTE1Ljg0MSA0MS41MjMtMTUuODI5IDU3LjM1OCAwIDE1LjgzNSAxNS44MzggMTUuODM1IDQxLjUxNC4wMDYgNTcuMzYxeicgZmlsbD0nJTIzZmZmJy8lM2UlM2Mvc3ZnJTNlXCI7XG4kYWxlcnRTdmc6IFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIGZpbGw9JyUyM2Y0ZjRmNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDg2LjQ2MyA0ODYuNDYzJyUzZSUzY3BhdGggZD0nTTI0My4yMjUgMzMzLjM4MmMtMTMuNiAwLTI1IDExLjQtMjUgMjVzMTEuNCAyNSAyNSAyNWMxMy4xIDAgMjUtMTEuNCAyNC40LTI0LjQuNi0xNC4zLTEwLjctMjUuNi0yNC40LTI1LjZ6Jy8lM2UlM2NwYXRoIGQ9J000NzQuNjI1IDQyMS45ODJjMTUuNy0yNy4xIDE1LjgtNTkuNC4yLTg2LjRsLTE1Ni42LTI3MS4yYy0xNS41LTI3LjMtNDMuNS00My41LTc0LjktNDMuNXMtNTkuNCAxNi4zLTc0LjkgNDMuNGwtMTU2LjggMjcxLjVjLTE1LjYgMjcuMy0xNS41IDU5LjguMyA4Ni45IDE1LjYgMjYuOCA0My41IDQyLjkgNzQuNyA0Mi45aDMxMi44YzMxLjMgMCA1OS40LTE2LjMgNzUuMi00My42em0tMzQtMTkuNmMtOC43IDE1LTI0LjEgMjMuOS00MS4zIDIzLjloLTMxMi44Yy0xNyAwLTMyLjMtOC43LTQwLjgtMjMuNC04LjYtMTQuOS04LjctMzIuNy0uMS00Ny43bDE1Ni44LTI3MS40YzguNS0xNC45IDIzLjctMjMuNyA0MC45LTIzLjcgMTcuMSAwIDMyLjQgOC45IDQwLjkgMjMuOGwxNTYuNyAyNzEuNGM4LjQgMTQuNiA4LjMgMzIuMi0uMyA0Ny4xeicvJTNlJTNjcGF0aCBkPSdNMjM3LjAyNSAxNTcuODgyYy0xMS45IDMuNC0xOS4zIDE0LjItMTkuMyAyNy4zLjYgNy45IDEuMSAxNS45IDEuNyAyMy44IDEuNyAzMC4xIDMuNCA1OS42IDUuMSA4OS43LjYgMTAuMiA4LjUgMTcuNiAxOC43IDE3LjZzMTguMi03LjkgMTguNy0xOC4yYzAtNi4yIDAtMTEuOS42LTE4LjIgMS4xLTE5LjMgMi4zLTM4LjYgMy40LTU3LjkuNi0xMi41IDEuNy0yNSAyLjMtMzcuNSAwLTQuNS0uNi04LjUtMi4zLTEyLjUtNS4xLTExLjItMTctMTYuOS0yOC45LTE0LjF6Jy8lM2UlM2Mvc3ZnJTNlXCI7XG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0b3V0bGluZTogMDtcblx0Zm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi5yb290LWNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHQxMDIuN2RlZyxcblx0XHRyZ2JhKDI1MywgMjE4LCAyNTUsIDEpIDguMiUsXG5cdFx0cmdiYSgyMjMsIDE3MywgMjUyLCAxKSAxOS42JSxcblx0XHRyZ2JhKDE3MywgMjA1LCAyNTIsIDEpIDM2LjglLFxuXHRcdHJnYmEoMTczLCAyNTIsIDI0NCwgMSkgNzMuMiUsXG5cdFx0cmdiYSgyMDIsIDI0OCwgMjA4LCAxKSA5MC45JVxuXHQpO1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRoZWlnaHQ6IGF1dG87XG5cdG92ZXJmbG93OiBzY3JvbGw7XG5cblx0LmFwcCB7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW46IDIwcHggYXV0bztcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcblx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGNvbG9yOiAjNDU1OTYzO1xuXHRcdGJveC1zaGFkb3c6IDAgMjBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0fVxuXHQuZC1mbGV4IHtcblx0XHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LmQtbm9uZSB7XG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXHR9XG5cblx0LnRhc2stbGlzdCB7XG5cdFx0bWF4LWhlaWdodDogNjB2aDtcblx0XHRvdmVyZmxvdzogYXV0bztcblx0fVxuXG5cdC50YXNrLXN0YXR1cyB7XG5cdFx0YXBwZWFyYW5jZTogbm9uZTtcblx0XHR3aWR0aDogMThweDtcblx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICNiYmJkYzc7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0fVxuXG5cdC50YXNrLXN0YXR1cy1jaGVja2VkIHtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGNoZWNrZWRTdmcpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogMTBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjZWEzO1xuXHRcdGJvcmRlci1jb2xvcjogIzM4YmI5MDtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0fVxuXG5cdC50YXNrLWRlbGV0ZSB7XG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdH1cblxuXHQudGFzay1pdGVtIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDEycHggMjBweDtcblx0fVxuXG5cdC50YXNrLWl0ZW0gKyAudGFzay1pdGVtIHtcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2VlZjBmNTtcblx0fVxuXG5cdC50YXNrLWl0ZW06aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XG5cdH1cblxuXHQudGFzay1uYW1lIHtcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0ZmxleDogMTtcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdH1cblxuXHQudGFzay1pdGVtLmlzLWNvbXBsZXRlZCA+IC50YXNrLW5hbWUge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIHdhdnkgcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHR9XG5cblx0LnRhc2staXRlbS5pcy1jb21wbGV0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIwNiwgMTYzLCAwLjEpO1xuXHR9XG5cblx0LnRhc2staGVhZGVyLXRpdGxlIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0cGFkZGluZzogMjBweCAyMHB4IDZweCAyMHB4O1xuXHR9XG5cblx0LnRhc2stdG9vbHMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdH1cblxuXHQudGFzay1maWx0ZXIge1xuXHRcdGJvcmRlcjogMDtcblx0XHRwYWRkaW5nOiAzcHggOHB4O1xuXHRcdGJhY2tncm91bmQ6IDA7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG5cdFx0Y29sb3I6ICM4YTljYTU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0fVxuXG5cdC50YXNrLWZpbHRlci5pcy1hY3RpdmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3OTk2YTU7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblxuXHQudGFzay1jb3VudCB7XG5cdFx0Y29sb3I6ICM4YTljYTU7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XG5cblx0LnRhc2stZm9ybSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG5cblx0LnRhc2staW5wdXQge1xuXHRcdGZsZXg6IDE7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcblx0XHRwYWRkaW5nOiAwcHggMTZweCAyMHB4O1xuXHRcdGJvcmRlcjogMDtcblx0XHRib3gtc2hhZG93OiAwIC0xcHggMCAjZTJlNGVhIGluc2V0O1xuXHRcdGNvbG9yOiAjNDU1OTYzO1xuXHR9XG5cblx0LnRhc2staW5wdXQ6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogI2E4YjViYjtcblx0fVxuXG5cdC50YXNrLWlucHV0OmZvY3VzIHtcblx0XHRib3gtc2hhZG93OiAwIC0xcHggMCAjYmRjZGQ2IGluc2V0O1xuXHR9XG5cblx0LnRhc2stYnV0dG9uIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0LnRpdGxlYm94IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblxuXHQudGFzay1kZWxldGUge1xuXHRcdGJvcmRlcjogMDtcblx0XHR3aWR0aDogMThweDtcblx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0cGFkZGluZzogMDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgkY2xvc2VTdmcpO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5ncm91cC1kZWxldGUge1xuXHRcdGJvcmRlcjogMDtcblx0XHR3aWR0aDogMThweDtcblx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGNsb3NlU3ZnKTtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cblx0LnRhc2staXRlbTpob3ZlciA+IC50YXNrLWRlbGV0ZSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHQudGFzay1lbXB0eSB7XG5cdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCRhbGVydFN2Zyk7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0YmFja2dyb3VuZC1zaXplOiA4MHB4O1xuXHR9XG5cblx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0LnRhc2stZGVsZXRlIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0fVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kutty/Documents/projects/todo extension/TodoExtension/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map