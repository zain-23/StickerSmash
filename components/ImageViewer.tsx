import { Image, StyleSheet, type ImageSourcePropType } from "react-native";

type Props = {
  imageSourse: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imageSourse, selectedImage }: Props) {
  const imgSource = selectedImage ? { uri: selectedImage } : imageSourse;
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
