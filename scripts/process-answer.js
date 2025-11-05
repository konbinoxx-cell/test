const fs = require('fs');
const path = require('path');

console.log('=== 测试脚本开始 ===');
console.log('当前工作目录:', process.cwd());
console.log('文件路径:', path.resolve('faq-data.json'));

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
  const filePath = path.resolve('faq-data.json');
  console.log('检查文件是否存在:', filePath);
  console.log('文件存在:', fs.existsSync(filePath));
  
  if (fs.existsSync(filePath)) {
    const existing = fs.readFileSync(filePath, 'utf8');
    console.log('文件内容:', existing);
    faqData = JSON.parse(existing);
    console.log('找到现有数据，条目数:', faqData.length);
  } else {
    console.log('文件不存在，将创建新文件');
  }
} catch (e) {
  console.log('错误:', e.message);
}

console.log('将要写入的数据:', JSON.stringify(testEntry, null, 2));

try {
  faqData.push(testEntry);
  fs.writeFileSync('faq-data.json', JSON.stringify(faqData, null, 2));
  console.log('成功写入测试数据');
  
  // 验证写入
  const verify = fs.readFileSync('faq-data.json', 'utf8');
  console.log('验证写入的内容:', verify);
} catch (writeError) {
  console.log('写入错误:', writeError.message);
}

console.log('=== 测试脚本结束 ===');
