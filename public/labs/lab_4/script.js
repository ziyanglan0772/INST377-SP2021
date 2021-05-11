function load(){
    console.log('script loaded');
}

window.onload = load();

app.post('/api', function(request,response){
    response.send('hello world')
})

app.listen('3000', function() {
    console.log('run');
})