// Load the experiment information
// Generte random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let curr_seq = getRandomInt(0,50);
console.log(curr_seq)

let subfile = {};
$.ajax({
        url: 'exp_seqs/' + curr_seq.toString() + '_32trials_3times.json',
        // url: 'exp_seqs/' + curr_seq.toString() + '_32trials.json',
        // url: 'exp_seqs/' +'48_5trials.json',
        async: false,
        dataType: 'json',
        success: function(data) {
            subfile = data;
        }
    });

console.log(subfile.prac_trial_info)

// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "EncodingTimeStudy",
    "description": "This study presents images in a RSVP study.",
    "repository": "",
    "contributors": "Qi Lin"
  },
  "parameters": {},
  "files": {},
  "messageHandlers": {},
  "responses": {},
  "content": [
// #### ##    ##  ######  ######## ########
//  ##  ###   ## ##    ##    ##    ##     ##
//  ##  ####  ## ##          ##    ##     ##
//  ##  ## ## ##  ######     ##    ########
//  ##  ##  ####       ##    ##    ##   ##
//  ##  ##   ### ##    ##    ##    ##    ##
// #### ##    ##  ######     ##    ##     ##
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Consent Form",
          "content": " To conduct this experiment, we need to include this information sheet. Please read it carefully. Click the continue button to accept the consent and go to the next screen. Otherwise, close the window to exit."
        },
        {
          "required": true,
          "type": "html",
          "content": " \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n \u003Cb\u003EStudy Title:\u003C\u002Fb\u003E Cognitive Mechanisms of Memory and Attention \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n                 \u003Cb\u003ELead Investigator (the person who is responsible for this research): \u003C\u002Fb\u003E  Sarah Cook \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\u003C\u002Fbr\u003E\n          \u003Cb\u003EResearch Study Summary, Risks, and Benefits:\u003C\u002Fb\u003E\n          \u003Cul\u003E\n\t\t\u003Cli\u003E We are asking you to join a research study.\u003C\u002Fli\u003E\n\t\t\u003Cli\u003EThe purpose of this research study is to investigate what factors influence attention and memory.\u003C\u002Fli\u003E\n\t\t\u003Cli\u003EStudy activities will include: looking at and making a response to visual stimuli presented on a computer screen \u003C\u002Fli\u003E\n\t\t\u003Cli\u003E Your involvement will require 10 to 30 minutes, depending on the study.\u003C\u002Fli\u003E\n\t\t\u003Cli\u003EThere is no known risk from participating in this study. Some participants in this study may experience boredom or fatigue from the computer-based task. \u003C\u002Fli\u003E\n\t\t\u003Cli\u003EThe study may have no benefits to you. We hope that our results will add to the knowledge about how people learn and maintain information in their memory.\n\t\tThe work has potential benefits for human factors safety engineering as well as neuropsychological rehabilitation.\u003C\u002Fli\u003E\n\t\t\u003Cli\u003ETaking part in this study is your choice. You can choose to take part, or you can choose not to take part in this study.\n\t\tYou also can change your mind at any time.  Whatever choice you make will not have any effect on your relationship with Yale University. \u003C\u002Fli\u003E\n\t\t\u003Cli\u003EIf you are interested in learning more about the study, please continue reading, or have someone read to you, the rest of this document.\n\t\tAsk the study staff questions about anything you do not understand. Once you understand the study, we will ask you if you wish to participate; if so, you will have to sign this form.\u003C\u002Fli\u003E\n\t\t\u003C\u002Ful\u003E\n\t\t\u003Cbr \u002F\u003E\n        \u003Cb\u003EWhy is this study being offered to me?\u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n        We are asking you to take part in a research study because you are a healthy adult with\n        normal perceptual ability, representative of the population that we are trying to understand and characterize.  \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EWhat is the study about? \u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n        The purpose of this study is to investigate how different aspects of the stimuli or observers influence learning and memory.\n          \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EWhat are you asking me to do and how long will it take? \u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n        If you agree to take part, your participation in this study will involve\n        looking at and making a response to visual stimuli presented on a computer screen \n        We think that the study will take 10-30 minutes of your time, depending on the study. This information is stated on the recruitment website for this study. .\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EAre there any risks from participating in this research? \u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n        We do not expect any risks from taking part in this study.\n         Some participants in this study may experience boredom or fatigue from the computer-based task.\n         Your ID number assigned by the recruitment platform (e.g., MTurk worker ID) could possibly be connected to your public profile,\n         which could, in theory, be searched, which can lead to risk of breach of confidentiality.\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n          \u003Cb\u003EHow can the study possibly benefit me or others? \u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n          You may not directly benefit from taking part in this study.\n           We hope that our results will add to the knowledge about how people learn and maintain information in their memory.\n           The work has potential benefits for human factors safety engineering as well as neuropsychological rehabilitation.\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EAre there any costs to participation?  \u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n        You will not have to pay for taking part in this study.\n        The only costs may include transportation and your time coming to the study visits.\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EWill I be paid for participation?   \u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n        You will get paid in appreciation (and a few Elm points) for participating in the study. If you withdraw from the study during the task,\n        you will be paid for the length of your participation. \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EHow will you keep my data safe and private? \u003C\u002Fb\u003E \u003Cbr \u002F\u003E\n        The survey is anonymous. We will not know your name.\n        We will not be able to connect any identifying information to your survey answers.\n        However, we will know your ID number assigned by the recruitment platform to pay you for your time.\n         This ID number (e.g., MTurk) could possibly be connected to your public profile, which could, in theory, be searched.\n         We want to stress that we will not be looking at anyone’s public profiles. We will keep the information about your participation\n         in this research confidential. When we publish the results of the research or talk about it in conferences it will be anonymous.\n         After publication, we might make data available at the Open Science Framework (http:\u002F\u002Fosf.io\u002F).\n         We will edit the participant IDs to only show the first several letters when releasing the raw data so that no one can link the data to your profile.\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EWhat if I want to refuse or end participation before the study is over? \u003C\u002Fb\u003E\u003Cbr \u002F\u003E\n        Participation in this study is completely voluntary.\n         You are free to decline to participate, to end participation at any time for any reason,\n         or to refuse to answer any individual question without penalty or loss of compensation.\n         Whatever choice you make will not have any effect on your relationship with Yale University.\n         If you refuse or end participation before the study is over, the data we collected will not\n         be analyzed or shared with anyone. \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\n        \u003Cb\u003EWho should I contact if I have questions? \u003C\u002Fb\u003E\u003Cbr \u002F\u003E\n         Please feel free to ask about anything you don't understand.\n\t\tIf you have questions later or if you have a research-related problem, you can reach out at sarah.cook@yale.edu\n\t\tIf you have questions about your rights as a research participant, or you have complaints about this research,\n\t\tyou call the Yale Institutional Review Boards at (203) 785-4688 or email hrpp@yale.edu.\n\t\tAdditional information is available at http:\u002F\u002Fyour.yale.edu\u002Fresearch-support\u002Fhuman-research\u002Fresearch-participants.",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "This study will last for about 20 minutes. This experiment consists of 12 blocks. Each block lasts for about 1 to 2 minutes. You will see a series of images presented back-to-back \u003Cb\u003Every rapidly\u003C\u002Fb\u003E. After the images being presented, we will show you a test image. (See below for a schematic representation of the sequence of events.) We will also ask you questions about what you have seen. Please click continue to go to the next page of the instructions.\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E \n           ",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"demo.png\"] }",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "demo.png": "embedded\u002F4ceceb531d591fd14ce6eb76d1b373ab8a6414ebeb79f7b4a767e4dc4ea0a11c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instructions_1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": " Your task is to indicate whether this test image was presented in the rapidly presented series of images or not, as well as if you detected a red circle on any of the images. Press 1 for yes, 0 for no. Please click continue to go to the next page of the instructions. \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E \n           ",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"demo.png\"] }",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "demo.png": "embedded\u002F4ceceb531d591fd14ce6eb76d1b373ab8a6414ebeb79f7b4a767e4dc4ea0a11c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instructions_1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "For this experiment, it is important that your window is in \u003Cb\u003Efull screen\u003C\u002Fb\u003E mode. So when you click the continue button to begin the practice trials, we will make the browser fill up the whole screen.\u003C\u002Fp\u003E\n           ",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue and switch to fullscreen →",
      "submitButtonPosition": "right",
      "files": {
        "demo.png": "embedded\u002F4ceceb531d591fd14ce6eb76d1b373ab8a6414ebeb79f7b4a767e4dc4ea0a11c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "end": function anonymous(
) {
function   openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
openFullscreen()
}
      },
      "title": "Instructions_1"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {
        "7952.jpg": "embedded\u002F3a7348deab052773c80040378ff6e1f6a1e3e94987e4a3f6cbcba2a7123364ef.jpg",
        "7950.jpg": "embedded\u002Fbd5ffbf3df403ff718fe3570b2686395b9d3e896b1acf593710b56d01260a49d.jpg",
        "7948.jpg": "embedded\u002F398973cf8c8fa134aaf74b8ad8efbc2c0838bea17efff433808026c34e691b0d.jpg",
        "7947.jpg": "embedded\u002F920bf6374f207ddd99400dd61d7ddf991181a6fd1e34ae59d169d93c6aa7d3bd.jpg",
        "7946.jpg": "embedded\u002Ff99e54190352c35c173f121b60d7778c0cf876681264e35452eb709dfe5bdfb9.jpg",
        "7945.jpg": "embedded\u002F99d5b0a418b62469a79ad2afe6e392124a8cb12b390d95ff79c57925e7ecb51c.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Slow_Trial",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 18.69,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "+",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "FixationCross",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Blank1",
          "timeout": "500"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0, 
              "top": 0, 
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"7952.jpg\"] }",
              "autoScale": false
            }, 

          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "7952.jpg": "embedded\u002F3a7348deab052773c80040378ff6e1f6a1e3e94987e4a3f6cbcba2a7123364ef.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target1",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"7950.jpg\"] }"
            }, 
            
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "8027.jpg": "embedded\u002F42400ddfd3ab613b4065483e3e285b44a9347c0b69923f527ec6c17e598d208b.jpg",
            "7950.jpg": "embedded\u002Fbd5ffbf3df403ff718fe3570b2686395b9d3e896b1acf593710b56d01260a49d.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"7948.jpg\"] }"
            }, 

            
            {
              "type": "circle",
              "left": 100,    
              "top": -90,  
              "angle": 0,
              "width": 	10, 
              "height": 10, 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "8007.jpg": "embedded\u002F9d24dadad58e341819cb35883f68d50d32a86153d92fcec5ab7ce25519e32860.jpg",
            "7948.jpg": "embedded\u002F398973cf8c8fa134aaf74b8ad8efbc2c0838bea17efff433808026c34e691b0d.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"7947.jpg\"] }"
            }, 

            
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "7592.jpg": "embedded\u002F7522e5ffce9937797c34578f342611a67b18d78344b27cc31bcc08a270a899cd.jpg",
            "7947.jpg": "embedded\u002F920bf6374f207ddd99400dd61d7ddf991181a6fd1e34ae59d169d93c6aa7d3bd.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target4",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"7946.jpg\"] }"
            }, 

      
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "1615.jpg": "embedded\u002F1e525477b036148566359d774ccca1a14a4ed31a41984a6edba7f60907c0af6e.jpg",
            "7946.jpg": "embedded\u002Ff99e54190352c35c173f121b60d7778c0cf876681264e35452eb709dfe5bdfb9.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target5",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"7945.jpg\"] }"
            }, 

        
            
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "613.jpg": "embedded\u002F11d01335dadcba2f15a6311c921d930a6bf1154d67348ef2e5139cd7c6950c20.jpg",
            "7945.jpg": "embedded\u002F99d5b0a418b62469a79ad2afe6e392124a8cb12b390d95ff79c57925e7ecb51c.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target6",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Blank2",
          "timeout": "200"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"7948.jpg\"] }"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -175,
              "angle": 0,
              "width": 311.3,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Is the target present? \n1 for yes, 0 for no",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg",
            "7948.jpg": "embedded\u002F398973cf8c8fa134aaf74b8ad8efbc2c0838bea17efff433808026c34e691b0d.jpg"
          },
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Test_w_img",
          "timeout": "1000",
          "correctResponse": "TrialType"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -175,
              "angle": 0,
              "width": 311.3,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Is the target present? \n1 for yes, 0 for no",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
          },
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Test_no_img",
          "timeout": "3000"
        }, 

        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -175,
              "angle": 0,
              "width": 311.3,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Red dot present? \n1 for yes, 0 for no",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
          },
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Test_probe_prac",
          "timeout": "4000"
        }
      
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "That was a slowed down version of the actual experiment. Next let's try a few trials at the actual speed of the experiment. The study is designed to be \u003Ci\u003Echallenging\u003C\u002Fi\u003E. Sometimes, you'll be certain about what you saw. Other times, you won't be -- and this is okay! Just give your best guess each time. In this practice, the task will be separated into two parts (in the real experiment, you will get asked two questions after a set of images). Click the continue button to start the practice. \n           ",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "demo.png": "embedded\u002F4ceceb531d591fd14ce6eb76d1b373ab8a6414ebeb79f7b4a767e4dc4ea0a11c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instructions_2"
    },
