import { Image, StyleSheet, type ImageSourcePropType } from "react-native";

type Props = {
  imageSourse: ImageSourcePropType;
};

export default function ImageViewer({ imageSourse }: Props) {
  return <Image source={imageSourse} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
