import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to Notifications"
            />
        </View>
    )
}

function Notifications({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                onPress={() => navigation.openDrawer()} title="Open Drawer" />

            <Button
                onPress={() => navigation.closeDrawer()} title="Close Drawer" />
        </View>
    )
}

export default function AppDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}
                options={{
                    title: 'Home',
                    // drawerIcon: () => (
                    //     <Image
                    //         source={require("../user.png")}
                    //     />
                    // )
                }} />
            <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    )
}
