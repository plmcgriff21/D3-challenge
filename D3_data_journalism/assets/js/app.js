// @TODO: YOUR CODE HERE!
states = "../D3_data_journalism/assets/data/data.csv"
//Create variable lists 
state_list =[]
poverty_list =[]
state_abbrev = []
data=[]
//Loop through CSV data to create variables
d3.csv(states).then(function(data){
    // console.log(data)
  
    data.forEach(state => {
        var ST = state.state
        var poverty= state.poverty
        var ST_abbrev= state.abbr
        state_list.push(ST)
        poverty_list.push(poverty) 
        state_abbrev.push(ST_abbrev)
        data.push(state)
    });


// console.log(state_list)
// console.log(poverty_list)
// console.log(state_abbrev)

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 80, left: 30},
    width =1000
    - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

   // Add X axis
   var x = d3.scaleBand()
   .domain(state_abbrev)
   .range([0, 1000])
svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x))
      

// Add Y axis
var y = d3.scaleLinear()
 .domain([8,22])
 .range([ height, 6]);
svg.append("g")
 .call(d3.axisLeft(y));

// Add dots
svg.append('g')
 .selectAll("dot")
 .data(data)
 .enter()
 .append("circle")
   .attr("cx", function (d) { return x(d.abbr); } )
   .attr("cy", function (d) { return y(d.poverty); } )
   .attr("r", 10)
   .style("fill", "#69b3a2")
   
     // Add X axis label:
  svg.append("text")
  .attr("text-anchor", "end")
  .attr("x", width)
  .attr("y", height+50 )
  .text("Evaluated States");

    // Add Y axis label:
    svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", 0)
    .attr("y", 22 )
    .text("Life Expectancy")
    .attr("text-anchor", "start")
    

})

