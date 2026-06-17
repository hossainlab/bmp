const fs = require('fs');

const htmlPath = 'public/deck-template/index.html';
let content = fs.readFileSync(htmlPath, 'utf-8');

const svg1 = `        <svg viewBox="0 0 940 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;margin:1em auto 0.5em;">
          <defs>
            <filter id="shadow-wf01" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.05"/>
            </filter>
            <marker id="arrow-wf01" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse">
              <path d="M 0 0 L 8 4 L 0 8 z" fill="#94a3b8"/>
            </marker>
          </defs>

          <!-- Connectors -->
          <path d="M 140 90 L 175 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf01)"/>
          <path d="M 300 90 L 335 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf01)"/>
          <path d="M 460 90 L 495 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf01)"/>
          <path d="M 620 90 L 655 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf01)"/>
          <path d="M 780 90 L 815 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf01)"/>

          <!-- Node 1: Raw FASTQ -->
          <g transform="translate(20, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf01)"/>
            <rect width="120" height="5" fill="#205E92" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 2 4 C 8 4 10 12 16 12 C 22 12 24 4 30 4" fill="none" stroke="#205E92" stroke-width="1.5" opacity="0.4"/>
              <path d="M 4 8 C 10 8 12 16 18 16 C 24 16 26 8 32 8" fill="none" stroke="#205E92" stroke-width="1.5" transform="translate(-4,-2)"/>
              <path d="M 6 12 C 12 12 14 20 20 20 C 26 20 28 12 34 12" fill="none" stroke="#205E92" stroke-width="1.5" opacity="0.4" transform="translate(-8,-4)"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Raw FASTQ</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">Sequencing Reads</text>
          </g>

          <!-- Node 2: QC & Trim -->
          <g transform="translate(180, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf01)"/>
            <rect width="120" height="5" fill="#205E92" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 2 2 L 10 12 V 20 L 14 18 V 12 L 22 2 Z" fill="#e0f2fe" stroke="#205E92" stroke-width="1.5" stroke-linejoin="round"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">QC &amp; Trim</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">FastQC / Trimmomatic</text>
          </g>

          <!-- Node 3: Alignment -->
          <g transform="translate(340, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf01)"/>
            <rect width="120" height="5" fill="#205E92" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <line x1="2" y1="4" x2="22" y2="4" stroke="#205E92" stroke-width="2" stroke-linecap="round"/>
              <rect x="4" y="8" width="6" height="3" rx="1" fill="#e0f2fe" stroke="#205E92" stroke-width="1.5"/>
              <rect x="12" y="14" width="8" height="3" rx="1" fill="#e0f2fe" stroke="#205E92" stroke-width="1.5"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Alignment</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">STAR / HISAT2</text>
          </g>

          <!-- Node 4: Quantification -->
          <g transform="translate(500, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf01)"/>
            <rect width="120" height="5" fill="#205E92" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <rect x="2" y="10" width="4" height="10" rx="1" fill="#e0f2fe" stroke="#205E92" stroke-width="1.5"/>
              <rect x="10" y="4" width="4" height="16" rx="1" fill="#e0f2fe" stroke="#205E92" stroke-width="1.5"/>
              <rect x="18" y="0" width="4" height="20" rx="1" fill="#205E92"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Quantification</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">featureCounts</text>
          </g>

          <!-- Node 5: Differential Exp -->
          <g transform="translate(660, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf01)"/>
            <rect width="120" height="5" fill="#205E92" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 2 10 Q 7 2 12 10 T 22 10" fill="none" stroke="#205E92" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="2" y1="10" x2="22" y2="10" stroke="#205E92" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2,2"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Diff. Expression</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">DESeq2 / edgeR</text>
          </g>

          <!-- Node 6: Pathway Analysis -->
          <g transform="translate(820, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf01)"/>
            <rect width="120" height="5" fill="#205E92" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <circle cx="12" cy="4" r="3" fill="#205E92"/>
              <circle cx="5" cy="16" r="3" fill="#205E92"/>
              <circle cx="19" cy="16" r="3" fill="#205E92"/>
              <line x1="12" y1="7" x2="6" y2="13" stroke="#205E92" stroke-width="1.5"/>
              <line x1="12" y1="7" x2="18" y2="13" stroke="#205E92" stroke-width="1.5"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Pathway Analysis</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">GSEA / clusterProfiler</text>
          </g>
        </svg>`;

