import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from '../components/Button/Button';
import useCalculator from '../hooks/useCalculator';
import { styles } from '../theme/AppTheme';

const CalculatorScreen = () => {
  const {
    digits: { actual, previous },
    actions,
  } = useCalculator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.calculatorContainer}>
      {previous !== '0' && <Text style={styles.resultBackup}>{previous}</Text>}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {actual}
      </Text>
      <View style={styles.row}>
        <Button text="C" color="#9B9B9B" action={actions.clear} />
        <Button text="+/-" color="#9B9B9B" action={actions.changeValue} />
        <Button text="del" color="#9B9B9B" action={actions.deleteSingle} />
        <Button text="÷" color="#FF9427" action={actions.divideAction} />
      </View>
      <View style={styles.row}>
        <Button text="7" action={actions.buildNumber} />
        <Button text="8" action={actions.buildNumber} />
        <Button text="9" action={actions.buildNumber} />
        <Button text="×" color="#FF9427" action={actions.multiplyAction} />
      </View>
      <View style={styles.row}>
        <Button text="4" action={actions.buildNumber} />
        <Button text="5" action={actions.buildNumber} />
        <Button text="6" action={actions.buildNumber} />
        <Button text="-" color="#FF9427" action={actions.subtractionAction} />
      </View>
      <View style={styles.row}>
        <Button text="3" action={actions.buildNumber} />
        <Button text="2" action={actions.buildNumber} />
        <Button text="1" action={actions.buildNumber} />
        <Button text="+" color="#FF9427" action={actions.additionAction} />
      </View>
      <View style={styles.row}>
        <Button text="0" big action={actions.buildNumber} />
        <Button text="." action={actions.buildNumber} />
        <Button text="=" action={actions.calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
