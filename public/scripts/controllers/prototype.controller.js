myApp.controller('PrototypeController', ['$mdDialog', '$mdSidenav', '$location', function ($mdDialog, $mdSidenav, $location) {
    console.log('PrototypeController Loaded');

    var vm = this;

    vm.showSignature = function ($event) {
        console.log('$event:', $event);
        // vm.currentSpecimenQuestions (assign questions based on species element clicked)
        $mdDialog.show({
            targetEvent: $event,
            controller: 'PrototypeController',
            controllerAs: 'pc',
            template: '<md-dialog class="signatureDialog" aria-label="signature-box" layout="column" layout-align="start center">' +
            '<h2>Write Signature</h2>' +
        
        
            '<head>'+
                '<meta charset="utf-8"> '+
                '<title>Signature Pad demo</title>'+
                '<meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">'+
        
                '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">'+
        
                '<meta name="apple-mobile-web-app-capable" content="yes">'+
                '<meta name="apple-mobile-web-app-status-bar-style" content="black">'+
        
                '<link rel="stylesheet" href="styles/signature.css">'+
        
        
        
                '<link rel="stylesheet" type="text/css" href="styles/ie9.css">'+
        
        
                '<script type="text/javascript">'+
                    'var _gaq = _gaq || [];'+
                    '_gaq.push(["_setAccount", "UA-39365077-1"]);'+
                    '_gaq.push(["_trackPageview"]);'+
        
                    '(function () {'+
                        'var ga = document.createElement("script");'+
                        'ga.type = "text/javascript";'+
                        'ga.async = true;'+
                        'ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + '+
                        '    ".google-analytics.com/ga.js";'+
                        'var s = document.getElementsByTagName("script")[0];'+
                        's.parentNode.insertBefore(ga, s);'+
                   ' })();'+
                '</script>'+
            '</head>'+
        
            '<body>'+
        
                '<div id="signature-pad" class="signature-pad">'+
                    '<div class="signature-pad--body">'+
                        '<canvas></canvas>'+
                    '</div>'+
                    '<div class="signature-pad--footer">'+
                        '<div class="description">Sign above</div>'+
        
                        '<div class="signature-pad--actions">'+
                            '<div>'+
                                '<button type="button" class="button clear" data-action="clear">Clear</button>'+
                                '<button type="button" class="button" data-action="change-color">Change color</button>'+
                                '<button type="button" class="button" data-action="undo">Undo</button>'+
        
                            '</div>'+
                            '<div>'+
                                '<button type="button" class="button save" data-action="save-png">Save as PNG</button>'+
                                '<button type="button" class="button save" data-action="save-jpg">Save as JPG</button>'+
                                '<button type="button" class="button save" data-action="save-svg">Save as SVG</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
        
                '<script src="scripts/signature_pad_js/signature_pad.js"></script>'+
                '<script src="scripts/signature_pad_js/app.js"></script>'+
            '</body>'+
        
        
        
        
        '</md-dialog>',
            clickOutsideToClose: true
        })
    }

}]);