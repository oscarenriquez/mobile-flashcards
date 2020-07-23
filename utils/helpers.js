import React from 'react'
import { AsyncStorage } from 'react-native'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'mobileFlashCardsNT_OJET:notifications'

function createNotification () {
    return {
        title: 'Start to learn!',
        body: "👋 don't forget to use your flashcards for today and keep you learning!",
        sound: true,
        priority: 'high',
        vibrate: [0, 250, 250, 250]
    }
}

export const registerForPushNotificationsAsync = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.getAsync(Permissions.NOTIFICATIONS)
                    .then(async ({ status }) => {
                        if (status === 'granted') {
                            await Notifications.cancelAllScheduledNotificationsAsync()

                            if (Platform.OS === 'android') {
                                await Notifications.setNotificationChannelAsync('default', {
                                    name: 'default',
                                    importance: Notifications.AndroidImportance.MAX,
                                    vibrationPattern: [0, 250, 250, 250],
                                    lightColor: '#FF231F7C',
                                    enableLights: true,
                                    enableVibrate: true
                                });
                            }

                            await Notifications.scheduleNotificationAsync({
                                content: createNotification(),
                                trigger: {
                                    hour: 8,
                                    minute: 0,
                                    repeat: true,
                                }
                            })
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true), () => {})
                        }
                    })
            }
        })
}