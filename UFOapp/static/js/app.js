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
      };
      console.log("Starting JS...")
      buildPlot();