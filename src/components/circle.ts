export class Circle {
  x: number;
  y: number;
  r: number;
  color?: string;

  constructor(x: number, y: number, r: number, color?: string) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    c.fillStyle = this.color || 'White';
    c.fill();
    c.closePath();
  }

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }

  randomColor(colorPallete: string[]) {
    this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
  }
};
