import React, { useContext, useEffect, useRef, useState } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { ProviderContext } from 'context/ProviderContext';
import useLocation from 'hooks/useLocation';
import { LoadingScreen } from 'screens';
import { styles } from './styles';
import { Fab } from 'components';

const Map = () => {
  const {
    provider: { provider },
  } = useContext(ProviderContext);
  const [showPoly, setShowPoly] = useState(false);
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUser,
    userLocation,
    stopFollowing,
    routeLines,
  } = useLocation();
  const mapRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    followUser();

    return () => {
      stopFollowing();
    };
  }, []);

  useEffect(() => {
    if (!following.current) {
      return;
    }

    const { latitude, longitude } = userLocation;
    mapRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  }, [userLocation]);

  const centerMap = async () => {
    const { latitude, longitude } = await getCurrentLocation();

    following.current = true;

    mapRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapRef.current = el!)}
        style={styles.map}
        showsUserLocation
        provider={provider}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => {
          following.current = false;
        }}>
        {showPoly && (
          <Polyline
            coordinates={routeLines}
            strokeColor="black"
            strokeWidth={5}
          />
        )}
      </MapView>
      <Fab
        iconName="pencil-outline"
        onPress={() => setShowPoly(!showPoly)}
        position={2}
      />
      <Fab iconName="locate-outline" onPress={centerMap} position={1} />
    </>
  );
};

export default Map;
