import './style.css'

document.querySelector('#app').innerHTML = `
<style>html {
            overflow: auto;
        }
          
        html,
        body,
        div,
        iframe {
            margin: 0px;
            padding: 0px;
            height: 100%;
            border: none;
        }
          
        iframe {
            display: block;
            width: 100%;
            border: none;
            overflow-y: auto;
            overflow-x: hidden;
        }</style> <iframe src="https://replit.com/@roxstar23/Ultimate-Chrome-2-1?embed=1" style="border: 0; width: 100%; height: 100%">Your browser doesn't support iFrames.</iframe>
`
