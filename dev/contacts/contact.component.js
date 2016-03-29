System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent() {
                    this.contact = {};
                }
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: "contact",
                        template: "\n\t\t<input [(ngModel)]=\"contact.firstName\" type= \"text\" >\n\t  <div>\n\t  \tphone number: {{ contact.phone }} <br>\n\t    email: {{ contact.email }}\n\t\t</div>\n\t",
                        inputs: ["contact"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQUE7b0JBQ1EsWUFBTyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsNEtBTVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNuQixDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJjb250YWN0XCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdC5maXJzdE5hbWVcIiB0eXBlPSBcInRleHRcIiA+XG5cdCAgPGRpdj5cblx0ICBcdHBob25lIG51bWJlcjoge3sgY29udGFjdC5waG9uZSB9fSA8YnI+XG5cdCAgICBlbWFpbDoge3sgY29udGFjdC5lbWFpbCB9fVxuXHRcdDwvZGl2PlxuXHRgLFxuXHRpbnB1dHM6IFtcImNvbnRhY3RcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcblx0cHVibGljIGNvbnRhY3QgPSB7fTtcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
