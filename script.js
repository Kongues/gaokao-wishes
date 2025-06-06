// 创建彩带效果
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // 随机位置
        const left = Math.random() * 100;
        
        // 随机颜色
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // 随机大小
        const size = Math.random() * 10 + 5;
        
        // 随机动画延迟
        const delay = Math.random() * 5;
        
        // 随机动画持续时间
        const duration = Math.random() * 3 + 3;
        
        // 设置样式
        confetti.style.left = `${left}%`;
        confetti.style.backgroundColor = color;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;
        
        // 添加到容器
        confettiContainer.appendChild(confetti);
    }
}

// 页面加载完成后创建彩带
document.addEventListener('DOMContentLoaded', createConfetti);

// 添加祝福语动画效果
document.addEventListener('DOMContentLoaded', () => {
    const wishes = document.querySelectorAll('.wishes li');
    
    // 卡片显示后再触发祝福语动画
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.style.display === 'block') {
                wishes.forEach((wish, index) => {
                    wish.style.opacity = '0';
                    wish.style.transform = 'translateX(-20px)';
                    wish.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    
                    // 延迟显示每个祝福
                    setTimeout(() => {
                        wish.style.opacity = '1';
                        wish.style.transform = 'translateX(0)';
                    }, 500 + index * 300);
                });
                
                // 停止观察
                observer.disconnect();
            }
        });
    });
    
    // 开始观察卡片元素
    observer.observe(document.getElementById('card'), { attributes: true, attributeFilter: ['style'] });
});

// 添加鼠标悬停效果
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        card.style.transition = 'transform 0.5s ease';
    });
});

// 信封点击事件
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const card = document.getElementById('card');
    
    envelope.addEventListener('click', () => {
        // 添加信封打开动画类
        envelope.classList.add('envelope-open');
        
        // 信封动画结束后显示卡片
        setTimeout(() => {
            envelope.style.display = 'none';
            card.style.display = 'block';
            
            // 触发彩带效果
            createConfetti();
        }, 1500); // 与openEnvelope动画持续时间相匹配
    });
}); 