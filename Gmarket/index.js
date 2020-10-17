define(["jquery"],function($){
// 打折
    function superdeal(){
                $(function () {
        //通过ajax下载数据
        $.ajax({
            url: "./data/superdeal.json",
            success: function (result) {
                console.log(result[0]);
                // var commodity = result.SuperDealList ;
                // console.log(commodity)
                //JQ创建节点，html部分如何写，这里也如何写
                for (var i = 0; i < result.length; i++) {
                    //JQ创建节点的函数，返回值就是这个节点
                    var node = $(`
                <div class="commodity fl">
                    <img src="${result[i].GoodsImgUrl}" alt="" class="goodsimg">
                    <p class="product-i"><a href="productdetails.html?id=${result[i].GoodsCode}">${result[i].GoodsName}</a></p>
                    <p class="now-p"> <span class="ago-p">₩${result[i].Price}</span>₩${result[i].DiscountPrice}</p>
                    <p><span class="descentrate fl">${result[i].DiscountRate}%<span class="descentrate-img"></span></span><span class="price fr">￥100</span></p>
                </div>`)
                    node.appendTo($("#goods"));
                    }
                },
                error: function (msg) {
                    console.log(msg);
                }
            })
        })
    }
// 侧边栏
    function tab(){
        $(function(){
            //   $("button").click(function(){
                //通过ajax下载数据
                $.ajax({
                  url: "./data/nav.json",
                  success: function(result){
                    // console.log(result);
                    var sideNav = result.sideNav;
                    //JQ创建节点，html部分如何写，这里也如何写
                    for(var i = 0; i < sideNav.length; i++){
        
                      //JQ创建节点的函数，返回值就是这个节点
                      var node = $(`
                                      <li class="m1">
                                         <a href="#menu1" id="menu11">${sideNav[i].title}</a>
                                        <div id="menu1" class="subnav">
                                            <strong>${sideNav[i].title}</strong>
                                        </div>
                                    </li>
                                    `)
                        node.appendTo($("#gnb"));
        
                    //   取出每一项的child
                      var childArr = sideNav[i].childs;
                      console.log(childArr)
                      for(var j = 0; j < childArr.length; j++){
                        //插入到当前遍历中要插入的这个节点内
                        $(`<li><a href="http://gcategory.gmarket.co.kr/Listview/Category?GdlcCd=100000103">${childArr[j]}</a></li>`).appendTo(node.find("div"));
                      }
                    }
                  },
                  error: function(msg){
                    console.log(msg);
                  }
                })
              
        
              //通过事件委托实现移入移出效果
        
              $("#gnb").on("mouseenter", "li", function(){
                //找到p节点同级的div显示出来
                $(this).find(".subnav").show();
              })
        
              //移出的时候再隐藏
              $("#gnb").on("mouseleave", "li", function(){
                //找到p节点同级的div显示出来
                $(this).find(".subnav").hide();
              })
            })
    }
// 加载更多
    function loadMore(){
        $(function(){
            var i=2063;
            // i +=2000 
            $('#button').click(function(){
                console.log(this)
                i+=8550 
                $("#goods").css("height",i)      
                $(this).hide();
            })
        })
    }
// 轮播图
    function bannerTab() {
        $(function () {
            var iNow = 0;
            var aImgs = $('.lunbo').find('img');
            var aBtns = $('.lunbo ul').find('li');
            var timer = null;

            timer = setInterval(function () {
                iNow++;
                tab();
            }, 4000)
            function tab() {
                if (iNow == 3) {
                    iNow = 0;
                }
                if (iNow == -1) {
                    iNow = 2;
                }
                aImgs.hide().css('opacity', 0.2).eq(iNow).show().animate({ opacity: 1 }, 500);
                aBtns.removeClass('list-one').eq(iNow).addClass('list-one');
            }
            $('.lunbo').mouseenter(function () {
                clearInterval(timer);
                $('.lunboArr').css('display', 'block');
            }).mouseleave(function () {
                $('.lunboArr').css('display', 'none');
                timer = setInterval(function () {
                    iNow++;
                    tab();
                }, 4000)
            });
            $(".prev").click(function () {
                iNow--;
                tab();
            })
            $(".next").click(function () {
                iNow++;
                tab();
            })

            $('.lunbo ul').on('click', 'li', function () {
                iNow = $(this).index();
                tab();
            })
        })
    }
// 热销商品
function hot(){
    $(function () {
        //通过ajax下载数据
        $.ajax({
            url: "./data/superdeal.json",
            success: function (result) {
                console.log(result[0]);
                // var commodity = result.SuperDealList ;
                // console.log(commodity)
                //JQ创建节点，html部分如何写，这里也如何写
                for (var i = 0; i < result.length; i++) {
                    //JQ创建节点的函数，返回值就是这个节点
                    var node = $(`<li class="li" >
                        <img src="${result[i].GoodsImgUrl}" alt="" style="height:220px;width:220px;">
                        <p><a href="http://localhost/%E5%81%87%E6%9C%9F%E9%A1%B9%E7%9B%AE/Gmarket/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85%E9%A1%B5.html?id=${result[i].GoodsCode}" target='_blank'></p>
                        <p>$1000<span>50%</span></p>
                        <p>#1000</p>
                    </li>`)
                    node.appendTo($(".ul"));
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    })
}
function hot(){
    $(function () {
        //通过ajax下载数据
        $.ajax({
            url: "./data/superdeal.json",
            success: function (result) {
                console.log(result[0]);
                // var commodity = result.SuperDealList ;
                // console.log(commodity)
                //JQ创建节点，html部分如何写，这里也如何写
                for (var i = 0; i < result.length; i++) {
                    //JQ创建节点的函数，返回值就是这个节点
                    var node = $(`<li class="li" >
                        <img src="${result[i].GoodsImgUrl}" alt="" style="height:220px;width:220px;">
                        <p>${result[i].GoodsName}</p>
                        <p>$1000<span>50%</span></p>
                        <p>#1000</p>
                    </li>`)
                    node.appendTo($(".ul"));
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    })
}
// 品牌
function brand(){
    $(function () {
        //通过ajax下载数据
        $.ajax({
            url: "./data/hot.json",
            success: function (result) {
                // console.log(result);
                var pic = result[0]
                // console.log(pic[29].Url)
                //JQ创建节点，html部分如何写，这里也如何写
                // for (var i = 0; i < pic.length; i++) {
                //JQ创建节点的函数，返回值就是这个节点
                var node = $(`
                    <a href="${pic[0].Url}" class="top-left"><img
                            src="${pic[0].Img}" alt=""></a>
                    <a href="${pic[1].Url}" class="top-right"><img
                            src="${pic[1].Img}" alt=""></a>
                    <a href="${pic[2].Url}" class="bottom-left"><img
                            src="${pic[2].Img}" alt=""></a>
                    <a href="${pic[3].Url}" class="bottom-right"><img
                            src="${pic[3].Img}" alt=""></a>`)
                node.appendTo($((".brand_box")));
                // }
                for (var i = 4; i <= 41; i++) {
                    if(i<16){
                        var node1 = $(`<a href="${pic[i].Url}"><img
                                src="${pic[i].Img}" alt=""></a>`)
                        node1.appendTo($((".bn_small-top")));
                    }else if(i<29){
                        var node2 = $(`<a href="${pic[i].Url}">
                     <img src="${pic[i].Img}" alt=""></a>`)
                    // 	// console.log(node2)
                        node2.appendTo($((".bn_small-bottom")));
                    }else{
                        var node3 = $(`<a href="${pic[i].Url}"><img
                                src="${pic[i].Img}" alt=""></a>`)
                        node3.appendTo($((".bn_small-center")));
                        }
                }

                    
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    })
}
    return{
        superdeal,
        tab,
        loadMore,
        bannerTab,
        hot

    }

})