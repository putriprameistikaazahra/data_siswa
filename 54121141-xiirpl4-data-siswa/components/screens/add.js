import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import ButtonPrimaryyLarge from '../crud_btn'
import Input from '../input'

export default function Tambah({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.text_top}>
          <Text style={styles.text_headline}>
            Tambah Data
          </Text>
        </View>
      </View>

      <View style={styles.main_content}>
        <View style={styles.form}>
          <Input title_input="NIS Siswa"/>
          <Input title_input="Nama Siswa"/>
          <Input title_input="Alamat Siswa"/>
          <Input title_input="Email Siswa"/>
          <Input title_input="Tanggal Lahir Siswa"/>
        </View>
        <View style={styles.button_pack}>
        
          <ButtonPrimaryyLarge onPress={() => navigation.navigate('Home')} tulisan="Tambah Data"/>
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
});
