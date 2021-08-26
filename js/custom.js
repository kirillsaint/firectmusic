$(function () {
	"use strict";

	var mySkins = [
	    "skin-red-dark",
	    "skin-white-light",
	];

	function get(name) {
	    if (typeof (Storage) !== 'undefined') {
	        return localStorage.getItem(name)
	    }
	    else {
	        window.alert('Please use a modern browser to properly view this template!')
	    }
	}
	/**
	 * Store a new settings in the browser
	 *
	 * @param String name Name of the setting
	 * @param String val Value of the setting
	 * @returns void
	 */
	function store(name, val) {
	    if (typeof (Storage) !== 'undefined') {
	        localStorage.setItem(name, val)
	    }
	    else {
	        window.alert('Please use a modern browser to properly view this template!')
	    }
	}

	/**
	 * Replaces the old skin with the new skin
	 * @param String cls the new skin class
	 * @returns Boolean false to prevent link's default action
	 */
	function changeSkin(cls) {
	    $.each(mySkins, function (i) {
	        $('body').removeClass(mySkins[i])
	    })
	    $('body').addClass(cls)
	    store('skin', cls)
	    return false
	}

	function setup() {
	    var tmp = get('skin');
	    if (tmp && $.inArray(tmp, mySkins) != '-1'){
	    	changeSkin(tmp);
	    	return false;
	        // Add the change skin listener
	    } else {
	    	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	    		changeSkin('skin-red-dark');
	    	} else {
	    		changeSkin('skin-white-light');
	    	}
	    }

	}
	setup();
    $('.square-change').on('click', function (e) {
        e.preventDefault()
    	if ( $('body').hasClass('skin-red-dark') ) {
    		changeSkin('skin-white-light');
    	} else {
        	changeSkin('skin-red-dark');
    	}
    })
    
	$(function () {
		$(".preloader").fadeOut();
	});
	jQuery(document).on('click', '.mega-dropdown', function (e) {
		e.stopPropagation()
	});
	// ============================================================== 
	// This is for the top header part and sidebar part
	// ==============================================================  
	var set = function () {
		var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
		var topOffset = 55;
		if (width < 1170) {
			$("body").addClass("mini-sidebar");
			$(".sidebartoggler i").addClass("ti-menu");
		}
		else {
			$("body").removeClass("mini-sidebar");
		}
		var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
		height = height - topOffset;
		if (height < 1) height = 1;
		if (height > topOffset) {
			$(".page-wrapper").css("min-height", (height) + "px");
		}
	};
	$(window).ready(set);
	$(window).on("resize", set);
	// ============================================================== 
	// Theme options
	// ==============================================================     
	$(".sidebartoggler").on('click', function () {
		if ($("body").hasClass("mini-sidebar")) {
			$("body").trigger("resize");
			$("body").removeClass("mini-sidebar");
		}
		else {
			$("body").trigger("resize");
			$("body").addClass("mini-sidebar");
		}
	});
	// this is for close icon when navigation open in mobile view
	$(".nav-toggler").click(function () {
		$("body").toggleClass("show-sidebar");
		$(".nav-toggler i").toggleClass("ti-menu");
		$(".nav-toggler i").addClass("ti-close");
	});
	$(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
		$(".app-search").toggle(200);
	});
	// ============================================================== 
	// This is for the floating labels
	// ============================================================== 
	$('.floating-labels .form-control').on('focus blur', function (e) {
		$(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
	}).trigger('blur');
	
	// ============================================================== 
	//tooltip
	// ============================================================== 
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	// ============================================================== 
	//Popover
	// ============================================================== 
	$(function () {
	   $('[data-toggle="popover"]').popover()
   })
	
	// ============================================================== 
	// Perfact scrollbar
	// ============================================================== 
	$('.scroll-sidebar, .right-side-panel, .message-center, .right-sidebar').perfectScrollbar();
	// ============================================================== 
	// Resize all elements
	// ============================================================== 
	$("body").trigger("resize");
	// ============================================================== 
	// To do list
	// ============================================================== 
	$(".list-task li label").click(function () {
		$(this).toggleClass("task-done");
	});
	// ============================================================== 
	// Collapsable cards
	// ==============================================================
	$('a[data-action="collapse"]').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
		$(this).closest('.card').children('.card-body').collapse('toggle');
	});
	// Toggle fullscreen
	$('a[data-action="expand"]').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
		$(this).closest('.card').toggleClass('card-fullscreen');
	});
	// Close Card
	$('a[data-action="close"]').on('click', function () {
		$(this).closest('.card').removeClass().slideUp('fast');
	});
	// For Custom File Input
	$('.custom-file-input').on('change',function(){
	    //get the file name
	    var fileName = $(this).val();
	    //replace the "Choose a file" label
	    $(this).next('.custom-file-label').html(fileName);
	})
});

function success1(from, align, text){
	$.toast({
		heading: 'Успешно',
		text: text,
		position: from + '-' + align,
		loaderBg:'#ff6849',
		icon: 'success',
		hideAfter: 4000, 
		stack: 6
	});
}
function errornot(from, align){
	$.toast({
		heading: 'Ошибка',
		text: 'Что-то пошло не так.',
		position: from + '-' + align,
		loaderBg:'#ff6849',
		icon: 'error',
		hideAfter: 4000
	});
}
function error(from, align, text)
{
	$.toast({
		heading: 'Ошибка',
		text: text,
		position: from + '-' + align,
		loaderBg:'#ff6849',
		icon: 'error',
		hideAfter: 4000
	});
}