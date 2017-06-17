import * as React from "react"
import { IndexRoute, Route } from "react-router"
import EalUIContainerWrapped from "./EalUIContainer"
import MapUIContainerWrapped from "./openlayers/map-ui/MapUIContainer"
import MapUINavContainerWrapped from "./map-ui/map-ui-nav/MapUINavContainer"
import LayerFormContainerWrapped from "./layer-editor/layer-form/LayerFormContainer"
import MapFormContainerWrapped from "./map-editor/map-form/MapFormContainer"
import MapListContainerWrapped from "./maps-browser/map-list/MapListContainer"
import About from "./static-pages/About"
import Welcome from "./static-pages/Welcome"

export default store => {
    return (
        <Route path="/" component={EalUIContainerWrapped}>
            {/* Home (main) route */}
            <IndexRoute components={{ content: Welcome }} />

            {/* Maps browser routes */}
            <Route path="(:tabName)" components={{ content: MapListContainerWrapped }} />

            {/* Map and layer routes */}
            <Route
                path="map/:mapId/:mapName/edit"
                components={{ content: MapUIContainerWrapped, sidebar: MapFormContainerWrapped }}
            />
            <Route
                path="map/:mapId/:mapName(/:tabName)"
                components={{ content: MapUIContainerWrapped, sidebar: MapUINavContainerWrapped }}
            />
            <Route
                path="map/:mapId/:mapName/layer(/:layerId)(/:tabName)"
                components={{ content: MapUIContainerWrapped, sidebar: LayerFormContainerWrapped }}
            />
            <Route path="new/map/" components={{ content: MapUIContainerWrapped, sidebar: MapFormContainerWrapped }} />

            {/* Static pages */}
            <Route path="about" components={{ content: About }} />
        </Route>
    )
}