const svg2 = `        <svg viewBox="0 0 940 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;margin:1em auto 0.5em;">
          <defs>
            <filter id="shadow-wf02" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.05"/>
            </filter>
            <marker id="arrow-wf02" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse">
              <path d="M 0 0 L 8 4 L 0 8 z" fill="#94a3b8"/>
            </marker>
          </defs>

          <!-- Connectors -->
          <path d="M 140 90 L 175 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf02)"/>
          <path d="M 300 90 L 335 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf02)"/>
          <path d="M 460 90 L 495 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf02)"/>
          <path d="M 620 90 L 655 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf02)"/>
          <path d="M 780 90 L 815 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf02)"/>

          <!-- Node 1: Raw FASTQ -->
          <g transform="translate(20, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf02)"/>
            <rect width="120" height="5" fill="#1976D2" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 2 4 C 8 4 10 12 16 12 C 22 12 24 4 30 4" fill="none" stroke="#1976D2" stroke-width="1.5" opacity="0.4"/>
              <path d="M 4 8 C 10 8 12 16 18 16 C 24 16 26 8 32 8" fill="none" stroke="#1976D2" stroke-width="1.5" transform="translate(-4,-2)"/>
              <path d="M 6 12 C 12 12 14 20 20 20 C 26 20 28 12 34 12" fill="none" stroke="#1976D2" stroke-width="1.5" opacity="0.4" transform="translate(-8,-4)"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Raw FASTQ</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">10X Library Reads</text>
          </g>

          <!-- Node 2: Cell Demux -->
          <g transform="translate(180, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf02)"/>
            <rect width="120" height="5" fill="#1976D2" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <rect x="2" y="2" width="20" height="16" rx="2" fill="none" stroke="#1976D2" stroke-width="1.5"/>
              <line x1="8" y1="2" x2="8" y2="18" stroke="#1976D2" stroke-width="1.5"/>
              <line x1="16" y1="2" x2="16" y2="18" stroke="#1976D2" stroke-width="1.5"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Cell Demux</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">Cell Ranger</text>
          </g>

          <!-- Node 3: QC & Filter -->
          <g transform="translate(340, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf02)"/>
            <rect width="120" height="5" fill="#1976D2" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 2 2 L 10 12 V 20 L 14 18 V 12 L 22 2 Z" fill="#e0f2fe" stroke="#1976D2" stroke-width="1.5" stroke-linejoin="round"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">QC &amp; Filter</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">Seurat / Scanpy</text>
          </g>

          <!-- Node 4: Norm & PCA -->
          <g transform="translate(500, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf02)"/>
            <rect width="120" height="5" fill="#1976D2" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <line x1="2" y1="18" x2="2" y2="2" stroke="#1976D2" stroke-width="1.5"/>
              <line x1="2" y1="18" x2="22" y2="18" stroke="#1976D2" stroke-width="1.5"/>
              <circle cx="6" cy="12" r="1.5" fill="#1976D2" opacity="0.9"/>
              <circle cx="12" cy="8" r="1.5" fill="#1976D2" opacity="0.75"/>
              <circle cx="18" cy="4" r="1.5" fill="#1976D2" opacity="0.6"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Norm &amp; PCA</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">Feature Selection</text>
          </g>

          <!-- Node 5: Clustering (UMAP) -->
          <g transform="translate(660, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf02)"/>
            <rect width="120" height="5" fill="#1976D2" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <circle cx="12" cy="10" r="10" fill="#e0f2fe" stroke="#1976D2" stroke-width="1.5"/>
              <circle cx="8" cy="8" r="2" fill="#1976D2"/>
              <circle cx="15" cy="7" r="1.5" fill="#1976D2"/>
              <circle cx="13" cy="13" r="2.5" fill="#1976D2"/>
              <circle cx="7" cy="13" r="1.5" fill="#1976D2"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Clustering</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">UMAP / Louvain</text>
          </g>

          <!-- Node 6: Annotation -->
          <g transform="translate(820, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf02)"/>
            <rect width="120" height="5" fill="#1976D2" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 4 4 H 20 M 4 10 H 14 M 4 16 H 18" fill="none" stroke="#1976D2" stroke-width="1.5" stroke-linecap="round"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Annotation</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">CellTypist / Markers</text>
          </g>
        </svg>`;

