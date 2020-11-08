import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Search.css'
import Form from 'react-bootstrap/Form'
import CardsCountries from './CardsCountries'

const Search = () => {
    const [listaPaises, setListaPaises] = useState([]);
    const [pais, setPais] = useState("");
    const [data, setData] = useState({});
    
    useEffect(() => {
        const cargarDatos = async () => {
            const apiData = await fetchDatos(pais);
            setData(apiData);
        }

        cargarDatos();
    }, [pais])

    console.log(data);

    useEffect(()=> {
        const cargarPaises = async () => {
            setListaPaises(await cargarListaPaises());
        }

        cargarPaises();
    }, [])

    const cargarListaPaises = async () => {
        try {
            const datos = await axios.get('https://covid19.mathdro.id/api/countries');
            const lista = datos.data.countries.map((pais) => pais.name);
            return lista;
        } catch (error) {
            
        }
    }

    const paisForm = async (pais) => {
        setPais(pais);
    }

    const fetchDatos = async (pais) => {
        let url = "";

        if(pais === "" || pais === "World") {
            url = "https://covid19.mathdro.id/api";
        } else {
            url = `https://covid19.mathdro.id/api/countries/${pais}`;
        }

        try {
            const data = await axios.get(url);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form">
            <Form.Group className="input">
                <Form.Label className="form__label">
                    Select a Country
                </Form.Label>
                <Form.Control className="form__control" as="select" onChange={(e) => paisForm(e.target.value)}>
                    <option value="world">World</option>
    {listaPaises.map((pais, i) => <option key={i} value={pais}>{pais}</option>)}
                </Form.Control>
            </Form.Group>
            <br />
            <CardsCountries data={data} />
        </div>
    )
}

export default Search
