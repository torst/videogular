/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {VgPlayer} from 'com/2fdevs/videogular/components/vg-player/vg-player';
import {VgMedia} from 'com/2fdevs/videogular/components/vg-media/vg-media';
import {VgOverlayPlay} from 'com/2fdevs/videogular/plugins/vg-overlay-play/vg-overlay-play';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app.html',
    directives: [VgPlayer, VgMedia, VgOverlayPlay]
})
class MyAppComponent {
    sources:Array<Object>;

    constructor() {
        this.sources = [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];
    }

    onClickLayer() {
        console.log("click layer");
    }

    onPlayerReady(API) {
        console.log("player ready");
        console.log(API);
    }

    onMediaReady() {
        console.log("media ready");
    }
}

bootstrap(MyAppComponent);