const urlParams = new URLSearchParams(window.location.search);
const filter = urlParams.get('filter'); 

function hideAll() {
  const ids = [
    'k1','k2','k3','k4','k5','k6',
    'b1','b2','b3','b4','b5','b6','b7','b8',
    'b9','b10','b11','b12','b13','b14'
  ];

  ids.forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
}

if (filter === 'The Koala Who Could') {
  hideAll();
  document.getElementById('k1').style.display = 'block';
}
else if(filter === 'The Cat In The Hat') {
  hideAll();
  document.getElementById('k2').style.display = 'block';
}

else if(filter === 'Animal Tales From ...') {
  hideAll();
  document.getElementById('k3').style.display = 'block';
}

else if(filter === 'Super Space Explore Inside') {
  hideAll();
  document.getElementById('k4').style.display = 'block';
}

else if(filter === 'Kugai Desak Kullar') {
  hideAll();
  document.getElementById('k5').style.display = 'block';
}
else if(filter === 'Yali Maravar') {
  hideAll();
  document.getElementById('k6').style.display = 'block';
}


else if (filter === 'Indian Polity') {
  hideAll();
  document.getElementById('b1').style.display = 'block';
}

else if (filter === 'General Studies') {
  hideAll();
  document.getElementById('b2').style.display = 'block';
}

else if (filter === 'Microeconomics') {
  hideAll();
  document.getElementById('b3').style.display = 'block';
}

else if (filter === 'Modern Physics') {
  hideAll();
  document.getElementById('b4').style.display = 'block';
}

else if (filter === 'Science Encyclopedia') {
  hideAll();
  document.getElementById('b5').style.display = 'block';
}

else if (filter === 'World Geography') {
  hideAll();
  document.getElementById('b6').style.display = 'block';
}

else if (filter === 'GK-2026') {
  hideAll();
  document.getElementById('b7').style.display = 'block';
}

else if (filter === 'Static GK') {
  hideAll();
  document.getElementById('b8').style.display = 'block';
}

else if (filter === 'Atlas for India') {
  hideAll();
  document.getElementById('b9').style.display = 'block';
}

else if (filter === 'Indian Art And Culture') {
  hideAll();
  document.getElementById('b10').style.display = 'block';
}

else if (filter === 'Computer') {
  hideAll();
  document.getElementById('b11').style.display = 'block';
}

else if (filter === 'Agriculture') {
  hideAll();
  document.getElementById('b12').style.display = 'block';
}

else if (filter === 'Art and Culture of India') {
  hideAll();
  document.getElementById('b13').style.display = 'block';
}

else if (filter === 'Medicine book') {
  hideAll();
  document.getElementById('b14').style.display = 'block';
}




