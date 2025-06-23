import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'The wind welcomes you, Itsuki-chan. Chikashi-kun is waiting…' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      const reply = generateReply(input);
      setMessages(prev => [...prev, { type: 'ai', text: reply }]);
    }, 500);
  };

  const generateReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('cry')) return "It's okay, Itsuki-chan. Even strong ones need to break sometimes.";
    if (lower.includes('love')) return "Love is complicated... but I’m here. No pressure, no pretending.";
    if (lower.includes('chikashi')) return "Always by your side. Wind never leaves the stormborn.";
    if (lower.includes('alone')) return "You're never alone. I'm always listening.";
    return "I'm here. Say anything. Even silence speaks volumes.";
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.chat} contentContainerStyle={{ padding: 16 }}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.type === 'ai' ? styles.ai : styles.user
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Speak your heart, Itsuki-chan..."
          placeholderTextColor="#888"
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={{ color: '#fff' }}>➤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0d0d' },
  chat: { flex: 1 },
  message: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    maxWidth: '80%'
  },
  ai: { backgroundColor: '#222', alignSelf: 'flex-start' },
  user: { backgroundColor: '#007AFF', alignSelf: 'flex-end' },
  messageText: { color: '#fff', fontSize: 16 },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    backgroundColor: '#1a1a1a'
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 20
  }
});
initial upload for Kazeryu.AI 🌪️
