import { View, Text } from "react-native";
import { useAuth } from "../../../hooks";
import { styles } from "./UserInfo.styles";

export function UserInfo() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido,</Text>
      <Text style={styles.name}>
        {user.usuario
          ? `${user.usuario}`
          : 'sin nombre'}
      </Text>
    </View>
  );
}