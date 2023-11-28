import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import AddHomeButton from '../add_home_btn'
import ItemData from '../item_data'
import { Image } from 'react-native';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.text_top}>
          <Image source={require('../assets/logosiswa.png')}style={styles.logo}/>
            <Text style={styles.text_headline}>
              Data Siswa 
            </Text>
          </View>
         <View style={[styles.other_top, { alignItems: 'center' }]}>
          <AddHomeButton onPress={() => navigation.navigate('Add')} tulisan="Tambah Data Siswa" />
        </View>

        </View>

        <View style={styles.main_content}>
          <ItemData onPress={() => 
            navigation.navigate('Detail')} name="Putri Prameistika Azahra" email="putriprameistika@gmail.com"
          />
          <ItemData onPress={() => 
            navigation.navigate('Detail')} name="Perwira" email="perwira@gmail.com"
          />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  
  top: {
    gap: 24,
    paddingTop: 38,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "#5FBDFF",
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 300,
 },
  text_top: {
    gap: 8,
    alignItems: 'center',
  },
  text_headline: {
    fontSize: 23,
    color: "#FFFFFF",
    fontWeight: 500
  },
  other_top: {
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  
  main_content: {
    paddingHorizontal: 16,
    gap: 18
  }
});
