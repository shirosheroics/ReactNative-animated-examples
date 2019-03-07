import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  PanResponder,
  Animated,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import {
  Card,
  Button,
  Content,
  Text,
  CardItem,
  Body,
  Item,
  Input,
  Container,
  Icon,
  H1,
  Thumbnail,
  Spinner
} from "native-base";
import { LinearGradient } from "expo";

// Style
import styles, { colors } from "./styles";

class Home extends Component {
  state = {
    animation: new Animated.Value(100),
    open: false
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 600,
      duration: 350
    }).start(() => {
      this.setState({ open: true });
    });
  };
  closeAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 350
    }).start(() => {
      this.setState({ open: false });
    });
  };
  render() {
    const yInterpolate = this.state.animation.interpolate({
      inputRange: [100, 600],
      outputRange: [0, -130]
    });
    const animatedStyles = {
      height: this.state.animation,
      transform: [{ translateY: yInterpolate }]
    };

    return (
      <Container style={styles.container}>
        <LinearGradient
          colors={[colors.background1, colors.background2]}
          startPoint={{ x: 1, y: 0 }}
          endPoint={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
        <Image
          style={styles.image}
          source={require("../../assets/icon.png")}
          resizeMode="contain"
        />
        <Card padder style={styles.mainCard}>
          <Text style={styles.link}>Welcome {"\n"}</Text>
          <Text style={styles.text}>
            You’re one step away from
            {"\n"} Optimizing your digital Ads
          </Text>
          <Button style={[styles.button, { backgroundColor: "red" }]}>
            <Text> Logout </Text>
          </Button>
          <Button style={[styles.button]}>
            <Text> Create New Business </Text>
          </Button>

          <Button style={[styles.button]}>
            <Text> Check </Text>
          </Button>
        </Card>
        <TouchableWithoutFeedback
          onPress={() => {
            if (this.state.open === false) {
              this.startAnimation();
              console.log("start", this.state.open);
            } else {
              console.log("end", this.state.open);
              this.closeAnimation();
            }
          }}
        >
          <Animated.View style={[styles.bottomCard, animatedStyles]}>
            <Text style={{ color: "#000" }}> Dashboard </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}

export default Home;