const svg3 = `        <svg viewBox="0 0 940 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;margin:1em auto 0.5em;">
          <defs>
            <filter id="shadow-wf03" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.05"/>
            </filter>
            <marker id="arrow-wf03" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse">
              <path d="M 0 0 L 8 4 L 0 8 z" fill="#94a3b8"/>
            </marker>
          </defs>

          <!-- Connectors -->
          <path d="M 140 90 L 175 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf03)"/>
          <path d="M 300 90 L 335 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf03)"/>
          <path d="M 460 90 L 495 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf03)"/>
          <path d="M 620 90 L 655 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf03)"/>
          <path d="M 780 90 L 815 90" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-wf03)"/>

          <!-- Node 1: Public Datasets -->
          <g transform="translate(20, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf03)"/>
            <rect width="120" height="5" fill="#059669" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <ellipse cx="12" cy="5" rx="8" ry="3" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
              <path d="M 4 5 V 15 C 4 16.65 8 18 12 18 C 16 18 20 16.65 20 15 V 5" fill="none" stroke="#059669" stroke-width="1.5"/>
              <path d="M 4 10 C 4 11.65 8 13 12 13 C 16 13 20 11.65 20 10" fill="none" stroke="#059669" stroke-width="1.5"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Public Datasets</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">GEO / SRA</text>
          </g>

          <!-- Node 2: Download & Parse -->
          <g transform="translate(180, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf03)"/>
            <rect width="120" height="5" fill="#059669" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 12 2 V 14 M 7 9 L 12 14 L 17 9" fill="none" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M 4 18 H 20" fill="none" stroke="#059669" stroke-width="1.5" stroke-linecap="round"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Download</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">GEOquery</text>
          </g>

          <!-- Node 3: Normalize -->
          <g transform="translate(340, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf03)"/>
            <rect width="120" height="5" fill="#059669" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <path d="M 2 16 Q 7 4 12 16 T 22 16" fill="none" stroke="#059669" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="2" y1="16" x2="22" y2="16" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2,2"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Normalize</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">limma / TMM</text>
          </g>

          <!-- Node 4: Batch Correction -->
          <g transform="translate(500, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf03)"/>
            <rect width="120" height="5" fill="#059669" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <rect x="3" y="4" width="6" height="12" rx="1" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
              <rect x="15" y="4" width="6" height="12" rx="1" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
              <line x1="10" y1="10" x2="14" y2="10" stroke="#059669" stroke-width="1.5"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Batch Correct</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">ComBat / sva</text>
          </g>

          <!-- Node 5: Pooled DEA -->
          <g transform="translate(660, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf03)"/>
            <rect width="120" height="5" fill="#059669" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <circle cx="6" cy="14" r="2" fill="#059669"/>
              <circle cx="12" cy="10" r="2" fill="#059669"/>
              <circle cx="18" cy="6" r="2" fill="#059669"/>
              <line x1="2" y1="18" x2="22" y2="2" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3,3"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Pooled DEA</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">DESeq2 / edgeR</text>
          </g>

          <!-- Node 6: Enrichment -->
          <g transform="translate(820, 50)">
            <rect width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadow-wf03)"/>
            <rect width="120" height="5" fill="#059669" rx="2.5" style="clip-path: inset(0 0 40px 0 round 8px);"/>
            <g transform="translate(48, 15)">
              <circle cx="12" cy="4" r="3" fill="#059669"/>
              <circle cx="5" cy="16" r="3" fill="#059669"/>
              <circle cx="19" cy="16" r="3" fill="#059669"/>
              <line x1="12" y1="7" x2="6" y2="13" stroke="#059669" stroke-width="1.5"/>
              <line x1="12" y1="7" x2="18" y2="13" stroke="#059669" stroke-width="1.5"/>
            </g>
            <text x="60" y="55" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#1e293b">Enrichment</text>
            <text x="60" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">GSEA / Pathways</text>
          </g>
        </svg>`;

content = content.replace(/<svg viewBox="0 0 940 140"[\s\S]*?<\/svg>/g, function(match, offset, string) {
    if (offset < 100000) { // arbitrary threshold to replace the 4 svgs sequentially
       if (match.includes('#205E92')) return svg1;
       if (match.includes('#1976D2')) return svg2;
       if (match.includes('#059669')) return svg3;
    }
    return match;
});

fs.writeFileSync(htmlPath, content, 'utf-8');
console.log('Replaced SVGs successfully');