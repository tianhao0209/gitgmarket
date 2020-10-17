console.log('加载成功');
require.config({
    paths:{
        'jquery':'jquery-1.10.1.min',
        'jquery-cookie':'jquery.cookie',
        'index':'index'
    },
    shim:{
        'jquery-cookie':['jquery']
    }
})
require(['index'],function(index){
index.superdeal();
index.tab();
index.loadMore();
index.bannerTab();
index.hot()


})
