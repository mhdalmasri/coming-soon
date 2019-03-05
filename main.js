class soon {
  constructor() {
    this.init()
  }
  init() {
    let time = document.getElementById("js");
    const now = moment([]);
    const next = moment(['2020']);
    const diff = next.diff(now, 'seconds');
    const days = Math.floor(diff / 86400)
    const hours = Math.floor((diff % 86400) / 3600)
    const minutes= Math.floor(((diff % 86400) % 3600)/60)
    const seconds =(((diff % 86400) % 3600)%3600)%60
    time.textContent = ` ${days} Days .. ${hours} Hours .. ${minutes} Minutes .. ${seconds} Seconds ..`

    console.log(now.format('LLL'));
    console.log(next.format('LLL'));
    console.log(diff);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    
  }

}

setInterval(()=>{const newSoon = new soon()},1000)
