export const data = [
  {
    name: "FirstTemplate",
    id: "1",
    image: "/static/media/1.jng",
    links: [
      "https://app-landing-theme-01.netlify.app/index.js",
      "https://code.jquery.com/jquery-3.2.1.slim.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      "https://app-landing-theme-01.netlify.app/jquery.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      "https://app-landing-theme-01.netlify.app/stellar.js",
  ],
  preview:"https://app-landing-theme-01.netlify.app",
  pages:[
    { component:`
    <!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>App Landing</title>
<script type='text/css' src="https://app-landing-theme-01.netlify.app/index.js"></script>
<link rel='stylesheet' href='1.css' type='text/css' media='all' />
<link
rel="stylesheet"
href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
/>
<link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto%3A300%2Cregular%2C500%2C700%2C900%7CMontserrat%3A300%2Cregular%2C500%2C600%2C700%2C800%2C900&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel='stylesheet' href='https://app-landing-theme-01.netlify.app/theme.css' type='text/css' media='all' />
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto%3A300%7CMontserrat%3A700%2C600&#038;ver=1629878706' type='text/css' media='all' />
<script type='text/javascript' src='https://app-landing-theme-01.netlify.app/jquery.js' id='jquery-core-js'></script>
<body>
	<header id="header" class="header navbar-style2">
	<nav class="navbar navbar-expand-lg hover-menu bg-tra fixed-top black-scroll scrollbg-dark navbar-light">
		<div class="container">
            <a href="/" class="navbar-brand logo-black"  rel="home" ><h4 style="color:black !important;">App Landing</h4></a>
            <a href="/" class="navbar-brand logo-white" rel="home"><h4 style="color:white !important;">App Landing</h4></a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         	<span class="navbar-bar-icon"><i class="fas fa-bars"></i></span>
            </button><div id="navbarSupportedContent" class="collapse navbar-collapse">

	<ul id="menu-layout-01" class="navbar-nav ml-auto"><li id="menu-item-2547" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2547 nav-item nl-simple">
	  <a class="nav-link"  href="#about">About</a></li>
    <li id="menu-item-2548" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2548 nav-item dropdown">
	<a class="nav-link dropdown-toggle"  href="#What_We_Do" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">What We Do</a>
    <ul class="dropdown-menu" role="menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2549 nav-item nl-simple dropdown-menu-item">
		<a class="dropdown-item "  href="#why_appset">Why App Landing</a>	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2550 nav-item nl-simple dropdown-menu-item">
		<a class="dropdown-item "  href="#how_it_works">How It Works</a>	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2551 nav-item nl-simple dropdown-menu-item">
		<a class="dropdown-item "  href="#testimonials">Testimonials</a>
     </ul>
     </li>
     <li id="menu-item-2553" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2553 nav-item nl-simple">
	    <a class="nav-link"  href="#features">Features</a></li>
     <li id="menu-item-2552" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2552 nav-item nl-simple">
	    <a class="nav-link"  href="#faqs">FAQs</a></li>
     <span><a target="_self" href="#freegreen" title="Try For Free " class="btn btn-arrow btn-green btn-type-dark"><span>Try For Free <i class="fa fa-angle-double-right"></i></span></a></span></ul>
        </div>
	</nav>
    </header>

	 <div id="post-6" class=" page type-page status-publish hentry single-page-details">
    	<section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="fixed" class="vc_section">
            <div id="hero-1" class="bg-white  hero-section  bg-fixed"><div >
                <div class="container">
                    <div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit"
                    ><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra hero-txt hero-1-txt">
                        <div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="hero-txt">
            <h2 class=" wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">App Landing</h2>
            <h3 class="h3-sm  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Powerful App for creative people & designers</h3>
            <p class="p-md  wow perch-fadeInUp fadeInUp" data-wow-delay="500ms" data-wow-duration="1200ms"> Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in iaculis pretium magna, mauris rhoncus ipsum in placerat feugiat primis ultrice </p>
            <div class="stores-badge  wow perch-fadeInUp fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                <a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Get Started Now" class="" width="160"></span></a><a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Get Started Now" class="" width="170"></span></a>
                <span class="os-version">* Requires iOS 7.0 or higher</span>
            </div>
        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="wow perch-fadeInRight fadeInRight hero-1-img" data-wow-delay="300ms" data-wow-duration="1200ms">
        <img   src="https://app-landing-theme-01.netlify.app/images/hero-1-img.png" alt="External image" />
        </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="about" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="features-4" class="bg-white wide-60 features-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-5 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="features-img  wow perch-fadeInLeft fadeInLeft" data-wow-delay="300ms" data-wow-duration="1200ms">
        <img   src="https://app-landing-theme-01.netlify.app/images/image-09.png" alt="External image" />
        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-1 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "><div class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-6"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="wow perch-fadeInUp fadeInUp fbox-4" data-wow-delay="300ms" data-wow-duration="1200ms">
            <div class="fbox grey-color-box">
                <div class="grey-color-icon b-icon box-icon-md"><i class="las la-stopwatch"></i></div>
                <div class="fbox-4-txt">
                    <h5 class="h5-sm">Quick Access</h5>
                    <p class="grey-color">Semper lacus cursus porta, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor felis</p>

                </div>
            </div>
        </div>
        <div class="wow perch-fadeInUp fadeInUp fbox-4" data-wow-delay="300ms" data-wow-duration="1200ms">
            <div class="fbox grey-color-box">
                <div class="grey-color-icon b-icon box-icon-md"><i class="las la-key"></i></div>
                <div class="fbox-4-txt">
                    <h5 class="h5-sm">Concrete Security</h5>
                    <p class="grey-color">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor felis </p>

                </div>
            </div>
        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="wow perch-fadeInUp fadeInUp fbox-4" data-wow-delay="300ms" data-wow-duration="1200ms">
            <div class="fbox grey-color-box">
                <div class="grey-color-icon b-icon box-icon-md"><i class="las la-envelope-open-text"></i></span></div>
                <div class="fbox-4-txt">
                    <h5 class="h5-sm">Mailer Engine</h5>
                    <p class="grey-color">Feugiat primis ultrice semper lacus cursus porta, in ligula risus auctor tempus feugiat dolor felis</p>

                </div>
            </div>
        </div>
        <div class="wow perch-fadeInUp fadeInUp fbox-4" data-wow-delay="300ms" data-wow-duration="1200ms">
            <div class="fbox grey-color-box">
                <div class="grey-color-icon b-icon box-icon-md"><i class="las la-sync-alt"></i></span></div>
                <div class="fbox-4-txt">
                    <h5 class="h5-sm">Free Updates</h5>
                    <p class="grey-color">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor felis </p>

                </div>
            </div>
        </div></div></div></div></div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div class="bg-white       "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "><div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_grey" ><span class="vc_sep_holder vc_sep_holder_l"><span  class="vc_sep_line"></span></span><span class="vc_sep_holder vc_sep_holder_r"><span  class="vc_sep_line"></span></span>
     </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="why_appset" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="content-1" class="bg-white wide-60 content-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="content-txt">

            <h3 class="Default h3-xl none section-id  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">We bring the best design for you</h3>
            <p class="Default none  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">An enim nullam tempor sapien gravida donec enim ipsum pretium porta justo integer at odio velna vitae auctor integer congue magna at purus pretium ligula rutrum luctus risus ultrice enim gravida</p>
            <h5 class="Default h5-sm none  wow perch-fadeInUp fadeInUp" data-wow-delay="500ms" data-wow-duration="1200ms">Feature Integration</h5>
            <div class="  wow perch-fadeInUp fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                    <p class="Default">An nullam tempor sapien, eget gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue. Justo at odio integer velna vitae auctor integer congue magna impedit</p>
                </div>
            <div class="  wow perch-fadeInUp fadeInUp" data-wow-delay="700ms" data-wow-duration="1200ms">
                    <p>Semper lacus cursus porta primis ligula risus tempus auctor ipsum and mauris lectus purus tempor ipsum cursus</p>
                </div>

        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-1 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div><div class="wpb_column vc_column_container vc_col-sm-5 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="content-img  wow perch-fadeInRight fadeInRight content-1-img" data-wow-delay="300ms" data-wow-duration="1200ms">
        <img   src="https://app-landing-theme-01.netlify.app/images/image-06.png" alt="External image" />
        </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div class="bg-white       "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "><div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_grey" ><span class="vc_sep_holder vc_sep_holder_l"><span  class="vc_sep_line"></span></span><span class="vc_sep_holder vc_sep_holder_r"><span  class="vc_sep_line"></span></span>
   </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="statistic-2" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div class="bg-white wide-60      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-3 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="statistic-block box-icon text-center">
                <div class="green-color-icon b-icon box-icon-md  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms"><i class="las la-cloud-download-alt green-color"></i></div>
                <p class="statistic-number txt-700">3,<span class="count-element">438</span></p>
                <p class="txt-500  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Downloads</p>

        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-3 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="statistic-block box-icon text-center">
                <div class="green-color-icon b-icon box-icon-md  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms"><i class="las la-paper-plane"></i></div>
                <p class="statistic-number txt-700">1,<span class="count-element">263</span></p>
                <p class="txt-500  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Tickets Closed</p>

        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-3 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="statistic-block box-icon text-center">
                <div class="green-color-icon b-icon box-icon-md  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms"><i class="las la-users"></i></div>
                <p class="statistic-number txt-700">5,<span class="count-element">172</span></p>
                <p class="txt-500  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Followers</p>

        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-3 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="statistic-block box-icon text-center">
                <div class="green-color-icon b-icon box-icon-md  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms"><i class="las la-coffee"></i></div>
                <p class="statistic-number txt-700">4,<span class="count-element">874</span></p>
                <p class="txt-500  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Cups of Coffee</p>
        </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div>
        
        <section id="how_it_works" data-attachment="scroll" >
            <div><div class="section-inner-wrap bg-inner division pt-100 bg-lightgrey bg-scroll" id="video-2-txt"><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-1 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div><div class="wpb_column vc_column_container vc_col-sm-10 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="section-title  wow perch-fadeInUp fadeInUp text-center" data-wow-delay="300ms" data-wow-duration="1200ms">
            <h2 class="h2-sm">Beautiful User Interface</h2>
            <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius</p>
        </div>
        <div class="text-center  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">
        <a href="#" target="_self"> 
                <div class="video-btn play-icon-tra wow fadeInUp" data-wow-delay="700ms">
                    <div class="video-block-wrapper">
                        <i class="fas fa-play"></i>
                    </div>
                </div><img   src="https://app-landing-theme-01.netlify.app/images/video-2.png" alt="External image" /></a>
        </div></div></div></div><div><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="content-7" class="bg-white wide-60 content-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="content-txt">


            <h3 class="h3-xl  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">Organize all your media content with App Landing easily</h3>
            <p class="grey-color p-md none  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Semper lacus cursus porta, feugiat primis in ultrice ligula tempus auctor ipsum and mauris lectus enim ipsum</p>
            <div class="  wow perch-fadeInUp fadeInUp" data-wow-delay="500ms" data-wow-duration="1200ms">
                    <p class="Default"> An nullam tempor sapien, eget gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue. Justo at odio integer velna vitae auctor integer congue magna impedit</p>
                </div>
            <div class="  wow perch-fadeInUp fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                    <p> Semper lacus cursus porta primis ligula risus tempus sagittis ipsum and mauris lectus purus tempor ipsum at enim ipsum porta</p>
                </div>
            <div  class="app-devices clearfix  wow perch-fadeInUp fadeInUp" data-wow-delay="700ms" data-wow-duration="1200ms">
                <i class="fas fa-tablet-alt f-tablet"></i>
                <i class="fas fa-mobile-alt f-phone"></i>
                <div class="app-devices-desc"><p class="p-small">Available on iPhone, iPad and all Android devices from 5.5</p></div>
            </div>
        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-1 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div><div class="wpb_column vc_column_container vc_col-sm-5 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="content-img  wow perch-fadeInRight fadeInRight content-7-img" data-wow-delay="300ms" data-wow-duration="1200ms">
        <img   src="https://app-landing-theme-01.netlify.app/images/image-07.png" alt="External image" />
        </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div class="bg-white       "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "><div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_grey" ><span class="vc_sep_holder vc_sep_holder_l"><span  class="vc_sep_line"></span></span><span class="vc_sep_holder vc_sep_holder_r"><span  class="vc_sep_line"></span></span>
</div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="testimonials" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="fixed" class="vc_section"><div id="reviews-3" class="bg-white wide-100 reviews-section      bg-fixed"><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="section-title  wow perch-fadeInUp fadeInUp text-center" data-wow-delay="300ms" data-wow-duration="1200ms">
            <h2 class="h2-sm">10k+ Customers Love App Landing</h2>
            <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius</p>
        </div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "><div class=" wow perch-fadeInUp fadeInUp">
            <div class="owl-carousel owl-theme perch-vc-carousel perch-vc-carousel-owl perch-vc-carousel-column-4 grey-nav" data-carousel_type="owl" data-column_lg="4" data-column_md="4" data-column_sm="2" data-column_xs="1" data-autoplay="1" data-center="0" data-dots="1" data-navs="0" data-margin="0" data-loop="1">
           <div class="perch-slide-item"><div class="review  wow perch-fadeInUp fadeInUp review-3" data-wow-delay="300ms" data-wow-duration="1200ms">
               <p>An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor. Magna undo ipsum vitae purus ipsum primis in laoreet augue lectus</p>
                <div class="author-data clearfix d-flex align-items-center">
                    <div class="testimonial-avatar"><img src="https://app-landing-theme-01.netlify.app/images/review-author-1.jpg" alt=""/></div>
                    <div class="review-author">
                        <h5 class="h5-xs">pebz13</h5>
                        <div class="app-rating rating">
                                <i class="fa fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                            </div>
                    </div>
                </div> 
            </div> 
</div><div class="perch-slide-item"><div class="review  wow perch-fadeInUp fadeInUp review-3" data-wow-delay="300ms" data-wow-duration="1200ms">
               <p>Sapien sem accumsan vitae purus diam integer congue magna undo. Magna, sodales vitae aenean mauris tempor at risus lectus aenean magna and mauris lectus laoreet tempor</p>
                <div class="author-data clearfix d-flex align-items-center">
                    <div class="testimonial-avatar"><img src="https://app-landing-theme-01.netlify.app/images/review-author-2.jpg" alt=""/></div>
                    <div class="review-author">
                        <h5 class="h5-xs">Evelyn Martinez</h5>

                        <div class="app-rating rating">
                                <i class="fa fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                            </div>
                    </div>
                </div>
            </div> 
</div><div class="perch-slide-item"><div class="review  wow perch-fadeInUp fadeInUp review-3" data-wow-delay="300ms" data-wow-duration="1200ms">
               <p>An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor. Magna undo ipsum vitae purus ipsum primis in laoreet augue lectus</p>
                <div class="author-data clearfix d-flex align-items-center">
                    <div class="testimonial-avatar"><img src="https://app-landing-theme-01.netlify.app/images/review-author-3.jpg" alt=""/></div>
                    <div class="review-author">
                        <h5 class="h5-xs">Robert Peterson</h5>

                        <div class="app-rating rating">
                                <i class="fa fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                            </div>
                    </div>
                </div> 
            </div> 
</div><div class="perch-slide-item"><div class="review  wow perch-fadeInUp fadeInUp review-3" data-wow-delay="300ms" data-wow-duration="1200ms">
               <p>Etiam sapien sem accumsan sagittis congue. Suscipit and egestas magna sodales vitae aenean mauris tempor risus lectus aenean aenean mauris laoreet tempor</p>
                <div class="author-data clearfix d-flex align-items-center">
                    <div class="testimonial-avatar"><img src="https://app-landing-theme-01.netlify.app/images/review-author-4.jpg" alt=""/></div>
                    <div class="review-author">
                        <h5 class="h5-xs">Leslie Serpas</h5>
                        <div class="app-rating rating">
                                <i class="fa fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                            </div>
                    </div>
                </div> 
            </div> 
</div><div class="perch-slide-item"><div class="review  wow perch-fadeInUp fadeInUp review-3" data-wow-delay="300ms" data-wow-duration="1200ms">
               <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempu tempor posuere ligula variu</p>
                <div class="author-data clearfix d-flex align-items-center">
                    <div class="testimonial-avatar"><img src="https://app-landing-theme-01.netlify.app/images/review-author-5.jpg" alt=""/></div>
                    <div class="review-author">
                        <h5 class="h5-xs">Marisol19</h5>

                        <div class="app-rating rating">
                                <i class="fa fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                            </div>
                    </div>
                </div>  
            </div>  
</div><div class="perch-slide-item"><div class="review  wow perch-fadeInUp fadeInUp review-3" data-wow-delay="300ms" data-wow-duration="1200ms">
               <p>Mauris donec ociis et magnis sapien etiam sapien sagittis congue augue. An orci nullam tempor sapien, eget gravida a donec enim ipsum porta</p>
                <div class="author-data clearfix d-flex align-items-center">
                    <div class="testimonial-avatar"><img src="https://app-landing-theme-01.netlify.app/images/review-author-6.jpg" alt=""/></div>
                    <div class="review-author">
                        <h5 class="h5-xs">Dan Hodges</h5>

                        <div class="app-rating rating">
                                <i class="fa fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                            </div>
                    </div>
                </div>  
            </div> 
        </div><div class="perch-slide-item"><div class="review  wow perch-fadeInUp fadeInUp review-3" data-wow-delay="300ms" data-wow-duration="1200ms">
               <p>Egestas egestas magna ipsum vitae purus efficitur ipsum in primis cubilia laoreet augue congue. Suscipit sodales vitae lobortis magna donec enim</p>
                <div class="author-data clearfix d-flex align-items-center">
                    <div class="testimonial-avatar"><img src="https://app-landing-theme-01.netlify.app/images/review-author-7.jpg" alt=""/></div>
                    <div class="review-author">
                        <h5 class="h5-xs">Penelopa Peterson</h5>

                        <div class="app-rating rating">
                                <i class="fa fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                            </div>
                    </div>
                </div> 
            </div> 
         </div>
           </div>
        </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="features" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax="1.0" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/dotted-map.png" data-opacity="1" data-size="cover" data-width="100%" data-position="50% 0" data-attachment="fixed" class="vc_section bg-image white-color vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving"><div id="content-4" class="bg-green  content-section   pt-100   bg-fixed"><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid white-color bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="wow perch-fadeInUp fadeInUp content-4-img" data-wow-delay="300ms" data-wow-duration="1200ms">
        <img   src="https://app-landing-theme-01.netlify.app/images/image-08.png" alt="External image" />
        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="content-txt">
       <h3 class="h3-xl  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">Stunning landing page for your App</h3>
            <p class="p-md  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">An nullam tempor sapien, eget gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue. Justo at odio integer velna vitae auctor cursus porta feugiat</p>
             <ul class="content-list single-column-list"><li class=" wow perch-fadeInUp fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms"> Vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus enim ipsum blandit</li><li class=" wow perch-fadeInUp fadeInUp" data-wow-delay="700ms" data-wow-duration="1200ms"> Tempor sapien gravida donec enim ipsum blandit</li><li class=" wow perch-fadeInUp fadeInUp" data-wow-delay="800ms" data-wow-duration="1200ms"> Magna at pretium purus pretium ligula rutrum luctus risus ultrice nullam tempor sapien gravida donec porta</li></ul>
        </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="faqs" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="faqs-1" class="bg-white wide-100 faqs-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="section-title  wow perch-fadeInUp fadeInUp text-center" data-wow-delay="300ms" data-wow-duration="1200ms">
            <h2 class="h2-sm">Frequently Asked Questions</h2>
            <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius</p>
        </div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="dark-color h5-sm none os-version" style="font-weight: 500;">Lobortis sit magna ornare magna egestas?</h5>
            <p class="Default none os-version">Etiam sit amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus undo blandit vitae purus laoreet</p>
        </div>
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="Default h5-sm none os-version" style="font-weight: 500;">Placeat axime facere omnis volute?</h5>
            <p class="Default none os-version">An augue egestas an ipsum vitae emo ligula volute ante ipsum primis in faucibus sit ametn in odio. Integer congue leo metus, eu mollis lorem viverra suscipit lectus magna</p>
        </div>
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="Default h5-sm none os-version" style="font-weight: 500;">An interdum lobortis pretium ornare?</h5>
            <p class="Default none os-version">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia curae</p>
        </div>
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="Default h5-sm none os-version" style="font-weight: 500;">Interdum lobortis pretium ornare?</h5>
            <p class="Default none os-version">Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet. Laoreet auctor massa varius egestas amet mauris suscipit semper lacus sed cursus porta feugiat primis</p>
        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="Default h5-sm none os-version" style="font-weight: 500;">Aliquam dapibus pretium ornare?</h5>
            <p class="Default none os-version">Feugiat eros ligula massa lipsum primis in orci luctus et ultrices posuere cubilia curae congue lorem. ante ipsum primis in faucibus bibendum sit amet in odio</p>
        </div>
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="Default h5-sm none os-version" style="font-weight: 500;">Pretium purus lacus tempor an ipsum vitae augue egestas emo ligula?</h5>
            <p class="Default none os-version">Feugiat eros ligula massa lipsum primis in orci luctus et ultrices posuere cubilia curae congue lorem. ante ipsum primis in faucibus bibendum sit amet in odio</p>
        </div>
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="Default h5-sm none os-version" style="font-weight: 500;">Dapibus lobortis pretium ornare?</h5>
            <p class="Default none os-version">Praesent semper, lacus sed cursus porta,feugiat primis in faucibus orci luctus tincidunt ligula ultrice sapien egestas lobortis magna</p>
        </div>
        <div class="mb-25 pl-30 pr-30  wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">


            <h5 class="Default h5-sm none os-version" style="font-weight: 500;">Interdum lobortis pretium ornare?</h5>
            <p class="Default none os-version">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci</p>
        </div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<div class="more-questions-btn wow fadeInUp" data-wow-delay="1.1s"></p>
<h5 class="h5-sm txt-500" style="text-align: center;">Still have a question? <a style="color: green;" href="faqs.html">Ask your question here</a></h5>
</div>

		</div>
	</div>
</div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="freegreen" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="contacts-2" class="bg-lightgrey wide-100 contacts-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-12 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="section-title  wow perch-fadeInUp fadeInUp text-center" data-wow-delay="300ms" data-wow-duration="1200ms">
            <h2 class="h2-sm">Get started free trial!</h2>
            <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius</p>
        </div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-2 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div><div class="wpb_column vc_column_container vc_col-sm-8 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
        <div class="form-holder register-form  wow perch-fadeInUp fadeInUp form-holder" data-wow-delay="300ms" data-wow-duration="1200ms">
            <div class="emaillist emaillist" id="es_form_f1-p6-n1"> 					
                <form action="/" data-source="ig-es"> 								
                    <input class="es_required_field es_txt_email ig_es_form_field_email form-control" type="email" name="" value="" placeholder="Your email address*" required="required" />			 				
                    <button type="submit" name="submit" class=" es_textbox_button btn es_textbox_button es_submit_button es_subscription_form_submit btn-green btn-arrow"><span>Start Your Free Trial</span></button>  				 				
             		</div>
            <p class="p-sm">We don't share your personal information with anyone. Check out our <a href='#'>Privacy Policy</a> for more information</p>

        </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-2 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper "></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div>
	</div>
		<footer id="footer" class="footer division bg-tra ">
			<div class="container">

				<div class="row pt-100 mb-20">
				<div class="col-lg-4">
	            <div id="perch_store_badges-2" class="footer-widget mb-40 footer-stores-badge"><h5 class="h5-sm">App Landing® Application</h5><a href="#" class="store" target="_blank">
					<img class="" src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Appstore" width="160" height="50">
				</a><a href="#" class="store" target="_blank">
					<img class="" src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Google Play" width="160" height="50">
				</a></div>	        </div>
						<div class="col-md-4 col-lg-3">
	            <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Company</h5><div class="menu-company-container"><ul class="menu">
                    <li ><a href="/">About Us</a></li>
                    <li ><a href="#">Careers</a></li>
                    <li ><a href="#">Press &#038; Media</a></li>
                    <li ><a href="#">Site Map</a></li>
                    </ul></div></div>	        </div>
						<div class="col-md-3 col-lg-2 ">
	            <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Connect</h5><div class="menu-connect-container"><ul class="menu">
                    <li ><a href="#">FAQs</a></li>
                    <li ><a href="#">Editor Help</a></li>
                    <li ><a href="#">Life Chatting</a></li>
                    <li ><a href="#">Contact Us</a></li>
                    </ul></div></div>	        </div>
				<div class="col-md-4 col-lg-3">
	            <div id="perch-social-icons-3" class="footer-widget mb-40 social-widget"><div class="widget-content flow-me-widget"><div class="footer-socials-links mb-25 text-right"><h5 class="h5-sm"><a target="_blank" href="https://facebook.com" title="Facebook" class="foo-facebook">
                    <span>Facebook</span>
                    </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Google-plus" class="foo-facebook foo-google-plus">

                    <span>Google-plus</span>
                    </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Twitter" class="foo-facebook foo-google-plus foo-twitter">

                    <span>Twitter</span>
                    </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Youtube" class="foo-facebook foo-google-plus foo-twitter foo-youtube">

                    <span>Youtube</span>
                    </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Dribbble" class="foo-facebook foo-google-plus foo-twitter foo-youtube foo-dribbble">
                    <span>Dribbble</span>
                    </a></h5></div></div></div>	    
        
        </div>
		</div> 
		</footer>
	</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script type='text/javascript' src='https://app-landing-theme-01.netlify.app/stellar.js' ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</body>
</html> `,
styles:`
 #ixozs {
  color: white !important;
}
.navbar-bar-icon {
  color: white !important;
}
#loading {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  opacity: 0.7;
  background-color: #fff;
  z-index: 99;
}

#loading-image {
  position: absolute;
  top: 100px;
  left: 240px;
  z-index: 100;
}
@media (max-width: 575px){
  #ivlp7l {
    margin-top: 15%;
}
.video-btn.play-icon-tra.wow.fadeInUp {
  margin-top: 40%;
}
}
.btn {
  background-color: #48af4b;
  border: 2px solid #48af4b;
}
.las {
  font-size: 75px !important;
  color: gray !important;
}
.lab {
  font-size: 75px !important;
  color: gray !important;
}

.mb-0 {
  margin-bottom: 0;
}
.p-bottom-0 {
  padding-bottom: 0;
}
.p-left-0 {
  padding-left: 0px;
}
.p-right-0 {
  padding-right: 0px;
}
.bg-lightgrey {
  background-color: #f0f0f0 !important;
}
.fbox-3.light-hover:hover {
  border-bottom: 1px solid #fff;
}
.fbox-3.light-hover:hover .b-icon span,
.bg-light {
  background-color: #fff;
}
.wide-100 {
  padding-top: 80px;
  padding-bottom: 80px;
}
.wide-60 {
  padding-top: 80px;
  padding-bottom: 40px;
}

.pt-100,
.division.pt-100 {
  padding-top: 80px;
}
.pb-100 {
  padding-bottom: 80px;
}
h5.h5-xs {
  font-size: 1.111rem;
}
h5.h5-sm {
  font-size: 1.111rem;
}
h5.h5-md {
  font-size: 1.14rem;
}
h5.h5-lg {
  font-size: 1.222rem;
}
h5.h5-xl {
  font-size: 1.333rem;
}

h4.h4-xs {
  font-size: 1.44rem;
}
h4.h4-sm {
  font-size: 1.55rem;
}
h4.h4-md {
  font-size: 1.66rem;
}
h4.h4-lg {
  font-size: 1.77rem;
}
h4.h4-xl {
  font-size: 1.88rem;
}

h3.h3-xs {
  font-size: 2.11rem;
}
h3.h3-sm {
  font-size: 2.22rem;
}
h3.h3-md {
  font-size: 2.33rem;
}
h3.h3-lg {
  font-size: 2.44rem;
}
h3.h3-xl {
  font-size: 2.5rem;
}

h2.h2-xs {
  font-size: 2.75rem;
}
h2.h2-sm {
  font-size: 2.9rem;
}
h2.h2-md {
  font-size: 3.15rem;
}
h2.h2-lg {
  font-size: 3.25rem;
}
h2.h2-xl {
  font-size: 3.35rem;
}
h2.h2-huge {
  font-size: 4.25rem;
}

p.p-sm {
  font-size: 0.95rem;
}
p {
  font-size: 1rem;
}
p.p-md {
  font-size: 1.066rem;
}
p.p-lg {
  font-size: 1.133rem;
}
p.p-xl {
  font-size: 1.266rem;
}

.btn.btn-sm {
  font-size: 0.75rem;
  padding: 0.785rem 1.75rem;
}
.btn {
  font-size: 0.8125rem;
  padding: 0.825rem 1.65rem;
}
.btn.btn-md {
  font-size: 0.875rem;
  padding: 0.875rem 1.75rem;
}
.btn.btn-lg {
  font-size: 0.875rem;
  padding: 1rem 2rem;
}
.stores-badge {
  margin-top: 35px;
}
a.store {
  margin-right: 10px;
}

.box-icon-sm [class^="ti-"],
.box-icon-sm [class*=" ti-"] {
  font-size: 3.5rem;
}
.box-icon [class^="ti-"],
.box-icon [class*=" ti-"] {
  font-size: 3.75rem;
}
.box-icon-md [class^="ti-"],
.box-icon-md [class*=" ti-"] {
  font-size: 4rem;
}
.box-icon-lg [class^="ti-"],
.box-icon-md [class*=" ti-"] {
  font-size: 4.25rem;
}
span.section-id {
  margin-bottom: 20px;
}
.section-title {
  margin-bottom: 50px;
}
.section-title.text-center p {
  padding: 0 18%;
}

.navbar-brand {
  margin-right: 3rem;
}

.nav-item {
  margin: 0 1.25rem;
}
.navbar-expand-lg .navbar-nav .nav-link {
  font-size: 0.785rem;
}
.navbar .btn {
  font-size: 0.785rem;
}
.header-socials {
  margin-top: 3px;
  margin-left: 0;
}
.header-socials span {
  margin-left: 5px;
}
.header-socials a {
  width: 36px;
  height: 36px;
  font-size: 1rem;
  line-height: 31px !important;
}
#hero-1 {
  padding-top: 160px;
  padding-bottom: 0;
}
#hero-1 .hero-txt {
  margin-top: 60px;
}
.hero-app-logo {
  margin-bottom: 20px;
}

.hero-app-logo img {
  width: 100px;
  height: auto;
}
#hero-1 h2 {
  font-size: 4.25rem;
  letter-spacing: -1.5px;
  margin-bottom: 20px;
}
#hero-1 h3 {
  margin-bottom: 20px;
}
#hero-1 .hero-txt p {
  padding-right: 5%;
}
.hero-section .newsletter-form {
  margin-top: 32px;
  margin-right: 10%;
}
.hero-section .newsletter-form .form-control {
  height: 56px;
}
.hero-section .newsletter-form .btn {
  height: 56px;
}
.hero-links {
  margin-top: 5px;
}
.hero-links span {
  font-size: 0.925rem;
  line-height: 1;
  margin-right: 20px;
}
.hero-1-img img {
  max-width: 180%;
}

.fbox-2 {
  padding: 0 5px;
}
.fbox-3 {
  padding: 60px 15px 45px;
}
.fbox-5 {
  margin-bottom: 35px;
}
.fbox-6.pr-30 {
  padding-right: 0;
}
.fbox-6.pl-30 {
  padding-left: 0;
}

h2.tra-digit {
  font-size: 4.25rem;
  margin-bottom: 10px;
  margin-left: -5px;
}

.fbox-1 h5,
.fbox-4 h5,
.fbox-6 h5 {
  margin-top: 15px;
  margin-bottom: 10px;
}
.fbox-2 h5,
.fbox-3 h5 {
  margin-top: 35px;
  margin-bottom: 10px;
}
.fbox-5-txt {
  padding-left: 20px;
}
.content-txt {
  padding-right: 15px;
  padding-left: 15px;
}
#content-6 .content-txt.mt-50 {
  margin-top: 20px;
}
#content-8 .content-txt {
  padding-right: 30px;
  padding-left: 25px;
}
#content-10 .content-txt {
  padding-right: 10%;
  padding-left: 10%;
}
.small-statistic.mt-40 {
  margin-top: 30px;
}
.app-devices {
  padding: 5px 0 0 5px;
}

.content-txt h3.h3-xl {
  margin-bottom: 20px;
}
.content-txt h5.h5-sm {
  margin-top: 15px;
  margin-bottom: 10px;
}

#content-9 p {
  padding: 0 10%;
}
#content-10 .content-txt p {
  padding: 0;
}

.content-boxes {
  padding: 40px 30px;
  margin: 0 5px -80px;
}
.cbox-1-txt {
  padding-left: 18px;
}

.content-5-img {
  margin: 0 5px -80px;
}
.content-6-img {
  margin: -80px 5px 0;
}
.screenshots-wrap {
  margin-bottom: 80px;
}
.screens-section .slick-dots {
  bottom: -80px;
}
#video-1 {
  padding-top: 150px;
  padding-bottom: 150px;
}
#video-2 .video-preview {
  margin-bottom: -80px;
}

.pricing-table {
  padding: 50px 25px;
}
#pricing-2 .pricing-table {
  padding: 50px 30px;
}
.pricing-table span.price,
#pricing-2 .price span {
  font-size: 65px;
  line-height: 1;
}
.pricing-plan sup,
#pricing-2 .price sup {
  font-size: 40px;
}
p.validity {
  font-size: 1.1rem;
  margin-top: 5px;
}
#pricing-2 .price span.price-vat {
  font-size: 0.925rem;
  padding: 0;
}
.pricing-table ul.features li {
  font-size: 1rem;
  padding: 7px 0;
}

.statistic-block p.statistic-number {
  font-size: 3rem;
  margin-bottom: 10px;
}
.statistic-block p {
  font-size: 0.8125rem;
}
.m-img {
  display: inline-block;
  padding: 30px;
}
.m-img img {
  width: 120px;
  height: 120px;
}

.more-app-box h5 {
  margin-bottom: 8px;
  margin-top: 25px;
}
.more-app-box span.app-cat {
  margin-bottom: 10px;
}
#press-1 .col-md-3 {
  padding-right: 15px;
  padding-left: 15px;
}
.press-logo {
  padding: 60px 30px;
}
.press-txt p {
  margin-bottom: 30px;
  padding: 0;
}
.press-txt.mt-20 {
  margin-top: 0;
}

#faqs-page {
  margin-top: 160px;
  margin-bottom: 60px;
}
#faqs-left {
  padding-right: 10px;
}
#faqs-right {
  padding-left: 10px;
}

.question {
  margin-bottom: 20px;
}
.question h5 {
  margin-bottom: 10px;
}
.newsletter-section .newsletter-form .form-control {
  height: 60px;
}
.newsletter-section .newsletter-form .btn {
  height: 62px;
}

.newsletter-txt p {
  padding: 0 10%;
}

#sidebar-right .pl-60 {
  padding-left: 10px;
}
#sidebar-left .pl-60 {
  padding-right: 10px;
}

#contacts-2 .form-holder {
  margin-right: 2%;
  margin-left: 2%;
}

.footer h5 {
  margin-bottom: 20px;
}
.footer-socials-links h5 {
  margin-bottom: 10px;
}
#terms-page {
  margin-top: 160px;
  margin-bottom: 45px;
}
@media (min-width: 768px) and (max-width: 991.99px) {
  html {
    font-size: 16px;
  }
  .wide-100 {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .wide-60 {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  .pt-100,
  .division.pt-100 {
    padding-top: 80px;
  }
  .pb-100 {
    padding-bottom: 80px;
  }
  h5.h5-xs {
    font-size: 1.111rem;
  }
  h5.h5-sm {
    font-size: 1.111rem;
  }
  h5.h5-md {
    font-size: 1.14rem;
  }
  h5.h5-lg {
    font-size: 1.15rem;
  }
  h5.h5-xl {
    font-size: 1.2rem;
  }
  h4.h4-xs {
    font-size: 1.222rem;
  }
  h4.h4-sm {
    font-size: 1.3rem;
  }
  h4.h4-md {
    font-size: 1.35rem;
  }
  h4.h4-lg {
    font-size: 1.45rem;
  }
  h4.h4-xl {
    font-size: 1.5rem;
  }
  h3.h3-xs {
    font-size: 1.6rem;
  }
  h3.h3-sm {
    font-size: 1.7rem;
  }
  h3.h3-md {
    font-size: 1.8rem;
  }
  h3.h3-lg {
    font-size: 1.9rem;
  }
  h3.h3-xl {
    font-size: 2rem;
  }
  h2.h2-xs {
    font-size: 2.15rem;
  }
  h2.h2-sm {
    font-size: 2.25rem;
  }
  h2.h2-md {
    font-size: 2.35rem;
  }
  h2.h2-lg {
    font-size: 2.45rem;
  }
  h2.h2-xl {
    font-size: 2.55rem;
  }
  h2.h2-huge {
    font-size: 3.25rem;
  }
  p.p-sm {
    font-size: 0.95rem;
  }
  p {
    font-size: 1rem;
  }
  p.p-md {
    font-size: 1rem;
  }
  p.p-lg {
    font-size: 1.05rem;
  }
  p.p-xl {
    font-size: 1.1rem;
  }
  .btn.btn-sm {
    font-size: 0.75rem;
    padding: 0.785rem 1.75rem;
  }
  .btn {
    font-size: 0.8125rem;
    padding: 0.825rem 1.65rem;
  }
  .btn.btn-md {
    font-size: 0.9rem;
    padding: 0.925rem 1.9rem;
  }
  .btn.btn-lg {
    font-size: 0.9rem;
    padding: 1rem 2rem;
  }

  .video-btn {
    width: 90px;
    height: 90px;
    margin-top: -45px;
    margin-left: -45px;
    line-height: 80px !important;
  }
  a.store {
    margin-right: 10px;
  }
  .app-devices {
    padding: 10px 0 0 5px;
  }
  .app-devices .svg-inline--fa {
    font-size: 2.15rem;
  }
  .app-devices .svg-inline--fa.f-phone {
    margin-right: 1rem;
  }
  .app-devices-desc p {
    font-size: 0.95rem;
    padding-right: 5%;
  }
  .box-icon-sm [class^="ti-"],
  .box-icon-sm [class*=" ti-"] {
    font-size: 3.25rem;
  }
  .box-icon [class^="ti-"],
  .box-icon [class*=" ti-"] {
    font-size: 3.6rem;
  }
  .box-icon-md [class^="ti-"],
  .box-icon-md [class*=" ti-"] {
    font-size: 3.85rem;
  }
  .box-icon-lg [class^="ti-"],
  .box-icon-md [class*=" ti-"] {
    font-size: 4.1rem;
  }
  span.section-id {
    margin-bottom: 18px;
  }
  .section-title {
    margin-bottom: 40px;
  }
  .section-title p {
    margin-top: 10px;
  }
  .section-title.text-center p {
    padding: 0 12%;
  }
  .bg-light {
    background-color: #fff !important;
    box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
  }
  .navbar {
    padding: 1.25rem 1.25rem;
    text-align: center;
  }

  .navbar.bg-tra {
    padding: 1.25rem 1.25rem;
    background-color: #fff !important;
    box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
  }
  .navbar.bg-tra.black-scroll {
    background-color: #333 !important;
  }
  .navbar.bg-tra.bg-tra.green-scroll {
    background-color: #48af4b !important;
  }
  .navbar.bg-tra.bg-tra.blue-scroll {
    background-color: #389bf2 !important;
  }
  .navbar.bg-tra.bg-tra.coral-scroll {
    background-color: #fa5876 !important;
  }

  .navbar.scroll.bg-tra {
    padding: 1.25rem 1.25rem;
  }

  .navbar-nav {
    padding-top: 15px;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 0.975rem;
    padding: 12px 0;
    margin-left: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  .navbar .btn {
    font-size: 0.925rem;
    line-height: 1;
    padding: 0.925rem 2.5rem;
    margin-top: 10px;
    margin-left: 0;
  }
  .navbar .btn.btn-tra-white,
  .navbar.scroll .btn.btn-tra-white {
    color: #222;
    border-color: #222;
  }
  .header .btn.tra-hover:hover {
    color: #222;
    background-color: transparent;
    border-color: #222;
  }
  .header .btn.white-hover:hover,
  .header .navbar.scroll .btn.white-hover:hover {
    color: #fff;
    background-color: #333;
    border-color: #333;
  }
  .header .btn.white-hover:hover span,
  .navbar.scroll .btn.white-hover:hover span {
    color: #fff;
  }
  .navbar .btn.tra-hover:hover span,
  .navbar.scroll .btn.tra-hover:hover span {
    color: #333;
  }

  .header .black-scroll .btn.tra-hover:hover,
  .header .green-scroll .btn.tra-hover:hover,
  .header .blue-scroll .btn.tra-hover:hover,
  .header .coral-scroll .btn.tra-hover:hover {
    background-color: transparent;
    border-color: #fff;
  }
  .header .black-scroll .btn.tra-hover:hover span,
  .header .green-scroll .btn.tra-hover:hover span,
  .header .blue-scroll .btn.tra-hover:hover span,
  .header .coral-scroll .btn.tra-hover:hover span {
    color: #fff;
  }

  .dropdown-menu {
    text-align: center;
  }
  .dropdown-item {
    font-size: 1.15rem;
    padding: 0.5rem 1.25rem;
  }

  .header-socials {
    margin: 12px auto 0;
  }
  .header-socials a {
    color: #fff;
    margin-left: 2px;
  }
  .header-socials a,
  .navbar.scroll .header-socials a,
  .navbar-light .header-socials a {
    color: #fff;
  }

  .navbar-expand-lg .nl-simple a:before {
    display: none;
  }
  .navbar-expand-lg .nl-simple a:hover:before,
  .navbar-expand-lg .nl-simple a:focus:before {
    display: none;
  }

  .navbar-light .nav-link:focus,
  .nav-link:focus {
    color: #fff;
    background-color: transparent;
  }

  .header-socials a.ico-facebook,
  .navbar.scroll .header-socials a.ico-facebook {
    background-color: #3b5998;
    border-color: #3b5998;
  }
  .header-socials a.ico-twitter,
  .navbar.scroll .header-socials a.ico-twitter {
    background-color: #00a9ed;
    border-color: #00a9ed;
  }
  .header-socials a.ico-behance,
  .navbar.scroll .header-socials a.ico-behance {
    background-color: #2473f6;
    border-color: #2473f6;
  }
  .header-socials a.ico-google-plus,
  .navbar.scroll .header-socials a.ico-google-plus {
    background-color: #cd1111;
    border-color: #cd1111;
  }
  .header-socials a.ico-linkedin,
  .navbar.scroll .header-socials a.ico-linkedin {
    background-color: #015886;
    border-color: #015886;
  }
  .header-socials a.ico-dribbble,
  .navbar.scroll .header-socials a.ico-dribbble {
    background-color: #d92d84;
    border-color: #d92d84;
  }
  .header-socials a.ico-instagram,
  .navbar.scroll .header-socials a.ico-instagram {
    background-color: #beb3a8;
    border-color: #beb3a8;
  }
  .header-socials a.ico-pinterest,
  .navbar.scroll .header-socials a.ico-pinterest {
    background-color: #ac281a;
    border-color: #ac281a;
  }
  .header-socials a.ico-youtube,
  .navbar.scroll .header-socials a.ico-youtube {
    background-color: #cd1b20;
    border-color: #cd1b20;
  }
  .header-socials a.ico-tumblr,
  .navbar.scroll .header-socials a.ico-tumblr {
    background-color: #3a5976;
    border-color: #3a5976;
  }
  .header-socials a.ico-vk,
  .navbar.scroll .header-socials a.ico-vk {
    background-color: #3b5998;
    border-color: #3b5998;
  }

  .header-socials a:hover {
    color: #fff;
  }

  .header-store img {
    margin-top: 8px;
  }
  .hero-section {
    margin-top: 68px;
  }

  #hero-1 {
    padding-top: 80px;
    padding-bottom: 0;
  }
  #hero-1 .hero-txt {
    margin-top: 15px;
  }
  .hero-app-logo {
    margin-bottom: 20px;
  }
  .hero-app-logo img {
    width: 90px;
    height: auto;
  }
  #hero-1 h2 {
    font-size: 3.5rem;
    letter-spacing: -1px;
    margin-bottom: 15px;
  }
  #hero-1 h3 {
    margin-bottom: 15px;
  }
  #hero-1 .hero-txt p {
    padding-right: 0;
  }
  .hero-section .newsletter-form {
    margin-top: 26px;
    margin-right: 5%;
  }
  .hero-section .newsletter-form .form-control {
    height: 54px;
  }
  .hero-section .newsletter-form .btn {
    height: 54px;
  }
  .hero-links {
    margin-top: 0;
  }
  .hero-links span {
    font-size: 1.066rem;
    line-height: 1;
    margin-right: 10px;
  }
  .hero-1-img img {
    max-width: 220%;
  }
  #features-2 {
    padding-bottom: 20px;
  }

  .fbox-2 {
    padding: 0;
    margin-bottom: 60px;
  }
  .fbox-3 {
    padding: 60px 15px 45px;
  }
  .fbox-5 {
    margin-bottom: 25px;
  }
  .fbox-7 {
    text-align: center;
    padding: 0 5%;
  }
  .fbox-6.pr-30 {
    padding-right: 0;
  }
  .fbox-6.pl-30 {
    padding-left: 0;
  }

  h2.tra-digit {
    font-size: 4.25rem;
    margin-bottom: 10px;
    margin-left: 0;
  }

  .fbox-1 h5,
  .fbox-4 h5,
  .fbox-6 h5 {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .fbox-2 h5,
  .fbox-3 h5 {
    margin-top: 35px;
    margin-bottom: 10px;
  }
  .fbox-5-txt {
    padding-left: 18px;
  }

  #content-5 {
    padding-bottom: 0;
  }
  #content-6 {
    padding-top: 0;
  }
  #content-5 .bg-inner {
    padding-bottom: 40px;
  }
  #content-6 .bg-inner {
    padding-top: 40px;
  }

  .content-txt,
  #content-8 .content-txt,
  #content-10 .content-txt {
    padding-right: 0;
    padding-left: 0;
  }
  #content-6 .content-txt.mt-50 {
    margin-top: 20px;
  }
  .small-statistic.mt-40 {
    margin-top: 30px;
  }

  .content-txt h3.h3-xl {
    margin-bottom: 15px;
  }
  .content-txt h5.h5-sm {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  #content-9 p {
    padding: 0;
  }
  #content-10 .content-txt p {
    padding: 0;
  }

  .content-boxes {
    padding: 30px 20px;
    margin: 0 0 -80px;
  }
  .cbox-1-txt {
    padding-left: 15px;
  }

  .content-5-img {
    margin: 0 0 40px 0;
  }
  .content-6-img {
    margin: 0;
  }
  .content-7-img img {
    max-width: 330%;
  }

  .screenshots-wrap {
    margin-bottom: 80px;
  }
  .screens-section .slick-dots {
    bottom: -80px;
  }

  #video-1 {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  #video-1 h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #video-2 .video-preview {
    margin-bottom: -80px;
  }
  .pricing-section .col-md-4,
  .pricing-page-section .col-md-4 {
    padding: 0 5px;
  }
  .pricing-table,
  #pricing-2 .pricing-table {
    padding: 40px 20px;
  }

  .pricing-table span.price,
  #pricing-2 .price span {
    font-size: 56px;
  }
  .pricing-plan sup,
  #pricing-2 .price sup {
    font-size: 35px;
  }
  .pricing-plan sup.pricing-coins {
    font-size: 35px;
  }
  p.validity {
    font-size: 1rem;
    margin-top: 5px;
  }
  #pricing-2 .price span.price-vat {
    font-size: 0.85rem;
    padding: 0;
  }
  .pricing-table ul.features li {
    font-size: 0.9rem;
    padding: 6px 0;
  }

  .pricing-table .btn {
    font-size: 0.8rem;
    letter-spacing: -0.5px;
    padding: 0.8rem 1.5rem;
  }

  .pricing-text {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 25px;
  }
  .pricing-text p {
    font-size: 14px;
    line-height: 22px;
  }

  .review-1 {
    margin-bottom: 20px;
  }
  .statistic-block p.statistic-number {
    font-size: 2.85rem;
    margin-bottom: 10px;
  }
  .statistic-block p {
    font-size: 0.8125rem;
  }
  .m-img {
    display: inline-block;
    padding: 30px;
  }
  .m-img img {
    width: 100px;
    height: 100px;
  }

  .more-app-box h5 {
    margin-bottom: 8px;
    margin-top: 25px;
  }
  .more-app-box span.app-cat {
    margin-bottom: 10px;
  }

  #press-1 .col-md-3 {
    padding-right: 15px;
    padding-left: 15px;
  }
  .press-logo {
    padding: 60px 30px;
  }
  .press-txt p {
    margin-bottom: 30px;
    padding: 0;
  }
  .press-txt.mt-20 {
    margin-top: 0;
  }

  #faqs-page {
    margin-top: 140px;
    margin-bottom: 55px;
  }
  #faqs-left {
    padding-right: 15px;
  }
  #faqs-right {
    padding-left: 15px;
  }

  .question {
    margin-bottom: 22px;
  }
  .question h5 {
    margin-bottom: 5px;
  }

  .more-questions-btn {
    margin-top: 30px;
  }
  .newsletter-section .newsletter-form .form-control {
    height: 60px;
  }
  .newsletter-section .newsletter-form .btn {
    height: 60px;
  }

  .newsletter-txt p {
    padding: 0 5%;
  }

  .sidebar-div.mb-40 {
    margin-bottom: 30px;
  }
  .sidebar-div.mb-50 {
    margin-bottom: 40px;
  }

  #sidebar-right h5.h5-sm,
  #sidebar-left h5.h5-sm {
    margin-bottom: 20px;
  }
  #leave-comment.mt-80 {
    margin-top: 50px;
  }
  #contacts-2 .form-holder {
    margin-right: 0;
    margin-left: 0;
  }

  .footer h5 {
    margin-bottom: 20px;
  }
  .footer-socials-links h5 {
    margin-bottom: 10px;
  }

  .footer-stores-badge.text-right {
    text-align: left !important;
  }

  #footer-3 .foo-links li,
  .bottom-footer .foo-links li {
    margin-left: 15px;
  }
  #footer-5 .foo-links li {
    margin: 0 8px;
  }

  #footer-5 .foo-logo {
    text-align: center;
    margin-bottom: 25px;
  }
  #footer-5 .footer-links {
    margin-bottom: 10px;
  }
  #footer-5 .footer-socials-links.text-right {
    text-align: center !important;
    margin-bottom: 17px;
  }
  #footer-5 .footer-copyright {
    padding-bottom: 60px;
  }
  .bottom-form {
    min-width: 240px;
    max-width: 240px;
  }
  .bottom-form-header {
    padding: 10px 16px;
  }
  .bottom-form-header span {
    right: 10px;
    top: -30px;
    width: 50px;
    height: 50px;
    line-height: 50px !important;
  }
  .bottom-form-header .svg-inline--fa {
    font-size: 1.65rem;
  }

  #terms-page {
    margin-top: 140px;
    margin-bottom: 50px;
  }
  .terms-box {
    margin-bottom: 30px;
  }
  .terms-box h4 {
    margin-bottom: 15px;
  }
  .terms-box p span {
    font-size: 1rem;
    margin-right: 2px;
  }
}

@media (max-width: 767px) {
  html {
    font-size: 15px;
  }
  .wide-100 {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .wide-60 {
    padding-top: 80px;
    padding-bottom: 40px;
  }
  .pt-100,
  .division.pt-100 {
    padding-top: 80px;
  }
  .pb-100 {
    padding-bottom: 80px;
  }

  .bg-light {
    background-color: #fff !important;
    box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
  }
  .navbar {
    padding: 1.25rem 1.25rem;
    text-align: center;
  }

  .navbar.bg-tra {
    padding: 1.25rem 1.25rem;
    background-color: #fff !important;
    box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
  }
  .navbar.bg-tra.black-scroll {
    background-color: #333 !important;
  }
  .navbar.bg-tra.bg-tra.green-scroll {
    background-color: #48af4b !important;
  }
  .navbar.bg-tra.bg-tra.blue-scroll {
    background-color: #389bf2 !important;
  }
  .navbar.bg-tra.bg-tra.coral-scroll {
    background-color: #fa5876 !important;
  }

  .navbar.scroll.bg-tra {
    padding: 1.25rem 1.25rem;
  }

  .logo-white,
  .navbar-light.bg-tra .logo-white,
  .navbar-light.bg-light .logo-white,
  .bg-tra .logo-white,
  .bg-dark .logo-white {
    display: none;
  }

  .bg-tra .logo-black,
  .navbar-light.bg-tra .logo-black,
  .logo-black,
  .navbar-light.bg-light .logo-black {
    display: block;
  }

  .navbar.bg-tra.black-scroll .logo-black,
  .navbar.bg-tra.green-scroll .logo-black,
  .navbar.bg-tra.blue-scroll .logo-black,
  .navbar.bg-tra.coral-scroll .logo-black {
    display: none;
  }

  .navbar.bg-tra.black-scroll .logo-white,
  .navbar.bg-tra.green-scroll .logo-white,
  .navbar.bg-tra.blue-scroll .logo-white,
  .navbar.bg-tra.coral-scroll .logo-white {
    display: block;
  }

  .bg-tra .nav-link {
    color: #333;
  }

  .navbar.bg-tra.black-scroll .navbar-toggler,
  .navbar.bg-tra.green-scroll .navbar-toggler,
  .navbar.bg-tra.blue-scroll .navbar-toggler,
  .navbar.bg-tra.coral-scroll .navbar-toggler,
  .bg-tra.navbar-light.black-scroll .nav-link,
  .bg-tra.black-scroll .nav-link,
  .bg-tra.navbar-light.green-scroll .nav-link,
  .bg-tra.green-scroll .nav-link,
  .bg-tra.navbar-light.blue-scroll .nav-link,
  .bg-tra.blue-scroll .nav-link,
  .bg-tra.navbar-light.coral-scroll .nav-link,
  .bg-tra.coral-scroll .nav-link {
    color: #fff;
  }

  .navbar-nav .nav-link:focus,
  .navbar-light .navbar-nav .nav-link:focus,
  .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:hover {
    color: #858585;
  }

  .black-scroll .navbar-nav .nav-link:focus,
  .navbar-light.black-scroll .navbar-nav .nav-link:focus,
  .green-scroll .navbar-nav .nav-link:focus,
  .navbar-light.green-scroll .navbar-nav .nav-link:focus,
  .blue-scroll .navbar-nav .nav-link:focus,
  .navbar-light.blue-scroll .navbar-nav .nav-link:focus,
  .coral-scroll .navbar-nav .nav-link:focus,
  .navbar-light.coral-scroll .navbar-nav .nav-link:focus,
  .black-scroll .navbar-nav .nav-link:hover,
  .navbar-light.black-scroll .navbar-nav .nav-link:hover,
  .green-scroll .navbar-nav .nav-link:hover,
  .navbar-light.green-scroll .navbar-nav .nav-link:hover,
  .blue-scroll .navbar-nav .nav-link:hover,
  .navbar-light.blue-scroll .navbar-nav .nav-link:hover,
  .coral-scroll .navbar-nav .nav-link:hover,
  .navbar-light.coral-scroll .navbar-nav .nav-link:hover {
    color: #bbb;
  }

  .navbar-nav {
    padding-top: 15px;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 0.975rem;
    padding: 12px 0;
    margin-left: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  .navbar .btn {
    font-size: 0.925rem;
    line-height: 1;
    padding: 0.925rem 2.5rem;
    margin-top: 10px;
    margin-left: 0;
  }
  .navbar .btn.btn-tra-white,
  .navbar.scroll .btn.btn-tra-white {
    color: #222;
    border-color: #222;
  }
  .header .btn.tra-hover:hover {
    color: #222;
    background-color: transparent;
    border-color: #222;
  }
  .header .btn.white-hover:hover,
  .header .navbar.scroll .btn.white-hover:hover {
    color: #fff;
    background-color: #333;
    border-color: #333;
  }
  .header .btn.white-hover:hover span,
  .navbar.scroll .btn.white-hover:hover span {
    color: #fff;
  }
  .navbar .btn.tra-hover:hover span,
  .navbar.scroll .btn.tra-hover:hover span {
    color: #333;
  }

  .header .black-scroll .btn.tra-hover:hover,
  .header .green-scroll .btn.tra-hover:hover,
  .header .blue-scroll .btn.tra-hover:hover,
  .header .coral-scroll .btn.tra-hover:hover {
    background-color: transparent;
    border-color: #fff;
  }
  .header .black-scroll .btn.tra-hover:hover span,
  .header .green-scroll .btn.tra-hover:hover span,
  .header .blue-scroll .btn.tra-hover:hover span,
  .header .coral-scroll .btn.tra-hover:hover span {
    color: #fff;
  }

  .dropdown-menu {
    text-align: center;
  }
  .dropdown-item {
    font-size: 1.15rem;
    padding: 0.5rem 1.25rem;
  }

  .header-socials {
    margin: 12px auto 0;
  }
  .header-socials a {
    color: #fff;
    margin-left: 2px;
  }
  .header-socials a,
  .navbar.scroll .header-socials a,
  .navbar-light .header-socials a {
    color: #fff;
  }

  .navbar-expand-lg .nl-simple a:before {
    display: none;
  }
  .navbar-expand-lg .nl-simple a:hover:before,
  .navbar-expand-lg .nl-simple a:focus:before {
    display: none;
  }

  .navbar-light .nav-link:focus,
  .nav-link:focus {
    color: #fff;
    background-color: transparent;
  }

  .header-socials a.ico-facebook,
  .navbar.scroll .header-socials a.ico-facebook {
    background-color: #3b5998;
    border-color: #3b5998;
  }
  .header-socials a.ico-twitter,
  .navbar.scroll .header-socials a.ico-twitter {
    background-color: #00a9ed;
    border-color: #00a9ed;
  }
  .header-socials a.ico-behance,
  .navbar.scroll .header-socials a.ico-behance {
    background-color: #2473f6;
    border-color: #2473f6;
  }
  .header-socials a.ico-google-plus,
  .navbar.scroll .header-socials a.ico-google-plus {
    background-color: #cd1111;
    border-color: #cd1111;
  }
  .header-socials a.ico-linkedin,
  .navbar.scroll .header-socials a.ico-linkedin {
    background-color: #015886;
    border-color: #015886;
  }
  .header-socials a.ico-dribbble,
  .navbar.scroll .header-socials a.ico-dribbble {
    background-color: #d92d84;
    border-color: #d92d84;
  }
  .header-socials a.ico-instagram,
  .navbar.scroll .header-socials a.ico-instagram {
    background-color: #beb3a8;
    border-color: #beb3a8;
  }
  .header-socials a.ico-pinterest,
  .navbar.scroll .header-socials a.ico-pinterest {
    background-color: #ac281a;
    border-color: #ac281a;
  }
  .header-socials a.ico-youtube,
  .navbar.scroll .header-socials a.ico-youtube {
    background-color: #cd1b20;
    border-color: #cd1b20;
  }
  .header-socials a.ico-tumblr,
  .navbar.scroll .header-socials a.ico-tumblr {
    background-color: #3a5976;
    border-color: #3a5976;
  }
  .header-socials a.ico-vk,
  .navbar.scroll .header-socials a.ico-vk {
    background-color: #3b5998;
    border-color: #3b5998;
  }

  .header-socials a:hover {
    color: #fff;
  }

  .header-store img {
    margin-top: 8px;
  }
  .hero-section {
    margin-top: 68px;
  }
  #features-2 {
    padding-bottom: 20px;
  }

  .fbox-2 {
    padding: 0;
    margin-bottom: 60px;
  }
  .fbox-6.pr-30 {
    padding-right: 0;
  }
  .fbox-6.pl-30 {
    padding-left: 0;
  }
  #content-5 {
    padding-bottom: 0;
  }
  #content-6 {
    padding-top: 0;
  }
  #content-5 .bg-inner {
    padding-bottom: 40px;
  }
  #content-6 .bg-inner {
    padding-top: 40px;
  }

  .content-txt,
  #content-8 .content-txt,
  #content-10 .content-txt {
    padding-right: 0;
    padding-left: 0;
  }
  .small-statistic.mt-40 {
    margin-top: 30px;
  }
  .app-devices {
    padding: 5px 0 0 5px;
  }

  .content-txt h3.h3-xl {
    margin-bottom: 15px;
  }
  .content-txt h5.h5-sm {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .content-5-img {
    margin: 0 0 40px 0;
  }
  .content-6-img {
    margin: 0;
  }
  .screenshots-wrap {
    margin-bottom: 80px;
  }
  .screens-section .slick-dots {
    bottom: -80px;
  }
  #video-2 .video-preview {
    margin-bottom: -80px;
  }

  .review-1 {
    margin-bottom: 20px;
  }
  #faqs-page {
    margin-top: 140px;
    margin-bottom: 55px;
  }
  #faqs-left {
    padding-right: 15px;
  }
  #faqs-right {
    padding-left: 15px;
  }

  .question {
    margin-bottom: 22px;
  }
  .question h5 {
    margin-bottom: 5px;
  }

  .more-questions-btn {
    margin-top: 30px;
  }

  .sidebar-div.mb-40 {
    margin-bottom: 30px;
  }
  .sidebar-div.mb-50 {
    margin-bottom: 40px;
  }
  #sidebar-right #text-widget {
    margin-bottom: 0;
  }

  #sidebar-right h5.h5-sm,
  #sidebar-left h5.h5-sm {
    margin-bottom: 20px;
  }
  #leave-comment.mt-80 {
    margin-top: 50px;
  }

  #contacts-2 .form-holder {
    margin-right: 0;
    margin-left: 0;
  }

  .footer h5 {
    margin-bottom: 20px;
  }

  .footer-stores-badge.text-right {
    text-align: left !important;
  }

  #footer-3 .foo-links li,
  .bottom-footer .foo-links li {
    margin-left: 15px;
  }
  #footer-5 .foo-links li {
    margin: 0 8px;
  }

  #footer-5 .foo-logo {
    text-align: center;
    margin-bottom: 25px;
  }
  #footer-5 .footer-links {
    margin-bottom: 10px;
  }
  #footer-5 .footer-copyright {
    padding-bottom: 60px;
  }

  #terms-page {
    margin-top: 140px;
    margin-bottom: 50px;
  }
  .terms-box {
    margin-bottom: 30px;
  }
  .terms-box h4 {
    margin-bottom: 15px;
  }
  .terms-box p span {
    font-size: 1rem;
    margin-right: 2px;
  }
}
@media (min-width: 576px) and (max-width: 767.99px) {
  h5.h5-xs {
    font-size: 1.166rem;
  }
  h5.h5-sm {
    font-size: 1.166rem;
  }
  h5.h5-md {
    font-size: 1.166rem;
  }
  h5.h5-lg {
    font-size: 1.166rem;
  }
  h5.h5-xl {
    font-size: 1.2rem;
  }

  h4.h4-xs {
    font-size: 1.25rem;
  }
  h4.h4-sm {
    font-size: 1.3rem;
  }
  h4.h4-md {
    font-size: 1.3rem;
  }
  h4.h4-lg {
    font-size: 1.366rem;
  }
  h4.h4-xl {
    font-size: 1.4rem;
  }
  h3.h3-xs {
    font-size: 1.45rem;
  }
  h3.h3-sm {
    font-size: 1.54rem;
  }
  h3.h3-md {
    font-size: 1.625rem;
  }
  h3.h3-lg {
    font-size: 1.7rem;
  }
  h3.h3-xl {
    font-size: 1.85rem;
  }
  h2.h2-xs {
    font-size: 1.9rem;
  }
  h2.h2-sm {
    font-size: 1.95rem;
  }
  h2.h2-md {
    font-size: 2rem;
  }
  h2.h2-lg {
    font-size: 2.1rem;
  }
  h2.h2-xl {
    font-size: 2.2rem;
  }
  h2.h2-huge {
    font-size: 2.85rem;
  }
  p.p-sm {
    font-size: 1.066rem;
  }
  p {
    font-size: 1.066rem;
  }
  p.p-md {
    font-size: 1.066rem;
  }
  p.p-lg {
    font-size: 1.1rem;
  }
  p.p-xl {
    font-size: 1.1rem;
  }
  .btn.btn-sm {
    font-size: 0.925rem;
    padding: 0.785rem 1.75rem;
  }
  .btn {
    font-size: 1rem;
    padding: 0.825rem 1.65rem;
  }
  .btn.btn-md {
    font-size: 1rem;
    padding: 0.925rem 1.9rem;
  }
  .btn.btn-lg {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  .video-btn {
    width: 90px;
    height: 90px;
    margin-top: -45px;
    margin-left: -45px;
    line-height: 80px !important;
  }
  .stores-badge {
    margin-top: 25px;
  }
  a.store {
    margin-right: 10px;
  }

  /* App Devices Icons */
  .app-devices {
    padding: 10px 0 0 5px;
  }
  .app-devices .svg-inline--fa {
    font-size: 3rem;
  }
  .app-devices .svg-inline--fa.f-phone {
    margin-right: 1rem;
  }
  .app-devices-desc p {
    font-size: 1.066rem;
    padding-right: 5%;
  }
  ul.content-list li {
    font-size: 1.066rem;
  }
  span.section-id {
    margin-bottom: 18px;
  }
  .section-title {
    margin-bottom: 40px;
  }
  .section-title p {
    margin-top: 12px;
  }
  .section-title.text-center p {
    padding: 0 8%;
  }
  #hero-1 {
    padding-top: 80px;
    padding-bottom: 0;
  }
  #hero-1 .hero-txt {
    margin-top: 0;
    margin-bottom: 40px;
  }
  #hero-1 .hero-txt {
    padding: 0;
    text-align: center !important;
  }

  .hero-app-logo {
    margin-bottom: 20px;
  }
  .hero-app-logo img {
    width: 90px;
    height: auto;
  }
  #hero-1 h2 {
    font-size: 3.25rem;
    letter-spacing: -1px;
    margin-bottom: 15px;
  }
  #hero-1 h3 {
    margin-bottom: 15px;
  }
  #hero-1 .hero-txt p {
    padding: 0 5%;
  }
  .hero-section .newsletter-form {
    margin-top: 30px;
    margin: 0 5%;
  }
  .hero-section .newsletter-form .form-control {
    height: 54px;
  }
  .hero-section .newsletter-form .btn {
    height: 54px;
  }

  .hero-links {
    margin-top: 0;
  }
  .hero-links span {
    font-size: 0.875rem;
    line-height: 1;
    margin-right: 10px;
  }

  .hero-1-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .fbox-3 {
    padding: 60px 15% 45px;
  }
  .fbox-4,
  .fbox-6,
  .fbox-7 {
    text-align: center !important;
  }

  .fbox-1 h5,
  .fbox-4 h5,
  .fbox-6 h5 {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .fbox-2 h5,
  .fbox-3 h5 {
    margin-top: 35px;
    margin-bottom: 10px;
  }
  .fbox-1 p,
  .fbox-2 p,
  .fbox-4 p,
  .fbox-6 p,
  .fbox-7 p {
    padding: 0 12%;
  }
  h2.tra-digit {
    font-size: 4.25rem;
    margin-bottom: 10px;
    margin-left: 0;
  }

  #features-4 .features-img {
    margin: 20px 15% 0;
  }
  #features-5 .features-img {
    margin: 0 15% 50px;
  }
  .fbox-6-img {
    display: none;
  }
  #content-4 {
    padding-bottom: 40px;
  }

  #content-9 p {
    padding: 0 5%;
  }

  .content-boxes {
    padding: 30px 20px 0;
    margin: 0 0 -80px;
  }
  .cbox-1 {
    margin-bottom: 30px;
  }
  .cbox-1-txt {
    padding-left: 15px;
  }

  #content-1 .content-img {
    margin: 20px 10% 40px;
  }
  #content-2 .content-img {
    margin: 0 10% 40px;
  }
  #content-3 .content-img,
  .content-5-img,
  .content-6-img {
    padding-left: 10%;
    padding-right: 10%;
  }
  .content-4-img {
    margin: 0 0 40px;
  }
  .content-7-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* VIDEO */
  #video-1 {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  #video-1 h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #video-2 .video-preview {
    margin-bottom: -80px;
  }

  /* PPRICING */
  .pricing-section .col-md-4,
  .pricing-page-section .col-md-4 {
    padding: 0 12%;
  }
  .pricing-table,
  #pricing-2 .pricing-table {
    padding: 60px 50px;
  }

  .pricing-table span.price,
  #pricing-2 .price span {
    font-size: 62px;
  }
  .pricing-plan sup,
  #pricing-2 .price sup {
    font-size: 40px;
  }
  .pricing-plan sup.pricing-coins {
    font-size: 35px;
  }
  p.validity {
    font-size: 1.066rem;
    margin-top: 5px;
  }
  #pricing-2 .price span.price-vat {
    font-size: 1.066rem;
    line-height: 1.3;
    padding: 0 14%;
  }
  .pricing-text p {
    font-size: 16px;
    line-height: 24px;
  }

  /* TESTIMONIALS */
  .review-1 p,
  .review-2 p,
  .review-3 p,
  .review-1 .review-author span,
  .review-2 .review-author span {
    font-size: 1.066rem;
  }
  .review-author h5,
  #reviews-3 .review-author h5 {
    font-size: 1.166rem;
  }
  .statistic-block p.statistic-number {
    font-size: 2.75rem;
    margin-bottom: 10px;
  }
  .statistic-block p {
    font-size: 1.066rem;
  }
  #brands-2 {
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .m-img {
    display: inline-block;
    padding: 40px;
  }
  .m-img img {
    width: 100px;
    height: 100px;
  }

  .more-app-box h5 {
    margin-bottom: 8px;
    margin-top: 25px;
  }
  .more-app-box span.app-cat {
    font-size: 1.066rem;
    margin-bottom: 10px;
  }
  .more-app-box p {
    padding: 0 12%;
  }
  .m-links a {
    font-size: 1.066rem;
  }

  /* PRESS */
  #press-1 .col-md-3 {
    padding-right: 15px;
    padding-left: 15px;
  }
  .press-logo {
    padding: 60px 30px;
  }
  .press-txt p {
    margin-bottom: 30px;
    padding: 0;
  }
  .press-txt.mt-20 {
    margin-top: 0;
  }
  #faqs-page h4.h4-xs {
    margin-bottom: 20px;
  }
  .newsletter-section .newsletter-form .form-control {
    height: 56px;
    font-size: 1.066rem;
  }
  .newsletter-section .newsletter-form .btn {
    height: 56px;
  }

  .newsletter-txt p {
    padding: 0 10%;
  }
  #sidebar-right {
    margin-top: 50px;
  }
  #sidebar-left {
    margin-bottom: 50px;
  }
  .register-form .btn {
    height: 54px;
  }

  .register-form p {
    padding: 0 5%;
  }
  .bottom-footer .footer-links.text-right {
    text-align: left !important;
    margin-top: 15px;
  }

  .footer-socials-links.text-right {
    text-align: left !important;
  }
  #footer-3 .foo-links li,
  .bottom-footer .foo-links li {
    margin-left: 0;
    margin-right: 15px;
  }

  .foo-links li a,
  .footer-copyright p,
  #footer-3 .foo-links li a,
  #footer-5 .foo-links li a,
  .bottom-footer .foo-links li a {
    font-size: 1.066rem;
  }

  #footer-3 .footer-copyright {
    margin-bottom: 15px;
  }
  #footer-3 .footer-links.text-right {
    text-align: left !important;
  }
  #footer-5 .footer-socials-links.text-right {
    text-align: center !important;
    margin-bottom: 17px;
  }

  /* QUICK FORM */
  .bottom-form {
    min-width: 240px;
    max-width: 240px;
  }
  .bottom-form-header {
    padding: 10px 16px;
  }
  .bottom-form-header span {
    right: 10px;
    top: -30px;
    width: 50px;
    height: 50px;
    line-height: 50px !important;
  }
  .bottom-form-header .svg-inline--fa {
    font-size: 1.65rem;
  }
}

@media (max-width: 575px) {
  html {
    font-size: 14px;
  }
  p.p-sm {
    font-size: 1.1425rem;
  }
  p {
    font-size: 1.1425rem;
  }
  p.p-md {
    font-size: 1.1425rem;
  }
  p.p-lg {
    font-size: 1.1785rem;
  }
  p.p-xl {
    font-size: 1.1785rem;
  }
  .btn.btn-sm {
    font-size: 0.75rem;
    padding: 0.785rem 1.75rem;
  }
  .btn {
    font-size: 0.8125rem;
    padding: 0.825rem 1.65rem;
  }
  .btn.btn-md {
    font-size: 0.9rem;
    padding: 0.925rem 1.9rem;
  }
  .btn.btn-lg {
    font-size: 0.9rem;
    padding: 1rem 2rem;
  }
  .video-btn {
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    line-height: 70px !important;
  }
  .stores-badge {
    margin-top: 30px;
  }
  a.store {
    margin-right: 10px;
  }
  .app-devices {
    padding: 10px 0 0 5px;
  }
  .app-devices .svg-inline--fa {
    font-size: 3rem;
  }
  .app-devices .svg-inline--fa.f-phone {
    margin-right: 1rem;
  }
  .app-devices-desc p {
    font-size: 1.075rem;
    padding-right: 5%;
  }

  .box-icon-sm [class^="ti-"],
  .box-icon-sm [class*=" ti-"] {
    font-size: 3.15rem;
  }
  .box-icon [class^="ti-"],
  .box-icon [class*=" ti-"] {
    font-size: 3.6rem;
  }
  .box-icon-md [class^="ti-"],
  .box-icon-md [class*=" ti-"] {
    font-size: 3.75rem;
  }
  .box-icon-lg [class^="ti-"],
  .box-icon-md [class*=" ti-"] {
    font-size: 4rem;
  }

  /* Content List */
  ul.content-list li {
    font-size: 1.1425rem;
  }

  /* Section ID */
  span.section-id {
    margin-bottom: 18px;
  }

  /* Section Title */
  .section-title {
    margin-bottom: 40px;
  }
  .section-title p {
    margin-top: 12px;
  }
  .section-title.text-center p {
    padding: 0;
  }

  #hero-1 {
    padding-top: 80px;
    padding-bottom: 0;
  }
  #hero-1 .hero-txt {
    margin-top: 0;
    margin-bottom: 40px;
  }
  #hero-1 .hero-txt {
    text-align: center;
  }
  .hero-app-logo {
    margin-bottom: 20px;
  }
  .hero-app-logo img {
    width: 90px;
    height: auto;
  }
  .hero-section .newsletter-form {
    margin-top: 30px;
    margin: 0 5%;
  }
  .hero-section .newsletter-form .form-control {
    height: 54px;
    font-size: 1.1425rem;
  }
  .hero-section .newsletter-form .btn {
    height: 54px;
  }

  #sidebar-right {
    margin-top: 50px;
  }
  #sidebar-left {
    margin-bottom: 50px;
  }

  /* FOOTER */
  .bottom-footer .footer-links.text-right {
    text-align: left !important;
    margin-top: 15px;
  }

  .footer-socials-links.text-right {
    text-align: left !important;
  }
  #footer-3 .foo-links li,
  .bottom-footer .foo-links li {
    margin-left: 0;
    margin-right: 15px;
  }

  #footer-3 .footer-copyright {
    margin-bottom: 15px;
  }
  #footer-3 .footer-links.text-right {
    text-align: left !important;
  }
  #footer-5 .footer-socials-links.text-right {
    text-align: center !important;
    margin-bottom: 17px;
  }
}

@media (min-width: 416px) and (max-width: 575.99px) {
  h5.h5-xs {
    font-size: 1.25rem;
  }
  h5.h5-sm {
    font-size: 1.25rem;
  }
  h5.h5-md {
    font-size: 1.25rem;
  }
  h5.h5-lg {
    font-size: 1.25rem;
  }
  h5.h5-xl {
    font-size: 1.25rem;
  }

  h4.h4-xs {
    font-size: 1.25rem;
  }
  h4.h4-sm {
    font-size: 1.25rem;
  }
  h4.h4-md {
    font-size: 1.275rem;
  }
  h4.h4-lg {
    font-size: 1.3rem;
  }
  h4.h4-xl {
    font-size: 1.35rem;
  }

  /* Header H3 */
  h3.h3-xs {
    font-size: 1.45rem;
  }
  h3.h3-sm {
    font-size: 1.55rem;
  }
  h3.h3-md {
    font-size: 1.65rem;
  }
  h3.h3-lg {
    font-size: 1.75rem;
  }
  h3.h3-xl {
    font-size: 1.95rem;
  }

  /* Header H2 */
  h2.h2-xs {
    font-size: 2rem;
  }
  h2.h2-sm {
    font-size: 2rem;
  }
  h2.h2-md {
    font-size: 2.25rem;
  }
  h2.h2-lg {
    font-size: 2.25rem;
  }
  h2.h2-xl {
    font-size: 2.45rem;
  }
  h2.h2-huge {
    font-size: 2.45rem;
  }
  a.store {
    display: block;
    margin-right: 0;
    margin-bottom: 10px;
  }
  span.section-id {
    margin-bottom: 15px;
  }
  .navbar-expand-lg > .container {
    padding-right: 5px;
    padding-left: 5px;
  }
  .hero-section {
    margin-top: 60px;
  }
  #hero-1 h2 {
    font-size: 3rem;
    letter-spacing: -1px;
    margin-bottom: 15px;
  }
  #hero-1 h3 {
    padding: 0 5%;
    margin-bottom: 15px;
  }
  #hero-1 .hero-txt p {
    padding: 0 2%;
  }
  .hero-section .newsletter-form {
    margin: 30px 2% 0;
  }
  .hero-links {
    margin-top: 0;
  }
  .hero-links span {
    display: block;
    font-size: 1rem;
    margin: 0;
    margin-bottom: 12px;
  }

  /* Hero Images */
  .hero-1-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .fbox-3 {
    padding: 60px 15% 45px;
  }
  .fbox-4,
  .fbox-6,
  .fbox-7 {
    text-align: center !important;
  }

  .fbox-1 h5,
  .fbox-4 h5,
  .fbox-6 h5 {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .fbox-2 h5,
  .fbox-3 h5 {
    margin-top: 35px;
    margin-bottom: 10px;
  }
  .fbox-1 p,
  .fbox-2 p,
  .fbox-4 p,
  .fbox-6 p,
  .fbox-7 p {
    padding: 0 8%;
  }
  h2.tra-digit {
    font-size: 4.25rem;
    margin-bottom: 10px;
    margin-left: 0;
  }

  #features-4 .features-img {
    margin: 20px 10% 0;
  }
  #features-5 .features-img {
    margin: 0 10% 50px;
  }
  .fbox-6-img {
    display: none;
  }

  /* CONTENT */
  #content-4 {
    padding-bottom: 40px;
  }

  .small-statistic .col-sm-4 {
    width: 50%;
    float: left;
  }

  #content-9 p {
    padding: 0 3%;
  }

  .content-boxes {
    padding: 30px 20px 0;
    margin: 0 0 -80px;
  }
  .cbox-1 {
    margin-bottom: 30px;
  }
  .cbox-1-txt {
    padding-left: 15px;
  }

  #content-1 .content-img {
    margin: 20px 5% 40px;
  }
  #content-2 .content-img {
    margin: 0 5% 40px;
  }
  #content-3 .content-img,
  .content-5-img,
  .content-6-img {
    padding-left: 5%;
    padding-right: 5%;
  }
  .content-4-img {
    margin: 0 0 40px;
  }
  .content-7-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* SCREENS */
  #screens-1 .screenshots-wrap {
    width: 298px;
    margin: 10px auto;
  }
  #screens-1 .carousel-item {
    width: 298px;
    margin: 0;
    text-align: center;
  }
  #screens-1 .carousel-item img {
    width: 298px;
    text-align: center;
  }

  .carousel-item {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  /* VIDEO */
  #video-1 {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  #video-1 h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #video-2 .video-preview {
    margin-bottom: -80px;
  }

  /* PPRICING */
  .pricing-section .col-md-4,
  .pricing-page-section .col-md-4 {
    padding: 0 30px;
  }
  .pricing-table,
  #pricing-2 .pricing-table {
    padding: 60px 30px;
  }

  .pricing-table span.price,
  #pricing-2 .price span {
    font-size: 62px;
  }
  .pricing-plan sup,
  #pricing-2 .price sup {
    font-size: 40px;
  }
  .pricing-plan sup.pricing-coins {
    font-size: 35px;
  }
  p.validity {
    font-size: 1.066rem;
    margin-top: 5px;
  }
  #pricing-2 .price span.price-vat {
    font-size: 1.1425rem;
    line-height: 1.3;
    padding: 0 3%;
  }
  .pricing-text p {
    font-size: 16px;
    line-height: 24px;
  }

  /* TESTIMONIALS */
  .review-1 p,
  .review-2 p,
  .review-3 p,
  .review-1 .review-author span,
  .review-2 .review-author span {
    font-size: 1.1425rem;
  }
  .review-author h5,
  #reviews-3 .review-author h5 {
    font-size: 1.25rem;
  }

  .statistic-block p.statistic-number {
    font-size: 2.75rem;
    margin-bottom: 10px;
  }
  #statistic-2 .statistic-block p.statistic-number {
    margin-top: 10px;
  }
  .statistic-block p {
    font-size: 1.025rem;
  }
  .m-img {
    display: inline-block;
    padding: 30px;
  }
  .m-img img {
    width: 100px;
    height: 100px;
  }

  .more-app-box h5 {
    margin-bottom: 8px;
    margin-top: 25px;
  }
  .more-app-box span.app-cat {
    font-size: 1.1425rem;
    margin-bottom: 10px;
  }
  .more-app-box p {
    padding: 0 8%;
  }
  .m-links a {
    font-size: 1.1425rem;
  }

  /* PRESS */
  #press-1 .col-md-3 {
    padding-right: 15px;
    padding-left: 15px;
  }
  .press-logo {
    padding: 60px 30px;
  }
  .press-txt p {
    margin-bottom: 30px;
    padding: 0;
  }
  .press-txt.mt-20 {
    margin-top: 0;
  }
  #faqs-page h4.h4-xs {
    margin-bottom: 20px;
  }
  .newsletter-section .newsletter-form .form-control {
    height: 54px;
    font-size: 1.1425rem;
  }
  .newsletter-section .newsletter-form .btn {
    height: 54px;
  }

  .newsletter-txt p {
    padding: 0;
  }
  .foo-links li a,
  .footer-copyright p,
  #footer-3 .foo-links li a,
  #footer-5 .foo-links li a,
  .bottom-footer .foo-links li a {
    font-size: 1.1425rem;
  }
}
@media (min-width: 321px) and (max-width: 415px) {
  h5.h5-xs {
    font-size: 1.25rem;
  }
  h5.h5-sm {
    font-size: 1.25rem;
  }
  h5.h5-md {
    font-size: 1.25rem;
  }
  h5.h5-lg {
    font-size: 1.25rem;
  }
  h5.h5-xl {
    font-size: 1.25rem;
  }

  h4.h4-xs {
    font-size: 1.25rem;
  }
  h4.h4-sm {
    font-size: 1.25rem;
  }
  h4.h4-md {
    font-size: 1.275rem;
  }
  h4.h4-lg {
    font-size: 1.3rem;
  }
  h4.h4-xl {
    font-size: 1.35rem;
  }

  /* Header H3 */
  h3.h3-xs {
    font-size: 1.45rem;
  }
  h3.h3-sm {
    font-size: 1.55rem;
  }
  h3.h3-md {
    font-size: 1.65rem;
  }
  h3.h3-lg {
    font-size: 1.75rem;
  }
  h3.h3-xl {
    font-size: 1.95rem;
  }

  /* Header H2 */
  h2.h2-xs {
    font-size: 2rem;
  }
  h2.h2-sm {
    font-size: 2rem;
  }
  h2.h2-md {
    font-size: 2.25rem;
  }
  h2.h2-lg {
    font-size: 2.25rem;
  }
  h2.h2-xl {
    font-size: 2.45rem;
  }
  h2.h2-huge {
    font-size: 2.45rem;
  }
  a.store {
    display: block;
    margin-right: 0;
    margin-bottom: 10px;
  }

  /* Section ID */
  span.section-id {
    margin-bottom: 15px;
  }
  .navbar-expand-lg > .container {
    padding-right: 5px;
    padding-left: 5px;
  }
  .hero-section {
    margin-top: 60px;
  }
  #hero-1 h2 {
    font-size: 3rem;
    letter-spacing: -1px;
    margin-bottom: 15px;
  }
  #hero-1 h3 {
    padding: 0 5%;
    margin-bottom: 15px;
  }
  #hero-1 .hero-txt p {
    padding: 0 2%;
  }
  .hero-section .newsletter-form {
    margin: 30px 2% 0;
  }

  /* Hero Links */
  .hero-links {
    margin-top: 0;
  }
  .hero-links span {
    display: block;
    font-size: 1rem;
    margin: 0;
    margin-bottom: 12px;
  }
  .hero-1-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .fbox-3 {
    padding: 60px 10% 45px;
  }
  .fbox-4,
  .fbox-6,
  .fbox-7 {
    text-align: center !important;
  }

  .fbox-1 h5,
  .fbox-4 h5,
  .fbox-6 h5 {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .fbox-2 h5,
  .fbox-3 h5 {
    margin-top: 35px;
    margin-bottom: 10px;
  }
  .fbox-1 p,
  .fbox-2 p,
  .fbox-4 p,
  .fbox-6 p,
  .fbox-7 p {
    padding: 0 5%;
  }
  h2.tra-digit {
    font-size: 4.25rem;
    margin-bottom: 10px;
    margin-left: 0;
  }

  #features-4 .features-img {
    margin: 20px 10% 0;
  }
  #features-5 .features-img {
    margin: 0 10% 50px;
  }
  .fbox-6-img {
    display: none;
  }

  /* CONTENT */
  #content-4 {
    padding-bottom: 40px;
  }

  .small-statistic .col-sm-4 {
    width: 50%;
    float: left;
  }

  #content-9 p {
    padding: 0;
  }
  #content-10 .content-txt p {
    padding: 0;
  }

  .content-boxes {
    padding: 30px 20px 0;
    margin: 0 0 -80px;
  }
  .cbox-1 {
    margin-bottom: 30px;
  }
  .cbox-1-txt {
    padding-left: 15px;
  }

  #content-1 .content-img {
    margin: 20px 5% 40px;
  }
  #content-2 .content-img {
    margin: 0 5% 40px;
  }
  #content-3 .content-img,
  .content-5-img,
  .content-6-img {
    padding-left: 5%;
    padding-right: 5%;
  }
  .content-4-img {
    margin: 0 0 40px;
  }
  .content-7-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* SCREENS */
  #screens-1 .screenshots-wrap {
    width: 298px;
    margin: 10px auto;
  }
  #screens-1 .carousel-item {
    width: 298px;
    margin: 0;
    text-align: center;
  }
  #screens-1 .carousel-item img {
    width: 298px;
    text-align: center;
  }

  .carousel-item {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  /* VIDEO */
  #video-1 {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  #video-1 h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #video-2 .video-preview {
    margin-bottom: -80px;
  }

  /* PPRICING */
  .pricing-section .col-md-4,
  .pricing-page-section .col-md-4 {
    padding: 0 30px;
  }
  .pricing-table,
  #pricing-2 .pricing-table {
    padding: 60px 30px;
  }

  .pricing-table span.price,
  #pricing-2 .price span {
    font-size: 62px;
  }
  .pricing-plan sup,
  #pricing-2 .price sup {
    font-size: 40px;
  }
  .pricing-plan sup.pricing-coins {
    font-size: 35px;
  }
  p.validity {
    font-size: 1.066rem;
    margin-top: 5px;
  }
  #pricing-2 .price span.price-vat {
    font-size: 1.1425rem;
    line-height: 1.3;
    padding: 0 3%;
  }
  .pricing-text p {
    font-size: 16px;
    line-height: 24px;
  }

  /* TESTIMONIALS */
  .review-1 p,
  .review-2 p,
  .review-3 p,
  .review-1 .review-author span,
  .review-2 .review-author span {
    font-size: 1.1425rem;
  }
  .review-author h5,
  #reviews-3 .review-author h5 {
    font-size: 1.25rem;
  }
  .statistic-block p.statistic-number {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  #statistic-2 .statistic-block p.statistic-number {
    margin-top: 10px;
  }
  .statistic-block p {
    font-size: 1.025rem;
  }
  .m-img {
    display: inline-block;
    padding: 30px;
  }
  .m-img img {
    width: 100px;
    height: 100px;
  }

  .more-app-box h5 {
    margin-bottom: 8px;
    margin-top: 25px;
  }
  .more-app-box span.app-cat {
    font-size: 1.1425rem;
    margin-bottom: 10px;
  }
  .more-app-box p {
    padding: 0 5%;
  }
  .m-links a {
    font-size: 1.1425rem;
  }

  /* PRESS */
  #press-1 .col-md-3 {
    padding-right: 15px;
    padding-left: 15px;
  }
  .press-logo {
    padding: 60px 30px;
  }
  .press-txt p {
    margin-bottom: 30px;
    padding: 0;
  }
  .press-txt.mt-20 {
    margin-top: 0;
  }

  /* FAQs */
  #faqs-page h4.h4-xs {
    margin-bottom: 20px;
  }

  .newsletter-section .newsletter-form .form-control {
    height: 54px;
    font-size: 1.1425rem;
  }
  .newsletter-section .newsletter-form .btn {
    height: 54px;
  }

  .newsletter-txt p {
    padding: 0;
  }

  .form-control,
  .register-form .form-control,
  .custom-select {
    height: 52px;
    font-size: 1.1425rem;
  }
  .register-form .btn {
    height: 52px;
  }

  .register-form label.error,
  .contact-form label.error,
  .register-form-msg .error,
  .contact-form-msg .error,
  .register-form-msg .loading,
  .contact-form-msg .loading {
    font-size: 1.1425rem;
  }
  .foo-links li a,
  .footer-copyright p,
  #footer-3 .foo-links li a,
  #footer-5 .foo-links li a,
  .bottom-footer .foo-links li a {
    font-size: 1.1425rem;
  }
}
@media (max-width: 320px) {
  h5.h5-xs {
    font-size: 1.25rem;
  }
  h5.h5-sm {
    font-size: 1.25rem;
  }
  h5.h5-md {
    font-size: 1.25rem;
  }
  h5.h5-lg {
    font-size: 1.25rem;
  }
  h5.h5-xl {
    font-size: 1.25rem;
  }

  h4.h4-xs {
    font-size: 1.25rem;
  }
  h4.h4-sm {
    font-size: 1.25rem;
  }
  h4.h4-md {
    font-size: 1.275rem;
  }
  h4.h4-lg {
    font-size: 1.3rem;
  }
  h4.h4-xl {
    font-size: 1.35rem;
  }

  /* Header H3 */
  h3.h3-xs {
    font-size: 1.45rem;
  }
  h3.h3-sm {
    font-size: 1.55rem;
  }
  h3.h3-md {
    font-size: 1.65rem;
  }
  h3.h3-lg {
    font-size: 1.75rem;
  }
  h3.h3-xl {
    font-size: 1.95rem;
  }

  /* Header H2 */
  h2.h2-xs {
    font-size: 2rem;
  }
  h2.h2-sm {
    font-size: 2rem;
  }
  h2.h2-md {
    font-size: 2.25rem;
  }
  h2.h2-lg {
    font-size: 2.25rem;
  }
  h2.h2-xl {
    font-size: 2.45rem;
  }
  h2.h2-huge {
    font-size: 2.45rem;
  }
  a.store {
    display: block;
    margin-right: 0;
    margin-bottom: 10px;
  }
  span.section-id {
    margin-bottom: 15px;
  }
  .navbar-expand-lg > .container {
    padding-right: 5px;
    padding-left: 5px;
  }
  .hero-section {
    margin-top: 60px;
  }
  #hero-1 h2 {
    font-size: 3rem;
    letter-spacing: -1px;
    margin-bottom: 15px;
  }
  #hero-1 h3 {
    padding: 0 5%;
    margin-bottom: 15px;
  }
  #hero-1 .hero-txt p {
    padding: 0 2%;
  }
  .hero-section .newsletter-form {
    margin: 30px 2% 0;
  }

  /* Hero Links */
  .hero-links {
    margin-top: 0;
  }
  .hero-links span {
    display: block;
    font-size: 1rem;
    margin: 0;
    margin-bottom: 12px;
  }
  .hero-1-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .fbox-3 {
    padding: 60px 10% 45px;
  }
  .fbox-4,
  .fbox-6,
  .fbox-7 {
    text-align: center !important;
  }

  .fbox-1 h5,
  .fbox-4 h5,
  .fbox-6 h5 {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .fbox-2 h5,
  .fbox-3 h5 {
    margin-top: 35px;
    margin-bottom: 10px;
  }
  .fbox-1 p,
  .fbox-2 p,
  .fbox-4 p,
  .fbox-6 p,
  .fbox-7 p {
    padding: 0 5%;
  }
  h2.tra-digit {
    font-size: 4.25rem;
    margin-bottom: 10px;
    margin-left: 0;
  }

  #features-4 .features-img {
    margin: 20px 10% 0;
  }
  #features-5 .features-img {
    margin: 0 10% 50px;
  }
  .fbox-6-img {
    display: none;
  }

  /* CONTENT */
  #content-4 {
    padding-bottom: 40px;
  }

  .small-statistic .col-sm-4 {
    width: 50%;
    float: left;
  }

  #content-9 p {
    padding: 0;
  }
  #content-10 .content-txt p {
    padding: 0;
  }

  .content-boxes {
    padding: 30px 20px 0;
    margin: 0 0 -80px;
  }
  .cbox-1 {
    margin-bottom: 30px;
  }
  .cbox-1-txt {
    padding-left: 15px;
  }

  #content-1 .content-img {
    margin: 20px 5% 40px;
  }
  #content-2 .content-img {
    margin: 0 5% 40px;
  }
  #content-3 .content-img,
  .content-5-img,
  .content-6-img {
    padding-left: 5%;
    padding-right: 5%;
  }
  .content-4-img {
    margin: 0 0 40px;
  }
  .content-7-img img {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #screens-1 .screenshots-wrap {
    width: 298px;
    margin: 10px auto;
  }
  #screens-1 .carousel-item {
    width: 298px;
    margin: 0;
    text-align: center;
  }
  #screens-1 .carousel-item img {
    width: 298px;
    text-align: center;
  }

  .carousel-item {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  /* VIDEO */
  #video-1 {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  #video-1 h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #video-2 .video-preview {
    margin-bottom: -80px;
  }

  /* PPRICING */
  .pricing-section .col-md-4,
  .pricing-page-section .col-md-4 {
    padding: 0 30px;
  }
  .pricing-table,
  #pricing-2 .pricing-table {
    padding: 60px 30px;
  }

  .pricing-table span.price,
  #pricing-2 .price span {
    font-size: 62px;
  }
  .pricing-plan sup,
  #pricing-2 .price sup {
    font-size: 40px;
  }
  .pricing-plan sup.pricing-coins {
    font-size: 35px;
  }
  p.validity {
    font-size: 1.066rem;
    margin-top: 5px;
  }
  #pricing-2 .price span.price-vat {
    font-size: 1.1425rem;
    line-height: 1.3;
    padding: 0 3%;
  }
  .pricing-text p {
    font-size: 16px;
    line-height: 24px;
  }

  /* TESTIMONIALS */
  .review-1 p,
  .review-2 p,
  .review-3 p,
  .review-1 .review-author span,
  .review-2 .review-author span {
    font-size: 1.1425rem;
  }
  .review-author h5,
  #reviews-3 .review-author h5 {
    font-size: 1.25rem;
  }

  /* STATISTIC */
  .statistic-block p.statistic-number {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  #statistic-2 .statistic-block p.statistic-number {
    margin-top: 10px;
  }
  .statistic-block p {
    font-size: 1.025rem;
  }
  .m-img {
    display: inline-block;
    padding: 30px;
  }
  .m-img img {
    width: 100px;
    height: 100px;
  }

  .more-app-box h5 {
    margin-bottom: 8px;
    margin-top: 25px;
  }
  .more-app-box span.app-cat {
    font-size: 1.1425rem;
    margin-bottom: 10px;
  }
  .more-app-box p {
    padding: 0 5%;
  }
  .m-links a {
    font-size: 1.1425rem;
  }
  #press-1 .col-md-3 {
    padding-right: 15px;
    padding-left: 15px;
  }
  .press-logo {
    padding: 60px 30px;
  }
  .press-txt p {
    margin-bottom: 30px;
    padding: 0;
  }
  .press-txt.mt-20 {
    margin-top: 0;
  }

  #faqs-page h4.h4-xs {
    margin-bottom: 20px;
  }
  .newsletter-section .newsletter-form .form-control {
    height: 54px;
    font-size: 1.1425rem;
  }
  .newsletter-section .newsletter-form .btn {
    height: 54px;
  }

  .newsletter-txt p {
    padding: 0;
  }

  .contact-form .form-control,
  .register-form .form-control,
  .contact-form .custom-select {
    height: 52px;
    font-size: 1.1425rem;
  }
  .register-form .btn {
    height: 52px;
  }

  .register-form label.error,
  .contact-form label.error,
  .register-form-msg .error,
  .contact-form-msg .error,
  .register-form-msg .loading,
  .contact-form-msg .loading {
    font-size: 1.1425rem;
  }
  .foo-links li a,
  .footer-copyright p,
  #footer-3 .foo-links li a,
  #footer-5 .foo-links li a,
  .bottom-footer .foo-links li a {
    font-size: 1.1425rem;
  }
}
@media (min-width: 320px) and (max-width: 991px) {
  .event-img-meta {
    padding: 15px;
  }
  .event-img-meta h5 .h5-md {
    font-size: 1.875rem;
  }
  .event-img-meta p {
    font-size: 1rem;
  }
  .gallery-item:hover .image-zoom {
    margin-top: -15px;
    margin-left: -8px;
  }
}
`,id:'first_1',name:'Home'},
    { component:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel='stylesheet' href='sixth.css' type='text/css' media='all' />
    <link
    rel="stylesheet"
    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
    />
    <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto%3A300%2Cregular%2C500%2C700%2C900%7CMontserrat%3A300%2Cregular%2C500%2C600%2C700%2C800%2C900&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel='stylesheet' href='https://app-landing-theme-01.netlify.app/theme.css' type='text/css' media='all' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto%3A300%7CMontserrat%3A700%2C600&#038;ver=1629878706' type='text/css' media='all' />
    
    </head>
    <body>
        <div id="post-6" class=" page type-page status-publish hentry single-page-details">
          <section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="fixed" class="vc_section">
                <div id="hero-1" class="bg-white  hero-section  bg-fixed"><div >
                    <div class="container">
                        <div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit"
                        ><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra hero-txt hero-1-txt">
                            <div class="vc_column-inner"><div class="wpb_wrapper ">
            <div class="hero-txt">
                <h2 class=" wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">Terms and conditions</h2>
                <h3 class="h3-sm  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Powerful App for creative people & designers</h3>
                <p class="p-md  wow perch-fadeInUp fadeInUp" data-wow-delay="500ms" data-wow-duration="1200ms"> Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in iaculis pretium magna, mauris rhoncus ipsum in placerat feugiat primis ultrice </p>
                <div class="stores-badge  wow perch-fadeInUp fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                    <a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Get Started Now" class="store-btn" width="160"></span></a><a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Get Started Now" class="store-btn" width="170"></span></a>
                    <span class="os-version">* Requires iOS 7.0 or higher</span>
                </div>
            </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
            <div class="wow perch-fadeInRight fadeInRight hero-1-img" data-wow-delay="300ms" data-wow-duration="1200ms">
            <img   src="https://app-landing-theme-01.netlify.app/images/hero-1-img.png" alt="External image" />
            </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="about" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="features-4" class="bg-white wide-60 features-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-5 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
              
                </div></div></div></div></div></div></div></section><footer id="footer" class="footer division bg-tra ">
                    <div class="container">
        
                        <div class="row pt-100 mb-20">
                        <div class="col-lg-4">
                        <div id="perch_store_badges-2" class="footer-widget mb-40 footer-stores-badge"><h5 class="h5-sm">App Landing® Application</h5><a href="#" class="store" target="_blank">
                            <img class="appstore-original" src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Appstore" width="160" height="50">
                        </a><a href="#" class="store" target="_blank">
                            <img class="appstore-original" src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Google Play" width="160" height="50">
                        </a></div>	        </div>
                                <div class="col-md-4 col-lg-3">
                        <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Company</h5><div class="menu-company-container"><ul class="menu">
                            <li ><a href="/priveypolicy.html">Privacy policy</a></li>
                            <li ><a href="/Disclaimer.html">Disclaimer</a></li>
                            <li ><a href="termcondition.html">Terms and conditions</a></li>
                            <li ><a href="#">Site Map</a></li>
                            </ul></div></div>	        </div>
                                <div class="col-md-3 col-lg-2 ">
                        <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Connect</h5><div class="menu-connect-container"><ul class="menu">
                            <li ><a href="#">FAQs</a></li>
                            <li ><a href="#">Editor Help</a></li>
                            <li ><a href="#">Life Chatting</a></li>
                            <li ><a href="#">Contact Us</a></li>
                            </ul></div></div>	        </div>
                        <div class="col-md-4 col-lg-3">
                        <div id="perch-social-icons-3" class="footer-widget mb-40 social-widget"><div class="widget-content flow-me-widget"><div class="footer-socials-links mb-25 text-right"><h5 class="h5-sm"><a target="_blank" href="https://facebook.com" title="Facebook" class="foo-facebook">
                            <span>Facebook</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Google-plus" class="foo-facebook foo-google-plus">
        
                            <span>Google-plus</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Twitter" class="foo-facebook foo-google-plus foo-twitter">
        
                            <span>Twitter</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Youtube" class="foo-facebook foo-google-plus foo-twitter foo-youtube">
        
                            <span>Youtube</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Dribbble" class="foo-facebook foo-google-plus foo-twitter foo-youtube foo-dribbble">
                            <span>Dribbble</span>
                            </a></h5></div></div></div>	    
                
                </div>
                </div> 
                </footer>
                </div></div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></script>
    <script type='text/javascript' src='https://app-landing-theme-01.netlify.app/jquery.js' id='jquery-core-js'></script>
    <script type='text/javascript' src='https://app-landing-theme-01.netlify.app/stellar.js' ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
    </body>
    </html>`
    ,styles:`#loading {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      text-align: center;
      opacity: 0.7;
      background-color: #fff;
      z-index: 99;
    }
    
    #loading-image {
      position: absolute;
      top: 100px;
      left: 240px;
      z-index: 100;
    }
    @media (max-width: 575px){
      #ivlp7l {
        margin-top: 15%;
    }
    .video-btn.play-icon-tra.wow.fadeInUp {
      margin-top: 40%;
    }
    }
    .btn {
      background-color: #48af4b;
      border: 2px solid #48af4b;
    }
    .las {
      font-size: 75px !important;
      color: gray !important;
    }
    .lab {
      font-size: 75px !important;
      color: gray !important;
    }
    
    .mb-0 {
      margin-bottom: 0;
    }
    .p-bottom-0 {
      padding-bottom: 0;
    }
    .p-left-0 {
      padding-left: 0px;
    }
    .p-right-0 {
      padding-right: 0px;
    }
    .bg-lightgrey {
      background-color: #f0f0f0 !important;
    }
    .fbox-3.light-hover:hover {
      border-bottom: 1px solid #fff;
    }
    .fbox-3.light-hover:hover .b-icon span,
    .bg-light {
      background-color: #fff;
    }
    .wide-100 {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .wide-60 {
      padding-top: 80px;
      padding-bottom: 40px;
    }
    
    .pt-100,
    .division.pt-100 {
      padding-top: 80px;
    }
    .pb-100 {
      padding-bottom: 80px;
    }
    h5.h5-xs {
      font-size: 1.111rem;
    }
    h5.h5-sm {
      font-size: 1.111rem;
    }
    h5.h5-md {
      font-size: 1.14rem;
    }
    h5.h5-lg {
      font-size: 1.222rem;
    }
    h5.h5-xl {
      font-size: 1.333rem;
    }
    
    h4.h4-xs {
      font-size: 1.44rem;
    }
    h4.h4-sm {
      font-size: 1.55rem;
    }
    h4.h4-md {
      font-size: 1.66rem;
    }
    h4.h4-lg {
      font-size: 1.77rem;
    }
    h4.h4-xl {
      font-size: 1.88rem;
    }
    
    h3.h3-xs {
      font-size: 2.11rem;
    }
    h3.h3-sm {
      font-size: 2.22rem;
    }
    h3.h3-md {
      font-size: 2.33rem;
    }
    h3.h3-lg {
      font-size: 2.44rem;
    }
    h3.h3-xl {
      font-size: 2.5rem;
    }
    
    h2.h2-xs {
      font-size: 2.75rem;
    }
    h2.h2-sm {
      font-size: 2.9rem;
    }
    h2.h2-md {
      font-size: 3.15rem;
    }
    h2.h2-lg {
      font-size: 3.25rem;
    }
    h2.h2-xl {
      font-size: 3.35rem;
    }
    h2.h2-huge {
      font-size: 4.25rem;
    }
    
    p.p-sm {
      font-size: 0.95rem;
    }
    p {
      font-size: 1rem;
    }
    p.p-md {
      font-size: 1.066rem;
    }
    p.p-lg {
      font-size: 1.133rem;
    }
    p.p-xl {
      font-size: 1.266rem;
    }
    
    .btn.btn-sm {
      font-size: 0.75rem;
      padding: 0.785rem 1.75rem;
    }
    .btn {
      font-size: 0.8125rem;
      padding: 0.825rem 1.65rem;
    }
    .btn.btn-md {
      font-size: 0.875rem;
      padding: 0.875rem 1.75rem;
    }
    .btn.btn-lg {
      font-size: 0.875rem;
      padding: 1rem 2rem;
    }
    .stores-badge {
      margin-top: 35px;
    }
    a.store {
      margin-right: 10px;
    }
    
    .box-icon-sm [class^="ti-"],
    .box-icon-sm [class*=" ti-"] {
      font-size: 3.5rem;
    }
    .box-icon [class^="ti-"],
    .box-icon [class*=" ti-"] {
      font-size: 3.75rem;
    }
    .box-icon-md [class^="ti-"],
    .box-icon-md [class*=" ti-"] {
      font-size: 4rem;
    }
    .box-icon-lg [class^="ti-"],
    .box-icon-md [class*=" ti-"] {
      font-size: 4.25rem;
    }
    span.section-id {
      margin-bottom: 20px;
    }
    .section-title {
      margin-bottom: 50px;
    }
    .section-title.text-center p {
      padding: 0 18%;
    }
    
    .navbar-brand {
      margin-right: 3rem;
    }
    
    .nav-item {
      margin: 0 1.25rem;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      font-size: 0.785rem;
    }
    .navbar .btn {
      font-size: 0.785rem;
    }
    .header-socials {
      margin-top: 3px;
      margin-left: 0;
    }
    .header-socials span {
      margin-left: 5px;
    }
    .header-socials a {
      width: 36px;
      height: 36px;
      font-size: 1rem;
      line-height: 31px !important;
    }
    #hero-1 {
      padding-top: 160px;
      padding-bottom: 0;
    }
    #hero-1 .hero-txt {
      margin-top: 60px;
    }
    .hero-app-logo {
      margin-bottom: 20px;
    }
    
    .hero-app-logo img {
      width: 100px;
      height: auto;
    }
    #hero-1 h2 {
      font-size: 4.25rem;
      letter-spacing: -1.5px;
      margin-bottom: 20px;
    }
    #hero-1 h3 {
      margin-bottom: 20px;
    }
    #hero-1 .hero-txt p {
      padding-right: 5%;
    }
    .hero-section .newsletter-form {
      margin-top: 32px;
      margin-right: 10%;
    }
    .hero-section .newsletter-form .form-control {
      height: 56px;
    }
    .hero-section .newsletter-form .btn {
      height: 56px;
    }
    .hero-links {
      margin-top: 5px;
    }
    .hero-links span {
      font-size: 0.925rem;
      line-height: 1;
      margin-right: 20px;
    }
    .hero-1-img img {
      max-width: 180%;
    }
    
    .fbox-2 {
      padding: 0 5px;
    }
    .fbox-3 {
      padding: 60px 15px 45px;
    }
    .fbox-5 {
      margin-bottom: 35px;
    }
    .fbox-6.pr-30 {
      padding-right: 0;
    }
    .fbox-6.pl-30 {
      padding-left: 0;
    }
    
    h2.tra-digit {
      font-size: 4.25rem;
      margin-bottom: 10px;
      margin-left: -5px;
    }
    
    .fbox-1 h5,
    .fbox-4 h5,
    .fbox-6 h5 {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .fbox-2 h5,
    .fbox-3 h5 {
      margin-top: 35px;
      margin-bottom: 10px;
    }
    .fbox-5-txt {
      padding-left: 20px;
    }
    .content-txt {
      padding-right: 15px;
      padding-left: 15px;
    }
    #content-6 .content-txt.mt-50 {
      margin-top: 20px;
    }
    #content-8 .content-txt {
      padding-right: 30px;
      padding-left: 25px;
    }
    #content-10 .content-txt {
      padding-right: 10%;
      padding-left: 10%;
    }
    .small-statistic.mt-40 {
      margin-top: 30px;
    }
    .app-devices {
      padding: 5px 0 0 5px;
    }
    
    .content-txt h3.h3-xl {
      margin-bottom: 20px;
    }
    .content-txt h5.h5-sm {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    
    #content-9 p {
      padding: 0 10%;
    }
    #content-10 .content-txt p {
      padding: 0;
    }
    
    .content-boxes {
      padding: 40px 30px;
      margin: 0 5px -80px;
    }
    .cbox-1-txt {
      padding-left: 18px;
    }
    
    .content-5-img {
      margin: 0 5px -80px;
    }
    .content-6-img {
      margin: -80px 5px 0;
    }
    .screenshots-wrap {
      margin-bottom: 80px;
    }
    .screens-section .slick-dots {
      bottom: -80px;
    }
    #video-1 {
      padding-top: 150px;
      padding-bottom: 150px;
    }
    #video-2 .video-preview {
      margin-bottom: -80px;
    }
    
    .pricing-table {
      padding: 50px 25px;
    }
    #pricing-2 .pricing-table {
      padding: 50px 30px;
    }
    .pricing-table span.price,
    #pricing-2 .price span {
      font-size: 65px;
      line-height: 1;
    }
    .pricing-plan sup,
    #pricing-2 .price sup {
      font-size: 40px;
    }
    p.validity {
      font-size: 1.1rem;
      margin-top: 5px;
    }
    #pricing-2 .price span.price-vat {
      font-size: 0.925rem;
      padding: 0;
    }
    .pricing-table ul.features li {
      font-size: 1rem;
      padding: 7px 0;
    }
    
    .statistic-block p.statistic-number {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    .statistic-block p {
      font-size: 0.8125rem;
    }
    .m-img {
      display: inline-block;
      padding: 30px;
    }
    .m-img img {
      width: 120px;
      height: 120px;
    }
    
    .more-app-box h5 {
      margin-bottom: 8px;
      margin-top: 25px;
    }
    .more-app-box span.app-cat {
      margin-bottom: 10px;
    }
    #press-1 .col-md-3 {
      padding-right: 15px;
      padding-left: 15px;
    }
    .press-logo {
      padding: 60px 30px;
    }
    .press-txt p {
      margin-bottom: 30px;
      padding: 0;
    }
    .press-txt.mt-20 {
      margin-top: 0;
    }
    
    #faqs-page {
      margin-top: 160px;
      margin-bottom: 60px;
    }
    #faqs-left {
      padding-right: 10px;
    }
    #faqs-right {
      padding-left: 10px;
    }
    
    .question {
      margin-bottom: 20px;
    }
    .question h5 {
      margin-bottom: 10px;
    }
    .newsletter-section .newsletter-form .form-control {
      height: 60px;
    }
    .newsletter-section .newsletter-form .btn {
      height: 62px;
    }
    
    .newsletter-txt p {
      padding: 0 10%;
    }
    
    #sidebar-right .pl-60 {
      padding-left: 10px;
    }
    #sidebar-left .pl-60 {
      padding-right: 10px;
    }
    
    #contacts-2 .form-holder {
      margin-right: 2%;
      margin-left: 2%;
    }
    
    .footer h5 {
      margin-bottom: 20px;
    }
    .footer-socials-links h5 {
      margin-bottom: 10px;
    }
    #terms-page {
      margin-top: 160px;
      margin-bottom: 45px;
    }
    @media (min-width: 768px) and (max-width: 991.99px) {
      html {
        font-size: 16px;
      }
      .wide-100 {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .wide-60 {
        padding-top: 80px;
        padding-bottom: 40px;
      }
    
      .pt-100,
      .division.pt-100 {
        padding-top: 80px;
      }
      .pb-100 {
        padding-bottom: 80px;
      }
      h5.h5-xs {
        font-size: 1.111rem;
      }
      h5.h5-sm {
        font-size: 1.111rem;
      }
      h5.h5-md {
        font-size: 1.14rem;
      }
      h5.h5-lg {
        font-size: 1.15rem;
      }
      h5.h5-xl {
        font-size: 1.2rem;
      }
      h4.h4-xs {
        font-size: 1.222rem;
      }
      h4.h4-sm {
        font-size: 1.3rem;
      }
      h4.h4-md {
        font-size: 1.35rem;
      }
      h4.h4-lg {
        font-size: 1.45rem;
      }
      h4.h4-xl {
        font-size: 1.5rem;
      }
      h3.h3-xs {
        font-size: 1.6rem;
      }
      h3.h3-sm {
        font-size: 1.7rem;
      }
      h3.h3-md {
        font-size: 1.8rem;
      }
      h3.h3-lg {
        font-size: 1.9rem;
      }
      h3.h3-xl {
        font-size: 2rem;
      }
      h2.h2-xs {
        font-size: 2.15rem;
      }
      h2.h2-sm {
        font-size: 2.25rem;
      }
      h2.h2-md {
        font-size: 2.35rem;
      }
      h2.h2-lg {
        font-size: 2.45rem;
      }
      h2.h2-xl {
        font-size: 2.55rem;
      }
      h2.h2-huge {
        font-size: 3.25rem;
      }
      p.p-sm {
        font-size: 0.95rem;
      }
      p {
        font-size: 1rem;
      }
      p.p-md {
        font-size: 1rem;
      }
      p.p-lg {
        font-size: 1.05rem;
      }
      p.p-xl {
        font-size: 1.1rem;
      }
      .btn.btn-sm {
        font-size: 0.75rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 0.8125rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 0.9rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 0.9rem;
        padding: 1rem 2rem;
      }
    
      .video-btn {
        width: 90px;
        height: 90px;
        margin-top: -45px;
        margin-left: -45px;
        line-height: 80px !important;
      }
      a.store {
        margin-right: 10px;
      }
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 2.15rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 0.95rem;
        padding-right: 5%;
      }
      .box-icon-sm [class^="ti-"],
      .box-icon-sm [class*=" ti-"] {
        font-size: 3.25rem;
      }
      .box-icon [class^="ti-"],
      .box-icon [class*=" ti-"] {
        font-size: 3.6rem;
      }
      .box-icon-md [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 3.85rem;
      }
      .box-icon-lg [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 4.1rem;
      }
      span.section-id {
        margin-bottom: 18px;
      }
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 10px;
      }
      .section-title.text-center p {
        padding: 0 12%;
      }
      .bg-light {
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar {
        padding: 1.25rem 1.25rem;
        text-align: center;
      }
    
      .navbar.bg-tra {
        padding: 1.25rem 1.25rem;
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar.bg-tra.black-scroll {
        background-color: #333 !important;
      }
      .navbar.bg-tra.bg-tra.green-scroll {
        background-color: #48af4b !important;
      }
      .navbar.bg-tra.bg-tra.blue-scroll {
        background-color: #389bf2 !important;
      }
      .navbar.bg-tra.bg-tra.coral-scroll {
        background-color: #fa5876 !important;
      }
    
      .navbar.scroll.bg-tra {
        padding: 1.25rem 1.25rem;
      }
    
      .navbar-nav {
        padding-top: 15px;
      }
      .navbar-expand-lg .navbar-nav .nav-link {
        font-size: 0.975rem;
        padding: 12px 0;
        margin-left: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
      .navbar .btn {
        font-size: 0.925rem;
        line-height: 1;
        padding: 0.925rem 2.5rem;
        margin-top: 10px;
        margin-left: 0;
      }
      .navbar .btn.btn-tra-white,
      .navbar.scroll .btn.btn-tra-white {
        color: #222;
        border-color: #222;
      }
      .header .btn.tra-hover:hover {
        color: #222;
        background-color: transparent;
        border-color: #222;
      }
      .header .btn.white-hover:hover,
      .header .navbar.scroll .btn.white-hover:hover {
        color: #fff;
        background-color: #333;
        border-color: #333;
      }
      .header .btn.white-hover:hover span,
      .navbar.scroll .btn.white-hover:hover span {
        color: #fff;
      }
      .navbar .btn.tra-hover:hover span,
      .navbar.scroll .btn.tra-hover:hover span {
        color: #333;
      }
    
      .header .black-scroll .btn.tra-hover:hover,
      .header .green-scroll .btn.tra-hover:hover,
      .header .blue-scroll .btn.tra-hover:hover,
      .header .coral-scroll .btn.tra-hover:hover {
        background-color: transparent;
        border-color: #fff;
      }
      .header .black-scroll .btn.tra-hover:hover span,
      .header .green-scroll .btn.tra-hover:hover span,
      .header .blue-scroll .btn.tra-hover:hover span,
      .header .coral-scroll .btn.tra-hover:hover span {
        color: #fff;
      }
    
      .dropdown-menu {
        text-align: center;
      }
      .dropdown-item {
        font-size: 1.15rem;
        padding: 0.5rem 1.25rem;
      }
    
      .header-socials {
        margin: 12px auto 0;
      }
      .header-socials a {
        color: #fff;
        margin-left: 2px;
      }
      .header-socials a,
      .navbar.scroll .header-socials a,
      .navbar-light .header-socials a {
        color: #fff;
      }
    
      .navbar-expand-lg .nl-simple a:before {
        display: none;
      }
      .navbar-expand-lg .nl-simple a:hover:before,
      .navbar-expand-lg .nl-simple a:focus:before {
        display: none;
      }
    
      .navbar-light .nav-link:focus,
      .nav-link:focus {
        color: #fff;
        background-color: transparent;
      }
    
      .header-socials a.ico-facebook,
      .navbar.scroll .header-socials a.ico-facebook {
        background-color: #3b5998;
        border-color: #3b5998;
      }
      .header-socials a.ico-twitter,
      .navbar.scroll .header-socials a.ico-twitter {
        background-color: #00a9ed;
        border-color: #00a9ed;
      }
      .header-socials a.ico-behance,
      .navbar.scroll .header-socials a.ico-behance {
        background-color: #2473f6;
        border-color: #2473f6;
      }
      .header-socials a.ico-google-plus,
      .navbar.scroll .header-socials a.ico-google-plus {
        background-color: #cd1111;
        border-color: #cd1111;
      }
      .header-socials a.ico-linkedin,
      .navbar.scroll .header-socials a.ico-linkedin {
        background-color: #015886;
        border-color: #015886;
      }
      .header-socials a.ico-dribbble,
      .navbar.scroll .header-socials a.ico-dribbble {
        background-color: #d92d84;
        border-color: #d92d84;
      }
      .header-socials a.ico-instagram,
      .navbar.scroll .header-socials a.ico-instagram {
        background-color: #beb3a8;
        border-color: #beb3a8;
      }
      .header-socials a.ico-pinterest,
      .navbar.scroll .header-socials a.ico-pinterest {
        background-color: #ac281a;
        border-color: #ac281a;
      }
      .header-socials a.ico-youtube,
      .navbar.scroll .header-socials a.ico-youtube {
        background-color: #cd1b20;
        border-color: #cd1b20;
      }
      .header-socials a.ico-tumblr,
      .navbar.scroll .header-socials a.ico-tumblr {
        background-color: #3a5976;
        border-color: #3a5976;
      }
      .header-socials a.ico-vk,
      .navbar.scroll .header-socials a.ico-vk {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    
      .header-socials a:hover {
        color: #fff;
      }
    
      .header-store img {
        margin-top: 8px;
      }
      .hero-section {
        margin-top: 68px;
      }
    
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 15px;
      }
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      #hero-1 h2 {
        font-size: 3.5rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding-right: 0;
      }
      .hero-section .newsletter-form {
        margin-top: 26px;
        margin-right: 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        font-size: 1.066rem;
        line-height: 1;
        margin-right: 10px;
      }
      .hero-1-img img {
        max-width: 220%;
      }
      #features-2 {
        padding-bottom: 20px;
      }
    
      .fbox-2 {
        padding: 0;
        margin-bottom: 60px;
      }
      .fbox-3 {
        padding: 60px 15px 45px;
      }
      .fbox-5 {
        margin-bottom: 25px;
      }
      .fbox-7 {
        text-align: center;
        padding: 0 5%;
      }
      .fbox-6.pr-30 {
        padding-right: 0;
      }
      .fbox-6.pl-30 {
        padding-left: 0;
      }
    
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-5-txt {
        padding-left: 18px;
      }
    
      #content-5 {
        padding-bottom: 0;
      }
      #content-6 {
        padding-top: 0;
      }
      #content-5 .bg-inner {
        padding-bottom: 40px;
      }
      #content-6 .bg-inner {
        padding-top: 40px;
      }
    
      .content-txt,
      #content-8 .content-txt,
      #content-10 .content-txt {
        padding-right: 0;
        padding-left: 0;
      }
      #content-6 .content-txt.mt-50 {
        margin-top: 20px;
      }
      .small-statistic.mt-40 {
        margin-top: 30px;
      }
    
      .content-txt h3.h3-xl {
        margin-bottom: 15px;
      }
      .content-txt h5.h5-sm {
        margin-top: 15px;
        margin-bottom: 10px;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px;
        margin: 0 0 -80px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      .content-5-img {
        margin: 0 0 40px 0;
      }
      .content-6-img {
        margin: 0;
      }
      .content-7-img img {
        max-width: 330%;
      }
    
      .screenshots-wrap {
        margin-bottom: 80px;
      }
      .screens-section .slick-dots {
        bottom: -80px;
      }
    
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 5px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 40px 20px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 56px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 35px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 0.85rem;
        padding: 0;
      }
      .pricing-table ul.features li {
        font-size: 0.9rem;
        padding: 6px 0;
      }
    
      .pricing-table .btn {
        font-size: 0.8rem;
        letter-spacing: -0.5px;
        padding: 0.8rem 1.5rem;
      }
    
      .pricing-text {
        margin-top: 20px;
        margin-bottom: 20px;
        padding-bottom: 25px;
      }
      .pricing-text p {
        font-size: 14px;
        line-height: 22px;
      }
    
      .review-1 {
        margin-bottom: 20px;
      }
      .statistic-block p.statistic-number {
        font-size: 2.85rem;
        margin-bottom: 10px;
      }
      .statistic-block p {
        font-size: 0.8125rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        margin-bottom: 10px;
      }
    
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      #faqs-page {
        margin-top: 140px;
        margin-bottom: 55px;
      }
      #faqs-left {
        padding-right: 15px;
      }
      #faqs-right {
        padding-left: 15px;
      }
    
      .question {
        margin-bottom: 22px;
      }
      .question h5 {
        margin-bottom: 5px;
      }
    
      .more-questions-btn {
        margin-top: 30px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 60px;
      }
      .newsletter-section .newsletter-form .btn {
        height: 60px;
      }
    
      .newsletter-txt p {
        padding: 0 5%;
      }
    
      .sidebar-div.mb-40 {
        margin-bottom: 30px;
      }
      .sidebar-div.mb-50 {
        margin-bottom: 40px;
      }
    
      #sidebar-right h5.h5-sm,
      #sidebar-left h5.h5-sm {
        margin-bottom: 20px;
      }
      #leave-comment.mt-80 {
        margin-top: 50px;
      }
      #contacts-2 .form-holder {
        margin-right: 0;
        margin-left: 0;
      }
    
      .footer h5 {
        margin-bottom: 20px;
      }
      .footer-socials-links h5 {
        margin-bottom: 10px;
      }
    
      .footer-stores-badge.text-right {
        text-align: left !important;
      }
    
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 15px;
      }
      #footer-5 .foo-links li {
        margin: 0 8px;
      }
    
      #footer-5 .foo-logo {
        text-align: center;
        margin-bottom: 25px;
      }
      #footer-5 .footer-links {
        margin-bottom: 10px;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
      #footer-5 .footer-copyright {
        padding-bottom: 60px;
      }
      .bottom-form {
        min-width: 240px;
        max-width: 240px;
      }
      .bottom-form-header {
        padding: 10px 16px;
      }
      .bottom-form-header span {
        right: 10px;
        top: -30px;
        width: 50px;
        height: 50px;
        line-height: 50px !important;
      }
      .bottom-form-header .svg-inline--fa {
        font-size: 1.65rem;
      }
    
      #terms-page {
        margin-top: 140px;
        margin-bottom: 50px;
      }
      .terms-box {
        margin-bottom: 30px;
      }
      .terms-box h4 {
        margin-bottom: 15px;
      }
      .terms-box p span {
        font-size: 1rem;
        margin-right: 2px;
      }
    }
    
    @media (max-width: 767px) {
      html {
        font-size: 15px;
      }
      .wide-100 {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .wide-60 {
        padding-top: 80px;
        padding-bottom: 40px;
      }
      .pt-100,
      .division.pt-100 {
        padding-top: 80px;
      }
      .pb-100 {
        padding-bottom: 80px;
      }
    
      .bg-light {
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar {
        padding: 1.25rem 1.25rem;
        text-align: center;
      }
    
      .navbar.bg-tra {
        padding: 1.25rem 1.25rem;
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar.bg-tra.black-scroll {
        background-color: #333 !important;
      }
      .navbar.bg-tra.bg-tra.green-scroll {
        background-color: #48af4b !important;
      }
      .navbar.bg-tra.bg-tra.blue-scroll {
        background-color: #389bf2 !important;
      }
      .navbar.bg-tra.bg-tra.coral-scroll {
        background-color: #fa5876 !important;
      }
    
      .navbar.scroll.bg-tra {
        padding: 1.25rem 1.25rem;
      }
    
      .logo-white,
      .navbar-light.bg-tra .logo-white,
      .navbar-light.bg-light .logo-white,
      .bg-tra .logo-white,
      .bg-dark .logo-white {
        display: none;
      }
    
      .bg-tra .logo-black,
      .navbar-light.bg-tra .logo-black,
      .logo-black,
      .navbar-light.bg-light .logo-black {
        display: block;
      }
    
      .navbar.bg-tra.black-scroll .logo-black,
      .navbar.bg-tra.green-scroll .logo-black,
      .navbar.bg-tra.blue-scroll .logo-black,
      .navbar.bg-tra.coral-scroll .logo-black {
        display: none;
      }
    
      .navbar.bg-tra.black-scroll .logo-white,
      .navbar.bg-tra.green-scroll .logo-white,
      .navbar.bg-tra.blue-scroll .logo-white,
      .navbar.bg-tra.coral-scroll .logo-white {
        display: block;
      }
    
      .bg-tra .nav-link {
        color: #333;
      }
    
      .navbar.bg-tra.black-scroll .navbar-toggler,
      .navbar.bg-tra.green-scroll .navbar-toggler,
      .navbar.bg-tra.blue-scroll .navbar-toggler,
      .navbar.bg-tra.coral-scroll .navbar-toggler,
      .bg-tra.navbar-light.black-scroll .nav-link,
      .bg-tra.black-scroll .nav-link,
      .bg-tra.navbar-light.green-scroll .nav-link,
      .bg-tra.green-scroll .nav-link,
      .bg-tra.navbar-light.blue-scroll .nav-link,
      .bg-tra.blue-scroll .nav-link,
      .bg-tra.navbar-light.coral-scroll .nav-link,
      .bg-tra.coral-scroll .nav-link {
        color: #fff;
      }
    
      .navbar-nav .nav-link:focus,
      .navbar-light .navbar-nav .nav-link:focus,
      .navbar-nav .nav-link:hover,
      .navbar-light .navbar-nav .nav-link:hover {
        color: #858585;
      }
    
      .black-scroll .navbar-nav .nav-link:focus,
      .navbar-light.black-scroll .navbar-nav .nav-link:focus,
      .green-scroll .navbar-nav .nav-link:focus,
      .navbar-light.green-scroll .navbar-nav .nav-link:focus,
      .blue-scroll .navbar-nav .nav-link:focus,
      .navbar-light.blue-scroll .navbar-nav .nav-link:focus,
      .coral-scroll .navbar-nav .nav-link:focus,
      .navbar-light.coral-scroll .navbar-nav .nav-link:focus,
      .black-scroll .navbar-nav .nav-link:hover,
      .navbar-light.black-scroll .navbar-nav .nav-link:hover,
      .green-scroll .navbar-nav .nav-link:hover,
      .navbar-light.green-scroll .navbar-nav .nav-link:hover,
      .blue-scroll .navbar-nav .nav-link:hover,
      .navbar-light.blue-scroll .navbar-nav .nav-link:hover,
      .coral-scroll .navbar-nav .nav-link:hover,
      .navbar-light.coral-scroll .navbar-nav .nav-link:hover {
        color: #bbb;
      }
    
      .navbar-nav {
        padding-top: 15px;
      }
      .navbar-expand-lg .navbar-nav .nav-link {
        font-size: 0.975rem;
        padding: 12px 0;
        margin-left: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
      .navbar .btn {
        font-size: 0.925rem;
        line-height: 1;
        padding: 0.925rem 2.5rem;
        margin-top: 10px;
        margin-left: 0;
      }
      .navbar .btn.btn-tra-white,
      .navbar.scroll .btn.btn-tra-white {
        color: #222;
        border-color: #222;
      }
      .header .btn.tra-hover:hover {
        color: #222;
        background-color: transparent;
        border-color: #222;
      }
      .header .btn.white-hover:hover,
      .header .navbar.scroll .btn.white-hover:hover {
        color: #fff;
        background-color: #333;
        border-color: #333;
      }
      .header .btn.white-hover:hover span,
      .navbar.scroll .btn.white-hover:hover span {
        color: #fff;
      }
      .navbar .btn.tra-hover:hover span,
      .navbar.scroll .btn.tra-hover:hover span {
        color: #333;
      }
    
      .header .black-scroll .btn.tra-hover:hover,
      .header .green-scroll .btn.tra-hover:hover,
      .header .blue-scroll .btn.tra-hover:hover,
      .header .coral-scroll .btn.tra-hover:hover {
        background-color: transparent;
        border-color: #fff;
      }
      .header .black-scroll .btn.tra-hover:hover span,
      .header .green-scroll .btn.tra-hover:hover span,
      .header .blue-scroll .btn.tra-hover:hover span,
      .header .coral-scroll .btn.tra-hover:hover span {
        color: #fff;
      }
    
      .dropdown-menu {
        text-align: center;
      }
      .dropdown-item {
        font-size: 1.15rem;
        padding: 0.5rem 1.25rem;
      }
    
      .header-socials {
        margin: 12px auto 0;
      }
      .header-socials a {
        color: #fff;
        margin-left: 2px;
      }
      .header-socials a,
      .navbar.scroll .header-socials a,
      .navbar-light .header-socials a {
        color: #fff;
      }
    
      .navbar-expand-lg .nl-simple a:before {
        display: none;
      }
      .navbar-expand-lg .nl-simple a:hover:before,
      .navbar-expand-lg .nl-simple a:focus:before {
        display: none;
      }
    
      .navbar-light .nav-link:focus,
      .nav-link:focus {
        color: #fff;
        background-color: transparent;
      }
    
      .header-socials a.ico-facebook,
      .navbar.scroll .header-socials a.ico-facebook {
        background-color: #3b5998;
        border-color: #3b5998;
      }
      .header-socials a.ico-twitter,
      .navbar.scroll .header-socials a.ico-twitter {
        background-color: #00a9ed;
        border-color: #00a9ed;
      }
      .header-socials a.ico-behance,
      .navbar.scroll .header-socials a.ico-behance {
        background-color: #2473f6;
        border-color: #2473f6;
      }
      .header-socials a.ico-google-plus,
      .navbar.scroll .header-socials a.ico-google-plus {
        background-color: #cd1111;
        border-color: #cd1111;
      }
      .header-socials a.ico-linkedin,
      .navbar.scroll .header-socials a.ico-linkedin {
        background-color: #015886;
        border-color: #015886;
      }
      .header-socials a.ico-dribbble,
      .navbar.scroll .header-socials a.ico-dribbble {
        background-color: #d92d84;
        border-color: #d92d84;
      }
      .header-socials a.ico-instagram,
      .navbar.scroll .header-socials a.ico-instagram {
        background-color: #beb3a8;
        border-color: #beb3a8;
      }
      .header-socials a.ico-pinterest,
      .navbar.scroll .header-socials a.ico-pinterest {
        background-color: #ac281a;
        border-color: #ac281a;
      }
      .header-socials a.ico-youtube,
      .navbar.scroll .header-socials a.ico-youtube {
        background-color: #cd1b20;
        border-color: #cd1b20;
      }
      .header-socials a.ico-tumblr,
      .navbar.scroll .header-socials a.ico-tumblr {
        background-color: #3a5976;
        border-color: #3a5976;
      }
      .header-socials a.ico-vk,
      .navbar.scroll .header-socials a.ico-vk {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    
      .header-socials a:hover {
        color: #fff;
      }
    
      .header-store img {
        margin-top: 8px;
      }
      .hero-section {
        margin-top: 68px;
      }
      #features-2 {
        padding-bottom: 20px;
      }
    
      .fbox-2 {
        padding: 0;
        margin-bottom: 60px;
      }
      .fbox-6.pr-30 {
        padding-right: 0;
      }
      .fbox-6.pl-30 {
        padding-left: 0;
      }
      #content-5 {
        padding-bottom: 0;
      }
      #content-6 {
        padding-top: 0;
      }
      #content-5 .bg-inner {
        padding-bottom: 40px;
      }
      #content-6 .bg-inner {
        padding-top: 40px;
      }
    
      .content-txt,
      #content-8 .content-txt,
      #content-10 .content-txt {
        padding-right: 0;
        padding-left: 0;
      }
      .small-statistic.mt-40 {
        margin-top: 30px;
      }
      .app-devices {
        padding: 5px 0 0 5px;
      }
    
      .content-txt h3.h3-xl {
        margin-bottom: 15px;
      }
      .content-txt h5.h5-sm {
        margin-top: 15px;
        margin-bottom: 10px;
      }
    
      .content-5-img {
        margin: 0 0 40px 0;
      }
      .content-6-img {
        margin: 0;
      }
      .screenshots-wrap {
        margin-bottom: 80px;
      }
      .screens-section .slick-dots {
        bottom: -80px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      .review-1 {
        margin-bottom: 20px;
      }
      #faqs-page {
        margin-top: 140px;
        margin-bottom: 55px;
      }
      #faqs-left {
        padding-right: 15px;
      }
      #faqs-right {
        padding-left: 15px;
      }
    
      .question {
        margin-bottom: 22px;
      }
      .question h5 {
        margin-bottom: 5px;
      }
    
      .more-questions-btn {
        margin-top: 30px;
      }
    
      .sidebar-div.mb-40 {
        margin-bottom: 30px;
      }
      .sidebar-div.mb-50 {
        margin-bottom: 40px;
      }
      #sidebar-right #text-widget {
        margin-bottom: 0;
      }
    
      #sidebar-right h5.h5-sm,
      #sidebar-left h5.h5-sm {
        margin-bottom: 20px;
      }
      #leave-comment.mt-80 {
        margin-top: 50px;
      }
    
      #contacts-2 .form-holder {
        margin-right: 0;
        margin-left: 0;
      }
    
      .footer h5 {
        margin-bottom: 20px;
      }
    
      .footer-stores-badge.text-right {
        text-align: left !important;
      }
    
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 15px;
      }
      #footer-5 .foo-links li {
        margin: 0 8px;
      }
    
      #footer-5 .foo-logo {
        text-align: center;
        margin-bottom: 25px;
      }
      #footer-5 .footer-links {
        margin-bottom: 10px;
      }
      #footer-5 .footer-copyright {
        padding-bottom: 60px;
      }
    
      #terms-page {
        margin-top: 140px;
        margin-bottom: 50px;
      }
      .terms-box {
        margin-bottom: 30px;
      }
      .terms-box h4 {
        margin-bottom: 15px;
      }
      .terms-box p span {
        font-size: 1rem;
        margin-right: 2px;
      }
    }
    @media (min-width: 576px) and (max-width: 767.99px) {
      h5.h5-xs {
        font-size: 1.166rem;
      }
      h5.h5-sm {
        font-size: 1.166rem;
      }
      h5.h5-md {
        font-size: 1.166rem;
      }
      h5.h5-lg {
        font-size: 1.166rem;
      }
      h5.h5-xl {
        font-size: 1.2rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.3rem;
      }
      h4.h4-md {
        font-size: 1.3rem;
      }
      h4.h4-lg {
        font-size: 1.366rem;
      }
      h4.h4-xl {
        font-size: 1.4rem;
      }
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.54rem;
      }
      h3.h3-md {
        font-size: 1.625rem;
      }
      h3.h3-lg {
        font-size: 1.7rem;
      }
      h3.h3-xl {
        font-size: 1.85rem;
      }
      h2.h2-xs {
        font-size: 1.9rem;
      }
      h2.h2-sm {
        font-size: 1.95rem;
      }
      h2.h2-md {
        font-size: 2rem;
      }
      h2.h2-lg {
        font-size: 2.1rem;
      }
      h2.h2-xl {
        font-size: 2.2rem;
      }
      h2.h2-huge {
        font-size: 2.85rem;
      }
      p.p-sm {
        font-size: 1.066rem;
      }
      p {
        font-size: 1.066rem;
      }
      p.p-md {
        font-size: 1.066rem;
      }
      p.p-lg {
        font-size: 1.1rem;
      }
      p.p-xl {
        font-size: 1.1rem;
      }
      .btn.btn-sm {
        font-size: 0.925rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 1rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 1rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 1rem;
        padding: 1rem 2rem;
      }
    
      .video-btn {
        width: 90px;
        height: 90px;
        margin-top: -45px;
        margin-left: -45px;
        line-height: 80px !important;
      }
      .stores-badge {
        margin-top: 25px;
      }
      a.store {
        margin-right: 10px;
      }
    
      /* App Devices Icons */
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 3rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 1.066rem;
        padding-right: 5%;
      }
      ul.content-list li {
        font-size: 1.066rem;
      }
      span.section-id {
        margin-bottom: 18px;
      }
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 12px;
      }
      .section-title.text-center p {
        padding: 0 8%;
      }
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 0;
        margin-bottom: 40px;
      }
      #hero-1 .hero-txt {
        padding: 0;
        text-align: center !important;
      }
    
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      #hero-1 h2 {
        font-size: 3.25rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 5%;
      }
      .hero-section .newsletter-form {
        margin-top: 30px;
        margin: 0 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
    
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        font-size: 0.875rem;
        line-height: 1;
        margin-right: 10px;
      }
    
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 15% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 12%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 15% 0;
      }
      #features-5 .features-img {
        margin: 0 15% 50px;
      }
      .fbox-6-img {
        display: none;
      }
      #content-4 {
        padding-bottom: 40px;
      }
    
      #content-9 p {
        padding: 0 5%;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 10% 40px;
      }
      #content-2 .content-img {
        margin: 0 10% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 10%;
        padding-right: 10%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 12%;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 50px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.066rem;
        line-height: 1.3;
        padding: 0 14%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.066rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.166rem;
      }
      .statistic-block p.statistic-number {
        font-size: 2.75rem;
        margin-bottom: 10px;
      }
      .statistic-block p {
        font-size: 1.066rem;
      }
      #brands-2 {
        padding-top: 50px;
        padding-bottom: 30px;
      }
    
      .m-img {
        display: inline-block;
        padding: 40px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.066rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 12%;
      }
      .m-links a {
        font-size: 1.066rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 56px;
        font-size: 1.066rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 56px;
      }
    
      .newsletter-txt p {
        padding: 0 10%;
      }
      #sidebar-right {
        margin-top: 50px;
      }
      #sidebar-left {
        margin-bottom: 50px;
      }
      .register-form .btn {
        height: 54px;
      }
    
      .register-form p {
        padding: 0 5%;
      }
      .bottom-footer .footer-links.text-right {
        text-align: left !important;
        margin-top: 15px;
      }
    
      .footer-socials-links.text-right {
        text-align: left !important;
      }
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 0;
        margin-right: 15px;
      }
    
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.066rem;
      }
    
      #footer-3 .footer-copyright {
        margin-bottom: 15px;
      }
      #footer-3 .footer-links.text-right {
        text-align: left !important;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
    
      /* QUICK FORM */
      .bottom-form {
        min-width: 240px;
        max-width: 240px;
      }
      .bottom-form-header {
        padding: 10px 16px;
      }
      .bottom-form-header span {
        right: 10px;
        top: -30px;
        width: 50px;
        height: 50px;
        line-height: 50px !important;
      }
      .bottom-form-header .svg-inline--fa {
        font-size: 1.65rem;
      }
    }
    
    @media (max-width: 575px) {
      html {
        font-size: 14px;
      }
      p.p-sm {
        font-size: 1.1425rem;
      }
      p {
        font-size: 1.1425rem;
      }
      p.p-md {
        font-size: 1.1425rem;
      }
      p.p-lg {
        font-size: 1.1785rem;
      }
      p.p-xl {
        font-size: 1.1785rem;
      }
      .btn.btn-sm {
        font-size: 0.75rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 0.8125rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 0.9rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 0.9rem;
        padding: 1rem 2rem;
      }
      .video-btn {
        width: 80px;
        height: 80px;
        margin-top: -40px;
        margin-left: -40px;
        line-height: 70px !important;
      }
      .stores-badge {
        margin-top: 30px;
      }
      a.store {
        margin-right: 10px;
      }
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 3rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 1.075rem;
        padding-right: 5%;
      }
    
      .box-icon-sm [class^="ti-"],
      .box-icon-sm [class*=" ti-"] {
        font-size: 3.15rem;
      }
      .box-icon [class^="ti-"],
      .box-icon [class*=" ti-"] {
        font-size: 3.6rem;
      }
      .box-icon-md [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 3.75rem;
      }
      .box-icon-lg [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 4rem;
      }
    
      /* Content List */
      ul.content-list li {
        font-size: 1.1425rem;
      }
    
      /* Section ID */
      span.section-id {
        margin-bottom: 18px;
      }
    
      /* Section Title */
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 12px;
      }
      .section-title.text-center p {
        padding: 0;
      }
    
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 0;
        margin-bottom: 40px;
      }
      #hero-1 .hero-txt {
        text-align: center;
      }
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      .hero-section .newsletter-form {
        margin-top: 30px;
        margin: 0 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
    
      #sidebar-right {
        margin-top: 50px;
      }
      #sidebar-left {
        margin-bottom: 50px;
      }
    
      /* FOOTER */
      .bottom-footer .footer-links.text-right {
        text-align: left !important;
        margin-top: 15px;
      }
    
      .footer-socials-links.text-right {
        text-align: left !important;
      }
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 0;
        margin-right: 15px;
      }
    
      #footer-3 .footer-copyright {
        margin-bottom: 15px;
      }
      #footer-3 .footer-links.text-right {
        text-align: left !important;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
    }
    
    @media (min-width: 416px) and (max-width: 575.99px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
    
      /* Hero Images */
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 15% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 8%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0 3%;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* SCREENS */
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
    
      .statistic-block p.statistic-number {
        font-size: 2.75rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 8%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (min-width: 321px) and (max-width: 415px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
    
      /* Section ID */
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
    
      /* Hero Links */
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 10% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 5%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* SCREENS */
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
      .statistic-block p.statistic-number {
        font-size: 3rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 5%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      /* FAQs */
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
    
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
    
      .form-control,
      .register-form .form-control,
      .custom-select {
        height: 52px;
        font-size: 1.1425rem;
      }
      .register-form .btn {
        height: 52px;
      }
    
      .register-form label.error,
      .contact-form label.error,
      .register-form-msg .error,
      .contact-form-msg .error,
      .register-form-msg .loading,
      .contact-form-msg .loading {
        font-size: 1.1425rem;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (max-width: 320px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
    
      /* Hero Links */
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      .fbox-3 {
        padding: 60px 10% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 5%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
    
      /* STATISTIC */
      .statistic-block p.statistic-number {
        font-size: 3rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 5%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
    
      .contact-form .form-control,
      .register-form .form-control,
      .contact-form .custom-select {
        height: 52px;
        font-size: 1.1425rem;
      }
      .register-form .btn {
        height: 52px;
      }
    
      .register-form label.error,
      .contact-form label.error,
      .register-form-msg .error,
      .contact-form-msg .error,
      .register-form-msg .loading,
      .contact-form-msg .loading {
        font-size: 1.1425rem;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (min-width: 320px) and (max-width: 991px) {
      .event-img-meta {
        padding: 15px;
      }
      .event-img-meta h5 .h5-md {
        font-size: 1.875rem;
      }
      .event-img-meta p {
        font-size: 1rem;
      }
      .gallery-item:hover .image-zoom {
        margin-top: -15px;
        margin-left: -8px;
      }
    }
    `,id:'first_2',name:'Terms and conditions'},
    { component:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel='stylesheet' href='sixth.css' type='text/css' media='all' />
    <link
    rel="stylesheet"
    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
    />
    <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto%3A300%2Cregular%2C500%2C700%2C900%7CMontserrat%3A300%2Cregular%2C500%2C600%2C700%2C800%2C900&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel='stylesheet' href='https://app-landing-theme-01.netlify.app/theme.css' type='text/css' media='all' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto%3A300%7CMontserrat%3A700%2C600&#038;ver=1629878706' type='text/css' media='all' />
    
    </head>
    <body>
        <div id="post-6" class=" page type-page status-publish hentry single-page-details">
          <section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="fixed" class="vc_section">
                <div id="hero-1" class="bg-white  hero-section  bg-fixed"><div >
                    <div class="container">
                        <div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit"
                        ><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra hero-txt hero-1-txt">
                            <div class="vc_column-inner"><div class="wpb_wrapper ">
            <div class="hero-txt">
                <h2 class=" wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">Privecy Policy</h2>
                <h3 class="h3-sm  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Powerful App for creative people & designers</h3>
                <p class="p-md  wow perch-fadeInUp fadeInUp" data-wow-delay="500ms" data-wow-duration="1200ms"> Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in iaculis pretium magna, mauris rhoncus ipsum in placerat feugiat primis ultrice </p>
                <div class="stores-badge  wow perch-fadeInUp fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                    <a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Get Started Now" class="store-btn" width="160"></span></a><a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Get Started Now" class="store-btn" width="170"></span></a>
                    <span class="os-version">* Requires iOS 7.0 or higher</span>
                </div>
            </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
            <div class="wow perch-fadeInRight fadeInRight hero-1-img" data-wow-delay="300ms" data-wow-duration="1200ms">
            <img   src="https://app-landing-theme-01.netlify.app/images/hero-1-img.png" alt="External image" />
            </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="about" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="features-4" class="bg-white wide-60 features-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-5 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
              
                </div></div></div></div></div></div></div></section><footer id="footer" class="footer division bg-tra ">
                    <div class="container">
        
                        <div class="row pt-100 mb-20">
                        <div class="col-lg-4">
                        <div id="perch_store_badges-2" class="footer-widget mb-40 footer-stores-badge"><h5 class="h5-sm">App Landing® Application</h5><a href="#" class="store" target="_blank">
                            <img class="appstore-original" src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Appstore" width="160" height="50">
                        </a><a href="#" class="store" target="_blank">
                            <img class="appstore-original" src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Google Play" width="160" height="50">
                        </a></div>	        </div>
                                <div class="col-md-4 col-lg-3">
                        <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Company</h5><div class="menu-company-container"><ul class="menu">
                            <li ><a href="/priveypolicy.html">Privacy policy</a></li>
                            <li ><a href="/Disclaimer.html">Disclaimer</a></li>
                            <li ><a href="termcondition.html">Terms and conditions</a></li>
                            <li ><a href="#">Site Map</a></li>
                            </ul></div></div>	        </div>
                                <div class="col-md-3 col-lg-2 ">
                        <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Connect</h5><div class="menu-connect-container"><ul class="menu">
                            <li ><a href="#">FAQs</a></li>
                            <li ><a href="#">Editor Help</a></li>
                            <li ><a href="#">Life Chatting</a></li>
                            <li ><a href="#">Contact Us</a></li>
                            </ul></div></div>	        </div>
                        <div class="col-md-4 col-lg-3">
                        <div id="perch-social-icons-3" class="footer-widget mb-40 social-widget"><div class="widget-content flow-me-widget"><div class="footer-socials-links mb-25 text-right"><h5 class="h5-sm"><a target="_blank" href="https://facebook.com" title="Facebook" class="foo-facebook">
                            <span>Facebook</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Google-plus" class="foo-facebook foo-google-plus">
        
                            <span>Google-plus</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Twitter" class="foo-facebook foo-google-plus foo-twitter">
        
                            <span>Twitter</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Youtube" class="foo-facebook foo-google-plus foo-twitter foo-youtube">
        
                            <span>Youtube</span>
                            </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Dribbble" class="foo-facebook foo-google-plus foo-twitter foo-youtube foo-dribbble">
                            <span>Dribbble</span>
                            </a></h5></div></div></div>	    
                
                </div>
                </div> 
                </footer>
                </div></div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></script>
    <script type='text/javascript' src='https://app-landing-theme-01.netlify.app/jquery.js' id='jquery-core-js'></script>
    <script type='text/javascript' src='https://app-landing-theme-01.netlify.app/stellar.js' ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
    </body>
    </html>`  ,styles:`#loading {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      text-align: center;
      opacity: 0.7;
      background-color: #fff;
      z-index: 99;
    }
    
    #loading-image {
      position: absolute;
      top: 100px;
      left: 240px;
      z-index: 100;
    }
    @media (max-width: 575px){
      #ivlp7l {
        margin-top: 15%;
    }
    .video-btn.play-icon-tra.wow.fadeInUp {
      margin-top: 40%;
    }
    }
    .btn {
      background-color: #48af4b;
      border: 2px solid #48af4b;
    }
    .las {
      font-size: 75px !important;
      color: gray !important;
    }
    .lab {
      font-size: 75px !important;
      color: gray !important;
    }
    
    .mb-0 {
      margin-bottom: 0;
    }
    .p-bottom-0 {
      padding-bottom: 0;
    }
    .p-left-0 {
      padding-left: 0px;
    }
    .p-right-0 {
      padding-right: 0px;
    }
    .bg-lightgrey {
      background-color: #f0f0f0 !important;
    }
    .fbox-3.light-hover:hover {
      border-bottom: 1px solid #fff;
    }
    .fbox-3.light-hover:hover .b-icon span,
    .bg-light {
      background-color: #fff;
    }
    .wide-100 {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .wide-60 {
      padding-top: 80px;
      padding-bottom: 40px;
    }
    
    .pt-100,
    .division.pt-100 {
      padding-top: 80px;
    }
    .pb-100 {
      padding-bottom: 80px;
    }
    h5.h5-xs {
      font-size: 1.111rem;
    }
    h5.h5-sm {
      font-size: 1.111rem;
    }
    h5.h5-md {
      font-size: 1.14rem;
    }
    h5.h5-lg {
      font-size: 1.222rem;
    }
    h5.h5-xl {
      font-size: 1.333rem;
    }
    
    h4.h4-xs {
      font-size: 1.44rem;
    }
    h4.h4-sm {
      font-size: 1.55rem;
    }
    h4.h4-md {
      font-size: 1.66rem;
    }
    h4.h4-lg {
      font-size: 1.77rem;
    }
    h4.h4-xl {
      font-size: 1.88rem;
    }
    
    h3.h3-xs {
      font-size: 2.11rem;
    }
    h3.h3-sm {
      font-size: 2.22rem;
    }
    h3.h3-md {
      font-size: 2.33rem;
    }
    h3.h3-lg {
      font-size: 2.44rem;
    }
    h3.h3-xl {
      font-size: 2.5rem;
    }
    
    h2.h2-xs {
      font-size: 2.75rem;
    }
    h2.h2-sm {
      font-size: 2.9rem;
    }
    h2.h2-md {
      font-size: 3.15rem;
    }
    h2.h2-lg {
      font-size: 3.25rem;
    }
    h2.h2-xl {
      font-size: 3.35rem;
    }
    h2.h2-huge {
      font-size: 4.25rem;
    }
    
    p.p-sm {
      font-size: 0.95rem;
    }
    p {
      font-size: 1rem;
    }
    p.p-md {
      font-size: 1.066rem;
    }
    p.p-lg {
      font-size: 1.133rem;
    }
    p.p-xl {
      font-size: 1.266rem;
    }
    
    .btn.btn-sm {
      font-size: 0.75rem;
      padding: 0.785rem 1.75rem;
    }
    .btn {
      font-size: 0.8125rem;
      padding: 0.825rem 1.65rem;
    }
    .btn.btn-md {
      font-size: 0.875rem;
      padding: 0.875rem 1.75rem;
    }
    .btn.btn-lg {
      font-size: 0.875rem;
      padding: 1rem 2rem;
    }
    .stores-badge {
      margin-top: 35px;
    }
    a.store {
      margin-right: 10px;
    }
    
    .box-icon-sm [class^="ti-"],
    .box-icon-sm [class*=" ti-"] {
      font-size: 3.5rem;
    }
    .box-icon [class^="ti-"],
    .box-icon [class*=" ti-"] {
      font-size: 3.75rem;
    }
    .box-icon-md [class^="ti-"],
    .box-icon-md [class*=" ti-"] {
      font-size: 4rem;
    }
    .box-icon-lg [class^="ti-"],
    .box-icon-md [class*=" ti-"] {
      font-size: 4.25rem;
    }
    span.section-id {
      margin-bottom: 20px;
    }
    .section-title {
      margin-bottom: 50px;
    }
    .section-title.text-center p {
      padding: 0 18%;
    }
    
    .navbar-brand {
      margin-right: 3rem;
    }
    
    .nav-item {
      margin: 0 1.25rem;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      font-size: 0.785rem;
    }
    .navbar .btn {
      font-size: 0.785rem;
    }
    .header-socials {
      margin-top: 3px;
      margin-left: 0;
    }
    .header-socials span {
      margin-left: 5px;
    }
    .header-socials a {
      width: 36px;
      height: 36px;
      font-size: 1rem;
      line-height: 31px !important;
    }
    #hero-1 {
      padding-top: 160px;
      padding-bottom: 0;
    }
    #hero-1 .hero-txt {
      margin-top: 60px;
    }
    .hero-app-logo {
      margin-bottom: 20px;
    }
    
    .hero-app-logo img {
      width: 100px;
      height: auto;
    }
    #hero-1 h2 {
      font-size: 4.25rem;
      letter-spacing: -1.5px;
      margin-bottom: 20px;
    }
    #hero-1 h3 {
      margin-bottom: 20px;
    }
    #hero-1 .hero-txt p {
      padding-right: 5%;
    }
    .hero-section .newsletter-form {
      margin-top: 32px;
      margin-right: 10%;
    }
    .hero-section .newsletter-form .form-control {
      height: 56px;
    }
    .hero-section .newsletter-form .btn {
      height: 56px;
    }
    .hero-links {
      margin-top: 5px;
    }
    .hero-links span {
      font-size: 0.925rem;
      line-height: 1;
      margin-right: 20px;
    }
    .hero-1-img img {
      max-width: 180%;
    }
    
    .fbox-2 {
      padding: 0 5px;
    }
    .fbox-3 {
      padding: 60px 15px 45px;
    }
    .fbox-5 {
      margin-bottom: 35px;
    }
    .fbox-6.pr-30 {
      padding-right: 0;
    }
    .fbox-6.pl-30 {
      padding-left: 0;
    }
    
    h2.tra-digit {
      font-size: 4.25rem;
      margin-bottom: 10px;
      margin-left: -5px;
    }
    
    .fbox-1 h5,
    .fbox-4 h5,
    .fbox-6 h5 {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .fbox-2 h5,
    .fbox-3 h5 {
      margin-top: 35px;
      margin-bottom: 10px;
    }
    .fbox-5-txt {
      padding-left: 20px;
    }
    .content-txt {
      padding-right: 15px;
      padding-left: 15px;
    }
    #content-6 .content-txt.mt-50 {
      margin-top: 20px;
    }
    #content-8 .content-txt {
      padding-right: 30px;
      padding-left: 25px;
    }
    #content-10 .content-txt {
      padding-right: 10%;
      padding-left: 10%;
    }
    .small-statistic.mt-40 {
      margin-top: 30px;
    }
    .app-devices {
      padding: 5px 0 0 5px;
    }
    
    .content-txt h3.h3-xl {
      margin-bottom: 20px;
    }
    .content-txt h5.h5-sm {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    
    #content-9 p {
      padding: 0 10%;
    }
    #content-10 .content-txt p {
      padding: 0;
    }
    
    .content-boxes {
      padding: 40px 30px;
      margin: 0 5px -80px;
    }
    .cbox-1-txt {
      padding-left: 18px;
    }
    
    .content-5-img {
      margin: 0 5px -80px;
    }
    .content-6-img {
      margin: -80px 5px 0;
    }
    .screenshots-wrap {
      margin-bottom: 80px;
    }
    .screens-section .slick-dots {
      bottom: -80px;
    }
    #video-1 {
      padding-top: 150px;
      padding-bottom: 150px;
    }
    #video-2 .video-preview {
      margin-bottom: -80px;
    }
    
    .pricing-table {
      padding: 50px 25px;
    }
    #pricing-2 .pricing-table {
      padding: 50px 30px;
    }
    .pricing-table span.price,
    #pricing-2 .price span {
      font-size: 65px;
      line-height: 1;
    }
    .pricing-plan sup,
    #pricing-2 .price sup {
      font-size: 40px;
    }
    p.validity {
      font-size: 1.1rem;
      margin-top: 5px;
    }
    #pricing-2 .price span.price-vat {
      font-size: 0.925rem;
      padding: 0;
    }
    .pricing-table ul.features li {
      font-size: 1rem;
      padding: 7px 0;
    }
    
    .statistic-block p.statistic-number {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    .statistic-block p {
      font-size: 0.8125rem;
    }
    .m-img {
      display: inline-block;
      padding: 30px;
    }
    .m-img img {
      width: 120px;
      height: 120px;
    }
    
    .more-app-box h5 {
      margin-bottom: 8px;
      margin-top: 25px;
    }
    .more-app-box span.app-cat {
      margin-bottom: 10px;
    }
    #press-1 .col-md-3 {
      padding-right: 15px;
      padding-left: 15px;
    }
    .press-logo {
      padding: 60px 30px;
    }
    .press-txt p {
      margin-bottom: 30px;
      padding: 0;
    }
    .press-txt.mt-20 {
      margin-top: 0;
    }
    
    #faqs-page {
      margin-top: 160px;
      margin-bottom: 60px;
    }
    #faqs-left {
      padding-right: 10px;
    }
    #faqs-right {
      padding-left: 10px;
    }
    
    .question {
      margin-bottom: 20px;
    }
    .question h5 {
      margin-bottom: 10px;
    }
    .newsletter-section .newsletter-form .form-control {
      height: 60px;
    }
    .newsletter-section .newsletter-form .btn {
      height: 62px;
    }
    
    .newsletter-txt p {
      padding: 0 10%;
    }
    
    #sidebar-right .pl-60 {
      padding-left: 10px;
    }
    #sidebar-left .pl-60 {
      padding-right: 10px;
    }
    
    #contacts-2 .form-holder {
      margin-right: 2%;
      margin-left: 2%;
    }
    
    .footer h5 {
      margin-bottom: 20px;
    }
    .footer-socials-links h5 {
      margin-bottom: 10px;
    }
    #terms-page {
      margin-top: 160px;
      margin-bottom: 45px;
    }
    @media (min-width: 768px) and (max-width: 991.99px) {
      html {
        font-size: 16px;
      }
      .wide-100 {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .wide-60 {
        padding-top: 80px;
        padding-bottom: 40px;
      }
    
      .pt-100,
      .division.pt-100 {
        padding-top: 80px;
      }
      .pb-100 {
        padding-bottom: 80px;
      }
      h5.h5-xs {
        font-size: 1.111rem;
      }
      h5.h5-sm {
        font-size: 1.111rem;
      }
      h5.h5-md {
        font-size: 1.14rem;
      }
      h5.h5-lg {
        font-size: 1.15rem;
      }
      h5.h5-xl {
        font-size: 1.2rem;
      }
      h4.h4-xs {
        font-size: 1.222rem;
      }
      h4.h4-sm {
        font-size: 1.3rem;
      }
      h4.h4-md {
        font-size: 1.35rem;
      }
      h4.h4-lg {
        font-size: 1.45rem;
      }
      h4.h4-xl {
        font-size: 1.5rem;
      }
      h3.h3-xs {
        font-size: 1.6rem;
      }
      h3.h3-sm {
        font-size: 1.7rem;
      }
      h3.h3-md {
        font-size: 1.8rem;
      }
      h3.h3-lg {
        font-size: 1.9rem;
      }
      h3.h3-xl {
        font-size: 2rem;
      }
      h2.h2-xs {
        font-size: 2.15rem;
      }
      h2.h2-sm {
        font-size: 2.25rem;
      }
      h2.h2-md {
        font-size: 2.35rem;
      }
      h2.h2-lg {
        font-size: 2.45rem;
      }
      h2.h2-xl {
        font-size: 2.55rem;
      }
      h2.h2-huge {
        font-size: 3.25rem;
      }
      p.p-sm {
        font-size: 0.95rem;
      }
      p {
        font-size: 1rem;
      }
      p.p-md {
        font-size: 1rem;
      }
      p.p-lg {
        font-size: 1.05rem;
      }
      p.p-xl {
        font-size: 1.1rem;
      }
      .btn.btn-sm {
        font-size: 0.75rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 0.8125rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 0.9rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 0.9rem;
        padding: 1rem 2rem;
      }
    
      .video-btn {
        width: 90px;
        height: 90px;
        margin-top: -45px;
        margin-left: -45px;
        line-height: 80px !important;
      }
      a.store {
        margin-right: 10px;
      }
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 2.15rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 0.95rem;
        padding-right: 5%;
      }
      .box-icon-sm [class^="ti-"],
      .box-icon-sm [class*=" ti-"] {
        font-size: 3.25rem;
      }
      .box-icon [class^="ti-"],
      .box-icon [class*=" ti-"] {
        font-size: 3.6rem;
      }
      .box-icon-md [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 3.85rem;
      }
      .box-icon-lg [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 4.1rem;
      }
      span.section-id {
        margin-bottom: 18px;
      }
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 10px;
      }
      .section-title.text-center p {
        padding: 0 12%;
      }
      .bg-light {
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar {
        padding: 1.25rem 1.25rem;
        text-align: center;
      }
    
      .navbar.bg-tra {
        padding: 1.25rem 1.25rem;
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar.bg-tra.black-scroll {
        background-color: #333 !important;
      }
      .navbar.bg-tra.bg-tra.green-scroll {
        background-color: #48af4b !important;
      }
      .navbar.bg-tra.bg-tra.blue-scroll {
        background-color: #389bf2 !important;
      }
      .navbar.bg-tra.bg-tra.coral-scroll {
        background-color: #fa5876 !important;
      }
    
      .navbar.scroll.bg-tra {
        padding: 1.25rem 1.25rem;
      }
    
      .navbar-nav {
        padding-top: 15px;
      }
      .navbar-expand-lg .navbar-nav .nav-link {
        font-size: 0.975rem;
        padding: 12px 0;
        margin-left: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
      .navbar .btn {
        font-size: 0.925rem;
        line-height: 1;
        padding: 0.925rem 2.5rem;
        margin-top: 10px;
        margin-left: 0;
      }
      .navbar .btn.btn-tra-white,
      .navbar.scroll .btn.btn-tra-white {
        color: #222;
        border-color: #222;
      }
      .header .btn.tra-hover:hover {
        color: #222;
        background-color: transparent;
        border-color: #222;
      }
      .header .btn.white-hover:hover,
      .header .navbar.scroll .btn.white-hover:hover {
        color: #fff;
        background-color: #333;
        border-color: #333;
      }
      .header .btn.white-hover:hover span,
      .navbar.scroll .btn.white-hover:hover span {
        color: #fff;
      }
      .navbar .btn.tra-hover:hover span,
      .navbar.scroll .btn.tra-hover:hover span {
        color: #333;
      }
    
      .header .black-scroll .btn.tra-hover:hover,
      .header .green-scroll .btn.tra-hover:hover,
      .header .blue-scroll .btn.tra-hover:hover,
      .header .coral-scroll .btn.tra-hover:hover {
        background-color: transparent;
        border-color: #fff;
      }
      .header .black-scroll .btn.tra-hover:hover span,
      .header .green-scroll .btn.tra-hover:hover span,
      .header .blue-scroll .btn.tra-hover:hover span,
      .header .coral-scroll .btn.tra-hover:hover span {
        color: #fff;
      }
    
      .dropdown-menu {
        text-align: center;
      }
      .dropdown-item {
        font-size: 1.15rem;
        padding: 0.5rem 1.25rem;
      }
    
      .header-socials {
        margin: 12px auto 0;
      }
      .header-socials a {
        color: #fff;
        margin-left: 2px;
      }
      .header-socials a,
      .navbar.scroll .header-socials a,
      .navbar-light .header-socials a {
        color: #fff;
      }
    
      .navbar-expand-lg .nl-simple a:before {
        display: none;
      }
      .navbar-expand-lg .nl-simple a:hover:before,
      .navbar-expand-lg .nl-simple a:focus:before {
        display: none;
      }
    
      .navbar-light .nav-link:focus,
      .nav-link:focus {
        color: #fff;
        background-color: transparent;
      }
    
      .header-socials a.ico-facebook,
      .navbar.scroll .header-socials a.ico-facebook {
        background-color: #3b5998;
        border-color: #3b5998;
      }
      .header-socials a.ico-twitter,
      .navbar.scroll .header-socials a.ico-twitter {
        background-color: #00a9ed;
        border-color: #00a9ed;
      }
      .header-socials a.ico-behance,
      .navbar.scroll .header-socials a.ico-behance {
        background-color: #2473f6;
        border-color: #2473f6;
      }
      .header-socials a.ico-google-plus,
      .navbar.scroll .header-socials a.ico-google-plus {
        background-color: #cd1111;
        border-color: #cd1111;
      }
      .header-socials a.ico-linkedin,
      .navbar.scroll .header-socials a.ico-linkedin {
        background-color: #015886;
        border-color: #015886;
      }
      .header-socials a.ico-dribbble,
      .navbar.scroll .header-socials a.ico-dribbble {
        background-color: #d92d84;
        border-color: #d92d84;
      }
      .header-socials a.ico-instagram,
      .navbar.scroll .header-socials a.ico-instagram {
        background-color: #beb3a8;
        border-color: #beb3a8;
      }
      .header-socials a.ico-pinterest,
      .navbar.scroll .header-socials a.ico-pinterest {
        background-color: #ac281a;
        border-color: #ac281a;
      }
      .header-socials a.ico-youtube,
      .navbar.scroll .header-socials a.ico-youtube {
        background-color: #cd1b20;
        border-color: #cd1b20;
      }
      .header-socials a.ico-tumblr,
      .navbar.scroll .header-socials a.ico-tumblr {
        background-color: #3a5976;
        border-color: #3a5976;
      }
      .header-socials a.ico-vk,
      .navbar.scroll .header-socials a.ico-vk {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    
      .header-socials a:hover {
        color: #fff;
      }
    
      .header-store img {
        margin-top: 8px;
      }
      .hero-section {
        margin-top: 68px;
      }
    
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 15px;
      }
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      #hero-1 h2 {
        font-size: 3.5rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding-right: 0;
      }
      .hero-section .newsletter-form {
        margin-top: 26px;
        margin-right: 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        font-size: 1.066rem;
        line-height: 1;
        margin-right: 10px;
      }
      .hero-1-img img {
        max-width: 220%;
      }
      #features-2 {
        padding-bottom: 20px;
      }
    
      .fbox-2 {
        padding: 0;
        margin-bottom: 60px;
      }
      .fbox-3 {
        padding: 60px 15px 45px;
      }
      .fbox-5 {
        margin-bottom: 25px;
      }
      .fbox-7 {
        text-align: center;
        padding: 0 5%;
      }
      .fbox-6.pr-30 {
        padding-right: 0;
      }
      .fbox-6.pl-30 {
        padding-left: 0;
      }
    
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-5-txt {
        padding-left: 18px;
      }
    
      #content-5 {
        padding-bottom: 0;
      }
      #content-6 {
        padding-top: 0;
      }
      #content-5 .bg-inner {
        padding-bottom: 40px;
      }
      #content-6 .bg-inner {
        padding-top: 40px;
      }
    
      .content-txt,
      #content-8 .content-txt,
      #content-10 .content-txt {
        padding-right: 0;
        padding-left: 0;
      }
      #content-6 .content-txt.mt-50 {
        margin-top: 20px;
      }
      .small-statistic.mt-40 {
        margin-top: 30px;
      }
    
      .content-txt h3.h3-xl {
        margin-bottom: 15px;
      }
      .content-txt h5.h5-sm {
        margin-top: 15px;
        margin-bottom: 10px;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px;
        margin: 0 0 -80px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      .content-5-img {
        margin: 0 0 40px 0;
      }
      .content-6-img {
        margin: 0;
      }
      .content-7-img img {
        max-width: 330%;
      }
    
      .screenshots-wrap {
        margin-bottom: 80px;
      }
      .screens-section .slick-dots {
        bottom: -80px;
      }
    
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 5px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 40px 20px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 56px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 35px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 0.85rem;
        padding: 0;
      }
      .pricing-table ul.features li {
        font-size: 0.9rem;
        padding: 6px 0;
      }
    
      .pricing-table .btn {
        font-size: 0.8rem;
        letter-spacing: -0.5px;
        padding: 0.8rem 1.5rem;
      }
    
      .pricing-text {
        margin-top: 20px;
        margin-bottom: 20px;
        padding-bottom: 25px;
      }
      .pricing-text p {
        font-size: 14px;
        line-height: 22px;
      }
    
      .review-1 {
        margin-bottom: 20px;
      }
      .statistic-block p.statistic-number {
        font-size: 2.85rem;
        margin-bottom: 10px;
      }
      .statistic-block p {
        font-size: 0.8125rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        margin-bottom: 10px;
      }
    
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      #faqs-page {
        margin-top: 140px;
        margin-bottom: 55px;
      }
      #faqs-left {
        padding-right: 15px;
      }
      #faqs-right {
        padding-left: 15px;
      }
    
      .question {
        margin-bottom: 22px;
      }
      .question h5 {
        margin-bottom: 5px;
      }
    
      .more-questions-btn {
        margin-top: 30px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 60px;
      }
      .newsletter-section .newsletter-form .btn {
        height: 60px;
      }
    
      .newsletter-txt p {
        padding: 0 5%;
      }
    
      .sidebar-div.mb-40 {
        margin-bottom: 30px;
      }
      .sidebar-div.mb-50 {
        margin-bottom: 40px;
      }
    
      #sidebar-right h5.h5-sm,
      #sidebar-left h5.h5-sm {
        margin-bottom: 20px;
      }
      #leave-comment.mt-80 {
        margin-top: 50px;
      }
      #contacts-2 .form-holder {
        margin-right: 0;
        margin-left: 0;
      }
    
      .footer h5 {
        margin-bottom: 20px;
      }
      .footer-socials-links h5 {
        margin-bottom: 10px;
      }
    
      .footer-stores-badge.text-right {
        text-align: left !important;
      }
    
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 15px;
      }
      #footer-5 .foo-links li {
        margin: 0 8px;
      }
    
      #footer-5 .foo-logo {
        text-align: center;
        margin-bottom: 25px;
      }
      #footer-5 .footer-links {
        margin-bottom: 10px;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
      #footer-5 .footer-copyright {
        padding-bottom: 60px;
      }
      .bottom-form {
        min-width: 240px;
        max-width: 240px;
      }
      .bottom-form-header {
        padding: 10px 16px;
      }
      .bottom-form-header span {
        right: 10px;
        top: -30px;
        width: 50px;
        height: 50px;
        line-height: 50px !important;
      }
      .bottom-form-header .svg-inline--fa {
        font-size: 1.65rem;
      }
    
      #terms-page {
        margin-top: 140px;
        margin-bottom: 50px;
      }
      .terms-box {
        margin-bottom: 30px;
      }
      .terms-box h4 {
        margin-bottom: 15px;
      }
      .terms-box p span {
        font-size: 1rem;
        margin-right: 2px;
      }
    }
    
    @media (max-width: 767px) {
      html {
        font-size: 15px;
      }
      .wide-100 {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .wide-60 {
        padding-top: 80px;
        padding-bottom: 40px;
      }
      .pt-100,
      .division.pt-100 {
        padding-top: 80px;
      }
      .pb-100 {
        padding-bottom: 80px;
      }
    
      .bg-light {
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar {
        padding: 1.25rem 1.25rem;
        text-align: center;
      }
    
      .navbar.bg-tra {
        padding: 1.25rem 1.25rem;
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar.bg-tra.black-scroll {
        background-color: #333 !important;
      }
      .navbar.bg-tra.bg-tra.green-scroll {
        background-color: #48af4b !important;
      }
      .navbar.bg-tra.bg-tra.blue-scroll {
        background-color: #389bf2 !important;
      }
      .navbar.bg-tra.bg-tra.coral-scroll {
        background-color: #fa5876 !important;
      }
    
      .navbar.scroll.bg-tra {
        padding: 1.25rem 1.25rem;
      }
    
      .logo-white,
      .navbar-light.bg-tra .logo-white,
      .navbar-light.bg-light .logo-white,
      .bg-tra .logo-white,
      .bg-dark .logo-white {
        display: none;
      }
    
      .bg-tra .logo-black,
      .navbar-light.bg-tra .logo-black,
      .logo-black,
      .navbar-light.bg-light .logo-black {
        display: block;
      }
    
      .navbar.bg-tra.black-scroll .logo-black,
      .navbar.bg-tra.green-scroll .logo-black,
      .navbar.bg-tra.blue-scroll .logo-black,
      .navbar.bg-tra.coral-scroll .logo-black {
        display: none;
      }
    
      .navbar.bg-tra.black-scroll .logo-white,
      .navbar.bg-tra.green-scroll .logo-white,
      .navbar.bg-tra.blue-scroll .logo-white,
      .navbar.bg-tra.coral-scroll .logo-white {
        display: block;
      }
    
      .bg-tra .nav-link {
        color: #333;
      }
    
      .navbar.bg-tra.black-scroll .navbar-toggler,
      .navbar.bg-tra.green-scroll .navbar-toggler,
      .navbar.bg-tra.blue-scroll .navbar-toggler,
      .navbar.bg-tra.coral-scroll .navbar-toggler,
      .bg-tra.navbar-light.black-scroll .nav-link,
      .bg-tra.black-scroll .nav-link,
      .bg-tra.navbar-light.green-scroll .nav-link,
      .bg-tra.green-scroll .nav-link,
      .bg-tra.navbar-light.blue-scroll .nav-link,
      .bg-tra.blue-scroll .nav-link,
      .bg-tra.navbar-light.coral-scroll .nav-link,
      .bg-tra.coral-scroll .nav-link {
        color: #fff;
      }
    
      .navbar-nav .nav-link:focus,
      .navbar-light .navbar-nav .nav-link:focus,
      .navbar-nav .nav-link:hover,
      .navbar-light .navbar-nav .nav-link:hover {
        color: #858585;
      }
    
      .black-scroll .navbar-nav .nav-link:focus,
      .navbar-light.black-scroll .navbar-nav .nav-link:focus,
      .green-scroll .navbar-nav .nav-link:focus,
      .navbar-light.green-scroll .navbar-nav .nav-link:focus,
      .blue-scroll .navbar-nav .nav-link:focus,
      .navbar-light.blue-scroll .navbar-nav .nav-link:focus,
      .coral-scroll .navbar-nav .nav-link:focus,
      .navbar-light.coral-scroll .navbar-nav .nav-link:focus,
      .black-scroll .navbar-nav .nav-link:hover,
      .navbar-light.black-scroll .navbar-nav .nav-link:hover,
      .green-scroll .navbar-nav .nav-link:hover,
      .navbar-light.green-scroll .navbar-nav .nav-link:hover,
      .blue-scroll .navbar-nav .nav-link:hover,
      .navbar-light.blue-scroll .navbar-nav .nav-link:hover,
      .coral-scroll .navbar-nav .nav-link:hover,
      .navbar-light.coral-scroll .navbar-nav .nav-link:hover {
        color: #bbb;
      }
    
      .navbar-nav {
        padding-top: 15px;
      }
      .navbar-expand-lg .navbar-nav .nav-link {
        font-size: 0.975rem;
        padding: 12px 0;
        margin-left: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
      .navbar .btn {
        font-size: 0.925rem;
        line-height: 1;
        padding: 0.925rem 2.5rem;
        margin-top: 10px;
        margin-left: 0;
      }
      .navbar .btn.btn-tra-white,
      .navbar.scroll .btn.btn-tra-white {
        color: #222;
        border-color: #222;
      }
      .header .btn.tra-hover:hover {
        color: #222;
        background-color: transparent;
        border-color: #222;
      }
      .header .btn.white-hover:hover,
      .header .navbar.scroll .btn.white-hover:hover {
        color: #fff;
        background-color: #333;
        border-color: #333;
      }
      .header .btn.white-hover:hover span,
      .navbar.scroll .btn.white-hover:hover span {
        color: #fff;
      }
      .navbar .btn.tra-hover:hover span,
      .navbar.scroll .btn.tra-hover:hover span {
        color: #333;
      }
    
      .header .black-scroll .btn.tra-hover:hover,
      .header .green-scroll .btn.tra-hover:hover,
      .header .blue-scroll .btn.tra-hover:hover,
      .header .coral-scroll .btn.tra-hover:hover {
        background-color: transparent;
        border-color: #fff;
      }
      .header .black-scroll .btn.tra-hover:hover span,
      .header .green-scroll .btn.tra-hover:hover span,
      .header .blue-scroll .btn.tra-hover:hover span,
      .header .coral-scroll .btn.tra-hover:hover span {
        color: #fff;
      }
    
      .dropdown-menu {
        text-align: center;
      }
      .dropdown-item {
        font-size: 1.15rem;
        padding: 0.5rem 1.25rem;
      }
    
      .header-socials {
        margin: 12px auto 0;
      }
      .header-socials a {
        color: #fff;
        margin-left: 2px;
      }
      .header-socials a,
      .navbar.scroll .header-socials a,
      .navbar-light .header-socials a {
        color: #fff;
      }
    
      .navbar-expand-lg .nl-simple a:before {
        display: none;
      }
      .navbar-expand-lg .nl-simple a:hover:before,
      .navbar-expand-lg .nl-simple a:focus:before {
        display: none;
      }
    
      .navbar-light .nav-link:focus,
      .nav-link:focus {
        color: #fff;
        background-color: transparent;
      }
    
      .header-socials a.ico-facebook,
      .navbar.scroll .header-socials a.ico-facebook {
        background-color: #3b5998;
        border-color: #3b5998;
      }
      .header-socials a.ico-twitter,
      .navbar.scroll .header-socials a.ico-twitter {
        background-color: #00a9ed;
        border-color: #00a9ed;
      }
      .header-socials a.ico-behance,
      .navbar.scroll .header-socials a.ico-behance {
        background-color: #2473f6;
        border-color: #2473f6;
      }
      .header-socials a.ico-google-plus,
      .navbar.scroll .header-socials a.ico-google-plus {
        background-color: #cd1111;
        border-color: #cd1111;
      }
      .header-socials a.ico-linkedin,
      .navbar.scroll .header-socials a.ico-linkedin {
        background-color: #015886;
        border-color: #015886;
      }
      .header-socials a.ico-dribbble,
      .navbar.scroll .header-socials a.ico-dribbble {
        background-color: #d92d84;
        border-color: #d92d84;
      }
      .header-socials a.ico-instagram,
      .navbar.scroll .header-socials a.ico-instagram {
        background-color: #beb3a8;
        border-color: #beb3a8;
      }
      .header-socials a.ico-pinterest,
      .navbar.scroll .header-socials a.ico-pinterest {
        background-color: #ac281a;
        border-color: #ac281a;
      }
      .header-socials a.ico-youtube,
      .navbar.scroll .header-socials a.ico-youtube {
        background-color: #cd1b20;
        border-color: #cd1b20;
      }
      .header-socials a.ico-tumblr,
      .navbar.scroll .header-socials a.ico-tumblr {
        background-color: #3a5976;
        border-color: #3a5976;
      }
      .header-socials a.ico-vk,
      .navbar.scroll .header-socials a.ico-vk {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    
      .header-socials a:hover {
        color: #fff;
      }
    
      .header-store img {
        margin-top: 8px;
      }
      .hero-section {
        margin-top: 68px;
      }
      #features-2 {
        padding-bottom: 20px;
      }
    
      .fbox-2 {
        padding: 0;
        margin-bottom: 60px;
      }
      .fbox-6.pr-30 {
        padding-right: 0;
      }
      .fbox-6.pl-30 {
        padding-left: 0;
      }
      #content-5 {
        padding-bottom: 0;
      }
      #content-6 {
        padding-top: 0;
      }
      #content-5 .bg-inner {
        padding-bottom: 40px;
      }
      #content-6 .bg-inner {
        padding-top: 40px;
      }
    
      .content-txt,
      #content-8 .content-txt,
      #content-10 .content-txt {
        padding-right: 0;
        padding-left: 0;
      }
      .small-statistic.mt-40 {
        margin-top: 30px;
      }
      .app-devices {
        padding: 5px 0 0 5px;
      }
    
      .content-txt h3.h3-xl {
        margin-bottom: 15px;
      }
      .content-txt h5.h5-sm {
        margin-top: 15px;
        margin-bottom: 10px;
      }
    
      .content-5-img {
        margin: 0 0 40px 0;
      }
      .content-6-img {
        margin: 0;
      }
      .screenshots-wrap {
        margin-bottom: 80px;
      }
      .screens-section .slick-dots {
        bottom: -80px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      .review-1 {
        margin-bottom: 20px;
      }
      #faqs-page {
        margin-top: 140px;
        margin-bottom: 55px;
      }
      #faqs-left {
        padding-right: 15px;
      }
      #faqs-right {
        padding-left: 15px;
      }
    
      .question {
        margin-bottom: 22px;
      }
      .question h5 {
        margin-bottom: 5px;
      }
    
      .more-questions-btn {
        margin-top: 30px;
      }
    
      .sidebar-div.mb-40 {
        margin-bottom: 30px;
      }
      .sidebar-div.mb-50 {
        margin-bottom: 40px;
      }
      #sidebar-right #text-widget {
        margin-bottom: 0;
      }
    
      #sidebar-right h5.h5-sm,
      #sidebar-left h5.h5-sm {
        margin-bottom: 20px;
      }
      #leave-comment.mt-80 {
        margin-top: 50px;
      }
    
      #contacts-2 .form-holder {
        margin-right: 0;
        margin-left: 0;
      }
    
      .footer h5 {
        margin-bottom: 20px;
      }
    
      .footer-stores-badge.text-right {
        text-align: left !important;
      }
    
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 15px;
      }
      #footer-5 .foo-links li {
        margin: 0 8px;
      }
    
      #footer-5 .foo-logo {
        text-align: center;
        margin-bottom: 25px;
      }
      #footer-5 .footer-links {
        margin-bottom: 10px;
      }
      #footer-5 .footer-copyright {
        padding-bottom: 60px;
      }
    
      #terms-page {
        margin-top: 140px;
        margin-bottom: 50px;
      }
      .terms-box {
        margin-bottom: 30px;
      }
      .terms-box h4 {
        margin-bottom: 15px;
      }
      .terms-box p span {
        font-size: 1rem;
        margin-right: 2px;
      }
    }
    @media (min-width: 576px) and (max-width: 767.99px) {
      h5.h5-xs {
        font-size: 1.166rem;
      }
      h5.h5-sm {
        font-size: 1.166rem;
      }
      h5.h5-md {
        font-size: 1.166rem;
      }
      h5.h5-lg {
        font-size: 1.166rem;
      }
      h5.h5-xl {
        font-size: 1.2rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.3rem;
      }
      h4.h4-md {
        font-size: 1.3rem;
      }
      h4.h4-lg {
        font-size: 1.366rem;
      }
      h4.h4-xl {
        font-size: 1.4rem;
      }
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.54rem;
      }
      h3.h3-md {
        font-size: 1.625rem;
      }
      h3.h3-lg {
        font-size: 1.7rem;
      }
      h3.h3-xl {
        font-size: 1.85rem;
      }
      h2.h2-xs {
        font-size: 1.9rem;
      }
      h2.h2-sm {
        font-size: 1.95rem;
      }
      h2.h2-md {
        font-size: 2rem;
      }
      h2.h2-lg {
        font-size: 2.1rem;
      }
      h2.h2-xl {
        font-size: 2.2rem;
      }
      h2.h2-huge {
        font-size: 2.85rem;
      }
      p.p-sm {
        font-size: 1.066rem;
      }
      p {
        font-size: 1.066rem;
      }
      p.p-md {
        font-size: 1.066rem;
      }
      p.p-lg {
        font-size: 1.1rem;
      }
      p.p-xl {
        font-size: 1.1rem;
      }
      .btn.btn-sm {
        font-size: 0.925rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 1rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 1rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 1rem;
        padding: 1rem 2rem;
      }
    
      .video-btn {
        width: 90px;
        height: 90px;
        margin-top: -45px;
        margin-left: -45px;
        line-height: 80px !important;
      }
      .stores-badge {
        margin-top: 25px;
      }
      a.store {
        margin-right: 10px;
      }
    
      /* App Devices Icons */
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 3rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 1.066rem;
        padding-right: 5%;
      }
      ul.content-list li {
        font-size: 1.066rem;
      }
      span.section-id {
        margin-bottom: 18px;
      }
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 12px;
      }
      .section-title.text-center p {
        padding: 0 8%;
      }
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 0;
        margin-bottom: 40px;
      }
      #hero-1 .hero-txt {
        padding: 0;
        text-align: center !important;
      }
    
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      #hero-1 h2 {
        font-size: 3.25rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 5%;
      }
      .hero-section .newsletter-form {
        margin-top: 30px;
        margin: 0 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
    
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        font-size: 0.875rem;
        line-height: 1;
        margin-right: 10px;
      }
    
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 15% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 12%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 15% 0;
      }
      #features-5 .features-img {
        margin: 0 15% 50px;
      }
      .fbox-6-img {
        display: none;
      }
      #content-4 {
        padding-bottom: 40px;
      }
    
      #content-9 p {
        padding: 0 5%;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 10% 40px;
      }
      #content-2 .content-img {
        margin: 0 10% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 10%;
        padding-right: 10%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 12%;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 50px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.066rem;
        line-height: 1.3;
        padding: 0 14%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.066rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.166rem;
      }
      .statistic-block p.statistic-number {
        font-size: 2.75rem;
        margin-bottom: 10px;
      }
      .statistic-block p {
        font-size: 1.066rem;
      }
      #brands-2 {
        padding-top: 50px;
        padding-bottom: 30px;
      }
    
      .m-img {
        display: inline-block;
        padding: 40px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.066rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 12%;
      }
      .m-links a {
        font-size: 1.066rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 56px;
        font-size: 1.066rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 56px;
      }
    
      .newsletter-txt p {
        padding: 0 10%;
      }
      #sidebar-right {
        margin-top: 50px;
      }
      #sidebar-left {
        margin-bottom: 50px;
      }
      .register-form .btn {
        height: 54px;
      }
    
      .register-form p {
        padding: 0 5%;
      }
      .bottom-footer .footer-links.text-right {
        text-align: left !important;
        margin-top: 15px;
      }
    
      .footer-socials-links.text-right {
        text-align: left !important;
      }
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 0;
        margin-right: 15px;
      }
    
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.066rem;
      }
    
      #footer-3 .footer-copyright {
        margin-bottom: 15px;
      }
      #footer-3 .footer-links.text-right {
        text-align: left !important;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
    
      /* QUICK FORM */
      .bottom-form {
        min-width: 240px;
        max-width: 240px;
      }
      .bottom-form-header {
        padding: 10px 16px;
      }
      .bottom-form-header span {
        right: 10px;
        top: -30px;
        width: 50px;
        height: 50px;
        line-height: 50px !important;
      }
      .bottom-form-header .svg-inline--fa {
        font-size: 1.65rem;
      }
    }
    
    @media (max-width: 575px) {
      html {
        font-size: 14px;
      }
      p.p-sm {
        font-size: 1.1425rem;
      }
      p {
        font-size: 1.1425rem;
      }
      p.p-md {
        font-size: 1.1425rem;
      }
      p.p-lg {
        font-size: 1.1785rem;
      }
      p.p-xl {
        font-size: 1.1785rem;
      }
      .btn.btn-sm {
        font-size: 0.75rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 0.8125rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 0.9rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 0.9rem;
        padding: 1rem 2rem;
      }
      .video-btn {
        width: 80px;
        height: 80px;
        margin-top: -40px;
        margin-left: -40px;
        line-height: 70px !important;
      }
      .stores-badge {
        margin-top: 30px;
      }
      a.store {
        margin-right: 10px;
      }
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 3rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 1.075rem;
        padding-right: 5%;
      }
    
      .box-icon-sm [class^="ti-"],
      .box-icon-sm [class*=" ti-"] {
        font-size: 3.15rem;
      }
      .box-icon [class^="ti-"],
      .box-icon [class*=" ti-"] {
        font-size: 3.6rem;
      }
      .box-icon-md [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 3.75rem;
      }
      .box-icon-lg [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 4rem;
      }
    
      /* Content List */
      ul.content-list li {
        font-size: 1.1425rem;
      }
    
      /* Section ID */
      span.section-id {
        margin-bottom: 18px;
      }
    
      /* Section Title */
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 12px;
      }
      .section-title.text-center p {
        padding: 0;
      }
    
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 0;
        margin-bottom: 40px;
      }
      #hero-1 .hero-txt {
        text-align: center;
      }
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      .hero-section .newsletter-form {
        margin-top: 30px;
        margin: 0 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
    
      #sidebar-right {
        margin-top: 50px;
      }
      #sidebar-left {
        margin-bottom: 50px;
      }
    
      /* FOOTER */
      .bottom-footer .footer-links.text-right {
        text-align: left !important;
        margin-top: 15px;
      }
    
      .footer-socials-links.text-right {
        text-align: left !important;
      }
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 0;
        margin-right: 15px;
      }
    
      #footer-3 .footer-copyright {
        margin-bottom: 15px;
      }
      #footer-3 .footer-links.text-right {
        text-align: left !important;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
    }
    
    @media (min-width: 416px) and (max-width: 575.99px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
    
      /* Hero Images */
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 15% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 8%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0 3%;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* SCREENS */
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
    
      .statistic-block p.statistic-number {
        font-size: 2.75rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 8%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (min-width: 321px) and (max-width: 415px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
    
      /* Section ID */
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
    
      /* Hero Links */
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 10% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 5%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* SCREENS */
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
      .statistic-block p.statistic-number {
        font-size: 3rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 5%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      /* FAQs */
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
    
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
    
      .form-control,
      .register-form .form-control,
      .custom-select {
        height: 52px;
        font-size: 1.1425rem;
      }
      .register-form .btn {
        height: 52px;
      }
    
      .register-form label.error,
      .contact-form label.error,
      .register-form-msg .error,
      .contact-form-msg .error,
      .register-form-msg .loading,
      .contact-form-msg .loading {
        font-size: 1.1425rem;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (max-width: 320px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
    
      /* Hero Links */
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      .fbox-3 {
        padding: 60px 10% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 5%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
    
      /* STATISTIC */
      .statistic-block p.statistic-number {
        font-size: 3rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 5%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
    
      .contact-form .form-control,
      .register-form .form-control,
      .contact-form .custom-select {
        height: 52px;
        font-size: 1.1425rem;
      }
      .register-form .btn {
        height: 52px;
      }
    
      .register-form label.error,
      .contact-form label.error,
      .register-form-msg .error,
      .contact-form-msg .error,
      .register-form-msg .loading,
      .contact-form-msg .loading {
        font-size: 1.1425rem;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (min-width: 320px) and (max-width: 991px) {
      .event-img-meta {
        padding: 15px;
      }
      .event-img-meta h5 .h5-md {
        font-size: 1.875rem;
      }
      .event-img-meta p {
        font-size: 1rem;
      }
      .gallery-item:hover .image-zoom {
        margin-top: -15px;
        margin-left: -8px;
      }
    }
    `,id:'first_3',name:'Privecy Polciy'},
    { component:
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link rel='stylesheet' href='sixth.css' type='text/css' media='all' />
      <link
      rel="stylesheet"
      href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      />
      <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto%3A300%2Cregular%2C500%2C700%2C900%7CMontserrat%3A300%2Cregular%2C500%2C600%2C700%2C800%2C900&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel='stylesheet' href='https://app-landing-theme-01.netlify.app/theme.css' type='text/css' media='all' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto%3A300%7CMontserrat%3A700%2C600&#038;ver=1629878706' type='text/css' media='all' />
      
      </head>
      <body>
         
          <div id="post-6" class=" page type-page status-publish hentry single-page-details">
            <section data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="fixed" class="vc_section">
                  <div id="hero-1" class="bg-white  hero-section  bg-fixed"><div >
                      <div class="container">
                          <div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit"
                          ><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra hero-txt hero-1-txt">
                              <div class="vc_column-inner"><div class="wpb_wrapper ">
              <div class="hero-txt">
                  <h2 class=" wow perch-fadeInUp fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">Disclaimer</h2>
                  <h3 class="h3-sm  wow perch-fadeInUp fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">Powerful App for creative people & designers</h3>
                  <p class="p-md  wow perch-fadeInUp fadeInUp" data-wow-delay="500ms" data-wow-duration="1200ms"> Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in iaculis pretium magna, mauris rhoncus ipsum in placerat feugiat primis ultrice </p>
                  <div class="stores-badge  wow perch-fadeInUp fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                      <a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Get Started Now" class="store-btn" width="160"></span></a><a target="_self"  href="#"  title="Get Started Now"  class="img-btn store btn-type-dark"><span><img src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Get Started Now" class="store-btn" width="170"></span></a>
                      <span class="os-version">* Requires iOS 7.0 or higher</span>
                  </div>
              </div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-6 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
              <div class="wow perch-fadeInRight fadeInRight hero-1-img" data-wow-delay="300ms" data-wow-duration="1200ms">
              <img   src="https://app-landing-theme-01.netlify.app/images/hero-1-img.png" alt="External image" />
              </div></div></div></div></div></div></div></div></section><div class="vc_row-full-width vc_clearfix"></div><section id="about" data-vc-full-width="false" data-vc-full-width-init="false" data-vc-parallax-image="https://app-landing-theme-01.netlify.app/images/banner-1.jpg" data-opacity="1" data-size="cover" data-width="100%" data-position="cover" data-repeat="cover" data-attachment="inherit" class="vc_section"><div id="features-4" class="bg-white wide-60 features-section      "><div ><div class="container"><div class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"><div class="wpb_column vc_column_container vc_col-sm-5 bg-tra"><div class="vc_column-inner"><div class="wpb_wrapper ">
                
                  </div></div></div></div></div></div></div></section><footer id="footer" class="footer division bg-tra ">
                      <div class="container">
          
                          <div class="row pt-100 mb-20">
                          <div class="col-lg-4">
                          <div id="perch_store_badges-2" class="footer-widget mb-40 footer-stores-badge"><h5 class="h5-sm">App Landing® Application</h5><a href="#" class="store" target="_blank">
                              <img class="appstore-original" src="https://app-landing-theme-01.netlify.app/images/appstore.png" alt="Appstore" width="160" height="50">
                          </a><a href="#" class="store" target="_blank">
                              <img class="appstore-original" src="https://app-landing-theme-01.netlify.app/images/googleplay.png" alt="Google Play" width="160" height="50">
                          </a></div>	        </div>
                                  <div class="col-md-4 col-lg-3">
                          <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Company</h5><div class="menu-company-container"><ul class="menu">
                              <li ><a href="/priveypolicy.html">Privacy policy</a></li>
                              <li ><a href="/Disclaimer.html">Disclaimer</a></li>
                              <li ><a href="termcondition.html">Terms and conditions</a></li>
                              <li ><a href="#">Site Map</a></li>
                              </ul></div></div>	   
                               </div>
                                  <div class="col-md-3 col-lg-2 ">
                          <div  class="footer-widget mb-40 widget_nav_menu"><h5 class="h5-sm">Connect</h5><div class="menu-connect-container"><ul class="menu">
                              <li ><a href="#">FAQs</a></li>
                              <li ><a href="#">Editor Help</a></li>
                              <li ><a href="#">Life Chatting</a></li>
                              <li ><a href="#">Contact Us</a></li>
                              </ul></div></div>	        </div>
                          <div class="col-md-4 col-lg-3">
                          <div id="perch-social-icons-3" class="footer-widget mb-40 social-widget"><div class="widget-content flow-me-widget"><div class="footer-socials-links mb-25 text-right"><h5 class="h5-sm"><a target="_blank" href="https://facebook.com" title="Facebook" class="foo-facebook">
                              <span>Facebook</span>
                              </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Google-plus" class="foo-facebook foo-google-plus">
          
                              <span>Google-plus</span>
                              </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Twitter" class="foo-facebook foo-google-plus foo-twitter">
          
                              <span>Twitter</span>
                              </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Youtube" class="foo-facebook foo-google-plus foo-twitter foo-youtube">
          
                              <span>Youtube</span>
                              </a></h5><h5 class="h5-sm"><a target="_blank" href="#" title="Dribbble" class="foo-facebook foo-google-plus foo-twitter foo-youtube foo-dribbble">
                              <span>Dribbble</span>
                              </a></h5></div></div></div>	    
                  
                  </div>
                  </div> 
                  </footer>
                  </div></div>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></script>
      <script type='text/javascript' src='https://app-landing-theme-01.netlify.app/jquery.js' id='jquery-core-js'></script>
      <script type='text/javascript' src='https://app-landing-theme-01.netlify.app/stellar.js' ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      
      </body>
      </html>`  ,styles:`#loading {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      text-align: center;
      opacity: 0.7;
      background-color: #fff;
      z-index: 99;
    }
    
    #loading-image {
      position: absolute;
      top: 100px;
      left: 240px;
      z-index: 100;
    }
    @media (max-width: 575px){
      #ivlp7l {
        margin-top: 15%;
    }
    .video-btn.play-icon-tra.wow.fadeInUp {
      margin-top: 40%;
    }
    }
    .btn {
      background-color: #48af4b;
      border: 2px solid #48af4b;
    }
    .las {
      font-size: 75px !important;
      color: gray !important;
    }
    .lab {
      font-size: 75px !important;
      color: gray !important;
    }
    
    .mb-0 {
      margin-bottom: 0;
    }
    .p-bottom-0 {
      padding-bottom: 0;
    }
    .p-left-0 {
      padding-left: 0px;
    }
    .p-right-0 {
      padding-right: 0px;
    }
    .bg-lightgrey {
      background-color: #f0f0f0 !important;
    }
    .fbox-3.light-hover:hover {
      border-bottom: 1px solid #fff;
    }
    .fbox-3.light-hover:hover .b-icon span,
    .bg-light {
      background-color: #fff;
    }
    .wide-100 {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .wide-60 {
      padding-top: 80px;
      padding-bottom: 40px;
    }
    
    .pt-100,
    .division.pt-100 {
      padding-top: 80px;
    }
    .pb-100 {
      padding-bottom: 80px;
    }
    h5.h5-xs {
      font-size: 1.111rem;
    }
    h5.h5-sm {
      font-size: 1.111rem;
    }
    h5.h5-md {
      font-size: 1.14rem;
    }
    h5.h5-lg {
      font-size: 1.222rem;
    }
    h5.h5-xl {
      font-size: 1.333rem;
    }
    
    h4.h4-xs {
      font-size: 1.44rem;
    }
    h4.h4-sm {
      font-size: 1.55rem;
    }
    h4.h4-md {
      font-size: 1.66rem;
    }
    h4.h4-lg {
      font-size: 1.77rem;
    }
    h4.h4-xl {
      font-size: 1.88rem;
    }
    
    h3.h3-xs {
      font-size: 2.11rem;
    }
    h3.h3-sm {
      font-size: 2.22rem;
    }
    h3.h3-md {
      font-size: 2.33rem;
    }
    h3.h3-lg {
      font-size: 2.44rem;
    }
    h3.h3-xl {
      font-size: 2.5rem;
    }
    
    h2.h2-xs {
      font-size: 2.75rem;
    }
    h2.h2-sm {
      font-size: 2.9rem;
    }
    h2.h2-md {
      font-size: 3.15rem;
    }
    h2.h2-lg {
      font-size: 3.25rem;
    }
    h2.h2-xl {
      font-size: 3.35rem;
    }
    h2.h2-huge {
      font-size: 4.25rem;
    }
    
    p.p-sm {
      font-size: 0.95rem;
    }
    p {
      font-size: 1rem;
    }
    p.p-md {
      font-size: 1.066rem;
    }
    p.p-lg {
      font-size: 1.133rem;
    }
    p.p-xl {
      font-size: 1.266rem;
    }
    
    .btn.btn-sm {
      font-size: 0.75rem;
      padding: 0.785rem 1.75rem;
    }
    .btn {
      font-size: 0.8125rem;
      padding: 0.825rem 1.65rem;
    }
    .btn.btn-md {
      font-size: 0.875rem;
      padding: 0.875rem 1.75rem;
    }
    .btn.btn-lg {
      font-size: 0.875rem;
      padding: 1rem 2rem;
    }
    .stores-badge {
      margin-top: 35px;
    }
    a.store {
      margin-right: 10px;
    }
    
    .box-icon-sm [class^="ti-"],
    .box-icon-sm [class*=" ti-"] {
      font-size: 3.5rem;
    }
    .box-icon [class^="ti-"],
    .box-icon [class*=" ti-"] {
      font-size: 3.75rem;
    }
    .box-icon-md [class^="ti-"],
    .box-icon-md [class*=" ti-"] {
      font-size: 4rem;
    }
    .box-icon-lg [class^="ti-"],
    .box-icon-md [class*=" ti-"] {
      font-size: 4.25rem;
    }
    span.section-id {
      margin-bottom: 20px;
    }
    .section-title {
      margin-bottom: 50px;
    }
    .section-title.text-center p {
      padding: 0 18%;
    }
    
    .navbar-brand {
      margin-right: 3rem;
    }
    
    .nav-item {
      margin: 0 1.25rem;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      font-size: 0.785rem;
    }
    .navbar .btn {
      font-size: 0.785rem;
    }
    .header-socials {
      margin-top: 3px;
      margin-left: 0;
    }
    .header-socials span {
      margin-left: 5px;
    }
    .header-socials a {
      width: 36px;
      height: 36px;
      font-size: 1rem;
      line-height: 31px !important;
    }
    #hero-1 {
      padding-top: 160px;
      padding-bottom: 0;
    }
    #hero-1 .hero-txt {
      margin-top: 60px;
    }
    .hero-app-logo {
      margin-bottom: 20px;
    }
    
    .hero-app-logo img {
      width: 100px;
      height: auto;
    }
    #hero-1 h2 {
      font-size: 4.25rem;
      letter-spacing: -1.5px;
      margin-bottom: 20px;
    }
    #hero-1 h3 {
      margin-bottom: 20px;
    }
    #hero-1 .hero-txt p {
      padding-right: 5%;
    }
    .hero-section .newsletter-form {
      margin-top: 32px;
      margin-right: 10%;
    }
    .hero-section .newsletter-form .form-control {
      height: 56px;
    }
    .hero-section .newsletter-form .btn {
      height: 56px;
    }
    .hero-links {
      margin-top: 5px;
    }
    .hero-links span {
      font-size: 0.925rem;
      line-height: 1;
      margin-right: 20px;
    }
    .hero-1-img img {
      max-width: 180%;
    }
    
    .fbox-2 {
      padding: 0 5px;
    }
    .fbox-3 {
      padding: 60px 15px 45px;
    }
    .fbox-5 {
      margin-bottom: 35px;
    }
    .fbox-6.pr-30 {
      padding-right: 0;
    }
    .fbox-6.pl-30 {
      padding-left: 0;
    }
    
    h2.tra-digit {
      font-size: 4.25rem;
      margin-bottom: 10px;
      margin-left: -5px;
    }
    
    .fbox-1 h5,
    .fbox-4 h5,
    .fbox-6 h5 {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .fbox-2 h5,
    .fbox-3 h5 {
      margin-top: 35px;
      margin-bottom: 10px;
    }
    .fbox-5-txt {
      padding-left: 20px;
    }
    .content-txt {
      padding-right: 15px;
      padding-left: 15px;
    }
    #content-6 .content-txt.mt-50 {
      margin-top: 20px;
    }
    #content-8 .content-txt {
      padding-right: 30px;
      padding-left: 25px;
    }
    #content-10 .content-txt {
      padding-right: 10%;
      padding-left: 10%;
    }
    .small-statistic.mt-40 {
      margin-top: 30px;
    }
    .app-devices {
      padding: 5px 0 0 5px;
    }
    
    .content-txt h3.h3-xl {
      margin-bottom: 20px;
    }
    .content-txt h5.h5-sm {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    
    #content-9 p {
      padding: 0 10%;
    }
    #content-10 .content-txt p {
      padding: 0;
    }
    
    .content-boxes {
      padding: 40px 30px;
      margin: 0 5px -80px;
    }
    .cbox-1-txt {
      padding-left: 18px;
    }
    
    .content-5-img {
      margin: 0 5px -80px;
    }
    .content-6-img {
      margin: -80px 5px 0;
    }
    .screenshots-wrap {
      margin-bottom: 80px;
    }
    .screens-section .slick-dots {
      bottom: -80px;
    }
    #video-1 {
      padding-top: 150px;
      padding-bottom: 150px;
    }
    #video-2 .video-preview {
      margin-bottom: -80px;
    }
    
    .pricing-table {
      padding: 50px 25px;
    }
    #pricing-2 .pricing-table {
      padding: 50px 30px;
    }
    .pricing-table span.price,
    #pricing-2 .price span {
      font-size: 65px;
      line-height: 1;
    }
    .pricing-plan sup,
    #pricing-2 .price sup {
      font-size: 40px;
    }
    p.validity {
      font-size: 1.1rem;
      margin-top: 5px;
    }
    #pricing-2 .price span.price-vat {
      font-size: 0.925rem;
      padding: 0;
    }
    .pricing-table ul.features li {
      font-size: 1rem;
      padding: 7px 0;
    }
    
    .statistic-block p.statistic-number {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    .statistic-block p {
      font-size: 0.8125rem;
    }
    .m-img {
      display: inline-block;
      padding: 30px;
    }
    .m-img img {
      width: 120px;
      height: 120px;
    }
    
    .more-app-box h5 {
      margin-bottom: 8px;
      margin-top: 25px;
    }
    .more-app-box span.app-cat {
      margin-bottom: 10px;
    }
    #press-1 .col-md-3 {
      padding-right: 15px;
      padding-left: 15px;
    }
    .press-logo {
      padding: 60px 30px;
    }
    .press-txt p {
      margin-bottom: 30px;
      padding: 0;
    }
    .press-txt.mt-20 {
      margin-top: 0;
    }
    
    #faqs-page {
      margin-top: 160px;
      margin-bottom: 60px;
    }
    #faqs-left {
      padding-right: 10px;
    }
    #faqs-right {
      padding-left: 10px;
    }
    
    .question {
      margin-bottom: 20px;
    }
    .question h5 {
      margin-bottom: 10px;
    }
    .newsletter-section .newsletter-form .form-control {
      height: 60px;
    }
    .newsletter-section .newsletter-form .btn {
      height: 62px;
    }
    
    .newsletter-txt p {
      padding: 0 10%;
    }
    
    #sidebar-right .pl-60 {
      padding-left: 10px;
    }
    #sidebar-left .pl-60 {
      padding-right: 10px;
    }
    
    #contacts-2 .form-holder {
      margin-right: 2%;
      margin-left: 2%;
    }
    
    .footer h5 {
      margin-bottom: 20px;
    }
    .footer-socials-links h5 {
      margin-bottom: 10px;
    }
    #terms-page {
      margin-top: 160px;
      margin-bottom: 45px;
    }
    @media (min-width: 768px) and (max-width: 991.99px) {
      html {
        font-size: 16px;
      }
      .wide-100 {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .wide-60 {
        padding-top: 80px;
        padding-bottom: 40px;
      }
    
      .pt-100,
      .division.pt-100 {
        padding-top: 80px;
      }
      .pb-100 {
        padding-bottom: 80px;
      }
      h5.h5-xs {
        font-size: 1.111rem;
      }
      h5.h5-sm {
        font-size: 1.111rem;
      }
      h5.h5-md {
        font-size: 1.14rem;
      }
      h5.h5-lg {
        font-size: 1.15rem;
      }
      h5.h5-xl {
        font-size: 1.2rem;
      }
      h4.h4-xs {
        font-size: 1.222rem;
      }
      h4.h4-sm {
        font-size: 1.3rem;
      }
      h4.h4-md {
        font-size: 1.35rem;
      }
      h4.h4-lg {
        font-size: 1.45rem;
      }
      h4.h4-xl {
        font-size: 1.5rem;
      }
      h3.h3-xs {
        font-size: 1.6rem;
      }
      h3.h3-sm {
        font-size: 1.7rem;
      }
      h3.h3-md {
        font-size: 1.8rem;
      }
      h3.h3-lg {
        font-size: 1.9rem;
      }
      h3.h3-xl {
        font-size: 2rem;
      }
      h2.h2-xs {
        font-size: 2.15rem;
      }
      h2.h2-sm {
        font-size: 2.25rem;
      }
      h2.h2-md {
        font-size: 2.35rem;
      }
      h2.h2-lg {
        font-size: 2.45rem;
      }
      h2.h2-xl {
        font-size: 2.55rem;
      }
      h2.h2-huge {
        font-size: 3.25rem;
      }
      p.p-sm {
        font-size: 0.95rem;
      }
      p {
        font-size: 1rem;
      }
      p.p-md {
        font-size: 1rem;
      }
      p.p-lg {
        font-size: 1.05rem;
      }
      p.p-xl {
        font-size: 1.1rem;
      }
      .btn.btn-sm {
        font-size: 0.75rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 0.8125rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 0.9rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 0.9rem;
        padding: 1rem 2rem;
      }
    
      .video-btn {
        width: 90px;
        height: 90px;
        margin-top: -45px;
        margin-left: -45px;
        line-height: 80px !important;
      }
      a.store {
        margin-right: 10px;
      }
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 2.15rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 0.95rem;
        padding-right: 5%;
      }
      .box-icon-sm [class^="ti-"],
      .box-icon-sm [class*=" ti-"] {
        font-size: 3.25rem;
      }
      .box-icon [class^="ti-"],
      .box-icon [class*=" ti-"] {
        font-size: 3.6rem;
      }
      .box-icon-md [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 3.85rem;
      }
      .box-icon-lg [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 4.1rem;
      }
      span.section-id {
        margin-bottom: 18px;
      }
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 10px;
      }
      .section-title.text-center p {
        padding: 0 12%;
      }
      .bg-light {
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar {
        padding: 1.25rem 1.25rem;
        text-align: center;
      }
    
      .navbar.bg-tra {
        padding: 1.25rem 1.25rem;
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar.bg-tra.black-scroll {
        background-color: #333 !important;
      }
      .navbar.bg-tra.bg-tra.green-scroll {
        background-color: #48af4b !important;
      }
      .navbar.bg-tra.bg-tra.blue-scroll {
        background-color: #389bf2 !important;
      }
      .navbar.bg-tra.bg-tra.coral-scroll {
        background-color: #fa5876 !important;
      }
    
      .navbar.scroll.bg-tra {
        padding: 1.25rem 1.25rem;
      }
    
      .navbar-nav {
        padding-top: 15px;
      }
      .navbar-expand-lg .navbar-nav .nav-link {
        font-size: 0.975rem;
        padding: 12px 0;
        margin-left: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
      .navbar .btn {
        font-size: 0.925rem;
        line-height: 1;
        padding: 0.925rem 2.5rem;
        margin-top: 10px;
        margin-left: 0;
      }
      .navbar .btn.btn-tra-white,
      .navbar.scroll .btn.btn-tra-white {
        color: #222;
        border-color: #222;
      }
      .header .btn.tra-hover:hover {
        color: #222;
        background-color: transparent;
        border-color: #222;
      }
      .header .btn.white-hover:hover,
      .header .navbar.scroll .btn.white-hover:hover {
        color: #fff;
        background-color: #333;
        border-color: #333;
      }
      .header .btn.white-hover:hover span,
      .navbar.scroll .btn.white-hover:hover span {
        color: #fff;
      }
      .navbar .btn.tra-hover:hover span,
      .navbar.scroll .btn.tra-hover:hover span {
        color: #333;
      }
    
      .header .black-scroll .btn.tra-hover:hover,
      .header .green-scroll .btn.tra-hover:hover,
      .header .blue-scroll .btn.tra-hover:hover,
      .header .coral-scroll .btn.tra-hover:hover {
        background-color: transparent;
        border-color: #fff;
      }
      .header .black-scroll .btn.tra-hover:hover span,
      .header .green-scroll .btn.tra-hover:hover span,
      .header .blue-scroll .btn.tra-hover:hover span,
      .header .coral-scroll .btn.tra-hover:hover span {
        color: #fff;
      }
    
      .dropdown-menu {
        text-align: center;
      }
      .dropdown-item {
        font-size: 1.15rem;
        padding: 0.5rem 1.25rem;
      }
    
      .header-socials {
        margin: 12px auto 0;
      }
      .header-socials a {
        color: #fff;
        margin-left: 2px;
      }
      .header-socials a,
      .navbar.scroll .header-socials a,
      .navbar-light .header-socials a {
        color: #fff;
      }
    
      .navbar-expand-lg .nl-simple a:before {
        display: none;
      }
      .navbar-expand-lg .nl-simple a:hover:before,
      .navbar-expand-lg .nl-simple a:focus:before {
        display: none;
      }
    
      .navbar-light .nav-link:focus,
      .nav-link:focus {
        color: #fff;
        background-color: transparent;
      }
    
      .header-socials a.ico-facebook,
      .navbar.scroll .header-socials a.ico-facebook {
        background-color: #3b5998;
        border-color: #3b5998;
      }
      .header-socials a.ico-twitter,
      .navbar.scroll .header-socials a.ico-twitter {
        background-color: #00a9ed;
        border-color: #00a9ed;
      }
      .header-socials a.ico-behance,
      .navbar.scroll .header-socials a.ico-behance {
        background-color: #2473f6;
        border-color: #2473f6;
      }
      .header-socials a.ico-google-plus,
      .navbar.scroll .header-socials a.ico-google-plus {
        background-color: #cd1111;
        border-color: #cd1111;
      }
      .header-socials a.ico-linkedin,
      .navbar.scroll .header-socials a.ico-linkedin {
        background-color: #015886;
        border-color: #015886;
      }
      .header-socials a.ico-dribbble,
      .navbar.scroll .header-socials a.ico-dribbble {
        background-color: #d92d84;
        border-color: #d92d84;
      }
      .header-socials a.ico-instagram,
      .navbar.scroll .header-socials a.ico-instagram {
        background-color: #beb3a8;
        border-color: #beb3a8;
      }
      .header-socials a.ico-pinterest,
      .navbar.scroll .header-socials a.ico-pinterest {
        background-color: #ac281a;
        border-color: #ac281a;
      }
      .header-socials a.ico-youtube,
      .navbar.scroll .header-socials a.ico-youtube {
        background-color: #cd1b20;
        border-color: #cd1b20;
      }
      .header-socials a.ico-tumblr,
      .navbar.scroll .header-socials a.ico-tumblr {
        background-color: #3a5976;
        border-color: #3a5976;
      }
      .header-socials a.ico-vk,
      .navbar.scroll .header-socials a.ico-vk {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    
      .header-socials a:hover {
        color: #fff;
      }
    
      .header-store img {
        margin-top: 8px;
      }
      .hero-section {
        margin-top: 68px;
      }
    
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 15px;
      }
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      #hero-1 h2 {
        font-size: 3.5rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding-right: 0;
      }
      .hero-section .newsletter-form {
        margin-top: 26px;
        margin-right: 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        font-size: 1.066rem;
        line-height: 1;
        margin-right: 10px;
      }
      .hero-1-img img {
        max-width: 220%;
      }
      #features-2 {
        padding-bottom: 20px;
      }
    
      .fbox-2 {
        padding: 0;
        margin-bottom: 60px;
      }
      .fbox-3 {
        padding: 60px 15px 45px;
      }
      .fbox-5 {
        margin-bottom: 25px;
      }
      .fbox-7 {
        text-align: center;
        padding: 0 5%;
      }
      .fbox-6.pr-30 {
        padding-right: 0;
      }
      .fbox-6.pl-30 {
        padding-left: 0;
      }
    
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-5-txt {
        padding-left: 18px;
      }
    
      #content-5 {
        padding-bottom: 0;
      }
      #content-6 {
        padding-top: 0;
      }
      #content-5 .bg-inner {
        padding-bottom: 40px;
      }
      #content-6 .bg-inner {
        padding-top: 40px;
      }
    
      .content-txt,
      #content-8 .content-txt,
      #content-10 .content-txt {
        padding-right: 0;
        padding-left: 0;
      }
      #content-6 .content-txt.mt-50 {
        margin-top: 20px;
      }
      .small-statistic.mt-40 {
        margin-top: 30px;
      }
    
      .content-txt h3.h3-xl {
        margin-bottom: 15px;
      }
      .content-txt h5.h5-sm {
        margin-top: 15px;
        margin-bottom: 10px;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px;
        margin: 0 0 -80px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      .content-5-img {
        margin: 0 0 40px 0;
      }
      .content-6-img {
        margin: 0;
      }
      .content-7-img img {
        max-width: 330%;
      }
    
      .screenshots-wrap {
        margin-bottom: 80px;
      }
      .screens-section .slick-dots {
        bottom: -80px;
      }
    
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 5px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 40px 20px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 56px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 35px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 0.85rem;
        padding: 0;
      }
      .pricing-table ul.features li {
        font-size: 0.9rem;
        padding: 6px 0;
      }
    
      .pricing-table .btn {
        font-size: 0.8rem;
        letter-spacing: -0.5px;
        padding: 0.8rem 1.5rem;
      }
    
      .pricing-text {
        margin-top: 20px;
        margin-bottom: 20px;
        padding-bottom: 25px;
      }
      .pricing-text p {
        font-size: 14px;
        line-height: 22px;
      }
    
      .review-1 {
        margin-bottom: 20px;
      }
      .statistic-block p.statistic-number {
        font-size: 2.85rem;
        margin-bottom: 10px;
      }
      .statistic-block p {
        font-size: 0.8125rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        margin-bottom: 10px;
      }
    
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      #faqs-page {
        margin-top: 140px;
        margin-bottom: 55px;
      }
      #faqs-left {
        padding-right: 15px;
      }
      #faqs-right {
        padding-left: 15px;
      }
    
      .question {
        margin-bottom: 22px;
      }
      .question h5 {
        margin-bottom: 5px;
      }
    
      .more-questions-btn {
        margin-top: 30px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 60px;
      }
      .newsletter-section .newsletter-form .btn {
        height: 60px;
      }
    
      .newsletter-txt p {
        padding: 0 5%;
      }
    
      .sidebar-div.mb-40 {
        margin-bottom: 30px;
      }
      .sidebar-div.mb-50 {
        margin-bottom: 40px;
      }
    
      #sidebar-right h5.h5-sm,
      #sidebar-left h5.h5-sm {
        margin-bottom: 20px;
      }
      #leave-comment.mt-80 {
        margin-top: 50px;
      }
      #contacts-2 .form-holder {
        margin-right: 0;
        margin-left: 0;
      }
    
      .footer h5 {
        margin-bottom: 20px;
      }
      .footer-socials-links h5 {
        margin-bottom: 10px;
      }
    
      .footer-stores-badge.text-right {
        text-align: left !important;
      }
    
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 15px;
      }
      #footer-5 .foo-links li {
        margin: 0 8px;
      }
    
      #footer-5 .foo-logo {
        text-align: center;
        margin-bottom: 25px;
      }
      #footer-5 .footer-links {
        margin-bottom: 10px;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
      #footer-5 .footer-copyright {
        padding-bottom: 60px;
      }
      .bottom-form {
        min-width: 240px;
        max-width: 240px;
      }
      .bottom-form-header {
        padding: 10px 16px;
      }
      .bottom-form-header span {
        right: 10px;
        top: -30px;
        width: 50px;
        height: 50px;
        line-height: 50px !important;
      }
      .bottom-form-header .svg-inline--fa {
        font-size: 1.65rem;
      }
    
      #terms-page {
        margin-top: 140px;
        margin-bottom: 50px;
      }
      .terms-box {
        margin-bottom: 30px;
      }
      .terms-box h4 {
        margin-bottom: 15px;
      }
      .terms-box p span {
        font-size: 1rem;
        margin-right: 2px;
      }
    }
    
    @media (max-width: 767px) {
      html {
        font-size: 15px;
      }
      .wide-100 {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .wide-60 {
        padding-top: 80px;
        padding-bottom: 40px;
      }
      .pt-100,
      .division.pt-100 {
        padding-top: 80px;
      }
      .pb-100 {
        padding-bottom: 80px;
      }
    
      .bg-light {
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar {
        padding: 1.25rem 1.25rem;
        text-align: center;
      }
    
      .navbar.bg-tra {
        padding: 1.25rem 1.25rem;
        background-color: #fff !important;
        box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
      }
      .navbar.bg-tra.black-scroll {
        background-color: #333 !important;
      }
      .navbar.bg-tra.bg-tra.green-scroll {
        background-color: #48af4b !important;
      }
      .navbar.bg-tra.bg-tra.blue-scroll {
        background-color: #389bf2 !important;
      }
      .navbar.bg-tra.bg-tra.coral-scroll {
        background-color: #fa5876 !important;
      }
    
      .navbar.scroll.bg-tra {
        padding: 1.25rem 1.25rem;
      }
    
      .logo-white,
      .navbar-light.bg-tra .logo-white,
      .navbar-light.bg-light .logo-white,
      .bg-tra .logo-white,
      .bg-dark .logo-white {
        display: none;
      }
    
      .bg-tra .logo-black,
      .navbar-light.bg-tra .logo-black,
      .logo-black,
      .navbar-light.bg-light .logo-black {
        display: block;
      }
    
      .navbar.bg-tra.black-scroll .logo-black,
      .navbar.bg-tra.green-scroll .logo-black,
      .navbar.bg-tra.blue-scroll .logo-black,
      .navbar.bg-tra.coral-scroll .logo-black {
        display: none;
      }
    
      .navbar.bg-tra.black-scroll .logo-white,
      .navbar.bg-tra.green-scroll .logo-white,
      .navbar.bg-tra.blue-scroll .logo-white,
      .navbar.bg-tra.coral-scroll .logo-white {
        display: block;
      }
    
      .bg-tra .nav-link {
        color: #333;
      }
    
      .navbar.bg-tra.black-scroll .navbar-toggler,
      .navbar.bg-tra.green-scroll .navbar-toggler,
      .navbar.bg-tra.blue-scroll .navbar-toggler,
      .navbar.bg-tra.coral-scroll .navbar-toggler,
      .bg-tra.navbar-light.black-scroll .nav-link,
      .bg-tra.black-scroll .nav-link,
      .bg-tra.navbar-light.green-scroll .nav-link,
      .bg-tra.green-scroll .nav-link,
      .bg-tra.navbar-light.blue-scroll .nav-link,
      .bg-tra.blue-scroll .nav-link,
      .bg-tra.navbar-light.coral-scroll .nav-link,
      .bg-tra.coral-scroll .nav-link {
        color: #fff;
      }
    
      .navbar-nav .nav-link:focus,
      .navbar-light .navbar-nav .nav-link:focus,
      .navbar-nav .nav-link:hover,
      .navbar-light .navbar-nav .nav-link:hover {
        color: #858585;
      }
    
      .black-scroll .navbar-nav .nav-link:focus,
      .navbar-light.black-scroll .navbar-nav .nav-link:focus,
      .green-scroll .navbar-nav .nav-link:focus,
      .navbar-light.green-scroll .navbar-nav .nav-link:focus,
      .blue-scroll .navbar-nav .nav-link:focus,
      .navbar-light.blue-scroll .navbar-nav .nav-link:focus,
      .coral-scroll .navbar-nav .nav-link:focus,
      .navbar-light.coral-scroll .navbar-nav .nav-link:focus,
      .black-scroll .navbar-nav .nav-link:hover,
      .navbar-light.black-scroll .navbar-nav .nav-link:hover,
      .green-scroll .navbar-nav .nav-link:hover,
      .navbar-light.green-scroll .navbar-nav .nav-link:hover,
      .blue-scroll .navbar-nav .nav-link:hover,
      .navbar-light.blue-scroll .navbar-nav .nav-link:hover,
      .coral-scroll .navbar-nav .nav-link:hover,
      .navbar-light.coral-scroll .navbar-nav .nav-link:hover {
        color: #bbb;
      }
    
      .navbar-nav {
        padding-top: 15px;
      }
      .navbar-expand-lg .navbar-nav .nav-link {
        font-size: 0.975rem;
        padding: 12px 0;
        margin-left: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
      .navbar .btn {
        font-size: 0.925rem;
        line-height: 1;
        padding: 0.925rem 2.5rem;
        margin-top: 10px;
        margin-left: 0;
      }
      .navbar .btn.btn-tra-white,
      .navbar.scroll .btn.btn-tra-white {
        color: #222;
        border-color: #222;
      }
      .header .btn.tra-hover:hover {
        color: #222;
        background-color: transparent;
        border-color: #222;
      }
      .header .btn.white-hover:hover,
      .header .navbar.scroll .btn.white-hover:hover {
        color: #fff;
        background-color: #333;
        border-color: #333;
      }
      .header .btn.white-hover:hover span,
      .navbar.scroll .btn.white-hover:hover span {
        color: #fff;
      }
      .navbar .btn.tra-hover:hover span,
      .navbar.scroll .btn.tra-hover:hover span {
        color: #333;
      }
    
      .header .black-scroll .btn.tra-hover:hover,
      .header .green-scroll .btn.tra-hover:hover,
      .header .blue-scroll .btn.tra-hover:hover,
      .header .coral-scroll .btn.tra-hover:hover {
        background-color: transparent;
        border-color: #fff;
      }
      .header .black-scroll .btn.tra-hover:hover span,
      .header .green-scroll .btn.tra-hover:hover span,
      .header .blue-scroll .btn.tra-hover:hover span,
      .header .coral-scroll .btn.tra-hover:hover span {
        color: #fff;
      }
    
      .dropdown-menu {
        text-align: center;
      }
      .dropdown-item {
        font-size: 1.15rem;
        padding: 0.5rem 1.25rem;
      }
    
      .header-socials {
        margin: 12px auto 0;
      }
      .header-socials a {
        color: #fff;
        margin-left: 2px;
      }
      .header-socials a,
      .navbar.scroll .header-socials a,
      .navbar-light .header-socials a {
        color: #fff;
      }
    
      .navbar-expand-lg .nl-simple a:before {
        display: none;
      }
      .navbar-expand-lg .nl-simple a:hover:before,
      .navbar-expand-lg .nl-simple a:focus:before {
        display: none;
      }
    
      .navbar-light .nav-link:focus,
      .nav-link:focus {
        color: #fff;
        background-color: transparent;
      }
    
      .header-socials a.ico-facebook,
      .navbar.scroll .header-socials a.ico-facebook {
        background-color: #3b5998;
        border-color: #3b5998;
      }
      .header-socials a.ico-twitter,
      .navbar.scroll .header-socials a.ico-twitter {
        background-color: #00a9ed;
        border-color: #00a9ed;
      }
      .header-socials a.ico-behance,
      .navbar.scroll .header-socials a.ico-behance {
        background-color: #2473f6;
        border-color: #2473f6;
      }
      .header-socials a.ico-google-plus,
      .navbar.scroll .header-socials a.ico-google-plus {
        background-color: #cd1111;
        border-color: #cd1111;
      }
      .header-socials a.ico-linkedin,
      .navbar.scroll .header-socials a.ico-linkedin {
        background-color: #015886;
        border-color: #015886;
      }
      .header-socials a.ico-dribbble,
      .navbar.scroll .header-socials a.ico-dribbble {
        background-color: #d92d84;
        border-color: #d92d84;
      }
      .header-socials a.ico-instagram,
      .navbar.scroll .header-socials a.ico-instagram {
        background-color: #beb3a8;
        border-color: #beb3a8;
      }
      .header-socials a.ico-pinterest,
      .navbar.scroll .header-socials a.ico-pinterest {
        background-color: #ac281a;
        border-color: #ac281a;
      }
      .header-socials a.ico-youtube,
      .navbar.scroll .header-socials a.ico-youtube {
        background-color: #cd1b20;
        border-color: #cd1b20;
      }
      .header-socials a.ico-tumblr,
      .navbar.scroll .header-socials a.ico-tumblr {
        background-color: #3a5976;
        border-color: #3a5976;
      }
      .header-socials a.ico-vk,
      .navbar.scroll .header-socials a.ico-vk {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    
      .header-socials a:hover {
        color: #fff;
      }
    
      .header-store img {
        margin-top: 8px;
      }
      .hero-section {
        margin-top: 68px;
      }
      #features-2 {
        padding-bottom: 20px;
      }
    
      .fbox-2 {
        padding: 0;
        margin-bottom: 60px;
      }
      .fbox-6.pr-30 {
        padding-right: 0;
      }
      .fbox-6.pl-30 {
        padding-left: 0;
      }
      #content-5 {
        padding-bottom: 0;
      }
      #content-6 {
        padding-top: 0;
      }
      #content-5 .bg-inner {
        padding-bottom: 40px;
      }
      #content-6 .bg-inner {
        padding-top: 40px;
      }
    
      .content-txt,
      #content-8 .content-txt,
      #content-10 .content-txt {
        padding-right: 0;
        padding-left: 0;
      }
      .small-statistic.mt-40 {
        margin-top: 30px;
      }
      .app-devices {
        padding: 5px 0 0 5px;
      }
    
      .content-txt h3.h3-xl {
        margin-bottom: 15px;
      }
      .content-txt h5.h5-sm {
        margin-top: 15px;
        margin-bottom: 10px;
      }
    
      .content-5-img {
        margin: 0 0 40px 0;
      }
      .content-6-img {
        margin: 0;
      }
      .screenshots-wrap {
        margin-bottom: 80px;
      }
      .screens-section .slick-dots {
        bottom: -80px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      .review-1 {
        margin-bottom: 20px;
      }
      #faqs-page {
        margin-top: 140px;
        margin-bottom: 55px;
      }
      #faqs-left {
        padding-right: 15px;
      }
      #faqs-right {
        padding-left: 15px;
      }
    
      .question {
        margin-bottom: 22px;
      }
      .question h5 {
        margin-bottom: 5px;
      }
    
      .more-questions-btn {
        margin-top: 30px;
      }
    
      .sidebar-div.mb-40 {
        margin-bottom: 30px;
      }
      .sidebar-div.mb-50 {
        margin-bottom: 40px;
      }
      #sidebar-right #text-widget {
        margin-bottom: 0;
      }
    
      #sidebar-right h5.h5-sm,
      #sidebar-left h5.h5-sm {
        margin-bottom: 20px;
      }
      #leave-comment.mt-80 {
        margin-top: 50px;
      }
    
      #contacts-2 .form-holder {
        margin-right: 0;
        margin-left: 0;
      }
    
      .footer h5 {
        margin-bottom: 20px;
      }
    
      .footer-stores-badge.text-right {
        text-align: left !important;
      }
    
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 15px;
      }
      #footer-5 .foo-links li {
        margin: 0 8px;
      }
    
      #footer-5 .foo-logo {
        text-align: center;
        margin-bottom: 25px;
      }
      #footer-5 .footer-links {
        margin-bottom: 10px;
      }
      #footer-5 .footer-copyright {
        padding-bottom: 60px;
      }
    
      #terms-page {
        margin-top: 140px;
        margin-bottom: 50px;
      }
      .terms-box {
        margin-bottom: 30px;
      }
      .terms-box h4 {
        margin-bottom: 15px;
      }
      .terms-box p span {
        font-size: 1rem;
        margin-right: 2px;
      }
    }
    @media (min-width: 576px) and (max-width: 767.99px) {
      h5.h5-xs {
        font-size: 1.166rem;
      }
      h5.h5-sm {
        font-size: 1.166rem;
      }
      h5.h5-md {
        font-size: 1.166rem;
      }
      h5.h5-lg {
        font-size: 1.166rem;
      }
      h5.h5-xl {
        font-size: 1.2rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.3rem;
      }
      h4.h4-md {
        font-size: 1.3rem;
      }
      h4.h4-lg {
        font-size: 1.366rem;
      }
      h4.h4-xl {
        font-size: 1.4rem;
      }
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.54rem;
      }
      h3.h3-md {
        font-size: 1.625rem;
      }
      h3.h3-lg {
        font-size: 1.7rem;
      }
      h3.h3-xl {
        font-size: 1.85rem;
      }
      h2.h2-xs {
        font-size: 1.9rem;
      }
      h2.h2-sm {
        font-size: 1.95rem;
      }
      h2.h2-md {
        font-size: 2rem;
      }
      h2.h2-lg {
        font-size: 2.1rem;
      }
      h2.h2-xl {
        font-size: 2.2rem;
      }
      h2.h2-huge {
        font-size: 2.85rem;
      }
      p.p-sm {
        font-size: 1.066rem;
      }
      p {
        font-size: 1.066rem;
      }
      p.p-md {
        font-size: 1.066rem;
      }
      p.p-lg {
        font-size: 1.1rem;
      }
      p.p-xl {
        font-size: 1.1rem;
      }
      .btn.btn-sm {
        font-size: 0.925rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 1rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 1rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 1rem;
        padding: 1rem 2rem;
      }
    
      .video-btn {
        width: 90px;
        height: 90px;
        margin-top: -45px;
        margin-left: -45px;
        line-height: 80px !important;
      }
      .stores-badge {
        margin-top: 25px;
      }
      a.store {
        margin-right: 10px;
      }
    
      /* App Devices Icons */
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 3rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 1.066rem;
        padding-right: 5%;
      }
      ul.content-list li {
        font-size: 1.066rem;
      }
      span.section-id {
        margin-bottom: 18px;
      }
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 12px;
      }
      .section-title.text-center p {
        padding: 0 8%;
      }
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 0;
        margin-bottom: 40px;
      }
      #hero-1 .hero-txt {
        padding: 0;
        text-align: center !important;
      }
    
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      #hero-1 h2 {
        font-size: 3.25rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 5%;
      }
      .hero-section .newsletter-form {
        margin-top: 30px;
        margin: 0 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
    
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        font-size: 0.875rem;
        line-height: 1;
        margin-right: 10px;
      }
    
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 15% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 12%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 15% 0;
      }
      #features-5 .features-img {
        margin: 0 15% 50px;
      }
      .fbox-6-img {
        display: none;
      }
      #content-4 {
        padding-bottom: 40px;
      }
    
      #content-9 p {
        padding: 0 5%;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 10% 40px;
      }
      #content-2 .content-img {
        margin: 0 10% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 10%;
        padding-right: 10%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 12%;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 50px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.066rem;
        line-height: 1.3;
        padding: 0 14%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.066rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.166rem;
      }
      .statistic-block p.statistic-number {
        font-size: 2.75rem;
        margin-bottom: 10px;
      }
      .statistic-block p {
        font-size: 1.066rem;
      }
      #brands-2 {
        padding-top: 50px;
        padding-bottom: 30px;
      }
    
      .m-img {
        display: inline-block;
        padding: 40px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.066rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 12%;
      }
      .m-links a {
        font-size: 1.066rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 56px;
        font-size: 1.066rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 56px;
      }
    
      .newsletter-txt p {
        padding: 0 10%;
      }
      #sidebar-right {
        margin-top: 50px;
      }
      #sidebar-left {
        margin-bottom: 50px;
      }
      .register-form .btn {
        height: 54px;
      }
    
      .register-form p {
        padding: 0 5%;
      }
      .bottom-footer .footer-links.text-right {
        text-align: left !important;
        margin-top: 15px;
      }
    
      .footer-socials-links.text-right {
        text-align: left !important;
      }
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 0;
        margin-right: 15px;
      }
    
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.066rem;
      }
    
      #footer-3 .footer-copyright {
        margin-bottom: 15px;
      }
      #footer-3 .footer-links.text-right {
        text-align: left !important;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
    
      /* QUICK FORM */
      .bottom-form {
        min-width: 240px;
        max-width: 240px;
      }
      .bottom-form-header {
        padding: 10px 16px;
      }
      .bottom-form-header span {
        right: 10px;
        top: -30px;
        width: 50px;
        height: 50px;
        line-height: 50px !important;
      }
      .bottom-form-header .svg-inline--fa {
        font-size: 1.65rem;
      }
    }
    
    @media (max-width: 575px) {
      html {
        font-size: 14px;
      }
      p.p-sm {
        font-size: 1.1425rem;
      }
      p {
        font-size: 1.1425rem;
      }
      p.p-md {
        font-size: 1.1425rem;
      }
      p.p-lg {
        font-size: 1.1785rem;
      }
      p.p-xl {
        font-size: 1.1785rem;
      }
      .btn.btn-sm {
        font-size: 0.75rem;
        padding: 0.785rem 1.75rem;
      }
      .btn {
        font-size: 0.8125rem;
        padding: 0.825rem 1.65rem;
      }
      .btn.btn-md {
        font-size: 0.9rem;
        padding: 0.925rem 1.9rem;
      }
      .btn.btn-lg {
        font-size: 0.9rem;
        padding: 1rem 2rem;
      }
      .video-btn {
        width: 80px;
        height: 80px;
        margin-top: -40px;
        margin-left: -40px;
        line-height: 70px !important;
      }
      .stores-badge {
        margin-top: 30px;
      }
      a.store {
        margin-right: 10px;
      }
      .app-devices {
        padding: 10px 0 0 5px;
      }
      .app-devices .svg-inline--fa {
        font-size: 3rem;
      }
      .app-devices .svg-inline--fa.f-phone {
        margin-right: 1rem;
      }
      .app-devices-desc p {
        font-size: 1.075rem;
        padding-right: 5%;
      }
    
      .box-icon-sm [class^="ti-"],
      .box-icon-sm [class*=" ti-"] {
        font-size: 3.15rem;
      }
      .box-icon [class^="ti-"],
      .box-icon [class*=" ti-"] {
        font-size: 3.6rem;
      }
      .box-icon-md [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 3.75rem;
      }
      .box-icon-lg [class^="ti-"],
      .box-icon-md [class*=" ti-"] {
        font-size: 4rem;
      }
    
      /* Content List */
      ul.content-list li {
        font-size: 1.1425rem;
      }
    
      /* Section ID */
      span.section-id {
        margin-bottom: 18px;
      }
    
      /* Section Title */
      .section-title {
        margin-bottom: 40px;
      }
      .section-title p {
        margin-top: 12px;
      }
      .section-title.text-center p {
        padding: 0;
      }
    
      #hero-1 {
        padding-top: 80px;
        padding-bottom: 0;
      }
      #hero-1 .hero-txt {
        margin-top: 0;
        margin-bottom: 40px;
      }
      #hero-1 .hero-txt {
        text-align: center;
      }
      .hero-app-logo {
        margin-bottom: 20px;
      }
      .hero-app-logo img {
        width: 90px;
        height: auto;
      }
      .hero-section .newsletter-form {
        margin-top: 30px;
        margin: 0 5%;
      }
      .hero-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .hero-section .newsletter-form .btn {
        height: 54px;
      }
    
      #sidebar-right {
        margin-top: 50px;
      }
      #sidebar-left {
        margin-bottom: 50px;
      }
    
      /* FOOTER */
      .bottom-footer .footer-links.text-right {
        text-align: left !important;
        margin-top: 15px;
      }
    
      .footer-socials-links.text-right {
        text-align: left !important;
      }
      #footer-3 .foo-links li,
      .bottom-footer .foo-links li {
        margin-left: 0;
        margin-right: 15px;
      }
    
      #footer-3 .footer-copyright {
        margin-bottom: 15px;
      }
      #footer-3 .footer-links.text-right {
        text-align: left !important;
      }
      #footer-5 .footer-socials-links.text-right {
        text-align: center !important;
        margin-bottom: 17px;
      }
    }
    
    @media (min-width: 416px) and (max-width: 575.99px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
    
      /* Hero Images */
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 15% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 8%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0 3%;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* SCREENS */
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
    
      .statistic-block p.statistic-number {
        font-size: 2.75rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 8%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (min-width: 321px) and (max-width: 415px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
    
      /* Section ID */
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
    
      /* Hero Links */
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .fbox-3 {
        padding: 60px 10% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 5%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      /* SCREENS */
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
      .statistic-block p.statistic-number {
        font-size: 3rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 5%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
    
      /* PRESS */
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      /* FAQs */
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
    
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
    
      .form-control,
      .register-form .form-control,
      .custom-select {
        height: 52px;
        font-size: 1.1425rem;
      }
      .register-form .btn {
        height: 52px;
      }
    
      .register-form label.error,
      .contact-form label.error,
      .register-form-msg .error,
      .contact-form-msg .error,
      .register-form-msg .loading,
      .contact-form-msg .loading {
        font-size: 1.1425rem;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (max-width: 320px) {
      h5.h5-xs {
        font-size: 1.25rem;
      }
      h5.h5-sm {
        font-size: 1.25rem;
      }
      h5.h5-md {
        font-size: 1.25rem;
      }
      h5.h5-lg {
        font-size: 1.25rem;
      }
      h5.h5-xl {
        font-size: 1.25rem;
      }
    
      h4.h4-xs {
        font-size: 1.25rem;
      }
      h4.h4-sm {
        font-size: 1.25rem;
      }
      h4.h4-md {
        font-size: 1.275rem;
      }
      h4.h4-lg {
        font-size: 1.3rem;
      }
      h4.h4-xl {
        font-size: 1.35rem;
      }
    
      /* Header H3 */
      h3.h3-xs {
        font-size: 1.45rem;
      }
      h3.h3-sm {
        font-size: 1.55rem;
      }
      h3.h3-md {
        font-size: 1.65rem;
      }
      h3.h3-lg {
        font-size: 1.75rem;
      }
      h3.h3-xl {
        font-size: 1.95rem;
      }
    
      /* Header H2 */
      h2.h2-xs {
        font-size: 2rem;
      }
      h2.h2-sm {
        font-size: 2rem;
      }
      h2.h2-md {
        font-size: 2.25rem;
      }
      h2.h2-lg {
        font-size: 2.25rem;
      }
      h2.h2-xl {
        font-size: 2.45rem;
      }
      h2.h2-huge {
        font-size: 2.45rem;
      }
      a.store {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
      }
      span.section-id {
        margin-bottom: 15px;
      }
      .navbar-expand-lg > .container {
        padding-right: 5px;
        padding-left: 5px;
      }
      .hero-section {
        margin-top: 60px;
      }
      #hero-1 h2 {
        font-size: 3rem;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
      #hero-1 h3 {
        padding: 0 5%;
        margin-bottom: 15px;
      }
      #hero-1 .hero-txt p {
        padding: 0 2%;
      }
      .hero-section .newsletter-form {
        margin: 30px 2% 0;
      }
    
      /* Hero Links */
      .hero-links {
        margin-top: 0;
      }
      .hero-links span {
        display: block;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 12px;
      }
      .hero-1-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
    
      .fbox-3 {
        padding: 60px 10% 45px;
      }
      .fbox-4,
      .fbox-6,
      .fbox-7 {
        text-align: center !important;
      }
    
      .fbox-1 h5,
      .fbox-4 h5,
      .fbox-6 h5 {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .fbox-2 h5,
      .fbox-3 h5 {
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .fbox-1 p,
      .fbox-2 p,
      .fbox-4 p,
      .fbox-6 p,
      .fbox-7 p {
        padding: 0 5%;
      }
      h2.tra-digit {
        font-size: 4.25rem;
        margin-bottom: 10px;
        margin-left: 0;
      }
    
      #features-4 .features-img {
        margin: 20px 10% 0;
      }
      #features-5 .features-img {
        margin: 0 10% 50px;
      }
      .fbox-6-img {
        display: none;
      }
    
      /* CONTENT */
      #content-4 {
        padding-bottom: 40px;
      }
    
      .small-statistic .col-sm-4 {
        width: 50%;
        float: left;
      }
    
      #content-9 p {
        padding: 0;
      }
      #content-10 .content-txt p {
        padding: 0;
      }
    
      .content-boxes {
        padding: 30px 20px 0;
        margin: 0 0 -80px;
      }
      .cbox-1 {
        margin-bottom: 30px;
      }
      .cbox-1-txt {
        padding-left: 15px;
      }
    
      #content-1 .content-img {
        margin: 20px 5% 40px;
      }
      #content-2 .content-img {
        margin: 0 5% 40px;
      }
      #content-3 .content-img,
      .content-5-img,
      .content-6-img {
        padding-left: 5%;
        padding-right: 5%;
      }
      .content-4-img {
        margin: 0 0 40px;
      }
      .content-7-img img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      #screens-1 .screenshots-wrap {
        width: 298px;
        margin: 10px auto;
      }
      #screens-1 .carousel-item {
        width: 298px;
        margin: 0;
        text-align: center;
      }
      #screens-1 .carousel-item img {
        width: 298px;
        text-align: center;
      }
    
      .carousel-item {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      /* VIDEO */
      #video-1 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      #video-1 h2 {
        margin-top: 30px;
        margin-bottom: 20px;
      }
      #video-2 .video-preview {
        margin-bottom: -80px;
      }
    
      /* PPRICING */
      .pricing-section .col-md-4,
      .pricing-page-section .col-md-4 {
        padding: 0 30px;
      }
      .pricing-table,
      #pricing-2 .pricing-table {
        padding: 60px 30px;
      }
    
      .pricing-table span.price,
      #pricing-2 .price span {
        font-size: 62px;
      }
      .pricing-plan sup,
      #pricing-2 .price sup {
        font-size: 40px;
      }
      .pricing-plan sup.pricing-coins {
        font-size: 35px;
      }
      p.validity {
        font-size: 1.066rem;
        margin-top: 5px;
      }
      #pricing-2 .price span.price-vat {
        font-size: 1.1425rem;
        line-height: 1.3;
        padding: 0 3%;
      }
      .pricing-text p {
        font-size: 16px;
        line-height: 24px;
      }
    
      /* TESTIMONIALS */
      .review-1 p,
      .review-2 p,
      .review-3 p,
      .review-1 .review-author span,
      .review-2 .review-author span {
        font-size: 1.1425rem;
      }
      .review-author h5,
      #reviews-3 .review-author h5 {
        font-size: 1.25rem;
      }
    
      /* STATISTIC */
      .statistic-block p.statistic-number {
        font-size: 3rem;
        margin-bottom: 10px;
      }
      #statistic-2 .statistic-block p.statistic-number {
        margin-top: 10px;
      }
      .statistic-block p {
        font-size: 1.025rem;
      }
      .m-img {
        display: inline-block;
        padding: 30px;
      }
      .m-img img {
        width: 100px;
        height: 100px;
      }
    
      .more-app-box h5 {
        margin-bottom: 8px;
        margin-top: 25px;
      }
      .more-app-box span.app-cat {
        font-size: 1.1425rem;
        margin-bottom: 10px;
      }
      .more-app-box p {
        padding: 0 5%;
      }
      .m-links a {
        font-size: 1.1425rem;
      }
      #press-1 .col-md-3 {
        padding-right: 15px;
        padding-left: 15px;
      }
      .press-logo {
        padding: 60px 30px;
      }
      .press-txt p {
        margin-bottom: 30px;
        padding: 0;
      }
      .press-txt.mt-20 {
        margin-top: 0;
      }
    
      #faqs-page h4.h4-xs {
        margin-bottom: 20px;
      }
      .newsletter-section .newsletter-form .form-control {
        height: 54px;
        font-size: 1.1425rem;
      }
      .newsletter-section .newsletter-form .btn {
        height: 54px;
      }
    
      .newsletter-txt p {
        padding: 0;
      }
    
      .contact-form .form-control,
      .register-form .form-control,
      .contact-form .custom-select {
        height: 52px;
        font-size: 1.1425rem;
      }
      .register-form .btn {
        height: 52px;
      }
    
      .register-form label.error,
      .contact-form label.error,
      .register-form-msg .error,
      .contact-form-msg .error,
      .register-form-msg .loading,
      .contact-form-msg .loading {
        font-size: 1.1425rem;
      }
      .foo-links li a,
      .footer-copyright p,
      #footer-3 .foo-links li a,
      #footer-5 .foo-links li a,
      .bottom-footer .foo-links li a {
        font-size: 1.1425rem;
      }
    }
    @media (min-width: 320px) and (max-width: 991px) {
      .event-img-meta {
        padding: 15px;
      }
      .event-img-meta h5 .h5-md {
        font-size: 1.875rem;
      }
      .event-img-meta p {
        font-size: 1rem;
      }
      .gallery-item:hover .image-zoom {
        margin-top: -15px;
        margin-left: -8px;
      }
    }
    `,id:'first_4',name:'Disclaimer'}
  ]
  },
  {
    name: "SecondTemplate",
    id: "2",
    image: "../images/3.jpg",
    links: [
      "https://app-landing-theme-02.netlify.app/jquery.js",
      "https://app-landing-theme-02.netlify.app/index.js",
      "https://cdn.usebootstrap.com/bootstrap/4.3.1/js/bootstrap.min.js",
      "https://app-landing-theme-02.netlify.app/steller.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
    ],
    pages:[
      { component:'<div>page 1</div>',id:'second_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'second_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'second_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-02.netlify.app",
  },
  {
    name: "ThirdTemplate",
    id: "3",
    image: "../images/3.jpg",
    links: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
      "https://app-landing-theme-03.netlify.app/jquery.js",
      "https://app-landing-theme-03.netlify.app/bootsrap.js",
      "https://app-landing-theme-03.netlify.app/isotop.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      "https://app-landing-theme-03.netlify.app/theme.js",
    ]
    , pages:[
      { component:'<div>page 1</div>',id:'third_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'third_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'third_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-03.netlify.app",
  },
  {
    name: "FourthTemplate",
    image: "../images/4.jpg",
    id: "4",
    links: [
      "https://code.jquery.com/jquery-3.2.1.slim.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
      "https://app-landing-theme-04.netlify.app/jquery.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      "https://app-landing-theme-04.netlify.app/stellar.js",
    ],
    pages:[
      { component:'<div>page 1</div>',id:'fourth_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'fourth_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'fourth_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-04.netlify.app",
  },
  {
    name: "FivethTemplate",
    id: "5",
    image: "../images/4.jpg",
    links: [
      "https://code.jquery.com/jquery-3.2.1.slim.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      "https://app-landing-theme-05.netlify.app/jquery.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      "https://app-landing-theme-05.netlify.app/stellar.js"
    ],
    pages:[
      { component:'<div>page 1</div>',id:'fourth_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'fourth_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'fourth_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-05.netlify.app",
  },
  {
    name: "sixthTemplate",
    id: "6",
    image: "../images/5.jpg",
    links: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js",
      "https://app-landing-theme-06.netlify.app/default.js",
      "https://app-landing-theme-06.netlify.app/bootstrap.js",
      "https://app-landing-theme-06.netlify.app/slick.js",
      "https://app-landing-theme-06.netlify.app/plugin.js"
    ],
    pages:[
      { component:'<div>page 1</div>',id:'five_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'five_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'five_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-06.netlify.app",
  },
  {
    name: "sixthTemplate",
    id: "7",
    image: "../images/5.jpg",
    links: [
      "https://app-landing-theme-08.netlify.app/jquery.js",
      "https://app-landing-theme-08.netlify.app/bootstrap.js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      "https://app-landing-theme-08.netlify.app/index.js",
    ],
    pages:[
      { component:'<div>page 1</div>',id:'seventh_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'seventh_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'seventh_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-07.netlify.app",
  },
  {
    name: "EightTemplate",
    id: "8",
    image: "../images/5.jpg",
    links: [
      "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
      "https://app-landing-theme-07.netlify.app/theme.js",
      "https://app-landing-theme-07.netlify.app/index.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js",
      "https://app-landing-theme-07.netlify.app/script.js"
    ],pages:[
      { component:'<div>page 1</div>',id:'eighth_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'eighth_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'eighth_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-08.netlify.app",
  },
  {
    name: "EightTemplate",
    id: "9",
    image: "../images/5.jpg",
    links: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js",
    ],
    pages:[
      { component:'<div>page 1</div>',id:'nineth_1',name:'Page 1'},
      { component:'<div>page 2</div>',id:'nineth_2',name:'Page 2'},
      { component:'<div>page 3</div>',id:'nineth_3',name:'Page 3'},
    ],
    preview:"https://app-landing-theme-09.netlify.app",
  },
];
