let fig1a = [
    {
        x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
        y: [0, 0.392543261, 0.63099631, 0.775846222, 0.863836277, 0.917286429, 0.949755084, 0.969478387, 0.98145944, 0.993158465],
        mode: 'lines+markers',
        name: 'Add substance',
        line: {shape: 'spline'},
        type: 'scatter',
        showlegend: true
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Concentration',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Grayscale value',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig1a', [fig1a[0]], fig1a[1], {displayModeBar: false});

let fig1b = [
    {
        data: [
            {
                x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [0, 0.392543261, 0.63099631, 0.775846222, 0.863836277, 0.917286429, 0.949755084, 0.969478387, 0.98145944, 0.993158465],
                mode: 'lines+markers',
                name: 'Add substance 1',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            },
            {
                x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [0, 0.328861298, 0.549572843, 0.697700902, 0.797115376, 0.863836277, 0.908615256, 0.938668161, 0.958837829, 0.98145944],
                mode: 'lines+markers',
                name: 'Add substance 2',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            },
            {
                x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [0, 0.549572843, 0.797115376, 0.908615256, 0.958837829, 0.98145944, 0.991648828, 0.996238406, 0.998305676, 0.999656248],
                mode: 'lines+markers',
                name: 'Add substance 3',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            }
        ]
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Concentration',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Grayscale value',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig1b', fig1b[0].data, fig1b[1], {displayModeBar: false});

let fig1c = [
    {
        data: [
            {
                x: [0.01, 0.4, 0.5, 0.6, 0.7],
                y: [-0.186548114, 2.905338615, 3.052120179, 3.364453477, 4.540416399],
                mode: 'lines+markers',
                name: 'Fixed antigen grayscale',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            },
            {
                x: [0.01, 0.7],
                y: [-0.068696, 4.40968],
                mode: 'lines+markers',
                name: 'y = 6.4904 x - 0.1336',
                line: {dash: 'dot'},
                type: 'scatter',
                showlegend: true
            }
        ]
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Antigen concentration(μg/ml)',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Grayscale value',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig1c', fig1c[0].data, fig1c[1], {displayModeBar: false});

let fig2a = [
    {
        x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
        y: [3, 2.214913478, 1.73800738, 1.448307557, 1.272327447, 1.165427143, 1.100489833, 1.061043226, 1.037081119, 1.01368307],
        mode: 'lines+markers',
        name: 'Antigen concentration',
        line: {shape: 'spline'},
        type: 'scatter',
        showlegend: true
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Time',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Antigen concentration',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig2a', [fig2a[0]], fig2a[1], {displayModeBar: false});

let fig2b = [
    {
        data: [
            {
                x: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [2.482993366, 2.099634662, 1.815375455, 1.604598195, 1.448307557, 1.332418566, 1.246487264, 1.182769489, 1.100489833
                ],
                mode: 'lines+markers',
                name: 'Small antigen concentration',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            },
            {
                x: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [3.214913478, 2.73800738, 2.448307557, 2.272327447, 2.165427143, 2.100489833, 2.061043226, 2.037081119, 2.01368307
                ],
                mode: 'lines+markers',
                name: 'Antigen concentration',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            },
            {
                x: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [3.995294243, 3.495305315, 3.246487264, 3.122663678, 3.061043226, 3.030377986, 3.015117517, 3.007523189, 3.001863138
                ],
                mode: 'lines+markers',
                name: 'Large antigen concentration',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            }
        ]
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Time',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Antigen concentration',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig2b', fig2b[0].data, fig2b[1], {displayModeBar: false});

let fig3 = [
    {
        x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
        y: [0, 0.542825872, 0.715818403, 0.787105313, 0.821363237, 0.839421909, 0.849488242, 0.855292427, 0.85870838, 0.861966097],
        mode: 'lines+markers',
        name: 'Adding antigen',
        line: {shape: 'spline'},
        type: 'scatter',
        showlegend: true
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Antigen fixation time',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Grayscale value',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig3', [fig3[0]], fig3[1], {displayModeBar: false});

let fig4 = [
    {
        x: [0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 0.65, 0.6],
        y: [2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 2.3, 2.2],
        mode: 'lines+markers',
        name: 'Optimal concentration ratio line',
        line: {shape: 'spline'},
        type: 'scatter',
        showlegend: true
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'θ<sub>2</sub>',
            showgrid: true,
            zeroline: true,
            fixedrange: false,
            domain: [0,1.5]
        },
        yaxis: {
            zeroline: true,
            title: 'Optimal concentration ratio',
            showgrid: true,
            fixedrange: false
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig4', [fig4[0]], fig4[1], {displayModeBar: true});

let fig5a = [
    {
        x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
        y: [4, 3.214913478, 2.73800738, 2.448307557, 2.272327447, 2.165427143, 2.100489833, 2.061043226, 2.037081119, 2.01368307],
        mode: 'lines+markers',
        name: 'Detect concentration curve',
        line: {shape: 'spline'},
        type: 'scatter',
        showlegend: true
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Time',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Fixed antigen-antibody concentration',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig5a', [fig5a[0]], fig5a[1], {displayModeBar: false});

let fig5b = [
    {
        data: [
            {
                x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [3, 2.482993366, 2.099634662, 1.815375455, 1.604598195, 1.448307557, 1.332418566, 1.246487264, 1.182769489, 1.100489833],
                mode: 'lines+markers',
                name: 'Low sensitivity detection curve',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            },
            {
                x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [4, 3.214913478, 2.73800738, 2.448307557, 2.272327447, 2.165427143, 2.100489833, 2.061043226, 2.037081119, 2.01368307],
                mode: 'lines+markers',
                name: 'Detection curve',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            },
            {
                x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
                y: [5, 3.995294243, 3.495305315, 3.246487264, 3.122663678, 3.061043226, 3.030377986, 3.015117517, 3.007523189, 3.001863138],
                mode: 'lines+markers',
                name: 'High sensitivity detection curve',
                line: {shape: 'spline'},
                type: 'scatter',
                showlegend: true
            }
        ]
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Time',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Fixed antigen-antibody concentration',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig5b', fig5b[0].data, fig5b[1], {displayModeBar: false});

let fig5c = [
    {
        x: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
        y: [0.98145944, 0.9594453, 0.934758057, 0.912912061, 0.89621084, 0.884538673, 0.876816538, 0.871875679, 0.868778067, 0.865681118],
        mode: 'lines+markers',
        name: 'Detecting grayscale value curve',
        line: {shape: 'spline'},
        type: 'scatter',
        showlegend: true
    },
    {
        // title: 'Sales Growth',
        xaxis: {
            title: 'Detection time',
            showgrid: true,
            zeroline: true,
            fixedrange: true
        },
        yaxis: {
            zeroline: true,
            title: 'Grayscale value',
            showgrid: true,
            fixedrange: true
        },
        width: 550,
        height: 300,
        font: {
            family: 'Lato',
            color: '#7f5115'
        },
        margin: {
            l: 50,
            r: 30,
            t: 30,
            b: 40
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    }];
Plotly.newPlot('fig5c', [fig5c[0]], fig5c[1], {displayModeBar: false});