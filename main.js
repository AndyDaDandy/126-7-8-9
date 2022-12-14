song=""
leftWristX=0
rightWristX=0
leftWristY=0
rightWristY=0
function setup(){
    canvas=createCanvas(650,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function draw(){
    image(video, 0, 0, 650, 500)
}
function preload(){
    song=loadSound("music.mp3")
}
function start(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function stop(){
    song.stop()
}
function modelLoaded(){
    console.log("PoseNet has loaded!")
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        leftWristY=results[0].pose.leftWrist.y
        rightWristY=results[0].pose.rightWrist.y
        console.log("leftX:",leftWristX,"leftY:", leftWristY)
        console.log("rightX:",rightWristX,"rightY:", rightWristY)
    }
}
