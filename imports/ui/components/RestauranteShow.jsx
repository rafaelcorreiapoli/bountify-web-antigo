import React from 'react';
import Paper from 'material-ui/Paper';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

let styles = {
  paperStyle: {
    padding: 20,
    marginBottom: 20
  },
  mapContainer: {
    height: 500,
    width: 500
  }
};

export default class RestauranteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { _id, nome, cnpj, lat, lng, logoUrl } = this.props;

    return (
      <div>
      <Paper style={styles.paperStyle}>
      	<img src={logoUrl} />
      	<h1>Nome: {nome}</h1>

      	<h3>CNPJ: {cnpj}</h3>
				<GoogleMapLoader
	        containerElement={
	          <div
	            {...this.props}
	            style={{
	              width: '100%',
	              height: 500
	            }}
	          />
	        }
	        googleMapElement={
	          <GoogleMap
	            ref={map => {this._googleMapComponent = map; }}
	            defaultZoom={15}
	            defaultCenter={{ lat: Number(lat), lng: Number(lng)}}
	          >
	          	<Marker
	              position={{lat: lat, lng: lng}}
              />
		          </GoogleMap>
		        }
		      />
      </Paper>
			</div>
    );
  }
}

RestauranteShow.propTypes = {
	_id: React.PropTypes.string,
  nome: React.PropTypes.string,
  cnpj: React.PropTypes.string,
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
  logoUrl: React.PropTypes.string
};
