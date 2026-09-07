document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item:not(.center-btn)');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const actionItems = document.querySelectorAll('.action-item');
    actionItems.forEach(item => {
        item.addEventListener('click', function () {
            const icon = this.querySelector('.action-icon');
            if (icon) {
                icon.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', function () {
            const icon = this.querySelector('.grid-icon');
            if (icon) {
                icon.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    const plusCircle = document.querySelector('.plus-circle');
    if (plusCircle) {
        plusCircle.addEventListener('click', function () {
            this.style.transform = 'scale(0.9) rotate(90deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    }

    const rechargeBtn = document.querySelector('.recharge-btn');
    if (rechargeBtn) {
        rechargeBtn.addEventListener('click', function () {
            alert('跳转到充值中心');
        });
    }

    const actionSerial = document.getElementById('actionSerial');
    if (actionSerial) {
        actionSerial.addEventListener('click', function () {
            window.location.href = 'serial.html';
        });
    }
});
