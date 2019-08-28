import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { useResults } from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { COST_EFFECTIVE, BIT_PRICIER, BIG_SPENDER, MASSIVE_SPENDER } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

export const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResults = price => results.filter(result => result.price === price);

  return (
    <>
      <SearchBar
        value={searchTerm}
        onInputChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      {error === '' ? null : <Text>{error}</Text>}
      <ScrollView>
        <ResultsList headerText="Cost Effective" filteredResults={filterResults(COST_EFFECTIVE)} />
        <ResultsList headerText="Bit Pricier" filteredResults={filterResults(BIT_PRICIER)} />
        <ResultsList headerText="Big Spender" filteredResults={filterResults(BIG_SPENDER)} />
        <ResultsList
          headerText="Massive Spender"
          filteredResults={filterResults(MASSIVE_SPENDER)}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
