function preload(){

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hXT5c-1JX/model.json",modelLoaded)
  }
  
  function modelLoaded() {
      console.log('Model is Loaded!');
  }

  function draw(){
     image (video,0, 0, 300,300)
classifier.classify(video,got_result)
  }
  
  function got_result(error,results){

    if (error){

    console.log(error)
  }

  else{
      console.log(results);
      document.getElementById("result_name").innerHTML = results[0].label
      document.getElementById("result_accurancy").innerHTML = results[0].confidence.toFixed(3)

  }
  }


  function take_snap(){    
    save('photo.png');
  }