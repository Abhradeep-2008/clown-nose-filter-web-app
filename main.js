var noseX = 0;
var noseY = 0;


function preload(){
 clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300);
    //fill("#FF0000");
    //stroke("#FF0000");
    //circle(noseX, noseY, 30);
    image(clown_nose, noseX - 15, noseY - 10, 30, 30);

}

function take_snapshot(){
   save("clown-nose-testing.jpeg");
}

function modelLoaded(){
    console.log("PoseNet is intialized");

}

function gotPoses(results){ 
    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+ noseX );
        console.log("nose y = "+ noseY);
    }
}

