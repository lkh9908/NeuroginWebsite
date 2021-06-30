var canvas = document.querySelector('#pain-ladder');
var parent = document.querySelector('#ladder-parent');

canvas.style.opacity = 1;

w = parent.offsetWidth - 22;
h = parent.offsetHeight - 22;

var c= canvas.getContext('2d');
canvas.width = w;
canvas.height = h;


c.fillStyle="rgb(105,106,109)";
c.strokeStyle="rgb(0,180,180)";
c.lineWidth = 3;


let textMargin = 0
if(w > 1290){
    c.font = '2rem Arial';
    textMargin = 50;
} else {
    c.font = '1.5rem Arial';
    textMargin = 0;
}


c.beginPath();
c.moveTo(30, h-30);
c.lineTo(30, h/5*4);
c.stroke();

c.beginPath();
c.moveTo(30, h/5*4);
c.lineTo(w/4, h/5*4);
c.stroke();

c.fillStyle="rgb(0,180,180)";
c.fillText('轻度疼痛',30+textMargin+50,h/5*4-20, 600);
c.fillStyle="rgb(105,106,109)";
c.fillText('弱效止痛药',30+textMargin+30,h/5*4+40, 600);

c.beginPath();
c.moveTo(w/4, h/5*4);
c.lineTo(w/4, h/5*3);
c.stroke();

c.beginPath();
c.moveTo(w/4, h/5*3);
c.lineTo(w/4*2, h/5*3);
c.stroke();

c.fillStyle="rgb(0,180,180)";
c.fillText('中度疼痛',w/4+textMargin+50,h/5*3-20, 600);
c.fillStyle="rgb(105,106,109)";
c.fillText('中效止痛药 + 辅助',w/4+textMargin+10,h/5*3+40, 600);


c.beginPath();
c.moveTo(w/4*2, h/5*3);
c.lineTo(w/4*2, h/5*2);
c.stroke();

c.beginPath();
c.moveTo(w/4*2, h/5*2);
c.lineTo(w/4*3, h/5*2);
c.stroke();

c.fillStyle="rgb(0,180,180)";
c.fillText('重度疼痛',w/4*2+textMargin+50,h/5*2-20, 600);
c.fillStyle="rgb(105,106,109)";
c.fillText('强效止痛药 + 弱效 + 辅助',w/4*2+textMargin+10,h/5*2+40, 600);

c.beginPath();
c.moveTo(w/4*3, h/5*2);
c.lineTo(w/4*3, h/5);
c.stroke();

c.beginPath();
c.moveTo(w/4*3, h/5);
c.lineTo(w-30, h/5);
c.stroke();

c.fillStyle="rgb(0,180,180)";
c.fillText('剧痛',w/4*3+textMargin+50,h/5-20, 600);
c.fillStyle="rgb(105,106,109)";
c.fillText('微创治疗：',w/4*3+textMargin+10,h/5+40, 600);
if(w > 1290){
    c.fillText('神经射频，髓内泵',w/4*3+textMargin+10,h/5+80, 600);
} else {
    c.fillText('神经射频',w/4*3+textMargin+10,h/5+80, 600);
    c.fillText('髓内泵',w/4*3+textMargin+10,h/5+120, 600);
}


c.font = '4rem Arial';
c.fillStyle="rgb(0,180,180)";
c.fillText('现有疼痛管理方式',w/2-350,h/8, 600);