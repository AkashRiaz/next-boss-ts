// //  oop - abstraction

// /*
// 1.Interface
// 2.abstract class
// */

// interface MediaPlayer{
//     play(): void;
//     pause():void;
//     stop():void;
// }

// class MusicPlayer implements MediaPlayer{
//     play(): void {
//         console.log(`Playing music.....`)
//     }

//     pause(): void {
//         console.log(`Music paused.....`)
//     }

//     stop(): void {
//         console.log(`Music is stopped.....`)
//     }
// }

// const akashPlayer = new MusicPlayer();

// akashPlayer.play()

abstract class MediaPlayer{
   abstract play():void;
   abstract pause(): void;
   abstract stop():void
}


class AkashPlayer extends MediaPlayer{
    play(){
        console.log(`Playing music......`)
    }

    pause(): void {
        console.log(`Music paused.......`)
    }

    stop(): void {
        console.log(`Music is stopped......`)
    }
}