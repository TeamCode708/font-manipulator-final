//variables for resizing the font
var diff = 0;
var leftWristX = 0;
var rightWristX = 0;
//video and poseNet model setup
function setup() {
    //video
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.position(150, 180);
    //poseNet model
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}
//function to make sure that the model is initialized
function modelLoaded() {
    console.log("poseNet is initialized!");
}
//function to get the output
function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diff = floor(leftWristX - rightWristX);
        console.log("left wrist x - " + leftWristX);
        console.log("right wrist x - " + rightWristX);
        console.log("difference - " + diff);
        document.getElementById("text-box").style.fontSize = diff;
        document.getElementById("font-size").innerHTML = "Current font size of the text is = " + diff + "px";
    }
}
