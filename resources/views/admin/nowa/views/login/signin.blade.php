@extends('admin.nowa.views.layouts.custom-app')

    @section('styles')

    @endsection

    @section('class')

	    <div class="bg-primary">

    @endsection

    @section('content')

            <div class="page-single">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-8 col-xs-10 card-sigin-main mx-auto my-auto py-45 justify-content-center">
                            <div class="card-sigin mt-5 mt-md-0">
                                <!-- Demo content-->
                                <div class="main-card-signin d-md-flex">
                                    <div class="wd-100p"><div class="d-flex mb-4"><a href="{{url('index')}}"></a></div>
                                        <div class="">
                                            <div class="main-signup-header">
                                                <h2>Welcome back!</h2>
                                                <h6 class="font-weight-semibold mb-4">{{ __('Sign in') }}</h6>
                                                <div class="panel panel-primary">
                                                <div class=" tab-menu-heading mb-2 border-bottom-0">
                                                    <div class="tabs-menu1">
                                                        <ul class="nav panel-tabs">
                                                            <!-- <li class="me-2"><a href="#tab5" class="active" data-bs-toggle="tab">Email</a></li> -->
                                                            {{--<li><a href="#tab6" data-bs-toggle="tab" class="">Mobile no</a></li>--}}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="panel-body tabs-menu-body border-0 p-3">
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="tab5">
                                                            <form method="post" action="{{ locale_route('login') }}">
                                                                @csrf
                                                                <div class="form-group">
                                                                    <label>{{ __('Email') }}</label> <input type="email" name="email" class="form-control" placeholder="Enter your email">
                                                                    @error('email')
                                                                    <div class="invalid-feedback">
                                                                        {{ $message }}
                                                                    </div>
                                                                    @enderror
                                                                </div>
                                                                <div class="form-group">
                                                                    <label>{{ __('Password') }}</label> <input name="password"  class="form-control" placeholder="Enter your password" type="password">
                                                                    @error('password')
                                                                    <div class="invalid-feedback">
                                                                        {{ $message }}
                                                                    </div>
                                                                    @enderror
                                                                </div><button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                                                {{--<div class="mt-4 d-flex mx-auto text-center justify-content-center mb-2">
                                                                    <button class="btn btn-icon btn-facebook me-3" type="button">
                                                                        <span class="btn-inner--icon"> <i class="bx bxl-facebook tx-18 tx-prime"></i> </span>
                                                                    </button>
                                                                    <button class="btn btn-icon me-3" type="button">
                                                                        <span class="btn-inner--icon"> <i class="bx bxl-twitter tx-18 tx-prime"></i> </span>
                                                                    </button>
                                                                    <button class="btn btn-icon me-3" type="button">
                                                                        <span class="btn-inner--icon"> <i class="bx bxl-linkedin tx-18 tx-prime"></i> </span>
                                                                    </button>
                                                                    <button class="btn  btn-icon me-3" type="button">
                                                                        <span class="btn-inner--icon"> <i class="bx bxl-instagram tx-18 tx-prime"></i> </span>
                                                                    </button>
                                                                </div>--}}
                                                                </form>
                                                        </div>
                                                        <div class="tab-pane" id="tab6">
                                                            <div id="mobile-num" class="wrap-input100 validate-input input-group mb-2">
                                                                <a href="javascript:void(0);" class="input-group-text bg-white text-muted">
                                                                    <span>+91</span>
                                                                </a>
                                                                <input class="input100 form-control" type="mobile" placeholder="Mobile">
                                                            </div>
                                                            <div id="login-otp" class="justify-content-around mb-4">
                                                                <input class="form-control  text-center me-2" id="txt1" maxlength="1">
                                                                <input class="form-control  text-center me-2" id="txt2" maxlength="1">
                                                                <input class="form-control  text-center me-2" id="txt3" maxlength="1">
                                                                <input class="form-control  text-center" id="txt4" maxlength="1">
                                                            </div>
                                                            <span>Note : Login with registered mobile number to generate OTP.</span>
                                                            <div class="container-login100-form-btn mt-3">
                                                                <a href="javascript:void(0);" class="btn login100-form-btn btn-primary" id="generate-otp">
                                                                        Proceed
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                                {{--<div class="main-signin-footer text-center mt-3">
                                                    <p><a href="{{url('forgot')}}" class="mb-3">Forgot password?</a></p>
                                                    <p>Don't have an account? <a href="{{url('signup')}}">Create an Account</a></p>
                                                </div>--}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    @endsection

    @section('scripts')

		<!-- generate-otp js -->
		<script src="{{asset('admin_a/assets/js/generate-otp.js')}}"></script>

    @endsection
