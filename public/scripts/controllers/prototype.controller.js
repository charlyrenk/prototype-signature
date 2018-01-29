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
            templateUrl: 'signature.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true
        })
    }

}]);

