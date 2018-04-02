import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

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
    render() {
        return (
            <View style={styles.container}>
                { this.state.users.map(u => <Text key={u._id}>{u.name}</Text>) }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEEF6'
    }
});
