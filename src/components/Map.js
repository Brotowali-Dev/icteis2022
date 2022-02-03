/* eslint-disable array-callback-return */
import React from "react";
import GoogleMapReact from "google-map-react";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)",
};

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: -6.168238921714012,
      lng: 106.72643963192544,
      // lat: 60.192059,
      // lng: 24.945831
    },
    zoom: 18,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      //   <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="cardContainer">
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.props.locations.map((item) => {
              if (item.address.length !== 0) {
                return item.address.map((i) => {
                  return (
                    <a
                      href="https://goo.gl/maps/tLmb2LJmrXGwCpz9A"
                      key={i.id}
                      lat={i.lat}
                      lng={i.lng}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        style={markerStyle}
                        height={32}
                        width={32}
                        src="/assets/pin.svg"
                        alt="pin"
                      />
                    </a>
                  );
                });
              }
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
// convert SimpleMap to functional component

export default Map;
