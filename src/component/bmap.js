import React from 'react'
import { Map, Marker, NavigationControl, MapTypeControl, InfoWindow} from 'react-bmap'

class BMapComponent extends React.Component{
    render(){
        return (
            <div>
                <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11" enableScrollWheelZoom >
                    <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
                    <NavigationControl />
                    <MapTypeControl/>
                    <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="测试" title="地图测试" />
                </Map>
            </div>
        )
    }
}

export default BMapComponent 
