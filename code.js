

const cv = require('opencv4nodejs');

// Expects a directry named img with p_src.jpg in it
// Or else it will crash :P

const mat = cv.imread('./img/p_src.jpg');

//Visualizaiton
const matGray = mat.bgrToGray();
const matHSV = mat.cvtColor(cv.COLOR_BGR2HSV);
const matLab = mat.cvtColor(cv.COLOR_BGR2Lab);

cv.imwrite('./img/p_gray.jpg', matGray);
cv.imwrite('./img/p_HSV.jpg', matHSV);
cv.imwrite('./img/p_Lab.jpg', matLab);

const [matL, mata, matb] = matLab.splitChannels();

cv.imwrite('./img/p_L.jpg', matL);
cv.imwrite('./img/p_a.jpg', mata);
cv.imwrite('./img/p_b.jpg', matb);

const emptyMat = new cv.Mat(mat.rows, mat.cols, cv.CV_8UC1);

const mateab = new cv.Mat([emptyMat, mata, matb]);
const mataeb = new cv.Mat([mata, emptyMat, matb]);
const matabe = new cv.Mat([mata, matb, emptyMat]);

cv.imwrite('./img/p_eab.jpg', mateab);
cv.imwrite('./img/p_aeb.jpg', mataeb);
cv.imwrite('./img/p_aeb.jpg', matabe);

//Processing
const mataPlusMatb = mata.add(matb);          // addition
const mataMinusMatb = mata.sub(matb);         // subtraction
const matbMinusMata = matb.sub(mata);         // subtraction

cv.imwrite('./img/p_aPlusb.jpg', mataPlusMatb);
cv.imwrite('./img/p_aMinusb.jpg', mataMinusMatb);
cv.imwrite('./img/p_bMinusa.jpg', matbMinusMata);

const mataAndMatb = mata.and(matb);
const mataOrMatb = mata.or(matb);

cv.imwrite('./img/p_aAndb.jpg', mataAndMatb);
cv.imwrite('./img/p_bOra.jpg', mataOrMatb);



