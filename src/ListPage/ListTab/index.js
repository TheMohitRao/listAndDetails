import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ListTab = ({ post, onPostCliked, showClick = true }) => {
  console.log(`LIST TAB DETAILS ::: =>>>>>`, JSON.stringify(post), `\n\n\n`);
  return (
    <TouchableOpacity
      style={styles.containerTabStyle}
      onPress={() => {
        if (showClick) onPostCliked?.(post);
      }}
    >
      <Text style={styles.idStyle}>{post?.id}</Text>
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.titleStyle}>{post?.title}</Text>
        </View>
        <View style={styles.lineSpacing} />
        <View style={styles.textWrapper}>
          <Text style={styles.descStyle}>{post?.body}</Text>
        </View>
        <View
          style={[
            styles.textWrapper,
            {
              justifyContent: "flex-end",
              paddingEnd: 15,
            },
          ]}
        >
          {showClick ? (
            <Text style={styles.viewmoreStyle}>{`View more -->`}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ListTab);

const styles = StyleSheet.create({
  containerTabStyle: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
    borderRadius: 6,
    minHeight: 50,
    marginVertical: 7,
  },
  idStyle: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    minHeight: 50,
    padding: 10,
    minWidth: 50,
    flexDirection: "row",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#e3e3e3",
  },
  textContainer: { flexDirection: "column", padding: 10 },
  textWrapper: { width: "95%", padding: 10, flexDirection: "row" },
  titleStyle: { fontSize: 16, color: "#000", flexWrap: "wrap" },
  descStyle: { fontSize: 13, color: "#000", flexWrap: "wrap" },
  viewmoreStyle: {
    fontSize: 12,
    color: "#000",
    flexWrap: "wrap",
  },
  lineSpacing: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: "#e3e3e3",
    paddingTop: 1,
  },
});
