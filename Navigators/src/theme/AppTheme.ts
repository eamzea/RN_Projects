import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 24,
    marginBottom: 20,
  },
  personBtns: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goddardBtn: {
    backgroundColor: 'blue',
  },
  gydaBtn: {
    backgroundColor: 'pink',
  },
  personBtnTxt: {
    color: 'white',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  optionsContainer: {
    margin: 20,
  },
  optionTextContainer: {
    marginVertical: 10,
  },
  optionText: {
    fontSize: 24,
  },
});
