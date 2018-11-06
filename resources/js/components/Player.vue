<template>
    <div class="player-container">
        <div class="player-track" v-for="(track, index) in tracks" :class="{active: isCurrentTrack(index)}">
            <div class="player-track-title" v-text="track.title" @click="play(index)"></div>
            <div class="player-track-genre" v-text="track.genre"></div>
            <a :href="'/music/batch-'+ track.batch +'/'+ slugify(track.title)" v-if="link" class="pl-3 flex items-center opacity-50 hover:opacity-100">
                <img src="/assets/img/hyperlink.svg" alt="Link" height="24" width="24">
            </a>
            <a :href="track.url" download v-if="download" class="pl-3 flex items-center opacity-50 hover:opacity-100">
                <img src="/assets/img/audio-file-download.svg" alt="Download" height="24" width="24">
            </a>
            <div class="player-track-length" v-text="track.length"></div>
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
    props: {
        tracks: Array,
        download: {
            type: Boolean,
            default: false
        },
        link: {
            type: Boolean,
            default: false
        },
    },

    data: () => ({
        currentTrackIndex: 0,
        player: {},
        options: {'controls': ['play', 'progress', 'current-time', 'mute', 'volume'], 'volume': .75}
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
        },
        slugify(text) {
            return text.toString().toLowerCase()
               .replace(/\s+/g, '-')
               .replace(/[^\w\-]+/g, '')
               .replace(/\-\-+/g, '-')
               .replace(/^-+/, '')
               .replace(/-+$/, '');
        }
    }
}
</script>
