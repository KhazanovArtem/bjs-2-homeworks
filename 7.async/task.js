class AlarmClock {
    constructor() {
        this.alarmCollection =[];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time == null || callback == null) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i][0] == time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }

        let canCall = true;
        this.alarmCollection.push({time, callback, canCall});
    }

    removeClock(time) {
        let remove = this.alarmCollection.filter(clock => clock.time != time);
        this.alarmCollection = remove
        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        const currentTime = new Date();
        if (currentTime.getHours().toString().length == 1) {
            let hours = "0" + currentTime.getHours();
            return (hours + ":" + currentTime.getMinutes());
        }

        if (currentTime.getMinutes().toString().length == 1) {
            let minutes = "0" + currentTime.getMinutes();
            return (currentTime.getHours() + ":" + minutes);
        }

        if (currentTime.getHours().toString().length == 1 && currentTime.getMinutes().toString().length == 1) {
            return ("0" + currentTime.getHours() + ":" + "0" + currentTime.getMinutes());

        }

        return (currentTime.getHours() + ":" + currentTime.getMinutes());
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval((() => {this.alarmCollection.forEach((call) => {
            if(call.time == this.getCurrentFormattedTime() && call.canCall == true) {
                call.canCall = false;
                call.callback();
            }
        })}), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((call) => call.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection =[];
    }
}