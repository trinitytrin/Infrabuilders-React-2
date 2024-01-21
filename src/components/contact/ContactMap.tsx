import { MapContainer, TileLayer, Marker, Popup, Circle, ZoomControl } from 'react-leaflet';
// import { Icon } from "leaflet";
const ContactMap = () => {

    const lat = 23.74043;
    const lon = 90.37550;
    // const mapIcon = new Icon({
    //     iconUrl: "/skateboarding.svg",
    //     iconSize: [25, 25],

    // });


    return (

        <div className="row xboot-standard-row gray-bg">
            <div className="section-title text-center">
                <h2 className="area-title">Find Our Location on Map</h2>
            </div>
            <div className='row'>
                <MapContainer center={[lat, lon]} zoom={17} scrollWheelZoom={true} className='col-lg-10 col-sm-10' >
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
            </div >

            <p className='text-center'><a href={"https://www.openstreetmap.org/?mlat=23.74041&mlon=90.37551#map=19/23.74041/90.37551&layers=N"} target='_blank'>View Larger Map</a></p>


        </div>
    )
}


export default ContactMap;