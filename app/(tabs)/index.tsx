import { Image, StyleSheet, View } from "react-native";

// Images
import placeHolderImage from "@/assets/images/background-image.png";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSourse={placeHolderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a Phote" />
        <Button label="Use this Photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
