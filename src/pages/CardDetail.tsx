import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

interface Country {
  name: {
    official: string;
  };
  capital: string;
  flags: {
    png: string;
  };
  population: string;
  continents: string;
}

const CardDetail = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get<Country[]>(
          `https://restcountries.com/v3.1/name/${name}`
        );
        console.log(response.data);

        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountry();
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center gap-5">
      <img
        src={country.flags.png}
        alt={country.name.official}
        className="img-fluid"
      />
      <div className="d-flex justify-content-center align-items-center flex-column text-center m-b0">
        <h2>{country.name.official}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population} </p>
        <p>Continents: {country.continents}</p>
      </div>
    </div>
  );
};

export default CardDetail;
