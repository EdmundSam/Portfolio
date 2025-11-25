export function makePlayer(k)
{
    return k.make([
        k.pos(),
        k.sprite("player"),
        k.area(
            {
                shape: new k.Rect(k.vec2(0, 16), 24, 16),
            }
        ),
        k.body({ isStatic: false, grav: 0 }),
        k.anchor("center"),
        k.z(3), 
        "player",
        {
            speed: 150,
            setPosition(x, y)
            {
                this.pos.x = x;
                this.pos.y = y;
            },
            setControls() {
                this.controlHandlers = [];
                let currentDir = null;

                const setupControl = (key, anim, dx, dy, idleFrame) => {
                    this.controlHandlers.push(
                        k.onKeyPress(key, () => {
                            currentDir = key;
                            if (this.curAnim() !== anim) {
                                this.play(anim);
                            }
                        })
                    );

                    this.controlHandlers.push(
                        k.onKeyDown(key, () => {
                            if (currentDir === key) {
                                this.move(dx * this.speed, dy * this.speed);
                            }
                        })
                    );

                    this.controlHandlers.push(
                        k.onKeyRelease(key, () => {
                            if (currentDir === key) {
                                currentDir = null;
                                this.stop();
                                this.frame = idleFrame; // 👈 go to idle frame for that direction
                            }
                        })
                    );
                };

                // pass in the correct idle frame index for each direction
                setupControl("left",  "left",  -1,  0, 4);
                setupControl("right", "right",  1,  0, 8);
                setupControl("up",    "up",     0, -1, 12);
                setupControl("down",  "down",   0,  1, 0);
            }
                    },
    ])
}