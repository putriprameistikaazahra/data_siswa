import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import ButtonPrimaryyLarge from '../crud_btn'
import ItemData from '../view_data_item'

export default function Tambah({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.text_top}>
          <Text style={styles.text_headline}>
            Putri Prameistika Azahra
          </Text>
        </View>
      </View>

      <View style={styles.main_content}>
        <View style={styles.form}>
          <ItemData title_data="NIS" text_data="541211141"/>
          <ItemData title_data="Nama" text_data="Putri Prameistika Azahra"/>
          <ItemData title_data="Alamat" text_data="Banyumas, Jawa Tengah"/>
          <ItemData title_data="Email" text_data="putriprameistika@gmail.com"/>
          <ItemData title_data="Tanggal Lahir" text_data="12-08-2005"/>
        </View>
        <View style={styles.button_pack}>
          <ButtonPrimaryyLarge onPress={() => navigation.navigate('Update')} tulisan="Edit Data"/>
          <ButtonPrimaryyLarge onPress={() => navigation.navigate('Update')} tulisan="Hapus Data"/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  // TOP
  top: {
    gap: 24,
    paddingTop: 38,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "#75C2F6"
  },
  text_top: {
    gap: 8,
    alignItems: 'center'
  },
  text_headline: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: 500
  },
  // MAIN CONTENT
  main_content: {
    paddingHorizontal: 16,
    gap: 28
  },
  form: {
    gap: 18
  },
  button_pack: {
    gap: 8
  }
  // style: {vncn},
});
