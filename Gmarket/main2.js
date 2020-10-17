console.log('加载成功');
require.config({
    paths:{
        'jquery':'jquery-1.10.1.min',
        'jquery-cookie':'jquery.cookie',
        'productdetails':'productdetails'
    },
    shim:{
        'jquery-cookie':['jquery']
    }
})
require(['productdetails'],function(productdetails){
    productdetails.download();
    productdetails.move();
   


})