import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample messages
  const chatMessages = [
    { sender: "Human", text: "What is AI?" },
    { sender: "AI", text: "AI stands for Artificial Intelligence." },
    { sender: "Human", text: "How can AI help businesses?" },
    { sender: "AI", text: "AI can enhance decision-making and automate tasks." },
    { sender: "Human", text: "What industries use AI?" },
    { sender: "AI", text: "Healthcare, finance, retail, and many more." },
  ];

  const typingDelay = 100; // delay for typing animation (ms)
  const aiReplyDelay = 2000; // delay for AI reply after typing animation

  useEffect(() => {
    const simulateHumanTyping = async () => {
      // Simulate typing effect for the human
      const humanMessage = chatMessages[currentIndex];
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: humanMessage.sender, text: "" },
      ]);
      for (let i = 0; i < humanMessage.text.length; i++) {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text = humanMessage.text.slice(
            0,
            i + 1
          );
          return updatedMessages;
        });
        await new Promise((resolve) => setTimeout(resolve, typingDelay));
      }
      setTimeout(() => {
        // After the human message finishes, AI starts typing
        simulateAITyping();
      }, typingDelay);
    };

    const simulateAITyping = async () => {
      setIsTyping(true);
      const aiMessage = chatMessages[currentIndex + 1];
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: aiMessage.sender, text: "" },
      ]);

      for (let i = 0; i < aiMessage.text.length; i++) {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text = aiMessage.text.slice(
            0,
            i + 1
          );
          return updatedMessages;
        });
        await new Promise((resolve) => setTimeout(resolve, typingDelay));
      }
      setIsTyping(false);

      setTimeout(() => {
        // After AI reply finishes, loop back to the beginning
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 2) % chatMessages.length;
          if (nextIndex === 0) {
            // Clear the messages and restart when we reach the beginning
            setMessages([]);
          }
          return nextIndex;
        });
      }, aiReplyDelay);
    };

    if (currentIndex < chatMessages.length) {
      simulateHumanTyping();
    }
  }, [currentIndex]);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} className="w-full h-[500px]">
      <Html center>
        <div className="relative w-full max-w-md">
          <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg p-4 h-[350px] w-[400px]">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-2 rounded-md mb-2 ${
                  msg.sender === "AI"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </motion.div>
            ))}
            {isTyping && (
              <div className="text-gray-500 mt-4">
                <span className="animate-pulse">AI is typing...</span>
              </div>
            )}
          </div>
        </div>
      </Html>

      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default ChatBox;
