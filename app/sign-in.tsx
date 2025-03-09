import {View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const SignIn = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = () => {
        console.log('Email: ', email);
        console.log('Password: ', password);
    };

    return (
        <SafeAreaView className="bg-white flex-1">
            <ScrollView contentContainerClassName="flex-grow justify-center px-4">
                <View className="space-y-6">
                    {/* Header */}
                    <Text className="text-3xl font-bold text-center text-gray-800">Welcome Back</Text>
                    <Text className="text-center text-gray-500">Sign in to your account</Text>

                    {/* Email Input */}
                    <View className="space-y-2">
                        <Text className="text-sm font-medium text-gray-700">Email</Text>
                        <TextInput
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password Input */}
                    <View className="space-y-2">
                        <Text className="text-sm font-medium text-gray-700">Password</Text>
                        <TextInput
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        className="w-full bg-blue-500 p-3 rounded-lg"
                        onPress={handleSubmit}
                    >
                        <Text className="text-white text-center font-semibold">Sign In</Text>
                    </TouchableOpacity>

                    {/* Forgot Password Link */}
                    <TouchableOpacity>
                        <Text className="text-center text-blue-500">Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
