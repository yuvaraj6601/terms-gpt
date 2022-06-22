import React, { useState, useEffect } from 'react';
import MapPicker from 'react-google-map-picker';
// import './google_maps_picker.ui.scss';
import { MapTypeId } from 'utils/constant.utils';
import PrimaryButton from '../button/primary_Button.ui';

const DefaultZoom = 20;

let currentLocation = {
  lat: 19,
  lng: 80,
};

interface MapPickerOptions {
  defaultLocation: { lat: number; lng: number };
  defaultZoom: number;
  mapTypeId: MapTypeId;
  style: { height: string; width: string };
  onChangeLocation: (lat: number, lng: number) => void;
  onChangeZoom: (newZoom: number) => void;
  apiKey: string;
}

const GoogleMapsPicker = (props: MapPickerOptions) => {
  const {
    defaultLocation: DefaultLocation,
    defaultZoom,
    mapTypeId,
    style,
    onChangeLocation,
    onChangeZoom,
    apiKey,
  } = props;

  const [defaultLocation, setDefaultLocation] = useState(
    DefaultLocation || currentLocation,
  );
  const [enableMap, setEnableMap] = useState(false);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(defaultZoom);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    // if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setDefaultLocation(currentLocation);
      setEnableMap(true);
    });
    // } else {
    //   console.log("Geolocation is not supported by this browser.");
    //   return "Geolocation is not supported by this browser."
    // }
  }

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
    onChangeLocation(lat, lng);
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
    onChangeZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <div className="google_picker_container">
      <div style={{ width: style.width, height: style.height }}>
        {enableMap && (
          <MapPicker
            defaultLocation={defaultLocation}
            zoom={zoom}
            mapTypeId={mapTypeId || MapTypeId.Roadmap}
            style={style}
            onChangeLocation={handleChangeLocation}
            onChangeZoom={handleChangeZoom}
            apiKey={apiKey}
          />
        )}
      </div>
      {/* <div
        onClick={() => onChangeLocation(location.lat, location.lng)}
        className="button_container">
        <PrimaryButton text={'Submit'} />
      </div> */}
    </div>
  );
};

export default GoogleMapsPicker;
