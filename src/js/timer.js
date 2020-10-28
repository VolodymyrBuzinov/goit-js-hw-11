const refs = {
        days: document.querySelector('span[data-value="days"]'),
        hours: document.querySelector('span[data-value="hours"]'),
        mins: document.querySelector('span[data-value="mins"]'),
        secs: document.querySelector('span[data-value="secs"]'),
        currentDate: document.querySelector('.js-target-date'),        
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.date = targetDate;
        this.render();
        this.run();
    }

    countDate() {
        const time = new Date(this.date) - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        return { days, hours, mins, secs };
    }

    render() {
        const time = this.countDate();
        refs.days.textContent = String(time.days).padStart(2, '0');
        refs.hours.textContent = String(time.hours).padStart(2, '0');
        refs.mins.textContent = String(time.mins).padStart(2, '0');
        refs.secs.textContent = String(time.secs).padStart(2, '0');
    }

    run() {
        const deadline = Date.parse(this.date) <= Date.parse(new Date());
        this.timerId = setInterval(() => {
            if (deadline) {
                this.stop();
                return;
            }
            this.render();
        }, 1000);
    }

    stop() {
        clearInterval(this.timerId);
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 5, 2021'),
});


const endingDate = timer.date.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });;
refs.currentDate.textContent = endingDate;
