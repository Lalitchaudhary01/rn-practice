import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { productData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>

      <Text>Name: {productData.name}</Text>
      <Text>Price: {productData.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
