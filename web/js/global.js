
// 根据一二级菜单名称 设置菜单高亮和展开
function selecItem(menu1Name,menu2Name){
	if(menu1Name == undefined || menu2Name == undefined){
		return;
	}
		
	
	$(".menu1").each(function(){
		var curr = $(this);
		if(curr.hasClass(menu1Name)){
			if(!curr.parent().hasClass("menu-open")){
				curr.trigger("click")
			}
		}else{	
			if(curr.parent().hasClass("menu-open")){
				curr.trigger("click")
			}
		}
	})
	
	
	$(".menu1").not("."+menu1Name).removeClass("active")
	$(".menu2").not("."+menu2Name).removeClass("active")
	
	setTimeout(function(){
		$(".menu1."+menu1Name).addClass("active")
		$(".menu2."+menu2Name).addClass("active")
	},120);
}

selecItem(menu1,menu2);
