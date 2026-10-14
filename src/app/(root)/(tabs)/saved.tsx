import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavedScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Saved Properties
      </Text>

      <Text style={{ fontSize: 16, color: "#666666" }}>
        Your favorite properties will appear here.
      </Text>
    </SafeAreaView>
  );
}