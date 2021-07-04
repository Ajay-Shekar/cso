const { createProxyMiddleware }=require('http-proxy-middleware');

module.exports =function(app){
app.use(
'/osm',
createProxyMiddleware({
target :'http://35.224.42.221:9999',
changeOrigin: true,
})
);
};
