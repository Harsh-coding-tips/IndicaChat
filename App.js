/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *

 */

import React, { useEffect } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	TouchableOpacity
} from 'react-native';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
{
	/* <GoogleSigninButton
	style={{ width: 192, height: 48 }}
	size={GoogleSigninButton.Size.Wide}
	color={GoogleSigninButton.Color.Dark}
	onPress={this._signIn}
	disabled={this.state.isSigninInProgress}
/>; */
}

// import * as firebaseobj from 'firebase';
// import { firebaseConfig } from './config';
import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

// if (!firebaseobj.apps.length) {
// 	firebaseobj.initializeApp(firebaseConfig);
// }

const App = () => {
	// useEffect(() => {
	// 	const myusers = firebaseobj.database().ref('users');
	// 	myusers.on('value', (datasnap) => {
	// 		console.log(datasnap.val());
	// 	});
	// });

	useEffect(() => {
		GoogleSignin.configure();
	}, []);

	const signIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			this.setState({ userInfo });
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (e.g. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
			} else {
				// some other error happened
			}
		}
	};

	return (
		<View style={{ height: '100%', width: '99%', alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ marginBottom: 10, fontSize: 22, fontWeight: 'bold' }}>Welcome to Indica Chat</Text>
			<TouchableOpacity
				style={{
					width: '90%',
					height: 50,
					borderRadius: 5,
					backgroundColor: '#4285f4',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				onPress={signIn}
			>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN WITH GOOGLE</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					width: '90%',
					height: 50,
					borderRadius: 5,
					backgroundColor: 'blue',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 10
				}}
			>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN WITH FACEBOOK</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600'
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400'
	},
	highlight: {
		fontWeight: '700'
	}
});

export default App;