//........................................................................
//..............................................iii.......................
//........................................tttt..iii.......................
//........................................tttt..iii.......................
//........................................tttt..iii.......................
//.ppppppppp...rrrrrr..aaaaaaa...ccccccc.cttttt.iii...ccccccc...eeeeee....
//.pppppppppp..rrrrrr.aaaaaaaa..ccccccccccttttt.iii..ccccccccc.eeeeeeee...
//.ppppppppppp.rrrrrraaaaaaaaaaaccccccccccttttt.iii.icccccccccceeeeeeeee..
//.ppppp.ppppp.rrrr..aaaa.aaaaaaccc..cccc.tttt..iii.iccc..ccccceee..eeee..
//.pppp...pppp.rrr....aaaaaaaaaaccc.......tttt..iii.iccc......ceeeeeeeee..
//.pppp...pppp.rrr...aaaaaaaaaaaccc.......tttt..iii.iccc......ceeeeeeeee..
//.pppp...pppp.rrr...aaaaa.aaaaaccc..cccc.tttt..iii.iccc..ccccceee........
//.ppppppppppp.rrr...aaaa.aaaaaaccccccccc.tttt..iii.icccccccccceeeeeeeee..
//.pppppppppp..rrr...aaaaaaaaaa.cccccccc..ttttt.iii..cccccccc.ceeeeeeee...
//.pppppppppp..rrr...aaaaaaaaaa.cccccccc..ttttt.iii..cccccccc..eeeeeeee...
//.pppp.ppp............aaa........cccc......ttt........cccc......eeee.....
//.pppp...................................................................
//.pppp...................................................................
//.pppp...................................................................
//........................................................................
    
