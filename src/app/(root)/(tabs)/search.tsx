import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          Search Properties
        </Text>

        <Text style={{ fontSize: 16, color: "#666666" }}>
          Search for properties by city, location, or price.
        </Text>
      </View>
    </SafeAreaView>
  );
}