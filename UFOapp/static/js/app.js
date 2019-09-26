function buildPlot() {
    /* data route */
console.log("Running buildplot....")
  var url = '/api/days';
  d3.json(url).then(function(response) {

    console.log(response);
    let data = [response]
      
  
    document.getElementById('plot').innerHTML = data
      
    
  }
  );
}
console.log("Starting JS...")
buildPlot();

