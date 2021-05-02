function onLoad() {
  console.log('script loaded');
}

window.onLoad = onLoad;

app.route('/api')
  .post(async(req, res) => {
    console.log('POST request detected');
    console.log('From data in res.body', req.body);
    res.send('Hello Word');
  });