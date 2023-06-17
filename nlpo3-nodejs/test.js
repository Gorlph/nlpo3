const {segment,loadDict} = require('./nlpo3')
const { StringDecoder } = require('string_decoder');
const fs  = require('fs');
const {Table} = require('apache-arrow');
const decoder = new StringDecoder('utf-8');
const fetch = require("node-fetch");
const wisesightSentiment = fs.readFileSync('C:/Users/gorlph/.cache/huggingface/datasets/downloads/extracted/dfde509b7aed4f6846e9f16c887eca08e059759ba493eee33b5dd52f6a7079aa/data/train.jsonl');

const test = decoder.write(wisesightSentiment);

// const table = Table.from(fetch('C:Users/gorlph/.cache/huggingface/datasets/wisesight_sentiment/wisesight_sentiment/1.0.0/caa11b92fd29eb91216ff65874c33dffe7d18fff564b073bbf60f2c92693c419/wisesight_sentiment-train.arrow'));
const str = 'ไปจองมาแล้วนาจา Mitsubishi Attrage ได้หลังสงกรานต์เลย รอขับอยู่นาจา กระทัดรัด เหมาะกับสาวๆขับรถคนเดียวแบบเรา ราคาสบายกระเป๋า ประหยัดน้ำมัน วิ่งไกลแค่ไหนหายห่วงค่ะ';
loadDict("../words_th.txt","dict1");
loadDict("../words_th.txt","dict2");
loadDict("../words_th.txt","dict3");
loadDict("../words_th.txt","dict4");
const lines = test.split('\n');
const result_text = lines.map(line => {
    return JSON.parse(line).texts
})
for(const text of result_text){
   segment(text,"dict1");
   segment(text,"dict1");
   segment(text,"dict1");
   segment(text,"dict1");
   segment(text,"dict1");
   segment(text,"dict1");
   

}

