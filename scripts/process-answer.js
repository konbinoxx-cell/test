const fs = require('fs');

console.log('=== 测试脚本开始 ===');

const testEntry = {
  id: 'test-' + Date.now(),
  question: '测试问题',
  answer: '测试回答', 
  category: 'test',
  date: new Date().toISOString(),
  status: 'published'
};

let faqData = [];
try {
  if (fs.existsSync('faq-data.json')) {
    const existing = fs.readFileSync('faq-data.json', 'utf8');
    faqData = JSON.parse(existing);
    console.log('找到现有数据，条目数:', faqData.length);
  }
} catch (e) {
  console.log('创建新数据文件');
}

faqData.push(testEntry);
fs.writeFileSync('faq-data.json', JSON.stringify(faqData, null, 2));
console.log('成功写入测试数据');

console.log('=== 测试脚本结束 ===');
