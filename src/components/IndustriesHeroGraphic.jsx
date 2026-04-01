import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Giữ nguyên data và lottie files của bạn
const industries = [
  { name: 'Contractors', lottie: '/repair-tools-red.json', angle: 270 },
  { name: 'HVAC', lottie: '/power-red.json', angle: 330 },
  { name: 'Real Estate', lottie: '/building-red.json', angle: 30 },
  { name: 'Law', lottie: '/law-red.json', angle: 90 },
  { name: 'Rehab', lottie: '/wheelchair-insurance-red.json', angle: 150 },
  { name: 'Plumbing', lottie: '/hourse-red.json', angle: 210 },
];

// Giữ nguyên component render Lottie của bạn
function LottieSmall({ src }) {
  const ref = useRef(null);
  useEffect(() => {
    let anim;
    import('lottie-web/build/player/lottie_light').then(lottie => {
      if (!ref.current) return;
      anim = lottie.default.loadAnimation({
        container: ref.current, renderer: 'svg',
        loop: true, autoplay: true, path: src,
      });
    }).catch(() => {});
    return () => { if (anim) anim.destroy(); };
  }, [src]);
  return <div ref={ref} style={{ width: 28, height: 28, flexShrink: 0 }} />;
}

export default function IndustriesHeroGraphic() {
  const radius = 160;
  const cx = 200;
  const cy = 200;

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: 420,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      transform: 'scale(0.9)', // Thu nhỏ một chút trên màn hình nhỏ
    }}>
      <div style={{
        position: 'relative',
        width: 400,
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        {/* SVG Rings and Lines */}
        <svg 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            width: '100%', height: '100%',
            pointerEvents: 'none',
            zIndex: 0
          }} 
          viewBox="0 0 400 400"
        >
          {/* Vòng tròn ngoài */}
          <motion.circle
            cx={cx} cy={cy} r={radius}
            stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 6" fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: 'center' }}
          />
          {/* Vòng tròn trong */}
          <motion.circle
            cx={cx} cy={cy} r={radius - 60}
            stroke="#F3F4F6" strokeWidth="1.5" strokeDasharray="4 4" fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: 'center' }}
          />

          {/* Các đường line kết nối và hạt dữ liệu chạy */}
          {industries.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x2 = cx + Math.cos(rad) * radius;
            const y2 = cy + Math.sin(rad) * radius;
            return (
              <g key={`connection-${i}`}>
                {/* Đường line mờ cố định */}
                <motion.line
                  x1={cx} y1={cy} x2={x2} y2={y2}
                  stroke="#E5E7EB" strokeWidth="1.5" opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                />
                
                {/* Đường đứt nét chạy */}
                <motion.line
                  x1={cx} y1={cy} x2={x2} y2={y2}
                  stroke="#E31837" strokeWidth="1.5" strokeDasharray="4 8"
                  initial={{ opacity: 0 }}
                  animate={{ strokeDashoffset: [0, -24], opacity: 0.5 }}
                  transition={{ 
                    strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 1, delay: 1.5 }
                  }}
                />

                {/* Hạt dữ liệu (Particle) di chuyển */}
                <motion.circle
                  r="3"
                  fill="#E31837"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(227,24,55,0.8))' }}
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [cx, x2],
                    cy: [cy, y2],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 + i * 0.3, ease: "easeInOut" }}
                />
              </g>
            );
          })}
        </svg>

        {/* Khối hình thoi trung tâm (Màu đỏ, chữ trắng) */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{
            position: 'absolute',
            zIndex: 20,
            width: 144, 
            height: 144,
            backgroundColor: '#E31837',
            borderRadius: 40, 
            boxShadow: '0 20px 50px rgba(227,24,55,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(-45deg)'
          }}>
            <span style={{
              fontSize: 36, 
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1
            }}>$5M+</span>
            <span style={{
              fontSize: 10,
              fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 0.9)',
              letterSpacing: '0.1em', 
              textTransform: 'uppercase',
              marginTop: 8,
              textAlign: 'center',
              lineHeight: 1.25
            }}>
              Service<br/>Biz
            </span>
          </div>
        </motion.div>

        {/* Các thẻ ngành nghề (Pills) */}
        {industries.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <motion.div
              key={node.name}
              style={{
                position: 'absolute',
                zIndex: 30,
                left: '50%',
                top: '50%',
              }}
              initial={{ x: '-50%', y: '-50%', opacity: 0, scale: 0.5 }}
              animate={{
                x: `calc(-50% + ${x}px)`,
                y: `calc(-50% + ${y}px)`,
                opacity: 1,
                scale: 1
              }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1, type: "spring", stiffness: 60 }}
            >
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12, 
                  backgroundColor: 'white',
                  padding: '10px 16px', 
                  borderRadius: 16, 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                  border: '1px solid #F3F4F6', 
                  whiteSpace: 'nowrap',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FECACA'; 
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(227,24,55,0.15)';
                  e.currentTarget.children[0].style.backgroundColor = '#FEE2E2'; 
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F3F4F6';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.06)';
                  e.currentTarget.children[0].style.backgroundColor = '#FEF2F2'; 
                }}
              >
                {/* Vòng tròn bọc Lottie */}
                <div style={{
                  width: 36, 
                  height: 36, 
                  borderRadius: '50%',
                  backgroundColor: '#FEF2F2', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease'
                }}>
                  <LottieSmall src={node.lottie} />
                </div>
                <span style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: '#1F2937' 
                }}>{node.name}</span>
              </motion.div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
