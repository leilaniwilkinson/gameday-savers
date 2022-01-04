//import React from 'react';
import React, { useState } from 'react';
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import ReactMapGL, {Marker} from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
const axios = require('axios');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybmFyZG9nZGMiLCJhIjoiY2t3MHlwYXdzMDA0bzJwcWo3ZXlwdmE3diJ9.N_VuqfVZ7WjJZyOJ8D0gRA'

class Mapp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lng:-96.339844,
            lat:30.610250,
            zoom:13
        }
    }
    
    

    componentDidMount(){
        const axios = require('axios').default;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'imperial',
            profile: 'mapbox/driving'
          });


        map.addControl(directions, 'top-right');
        map.addControl(new mapboxgl.NavigationControl());

        // map.attributionControl.setPosition('bottom-left');
        // var directions = mapboxgl.directions();
        // mapboxgl.directions.layer(directions).addTo(map);
        // mapboxgl.directions.inputControl('inputs', directions).addTo(map);
        // mapboxgl.directions.errorsControl('errors', directions).addTo(map);
        // mapboxgl.directions.routesControl('routes', directions).addTo(map);
        // mapboxgl.directions.instructionsControl('instructions', directions).addTo(map);

        const successCall = (position) =>{

            var start_marker = new mapboxgl.Marker()
                    .setLngLat([position.coords.longitude, position.coords.latitude])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h4>' + 'CURRENT LOCATION' + "</h4>"))
                    .addTo(map);
            

            console.log(position.coords.latitude, position.coords.longitude);

        }

        const errorCall = (error) =>{
            console.error(error);
        }


        axios.get('/api/parkings').then(resp => { //http://localhost:5000

            console.log(resp.data);
            
            for (let element of resp.data) { // You can use `let` instead of `const` if you like
                //console.log(element.coordinates[0])
                //process.stdout.write("hello: " + element.coordinates[0]);

                var popup = new mapboxgl.Popup({closeButton: false})
                    .setText(element.Parking_Lot)
                    .setHTML('<h4>' + element.Parking_Lot + ' spots available: ' + element.space_available + '<h4>')
                    
                var marker = new mapboxgl.Marker()
                            .setLngLat([element.coordinates[1].$numberDecimal, element.coordinates[0].$numberDecimal])
                            .setPopup(popup)
                            .addTo(map);
                            

            }
        });

        // create a function to make a directions request

        var marker = new mapboxgl.Marker()
                    .setLngLat([-96.34037,30.60982])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h3>' + 'KYLE FIELD' + "</h3>"))
                    .addTo(map);

                    var popup = new mapboxgl.Popup()
                    .setHTML('<h4>Parking Lots/Garages: Blue <br /> Tailgating Lots/Areas: Red</h4>')
                    .setLngLat([-96.34037,30.60982])
                    .addTo(map)

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.33757,30.62113])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 47' + "</h2>"))
                    .addTo(map)

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.33642,30.62400])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 50' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({type: 'default', color: 'red'})
                    .setLngLat([-96.3369492465168, 30.622406804484438])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 51' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.35342,30.61063])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 18' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.35231,30.61080])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 73' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.35181,30.60989])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 98' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.35434,30.60435])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 110' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.35428,30.60085])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Lot 113' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.35381,30.60005])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Fan Field' + "</h2>"))
                    .addTo(map);

                    var marker = new mapboxgl.Marker({icon: 'default', color: 'red'})
                    .setLngLat([-96.33841,30.61080])
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h2>' + 'Aggie Park' + "</h2>"))
                    .addTo(map);

                    

        navigator.geolocation.getCurrentPosition(successCall, errorCall);

        const highlightLayer = {
            id: 'highlight',
            type: 'custom',
    
            // method called when the layer is added to the map
            // https://docs.mapbox.com/mapbox-gl-js/api/#styleimageinterface#onadd
            onAdd: function (map, gl) {
                // create GLSL source for vertex shader
                const vertexSource = `
                    uniform mat4 u_matrix;
                    attribute vec2 a_pos;
                    void main() {
                        gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);
                    }`;
    
                // create GLSL source for fragment shader
                const fragmentSource = `
                    void main() {
                        gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
                    }`;
    
                // create a vertex shader
                const vertexShader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vertexShader, vertexSource);
                gl.compileShader(vertexShader);
    
                // create a fragment shader
                const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fragmentShader, fragmentSource);
                gl.compileShader(fragmentShader);
    
                // link the two shaders into a WebGL program
                this.program = gl.createProgram();
                gl.attachShader(this.program, vertexShader);
                gl.attachShader(this.program, fragmentShader);
                gl.linkProgram(this.program);
    
                this.aPos = gl.getAttribLocation(this.program, 'a_pos');
    
                // define vertices of the triangle to be rendered in the custom style layer
                const blPark = mapboxgl.MercatorCoordinate.fromLngLat({
                    lng: -96.33922,
                    lat: 30.61103
                });
                const tlPark = mapboxgl.MercatorCoordinate.fromLngLat({
                    lng: -96.337902,
                    lat: 30.611948
                });
                const brPark = mapboxgl.MercatorCoordinate.fromLngLat({
                    lng: -96.337945,
                    lat: 30.609456
                });

    
                // create and initialize a WebGLBuffer to store vertex and color data
                this.buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
                gl.bufferData(
                    gl.ARRAY_BUFFER,
                    new Float32Array([
                        blPark.x,
                        blPark.y,
                        tlPark.x,
                        tlPark.y,
                        brPark.x,
                        brPark.y
                    ]),
                    gl.STATIC_DRAW
                );
            },

            
    
            // method fired on each animation frame
            // https://docs.mapbox.com/mapbox-gl-js/api/#map.event:render
            render: function (gl, matrix) {
                gl.useProgram(this.program);
                gl.uniformMatrix4fv(
                    gl.getUniformLocation(this.program, 'u_matrix'),
                    false,
                    matrix
                );
                gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
                gl.enableVertexAttribArray(this.aPos);
                gl.vertexAttribPointer(this.aPos, 2, gl.FLOAT, false, 0, 0);
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
            }

        };



        // add the custom style layer to the map
        map.on('load', () => {
            map.addLayer(highlightLayer, 'building');
        });


    }

    

    render(){
        return(

            <div>
                <div ref={el => this.mapContainer = el} style = {{width: '100%', height: '75vh'}}/>
            </div>

        )
    }
}
export default Mapp;