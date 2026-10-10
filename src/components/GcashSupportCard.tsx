import React, { useState, useRef } from 'react';
import { 
  Heart, 
  Download, 
  QrCode, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useFlowerTheme } from '../context/ThemeContext';

export const GcashSupportCard: React.FC = () => {
  const { theme } = useFlowerTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Exact account details from user's gcash.png
  const accountDetails = {
    name: 'HE**Y JA**S G.',
    mobile: '+63 991 033 ••••',
    userId: '••••••••••9V6SQG',
    feeNote: 'Transfer fees may apply.',
    // Standard InstaPay QR Ph format payload
    qrPayload: '00020101021228540013ph.com.gcash0112+63991033000002169V6SQG00000000005204599953036085802PH5913HE**Y JA**S G.6011Quezon City6304'
  };

  const handleDownloadQr = () => {
    // Render the SVG to a downloadable PNG canvas
    const svgElement = cardRef.current?.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // High resolution canvas for sharp download
    const scale = 3;
    canvas.width = 400 * scale;
    canvas.height = 540 * scale;

    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    img.onload = () => {
      if (!ctx) return;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw decorative header
      ctx.fillStyle = '#007DFE';
      ctx.font = `bold ${16 * scale}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('GCash · InstaPay QR', canvas.width / 2, 38 * scale);

      // Draw QR code
      const qrSize = 260 * scale;
      const qrX = (canvas.width - qrSize) / 2;
      const qrY = 55 * scale;
      ctx.drawImage(img, qrX, qrY, qrSize, qrSize);

      // Draw Transfer fees may apply
      ctx.fillStyle = '#6B7280';
      ctx.font = `${11 * scale}px sans-serif`;
      ctx.fillText('Transfer fees may apply.', canvas.width / 2, 345 * scale);

      // Draw Name
      ctx.fillStyle = '#007DFE';
      ctx.font = `bold ${18 * scale}px sans-serif`;
      ctx.fillText('HE**Y JA**S G.', canvas.width / 2, 385 * scale);

      // Draw Mobile
      ctx.fillStyle = '#4B5563';
      ctx.font = `${12 * scale}px sans-serif`;
      ctx.fillText('Mobile No.: +63 991 033 ••••', canvas.width / 2, 420 * scale);

      // Draw User ID
      ctx.fillStyle = '#6B7280';
      ctx.font = `${11 * scale}px sans-serif`;
      ctx.fillText('User ID: ••••••••••9V6SQG', canvas.width / 2, 448 * scale);

      // Trigger download
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'GCash_QR_HE**Y_JA**S_G.png';
      downloadLink.href = pngUrl;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobURL);
    };

    img.src = blobURL;
  };

  return (
    <div 
      className="rounded-3xl border transition-all duration-200 overflow-hidden shadow-2xs mb-8"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle
      }}
    >
      {/* Container Header Bar */}
      <div 
        className="px-5 sm:px-7 py-3.5 border-b flex items-center justify-between gap-3"
        style={{ borderColor: theme.borderSubtle }}
      >
        <div className="flex items-center gap-2.5">
          <div 
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-xs shrink-0"
            style={{ backgroundColor: theme.primary }}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-sm sm:text-base font-bold" style={{ color: theme.fontPrimary }}>
                Support the Creator
              </span>
              <span 
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                style={{ 
                  backgroundColor: theme.primaryLight,
                  color: theme.primary
                }}
              >
                GCash / InstaPay
              </span>
            </div>
            <p className="text-[11px] hidden sm:block" style={{ color: theme.fontMuted }}>
              Send a tip to support notes updates and keep Bloomie free
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-xl hover:opacity-75 transition-colors cursor-pointer text-xs flex items-center gap-1"
            style={{ color: theme.fontMuted }}
            title={isCollapsed ? 'Expand container' : 'Collapse container'}
          >
            <span className="text-[11px] font-medium hidden sm:inline">
              {isCollapsed ? 'Show QR' : 'Minimize'}
            </span>
            {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Container Body */}
      {!isCollapsed && (
        <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-200">
          {/* Left Column: Context & Quick Actions */}
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: theme.primary }}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fuel Study Modules & Reviewers</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug" style={{ color: theme.fontPrimary }}>
                Enjoying the study reviewer?
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.fontBody }}>
                Every cup of coffee helps create more high-yield exam modules, updated lecture diagrams, and clean flashcard decks. Scan the QR code using GCash, Maya, or any InstaPay-supported Philippine banking app.
              </p>
            </div>

            {/* Action Button: Save QR Image */}
            <div className="pt-1">
              <button
                onClick={handleDownloadQr}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: theme.primary,
                  color: '#FFFFFF'
                }}
                title="Download QR code image to upload into GCash scan feature"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save QR Image</span>
              </button>
            </div>
          </div>

          {/* Right Column: The Authentic GCash QR Card */}
          <div className="md:col-span-5 flex justify-center">
            <div 
              ref={cardRef}
              className="bg-white text-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md max-w-[270px] w-full text-center space-y-3 transition-transform hover:scale-[1.01]"
            >
              {/* QR Code Container with Center InstaPay Logo */}
              <div className="relative p-2 bg-white rounded-2xl flex items-center justify-center">
                <QRCodeSVG
                  value={accountDetails.qrPayload}
                  size={190}
                  level="H"
                  includeMargin={false}
                  imageSettings={{
                    src: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 48" width="100" height="48">
                        <rect width="100" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
                        <!-- insta -->
                        <text x="32" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="19" fill="#003B95" text-anchor="middle">insta</text>
                        <!-- Pay -->
                        <text x="73" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="20" fill="#DE1A22" text-anchor="middle">Pay</text>
                        <!-- Speed stripes -->
                        <rect x="10" y="32" width="46" height="3" fill="#003B95" rx="1.5" />
                        <rect x="10" y="38" width="34" height="3" fill="#DE1A22" rx="1.5" />
                      </svg>
                    `),
                    x: undefined,
                    y: undefined,
                    height: 34,
                    width: 70,
                    excavate: true
                  }}
                />
              </div>

              {/* Subtitle from gcash.png */}
              <p className="text-[11px] text-slate-500 font-medium">
                {accountDetails.feeNote}
              </p>

              {/* Verified Name in GCash Electric Blue */}
              <div>
                <h4 className="font-sans text-base sm:text-lg font-bold tracking-tight text-[#007DFE]">
                  {accountDetails.name}
                </h4>
              </div>

              {/* Identifiers from gcash.png */}
              <div className="space-y-0.5 pt-0.5 text-[11px] text-slate-500 font-mono">
                <p>
                  <span className="text-slate-400">Mobile No.:</span> {accountDetails.mobile}
                </p>
                <p className="text-[10px]">
                  <span className="text-slate-400">User ID:</span> {accountDetails.userId}
                </p>
              </div>

              {/* Scannable Indicator */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
                <QrCode className="w-3 h-3 text-[#007DFE]" />
                <span>Scan via GCash or Any Banking App</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
