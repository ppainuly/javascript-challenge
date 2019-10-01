function buildPlot() {
  /* data route */
      console.log("Running buildplot....")
      let url = '/api/days';

      d3.json(url).then(function(response) {

      console.log(response);
      let data = [response]   
      //console.log(response["lat"]);

      //Calculate date diff
      // var dateSighting = new Date();
      // var today = new Date()
      // console.log(Math.ceil((today-dateSighting)/(1000*60*60*24)));
      

      //document.getElementById('plot').innerHTML = data   

      var layout = {
          autosize: true,
          hovermode:'closest',
          mapbox: {
              bearing:0,
              center: {
              lat:35.65,
              lon:-97.47
              },
              pitch:0,
              zoom:8
          },
          }

          Plotly.setPlotConfig({
          mapboxAccessToken: 'pk.eyJ1IjoiZXRwaW5hcmQiLCJhIjoiY2luMHIzdHE0MGFxNXVubTRxczZ2YmUxaCJ9.hwWZful0U2CQxit4ItNsiQ'
          })

          Plotly.plot('plot', data, layout, {showSendToCloud: true})

      });
      }

    function all(){
        console.log("Entering all() func")
        d3.json("/api/all").then(function(response) {
            console.log("Printing response from all()")
            console.log(response);

            //Calculate date diff
            var dateSighting = new Date(response[0]["date"]);
            var today = new Date()
            var diff = Math.ceil((today-dateSighting)/(1000*60*60*24));
            console.log(diff);
            tracker = d3.select("#tracker")
            d3.select("#days").append("h3").text("Days since last UFO Sighting")
            d3.select("#daysDiff").append("h2").text(diff)
            tracker.append("p").text(`Last UfO Sighting in United States was on ${response[0]["date"]} at ${response[0]["time"]} hours . The ${response[0]["shape"]} shape sighting in the sky lasted ${response[0]["duration (seconds)"]} seconds, according to the observers.`)
            tracker.append("h4").text(`Location of the sighting - ${response[0]["city"]},${response[0]["state"]}`)
            tracker.append("p").text(response[0]["comments"]);
        });
    }
    console.log("Starting JS...")
      //buildPlot();
      all();