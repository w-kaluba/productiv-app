import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const DataNavStack = createStackNavigator();

export default class DataStack extends React.Component {
  render() {
    return (
      // TODO: Develop screens for viewing summary data and time series data.
      <DataNavStack.Navigator initialRouteName={"Dashboard"}>
        <DataNavStack.Screen name={"Dashboard"} component={DashboardScreen} />
        <DataNavStack.Screen name={"LineChart"} component={LineChartScreen} />
      </DataNavStack.Navigator>
    );
  }
}
