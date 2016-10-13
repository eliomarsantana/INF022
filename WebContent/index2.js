$(document).ready(function () {
  var bubbleChart2 = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "Rondônia", count: "1333333"},//237.765,376
        {text: "Acre", count: "1444444"},
        {text: "Amazonas", count: "1222222"},
        {text: "Roraima", count: "1777777"},
        {text: "Pará", count: "1555555"},
        {text: "Amapá", count: "1111111"},
        {text: "Tocantins", count: "1888888"},
        {text: "Maranhão", count: "1888888"},
        {text: "Piauí", count: "1888888"},
        /*{text: "Ceará", count: "1444444"},
        {text: "Rio Grande do Norte", count: "1444444"},
        {text: "Paraíba", count: "1444444"},
        {text: "Pernambuco", count: "1444444"},
        {text: "Alagoas", count: "1333333"},
        {text: "Sergipe", count: "1333333"},
        {text: "Bahia", count: "1555555"},
        {text: "Minas Gerais", count: "1555555"},
        {text: "Espírito Santo", count: "1999999"},
        {text: "Rio de Janeiro", count: "1555555"},
        {text: "São Paulo", count: "1999999"},
        {text: "Paraná", count: "1333333"},
        {text: "Santa Catarina", count: "1333333"},
        {text: "Rio Grande do Sul", count: "1333333"},
        {text: "Mato Grosso do Su", count: "1333333"},
        {text: "Mato Grosso", count: "1999999"},
        {text: "Goiás", count: "1555555"},
        {text: "Distrito Federal", count: "1555555"},*/
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(See more detail)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            alert("Here is more details!!");
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});