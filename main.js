class soon {
  constructor() {
    this.init()
  }
  init() {
    let time = document.getElementById("js");
    const now = moment([]);
    console.log(now.toArray());
    const next = moment(['2020, 0, 1, 0, 0, 0, 0']);
    console.log(next.toArray());
    const diff = next.diff(now, 'seconds');
    const days = Math.floor(diff / 86400)
    const hours = Math.floor((diff % 86400) / 3600)
    const minutes = Math.floor(((diff % 86400) % 3600) / 60)
    const seconds = (((diff % 86400) % 3600) % 3600) % 60
    time.textContent = ` ${days} Days .. ${hours} Hours .. ${minutes} Minutes .. ${seconds} Seconds ..`

  }
}

setInterval(() => {
  const newSoon = new soon()
}, 1000)