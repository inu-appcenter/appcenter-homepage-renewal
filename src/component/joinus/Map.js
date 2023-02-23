import styled from "styled-components";
import RoomIcon from '@mui/icons-material/Room';
import GoogleMapReact from 'google-map-react';
import theme from "../../resource/style/Theme";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";

export default function Map() {
    const API_KEY = "AIzaSyDglNjC5zkNJaDFQNiLyvkkQixbFvzDjoU";
    const APP_CENTER_LOCATION = {
        lat: 37.3765039,
        lng: 126.6358189,
    }
    const defaultProps = {
        center: APP_CENTER_LOCATION,
        zoom: 15
    };
    
    return (
        <MapWrapper>
            <GoogleMapReact
                bootstrapURLKeys={{key: API_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={APP_CENTER_LOCATION.lat}
                    lng={APP_CENTER_LOCATION.lng}
                    text="인천대학교 앱센터" />
            </GoogleMapReact>
        </MapWrapper>
    )
}

const Marker = ({ text }) => <div style={MarkerStyle}><RoomIcon/>{text}</div>;
const MarkerStyle = {
    color: theme.color.primary,
    textAlign: "right",
    fontSize: "1rem",
    whiteSpace: "nowrap",
    textShadow: "2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white"
}
const MapWrapper = styled.div`
    width: ${viewWidthCalc(550)};
    height: ${viewHeightCalc(350)};
    margin: 0 auto 3rem;
`;