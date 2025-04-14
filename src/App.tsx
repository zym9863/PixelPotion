import { useState } from 'react';
import { ChakraProvider, VStack, Container, Heading, Box } from '@chakra-ui/react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import Toolbar from './components/Toolbar';

function App() {
  const [activeColor, setActiveColor] = useState('#000000');
  const [activeTool, setActiveTool] = useState<'brush' | 'eraser'>('brush');

  return (
    <ChakraProvider>
      <Box
        minH="100vh"
        bgGradient="linear(45deg, var(--space-black), var(--tech-gray))"
        py={8}
      >
        <Container maxW="container.lg">
          <VStack spacing={8} align="center">
            <Heading
              size="lg"
              className="glitch"
              color="var(--cyber-blue)"
              textShadow="0 0 10px var(--cyber-blue), 0 0 20px var(--cyber-blue)"
              fontFamily="'Press Start 2P', cursive"
              mb={6}
              animation="glitch 2s infinite"
            >
              PixelPotion - 动态像素艺术生成器
            </Heading>
            
            <Box
              p={4}
              bg="rgba(10, 10, 20, 0.8)"
              borderRadius="lg"
              borderWidth="2px"
              borderColor="var(--cyber-blue)"
              boxShadow="0 0 20px var(--cyber-blue)"
            >
              <VStack spacing={6}>
                <Toolbar
                  activeTool={activeTool}
                  onToolChange={setActiveTool}
                />
                
                <ColorPicker
                  activeColor={activeColor}
                  onColorChange={setActiveColor}
                />
                
                <Canvas
                  width={32}
                  height={32}
                  pixelSize={16}
                  activeColor={activeColor}
                  activeTool={activeTool}
                />
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
