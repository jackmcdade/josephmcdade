<template>
    <div class="player-container">

        <div class="player-track" v-for="(track, index) in tracks" @click="play(index)" :class="{active: isCurrentTrack(index)}">
            <div class="player-track-title" v-text="track.title"></div>
            <div class="player-track-length">{{ track.length }}</div>
        </div>
        <vue-plyr
            @player="initPlayer"
            :options="options">
            <audio>
                <source :src="currentTrack.url" type="audio/mp3">
            </audio>
        </vue-plyr>
    </div>
</template>

<script>
import 'vue-plyr'

export default {
    props: ['tracks'],

    data: () => ({
        currentTrackIndex: 0,
        player: {},
        options: {controls: ['play', 'progress', 'current-time', 'mute', 'volume']}
    }),

    computed: {
        currentTrack() {
            return this.tracks[this.currentTrackIndex];
        }
    },
    methods: {
        play(index) {
            this.currentTrackIndex = index;
            this.player.source = {
                type: 'audio', sources: [{src: this.currentTrack.url, type: 'audio/mp3'}]
            }
            this.player.play()
        },

        initPlayer(player) {
            this.player = player
        },

        isCurrentTrack(index) {
            return index === this.currentTrackIndex;
        }
    }
}
</script>
