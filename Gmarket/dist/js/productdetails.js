define(["jquery"],function($){
    
        function valueByName(search, name){
        var start = search.indexOf(name + "=")
        if(start==-1){
            return null
        }else{
            var end = search.indexOf("&",start)
            if(end==-1){
                end=search.length;
            }
            var str = search.substring(start,end)
            var arr =str.split("=");
            return arr[1]
        }
    }

        function download(){
            if(window.location.pathname=="/productdetails.html"){
            $.ajax({
                url:"./data/superdeal.json",
                success:function(result){
                    var product_id=valueByName(location.search,"id");
                    // var sidelist=result
                    console.log(result)
                    for(var i=0; i<result.length;i++){
                        // console.log('1')
                        if(result[i].GoodsCode == product_id){
                            var node=$(`<div id="small">
                            <img src="${result[i].GoodsImgUrl}" alt="">
                            <div id="mark"></div>
                        </div>
                        
                        <div id="big">
                            <img src="${result[i].GoodsImgUrl}" alt="">
                        </div>
                
                        <div class="small-bottom">
                            <img src="${result[i].GoodsImgUrl}" alt="">
                        </div>`)
        node.appendTo($(".product-details"));
                        }
                    }
                },
                error: function (msg) {
					console.log(msg);
                }
            })
        }
    }

     function move(){ 
        // console.log(111) 
        $('.product-details').on('mouseenter','#small',function(e){ 
        $('.product-details #mark').css('display','block') 
        $('.product-details #big').css('display','block') 
        }) 
        $('.product-details').on('mouseleave','#small',function(e){ 
        $('.product-details #mark').css('display','none') 
        $('.product-details #big').css('display','none') 
        }) 
        $('.product-details').on('mousemove','#small',function(e){ 
        // console.log(e.offsetX) 
        var l = e.pageX - $(this).offset().left-50  
        var t = e.pageY -$(this).offset().top-50 
        $('.product-details #mark').css('left',l) 
        $('.product-details #mark').css('top',t) 
        $('.product-details #big>img').css('left',-l*2) 
        $('.product-details #big>img').css('top',-t*2) 
        }) 
        } 





    return{
        download,
        move

    }
})
