var map = {
	"rxjs": "node_modules/rxjs",
	"@angular/common": "node_modules/@angular/common",
	"@angular/compiler": "node_modules/@angular/compiler",
	"@angular/core": "node_modules/@angular/core",
	"@angular/forms":"node_modules/@angular/forms",
	"@angular/platform-browser": "node_modules/@angular/platform-browser",
	"@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic",
	"@angular/http":"node_modules/@angular/http",
	"@angular/router":"node_modules/@angular/router",
	"ng2-ckeditor": "node_modules/ng2-ckeditor"
};
var packages = {
	"rxjs": { "defaultExtension": "js" },
	"@angular/common": { "main": "bundles/common.umd.js", "defaultExtension": "js" },
	"@angular/compiler": { "main": "bundles/compiler.umd.js", "defaultExtension": "js" },
	"@angular/core": { "main": "bundles/core.umd.js", "defaultExtension": "js" },
	"@angular/forms":{"main":"bundles/forms.umd.js","defaultExtension":  "js"},
	"@angular/platform-browser": { "main": "bundles/platform-browser.umd.js", "defaultExtension": "js" },
	"@angular/platform-browser-dynamic": { "main": "bundles/platform-browser-dynamic.umd.js", "defaultExtension": "js" },
	"@angular/http": { "main": "bundles/http.umd.js", "defaultExtension": "js" },
	"@angular/router":{"main":"bundles/router.umd.js","defaultExtension":"js"},
	"app": {
		main: './main.js',
		defaultExtension: 'js'
	},
	"ng2-ckeditor": {
        "main": "lib/index.js",
        "defaultExtension": "js",
      },
};

var config = {
	map: map,
	packages: packages,
    
};



System.config(config);
