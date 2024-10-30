import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { CountryButton, CountryPicker } from "react-native-country-codes-picker";

interface CountryPickerProps {
  show: boolean;
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
  setShow: (show: boolean) => void;
  setCountryFlag: (countryFlag: string) => void;
  countryFlag: ImageSourcePropType | undefined;

}
// import {CountryPicker} from "react-native-country-codes-picker";

function ListHeaderComponent({countries, lang, onPress}: {
    countries: any;
    lang: any;
    onPress: any;
}) {
    return (
        <View
            style={{
                paddingBottom: 20,
            }}
        >
            <Text>
                Popular countries
            </Text>
            <Text>
            {countries?.map((country: any, index: any) => {
                return (
                    <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country)} />
                )
            })}
            </Text>
        </View>
    )
}

export function CountryPickerComponent({
    show,
    setShow,
    setCountryCode,
    countryCode,
    setCountryFlag,
    countryFlag
}: CountryPickerProps) {
//   const [show, setShow] = useState(false);
//   const [countryCode, setCountryCode] = useState('');

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            width: 'auto',
            height: "auto",
            // backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'black',
            fontSize: 20
        }}>
            {countryCode}
        </Text>
        <Image source={countryFlag} width={20} height={20} resizeMode="cover" />
      </TouchableOpacity>

      {/* // For showing picker just put show state to show prop */}
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setCountryFlag(item.flag) 
          setShow(false);
        }}
        ListHeaderComponent={ListHeaderComponent}
        popularCountries={['en', 'ua', 'pl']}
        lang="pl"
      />
    </View>
  );
}