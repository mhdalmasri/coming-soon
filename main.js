class soon {
  constructor() {
    this.init()
  }
  init() {
    let time = document.getElementById("js");
    const now = moment([]);
    const next = moment(['2020']);
    const diff = next.diff(now, 'seconds');
    const months = Math.floor(diff / 2629746)
    const days = Math.floor((diff % 2629746) / 86400)
    const hours= Math.floor(((diff % 2629746) % 86400)/3600)
    const minutes =Math.floor((((diff % 2629746) % 86400)%3600)/60)
    const seconds= (((diff % 2629746) % 86400)%3600)%60

    console.log(now.format('LLL'));
    console.log(next.format('LLL'));
    console.log(diff);
    console.log(months);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    time.textContent = `${months} Months ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
  }

}

setInterval(()=>{const newSoon = new soon()},1000)
