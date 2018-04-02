import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

export class ListWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { _id: 'a', name: 'Teo', email: 'teo@gmail.com', avatar: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/a/5a04638d243f979ff8df0df40d8f7256_1515217779.jpg' },
                { _id: 'b', name: 'Ti', email: 'ti@gmail.com', avatar: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/0/c0158a5d0afdbb8b3d177162b9328a7c_1452770729.jpg' },
                { _id: 'c', name: 'Tun', email: 'tun@gmail.com', avatar: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/8/4/84fa37746a6cbcc7b1b18b3714ae6a67_1503633402.jpg' },
                { _id: 'd', name: 'Tuan', email: 'tuan@gmail.com', avatar: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/4/4/44c22d69a695677cb1a0aec5e20d9237_1516949077.jpg' },
            ]
        };
    }

    renderItem({ item }) {
        return (
            <View style={styles.userContainer}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={{ justifyContent: 'space-around' }}>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Show Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEEF6'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20
    },
    userContainer: {
        flexDirection: 'row',
        padding: 10,
        borderColor: '#AA9AC0',
        borderWidth: 0.5,
        margin: 10,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#7A609C',
        alignItems: 'center',
        padding: 7,
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
