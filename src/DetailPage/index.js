import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";

import ListTab from "../ListPage/ListTab";

export default function DetailPage({ route }) {
  const { post } = route?.params ?? {};
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post?.id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [post]);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.containerTabStyle}>
          <ListTab post={response} showClick={false} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerTabStyle: {
    margin: 10,
    flexDirection: "row",
  },
});
