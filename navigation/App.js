import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TollywoodScreen from './TollywoodScreen';
import BollywoodScreen from './BollywoodScreen';
import SavedVideos from './SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
            </TouchableOpacity>
        </View>
    );
};

const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    switch (routeName) {
        case 'TollywoodScreen':
            return 'Tollywood';
        case 'BollywoodScreen':
            return 'Bollywood';
        case 'BottomTabStack':
            return 'Home';
    }
};

const BottomTabStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="TollywoodScreen">
            <Tab.Screen name="TollywoodScreen" component={TollywoodScreen}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="BollywoodScreen"
                component={BollywoodScreen}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
};

const Tollywood = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="TollywoodScreen">
            <Stack.Screen
                name="Bollywood"
                component={BottomTabStack}
                options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                    headerShown:false,
                    headerLeft: () => (
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
            />
        </Stack.Navigator>
    );
};

const Videos = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SavedVideos"
                component={SavedVideos}
                options={{
                    title: 'videos',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}>
                <Drawer.Screen
                    name="Welcome"
                    options={{ drawerLabel: 'Welcome' }}
                    component={Tollywood}
                />
                <Drawer.Screen
                    name="Favourite Videos"
                    options={{ drawerLabel: 'Favourite videos' }}
                    component={Videos}
                />
                 <Drawer.Screen
                    name="Liked Videos"
                    options={{ drawerLabel: 'Liked Videos' }}
                    component={Videos}
                />
                 <Drawer.Screen
                    name="Saved Videos"
                    options={{ drawerLabel: 'Saved Videos' }}
                    component={Videos}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
