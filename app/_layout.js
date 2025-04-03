import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ 
                headerShown: false 
                }} />
            <Stack.Screen name="sobre" options={{ 
                headerShown: false 
                }} />
            <Stack.Screen name="extrato" options={{
                 headerShown: false 
                 }} />
            <Stack.Screen name="cartoes" options={{
                 headerShown: false 
                 }} />
            <Stack.Screen name="configuracoes" options={{
                 headerShown: false 
                 }} />
        </Stack>
    );
}
