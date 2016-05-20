angular.module('app.filters')
    .filter('dateBr', function () {
        return function (input) {
            return moment(input).format('DD/MM/YYYY');
        }
    })
    .filter('dateTimeBr', function () {
        return function (input) {
            return moment(input).format('DD/MM/YYYY HH:mm');
        }
    })
    .filter('dateBrEx', function () {
        return function (input) {
            return moment(input).format("LL");
        }
    });