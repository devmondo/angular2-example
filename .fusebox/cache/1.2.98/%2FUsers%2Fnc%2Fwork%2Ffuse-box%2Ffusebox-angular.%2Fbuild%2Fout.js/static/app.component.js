module.exports = { contents : "\"use strict\";\nconst core_1 = require(\"@angular/core\");\nlet AppComponent = class AppComponent {\n    constructor() {\n        this.name = 'Angular';\n    }\n    onKey(event) {\n        this.name = event.target.value;\n    }\n};\nAppComponent = __decorate([\n    core_1.Component({\n        selector: 'my-app',\n        template: require(\"~/views/hello.html\"),\n    }),\n    __metadata(\"design:paramtypes\", [])\n], AppComponent);\nexports.AppComponent = AppComponent;\n", 
dependencies : ["@angular/core","~/views/hello.html"], 
sourceMap : "{\"version\":3,\"file\":\"app.component.js\",\"sourceRoot\":\"\",\"sources\":[\"app.component.ts\"],\"names\":[],\"mappings\":\";AAAA,wCAA0C;AAM1C,IAAa,YAAY,GAAzB;IAJA;QAKE,SAAI,GAAG,SAAS,CAAC;IAInB,CAAC;IAHC,KAAK,CAAC,KAAU;QACd,IAAI,CAAC,IAAI,GAAG,KAAK,CAAC,MAAM,CAAC,KAAK,CAAC;IACjC,CAAC;CACF,CAAA;AALY,YAAY;IAJxB,gBAAS,CAAC;QACT,QAAQ,EAAE,QAAQ;QAClB,QAAQ,EAAE,OAAO,CAAC,oBAAoB,CAAC;KACxC,CAAC;;GACW,YAAY,CAKxB;AALY,oCAAY\",\"sourcesContent\":[\"import { Component } from '@angular/core';\\n\\n@Component({\\n  selector: 'my-app',\\n  template: require(\\\"~/views/hello.html\\\"),\\n})\\nexport class AppComponent {\\n  name = 'Angular';\\n  onKey(event: any) {\\n    this.name = event.target.value;\\n  }\\n}\\n\"]}",
mtime : 1481527899000
};