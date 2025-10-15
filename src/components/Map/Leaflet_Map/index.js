"use client"
import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import L from 'leaflet';

const LeafletMap = () => {

    useEffect(() => {
        // Initialize maps only once
        if (!document.getElementById('mobilemap')._leaflet_id) {
            const mobileMap = L.map('mobilemap').fitWorld();
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 10 }).addTo(mobileMap);
        }

        if (!document.getElementById('accessiblemap')._leaflet_id) {
            const accessibleMap = L.map('accessiblemap').setView([51.505, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(accessibleMap);
            L.marker([51.5, -0.09]).bindPopup("<b>Hello!</b><br>I am a popup.").addTo(accessibleMap);
            L.circle([51.508, -0.10], { fillColor: '#467FFB', fillOpacity: 0.6, radius: 500 }).bindPopup("This is circle.").addTo(accessibleMap);
            L.polygon([[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]], { fillColor: '#467FFB', fillOpacity: 0.6 }).bindPopup("This is polygon.").addTo(accessibleMap);
        }

        if (!document.getElementById('markersmap')._leaflet_id) {
            const markersMap = L.map('markersmap').setView([50.4501, 30.5234], 4);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(markersMap);
            L.marker([50.4501, 30.5234]).bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!').addTo(markersMap);
        }

        if (!document.getElementById('interactivemap')._leaflet_id) {
            const interactiveMap = L.map('interactivemap').setView([37.8, -96], 4);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(interactiveMap);
        }

        if (!document.getElementById('customiconsmap')._leaflet_id) {
            const customIconsMap = L.map('customiconsmap').setView([51.5, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(customIconsMap);

            const LeafIcon = L.Icon.extend({
                options: {
                    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
                    iconSize: [38, 95], shadowSize: [50, 64], iconAnchor: [22, 94],
                    shadowAnchor: [4, 62], popupAnchor: [-3, -76]
                }
            });

            const greenIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png' });
            const redIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png' });
            const orangeIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png' });

            L.marker([51.5, -0.09], { icon: greenIcon }).bindPopup('I am a green.').addTo(customIconsMap);
            L.marker([51.495, -0.083], { icon: redIcon }).bindPopup('I am a red.').addTo(customIconsMap);
            L.marker([51.49, -0.1], { icon: orangeIcon }).bindPopup('I am an orange.').addTo(customIconsMap);
        }

        if (!document.getElementById('layersmap')._leaflet_id) {
            const layersMap = L.map('layersmap', { scrollWheelZoom: false }).setView([-29.50, 145], 3.5);
            const basemaps = {
                StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
                Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'TOPO-WMS' }),
                Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'OSM-Overlay-WMS' })
            };
            L.control.layers(basemaps).addTo(layersMap);
            basemaps.Topography.addTo(layersMap);

            L.marker([-37.699450, 176.279420]).addTo(layersMap);
            L.marker([-27.643310, 153.305140]).addTo(layersMap);
            L.marker([-33.956330, 122.150270]).addTo(layersMap);
            L.marker([-34.962390, 117.391220]).addTo(layersMap);
            L.marker([-17.961210, 122.214820]).addTo(layersMap);
            L.marker([-16.505960, 151.751520]).addTo(layersMap);
            L.marker([-22.594400, 167.484440]).addTo(layersMap);
            L.marker([-37.977000, 177.057000]).addTo(layersMap);
            L.marker([-41.037600, 173.017000]).addTo(layersMap);
            L.marker([-37.670300, 176.212000]).addTo(layersMap);
        }

    }, []);


    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Leaflet Map" title="Map" path={["Leaflet Map"]} icon={<i class="ph-duotone  ph-map-pin-line f-s-16"></i>}/>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Leaflet on Mobile Map</h5>
                            </CardHeader>
                            <CardBody>
                                    <div className="w-100 h-280" id="mobilemap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Accessible maps</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="markersmap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Markers, Circles and Polygons</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="accessiblemap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Interactive Choropleth Map</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="interactivemap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Markers With Custom Icons</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="customiconsmap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Layer Groups and Layers Control</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="layersmap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LeafletMap;
