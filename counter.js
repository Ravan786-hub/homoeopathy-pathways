// GoatCounter caches each counter URL for ~4 hours. Use a start date (always before the site launched)
// that changes every 10 minutes, so the number shown is at most ~10 minutes old.
(function(){var k=Math.floor(Date.now()/600000)%2000;var d=new Date(Date.UTC(2020,0,1)+k*86400000).toISOString().slice(0,10);
fetch('https://homoeogram.goatcounter.com/counter/%2F.json?start='+d).then(function(r){return r.json()}).then(function(j){document.getElementById('vnum').textContent=j.count;document.getElementById('vcount').hidden=false}).catch(function(){});})();
