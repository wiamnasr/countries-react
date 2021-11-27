// Styles
import { Wrapper, Content } from "./CountryCard.styles";

// Components
import allCountries from "../../countriesAll.json";

const CountryCard = () => {
  const formatPopulationNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Wrapper>
      {allCountries.map((country, index) => (
        <Content>
          <img src={country.flag} alt={`${country.name}'s Flag'`}></img>
          <h2>{country.name}</h2>
          <div>
            <h4>
              <span className='countryFields'>Population:</span>{" "}
              {formatPopulationNumber(country.population)}
            </h4>
            <h4>
              <span className='countryFields'>Region:</span> {country.region}
            </h4>
            <h4>
              <span className='countryFields'>Capital:</span> {country.capital}
            </h4>
          </div>
        </Content>
      ))}
    </Wrapper>
  );
};

export default CountryCard;
