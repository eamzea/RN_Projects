import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const FriendListScreen = ({ navigation }) => {
  const usersOnline = useSelector(state => state.usersOnline);
  const selfUser = useSelector(state => state.selfUser);

  console.log(usersOnline);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={usersOnline.filter(user => user.userID !== selfUser.userID)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Chat', {
                name: item.username,
                userID: item.userID,
              })
            }
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{ uri: item.avatar }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 20 }}>{item.username}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.userID}
      />
    </View>
  );
};

export default FriendListScreen;

const styles = StyleSheet.create({});
