// ----------------------------------------------------
// Write-up & Project Modal Reader Logic & Data
// ----------------------------------------------------
const writeupModalOverlay = document.getElementById('writeupModalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
let lastFocusedElement = null;

const writeupsData = {
  1: {
    title: "APK Decompilation & Hooking via JADX & Frida",
    content: `
      <p>A high-level methodology overview of performing static and dynamic analysis of Android applications to audit security controls and cryptographic implementations.</p>
      
      <h3>Overview</h3>
      <ul>
        <li><b>Static Auditing:</b> Reviewing decompiled Java class files (using JADX-GUI) to inspect security logic and local data storage.</li>
        <li><b>Dynamic Hooking:</b> Utilizing runtime instrumentation frameworks (like Frida) to evaluate client-side logic integrity on authorized laboratory testing environments.</li>
      </ul>
      
      <blockquote><b>Notice:</b> The detailed technical step-by-step instructions, code snippets, and terminal execution commands have been moved to a private repository to prevent misuse. Access can be requested for security audits and educational verification via the contact form or email.</blockquote>
    `
  },
  2: {
    title: "Wireshark Log Analysis: Deciphering Web Attacks",
    content: `
      <p>A high-level case study on analyzing Packet Capture (PCAP) records to reconstruct web exploit scenarios and map threat behaviors.</p>
      
      <h3>Overview</h3>
      <ul>
        <li><b>Traffic Inspection:</b> Utilizing network capture tools (like Wireshark) to filter and isolate malicious web requests, such as SQL injections.</li>
        <li><b>Threat Flow Analysis:</b> Mapping IP addresses, tracking responses, and evaluating server logs to assess the scope of the attack vector.</li>
        <li><b>Remediation:</b> Implementing parameterized queries and deploying Web Application Firewalls (WAF) to mitigate identified risks.</li>
      </ul>
      
      <blockquote><b>Notice:</b> The detailed technical step-by-step instructions, code snippets, and terminal execution commands have been moved to a private repository to prevent misuse. Access can be requested for security audits and educational verification via the contact form or email.</blockquote>
    `
  },
  3: {
    title: "Securing RAG Systems Against Prompt Injection",
    content: `
      <p>An architectural analysis of security practices for preventing context escape vulnerabilities in LLM retrieval setups.</p>
      
      <h3>Overview</h3>
      <ul>
        <li><b>Threat Vectors:</b> Analyzing prompt injection payloads targeting vector retrieval queries in Retrieval-Augmented Generation (RAG) architectures.</li>
        <li><b>Mitigation Framework:</b> Deploying boundary query separators, input similarity checkers, and output validation rules to safeguard internal documents.</li>
      </ul>
      
      <blockquote><b>Notice:</b> The detailed technical step-by-step instructions, code snippets, and terminal execution commands have been moved to a private repository to prevent misuse. Access can be requested for security audits and educational verification via the contact form or email.</blockquote>
    `
  }
};

const projectsData = {
  'cctv': {
    title: "AI-Powered Video Forensic Evidence Analyzer",
    content: `
      <h3>Problem Statement</h3>
      <p>CCTV forensic analysis typically requires hours of manual video review by investigators. This is highly tedious, time-critical, and prone to human oversight. There is a critical need for an automated solution to detect and track entities while strictly preserving the chain-of-custody.</p>
      
      <h3>My Role</h3>
      <p>Lead Developer & Computer Vision Researcher. Architected the deep learning pipeline, implemented ByteTrack tracking configurations, integrated OpenCV/FFmpeg video rendering, and implemented SHA-256 evidence integrity hashing.</p>
      
      <h3>Tools & Technologies</h3>
      <p>Python • YOLOv8 • ByteTrack • OpenCV • Streamlit • FFmpeg • Pandas • NumPy</p>
      
      <h3>Architecture / Workflow</h3>
      <p>Surveillance video frames are processed by YOLOv8 for object detection. Detections are fed into ByteTrack to generate continuous trajectories. Results are indexed in Pandas for search/filter operations. Forensic highlights are cropped via FFmpeg, and SHA-256 integrity hashes are computed to generate the chain-of-custody log.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><b>Real-time Detection & Tracking:</b> Object detection using YOLOv8 coupled with state-of-the-art ByteTrack tracking.</li>
        <li><b>Vehicle Analytics:</b> Color estimation and attribute detection of target vehicles.</li>
        <li><b>Forensic Filtering:</b> Automatic highlight generation of short clips containing targets matching specific query parameters.</li>
        <li><b>Evidence Integrity:</b> Automatic generation of SHA-256 hashes of input and output files to preserve chain of custody.</li>
        <li><b>Evidence Export:</b> PDF/JSON report generation containing metadata and hashes.</li>
      </ul>

      <h3>Outcome / Metrics</h3>
      <ul>
        <li>Processed surveillance footage with <b>726 detections</b> across 90 analyzed frames.</li>
        <li>Successfully generated audited highlight outputs and full forensic integrity records.</li>
      </ul>

      <h3>Screenshots / Demo</h3>
      <div class="modal-image-container" style="margin: 12px 0;">
        <img src="assets/images/project_cctv.png" alt="AI-Powered Video Forensic Evidence Analyzer Dashboard" class="modal-project-img" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color);" />
      </div>

      <h3>GitHub Link</h3>
      <p><a href="https://github.com/SHIVAMANI-git/cyber_video_analyzer" target="_blank" rel="noopener noreferrer" class="modal-link">github.com/SHIVAMANI-git/cyber_video_analyzer</a></p>

      <h3>Responsible Usage Note</h3>
      <p>This software is developed strictly for forensic analysis, academic verification, and authorized incident response. It enforces cryptographically verifiable integrity logs to ensure accountability and prevent evidence tampering.</p>
    `
  },
  'graphrag': {
    title: "Fully Local GraphRAG Question Answering Framework",
    content: `
      <h3>Problem Statement</h3>
      <p>Standard RAG pipelines struggle to capture complex, multi-hop relationship connections in technical cybersecurity documents and manuals. Additionally, deploying cloud-hosted LLMs poses security concerns regarding private networks and data leakage.</p>
      
      <h3>My Role</h3>
      <p>Developer & Systems Integrator. Set up the local graph creation rules, integrated LightRAG double-level entity relationship models, and configured Ollama container hosting for offline query execution.</p>
      
      <h3>Tools & Technologies</h3>
      <p>Python • LightRAG • Ollama • Mistral 7B • Nomic Embeddings • NetworkX • Streamlit</p>
      
      <h3>Architecture / Workflow</h3>
      <p>Raw text files are parsed, and threat groups/vulnerabilities are identified. LightRAG creates a dual-layer index (local key-value stores + global relationship graphs) using NetworkX. Queries are matched against entity relationships using local Nomic Embeddings, and the synthesized context is fed into local Mistral 7B via Ollama to generate source-grounded answers.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><b>Fully Local Offline Execution:</b> 100% data privacy with zero third-party API dependencies.</li>
        <li><b>Dual-Layer Graph Indexing:</b> Integrates low-level entities and high-level relationships using LightRAG.</li>
        <li><b>Contextual Multi-Hop Reasoning:</b> Captures and resolves complex connections across security reference materials.</li>
        <li><b>Local LLM Orchestration:</b> Deploys Mistral 7B and embedding networks seamlessly via Ollama.</li>
      </ul>

      <h3>Outcome / Metrics</h3>
      <ul>
        <li>Constructed a graph index containing <b>1549 nodes</b> and <b>748 edges</b>.</li>
        <li>Successfully achieved <b>15/15 evaluations</b> on cybersecurity domain questions.</li>
        <li>Completely offline implementation ensuring zero risk of data leakage.</li>
      </ul>

      <h3>Screenshots / Demo</h3>
      <div class="modal-image-container" style="margin: 12px 0;">
        <img src="assets/images/project_graphrag.png" alt="Fully Local GraphRAG QA Dashboard" class="modal-project-img" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color);" />
      </div>

      <h3>GitHub Link</h3>
      <p><a href="https://github.com/SHIVAMANI-git/SocialEngineering_GraphRAG" target="_blank" rel="noopener noreferrer" class="modal-link">github.com/SHIVAMANI-git/SocialEngineering_GraphRAG</a></p>

      <h3>Responsible Usage Note</h3>
      <p>This framework is intended for academic research, education, and secure offline intelligence processing. Users are responsible for ensuring that indexed documents conform to local compliance regulations.</p>
    `
  },
  'mobile_sec': {
    title: "Mobile Security & Forensics Lab",
    content: `
      <h3>Problem Statement</h3>
      <p>Auditing mobile application security controls, identifying vulnerability footprints, and performing dynamic malware analysis requires a dedicated, secure, and isolated laboratory infrastructure utilizing actual physical mobile devices.</p>
      
      <h3>My Role</h3>
      <p>Lab Architect & Security Auditor. Constructed the hardware testing rig, configured root authority controls, implemented proxy certificates, and developed reverse-engineering scripts.</p>
      
      <h3>Tools & Technologies</h3>
      <p>ASUS TUF F16 • OnePlus 9R (Rooted) • MobSF • Frida • Objection • JADX • APKTool • Wireshark • QARK • ADB</p>
      
      <h3>Architecture / Workflow</h3>
      <p>APKs are decompiled using JADX/APKTool and scanned for misconfigurations using MobSF/QARK. Testing devices interface via Android Debug Bridge (ADB). Runtime calls are intercepted using Frida JavaScript payloads via the Objection shell wrapper, while cleartext HTTPS requests are inspected using proxy certificates and Wireshark.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><b>Isolated Testing Rig:</b> Custom workstation connected to root-access physical testing devices.</li>
        <li><b>Static Vulnerability Audits:</b> manifest reviews, permission audits, and code decompilation.</li>
        <li><b>Dynamic Instrumentation:</b> Runtime API hooking and SSL Pinning bypasses.</li>
        <li><b>Network Packet Decryption:</b> Cleartext traffic inspection and API endpoint mapping.</li>
      </ul>

      <h3>Outcome / Metrics</h3>
      <ul>
        <li>Established reproducible mobile forensic investigation and application auditing environments.</li>
        <li>Successfully mapped client-side checks and runtime vulnerabilities on target lab packages.</li>
      </ul>

      <h3>Screenshots / Demo</h3>
      <div class="modal-image-container" style="margin: 12px 0;">
        <img src="assets/images/project_mobile_sec.png" alt="Mobile Security & Forensics Lab Environment" class="modal-project-img" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color);" />
      </div>

      <h3>Responsible Usage Note</h3>
      <p>All dynamic analyses, hooking, and packet audits are executed solely on owned laboratory hardware and authorized targets. Unauthorized reverse-engineering of third-party systems is strictly prohibited.</p>
    `
  }
};

function openWriteup(id) {
  if (writeupModalOverlay && modalTitle && modalContent) {
    const data = writeupsData[id];
    if (data) {
      lastFocusedElement = document.activeElement;
      modalTitle.textContent = data.title;
      // WARNING: Only use innerHTML here for trusted static content. Sanitize if content becomes dynamic.
      modalContent.innerHTML = data.content;
      writeupModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Accessibility: Set focus to close button when modal opens
      const closeBtn = writeupModalOverlay.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.focus();
      }
    }
  }
}

function openProjectDetails(id) {
  if (writeupModalOverlay && modalTitle && modalContent) {
    const data = projectsData[id];
    if (data) {
      lastFocusedElement = document.activeElement;
      modalTitle.textContent = data.title;
      // WARNING: Only use innerHTML here for trusted static content. Sanitize if content becomes dynamic.
      modalContent.innerHTML = data.content;
      writeupModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Accessibility: Set focus to close button when modal opens
      const closeBtn = writeupModalOverlay.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.focus();
      }
    }
  }
}

function closeWriteup() {
  if (writeupModalOverlay && writeupModalOverlay.classList.contains('active')) {
    writeupModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Accessibility: Restore focus to active element trigger on close
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }
}

if (writeupModalOverlay) {
  writeupModalOverlay.addEventListener('click', (e) => {
    if (e.target === writeupModalOverlay) {
      closeWriteup();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWriteup();
  }
});

// Explicitly bind helper functions to window object for backwards compatibility
window.openWriteup = openWriteup;
window.openProjectDetails = openProjectDetails;
window.closeWriteup = closeWriteup;
