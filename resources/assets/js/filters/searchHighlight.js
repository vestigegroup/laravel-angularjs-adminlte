angular.module('app.filters')
    .filter('searchHighlight', ['$sce', function ($sce) {
        return function (input, text) {
            if (!text) return input;

            var p = input.indexOf(text),
                newText = '<b class="text-primary text-underline">' + text + '</b>',
                output = [input.slice(0, p), newText, input.slice(p + text.length)].join('');

            if (p === -1) return input;

            return $sce.trustAsHtml( output );
        }
    }]);
