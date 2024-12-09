let audio_list = [];

const ClearAudio = () => {
    if(audio_list.length > 0) {
        audio_list.forEach((a) => {
            a.pause();
        });
        audio_list = [];
    }
}

const PlayAudio = (filename) => {
    ClearAudio();
    let a = new Audio(filename);
    audio_list.push(a);
    a.play();
}