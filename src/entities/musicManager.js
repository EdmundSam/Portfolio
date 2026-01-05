export const musicManager = {
    current: null,

    play(music, volume = 0.15) {
        // Check if there's audio playing and reset timer
        if (this.current) {
            this.current.pause();
            this.current.currentTime = 0;
        }

        // Play new audio
        const audio = new Audio(music);
        audio.loop = true;
        audio.volume = volume;
        audio.play();

        this.current = audio;
    },

    // Stop music
    stop() {
        if (this.current) {
            this.current.pause();
            this.current.currentTime = 0;
            this.current = null;
        }
    },
};
