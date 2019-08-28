import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ResultDetail } from './ResultDetail';

const ResultsList = ({ headerText, filteredResults, navigation }) =>
  !filteredResults.length ? null : (
    <View>
      <Text style={styles.header}>{headerText}</Text>
      <FlatList
        horizontal
        data={filteredResults}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  }
});

export default withNavigation(ResultsList);
