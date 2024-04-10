import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCallback, useEffect, useMemo, useState } from "react";

import ListTab from "./ListTab";
import { ROUTES } from "../navigation/routeNames";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function ListPage({ navigation }) {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();
  let [itemsObject, setItemsObject] = useState({});

  useFocusEffect(
    useCallback(() => {
      if (!response) {
        fetch("https://jsonplaceholder.typicode.com/posts")
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
      } else {
        setIsLoading(false);
      }
    }, [response])
  );

  const posts = useMemo(() => {
    if (response) return JSON.parse(JSON.stringify(response).replace("\n", ""));
    return [];
  }, [response]);

  const onPostCliked = useCallback((post) => {
    navigation.navigate(ROUTES.DETAIL_PAGE, { post });
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.contentContainer}>
          <Text>Poems</Text>
          <FlatList
            data={posts}
            showsVerticalScrollIndicator={false}
            renderItem={(post, index) => {
              return (
                <ListTab
                  key={index}
                  post={post?.item}
                  onPostCliked={onPostCliked}
                />
              );
            }}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    padding: 20,
  },
});
