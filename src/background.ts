
const createNewTab = async () => {
    await chrome.tabs.create(
        {
            active: true,
            index: 0,
            url: "www.google.com"
        }
    )
}

const queryAllTabs = async () => {
    var tabs = await chrome.tabs.query({});

    tabs.forEach(t => console.info(t.title));
}

const startRecording = () => {
    var recordBlobs = [];

    const mimeType = 'video/mp4;codecs=h264,aac';
    const options = { mimeType };

    // chrome.tabCapture.capture()
    // try {
    //     mediaRecorder = new MediaRecorder()

    // } catch (e) {

    // }
}

// createNewTab();
queryAllTabs();