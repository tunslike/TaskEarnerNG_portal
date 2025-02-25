const TaskImages = (taskName) => {
    
    if(taskName == '')
        return;

    if(taskName.toLowerCase().indexOf('facebook') > -1) {

        return require('../assets/facebook_taskbg.png');

    }else if(taskName.toLowerCase().indexOf('twitter') > -1) {

        return require('../assets/twitter_taskbg.png');

    }else if(taskName.toLowerCase().indexOf('youtube') > -1) {

        return require('../assets/youtube_taskbg.png');

    }else if(taskName.toLowerCase().indexOf('youtube') > -1) {

        return require('../assets/youtube_taskbg.png');

    }else if(taskName.toLowerCase().indexOf('whatsapp') > -1) {

        return require('../assets/whatsapp_taskbg.png');
    }
}

const shortenTask = (string, length) => {

    if (string.length > length)
        return string.substring(0,length)+'...';
    else
        return string;
}

export default {
    TaskImages,
    shortenTask
}