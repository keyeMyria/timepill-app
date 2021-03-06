import React, { Component } from 'react';
import {Text, View, TouchableNativeFeedback, Platform, DeviceEventEmitter} from "react-native";
import {colors} from "../Styles";
import FollowDiaryData from "../common/FollowDiaryData";
import DiaryList from "../components/DiaryList";
import navOption from "../components/NavOption";
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import Events from "../Events";
import TPTouchable from "../components/TPTouchable";

const HEADER_PADDING = Platform.OS === 'android' ? 20 : 40;

export default class FollowDiaryPage extends React.Component {

    static navigatorStyle = {
        navBarHidden: true,
    };

    componentWillMount() {
        this.loginListener = DeviceEventEmitter.addListener(Events.login, () => this.list.refresh());
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillUnmount() {
        this.loginListener.remove();
    }

    onNavigatorEvent(event) {
        // console.log(event);
        if (event.id === 'bottomTabReselected') {
            this.list.scrollToTop();
        }
    }

    render() {
        return (
            <View style={{backgroundColor: '#FFFFFF'}}>
                <DiaryList
                    ref={(r) => this.list = r}
                    dataSource={new FollowDiaryData()}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{
                                paddingTop: HEADER_PADDING,
                            }}>
                                <Text style={{paddingLeft: 20, color: colors.inactiveText, fontSize: 14, paddingBottom: 5}}
                                      allowFontScaling={false}> </Text>
                                <View style={{
                                    paddingLeft: 20,
                                    flexDirection: "row",
                                    flexGrow: 1,
                                    flexShrink: 1,
                                    alignItems:"center",}}>
                                    <Text allowFontScaling={false}
                                          style={{fontSize: 30, color: colors.text, flex: 1}}>关注</Text>
                                    <TPTouchable onPress={() => {
                                        this.props.navigator.push({
                                            screen: 'FollowUsers',
                                            title: '关注用户'
                                        });
                                    }}>
                                        <Ionicons name="ios-contacts"
                                                  size={30}
                                                  color={colors.primary}
                                                  style={{paddingHorizontal: 15}}/>
                                    </TPTouchable>
                                </View>
                            </View>
                        )
                    }}
                    navigator={this.props.navigator}
                />
            </View>
        )
    }
}