import {Image, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const item = props.singleMedia;
  return (
    <TouchableOpacity style={{flexDirection: 'row'}}>
      <Image
        style={{width: 150, height: 200}}
        source={{uri: item.thumbnails.w160}}
      ></Image>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.title}</Text>
        <Text style={{textAlign: 'justify'}}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
