export const musicManager = {
    current: null,

    play(src, volume = 0.25) {
        if (this.current) {
            this.current.pause();
            this.current.currentTime = 0;
        }

        const audio = new Audio(src);
        audio.loop = true;
        audio.volume = volume;
        audio.play();

        this.current = audio;
    },

    stop() {
        if (this.current) {
            this.current.pause();
            this.current.currentTime = 0;
            this.current = null;
        }
    },

    pause() {
        if (this.current) this.current.pause();
    }
};
