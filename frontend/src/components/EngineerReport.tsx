import { useEffect } from 'react';
import { ArrowLeft, Terminal, Code, Database, Network, Lock, Activity, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { margin: "-50px" }
};

export function EngineerReport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBEAD2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          {...fadeInUp}
          className="flex items-center justify-between mb-8"
        >
          <Link to="/reports" className="inline-flex items-center gap-2 text-[#E09B3D] hover:text-[#D4881C] transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Reports
          </Link>
          
          <Link 
            to="/report/executive"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#023D50] hover:bg-[#023D50] hover:text-white rounded-lg text-sm font-medium transition-all text-[#023D50]"
          >
            <Briefcase className="w-4 h-4" />
            Switch to Executive Summary
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-8 h-8 text-[#E09B3D]" />
            <h1 className="text-4xl font-bold text-[#023D50]">Technical Incident Report</h1>
          </div>
          <p className="text-[#456A77] text-lg">Security Operations Center - Detailed Analysis</p>
          <p className="text-[#456A77] text-sm mt-1">Report ID: RPT-2026-001 | Generated: 2026-01-17T14:45:00Z</p>
        </motion.div>

        {/* Incident Details */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ margin: "-50px" }}
          className="space-y-6"
        >
          {/* Incident 1 */}
          <div className="incident-card rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">INC-2026-001</h2>
                <span className="px-3 py-1 rounded-full text-xs font-medium uppercase bg-red-500/20 text-red-400 inline-block">
                  HIGH SEVERITY - ACTIVE
                </span>
              </div>
              <div className="text-right text-sm text-slate-400">
                <div>First Seen: 2026-01-17T14:32:15Z</div>
                <div>Last Activity: 2026-01-17T14:44:52Z</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  Network Intelligence
                </h3>
                <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Source IP:</span>
                    <span className="text-slate-200">185.220.101.47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ASN:</span>
                    <span className="text-slate-200">AS12389</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-200">Moscow, RU</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ISP:</span>
                    <span className="text-slate-200">VPS Hosting Provider</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Reverse DNS:</span>
                    <span className="text-slate-200">vps-47.example.net</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Honeypot Details
                </h3>
                <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Key ID:</span>
                    <span className="text-slate-200">hk_sk_proj_abc123</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Type:</span>
                    <span className="text-slate-200">OpenAI API</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Deployment:</span>
                    <span className="text-slate-200">GitHub Repo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Created:</span>
                    <span className="text-slate-200">2026-01-15T08:20:00Z</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Attempts:</span>
                    <span className="text-red-400 font-bold">47</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Attack Pattern Analysis
              </h3>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Request Rate Over Time</div>
                  <div className="flex items-end gap-1 h-24">
                    {[3, 5, 4, 8, 12, 15, 18, 22, 25, 20, 16, 10].map((height, i) => (
                      <div key={i} className="flex-1 bg-red-500/50 rounded-t" style={{ height: `${height * 3}%` }}></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>14:32</span>
                    <span>14:44</span>
                  </div>
                </div>
                <div className="text-sm text-slate-300">
                  <strong className="text-red-400">Pattern:</strong> Rapid escalation detected. 
                  Attacker started with probe requests (3/min) and ramped up to aggressive exploitation (25/min). 
                  Behavior consistent with automated scanning tools.
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                HTTP Request Analysis
              </h3>
              <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-slate-300">
{`POST /v1/chat/completions HTTP/1.1
Host: api.openai.com
Authorization: Bearer sk-proj-abc123...xyz789
Content-Type: application/json
User-Agent: python-requests/2.28.1

{
  "model": "gpt-4",
  "messages": [{"role": "user", "content": "test"}],
  "max_tokens": 1000
}`}
                </pre>
              </div>
              <div className="mt-3 text-sm space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">⚠</span>
                  <span className="text-slate-300">
                    <strong>Finding:</strong> User-Agent indicates Python requests library - common in automated scripts
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">⚠</span>
                  <span className="text-slate-300">
                    <strong>Finding:</strong> No Referer header - suggests direct API access, not web application
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">⚠</span>
                  <span className="text-slate-300">
                    <strong>Finding:</strong> Consistent request structure across all attempts - automated tool confirmed
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <Database className="w-4 h-4" />
                Threat Intelligence Correlation
              </h3>
              <div className="bg-slate-900/50 rounded-lg p-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <div>
                    <div className="text-slate-200 font-semibold">IP Reputation: MALICIOUS</div>
                    <div className="text-slate-400">Listed in 3 threat intelligence feeds (AbuseIPDB, ThreatFox, Blocklist.de)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <div>
                    <div className="text-slate-200 font-semibold">Known Attack Infrastructure</div>
                    <div className="text-slate-400">ASN associated with 127 previous security incidents in last 30 days</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">⚠</span>
                  <div>
                    <div className="text-slate-200 font-semibold">Similar Attack Pattern</div>
                    <div className="text-slate-400">Matches signature of "API-Scraper-2024" campaign tracked by security researchers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Incident 2 */}
          <div className="incident-card rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">INC-2026-002</h2>
                <span className="px-3 py-1 rounded-full text-xs font-medium uppercase bg-amber-500/20 text-amber-400 inline-block">
                  MEDIUM SEVERITY - ACTIVE
                </span>
              </div>
              <div className="text-right text-sm text-slate-400">
                <div>First Seen: 2026-01-17T12:18:03Z</div>
                <div>Last Activity: 2026-01-17T12:35:41Z</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  Network Intelligence
                </h3>
                <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Source IP:</span>
                    <span className="text-slate-200">103.75.201.12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ASN:</span>
                    <span className="text-slate-200">AS4134</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-200">Shanghai, CN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ISP:</span>
                    <span className="text-slate-200">China Telecom</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Reverse DNS:</span>
                    <span className="text-slate-200">None</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Honeypot Details
                </h3>
                <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Key ID:</span>
                    <span className="text-slate-200">hk_ghp_honeypot_def456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Type:</span>
                    <span className="text-slate-200">GitHub PAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Deployment:</span>
                    <span className="text-slate-200">Public Gist</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Created:</span>
                    <span className="text-slate-200">2026-01-16T11:45:00Z</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Attempts:</span>
                    <span className="text-amber-400 font-bold">23</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                GitHub API Request Sample
              </h3>
              <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-slate-300">
{`GET /user/repos HTTP/1.1
Host: api.github.com
Authorization: token ghp_honeypot...def456
Accept: application/vnd.github.v3+json
User-Agent: GitHubCLI/2.32.0`}
                </pre>
              </div>
              <div className="mt-3 text-sm text-slate-300">
                <strong className="text-amber-400">Analysis:</strong> Attacker attempted to enumerate repositories, 
                check permissions, and access organization data. Moderate sophistication - used legitimate GitHub CLI tool.
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <Database className="w-4 h-4" />
                Threat Assessment
              </h3>
              <div className="bg-slate-900/50 rounded-lg p-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">⚠</span>
                  <div>
                    <div className="text-slate-200 font-semibold">IP Reputation: SUSPICIOUS</div>
                    <div className="text-slate-400">No previous reports, but hosting provider commonly used for malicious activity</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <div>
                    <div className="text-slate-200 font-semibold">Activity Stopped After 23 Attempts</div>
                    <div className="text-slate-400">May indicate attacker realized key was non-functional or honeypot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Incident 3 */}
          <div className="incident-card rounded-xl p-8 opacity-60">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">INC-2026-003</h2>
                <span className="px-3 py-1 rounded-full text-xs font-medium uppercase bg-slate-500/20 text-slate-400 inline-block">
                  MEDIUM SEVERITY - RESOLVED
                </span>
              </div>
              <div className="text-right text-sm text-slate-400">
                <div>First Seen: 2026-01-17T09:45:22Z</div>
                <div>Resolved: 2026-01-17T09:58:10Z</div>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              <p><strong>Summary:</strong> 12 attempts from São Paulo, Brazil (198.51.100.89) using AWS honeypot key. 
              Low-sophistication attack. Activity ceased after automated rate limiting. No further action required.</p>
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <div className="incident-card rounded-xl p-8 mt-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-amber-500" />
            Technical Recommendations
          </h2>
          
          <div className="space-y-4 text-sm">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-500 mb-2">1. Immediate Actions</h3>
              <ul className="space-y-1 text-slate-300 ml-4">
                <li>• Block source IP 185.220.101.47 at firewall level</li>
                <li>• Add ASN12389 to monitoring watchlist for elevated scrutiny</li>
                <li>• Audit all legitimate API keys created between 2026-01-10 and 2026-01-17</li>
                <li>• Review GitHub repository access logs for unusual activity</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-500 mb-2">2. Detection Enhancement</h3>
              <ul className="space-y-1 text-slate-300 ml-4">
                <li>• Implement YARA rules for Python requests library detection in API traffic</li>
                <li>• Deploy additional honeypot keys in Confluence, Slack archives, and Docker registries</li>
                <li>• Enable enhanced logging for all API authentication attempts</li>
                <li>• Integrate with SIEM for correlation with other security events</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-500 mb-2">3. Code-Level Mitigations</h3>
              <div className="bg-slate-950 rounded p-3 mt-2 overflow-x-auto">
                <pre className="text-xs text-slate-300">
{`# Add to API key validation middleware
def check_honeypot_key(api_key: str) -> bool:
    """Check if key matches honeypot pattern"""
    if api_key.startswith('hk_') or is_honeypot_db(api_key):
        log_incident(api_key, request.remote_addr)
        send_alert_to_soc()
        return False
    return True`}
                </pre>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-500 mb-2">4. Long-term Strategy</h3>
              <ul className="space-y-1 text-slate-300 ml-4">
                <li>• Implement mandatory API key rotation policy (90 days maximum lifetime)</li>
                <li>• Deploy pre-commit hooks to prevent key commits to version control</li>
                <li>• Establish automated key scanning in CI/CD pipelines</li>
                <li>• Create developer training module on secure credential management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-900/30 border border-slate-800 rounded-lg p-4 text-sm text-slate-400">
          <p className="font-mono">
            <span className="text-amber-500">$</span> Report generated by HoneyKey Detection Engine v2.1.0
          </p>
          <p className="font-mono mt-1">
            <span className="text-amber-500">$</span> AI Analysis Model: GPT-4 Security Analyst Agent
          </p>
          <p className="font-mono mt-1">
            <span className="text-amber-500">$</span> For questions, contact: security-ops@honeykey.io
          </p>
        </div>
      </div>
    </div>
  );
}