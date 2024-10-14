import { useEffect, useState } from "react";
import { View, Text } from "react-native"; // Correct import
import Login from './../components/Login';
import { auth } from './../configs/FirebaseConfig'; // Keep your Firebase config here
import { User } from "firebase/auth"; // Import User from firebase/auth
import { Redirect } from "expo-router";

export default function Index() {
  const [user, setUser] = useState<User | null>(null); // Set the correct state type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // This will be User or null
      setLoading(false); // Stop loading after checking auth state
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  if (loading) {
    // Show a loading indicator while checking auth
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text> {/* Correct Text usage from react-native */}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={'/mytrip'} /> : <Login />}
    </View>
  );
}
