import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const properties = [
  {
    id: "1",
    title: "Sea View Apartment",
    city: "Karachi",
    price: 8500000,
  },
  {
    id: "2",
    title: "Garden Villa",
    city: "Lahore",
    price: 25000000,
  },
  {
    id: "3",
    title: "City Studio",
    city: "Islamabad",
    price: 4200000,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          marginBottom: 6,
        }}
      >
        Find your place
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: "#666666",
          marginBottom: 16,
        }}
      >
        Discover properties across Pakistan
      </Text>

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#F3F4F6",
              padding: 18,
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              {item.title}
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: "#666666",
                marginBottom: 8,
              }}
            >
              {item.city}
            </Text>

            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#2563EB",
              }}
            >
              Rs. {item.price.toLocaleString("en-PK")}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}