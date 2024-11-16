// 获取按钮
const buttons=document.querySelectorAll('.button');

// 循环为每一个按钮绑定鼠标移动事件
buttons.forEach((button)=>{
    button.addEventListener('mousemove',(e)=>{
        // 获取鼠标的x、y坐标
        const x=e.offsetX;
        const y=e.offsetY;
        // 将x、y坐标赋值给CSS中的自定义变量--x、--y
        button.style.setProperty('--x',`${x}px`);
        button.style.setProperty('--y',`${y}px`);
    })
})
// 获取所有.item元素
let items=document.querySelectorAll('.item2');

// 设置选中态样式
function setActive(){
    // 遍历所有.item元素，移出active样式
    items.forEach((item)=>{
        item.classList.remove('active');
    })
    // 为当前选中项添加active样式
    this.classList.add('active');
}
// 遍历所有.item元素，分别为其设置点击事件
items.forEach((item)=>{
    item.addEventListener('click',setActive);
})