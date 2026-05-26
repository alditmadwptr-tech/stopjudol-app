import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function App() {
  const [streak, setStreak] = useState(1);
  const [savedMoney, setSavedMoney] = useState(50000);

  const reasons = [
    'Biar uang ga habis sia-sia',
    'Fokus hidup lebih tenang',
    'Ga stres karena kalah judi',
    'Bisa nabung buat masa depan',
  ];

  const emergency = [
    'Tutup aplikasi judol',
    'Tarik napas & minum air',
    'Jalan 10 menit',
    'Hubungi teman / keluarga',
    'Ingat tujuan hidup kamu',
  ];

  const handleSuccess = () => {
    setStreak(streak + 1);
    setSavedMoney(savedMoney + 50000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#09090b' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 6,
          }}
        >
          Stop Judol by Aldi
        </Text>

        <Text style={{ color: '#a1a1aa', marginBottom: 20 }}>
          1 hari tanpa judol juga kemenangan.
        </Text>

        <View
          style={{
            backgroundColor: '#052e16',
            padding: 25,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#86efac', textAlign: 'center' }}>
            Streak Hari
          </Text>

          <Text
            style={{
              color: '#4ade80',
              fontSize: 72,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {streak}
          </Text>

          <Text style={{ color: '#d4d4d8', textAlign: 'center' }}>
            Hari tanpa judi online
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#18181b',
            padding: 20,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 12,
            }}
          >
            Uang yang terselamatkan
          </Text>

          <Text
            style={{
              color: '#22c55e',
              fontSize: 36,
              fontWeight: 'bold',
            }}
          >
            Rp {savedMoney.toLocaleString('id-ID')}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#18181b',
            padding: 20,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            Kenapa harus berhenti?
          </Text>

          {reasons.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#27272a',
                padding: 14,
                borderRadius: 14,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: '#f4f4f5' }}>{item}</Text>
            </View>
          ))}
        </View>

        <View
          style={{
            backgroundColor: '#3f0d0d',
            padding: 20,
            borderRadius: 24,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            Mode Darurat
          </Text>

          {emergency.map((step, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: '#ef4444',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  {index + 1}
                </Text>
              </View>

              <Text style={{ color: '#f4f4f5', flex: 1 }}>{step}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          onPress={handleSuccess}
          style={{
            backgroundColor: '#22c55e',
            padding: 18,
            borderRadius: 22,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            Hari Ini Aku Ga Main Judol
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
