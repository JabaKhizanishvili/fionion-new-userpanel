<!DOCTYPE html>
<html lang="en">
	<head>

		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="Description" content="Admin Panel">
		<meta name="Author" content="Spruko Technologies Private Limited">
		<meta name="Keywords" content=""/>

		<!-- Title -->
		<title> Admin Panel </title>

        @include('admin.nowa.views.layouts.components.styles')

	</head>

	<body class="ltr main-body app sidebar-mini">

		<!-- Loader -->
		<div id="global-loader">
			<img src="{{asset('admin_a/assets/img/loader.svg')}}" class="loader-img" alt="Loader">
		</div>
		<!-- /Loader -->

		<!-- Page -->
		<div class="page">

			<div>

                @include('admin.nowa.views.layouts.components.app-header')

                @include('admin.nowa.views.layouts.components.app-sidebar')

			</div>

			<!-- main-content -->
			<div class="main-content app-content">

				<!-- container -->
				<div class="main-container container-fluid">

                    @yield('content')

				</div>
				<!-- Container closed -->
			</div>
			<!-- main-content closed -->

            @include('admin.nowa.views.layouts.components.sidebar-right')

            @include('admin.nowa.views.layouts.components.modal')

            @yield('modal')

            @include('admin.nowa.views.layouts.components.footer')

		</div>
		<!-- End Page -->

        @include('admin.nowa.views.layouts.components.scripts')
        <script>
            $('.dark-layout').click(function (e){
                localStorage.setItem('admin_theme', 'dark');
            });

            $('.light-layout').click(function (e){
                localStorage.removeItem('admin_theme');
            });

            const theme = localStorage.getItem('admin_theme');
            if(theme === 'dark'){
                $('body').addClass('dark-theme')
            }
        </script>

    </body>
</html>
