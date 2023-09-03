import { canvas, ctx, config } from './canvas';
import { Circle } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
const centerPoint = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

const circle = new Circle(centerPoint.x, centerPoint.y, 30, 'Yellow');
circle.draw(ctx); 