{
  "type": "lab.canvas.Frame",
  "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
  "contextSelector": "canvas",
  "files": {},
  "responses": {
    "": ""
  },
  "parameters": {},
  "messageHandlers": {},
  "title": "Frame",
  "content": {
    "type": "lab.flow.Loop",
    "templateParameters": subfile.prac_trial_info,
    "sample": {
      "mode": "sequential"
    },
    "files": subfile.prac_files,
    "responses": {
      "": ""
    },
    "parameters": {},
    "messageHandlers": {},
    "title": "Practice",
    "indexParameter": "prac_trial_counts",
    "shuffleGroups": [],
    "template": {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "keypress(1)": "YES",
        "keypress(0)": "NO"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Trial",
      "correctResponse": "${ this.parameters.TrialType }",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -25,
              "angle": 0,
              "width": 1061.95,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#000000",
              "text": "${ this.state.correct ? 'Good job, your response was correct!' : 'Oops! Your response was incorrect.' }",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Feedback",
          "tardy": true,
          "timeout": "1000",
          "correctResponse": "${ this.parameters.TrialType }",
          "skip": "${this.parameters.prac_trial_counts == 0}"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 18.69,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "+",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "FixationCross",
          "timeout": "500"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Blank1",
          "timeout": "200"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_1] }",
              "autoScale": false
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize0 }",
              "height": "${ this.parameters.probesize0 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target1",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_2]}"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize1 }",
              "height": "${ this.parameters.probesize1 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "8027.jpg": "embedded\u002F42400ddfd3ab613b4065483e3e285b44a9347c0b69923f527ec6c17e598d208b.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target2",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_3] }"
            }, 

            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize2 }",
              "height": "${ this.parameters.probesize2 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "8007.jpg": "embedded\u002F9d24dadad58e341819cb35883f68d50d32a86153d92fcec5ab7ce25519e32860.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target3",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_4] }"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize3 }",
              "height": "${ this.parameters.probesize3 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "7592.jpg": "embedded\u002F7522e5ffce9937797c34578f342611a67b18d78344b27cc31bcc08a270a899cd.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target4",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_5] }"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize4 }",
              "height": "${ this.parameters.probesize4 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "1615.jpg": "embedded\u002F1e525477b036148566359d774ccca1a14a4ed31a41984a6edba7f60907c0af6e.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target5",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_6] }"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize5 }",
              "height": "${ this.parameters.probesize5 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "613.jpg": "embedded\u002F11d01335dadcba2f15a6311c921d930a6bf1154d67348ef2e5139cd7c6950c20.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target6",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Blank2",
          "timeout": "200"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.test_img] }"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -175,
              "angle": 0,
              "width": 311.3,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Is the target present? \n1 for yes, 0 for no",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
          },
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Test_w_img",
          "timeout": "500",
          "correctResponse": "${ this.parameters.TrialType }"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -175,
              "angle": 0,
              "width": 311.3,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Is the target present? \n1 for yes, 0 for no",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
          },
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Test_no_img",
          "timeout": "3000",
          "correctResponse": "${ this.parameters.TrialType }"
        }
      ]
    }
  }
},
{
  "type": "lab.canvas.Screen",
  "content": [
    {
      "type": "i-text",
      "left": 0,
      "top": -25,
      "angle": 0,
      "width": 1061.95,
      "height": 27.12,
      "stroke": null,
      "strokeWidth": 1,
      "fill": "#000000",
      "text": "${ this.state.correct ? 'Good job, your response was correct!' : 'Oops! Your response was incorrect.' }",
      "fontStyle": "normal",
      "fontWeight": "normal",
      "fontSize": "24",
      "fontFamily": "sans-serif",
      "lineHeight": 1.16,
      "textAlign": "center"
    }
  ],
  "viewport": [
    800,
    600
  ],
  "files": {},
  "responses": {
    "keypress(1)": "YES",
    "keypress(0)": "NO"
  },
  "parameters": {},
  "messageHandlers": {},
  "title": "Feedback",
  "tardy": true,
  "timeout": "1000",
  "correctResponse": "${ this.parameters.TrialType }"
},

