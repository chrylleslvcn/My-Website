function setProgress(circleId, textId, percent) {

  const circle = document.getElementById(circleId);

  const text = document.getElementById(textId);

  const radius = circle.r.baseVal.value;

  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;

  circle.style.strokeDashoffset = offset;

  text.innerText = `${percent}%`;

}