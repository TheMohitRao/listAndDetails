/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
// Core packages
import React, { createRef } from "react";

import DetailPage from "../DetailPage";
// On Board
import ListPage from "../ListPage";
import { ROUTES } from "./routeNames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const navigationRef = createRef();
export const getCurrentRouteName = () =>
  navigationRef?.current?.getCurrentRoute()?.name;

const Stack = createNativeStackNavigator();

const NAVIGATION_OPTIONS = {
  headerShown: false,
};

export default function Roots() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LIST_PAGE}
        component={ListPage}
        options={NAVIGATION_OPTIONS}
      />
      <Stack.Screen
        name={ROUTES.DETAIL_PAGE}
        component={DetailPage}
        options={NAVIGATION_OPTIONS}
      />
    </Stack.Navigator>
  );
}
