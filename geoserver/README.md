**GeoServer Setup**

- Enabled `Encrypting web UI URLs` and set password encryption to `Strong PBE`. /data/security/config.xml.
- Set the `Default XML user/group service` password encryption to `Digest`. /data/security/usergroup/default/config.xml
- Set PRODUCTION_LOGGING. /data/logging.xml.
- Set WFS `Service level` to Basic to turn off WFS-T. /data/wfs.xml.
- Enabled tile image formats: utfgrid, apbox-vector, geojson, topojson for Vector Layers and Layer Group. /data/gwc-gs.xml