 const Phaser = require('phaser');

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20; // radius used for collision detection

    // movement
    this.moveSpeed = 100;
    this.forwardRot = 0;
    this.rotSpeed = 1;
    this.isActive = false;

    // Geometry used for rendering
    this.baseGeo = [
      new Phaser.Geom.Point(-12, 0),
      new Phaser.Geom.Point(0, 24),
      new Phaser.Geom.Point(12, 0),
      new Phaser.Geom.Point(12, 24),
      new Phaser.Geom.Point(0, -12),
      new Phaser.Geom.Point(-12, 24),
      new Phaser.Geom.Point(-12, 0),
    ];
  }
  activate(x, y) {
    this.x = x;
    this.y = y;
    // this.forward = forward;
    this.isActive = true;
    // this.activeTime = 2000;
  }

  deactivate() {
    this.isActive = false;
  }

//   setX(newX) {
//     this.x = newX;
//   }
//   setY(newY) {
//     this.y = newY;
//   }

  update(deltaTime) {
    if (this.isActive) {
    //     const forwardX = -Math.sin(this.forward);
    //   const forwardY = Math.cos(this.forward);
    //   this.x += this.moveSpeed * forwardX * deltaTime / 1000;
    //   this.y += this.moveSpeed * forwardY * deltaTime / 1000;

    //   // Deactivate bullet when it's been alive for too long 
    //   this.activeTime -= deltaTime;
    //   if (this.activeTime < 0) {
    //     this.deactivate();
    //   }
    }
  }

  draw(graphics) {
    // render player base
    if (this.isActive) {
      graphics.save();
      graphics.translate(this.x, this.y);
      graphics.rotate(this.forwardRot);
      graphics.lineStyle(5,0xFF0000,1.0);
      graphics.strokePoints(this.baseGeo);

      // render cannon
      //  graphics.fillCircle(0, 0, 5);
      //  graphics.fillCircle(24, -20, 5);
      //  graphics.fillRect(17, -18, 4, 2);
      // graphics.fillRect(5, 0, 10, 25);
      graphics.restore();
    }
  }
}

module.exports = Enemy;
