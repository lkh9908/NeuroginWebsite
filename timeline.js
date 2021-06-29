var canvas = document.querySelector('#timeline');
var parent = document.querySelector('.paragraph');
w = parent.offsetWidth;
canvas.width = w;
canvas.height = 1200;

var years = [2021, 2020, 2019, 2018, 2017, 2016, 2015]

// text format
var texts = [];
texts[0] = '公司无线脑电图设备获得NMPA批准';
texts[1] = '开始临床疼痛数据采集';
 
texts[2] = '疼痛客观量化项目正式立项';
texts[3] = '国内知名投资人领投3000万元人民币';
texts[4] = '当前估值1.5亿元人民币';
 
texts[5] = '公司与四川大学华西医院';
texts[6] = '合作研究传感器项目';
texts[7] = '获得四川省科技厅重大科技专项';
 
texts[8] = '专家团队于疼痛领域发表多篇论文';
texts[9] = '连续3年受邀参加世界神经科学年会';
texts[10] = '传感器项目获四川省委书记彭清华批示';
 
texts[11] = '公司首席科学家彭远波教授';
texts[12] = '获聘四川大学华西医院客座教授';
 
texts[13] = '美国德州大学动物实验室';
texts[14] = '使用公司无线脑电产品';
texts[15] = '用于疼痛机理研究';
texts[16] = '获广泛关注并被美国国家广播公司报道';
 
texts[17] = '公司电生理记录设备';
texts[18] = '成功获美国国立卫生研究院资助';
texts[19] = '参与术中电生理监测研究';

// try to see if git is still ok
if(canvas.getContext){
    // desktop screen
    if (w > 750) {
     var c= canvas.getContext('2d');
     c.fillStyle="rgb(0,180,180)";
     c.strokeStyle="rgb(0,180,180)";
     c.font = '1.05rem Arial'

     let x = 1;
     let text = 0;
     let year = 0;
     for(let i = 0; i < 1050; i+=150){
        // verticle line, circles, and horizontal line
        c.beginPath();
        c.moveTo((w/2),i);
        c.lineTo((w/2),i+100);
        c.stroke();
        c.beginPath()
        c.arc((w/2),i+100+25,15,0,2*Math.PI,false);
        c.fill();
        c.stroke();
        c.beginPath();
        c.arc((w/2),i+100+25,25,0,2*Math.PI,false);
        c.stroke();
        c.beginPath();
        c.moveTo((w/2)+(25*x),i+100+25);
        c.lineTo((w/2)+(125*x),i+100+25);
        c.stroke();

        // year and text
        c.fillStyle="rgb(105,106,109)";
        if (x > 0){
            c.fillText(texts[text],(w/2)+(150*x),i+110,600);
            c.fillText(years[year],(w/2)+(80*-x),i+130,600);
        } else {
            c.fillText(texts[text],(w/2)+(410*x),i+100,600);
            c.fillText(years[year],(w/2)+(50*-x),i+130,600);
        }

        // for multi-line texts

        // two lines
        if (text == 0 || text == 11){
            text++;
            if (x > 0){
                c.fillText(texts[text],(w/2)+(150*x),i+140,1000);
            } else {
                c.fillText(texts[text],(w/2)+(410*x),i+130,1000);
            }
        }

        // three lines
        if (text == 2 || text == 5 || text == 8 || text == 17){
            text++;
            if (x > 0){
                c.fillText(texts[text],(w/2)+(150*x),i+140,1000);
            } else {
                c.fillText(texts[text],(w/2)+(410*x),i+130,1000);
            }
            text++;
            if (x > 0){
                c.fillText(texts[text],(w/2)+(150*x),i+170,1000);
            } else {
                c.fillText(texts[text],(w/2)+(410*x),i+160,1000);
            }
        }

        // four lines
        if (text == 13){
            text++;
            if (x > 0){
                c.fillText(texts[text],(w/2)+(150*x),i+140,1000);
            } else {
                c.fillText(texts[text],(w/2)+(410*x),i+130,1000);
            }
            text++;
            if (x > 0){
                c.fillText(texts[text],(w/2)+(150*x),i+170,1000);
            } else {
                c.fillText(texts[text],(w/2)+(410*x),i+160,1000);
            }
            text++;
            if (x > 0){
                c.fillText(texts[text],(w/2)+(150*x),i+200,1000);
            } else {
                c.fillText(texts[text],(w/2)+(410*x),i+190,1000);
            }
            
        }
        
       
        c.stroke();
        c.fillStyle="rgb(0,180,180)";

        x = -x;
        text++;
        year++;
     }
     c.beginPath();
     c.moveTo((w/2),1050);
     c.lineTo((w/2),1150);
     c.stroke();
    } else {
     // for smaller screens
     var c= canvas.getContext('2d');
     c.fillStyle="rgb(0,180,180)";
     c.strokeStyle="rgb(0,180,180)";
     c.font = '0.8rem Arial'
     
     let x = 1;
     let text = 0;
     let year = 0;
     for(let i = 0; i < 1050; i+=150){
         // verticle line, circles, and horizontal line
        c.beginPath();
        c.moveTo((30),i);
        c.lineTo((30),i+100);
        c.stroke();
        c.beginPath()
        c.arc((30),i+100+25,15,0,2*Math.PI,false);
        c.fill();
        c.stroke();
        c.beginPath();
        c.arc((30),i+100+25,25,0,2*Math.PI,false);
        c.stroke();
        c.beginPath();
        c.moveTo((30)+(25*x),i+100+25);
        c.lineTo((30)+(125*x),i+100+25);
        c.stroke();

        // year and text
        c.fillStyle="rgb(105,106,109)";
        c.fillText(texts[text],(30)+(10*x),i+180,600);
        c.fillText(years[year],(30)+(80*x),i+150,600);

        // for multi-line texts

        // two lines
        if (text == 0 || text == 11){
            text++;
            
            c.fillText(texts[text],(30)+(10*x),i+200,200);
            
        }

        // three lines
        if (text == 2 || text == 5 || text == 8 || text == 17){
            text++;
            
            c.fillText(texts[text],(30)+(10*x),i+200,200);
            
            text++;
            
            c.fillText(texts[text],(30)+(10*x),i+220,200);
            
        }

        // four lines
        if (text == 13) {
            text++;
            
            c.fillText(texts[text],(30)+(10*x),i+200,200);
            text++;
            
            c.fillText(texts[text],(30)+(10*x),i+220,200);
            text++;
            
            c.fillText(texts[text],(30)+(10*x),i+240,200);
        }
       
        c.stroke();
        c.fillStyle="rgb(0,180,180)";

        x = x;
        text++;
        year++;
     }
     c.beginPath();
     c.moveTo((30),1050);
     c.lineTo((30),1150);
     c.stroke();
    }
}