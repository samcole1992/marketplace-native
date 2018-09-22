import React from 'react';
import PropTypes from 'prop-types'
import {List, ListItem, Button} from 'react-native-elements'
import {Text, View, FlatList} from 'react-native';
// import SearchBar from './SearchBar'

import Loading from '../components/Loading'
import styles from '../styles'

const BuyerIndexOffers = (props) => {

  if (props.fetching ) {
    return <Loading/>
  }

  else

    return(
    <FlatList
     testID="BuyerIndexOffers"

       data={props.offers}

       renderItem={({item, index}) => (
       <ListItem
         underlayColor={'#dbdbdb'}
         item={item}
         titleContainerStyle={{flex:.85}}
         style={{flex:1}}
         containerStyle={styles.listContainerStyle}
         titleStyle={styles.listItemTitleStyle}
         subtitle={item.id}
         subtitleStyle={{fontWeight:'normal'}}
         rightTitleStyle={{fontWeight:'bold'}}
         rightTitle={item.attributes.total}
         onPress={()=>{
           props.onClick(item, index)
         }}
         />
       )}
       keyExtractor={item => item.id}

    />
  )
}

BuyerIndexOffers.propTypes = {
  offers: PropTypes.array.isRequired
}


export default BuyerIndexOffers
