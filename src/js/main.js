$(document).ready(function(){function a(){windowWidth=window.innerWidth,windowHeight=window.innerHeight,e&&c()}function b(){e?(e=!1,c()):(e=!0,d())}function c(){$("#nav-header").removeClass("expand")}function d(){$("#nav-header").addClass("expand")}windowWidth=window.innerWidth,windowHeight=window.innerHeight,isAnimating=!1,$("#launch-button").colorbox({iframe:!0,width:"980",height:"600",overlayClose:!1,close:"<div class='image-close'></div>",xhrError:"Uh oh, something went a bit wrong."}),$("a[href*=#]:not([href=#])").click(function(){if(!isAnimating&&(isAnimating=!0,location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname)){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return position=a.offset().top-.1*windowHeight,console.log(a),"#home"==a.selector&&(position=0,console.log("hit")),$("html,body").animate({scrollTop:position},1e3,function(){isAnimating=!1}),!1}}),$("body").removeClass("loading"),$("html,body").scrollTop(0),$("a.null").click(function(a){a.preventDefault()}),$("body").flowtype({minimum:500,maximum:1200,minFont:10,maxFont:17,fontRatio:36}),$(".header-wrapper").waypoint("sticky",{offset:300,direction:"down right",stuckClass:"stuck",wrapper:'<div class="sticky-wrapper" />'}),$("#nav-toggle").click(function(){b()}),$(window).on("resize",a);{var e=!1;$.fn.slider()}});