import React from 'react';
import CityCard from '../CityCard/CityCard';

const CityList = (props) => (
  <div className="container" style={{ marginTop: 60, marginBottom: 30 }}>
    <div className="row">
      <div className="col-12">
        <h3 className="text-center" style={{ marginBottom: 30 }}>{props.title}</h3>
        { props.showSubtitle === true && props.subtitle !== '' &&
          <h6 className="text-muted text-center">Search result for keyword '{props.subtitle}' :</h6>
        }
      </div>
    </div>
    <div className="row">
     { props.cities == null ? (
       <div className="col">
         <p className="text-center">Loading...</p>
       </div>
     ) : (
       _renderCityList(props.cities)
     )
    }
    </div>
  </div>
);

const _renderCityList = (cities) => {
  if (cities.length > 0) {
    return (
      cities.map(city =>
        <CityCard key={city.id} city={city} />
      )
    )
  } else {
    return (
      <div className="col">
        <p className="text-center text-danger">Sorry, data is not found</p>
      </div>
    )
  }
}

export default CityList;
