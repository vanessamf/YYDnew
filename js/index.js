$(document).ready(function() {
	$("#menu_header").load("../common/header.html");
	$("#fast_menu_header").load("../common/header2.html");
	$("#footer").load("../common/footer.html");
});
//$(function() {
	window.onresize = function() {
		hiddenTip("other-discount", "otherModal");
		hiddenTip("single-discount", "singleModal");
		hiddenTip("all-discount", "allModal");
	}
	window.onload = function() {
		hiddenTip("other-discount", "otherModal");
		hiddenTip("single-discount", "singleModal");
		hiddenTip("all-discount", "allModal");
	}
	
	//	if(($(window).height() > 700)) {
	//		hiddenDiscount("single-discount", "singleModal");
	//		hiddenDiscount("all-discount", "allModal");
	//	} else {
	//		hiddenTip("single-discount", "singleModal");
	//		hiddenTip("all-discount", "allModal");
	//	}
	hiddenPayType("pay-type", "payTypeModal");
	hiddenPayType2("registration-content .payType");

	function hiddenDiscount(discountP, modal) {
		var disBtn = $("." + discountP + ">button");
		if((screen.width > 992 && $(window).width() > 992)) {
			if(disBtn.length > 8) {
				for(var i = 7; i < disBtn.length; i++) {
					var hiddenBtn = $("." + discountP + ">.discount-btn:eq(" + i + ")");
					hiddenBtn.css("display", "none");
					var txt = hiddenBtn.text();
					var html1 = '<button class="discount-btn">' + txt + '</button>'
					$("#" + modal + " .modal-body").append(html1);
				}
				var html = '<button class="discount-btn" data-toggle="modal" data-target="#' + modal + '">更多</button>';
				$("." + discountP).append(html);
			}
		} else {
			if(disBtn.length > 6) {
				for(var i = 5; i < disBtn.length; i++) {
					var hiddenBtn = $("." + discountP + ">.discount-btn:eq(" + i + ")");
					hiddenBtn.css("display", "none");
					var txt = hiddenBtn.text();
					var html1 = '<button class="discount-btn">' + txt + '</button>'
					$("#" + modal + " .modal-body").append(html1);
				}
				var html = '<button class="discount-btn" data-toggle="modal" data-target="#' + modal + '">更多</button>';
				$("." + discountP).append(html);
			}
		}

	}

	function hiddenTip(discountP, modal) {
//		debugger;
		var disBtn = $("." + discountP + ">button");
		if((screen.width > 992 && $(window).width() > 992)) {
			if(disBtn.length > 4) {
				for(var i = 3; i < disBtn.length; i++) {
					var hiddenBtn = $("." + discountP + ">.discount-btn:eq(" + i + ")");
					hiddenBtn.css("display", "none");
					var txt = hiddenBtn.text();
					var html1 = '<button class="discount-btn">' + txt + '</button>'
					$("#" + modal + " .modal-body").append(html1);
				}
//				var html = '<button class="discount-btn" data-toggle="modal" data-target="#' + modal + '">更多</button>';
				var html = '<button class="discount-btn">下一页</button>';
				$("." + discountP).append(html);
			}
		} else {
			if(disBtn.length > 3) {
				for(var i = 2; i < disBtn.length; i++) {
					var hiddenBtn = $("." + discountP + ">.discount-btn:eq(" + i + ")");
					hiddenBtn.css("display", "none");
					var txt = hiddenBtn.text();
					var html1 = '<button class="discount-btn">' + txt + '</button>'
					$("#" + modal + " .modal-body").append(html1);
				}
//				var html = '<button class="discount-btn" data-toggle="modal" data-target="#' + modal + '">更多</button>';
				var html = '<button class="discount-btn">下一页</button>';
				$("." + discountP).append(html);
			}
		}
	}

	function hiddenPayType(discountP, modal) {
		var disBtn = $("." + discountP + ">button");
		if(disBtn.length > 9) {
			for(var i = 8; i < disBtn.length; i++) {
				var hiddenBtn = $("." + discountP + ">.pay-type-item:eq(" + i + ")");
				hiddenBtn.css("display", "none");
				var txt = hiddenBtn.text();
				var html1 = '<button class="pay-type-item">' + txt + '</button>'
				$("#" + modal + " .modal-body").append(html1);
			}
//			var html = '<button class="pay-type-item" data-toggle="modal" data-target="#' + modal + '">更多</button>';
			var html = '<button class="pay-type-item">下一页</button>';
			$("." + discountP).append(html);
		}
	}
function hiddenPayType2(discountP) {
//	debugger
		var disBtn = $("." + discountP + ">span");
		if(disBtn.length > 9) {
			for(var i = 8; i < disBtn.length; i++) {
				var hiddenBtn = $("." + discountP + ">span:eq(" + i + ")");
				hiddenBtn.css("display", "none");
//				var txt = hiddenBtn.text();
//				var html1 = '<button class="pay-type-item">' + txt + '</button>'
//				$("#" + modal + " .modal-body").append(html1);
			}
			var html = '<span class="">下一页</span>';
			$("." + discountP).append(html);
		}
	}
	function hiddenRequire(discountP, modal) {
		var disBtn = $("." + discountP + ">button");
		if((screen.width > 992 && $(window).width() > 992)) {
			if(disBtn.length > 4) {
				for(var i = 3; i < disBtn.length; i++) {
					var hiddenBtn = $("." + discountP + ">.discount-btn:eq(" + i + ")");
					hiddenBtn.css("display", "none");
					var txt = hiddenBtn.text();
					var html1 = '<button class="discount-btn">' + txt + '</button>'
					$("#" + modal + " .modal-body").append(html1);
				}
				var html = '<button class="discount-btn" data-toggle="modal" data-target="#' + modal + '">更多</button>';
				$("." + discountP).append(html);
			}
		} else {
			if(disBtn.length > 3) {
				for(var i = 2; i < disBtn.length; i++) {
					var hiddenBtn = $("." + discountP + ">.discount-btn:eq(" + i + ")");
					hiddenBtn.css("display", "none");
					var txt = hiddenBtn.text();
					var html1 = '<button class="discount-btn">' + txt + '</button>'
					$("#" + modal + " .modal-body").append(html1);
				}
				var html = '<button class="discount-btn" data-toggle="modal" data-target="#' + modal + '">更多</button>';
				$("." + discountP).append(html);
			}
		}
	}

//})

function scrollWidth1(i, title, list) {

	var tsw = $("." + list + "")[i].scrollWidth;
	$("." + title + "").css({
		"width": tsw
	})
}

function scrollWidth2(i, title, list) {
	var tsw = $("." + list + "")[i].scrollWidth;
	$("." + title + "").eq(i).css({
		"width": tsw
	})
}