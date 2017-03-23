function getIssues() {
  const repo= 'javascript-fetch-lab';
  const url= `https://api.github.com/repos/${repo}/issues`;
  const token= getToken();
  fetch(url).then(res=> res.json()).then(showIssues)
}

function showIssues(json) {
  const src=document.getElementById('issues-template').innerHTML;
  const template= Handlebars.compile(src);
  const issuesList= template(json)
  document.getElementById('issues').innerHTML= issuesList
}

function createIssue() {
  const token= getToken();
  const repo= 'javascript-fetch-lab';
  const url=`https://api.github.com/repos/${repo}/issues`;
  const postData= {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(url, {
    method:'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(getIssues)
}

function showResults(json) {
  const src= document.getElementById('repo-template').innerHTML
  const template=Handlebars.compile(src)
  const repoResults=template(json)
  document.getElementById('results').innerHTML=repoResults
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token= getToken()
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res=>res.json()).then(showResults)
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  const token="e9a97bff7648660f01a1bb05f7c479ad6c108678"
  //back to '' before committing so all tests pass
  return ""
}
