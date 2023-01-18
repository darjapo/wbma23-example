import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const item = props.singleMedia;
  return (
    <TouchableOpacity style={styles.row}>
      <Image style={styles.image} source={{uri: item.thumbnails.w160}}></Image>
      <View style={styles.box}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'hsl(342, 43%, 15%)',
  },
  box: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 10,
  },
  image: {
    flex: 1,
    height: 150,
    margin: 10,
    borderRadius: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f5bccd',
  },
  listDescription: {
    fontSize: 12,
    textAlign: 'justify',
    color: '#F0F4EF',
  },
});

export default ListItem;
