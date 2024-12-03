import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";

export function CardTodo({ todo }) {
  return (
    <TouchableOpacity>
      <Text>{todo.title}</Text>
      <Image></Image>
    </TouchableOpacity>
  );
}
