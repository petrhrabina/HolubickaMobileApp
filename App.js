import React, { useState, useEffect } from 'react';
import {
    View,
    Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SideMenu from 'react-native-side-menu';

import HomePage from './HomePage';
import PeoplePage from './PeoplePage';
import Menu from './Menu';
import styles from './styles';

const App = () => {
    const [people, setPeople] = useState([]);
    const [selectedPage, setSelectedPage] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const storedPeople = await AsyncStorage.getItem('people');
                if (storedPeople !== null) {
                    setPeople(JSON.parse(storedPeople));
                }
            } catch (error) {
                console.error('Error loading people data:', error);
            }
        };

        loadData();
    }, []);

    useEffect(() => {
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('people', JSON.stringify(people));
            } catch (error) {
                console.error('Error saving people data:', error);
            }
        };

        storeData();
    }, [people]);

    const menu = (
        <Menu setSelectedPage={setSelectedPage} />
    );

    return (
        <SideMenu
            menu={menu}
            isOpen={menuOpen}
            onChange={setMenuOpen}
            menuPosition="right"
            animationFunction={(prop, value) =>
                Animated.spring(prop, {
                    toValue: value,
                    useNativeDriver: false,
                })
            }
        >
            <View style={styles.container}>
                {selectedPage === 'Home' && <HomePage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                {selectedPage === 'People' && (
                    <PeoplePage
                        people={people}
                        setPeople={setPeople}
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                    />
                )}
            </View>
        </SideMenu>
    );
};

export default App;
