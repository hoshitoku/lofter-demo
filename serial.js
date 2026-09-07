document.addEventListener('DOMContentLoaded', function () {
    const navBack = document.getElementById('navBack');
    if (navBack) {
        navBack.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }

    const ccBtn = document.querySelector('.cc-btn');
    if (ccBtn) {
        ccBtn.addEventListener('click', function () {
            alert('继续阅读《夏日终曲》');
        });
    }

    const authorItems = document.querySelectorAll('.author-item');
    authorItems.forEach(item => {
        item.addEventListener('click', function () {
            const name = this.querySelector('.author-name').textContent;
            alert('进入作者主页：' + name);
        });
    });

    const viewAll = document.querySelector('.view-all');
    if (viewAll) {
        viewAll.addEventListener('click', function () {
            alert('查看全部互动作者');
        });
    }

    const recCard = document.querySelector('.recommend-card');
    if (recCard) {
        recCard.addEventListener('click', function () {
            alert('打开《雨停之后》');
        });
    }

    const createNewBtn = document.querySelector('.nav-right');
    if (createNewBtn) {
        createNewBtn.addEventListener('click', function () {
            alert('创建新连载');
        });
    }

    const plusCircle = document.querySelector('.plus-circle');
    if (plusCircle) {
        plusCircle.addEventListener('click', function () {
            this.style.transform = 'scale(0.9) rotate(90deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    }

    const navItems = document.querySelectorAll('.nav-item:not(.center-btn)');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
