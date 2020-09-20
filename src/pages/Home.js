import React, { Component } from 'react';
import { API } from '../config/api';
import axios from 'axios';
import Hero from '../components/HeroElement/Hero';
import CityList from '../components/CityList/CityList';
import SearchCity from '../components/SearchCity/SearchCity';

const citiesDummy = [
    { id: 74, name: 'Jakarta', country_name: 'Indonesia' },
    { id: 11052, name: 'Bandung', country_name: 'Indonesia' },
    { id: 170, name: 'Bali', country_name: 'Indonesia' },
  ];

class Home extends Component {
    constructor () {
        super()
        this.state = {
          featuredCities: citiesDummy,
          citiesResultSearch: [],
          cityKeywordSearch: '',
          keyword: '',
        }
      }
      
      changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value });
      }

      searchHandler = () => {
        let keyword = this.state.keyword;
        const url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
          headers: {
            'user-key' : API.zomato.api_key,
          },
          params: {
            q: keyword
          }
        })
        .then(({ data }) => {
          if (data.status === 'success') {
            this.setState({
              citiesResultSearch: data.location_suggestions,
              keyword: '',
              cityKeywordSearch: keyword
            });
          }
        })
        .catch(err => console.log(err));
      }

    render() {
        return (
            <div>
                <Hero />
                <div className="container" style={{ marginTop: 60, marginBottom: 30 }}>
                <CityList title={'Featured Cities'} cities={this.state.featuredCities} />
                <SearchCity
                value={this.state.keyword}
                onChange={this.changeKeywordHandler}
                onClickSearch={this.searchHandler}
                />
                { this.state.cityKeywordSearch !== '' && (
                  <CityList
                 title={'Search Result'}
                 showSubtitle={true}
                 subtitle={this.state.cityKeywordSearch}
                 cities={this.state.citiesResultSearch}
                 />
                ) }         
                
                </div>
            </div>
        );
    }
}

export default Home;
