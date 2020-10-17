define(["jquery"],function($){
    
    function topNav(){
        $(function () {
			//通过ajax下载数据
			$.ajax({
				url:"./data/list-area.json",
				success: function (result) {
					console.log(result[0]);
					// var commodity = result.SuperDealList ;
					// console.log(commodity)
					//JQ创建节点，html部分如何写，这里也如何写
					for (var i = 0; i < result.length; i++) {
						//JQ创建节点的函数，返回值就是这个节点
						var node = $(`<li> 
            <a href="">${result[i].TEXT}<span class="icon weekly"></span></a>  
        </li>`)
						node.appendTo($(".list-area-ul"));
					}
				},
				error: function (msg) {
					console.log(msg);
				}
			})
        })
    }
function product(){
    $(function () {
        //通过ajax下载数据
        $.ajax({
            url: "./data/superdeal.json",
            success: function (result) {
                console.log(result);
                // var commodity = result.SuperDealList ;
                // console.log(commodity)
                //JQ创建节点，html部分如何写，这里也如何写
                for (var i = 0; i < result.length; i++) {
                    //JQ创建节点的函数，返回值就是这个节点
                    var node = $(`<li>
        <a href="http://localhost/%E5%81%87%E6%9C%9F%E9%A1%B9%E7%9B%AE/Gmarket/productdetails.html?id=${result[i].GoodsCode}" target='_blank'>
            <img src="${result[i].GoodsImgUrl}" alt="" class="thumb"> 
            <span class="title">${result[i].GoodsName}</span>
        </a>
        <span class="price">
                    <em class="sale"><strong>50</strong>%<span class="icon">OFF</span></em>
                    <del>￦</del>
                <strong>￦<span>20,000</span></strong>product list
                <span id="currency_0" class="currency"><span>￥</span><strong>121.02</strong></span>
        </span>
    </li>`)
                    node.appendTo($(".item-c-ul"));
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    })

}










    return{
        topNav,
        product

    }

})