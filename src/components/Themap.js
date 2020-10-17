import React, { Component, useState}from 'react'
import './TheMap.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import useSWR from 'swr'



var myIcon = L.icon ({
    iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2860/2860608.svg',
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-30, -176]
})

const Themap = () => {
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [zoom, setZoom] = useState(3);

    const url = "https://disease.sh/v3/covid-19/countries";
    const fetcher = (...args) => fetch(...args).then(response => response.json());
    const {data, error} = useSWR(url, fetcher);
    
    const position = [lat, lng]
    
    const countries = data && !error ? data.slice(0, 216) : [];
    const [activeCountry, setActiveCountry] = useState();

        return (
            <div className='map__container'>
                <Map className='map' center={position} zoom={zoom}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {countries.map(country => 
                        <Marker
                        key={country.countryInfo.id}
                        icon={myIcon}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                        onclick={() => {
                            setActiveCountry(country);
                        }}
                        />
                        )
                    }
                    {activeCountry && <Popup 
                    key={activeCountry.countryInfo.id}
                    position={[activeCountry.countryInfo.lat, activeCountry.countryInfo.long]}
                    onClose={() => {
                        setActiveCountry(null);
                    }}
                    >
                        
                        <div>
                        <h2>{activeCountry.country}</h2>
                        <img src={activeCountry.countryInfo.flag} className='flagicon'/>
                        <h2>Infectados Hoy: {activeCountry.todayCases}</h2>
                        <h3>Casos Activos: {activeCountry.active}</h3>
                        <h3>Activos x Millon Hab: {activeCountry.activePerOneMillion}</h3>
                        <h3>Muertes: {activeCountry.deaths}</h3>
                        <h3>Recuperados: {activeCountry.recovered}</h3>
                        <h3>Test Realizados: {activeCountry.tests}</h3>
                        </div>
                        </Popup>}
                </Map>
            </div>
        )
    
}

export default Themap;