// ----------------------------------------------------
// Terminal Command Line Widget Simulation
// ----------------------------------------------------
const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');
const terminalInputRow = document.getElementById('terminalInputRow');
const terminalWindow = document.querySelector('.terminal-window');

// Command history
const commandHistory = [];
let historyIndex = -1;

if (terminalWindow && terminalInput) {
  terminalWindow.addEventListener('click', () => {
    terminalInput.focus();
  });
}

if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value.trim();
      terminalInput.value = '';
      executeCommand(cmd);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });
}

// Run custom button command
function runCommand(commandText) {
  if (terminalInput) {
    terminalInput.value = '';
    executeCommand(commandText);
    terminalInput.focus();
  }
}

function appendLine(content, isCommand = false, isOutputHighlight = false) {
  if (!terminalBody || !terminalInputRow) return;
  const line = document.createElement('div');
  line.className = 'terminal-line';
  
  if (isCommand) {
    line.innerHTML = `<span class="terminal-prompt"><span class="user">visitor</span><span class="host">@shivamani-sec</span>:~$</span> <span class="terminal-command">${escapeHtml(content)}</span>`;
  } else {
    const outputSpan = document.createElement('span');
    outputSpan.className = 'terminal-output' + (isOutputHighlight ? ' highlight' : '');
    outputSpan.innerHTML = content;
    line.appendChild(outputSpan);
  }
  
  terminalBody.insertBefore(line, terminalInputRow);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Escapes special HTML characters to prevent XSS issues inside simulated printing
function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

function executeCommand(rawCmd) {
  const fullCmd = rawCmd.trim();
  appendLine(fullCmd, true);
  
  if (!fullCmd) return; // Exit early for empty inputs (standard shell behavior)
  
  commandHistory.push(fullCmd);
  historyIndex = commandHistory.length;

  const parts = fullCmd.toLowerCase().split(' ');
  const mainCmd = parts[0];

  setTimeout(() => {
    if (mainCmd === 'clear') {
      if (terminalBody) {
        const lines = terminalBody.querySelectorAll('.terminal-line');
        lines.forEach(line => line.remove());
      }
    } 
    else if (mainCmd === 'help') {
      appendLine(`Available Commands:
  - <b>cat about.md</b>    : Print details about Shivamani
  - <b>cat skills.txt</b>   : List core technical skills & methodologies
  - <b>nmap localhost</b>   : Scan local ports of this profile
  - <b>cat contact.json</b> : Show contact channels
  - <b>clear</b>            : Clear the screen`);
    } 
    else if (fullCmd === 'cat about.md') {
      appendLine(`<b>Shivamani Boddupally</b>
-------------------------
- M.Tech student in Artificial Intelligence and Data Science at NFSU Goa (Specialization in Cyber Security).
- Focusing on digital forensics, CCTV vision pipelines, mobile vulnerability tests, and local RAG models.`);
    } 
    else if (fullCmd === 'cat skills.txt') {
      appendLine(`<b>Technical Skills & Tools:</b>

<b>Core Domains:</b>
- Cybersecurity, Digital Forensics, Mobile Security, Network Security,
  CCTV Analytics, AI Surveillance Analysis, RAG Systems, Incident Response

<b>Programming & Development:</b>
- Python, SQL / MySQL, Bash, Linux, Git

<b>AI / Computer Vision:</b>
- YOLOv8, OpenCV, PyTorch, Streamlit, NumPy, Pandas

<b>Security & Forensics Tools:</b>
- Wireshark, Nmap, Burp Suite, MobSF, Frida, Objection, ADB, JADX, APKTool, QARK`);
    } 
    else if (fullCmd === 'cat contact.json') {
      appendLine(`{
  "name": "Shivamani Boddupally",
  "role": "Cybersecurity & AI M.Tech Student",
  "location": "Andhra Pradesh, India",
  "email": "shivamani1789@gmail.com",
  "github": "https://github.com/SHIVAMANI-git",
  "linkedin": "https://www.linkedin.com/in/shivamani-boddupally-41a4aa29b/"
}`);
    } 
    else if (fullCmd === 'nmap localhost') {
      appendLine(`Starting Nmap 7.92 ( https://nmap.org ) at 2026-05-26 22:40 IST
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00041s latency).
Not shown: 995 closed tcp ports
<b>PORT     STATE SERVICE      VERSION</b>
22/tcp   open  ssh          OpenSSH 9.2 (Security Audited)
80/tcp   open  http         Portfolio site (Simple HTTP Server)
443/tcp  open  https        SSL/TLS Service
5432/tcp open  postgresql   RAG Embeddings Vector Store
8501/tcp open  streamlit    CCTV Forensic Vision UI
-
Nmap done: 1 IP address (1 host up) scanned in 1.45 seconds`);
    } 
    else {
      appendLine(`sh: command not found: '${escapeHtml(fullCmd)}'. Type <b>help</b> for command details.`, false, false);
    }
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }, 100);
}

// Explicitly bind helper function to window object for inline HTML event handling
window.runCommand = runCommand;
