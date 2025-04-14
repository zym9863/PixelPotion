import { HStack, IconButton, Tooltip } from '@chakra-ui/react';
import { FaPaintBrush, FaEraser } from 'react-icons/fa';

interface ToolbarProps {
  activeTool: 'brush' | 'eraser';
  onToolChange: (tool: 'brush' | 'eraser') => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ activeTool, onToolChange }) => {
  return (
    <HStack spacing={3} p={3} bg="rgba(10, 10, 20, 0.8)" borderRadius="lg" boxShadow="0 0 15px rgba(0, 0, 0, 0.3)">
      <Tooltip label="笔刷工具" placement="top">
        <IconButton
          aria-label="笔刷工具"
          icon={<FaPaintBrush />}
          bg={activeTool === 'brush' ? 'var(--cyber-blue)' : 'rgba(255, 255, 255, 0.1)'}
          color={activeTool === 'brush' ? 'white' : 'var(--cyber-blue)'}
          _hover={{
            bg: 'var(--cyber-blue)',
            color: 'white',
            transform: 'scale(1.1)',
            boxShadow: '0 0 15px var(--cyber-blue)'
          }}
          transition="all 0.3s ease"
          onClick={() => onToolChange('brush')}
        />
      </Tooltip>
      <Tooltip label="橡皮擦工具" placement="top">
        <IconButton
          aria-label="橡皮擦工具"
          icon={<FaEraser />}
          bg={activeTool === 'eraser' ? 'var(--neon-pink)' : 'rgba(255, 255, 255, 0.1)'}
          color={activeTool === 'eraser' ? 'white' : 'var(--neon-pink)'}
          _hover={{
            bg: 'var(--neon-pink)',
            color: 'white',
            transform: 'scale(1.1)',
            boxShadow: '0 0 15px var(--neon-pink)'
          }}
          transition="all 0.3s ease"
          onClick={() => onToolChange('eraser')}
        />
      </Tooltip>
    </HStack>
  );
};

export default Toolbar;