//////PROBE PRACTICE 

  
{
  "type": "lab.canvas.Frame",
  "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
  "contextSelector": "canvas",
  "files": {},
  "responses": {
    "": ""
  },
  "parameters": {},
  "messageHandlers": {},
  "title": "Frame",
  "content": {
    "type": "lab.flow.Loop",
    "templateParameters": subfile.prac_trial_info,
    "sample": {
      "mode": "sequential"
    },
    "files": subfile.prac_files,
    "responses": {
      "": ""
    },
    "parameters": {},
    "messageHandlers": {},
    "title": "Practice",
    "indexParameter": "prac_trial_counts",
    "shuffleGroups": [],
    "template": {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "keypress(1)": "YES",
        "keypress(0)": "NO"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Trial",
      "correctResponse": "${ this.parameters.is_probe }",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -25,
              "angle": 0,
              "width": 1061.95,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#000000",
              "text": "${ this.state.correct ? 'Good job, your response was correct!' : 'Oops! Your response was incorrect.' }",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Feedback",
          "tardy": true,
          "timeout": "1000",
          "correctResponse": "${ this.parameters.is_probe }",
          "skip": "${this.parameters.prac_trial_counts == 0}"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 18.69,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "+",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "FixationCross",
          "timeout": "500"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Blank1",
          "timeout": "200"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_1] }",
              "autoScale": false
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize0 }",
              "height": "${ this.parameters.probesize0 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target1",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_2]}"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize1 }",
              "height": "${ this.parameters.probesize1 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "8027.jpg": "embedded\u002F42400ddfd3ab613b4065483e3e285b44a9347c0b69923f527ec6c17e598d208b.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target2",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_3] }"
            }, 

            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize2 }",
              "height": "${ this.parameters.probesize2 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "8007.jpg": "embedded\u002F9d24dadad58e341819cb35883f68d50d32a86153d92fcec5ab7ce25519e32860.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target3",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_4] }"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize3 }",
              "height": "${ this.parameters.probesize3 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "7592.jpg": "embedded\u002F7522e5ffce9937797c34578f342611a67b18d78344b27cc31bcc08a270a899cd.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target4",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_5] }"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize4 }",
              "height": "${ this.parameters.probesize4 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "1615.jpg": "embedded\u002F1e525477b036148566359d774ccca1a14a4ed31a41984a6edba7f60907c0af6e.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target5",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 256,
              "height": 256,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[this.parameters.target_img_6] }"
            }, 
            {
              "type": "circle",
              "left": "${ this.parameters.probe_left }",  
              "top": "${ this.parameters.probe_top }", 
              "angle": 0,
              "width": 	"${ this.parameters.probesize5 }",
              "height": "${ this.parameters.probesize5 }", 
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#d6341a"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "613.jpg": "embedded\u002F11d01335dadcba2f15a6311c921d930a6bf1154d67348ef2e5139cd7c6950c20.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Target6",
          "timeout": "80"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Blank2",
          "timeout": "200"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -175,
              "angle": 0,
              "width": 311.3,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Red dot present? \n1 for yes, 0 for no",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
          },
          "responses": {
            "keypress(1)": "YES",
            "keypress(0)": "NO"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Test_probe",
          "timeout": "4000",
          "correctResponse": "${ this.parameters.is_probe}"
        }
      ]
    }
  }
},
{
  "type": "lab.canvas.Screen",
  "content": [
    {
      "type": "i-text",
      "left": 0,
      "top": -25,
      "angle": 0,
      "width": 1061.95,
      "height": 27.12,
      "stroke": null,
      "strokeWidth": 1,
      "fill": "#000000",
      "text": "${ this.state.correct ? 'Good job, your response was correct!' : 'Oops! Your response was incorrect.' }",
      "fontStyle": "normal",
      "fontWeight": "normal",
      "fontSize": "24",
      "fontFamily": "sans-serif",
      "lineHeight": 1.16,
      "textAlign": "center"
    }
  ],
  "viewport": [
    800,
    600
  ],
  "files": {},
  "responses": {
    "keypress(1)": "YES",
    "keypress(0)": "NO"
  },
  "parameters": {},
  "messageHandlers": {},
  "title": "Feedback",
  "tardy": true,
  "timeout": "1000",
  "correctResponse": "${ this.parameters.is_probe }"
},



    //ACTUAL BLOCKS
    ////////////////////////
    /////////////////////////////
    /////////////////

    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "Now the actual experiment will start. Unlike in the practice, there won't be any feedback in the following task. Again, the task may feel a bit hard but please try your best. Please click continue to go to the next page.\n"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instructions_3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "We know it is also difficult to stay focused for so long, especially when you are doing the same thing over and over. But remember, the experiment will be all over in less than 20 minutes. Please do your best to remain focused! Your responses will only be useful to us if you remain focused. Click continue to start. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instructions_4"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Main Experiment",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block1",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block1_trial_info,// block1_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block1_files,//block1_file_list
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block1_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block1_dur//block1_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block1_dur//block1_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block1_dur//block1_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block1_dur//block1_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block1_dur//block1_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block1_dur//block1_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }, 
              
                  
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 1\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}}
          ]

          /////////BLOCK 2//////////////////////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block2",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters":subfile.block2_trial_info,//block2_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block2_files,//block2_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block2_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block2_dur//block2_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block2_dur//block2_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block2_dur//block2_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block2_dur//block2_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block2_dur//block2_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block2_dur//block2_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 2\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two.Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]

          //////////////BLOCK 3//////////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block3",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block3_trial_info,//block3_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block3_files,//block3_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block3_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block3_dur//block3_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block3_dur//block3_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout":subfile.block3_dur//block3_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block3_dur//block3_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout":subfile.block3_dur//block3_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block3_dur//block3_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]

                //BLOCK 4///////////
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 3\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block4",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block4_trial_info,//block4_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block4_files,//block4_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block4_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block4_dur//block4_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block4_dur//block4_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout":subfile.block4_dur//block4_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block4_dur//block4_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout":subfile.block4_dur//block4_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block4_dur//block4_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 4\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]

          ///////////BLOCK 5////////////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block5",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block5_trial_info,//block5_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block5_files,//block5_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block5_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block5_dur//block5_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block5_dur//block5_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block5_dur//block5_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block5_dur//block5_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block5_dur//block5_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block5_dur//block5_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 5\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]

          ////////BLOCK 6///////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block6",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block6_trial_info,//block6_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block6_files,//block6_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block6_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block6_dur//block6_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block6_dur//block6_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block6_dur//block6_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block6_dur//block6_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block6_dur//block6_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block6_dur//block6_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 6\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]

          ////BLOCK 7/////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block7",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters":subfile.block7_trial_info,//block7_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block7_files,//block7_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block7_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block7_dur//block7_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block7_dur//block7_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block7_dur//block7_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block7_dur//block7_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block7_dur//block7_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block7_dur//block7_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 


                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 7\u002F12 of the experiment.   Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]

          //////BLOCK 8//////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block8",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block8_trial_info,//block8_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block8_files,//block8_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block8_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block8_dur//block8_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block8_dur//block8_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block8_dur//block8_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block8_dur//block8_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block8_dur//block8_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block8_dur//block8_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003E You've completed 8\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]

          ////////BLOCK 9/////////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block9",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block9_trial_info,//block9_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block9_files,//block9_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block5_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block9_dur//block9_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block9_dur//block9_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block9_dur//block9_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block9_dur//block9_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block9_dur//block9_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block9_dur//block9_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]

                /////BLOCK 10/////
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 9\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block10",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block10_trial_info,//block10_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block10_files,//block10_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block6_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block10_dur//block10_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block10_dur//block10_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block10_dur//block10_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block10_dur//block10_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block10_dur//block10_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block10_dur//block10_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003EYou've completed 10\u002F12 of the experiment. Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]

          //////////BLOCK 11/////////
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block7",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters":subfile.block11_trial_info,//block11_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block11_files,//block11_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block7_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block11_dur//block11_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block11_dur//block11_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block11_dur//block11_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block11_dur//block11_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block11_dur//block11_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block11_dur//block11_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]

                /////BLOCK 12//////
              }
            },
            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003E One more block to go! Feel free to take a short break. However, do note that you need to finish the study within 30 minutes so the break shouldn't be long than a minute or two. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Block8",
            "tardy": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": subfile.block12_trial_info,//block12_trial_info
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": subfile.block12_files,//block12_files
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Block8_info",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 18.69,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "FixationCross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank1",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_1] }",
                        "autoScale": false
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize0 }",
                        "height": "${ this.parameters.probesize0 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target1",
                    "timeout": subfile.block12_dur//block12_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_2]}"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize1 }",
                        "height": "${ this.parameters.probesize1 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target2",
                    "timeout": subfile.block12_dur//block12_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_3] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize2 }",
                        "height": "${ this.parameters.probesize2 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target3",
                    "timeout": subfile.block12_dur//block12_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_4] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize3 }",
                        "height": "${ this.parameters.probesize3 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target4",
                    "timeout": subfile.block12_dur//block12_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_5] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize4 }",
                        "height": "${ this.parameters.probesize4 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target5",
                    "timeout": subfile.block12_dur//block12_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.target_img_6] }"
                      }, 

                      {
                        "type": "circle",
                        "left": "${ this.parameters.probe_left }",  
                        "top": "${ this.parameters.probe_top }", 
                        "angle": 0,
                        "width": 	"${ this.parameters.probesize5 }",
                        "height": "${ this.parameters.probesize5 }", 
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Target6",
                    "timeout": subfile.block12_dur//block12_dur
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank2",
                    "timeout": "200"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 256,
                        "height": 256,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[this.parameters.test_img] }"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_w_img",
                    "timeout": "400"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Is the target present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_no_img",
                    "timeout": "3000"
                  }, 

                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -175,
                        "angle": 0,
                        "width": 311.3,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Red dot present? \n1 for yes, 0 for no",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {
                      "781.jpg": "embedded\u002F2002ad92ea26e689f1aff41690a3253af73f4dfd1334d4a457b04ed43a4f2804.jpg"
                    },
                    "responses": {
                      "keypress(1)": "YES",
                      "keypress(0)": "NO"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Test_probe",
                    "timeout": "4000"
                  }
                ]
              }
            },

            {
              "type": "lab.html.Screen",
              "responses": {
                "keypress(Space)": "Continue"
              },
              "messageHandlers": {},
              "title": "break",
              "content": "\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv class=\"w-m text-justify\"\u003E\r\n    \u003Cp style=\"font-size:200%;\"\u003E The experiment is finished. Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n",
              "parameters": {},
              "files": {}
            }
          ]
        },

      ]
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "End",
      "content": "\u003Cheader\u003E\n  \n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Csection id=\"page1\" class=\"w-l text-justify\"\u003E\n You have finished the experiment! Thank you very much!\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E Whenever you are ready, click the END button to submit your work. \u003Cbr \u002F\u003E\n  \u003C\u002Fsection\u003E\n  \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \u003Ctable class=\"table-plain\"\u003E\n    \u003Ctr\u003E\n      \u003Cbutton type=\"button\" onClick=\"window.location.href = 'https:\u002F\u002Fapp.prolific.co\u002Fsubmissions\u002Fcomplete?cc=125BB445';\"\u003EEND\u003C\u002Fbutton\u003E\n    \u003C\u002Ftr\u003E\n  \u003C\u002Ftable\u003E\n\u003C\u002Ffooter\u003E"
    }
  ]
})

// Let's go!
study.run()

