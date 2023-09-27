import { MapContainer, TileLayer, Marker, Popup, Circle, ZoomControl } from 'react-leaflet';
import { Icon } from "leaflet";
const ContactMap = () => {

    const lat = 23.74043;
    const lon = 90.37550;
    const mapIcon = new Icon({
        iconUrl: "/skateboarding.svg",
        iconSize: [25, 25],

    });


    return (

        <div className="row xboot-standard-row testimonial-section gray-bg">


            <MapContainer center={[lat, lon]} zoom={17} scrollWheelZoom={true} className='col-lg-8 col-sm-10' >
                <TileLayer opacity={0.8}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Circle center={[lat, lon]} radius={25} opacity={0.5} pathOptions={{ color: 'grey' }} />
                <ZoomControl position="bottomright" />
                <Marker position={[lat, lon]} >
                    <Popup className='map-popup-style' >
                        Infrabuilders' Office
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}


export default ContactMap;