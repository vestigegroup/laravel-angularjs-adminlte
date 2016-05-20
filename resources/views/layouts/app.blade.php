<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700">

    <!-- Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}

    <style>
        body {
            font-family: 'Lato';
        }

        .fa-btn {
            margin-right: 6px;
        }
    </style>
</head>
<body id="app-layout">
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ url('/') }}">
                    Laravel
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    <li><a href="{{ url('/home') }}">Home</a></li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                        <li><a href="{{ url('/register') }}">Register</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>

    <div ng-view></div>


    @if(config('app.debug'))
        <script src="{{ asset('/build/vendor/js/jquery.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-sanitize.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-animate.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-route.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-resource.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-messages.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-strap.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/ui-bootstrap-tpls.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-cookies.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/query-string.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-oauth2.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/dirPagination.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/pusher.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/pusher-angular.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/angular-ui-notification.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/moment.min.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/pt-br.js') }}"></script>
        <script src="{{ asset('/build/vendor/js/loading-bar.js') }}"></script>

        {{-- App core --}}
        <script src="{{ asset('/build/js/angular_pt-br.js') }}"></script>
        <script src="{{ asset('/build/js/app.js') }}"></script>

        {{-- Controllers --}}
        {{-- End Controllers --}}

        {{-- Filters --}}
        <script src="{{ asset('/build/js/filters/dateFilters.js') }}"></script>
        <script src="{{ asset('/build/js/filters/searchHighlight.js') }}"></script>
        {{-- End Filters --}}

        {{-- Services --}}
        <script src="{{ asset('/build/js/services/dictionaryService.js') }}"></script>
        {{-- End Services --}}

        {{-- Factories --}}
        <script src="{{ asset('/build/js/factories/columnsFactory.js') }}"></script>
        {{-- End Factories --}}

        {{-- Directives --}}
        {{-- End Directives --}}
    @else
        <script src="{{ elixir('js/all.js') }}"></script>
    @endif
</body>
</html>
