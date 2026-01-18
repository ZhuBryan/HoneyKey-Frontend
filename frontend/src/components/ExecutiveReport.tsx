import { useEffect } from 'react';
import { ArrowLeft, TrendingUp, Shield, AlertTriangle, DollarSign, Globe, Clock, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { margin: "-50px" },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { margin: "-50px" }
};

export function ExecutiveReport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBEAD2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          {...fadeInUp}
          className="flex items-center justify-between mb-8"
        >
          <Link to="/reports" className="inline-flex items-center gap-2 text-[#E09B3D] hover:text-[#D4881C] transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Reports
          </Link>
          
          <Link 
            to="/report/engineer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#023D50] hover:bg-[#023D50] hover:text-white rounded-lg text-sm font-medium transition-all text-[#023D50]"
          >
            <FileCode className="w-4 h-4" />
            Switch to Technical Report
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ margin: "-50px" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-[#E09B3D]" />
            <h1 className="text-4xl font-bold text-[#023D50]">Executive Security Summary</h1>
          </div>
          <p className="text-[#456A77] text-lg">Report ID: RPT-2026-001 | Generated: January 17, 2026 at 14:45 UTC</p>
        </motion.div>

        {/* Critical Summary */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border-2 border-[#DC5037] rounded-2xl p-8 mb-8 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="w-12 h-12 bg-[#DC5037]/10 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <AlertTriangle className="w-6 h-6 text-[#DC5037]" />
            </motion.div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 text-[#023D50]">Security Alert: Active Threats Detected</h2>
              <p className="text-lg text-[#023D50] mb-4 leading-relaxed">
                HoneyKey detected <span className="text-[#DC5037] font-semibold">3 unauthorized access attempts</span> using 
                honeypot API keys in the last 24 hours. Two incidents (INC-2026-001, INC-2026-002) remain active and require immediate attention.
              </p>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
              >
                {[
                  { value: '2', label: 'Active Threats', color: 'text-[#DC5037]' },
                  { value: '82', label: 'Total Attempts', color: 'text-[#023D50]' },
                  { value: '3', label: 'Countries', color: 'text-[#023D50]' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-[#FBEAD2] rounded-lg p-4 border border-[#D4C4B0]"
                  >
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-[#456A77] mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Business Impact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 mb-8 border border-[#D4C4B0]"
        >
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-[#E09B3D]" />
            <h2 className="text-2xl font-bold text-[#023D50]">Business Impact Assessment</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#DC5037]">Risk Level: HIGH</h3>
              <p className="text-[#023D50] leading-relaxed">
                Without HoneyKey detection, these unauthorized access attempts could have resulted in:
              </p>
              <ul className="mt-3 space-y-2 text-[#023D50]">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC5037] mt-1">•</span>
                  <span><strong>Data Breach Costs:</strong> Average estimated at $4.35M per incident (IBM Security Report 2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC5037] mt-1">•</span>
                  <span><strong>Service Abuse:</strong> Potential unauthorized API usage resulting in unexpected infrastructure costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC5037] mt-1">•</span>
                  <span><strong>Reputation Damage:</strong> Loss of customer trust and potential regulatory penalties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC5037] mt-1">•</span>
                  <span><strong>Compliance Violations:</strong> Potential GDPR, SOC 2, or ISO 27001 violations</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[#D4C4B0] pt-6">
              <h3 className="text-lg font-semibold mb-2 text-[#16A085]">Value Delivered by HoneyKey</h3>
              <p className="text-[#023D50] leading-relaxed">
                Our honeypot system successfully detected these threats <span className="text-[#16A085] font-semibold">before any real API keys were compromised</span>, 
                allowing your security team to:
              </p>
              <ul className="mt-3 space-y-2 text-[#023D50]">
                <li className="flex items-start gap-2">
                  <span className="text-[#16A085] mt-1">✓</span>
                  <span>Identify attack vectors and strengthen defenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A085] mt-1">✓</span>
                  <span>Track threat actors across multiple platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A085] mt-1">✓</span>
                  <span>Gather intelligence on attacker tactics and infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A085] mt-1">✓</span>
                  <span>Demonstrate proactive security posture to stakeholders and auditors</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Threat Intelligence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 mb-8 border border-[#D4C4B0]"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-[#E09B3D]" />
            <h2 className="text-2xl font-bold text-[#023D50]">Threat Intelligence Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-[#023D50]">Geographic Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-[#023D50] font-medium">Russia</span>
                    <span className="text-[#456A77]">57% (47 attempts)</span>
                  </div>
                  <div className="h-3 bg-[#FBEAD2] rounded-full overflow-hidden">
                    <div className="h-full bg-[#DC5037]" style={{ width: '57%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-[#023D50] font-medium">China</span>
                    <span className="text-[#456A77]">28% (23 attempts)</span>
                  </div>
                  <div className="h-3 bg-[#FBEAD2] rounded-full overflow-hidden">
                    <div className="h-full bg-[#F39C12]" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-[#023D50] font-medium">Brazil</span>
                    <span className="text-[#456A77]">15% (12 attempts)</span>
                  </div>
                  <div className="h-3 bg-[#FBEAD2] rounded-full overflow-hidden">
                    <div className="h-full bg-[#16A085]" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-[#023D50]">Attack Timeline</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#456A77] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#023D50] font-medium mb-1">INC-2026-001 • 14:32 UTC</div>
                    <div className="text-[#456A77]">Moscow, Russia - 47 attempts</div>
                    <div className="text-[#DC5037] text-xs font-medium mt-1">HIGH SEVERITY</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#456A77] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#023D50] font-medium mb-1">INC-2026-002 • 12:18 UTC</div>
                    <div className="text-[#456A77]">Shanghai, China - 23 attempts</div>
                    <div className="text-[#F39C12] text-xs font-medium mt-1">MEDIUM SEVERITY</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#456A77] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#023D50] font-medium mb-1">INC-2026-003 • 09:45 UTC</div>
                    <div className="text-[#456A77]">São Paulo, Brazil - 12 attempts</div>
                    <div className="text-[#16A085] text-xs font-medium mt-1">RESOLVED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 border border-[#D4C4B0]"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-[#E09B3D]" />
            <h2 className="text-2xl font-bold text-[#023D50]">Strategic Recommendations</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#E09B3D]/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#E09B3D] font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-[#023D50]">Expand Honeypot Coverage</h3>
                <p className="text-[#456A77] text-sm leading-relaxed">
                  Deploy additional honeypot keys across GitHub repositories, internal documentation, and test environments 
                  to increase detection coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#E09B3D]/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#E09B3D] font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-[#023D50]">Enhance Security Training</h3>
                <p className="text-[#456A77] text-sm leading-relaxed">
                  Use these incidents as case studies for developer security awareness training to prevent accidental key exposure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#E09B3D]/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#E09B3D] font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-[#023D50]">Implement Automated Response</h3>
                <p className="text-[#456A77] text-sm leading-relaxed">
                  Integrate HoneyKey alerts with incident response workflows to automatically notify SOC team and initiate 
                  threat hunting procedures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#E09B3D]/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#E09B3D] font-semibold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-[#023D50]">Review API Key Management</h3>
                <p className="text-[#456A77] text-sm leading-relaxed">
                  Audit existing API key rotation policies and implement automated key rotation for all production services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-sm text-[#456A77]">
          <p>This report is generated by HoneyKey AI-powered analysis engine</p>
          <p className="mt-1">For technical details, please refer to the Engineer Report</p>
        </div>
      </div>
    </div>
  );
}