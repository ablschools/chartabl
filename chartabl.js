// chartabl.js
//
// Helpers for d3 visualizations
var chartabl = {
  
  /**
    Hides axis line
    @param Collection - elements. A collection of svg elements to modify.
  */
  removeAxisLine: function(elements) {
    elements.select('.domain').attr('stroke-width', 0);  
  }
  
  /**
    Rotates text on the axis line 
    @param Collection - elements. A collection of svg elements to modify.
    @param Number - degrees. The number of degrees to rotate the elements.
  */
  rotateAxisText: function(elements, degrees) {
    elements.selectAll('text').attr('transform', 'rotate(' + degrees + ')');
  }

  /**
    Styles axis text
    @param Collection - elements. A collection of svg elements to modify.
    @param String - axis. A lowercase string representing the axis, either 'x' or 'y'. 
  */
  styleAxisText: function(elements, axis) {
    var axisTest = elements.selectAll('text');

    axisText.
      .style("color", '#333E6B')
      .style("font-size", "14px");
    
    if (axis === 'x') {
      axisText.
        .attr("transform", "translate(-10,-15)rotate(-90)")
        .style("text-anchor", "start")
        .style("font-weight", 'bold')
    }
  }
};
