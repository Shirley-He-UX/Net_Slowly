MyJqDialog.prototype.resizeBox = function () {
	var box = this.element;
 
	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(document).width();
	
	//Set height and width to mask to fill up the whole screen
	$(this.overlay).css({'width':maskWidth,'height':maskHeight});
	
	//Get the window height and width
	var winH = $(window).height();
	var winW = $(window).width();
	var scrollT = $(window).scrollTop();
	var scrollL = $(window).scrollLeft();
	
	//Set the popup window to center
	box.css('top',  winH/2 - box.height()/2 + scrollT);
	box.css('left', winW/2 - box.width()/2 + scrollL);
};



$.myalert({
	content: "相关标题",
	confirm_btn_click: function (e){	//确认按钮点击事件
		$.myalert("getDialog").mydialog("hide");
	}
});
