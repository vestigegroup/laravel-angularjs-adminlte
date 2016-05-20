(function () {
    angular.module('app.services')
        .factory('Columns', Columns);

    Columns.$inject = ['$dictionary'];

    function Columns($dictionary) {
        var columns;
        columns = {
            client: {
                _id: 'client',
                name: {
                    alias: $dictionary.lang('NAME'),
                    visible: true
                },
                email: {
                    alias: $dictionary.lang('EMAIL'),
                    visible: true
                }
            }
        };

        return {
            getColumns: getColumns
        };

        function getColumns(entity) {
            columns[entity].visibleCount = visibleCount;
            return columns[entity];
        }

        function visibleCount(entity) {
            var c = 1;

            angular.forEach(columns[entity], function (value, key) {
                if (value.visible === true) c++;
            });

            return c;
        }
    }
})();