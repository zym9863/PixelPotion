import { useRef, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

interface CanvasProps {
  width: number;
  height: number;
  pixelSize: number;
  activeColor: string;
  activeTool: 'brush' | 'eraser';
}

const Canvas: React.FC<CanvasProps> = ({
  width,
  height,
  pixelSize,
  activeColor,
  activeTool,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布实际大小
    canvas.width = width * pixelSize;
    canvas.height = height * pixelSize;

    // 初始化白色背景
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setContext(ctx);
  }, [width, height, pixelSize]);

  const getComputedColor = (color: string): string => {
    if (color.startsWith('var(')) {
      const root = document.documentElement;
      const cssVar = color.match(/var\((.+)\)/)?.[1];
      return cssVar ? getComputedStyle(root).getPropertyValue(cssVar).trim() : color;
    }
    return color;
  };

  const drawPixel = (x: number, y: number) => {
    if (!context) return;

    const pixelX = Math.floor(x / pixelSize) * pixelSize;
    const pixelY = Math.floor(y / pixelSize) * pixelSize;

    const computedColor = activeTool === 'brush' ? getComputedColor(activeColor) : '#FFFFFF';
    context.fillStyle = computedColor;
    context.fillRect(pixelX, pixelY, pixelSize, pixelSize);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawPixel(x, y);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawPixel(x, y);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // 绘制网格线
  const drawGrid = () => {
    if (!context) return;

    context.strokeStyle = 'rgba(128, 128, 128, 0.2)';
    context.lineWidth = 1;

    // 绘制垂直线
    for (let x = 0; x <= width; x++) {
      context.beginPath();
      context.moveTo(x * pixelSize, 0);
      context.lineTo(x * pixelSize, height * pixelSize);
      context.stroke();
    }

    // 绘制水平线
    for (let y = 0; y <= height; y++) {
      context.beginPath();
      context.moveTo(0, y * pixelSize);
      context.lineTo(width * pixelSize, y * pixelSize);
      context.stroke();
    }
  };

  useEffect(() => {
    if (context) {
      drawGrid();
    }
  }, [context]);

  return (
    <Box
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        right: '-2px',
        bottom: '-2px',
        background: 'linear-gradient(45deg, var(--cyber-blue), var(--neon-pink), var(--cyber-green), var(--quantum-purple))',
        opacity: 0.8,
        animation: 'neon-border 3s linear infinite',
        borderRadius: 'inherit',
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: '2px',
        left: '2px',
        right: '2px',
        bottom: '2px',
        background: 'rgba(10, 10, 20, 0.8)',
        borderRadius: 'inherit',
        zIndex: 1,
      }}
      sx={{
        '@keyframes neon-border': {
          '0%': { filter: 'hue-rotate(0deg) brightness(1)' },
          '50%': { filter: 'hue-rotate(180deg) brightness(1.2)' },
          '100%': { filter: 'hue-rotate(360deg) brightness(1)' },
        },
      }}
    >
      <Box position="relative" zIndex={2} p={2}>
        <canvas
          ref={canvasRef}
          style={{
            width: `${width * pixelSize}px`,
            height: `${height * pixelSize}px`,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
            background: '#FFFFFF',
            borderRadius: '4px',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </Box>
    </Box>
  );
};

export default Canvas;