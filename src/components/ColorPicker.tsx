import { Box, SimpleGrid} from '@chakra-ui/react';

interface ColorPickerProps {
  activeColor: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ activeColor, onColorChange }) => {
  const colors = [
    'var(--cyber-blue)',
    'var(--neon-pink)',
    'var(--cyber-green)',
    'var(--quantum-purple)',
    'var(--pixel-orange)',
    '#FFFFFF',
    '#000000',
    'var(--tech-gray)',
  ];

  return (
    <SimpleGrid columns={4} spacing={3} width="fit-content">
      {colors.map((color) => (
        <Box
          key={color}
          width="32px"
          height="32px"
          backgroundColor={color}
          border="2px solid"
          borderColor={activeColor === color ? 'var(--cyber-blue)' : 'var(--tech-gray)'}
          borderRadius="md"
          cursor="pointer"
          onClick={() => onColorChange(color)}
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: `0 0 15px ${color}`,
          }}
          transition="all 0.3s ease"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: `linear-gradient(45deg, transparent 40%, ${color}, transparent 60%)`,
            opacity: activeColor === color ? 1 : 0,
            animation: activeColor === color ? 'neon-border 1.5s linear infinite' : 'none',
            borderRadius: 'inherit',
            zIndex: -1,
          }}
        />
      ))}
    </SimpleGrid>
  );
};

export default ColorPicker;