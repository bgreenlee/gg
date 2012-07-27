;(function () {

    $(document).ready(function() {

        function ex () { return d3.select('#examples').append('span'); }

        var w = 300;
        var h = 200;

        // Define graphics ...
        var scatterplot = gg({
            width: w,
            height: h,
            layers: [{ geometry: 'point', mapping: { x: 'd', y: 'r' } }]
        });

        var linechart = gg({
            width: w,
            height: h,
            layers: [{ geometry: 'line', mapping: { x: 'd', y: 'r' } }]
        });

        var barchart = gg({
            width: w,
            height: h,
            layers: [{ geometry: 'interval', mapping: { x: 'd', y: 'r' }, width: 2 }]
        });

        var histogram = gg({
            width: w,
            height: h,
            layers: [{ geometry: 'interval', mapping: { x: 'category', y: 'count' }, width: 20 }],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: 0 }
            ]
        });

        var combined_points_and_line = gg({
            width: w,
            height: h,
            layers: [
                { geometry: 'point', mapping: { x: 'd', y: 'r' }, size: 3 },
                { geometry: 'line', mapping: { x: 'd', y: 'r' } },
                /*{ geometry: 'interval', mapping: { x: 'd', y: 'r' }, width: 2 },*/
            ],
        });

        var semi_log_scale = gg({
            width: w,
            height: h,
            layers: [
                { geometry: 'point', mapping: { x: 'd', y: 'r' }, size: 3 },
                { geometry: 'line', mapping: { x: 'd', y: 'r' } },
            ],
            scales: [ { type: 'log', aesthetic: 'y' } ]
        });

        var heightHistogram = gg({
            width: w,
            height: h,
            layers: [
                {
                    geometry: 'interval',
                    mapping: { x: 'bin', y: 'count' },
                    statistic: { kind: 'bin', variable: 'height', binsize: 4},
                }
            ],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: 0 }
            ]
        });

        var heightWeightScatter = gg({
            width: w,
            height: h,
            layers: [{ geometry: 'point', mapping: { x: 'height', y: 'weight' }, size: 1 }]
        });

        var normalHistogram = gg({
            width: w,
            height: h,
            layers: [
                {
                    geometry: 'interval',
                    mapping: { x: 'bin', y: 'count' },
                    statistic: { kind: 'bin', variable: 'v', binsize: .2},
                }
            ],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: 0 }
            ]
        });

        var boxPlot = gg({
            width: w,
            height: h,
            layers: [ { geometry: 'box', mapping: { x: 'group', y: false } } ],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: -300, max: 700 }
            ],
        });

        var boxPlot2 = gg({
            width: w,
            height: h,
            layers: [ {
                geometry: 'box',
                mapping: { x: 'group', y: false },
                statistic: { kind: 'box', group: 'grade', variable: 'value' },
            }],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
            ]
        });

        // ... and render 'em
        scatterplot.render(ex(), ggData.data);
        linechart.render(ex(), ggData.data);
        barchart.render(ex(), ggData.data);
        histogram.render(ex(), ggData.categoricalData);
        combined_points_and_line.render(ex(), ggData.data);
        semi_log_scale.render(ex(), ggData.semiLogData);
        heightHistogram.render(ex(), ggData.heightWeight);
        heightWeightScatter.render(ex(), ggData.heightWeight);
        //normalHistogram.render(ex(), ggData.normalData);
        //boxPlot.render(ex(), ggData.boxPlotData);
        boxPlot2.render(ex(), ggData.dataForBoxPlots);

    });

})();