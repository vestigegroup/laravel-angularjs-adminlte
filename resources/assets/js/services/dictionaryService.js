angular.module('app.services')
    .service('$dictionary', ['$rootScope', '$http', 'appConfig', function ($rootScope, $http, appConfig) {
        return {
            lang: function (key, charcase, parameters) {
                checkDictionaries();

                if (!$rootScope.dictionary) return key;

                var value,result;

                key = key.toUpperCase();

                if ($rootScope.dictionary.hasOwnProperty(key)) {
                    value = $rootScope.dictionary[key];
                } else if ($rootScope.fallbackDictionary.hasOwnProperty(key)) {
                    value = $rootScope.fallbackDictionary[key];
                } else {
                    console.error("Translation key [" + key + "] not found on dictionaries");
                    $rootScope.lang = null;
                }

                result = interpolate(value, parameters);

                switch (charcase) {
                    case 'u':
                        return result.toUpperCase();

                    case 'l':
                        return result.toLowerCase();

                    case 'uf':
                        return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

                    default:
                        return result;
                }
            },

            /**
             * Reset the dictionaries
             */
            updateDictionaries: function () {
                $rootScope.dictionary = null;
                checkDictionaries();
                return this;
            }
        };


        /**
         * Check if the dictionaries are loaded
         */
        function checkDictionaries() {
            if (!$rootScope.dictionary || !$rootScope.fallbackDictionary) {
                $http.get(appConfig.baseUrl + '/labels').then(
                    function (response) {
                        $rootScope.dictionary = response.data.default;
                        $rootScope.fallbackDictionary = response.data.fallback;
                    }
                );
            }
        }

        function interpolate(str, keys) {
            angular.forEach(keys, function (value, key) {
                str = str.replace(':' + key, value);
            });

            return str;
        }
    }]);
