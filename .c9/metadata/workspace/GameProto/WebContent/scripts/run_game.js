{"changed":true,"filter":false,"title":"run_game.js","tooltip":"/GameProto/WebContent/scripts/run_game.js","value":"var gameObjects = [];\nvar FPS = 60;\n\nfunction gameInit(canvas) {\n    \n    var ProtoInput = new Input();\n    ProtoInput.initInput();\n    \n    var gameObject1 = new GameObject(\"fill_rect\");\n    var gameObject2 = new GameObject(\"fill_rect\");\n    gameObject1.createRect(\"rect1\", \"rect\", 100, 100, 200, 100, \"#f00\");\n    gameObject2.createRect(\"rect2\", \"rect\", 220, 120, 200, 100, \"#0f0\");  \n    gameObjects.push(gameObject1);\n    gameObjects.push(gameObject2);\n    \n    var circle1 = new Circle(\"circle1\", \"circle1\", 100, 400, 300, \"#00f\");\n    gameObjects.push(circle1);\n    \n    var line1 = new Line(\"line1\", \"line1\", 10, 10, 100, 100, 10, \"#000\");\n    gameObjects.push(line1);\n    \n    var t = \"SAMPLE TEXT\";\n    var text1 = new Text(\"text1\", \"text1\", 100, 50, t, \"30\", \"Arial\", \"#f0f\");\n    gameObjects.push(text1);\n    \n    context.scale(winWidth/canvasWidth, winHeight/canvasHeight);\n    \n    var image1;\n    imageLoader.load(\"/GameProto/WebContent/TestImages/korra_sprite.png\", function(im) {\n        image1 = new protoImage(\"kI\", \"Korra\", im, 0, 0, im.width*1.5, im.height*1.5);\n        gameObjects.push(image1);\n    });\n    \n    var anim1;\n    imageLoader.load(\"/GameProto/WebContent/TestImages/NegaScot.png\", function(anim) {\n       anim1 = new protoAnim(\"ns1\", \"Nega Scott\", anim, 0, 50, 43, 61, 9, 1, 8);\n       gameObjects.push(anim1);\n    });\n    //gameObjects.push(image1);\n    \n    //setInterval(update(), 500);\n    //setInterval(draw(context), 500);\n    update();\n    draw(context);\n};\n\nfunction update() {\n    if(gameObjects.length > 0) {\n        gameObjects.forEach(function(e){\n            e.update();\n        });\n    }\n    setTimeout(function(){\n        update()\n    }, 1000/FPS);\n};\n\nfunction draw(context) {\n    context.clearRect(0,0,canvas.width, canvas.height);\n    if(gameObjects.length > 0) {\n        gameObjects.forEach(function(e) {\n            e.draw(context);\n        });\n    }\n    setTimeout(function(){\n        draw(context)\n    }, 1000/FPS);\n};\n\nfunction updateObject(id,obj) {\n    gameObjects[id] = obj;\n};","undoManager":{"mark":101,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":30},"end":{"row":5,"column":32},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":33},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":15},"end":{"row":6,"column":19},"action":"remove","lines":["init"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":26},"action":"insert","lines":["initInput()"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":80},"end":{"row":36,"column":0},"action":"insert","lines":["",""]},{"start":{"row":36,"column":0},"end":{"row":36,"column":7},"action":"insert","lines":["       "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":7},"end":{"row":36,"column":8},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":9},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":9},"end":{"row":36,"column":10},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"remove","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":9},"end":{"row":36,"column":10},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":9},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":7},"end":{"row":36,"column":8},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":27},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":21},"end":{"row":8,"column":24},"action":"remove","lines":["Two"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":31},"action":"insert","lines":["TwoDMove()"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":38},"end":{"row":8,"column":40},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":40},"end":{"row":8,"column":42},"action":"insert","lines":["{}"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":41},"end":{"row":10,"column":4},"action":"insert","lines":["","        ","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":23},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":10},"end":{"row":10,"column":12},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":11},"end":{"row":10,"column":17},"action":"remove","lines":["rightP"]},{"start":{"row":10,"column":11},"end":{"row":10,"column":23},"action":"insert","lines":["rightPressed"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":25},"end":{"row":12,"column":9},"action":"insert","lines":["","            ","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":40},"end":{"row":8,"column":41},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"insert","lines":["t"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":78},"end":{"row":22,"column":78},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1428347339000}